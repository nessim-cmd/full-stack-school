"use client";

import { useState } from "react";
import { bulkMarkAttendance } from "@/lib/attendance-actions";

type Student = {
    id: string;
    name: string;
    surname: string;
    email: string | null;
};

type AttendanceFormProps = {
    students: Student[];
    lessonId: number;
    lessonName: string;
    date: Date;
};

const AttendanceForm = ({
    students,
    lessonId,
    lessonName,
    date,
}: AttendanceFormProps) => {
    const [attendance, setAttendance] = useState<Record<string, boolean>>(
        students.reduce((acc, student) => {
            acc[student.id] = true; // Default to present
            return acc;
        }, {} as Record<string, boolean>)
    );
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState<{
        type: "success" | "error";
        text: string;
    } | null>(null);

    const handleToggle = (studentId: string) => {
        setAttendance((prev) => ({
            ...prev,
            [studentId]: !prev[studentId],
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage(null);

        const attendanceData = students.map((student) => ({
            studentId: student.id,
            lessonId,
            date: new Date(date),
            present: attendance[student.id],
        }));

        const result = await bulkMarkAttendance(attendanceData);

        if (result.success) {
            setMessage({ type: "success", text: result.message || "Attendance marked successfully!" });
        } else {
            setMessage({ type: "error", text: result.message || "Failed to mark attendance" });
        }

        setIsLoading(false);
    };

    const presentCount = Object.values(attendance).filter((p) => p).length;
    const absentCount = students.length - presentCount;

    return (
        <div className="bg-white p-6 rounded-md">
            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Mark Attendance</h2>
                <div className="flex gap-4 text-sm text-gray-600">
                    <span>Lesson: <strong>{lessonName}</strong></span>
                    <span>Date: <strong>{new Date(date).toLocaleDateString()}</strong></span>
                </div>
                <div className="flex gap-4 mt-2 text-sm">
                    <span className="text-green-600">Present: <strong>{presentCount}</strong></span>
                    <span className="text-red-600">Absent: <strong>{absentCount}</strong></span>
                </div>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="max-h-[500px] overflow-y-auto mb-4">
                    <table className="w-full">
                        <thead className="bg-gray-100 sticky top-0">
                            <tr>
                                <th className="text-left p-3 text-sm font-medium">Student Name</th>
                                <th className="text-left p-3 text-sm font-medium">Email</th>
                                <th className="text-center p-3 text-sm font-medium">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((student) => (
                                <tr key={student.id} className="border-b hover:bg-gray-50">
                                    <td className="p-3 text-sm">
                                        {student.name} {student.surname}
                                    </td>
                                    <td className="p-3 text-sm text-gray-600">
                                        {student.email || "No email"}
                                    </td>
                                    <td className="p-3 text-center">
                                        <button
                                            type="button"
                                            onClick={() => handleToggle(student.id)}
                                            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${attendance[student.id]
                                                    ? "bg-green-500 text-white hover:bg-green-600"
                                                    : "bg-red-500 text-white hover:bg-red-600"
                                                }`}
                                        >
                                            {attendance[student.id] ? "Present" : "Absent"}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {message && (
                    <div
                        className={`mb-4 p-3 rounded-md text-sm ${message.type === "success"
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-700"
                            }`}
                    >
                        {message.text}
                    </div>
                )}

                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 disabled:bg-gray-400 font-medium"
                >
                    {isLoading ? "Saving..." : "Save Attendance"}
                </button>
            </form>
        </div>
    );
};

export default AttendanceForm;
