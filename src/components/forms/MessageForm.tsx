"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import InputField from "../InputField";
import { messageSchema, MessageSchema } from "@/lib/formValidationSchemas";
import { createMessage } from "@/lib/actions";
import { useFormState } from "react-dom";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const MessageForm = ({
    type,
    data,
    setOpen,
    relatedData,
}: {
    type: "create" | "update";
    data?: any;
    setOpen: Dispatch<SetStateAction<boolean>>;
    relatedData?: any;
}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm<MessageSchema>({
        resolver: zodResolver(messageSchema),
        defaultValues: {
            recipients: [],
        }
    });

    const [state, formAction] = useFormState(createMessage, {
        success: false,
        error: false,
        message: "",
    });

    const [selectedRecipients, setSelectedRecipients] = useState<{ id: string; role: "admin" | "teacher" | "student" | "parent"; name: string }[]>([]);
    const [currentRole, setCurrentRole] = useState<string>("student");
    const [currentPersonId, setCurrentPersonId] = useState<string>("");

    const router = useRouter();

    useEffect(() => {
        if (state.success) {
            toast(`Message sent!`);
            setOpen(false);
            router.refresh();
        }
    }, [state, router, setOpen]);

    useEffect(() => {
        setValue("recipients", selectedRecipients);
    }, [selectedRecipients, setValue]);

    const onSubmit = handleSubmit((data) => {
        // Since we are using useFormState with a server action that expects MessageSchema (or compatible object),
        // we can pass the data directly. The recipients are already in data because of setValue.
        formAction(data);
    });

    const handleAddRecipient = () => {
        if (!currentPersonId) return;

        const list = relatedData?.[currentRole + "s"] || [];
        const person = list.find((p: any) => p.id === currentPersonId);

        if (person) {
            const exists = selectedRecipients.find(r => r.id === person.id);
            if (!exists) {
                setSelectedRecipients(prev => [...prev, {
                    id: person.id,
                    role: currentRole as "admin" | "teacher" | "student" | "parent",
                    name: `${person.name} ${person.surname}`
                }]);
            }
            setCurrentPersonId("");
        }
    };

    const handleRemoveRecipient = (id: string) => {
        setSelectedRecipients(prev => prev.filter(r => r.id !== id));
    };

    // Filter potential recipients based on selected role
    const availableRecipients = relatedData?.[currentRole + "s"] || [];

    return (
        <form className="flex flex-col gap-8" onSubmit={onSubmit}>
            <h1 className="text-xl font-semibold">Create Message</h1>

            <div className="flex flex-col gap-4">
                <InputField
                    label="Subject"
                    name="subject"
                    defaultValue={data?.subject}
                    register={register}
                    error={errors?.subject}
                />

                <div className="flex flex-col gap-2 w-full">
                    <label className="text-xs text-gray-500">Message</label>
                    <textarea
                        className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
                        rows={4}
                        {...register("content")}
                    />
                    {errors.content?.message && (
                        <p className="text-xs text-red-400">{errors.content.message.toString()}</p>
                    )}
                </div>

                {/* Recipient Selection Section */}
                <div className="p-4 border rounded-md bg-gray-50">
                    <h3 className="text-sm font-medium text-gray-700 mb-3">Add Recipients</h3>
                    <div className="flex gap-2 flex-wrap items-end">
                        <div className="flex flex-col gap-1 w-full md:w-1/3">
                            <label className="text-xs text-gray-500">Role</label>
                            <select
                                className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm"
                                value={currentRole}
                                onChange={(e) => {
                                    setCurrentRole(e.target.value);
                                    setCurrentPersonId("");
                                }}
                            >
                                <option value="student">Student</option>
                                <option value="teacher">Teacher</option>
                                <option value="parent">Parent</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div>

                        <div className="flex flex-col gap-1 w-full md:w-1/3">
                            <label className="text-xs text-gray-500">Person</label>
                            <select
                                className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm"
                                value={currentPersonId}
                                onChange={(e) => setCurrentPersonId(e.target.value)}
                            >
                                <option value="">Select Person</option>
                                {availableRecipients.map((item: any) => (
                                    <option value={item.id} key={item.id}>
                                        {item.name} {item.surname} {item.username ? `(${item.username})` : ""}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <button
                            type="button"
                            onClick={handleAddRecipient}
                            className="bg-green-500 text-white p-2 rounded-md text-sm hover:bg-green-600 h-10"
                            disabled={!currentPersonId}
                        >
                            Add
                        </button>
                    </div>

                    {/* Selected Recipients List */}
                    <div className="mt-4 flex flex-wrap gap-2">
                        {selectedRecipients.map((recipient) => (
                            <div key={recipient.id} className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full flex items-center gap-2">
                                <span>{recipient.role}: <strong>{recipient.name}</strong></span>
                                <button
                                    type="button"
                                    onClick={() => handleRemoveRecipient(recipient.id)}
                                    className="text-blue-600 hover:text-blue-800 font-bold"
                                >
                                    ×
                                </button>
                            </div>
                        ))}
                        {selectedRecipients.length === 0 && (
                            <span className="text-xs text-gray-400 italic">No recipients selected</span>
                        )}
                    </div>
                    {errors.recipients?.message && (
                        <p className="text-xs text-red-400 mt-2">{errors.recipients.message.toString()}</p>
                    )}
                </div>

            </div>
            {state.error && (
                <span className="text-red-500">{state.message || "Something went wrong!"}</span>
            )}
            <button className="bg-blue-400 text-white p-2 rounded-md">
                {type === "create" ? "Send" : "Update"}
            </button>
        </form>
    );
};

export default MessageForm;
