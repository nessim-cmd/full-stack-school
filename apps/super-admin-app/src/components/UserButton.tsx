"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { logout } from "@/lib/auth-actions";

type UserButtonProps = {
    username: string;
    role: string;
    userImage: string;
};

const UserButton = ({ username, role, userImage }: UserButtonProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleLogout = async () => {
        await logout();
    };

    return (
        <div className="relative">
            <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="flex flex-col">
                    <span className="text-xs leading-3 font-medium">{username}</span>
                    <span className="text-[10px] text-gray-500 text-right capitalize">
                        {role}
                    </span>
                </div>
                <Image
                    src={userImage}
                    alt="Profile"
                    width={36}
                    height={36}
                    className="rounded-full object-cover w-9 h-9"
                />
            </div>
            {isOpen && (
                <div className="absolute top-12 right-0 bg-white p-4 rounded-md shadow-lg w-40 flex flex-col gap-2 z-50">
                    <Link
                        href="/profile"
                        className="text-sm text-gray-700 hover:text-blue-500"
                        onClick={() => setIsOpen(false)}
                    >
                        Profile Settings
                    </Link>
                    <button
                        onClick={handleLogout}
                        className="text-sm text-red-500 text-left hover:text-red-600"
                    >
                        Logout
                    </button>
                </div>
            )}
        </div>
    );
};

export default UserButton;
