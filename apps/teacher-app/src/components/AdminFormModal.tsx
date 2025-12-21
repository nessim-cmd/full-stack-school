"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { createAdmin, updateAdmin, deleteAdmin } from "@/lib/admin-actions";

type AdminFormModalProps = {
    type: "create" | "update" | "delete";
    data?: any;
    id?: string;
};

const AdminFormModal = ({ type, data, id }: AdminFormModalProps) => {
    const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
    const bgColor =
        type === "create"
            ? "bg-lamaYellow"
            : type === "update"
                ? "bg-lamaSky"
                : "bg-lamaPurple";

    const [open, setOpen] = useState(false);

    const Form = () => {
        const [state, formAction] = useFormState(
            type === "delete"
                ? deleteAdmin
                : type === "create"
                    ? createAdmin
                    : updateAdmin,
            {
                success: false,
                error: false,
            }
        );

        const router = useRouter();

        useEffect(() => {
            if (state.success) {
                toast(`Admin has been ${type === "create" ? "created" : type === "update" ? "updated" : "deleted"}!`);
                setOpen(false);
                router.refresh();
            }
        }, [state, router]);

        return type === "delete" && id ? (
            <form action={formAction} className="p-4 flex flex-col gap-4">
                <input type="text" name="id" value={id} hidden />
                <span className="text-center font-medium">
                    Are you sure you want to delete this admin?
                </span>
                <button className="bg-red-700 text-white py-2 px-4 rounded-md border-none w-max self-center">
                    Delete
                </button>
            </form>
        ) : (
            <form action={formAction} className="p-4 flex flex-col gap-4">
                <h1 className="text-xl font-semibold">
                    {type === "create" ? "Create a new admin" : "Update admin"}
                </h1>

                {data?.id && (
                    <input type="text" name="id" value={data.id} hidden />
                )}

                <div className="flex flex-col gap-2">
                    <label className="text-xs text-gray-500">Username</label>
                    <input
                        type="text"
                        name="username"
                        defaultValue={data?.username}
                        className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
                        required
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-xs text-gray-500">
                        Password {type === "update" && "(leave blank to keep current)"}
                    </label>
                    <input
                        type="password"
                        name="password"
                        className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
                        required={type === "create"}
                    />
                </div>

                {state.error && (
                    <span className="text-red-500">Something went wrong!</span>
                )}

                <button className="bg-blue-400 text-white p-2 rounded-md">
                    {type === "create" ? "Create" : "Update"}
                </button>
            </form>
        );
    };

    return (
        <>
            <button
                className={`${size} flex items-center justify-center rounded-full ${bgColor}`}
                onClick={() => setOpen(true)}
            >
                <Image src={`/${type}.png`} alt="" width={16} height={16} />
            </button>
            {open && (
                <div className="w-screen h-screen absolute left-0 top-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
                    <div className="bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
                        <Form />
                        <div
                            className="absolute top-4 right-4 cursor-pointer"
                            onClick={() => setOpen(false)}
                        >
                            <Image src="/close.png" alt="" width={14} height={14} />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default AdminFormModal;
