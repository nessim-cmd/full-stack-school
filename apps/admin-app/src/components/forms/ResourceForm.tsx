"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import InputField from "../InputField";
import { resourceSchema, ResourceSchema } from "@/lib/formValidationSchemas";
import { createResource } from "@/lib/actions";
import { useFormState } from "react-dom";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";

const ResourceForm = ({
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
    } = useForm<ResourceSchema>({
        resolver: zodResolver(resourceSchema),
    });

    const [url, setUrl] = useState<string>("");

    const [state, formAction] = useFormState(createResource, {
        success: false,
        error: false,
    });

    const onSubmit = handleSubmit((data) => {
        formAction(data);
    });

    const router = useRouter();

    useEffect(() => {
        if (state.success) {
            toast(`Resource has been created!`);
            setOpen(false);
            router.refresh();
        }
    }, [state, router, setOpen]);

    const { lessons } = relatedData || {};

    return (
        <form className="flex flex-col gap-8" onSubmit={onSubmit}>
            <h1 className="text-xl font-semibold">
                Upload New Resource
            </h1>

            <div className="flex justify-between flex-wrap gap-4">
                <InputField
                    label="Title"
                    name="title"
                    defaultValue={data?.title}
                    register={register}
                    error={errors?.title}
                />

                <div className="flex flex-col gap-2 w-full md:w-1/4">
                    <label className="text-xs text-gray-500">Lesson</label>
                    <select
                        className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
                        {...register("lessonId")}
                        defaultValue={data?.lessonId}
                    >
                        <option value="">Select a lesson</option>
                        {lessons?.map((lesson: { id: number; name: string }) => (
                            <option value={lesson.id} key={lesson.id}>
                                {lesson.name}
                            </option>
                        ))}
                    </select>
                    {errors.lessonId?.message && (
                        <p className="text-xs text-red-400">
                            {errors.lessonId.message.toString()}
                        </p>
                    )}
                </div>

                <div className="flex flex-col gap-2 w-full md:w-1/4">
                    <label className="text-xs text-gray-500">Assignment (Optional)</label>
                    <select
                        className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
                        {...register("assignmentId")}
                        defaultValue={data?.assignmentId}
                    >
                        <option value="">Select an assignment</option>
                        {relatedData?.assignments?.map((assignment: { id: number; title: string }) => (
                            <option value={assignment.id} key={assignment.id}>
                                {assignment.title}
                            </option>
                        ))}
                    </select>
                    {errors.assignmentId?.message && (
                        <p className="text-xs text-red-400">
                            {errors.assignmentId.message.toString()}
                        </p>
                    )}
                </div>

                <div className="w-full">
                    <CldUploadWidget
                        uploadPreset="school"
                        options={{
                            sources: ["local", "url", "camera"],
                            resourceType: "raw",
                            clientAllowedFormats: ["image", "pdf", "doc", "docx", "xls", "xlsx", "ppt", "pptx", "txt"],
                        }}
                        onSuccess={(result: any, { widget }) => {
                            setUrl(result.info.secure_url);
                            setValue("url", result.info.secure_url);
                            widget.close();
                            toast.success("File uploaded successfully!");
                        }}
                    >
                        {({ open }) => {
                            return (
                                <div
                                    className="text-xs text-gray-500 flex items-center gap-2 cursor-pointer border p-2 rounded-md w-max"
                                    onClick={() => open()}
                                >
                                    <Image src="/upload.png" alt="" width={28} height={28} />
                                    <span>{url ? "File Uploaded" : "Upload File (PDF, Word, Image)"}</span>
                                </div>
                            );
                        }}
                    </CldUploadWidget>
                    {errors.url?.message && (
                        <p className="text-xs text-red-400">
                            {errors.url.message.toString()}
                        </p>
                    )}
                    {url && <p className="text-xs text-green-500 mt-1">File ready to submit</p>}
                </div>

                <input type="hidden" {...register("url")} />

            </div>
            {state.error && (
                <span className="text-red-500">
                    Something went wrong!
                </span>
            )}
            <button className="bg-blue-400 text-white p-2 rounded-md">
                Upload
            </button>
        </form>
    );
};

export default ResourceForm;
