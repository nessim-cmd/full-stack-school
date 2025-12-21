import prisma from "@/lib/prisma";
import BigCalendar from "./BigCalender";
import { adjustScheduleToCurrentWeek } from "@/lib/utils";

import { getSchoolId } from "@/lib/authUser";

const BigCalendarContainer = async ({
  type,
  id,
}: {
  type: "teacherId" | "classId";
  id: string | number;
}) => {
  const schoolId = await getSchoolId();
  const dataRes = await prisma.lesson.findMany({
    where: {
      schoolId,
      ...(type === "teacherId"
        ? { teacherId: id as string }
        : { classId: id as number }),
    },
  });

  const data = dataRes.map((lesson) => ({
    title: lesson.name,
    start: lesson.startTime,
    end: lesson.endTime,
  }));

  const schedule = adjustScheduleToCurrentWeek(data);

  return (
    <div className="">
      <BigCalendar data={schedule} />
    </div>
  );
};

export default BigCalendarContainer;
