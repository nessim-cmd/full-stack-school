"use client";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const TeacherWorkloadChart = ({ data }: { data: { name: string; lessons: number }[] }) => {
    return (
        <div className="w-full h-full">
            <ResponsiveContainer width="100%" height="90%">
                <BarChart width={500} height={300} data={data} barSize={20}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
                    <XAxis
                        dataKey="name"
                        axisLine={false}
                        tick={{ fill: "#d1d5db" }}
                        tickLine={false}
                    />
                    <YAxis axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} />
                    <Tooltip
                        contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }}
                    />
                    <Legend
                        align="left"
                        verticalAlign="top"
                        wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
                    />
                    <Bar
                        dataKey="lessons"
                        name="Lessons"
                        fill="#C3EBFA"
                        legendType="circle"
                        radius={[10, 10, 0, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default TeacherWorkloadChart;
