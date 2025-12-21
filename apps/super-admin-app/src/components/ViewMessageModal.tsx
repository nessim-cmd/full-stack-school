"use client";

import { Message } from "@prisma/client";
import { format } from "date-fns";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

const ViewMessageModal = ({
    message,
    setOpen,
}: {
    message: Message & { recipients?: { recipientName: string; recipientRole: string }[] };
    setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
    const toDisplay = message.recipients && message.recipients.length > 0
        ? message.recipients.map(r => `${r.recipientName} (${r.recipientRole})`).join(", ")
        : "Unknown";

    return (
        <div className="w-screen h-screen absolute left-0 top-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] flex flex-col gap-4">
                <div
                    className="absolute top-4 right-4 cursor-pointer"
                    onClick={() => setOpen(false)}
                >
                    <Image src="/close.png" alt="" width={14} height={14} />
                </div>

                <h1 className="text-xl font-bold border-b pb-2">{message.subject}</h1>

                <div className="flex justify-between text-sm text-gray-500">
                    <div className="flex flex-col">
                        <span className="font-semibold text-gray-700">From: {message.senderName} <span className="text-xs font-normal">({message.senderRole})</span></span>
                        <span className="font-semibold text-gray-700">To: {toDisplay}</span>
                    </div>
                    <span>{format(new Date(message.createdAt), "PPP p")}</span>
                </div>

                <div className="bg-gray-50 p-4 rounded-md min-h-[200px] whitespace-pre-wrap text-sm text-gray-800">
                    {message.content}
                </div>

                <div className="flex justify-end">
                    <button
                        className="bg-lamaSky text-white px-4 py-2 rounded-md"
                        onClick={() => setOpen(false)}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ViewMessageModal;
