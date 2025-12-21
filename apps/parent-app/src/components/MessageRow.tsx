"use client";

import { Message } from "@prisma/client";
import { useState } from "react";
import ViewMessageModal from "./ViewMessageModal";
import { format } from "date-fns";
import Image from "next/image";

const MessageRow = ({
    item,
    currentUserId,
    currentRole,
    category,
    showDelete
}: {
    item: Message & { recipients: { recipientName: string; recipientRole: string }[] },
    currentUserId: string,
    currentRole: string,
    category: string,
    showDelete: boolean
}) => {
    const [viewOpen, setViewOpen] = useState(false);

    // Determine what to display in the second column
    let displayName = item.senderName;
    let displayRole = item.senderRole;

    if (category === "sent") {
        if (item.recipients && item.recipients.length > 0) {
            const names = item.recipients.map(r => r.recipientName).join(", ");
            displayName = names.length > 30 ? names.substring(0, 30) + "..." : names;

            const roles = Array.from(new Set(item.recipients.map(r => r.recipientRole))).join(", ");
            displayRole = roles;
        } else {
            displayName = "Unknown";
            displayRole = "";
        }
    }

    return (
        <>
            <tr
                key={item.id}
                className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight cursor-pointer"
                onClick={() => setViewOpen(true)}
            >
                <td className="flex items-center gap-4 p-4">
                    <div className="flex flex-col">
                        <h3 className="font-semibold">{item.subject}</h3>
                        <p className="text-xs text-gray-500">{item.content.substring(0, 50)}...</p>
                    </div>
                </td>
                <td className="hidden md:table-cell">
                    <div className="flex flex-col">
                        <span className="font-semibold">{displayName}</span>
                        {displayRole && <span className="text-xs text-gray-500 capitalize">{displayRole}</span>}
                    </div>
                </td>
                <td className="hidden md:table-cell">{format(new Date(item.createdAt), "PPP p")}</td>
                <td>
                    <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                        {showDelete && (
                            <form action={`/api/messages/${item.id}/delete`} method="POST">
                                <button
                                    type="submit"
                                    className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple"
                                >
                                    <Image src="/delete.png" alt="" width={16} height={16} />
                                </button>
                            </form>
                        )}
                    </div>
                </td>
            </tr>
            {viewOpen && <ViewMessageModal message={item} setOpen={setViewOpen} />}
        </>
    );
};

export default MessageRow;
