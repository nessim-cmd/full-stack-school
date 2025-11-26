import { getSessionUser } from "@/lib/authUser";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import AttendanceForm from "@/components/AttendanceForm";
import LessonSelector from "@/components/LessonSelector";

const AttendancePage = async ({
    searchParams,
}: {
    searchParams: { [key: string]: string | undefined };
}) => {
    const session = await getSessionUser();

    if (!session || session.role !== "teacher") {
        redirect("/login");
    }

    // Get teacher's lessons
    const lessons = await prisma.lesson.findMany({
        where: {
            teacherId: session.id,
        },
        include: {
            subject: true,
            class: {
                include: {
                    students: {
                        orderBy: {
                            surname: "asc",
                        },
                    },
                },
            },
        },
    });

    const selectedLessonId = searchParams.lessonId
        ? parseInt(searchParams.lessonId)
        : lessons[0]?.id;

    const selectedLesson = lessons.find((l) => l.id === selectedLessonId);

    return (
        <div className="flex-1 p-4 flex flex-col gap-4">
            <div className="bg-white p-4 rounded-md">
                <h1 className="text-xl font-semibold mb-4">Attendance Management</h1>

                {/* Lesson Selector */}
                <LessonSelector lessons={lessons} selectedLessonId={selectedLessonId} />

                {selectedLesson ? (
                    <AttendanceForm
                        students={selectedLesson.class.students}
                        lessonId={selectedLesson.id}
                        lessonName={`${selectedLesson.subject.name} - ${selectedLesson.class.name}`}
                        date={new Date()}
                    />
                ) : (
                    <div className="text-center py-8 text-gray-500">
                        No lessons found. Please contact administration.
                    </div>
                )}
            </div>
        </div>
    );
};

export default AttendancePage;

