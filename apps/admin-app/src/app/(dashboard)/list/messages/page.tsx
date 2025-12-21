import FormContainer from "@/components/FormContainer";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import prisma from "@/lib/prisma";
import { ITEM_PER_PAGE } from "@/lib/settings";
import { Message, Prisma } from "@prisma/client";
import Image from "next/image";
import { requireSession } from "@/lib/authUser";
import { format } from "date-fns";
import Link from "next/link";
import MessageRow from "@/components/MessageRow";

const MessageListPage = async ({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | undefined }>;
}) => {
    const session = await requireSession();
    const currentUserId = session.userId;
    const currentRole = session.role;

    const params = await searchParams;
    const { page, cat, ...queryParams } = params;
    const p = page ? parseInt(page) : 1;
    const category = cat || "inbox"; // "inbox" or "sent"

    // URL PARAMS CONDITION
    const query: Prisma.MessageWhereInput = {
        schoolId: session.schoolId,
    };

    if (queryParams) {
        for (const [key, value] of Object.entries(queryParams)) {
            if (value !== undefined) {
                switch (key) {
                    case "search":
                        query.OR = [
                            { subject: { contains: value, mode: "insensitive" } },
                            { senderName: { contains: value, mode: "insensitive" } },
                            {
                                recipients: {
                                    some: {
                                        recipientName: { contains: value, mode: "insensitive" }
                                    }
                                }
                            },
                        ];
                        break;
                    default:
                        break;
                }
            }
        }
    }

    if (currentRole) {
        if (category === "sent") {
            // SENT MESSAGES
            const sentCondition = { senderId: currentUserId };
            if (query.OR) {
                query.AND = [sentCondition];
            } else {
                query.senderId = currentUserId;
            }
        } else {
            // INBOX MESSAGES
            const inboxCondition = {
                recipients: {
                    some: {
                        recipientId: currentUserId
                    }
                }
            };
            if (query.OR) {
                query.AND = [inboxCondition] as any;
            } else {
                (query as any).recipients = inboxCondition.recipients;
            }
        }
    }

    const [data, count] = await prisma.$transaction([
        prisma.message.findMany({
            where: query as any,
            include: {
                recipients: true,
            },
            take: ITEM_PER_PAGE,
            skip: ITEM_PER_PAGE * (p - 1),
            orderBy: { createdAt: "desc" },
        }),
        prisma.message.count({ where: query as any }),
    ]);

    const columns = [
        {
            header: "Subject",
            accessor: "subject",
        },
        {
            header: category === "sent" ? "To" : "From",
            accessor: category === "sent" ? "recipients" : "senderName",
            className: "hidden md:table-cell",
        },
        {
            header: "Date",
            accessor: "createdAt",
            className: "hidden md:table-cell",
        },
        {
            header: "Actions",
            accessor: "action",
        },
    ];

    const renderRow = (item: Message & { recipients: any[] }) => {
        const showDelete = currentRole === "admin" || item.senderId === currentUserId;
        return (
            <MessageRow
                key={item.id}
                item={item}
                currentUserId={currentUserId!}
                currentRole={currentRole!}
                category={category}
                showDelete={showDelete}
            />
        );
    };

    return (
        <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
            {/* TOP */}
            <div className="flex items-center justify-between">
                <h1 className="hidden md:block text-lg font-semibold">Messages</h1>
                <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                    <TableSearch />
                    <div className="flex items-center gap-4 self-end">
                        <Link href="/list/messages?cat=inbox" className={`px-4 py-2 rounded-md text-sm ${category === 'inbox' ? 'bg-lamaSky text-white' : 'bg-gray-100'}`}>
                            Inbox
                        </Link>
                        <Link href="/list/messages?cat=sent" className={`px-4 py-2 rounded-md text-sm ${category === 'sent' ? 'bg-lamaSky text-white' : 'bg-gray-100'}`}>
                            Sent
                        </Link>

                        <FormContainer table="message" type="create" />
                    </div>
                </div>
            </div>
            {/* LIST */}
            <Table columns={columns} renderRow={renderRow} data={data} />
            {/* PAGINATION */}
            <Pagination page={p} count={count} />
        </div>
    );
};

export default MessageListPage;
