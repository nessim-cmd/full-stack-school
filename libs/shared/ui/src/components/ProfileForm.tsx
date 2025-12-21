"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { updateProfile } from "@/lib/profile-actions";

type ProfileFormProps = {
    userData: any;
    role: string;
};

const ProfileForm = ({ userData, role }: ProfileFormProps) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [profileImage, setProfileImage] = useState(userData.img || "/noAvatar.png");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");
        setSuccess("");

        const formData = new FormData(e.currentTarget);
        formData.append("id", userData.id);
        formData.append("role", role);
        formData.append("img", profileImage);

        const result = await updateProfile(formData);

        if (result.success) {
            setSuccess("Profile updated successfully!");
            setTimeout(() => {
                router.refresh();
            }, 1500);
        } else {
            setError(result.message || "Failed to update profile");
        }

        setIsLoading(false);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Upload Profile Image */}
            <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Profile Picture</label>
                <div className="flex items-center gap-4">
                    <Image
                        src={profileImage}
                        alt="Profile"
                        width={80}
                        height={80}
                        className="w-20 h-20 rounded-full object-cover"
                    />
                    <CldUploadWidget
                        uploadPreset="school"
                        onSuccess={(result: any) => {
                            setProfileImage(result.info.secure_url);
                        }}
                    >
                        {({ open }) => (
                            <button
                                type="button"
                                onClick={() => open()}
                                className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-600"
                            >
                                Upload New Photo
                            </button>
                        )}
                    </CldUploadWidget>
                </div>
            </div>

            {/* Username */}
            <div className="flex flex-col gap-2">
                <label htmlFor="username" className="text-sm font-medium">
                    Username
                </label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    defaultValue={userData.username}
                    className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
                    required
                />
            </div>

            {/* Current Password (for verification) */}
            <div className="flex flex-col gap-2">
                <label htmlFor="currentPassword" className="text-sm font-medium">
                    Current Password <span className="text-gray-400">(required to make changes)</span>
                </label>
                <input
                    type="password"
                    id="currentPassword"
                    name="currentPassword"
                    className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
                    required
                />
            </div>

            {/* New Password (optional) */}
            <div className="flex flex-col gap-2">
                <label htmlFor="newPassword" className="text-sm font-medium">
                    New Password <span className="text-gray-400">(leave blank to keep current)</span>
                </label>
                <input
                    type="password"
                    id="newPassword"
                    name="newPassword"
                    className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
                />
            </div>

            {/* Confirm New Password */}
            <div className="flex flex-col gap-2">
                <label htmlFor="confirmPassword" className="text-sm font-medium">
                    Confirm New Password
                </label>
                <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
                />
            </div>

            {/* Error/Success Messages */}
            {error && (
                <div className="bg-red-100 text-red-700 p-3 rounded-md text-sm">
                    {error}
                </div>
            )}
            {success && (
                <div className="bg-green-100 text-green-700 p-3 rounded-md text-sm">
                    {success}
                </div>
            )}

            {/* Submit Button */}
            <button
                type="submit"
                disabled={isLoading}
                className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 disabled:bg-gray-400"
            >
                {isLoading ? "Updating..." : "Update Profile"}
            </button>
        </form>
    );
};

export default ProfileForm;
