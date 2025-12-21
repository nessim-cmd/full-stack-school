"use client";

import { useRouter, useSearchParams } from "next/navigation";

type LessonSelectorProps = {
    lessons: Array<{
        id: number;
        subject: { name: string };
        class: { name: string };
        day: string;
    }>;
    selectedLessonId: number | undefined;
};

const LessonSelector = ({ lessons, selectedLessonId }: LessonSelectorProps) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const params = new URLSearchParams(searchParams);
        params.set("lessonId", e.target.value);
        router.push(`?${params.toString()}`);
    };

    return (
        <div className="mb-6">
            <label className="text-sm font-medium mb-2 block">Select Lesson</label>
            <select
                className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full md:w-1/2"
                value={selectedLessonId || ""}
                onChange={handleChange}
            >
                {lessons.map((lesson) => (
                    <option key={lesson.id} value={lesson.id}>
                        {lesson.subject.name} - {lesson.class.name} ({lesson.day})
                    </option>
                ))}
            </select>
        </div>
    );
};

export default LessonSelector;
