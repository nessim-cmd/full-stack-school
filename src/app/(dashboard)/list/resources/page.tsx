import FormContainer from "@/components/FormContainer";
import { getSignedUrl } from "@/lib/cloudinary";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import prisma from "@/lib/prisma";
import { ITEM_PER_PAGE } from "@/lib/settings";
import { Prisma, Resource } from "@prisma/client";
import Image from "next/image";
import { getSessionUser } from "@/lib/authUser";

type ResourceList = Resource & {
    lesson: { name: string } | null;
    assignment: { title: string } | null;
};

const ResourceListPage = async ({
    searchParams,
}: {
    searchParams: { [key: string]: string | undefined };
}) => {
    const session = await getSessionUser();
    const role = session?.role;
    const currentUserId = session?.userId;

    const columns = [
        {
            header: "Title",
            accessor: "title",
        },
        {
            header: "Type",
            accessor: "type",
            className: "hidden md:table-cell",
        },
        {
            header: "Related To",
            accessor: "related",
            className: "hidden md:table-cell",
        },
        {
            header: "Date",
            accessor: "createdAt",
            className: "hidden md:table-cell",
        },
        {
            header: "Link",
            accessor: "link",
        },
        ...(role === "admin" || role === "teacher"
            ? [
                {
                    header: "Actions",
                    accessor: "action",
                },
            ]
            : []),
    ];

    const renderRow = (item: ResourceList) => (
        <tr
            key={item.id}
            className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
        >
            <td className="flex items-center gap-4 p-4">{item.title}</td>
            <td className="hidden md:table-cell">
                {item.lesson ? "Lesson" : item.assignment ? "Assignment" : "General"}
            </td>
            <td className="hidden md:table-cell">
                {item.lesson?.name || item.assignment?.title || "-"}
            </td>
            <td className="hidden md:table-cell">
                {new Intl.DateTimeFormat("en-US").format(item.createdAt)}
            </td>
            <td>
                <a
                    href={getSignedUrl(item.url)}
                    target="_blank"
                    className="text-blue-500 hover:underline"
                >
                    Download/View
                </a>
            </td>
            <td>
                <div className="flex items-center gap-2">
                    {(role === "admin" || role === "teacher") && (
                        <>
                            <FormContainer table="resource" type="delete" id={item.id} />
                        </>
                    )}
                </div>
            </td>
        </tr>
    );

    const { page, ...queryParams } = searchParams;

    const p = page ? parseInt(page) : 1;

    // URL PARAMS CONDITION

    const query: Prisma.ResourceWhereInput = {
        schoolId: session!.schoolId,
    };

    if (queryParams) {
        for (const [key, value] of Object.entries(queryParams)) {
            if (value !== undefined) {
                switch (key) {
                    case "search":
                        query.title = { contains: value, mode: "insensitive" };
                        break;
                    default:
                        break;
                }
            }
        }
    }

    // ROLE CONDITIONS
    // Teachers: see their own uploads (via lesson/assignment teacherId)
    // Students/Parents: see resources for their class/grade/subjects
    // Admin: see all

    switch (role) {
        case "admin":
            break;
        case "teacher":
            query.OR = [
                { lesson: { teacherId: currentUserId! } },
                { assignment: { lesson: { teacherId: currentUserId! } } },
            ];
            break;
        case "student":
            // Complex filtering: resources related to student's class or subjects
            // For simplicity, let's show all resources for now, or filter by class if possible.
            // Ideally we'd filter by:
            // 1. Resources linked to lessons of the student's class
            // 2. Resources linked to assignments of the student's class
            query.OR = [
                { lesson: { class: { students: { some: { id: currentUserId! } } } } },
                { assignment: { lesson: { class: { students: { some: { id: currentUserId! } } } } } },
            ];
            break;
        case "parent":
            query.OR = [
                { lesson: { class: { students: { some: { parentId: currentUserId! } } } } },
                { assignment: { lesson: { class: { students: { some: { parentId: currentUserId! } } } } } },
            ];
            break;
        default:
            break;
    }

    const [data, count] = await prisma.$transaction([
        prisma.resource.findMany({
            where: query,
            include: {
                lesson: { select: { name: true } },
                assignment: { select: { title: true } },
            },
            take: ITEM_PER_PAGE,
            skip: ITEM_PER_PAGE * (p - 1),
            orderBy: { createdAt: "desc" },
        }),
        prisma.resource.count({ where: query }),
    ]);

    return (
        <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
            {/* TOP */}
            <div className="flex items-center justify-between">
                <h1 className="hidden md:block text-lg font-semibold">Support Cours</h1>
                <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                    <TableSearch />
                    <div className="flex items-center gap-4 self-end">
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
                            <Image src="/filter.png" alt="" width={14} height={14} />
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
                            <Image src="/sort.png" alt="" width={14} height={14} />
                        </button>
                        {(role === "admin" || role === "teacher") && (
                            <FormContainer table="resource" type="create" />
                        )}
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

export default ResourceListPage;
