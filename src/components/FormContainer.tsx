import prisma from "@/lib/prisma";
import FormModal from "./FormModal";
import { getSessionUser } from "@/lib/authUser";

export type FormContainerProps = {
  table:
  | "teacher"
  | "student"
  | "parent"
  | "subject"
  | "class"
  | "lesson"
  | "exam"
  | "assignment"
  | "result"
  | "attendance"
  | "event"
  | "announcement"
  | "resource"
  | "message";
  type: "create" | "update" | "delete";
  data?: any;
  id?: number | string;
};

const FormContainer = async ({ table, type, data, id }: FormContainerProps) => {
  let relatedData = {};

  const session = await getSessionUser();
  const role = session?.role;
  const currentUserId = session?.userId;

  if (type !== "delete" && session?.schoolId) {
    const schoolId = session.schoolId;

    switch (table) {
      case "subject":
        const subjectTeachers = await prisma.teacher.findMany({
          where: { schoolId },
          select: { id: true, name: true, surname: true },
        });
        relatedData = { teachers: subjectTeachers };
        break;
      case "class":
        const classGrades = await prisma.grade.findMany({
          where: { schoolId },
          select: { id: true, level: true },
        });
        const classTeachers = await prisma.teacher.findMany({
          where: { schoolId },
          select: { id: true, name: true, surname: true },
        });
        relatedData = { teachers: classTeachers, grades: classGrades };
        break;
      case "teacher":
        const teacherSubjects = await prisma.subject.findMany({
          where: { schoolId },
          select: { id: true, name: true },
        });
        relatedData = { subjects: teacherSubjects };
        break;
      case "student":
        const studentGrades = await prisma.grade.findMany({
          where: { schoolId },
          select: { id: true, level: true },
        });
        const studentClasses = await prisma.class.findMany({
          where: { schoolId },
          include: { _count: { select: { students: true } } },
        });
        relatedData = { classes: studentClasses, grades: studentGrades };
        break;
      case "exam":
        const examLessons = await prisma.lesson.findMany({
          where: {
            schoolId,
            ...(role === "teacher" ? { teacherId: currentUserId! } : {}),
          },
          select: { id: true, name: true },
        });
        relatedData = { lessons: examLessons };
        break;
      case "lesson":
        const lessonSubjects = await prisma.subject.findMany({
          where: { schoolId },
          select: { id: true, name: true },
        });
        const lessonClasses = await prisma.class.findMany({
          where: { schoolId },
          select: { id: true, name: true },
        });
        const lessonTeachers = await prisma.teacher.findMany({
          where: { schoolId },
          select: { id: true, name: true, surname: true },
        });
        relatedData = {
          subjects: lessonSubjects,
          classes: lessonClasses,
          teachers: lessonTeachers,
        };
        break;
      case "event":
        const eventClasses = await prisma.class.findMany({
          where: { schoolId },
          select: { id: true, name: true },
        });
        relatedData = { classes: eventClasses };
        break;
      case "resource":
        const resourceLessons = await prisma.lesson.findMany({
          where: {
            schoolId,
            ...(role === "teacher" ? { teacherId: currentUserId! } : {}),
          },
          select: { id: true, name: true },
        });
        const resourceAssignments = await prisma.assignment.findMany({
          where: {
            schoolId,
            ...(role === "teacher" ? { lesson: { teacherId: currentUserId! } } : {}),
          },
          select: { id: true, title: true },
        });
        relatedData = { lessons: resourceLessons, assignments: resourceAssignments };
        break;
      case "result":
        const resultStudents = await prisma.student.findMany({
          where: { schoolId },
          select: { id: true, name: true, surname: true },
        });
        const resultExams = await prisma.exam.findMany({
          where: {
            schoolId,
            ...(role === "teacher" ? { lesson: { teacherId: currentUserId! } } : {}),
          },
          select: { id: true, title: true },
        });
        const resultAssignments = await prisma.assignment.findMany({
          where: {
            schoolId,
            ...(role === "teacher" ? { lesson: { teacherId: currentUserId! } } : {}),
          },
          select: { id: true, title: true },
        });
        relatedData = { students: resultStudents, exams: resultExams, assignments: resultAssignments };
        break;
      case "message":
        const msgStudents = await prisma.student.findMany({
          where: { schoolId },
          select: { id: true, name: true, surname: true, username: true },
        });
        const msgTeachers = await prisma.teacher.findMany({
          where: { schoolId },
          select: { id: true, name: true, surname: true, username: true },
        });
        const msgParents = await prisma.parent.findMany({
          where: { schoolId },
          select: { id: true, name: true, surname: true, username: true },
        });
        const msgAdmins = await prisma.admin.findMany({
          where: { schoolId },
          select: { id: true, username: true },
        });
        // Map admin to have name/surname structure if needed, or handle in UI
        const formattedAdmins = msgAdmins.map(a => ({ ...a, name: "Admin", surname: a.username }));

        relatedData = {
          students: msgStudents,
          teachers: msgTeachers,
          parents: msgParents,
          admins: formattedAdmins
        };
        break;
      case "assignment":
        const assignmentLessons = await prisma.lesson.findMany({
          where: {
            schoolId,
            ...(role === "teacher" ? { teacherId: currentUserId! } : {}),
          },
          select: { id: true, name: true },
        });
        relatedData = { lessons: assignmentLessons };
        break;

      default:
        break;
    }
  }

  return (
    <div className="">
      <FormModal
        table={table}
        type={type}
        data={data}
        id={id}
        relatedData={relatedData}
      />
    </div>
  );
};

export default FormContainer;
