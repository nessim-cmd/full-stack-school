import prisma from "@/lib/prisma";
import PerformanceChart from "./PerformanceChart";
import { getSchoolId } from "@/lib/authUser";
import Image from "next/image";

const PerformanceChartContainer = async () => {
    const schoolId = await getSchoolId();

    // Fetch results with student and grade info
    const results = await prisma.result.findMany({
        where: { schoolId },
        include: {
            student: {
                include: {
                    grade: true,
                },
            },
        },
    });

    // Calculate average score per grade
    const gradeScores: { [key: number]: { total: number; count: number; level: number } } = {};

    results.forEach((result) => {
        const gradeId = result.student.gradeId;
        const gradeLevel = result.student.grade.level;

        if (!gradeScores[gradeId]) {
            gradeScores[gradeId] = { total: 0, count: 0, level: gradeLevel };
        }

        gradeScores[gradeId].total += result.score;
        gradeScores[gradeId].count += 1;
    });

    const data = Object.values(gradeScores)
        .map((item) => ({
            name: `Grade ${item.level}`,
            score: Math.round(item.total / item.count),
            level: item.level, // for sorting
        }))
        .sort((a, b) => a.level - b.level);

    return (
        <div className="bg-white rounded-xl w-full h-full p-4">
            <div className="flex justify-between items-center">
                <h1 className="text-lg font-semibold">Performance (Avg Score by Grade)</h1>
                <Image src="/moreDark.png" alt="" width={20} height={20} />
            </div>
            <PerformanceChart data={data} />
        </div>
    );
};

export default PerformanceChartContainer;
