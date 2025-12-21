import prisma from "@/lib/prisma";
import TeacherWorkloadChart from "./TeacherWorkloadChart";
import { getSchoolId } from "@/lib/authUser";
import Image from "next/image";

const TeacherWorkloadChartContainer = async () => {
    const schoolId = await getSchoolId();

    const teachers = await prisma.teacher.findMany({
        where: { schoolId },
        select: {
            name: true,
            surname: true,
            _count: {
                select: { lessons: true }
            }
        },
        orderBy: {
            lessons: {
                _count: "desc"
            }
        },
        take: 5
    });

    const data = teachers.map(teacher => ({
        name: `${teacher.name} ${teacher.surname[0]}.`,
        lessons: teacher._count.lessons
    }));

    return (
        <div className="bg-white rounded-xl w-full h-full p-4">
            <div className="flex justify-between items-center">
                <h1 className="text-lg font-semibold">Teacher Workload (Lessons)</h1>
                <Image src="/moreDark.png" alt="" width={20} height={20} />
            </div>
            <TeacherWorkloadChart data={data} />
        </div>
    );
};

export default TeacherWorkloadChartContainer;
