"use server";

import { revalidatePath } from "next/cache";
import {
  ClassSchema,
  EventSchema,
  ExamSchema,
  LessonSchema,
  ParentSchema,
  StudentSchema,
  SubjectSchema,
  TeacherSchema,
  ResourceSchema,
  ResultSchema,
  MessageSchema,
} from "./formValidationSchemas";
import prisma from "./prisma";
import { hashPassword } from "./auth";
import { randomUUID } from "crypto";
import { sendCredentials } from "./mail";
import { getSessionUser, getSchoolId } from "./authUser";

type CurrentState = { success: boolean; error: boolean };

export const createParent = async (
  currentState: CurrentState,
  data: ParentSchema
) => {
  try {
    const password = await hashPassword(data.password || "");
    const id = randomUUID();

    const schoolId = await getSchoolId();
    await prisma.parent.create({
      data: {
        id: id,
        password: password,
        username: data.username,
        name: data.name,
        surname: data.surname,
        email: data.email || null,
        phone: data.phone,
        address: data.address,
        schoolId: schoolId,
      },
    });

    if (data.email) {
      await sendCredentials(
        data.email,
        data.username,
        data.password || "",
        "Parent"
      );
    }

    // revalidatePath("/list/parents");
    return { success: true, error: false };
  } catch (err: any) {
    console.log(err);
    if (err.code === "P2002") {
      const field = err.meta?.target?.[0];
      return {
        success: false,
        error: true,
        message: `The ${field} is already in use. Please use a different one.`,
      };
    }
    return { success: false, error: true, message: "Something went wrong!" };
  }
};

export const updateParent = async (
  currentState: CurrentState,
  data: ParentSchema
) => {
  if (!data.id) {
    return { success: false, error: true };
  }
  try {
    const schoolId = await getSchoolId();
    await prisma.parent.updateMany({
      where: {
        id: data.id,
        schoolId: schoolId,
      },
      data: {
        ...(data.password !== "" && { password: await hashPassword(data.password || "") }),
        username: data.username,
        name: data.name,
        surname: data.surname,
        email: data.email || null,
        phone: data.phone,
        address: data.address,
      },
    });

    // revalidatePath("/list/parents");
    return { success: true, error: false };
  } catch (err: any) {
    console.log(err);
    if (err.code === "P2002") {
      const field = err.meta?.target?.[0];
      return {
        success: false,
        error: true,
        message: `The ${field} is already in use. Please use a different one.`,
      };
    }
    return { success: false, error: true, message: "Something went wrong!" };
  }
};

export const deleteParent = async (
  currentState: CurrentState,
  data: FormData
) => {
  const id = data.get("id") as string;
  try {
    const schoolId = await getSchoolId();
    await prisma.parent.deleteMany({
      where: {
        id: id,
        schoolId: schoolId,
      },
    });

    // revalidatePath("/list/parents");
    return { success: true, error: false };
  } catch (err: any) {
    console.log(err);
    if (err.code === "P2003") {
      return {
        success: false,
        error: true,
        message: "Cannot delete: This parent has related data (e.g. students).",
      };
    }
    return { success: false, error: true, message: "Something went wrong!" };
  }
};

export const createSubject = async (
  currentState: CurrentState,
  data: SubjectSchema
) => {
  try {
    const schoolId = await getSchoolId();
    await prisma.subject.create({
      data: {
        name: data.name,
        teachers: {
          connect: data.teachers.map((teacherId) => ({ id: teacherId })),
        },
        schoolId: schoolId,
      },
    });

    // revalidatePath("/list/subjects");
    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};

export const updateSubject = async (
  currentState: CurrentState,
  data: SubjectSchema
) => {
  try {
    const schoolId = await getSchoolId();
    await prisma.subject.updateMany({
      where: {
        id: data.id,
        schoolId: schoolId,
      },
      data: {
        name: data.name,
        // Relations cannot be updated with updateMany directly in the same way as update
        // We might need to handle relations separately or use findFirst + update
      },
    });
    // Since updateMany doesn't support relations, we should use findFirst then update
    // But wait, 'teachers' is a relation. updateMany CANNOT update relations.
    // So we MUST use findFirst to verify ownership, then update.

    const subject = await prisma.subject.findFirst({
      where: { id: data.id, schoolId: schoolId }
    });

    if (!subject) {
      return { success: false, error: true, message: "Subject not found or access denied" };
    }

    await prisma.subject.update({
      where: { id: data.id },
      data: {
        name: data.name,
        teachers: {
          set: data.teachers.map((teacherId) => ({ id: teacherId })),
        },
      }
    });

    // revalidatePath("/list/subjects");
    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};

export const deleteSubject = async (
  currentState: CurrentState,
  data: FormData
) => {
  const id = data.get("id") as string;
  try {
    const schoolId = await getSchoolId();
    await prisma.subject.deleteMany({
      where: {
        id: parseInt(id),
        schoolId: schoolId,
      },
    });

    // revalidatePath("/list/subjects");
    return { success: true, error: false };
  } catch (err: any) {
    console.log(err);
    if (err.code === "P2003") {
      return {
        success: false,
        error: true,
        message: "Cannot delete: This subject is used by other records.",
      };
    }
    return { success: false, error: true, message: "Something went wrong!" };
  }
};

export const createClass = async (
  currentState: CurrentState,
  data: ClassSchema
) => {
  try {
    const schoolId = await getSchoolId();
    await prisma.class.create({
      data: { ...data, schoolId },
    });

    // revalidatePath("/list/classes");
    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};

export const updateClass = async (
  currentState: CurrentState,
  data: ClassSchema
) => {
  try {
    const schoolId = await getSchoolId();
    await prisma.class.updateMany({
      where: {
        id: data.id,
        schoolId: schoolId,
      },
      data,
    });

    // revalidatePath("/list/classes");
    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};

export const deleteClass = async (
  currentState: CurrentState,
  data: FormData
) => {
  const id = data.get("id") as string;
  try {
    const schoolId = await getSchoolId();
    await prisma.class.deleteMany({
      where: {
        id: parseInt(id),
        schoolId: schoolId,
      },
    });

    // revalidatePath("/list/classes");
    return { success: true, error: false };
  } catch (err: any) {
    console.log(err);
    if (err.code === "P2003") {
      return {
        success: false,
        error: true,
        message: "Cannot delete: This class has related data (e.g. students, lessons).",
      };
    }
    return { success: false, error: true, message: "Something went wrong!" };
  }
};

export const createTeacher = async (
  currentState: CurrentState,
  data: TeacherSchema
) => {
  try {
    const password = await hashPassword(data.password || "");
    const id = randomUUID();

    const schoolId = await getSchoolId();
    await prisma.teacher.create({
      data: {
        id: id,
        password: password,
        username: data.username,
        name: data.name,
        surname: data.surname,
        email: data.email || null,
        phone: data.phone || null,
        address: data.address,
        img: data.img || null,
        bloodType: data.bloodType,
        sex: data.sex,
        birthday: data.birthday,
        subjects: {
          connect: data.subjects?.map((subjectId: string) => ({
            id: parseInt(subjectId),
          })),
        },
        schoolId: schoolId,
      },
    });

    if (data.email) {
      await sendCredentials(
        data.email,
        data.username,
        data.password || "",
        "Teacher"
      );
    }

    // revalidatePath("/list/teachers");
    return { success: true, error: false };
  } catch (err: any) {
    console.log(err);
    if (err.code === "P2002") {
      const field = err.meta?.target?.[0];
      return {
        success: false,
        error: true,
        message: `The ${field} is already in use. Please use a different one.`,
      };
    }
    return { success: false, error: true, message: "Something went wrong!" };
  }
};

export const updateTeacher = async (
  currentState: CurrentState,
  data: TeacherSchema
) => {
  if (!data.id) {
    return { success: false, error: true };
  }
  try {
    const schoolId = await getSchoolId();
    // Check ownership first
    const teacher = await prisma.teacher.findFirst({
      where: { id: data.id, schoolId: schoolId }
    });

    if (!teacher) {
      return { success: false, error: true, message: "Teacher not found or access denied" };
    }

    await prisma.teacher.update({
      where: {
        id: data.id,
      },
      data: {
        ...(data.password !== "" && { password: await hashPassword(data.password || "") }),
        username: data.username,
        name: data.name,
        surname: data.surname,
        email: data.email || null,
        phone: data.phone || null,
        address: data.address,
        img: data.img || null,
        bloodType: data.bloodType,
        sex: data.sex,
        birthday: data.birthday,
        subjects: {
          set: data.subjects?.map((subjectId: string) => ({
            id: parseInt(subjectId),
          })),
        },
      },
    });
    // revalidatePath("/list/teachers");
    return { success: true, error: false };
  } catch (err: any) {
    console.log(err);
    if (err.code === "P2002") {
      const field = err.meta?.target?.[0];
      return {
        success: false,
        error: true,
        message: `The ${field} is already in use. Please use a different one.`,
      };
    }
    return { success: false, error: true, message: "Something went wrong!" };
  }
};

export const deleteTeacher = async (
  currentState: CurrentState,
  data: FormData
) => {
  const id = data.get("id") as string;
  try {
    const schoolId = await getSchoolId();
    await prisma.teacher.deleteMany({
      where: {
        id: id,
        schoolId: schoolId,
      },
    });

    // revalidatePath("/list/teachers");
    return { success: true, error: false };
  } catch (err: any) {
    console.log(err);
    if (err.code === "P2003") {
      return {
        success: false,
        error: true,
        message: "Cannot delete: This teacher has related data (e.g. lessons).",
      };
    }
    return { success: false, error: true, message: "Something went wrong!" };
  }
};

export const createStudent = async (
  currentState: CurrentState,
  data: StudentSchema
) => {
  console.log(data);
  try {
    const classItem = await prisma.class.findUnique({
      where: { id: data.classId },
      include: { _count: { select: { students: true } } },
    });

    if (classItem && classItem.capacity === classItem._count.students) {
      return { success: false, error: true, message: "Class capacity reached!" };
    }

    const password = await hashPassword(data.password || "");
    const id = randomUUID();

    const schoolId = await getSchoolId();
    // Verify class belongs to school
    if (classItem && classItem.schoolId !== schoolId) {
      return { success: false, error: true, message: "Invalid class for this school" };
    }

    await prisma.student.create({
      data: {
        id: id,
        password: password,
        username: data.username,
        name: data.name,
        surname: data.surname,
        email: data.email || null,
        phone: data.phone || null,
        address: data.address,
        img: data.img || null,
        bloodType: data.bloodType,
        sex: data.sex,
        birthday: data.birthday,
        gradeId: data.gradeId,
        classId: data.classId,
        parentId: data.parentId,
        schoolId: schoolId,
      },
    });

    if (data.email) {
      await sendCredentials(
        data.email,
        data.username,
        data.password || "",
        "Student"
      );
    }

    // revalidatePath("/list/students");
    return { success: true, error: false };
  } catch (err: any) {
    console.log(err);
    if (err.code === "P2002") {
      const field = err.meta?.target?.[0];
      return {
        success: false,
        error: true,
        message: `The ${field} is already in use. Please use a different one.`,
      };
    }
    if (err.code === "P2003") {
      return {
        success: false,
        error: true,
        message: "The selected Parent does not exist. Please check the Parent ID.",
      };
    }
    return { success: false, error: true, message: "Something went wrong!" };
  }
};

export const updateStudent = async (
  currentState: CurrentState,
  data: StudentSchema
) => {
  if (!data.id) {
    return { success: false, error: true };
  }
  try {
    const schoolId = await getSchoolId();
    await prisma.student.updateMany({
      where: {
        id: data.id,
        schoolId: schoolId,
      },
      data: {
        ...(data.password !== "" && { password: await hashPassword(data.password || "") }),
        username: data.username,
        name: data.name,
        surname: data.surname,
        email: data.email || null,
        phone: data.phone || null,
        address: data.address,
        img: data.img || null,
        bloodType: data.bloodType,
        sex: data.sex,
        birthday: data.birthday,
        gradeId: data.gradeId,
        classId: data.classId,
        parentId: data.parentId,
      },
    });
    // revalidatePath("/list/students");
    return { success: true, error: false };
  } catch (err: any) {
    console.log(err);
    if (err.code === "P2002") {
      const field = err.meta?.target?.[0];
      return {
        success: false,
        error: true,
        message: `The ${field} is already in use. Please use a different one.`,
      };
    }
    if (err.code === "P2003") {
      return {
        success: false,
        error: true,
        message: "The selected Parent does not exist. Please check the Parent ID.",
      };
    }
    return { success: false, error: true, message: "Something went wrong!" };
  }
};

export const deleteStudent = async (
  currentState: CurrentState,
  data: FormData
) => {
  const id = data.get("id") as string;
  try {
    const schoolId = await getSchoolId();
    await prisma.student.deleteMany({
      where: {
        id: id,
        schoolId: schoolId,
      },
    });

    // revalidatePath("/list/students");
    return { success: true, error: false };
  } catch (err: any) {
    console.log(err);
    if (err.code === "P2003") {
      return {
        success: false,
        error: true,
        message: "Cannot delete: This student has related data (e.g. results).",
      };
    }
    return { success: false, error: true, message: "Something went wrong!" };
  }
};

export const createExam = async (
  currentState: CurrentState,
  data: ExamSchema
) => {
  // const { userId, sessionClaims } = auth();
  // const role = (sessionClaims?.metadata as { role?: string })?.role;

  try {
    // if (role === "teacher") {
    //   const teacherLesson = await prisma.lesson.findFirst({
    //     where: {
    //       teacherId: userId!,
    //       id: data.lessonId,
    //     },
    //   });

    //   if (!teacherLesson) {
    //     return { success: false, error: true };
    //   }
    // }

    const schoolId = await getSchoolId();

    const lesson = await prisma.lesson.findFirst({ where: { id: data.lessonId, schoolId } });
    if (!lesson) {
      return { success: false, error: true, message: "Invalid lesson." };
    }

    await prisma.exam.create({
      data: {
        title: data.title,
        startTime: data.startTime,
        endTime: data.endTime,
        lessonId: data.lessonId,
        schoolId: schoolId,
      },
    });

    // revalidatePath("/list/subjects");
    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};

export const updateExam = async (
  currentState: CurrentState,
  data: ExamSchema
) => {
  // const { userId, sessionClaims } = auth();
  // const role = (sessionClaims?.metadata as { role?: string })?.role;

  try {
    // if (role === "teacher") {
    //   const teacherLesson = await prisma.lesson.findFirst({
    //     where: {
    //       teacherId: userId!,
    //       id: data.lessonId,
    //     },
    //   });

    //   if (!teacherLesson) {
    //     return { success: false, error: true };
    //   }
    // }

    const schoolId = await getSchoolId();
    await prisma.exam.updateMany({
      where: {
        id: data.id,
        schoolId: schoolId,
      },
      data: {
        title: data.title,
        startTime: data.startTime,
        endTime: data.endTime,
        lessonId: data.lessonId,
      },
    });

    // revalidatePath("/list/subjects");
    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};

export const deleteExam = async (
  currentState: CurrentState,
  data: FormData
) => {
  const id = data.get("id") as string;

  // const { userId, sessionClaims } = auth();
  // const role = (sessionClaims?.metadata as { role?: string })?.role;

  try {
    const schoolId = await getSchoolId();
    await prisma.exam.deleteMany({
      where: {
        id: parseInt(id),
        schoolId: schoolId,
        // ...(role === "teacher" ? { lesson: { teacherId: userId! } } : {}),
      },
    });

    // revalidatePath("/list/subjects");
    return { success: true, error: false };
  } catch (err: any) {
    console.log(err);
    if (err.code === "P2003") {
      return {
        success: false,
        error: true,
        message: "Cannot delete: This exam has related data (e.g. results).",
      };
    }
    return { success: false, error: true, message: "Something went wrong!" };
  }
};

// LESSON ACTIONS

export const createLesson = async (
  currentState: CurrentState,
  data: LessonSchema
) => {
  try {
    const schoolId = await getSchoolId();

    // Validate relations belong to school
    const [subject, classItem, teacher] = await Promise.all([
      prisma.subject.findFirst({ where: { id: data.subjectId, schoolId } }),
      prisma.class.findFirst({ where: { id: data.classId, schoolId } }),
      prisma.teacher.findFirst({ where: { id: data.teacherId, schoolId } }),
    ]);

    if (!subject || !classItem || !teacher) {
      return { success: false, error: true, message: "Invalid subject, class, or teacher." };
    }

    await prisma.lesson.create({
      data: {
        name: data.name,
        day: data.day,
        startTime: data.startTime,
        endTime: data.endTime,
        subjectId: data.subjectId,
        classId: data.classId,
        teacherId: data.teacherId,
        schoolId: schoolId,
      },
    });

    revalidatePath("/list/lessons");
    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};

export const updateLesson = async (
  currentState: CurrentState,
  data: LessonSchema
) => {
  try {
    const schoolId = await getSchoolId();
    await prisma.lesson.updateMany({
      where: {
        id: data.id,
        schoolId: schoolId,
      },
      data: {
        name: data.name,
        day: data.day,
        startTime: data.startTime,
        endTime: data.endTime,
        subjectId: data.subjectId,
        classId: data.classId,
        teacherId: data.teacherId,
      },
    });

    revalidatePath("/list/lessons");
    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};

export const deleteLesson = async (
  currentState: CurrentState,
  data: FormData
) => {
  const id = data.get("id") as string;
  try {
    const schoolId = await getSchoolId();
    await prisma.lesson.deleteMany({
      where: {
        id: parseInt(id),
        schoolId: schoolId,
      },
    });

    revalidatePath("/list/lessons");
    return { success: true, error: false };
  } catch (err: any) {
    console.log(err);
    if (err.code === "P2003") {
      return {
        success: false,
        error: true,
        message: "Cannot delete: This lesson has related data (e.g. exams, attendance).",
      };
    }
    return { success: false, error: true, message: "Something went wrong!" };
  }
};

// EVENT ACTIONS

export const createEvent = async (
  currentState: CurrentState,
  data: EventSchema
) => {
  try {
    const schoolId = await getSchoolId();

    if (data.classId) {
      const classItem = await prisma.class.findFirst({ where: { id: data.classId, schoolId } });
      if (!classItem) {
        return { success: false, error: true, message: "Invalid class." };
      }
    }

    const event = await prisma.event.create({
      data: {
        title: data.title,
        description: data.description,
        startTime: data.startTime,
        endTime: data.endTime,
        classId: data.classId,
        schoolId: schoolId,
      },
    });

    // Send notifications
    console.log("[Create Event] Sending notifications for event:", event.title);
    const { notifyEventCreation } = await import("./notification-actions");

    // Fire and forget - don't wait for notifications to complete
    notifyEventCreation(
      event.title,
      event.description,
      event.startTime,
      event.endTime,
      event.classId,
      schoolId
    ).catch((error) => {
      console.error("[Create Event] Failed to send notifications:", error);
    });

    revalidatePath("/list/events");
    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};

export const updateEvent = async (
  currentState: CurrentState,
  data: EventSchema
) => {
  try {
    const schoolId = await getSchoolId();
    await prisma.event.updateMany({
      where: {
        id: data.id,
        schoolId: schoolId,
      },
      data: {
        title: data.title,
        description: data.description,
        startTime: data.startTime,
        endTime: data.endTime,
        classId: data.classId || null,
      },
    });

    revalidatePath("/list/events");
    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};

export const deleteEvent = async (
  currentState: CurrentState,
  data: FormData
) => {
  const id = data.get("id") as string;
  try {
    const schoolId = await getSchoolId();
    await prisma.event.deleteMany({
      where: {
        id: parseInt(id),
        schoolId: schoolId,
      },
    });

    revalidatePath("/list/events");
    return { success: true, error: false };
  } catch (err: any) {
    console.log(err);
    return { success: false, error: true, message: "Something went wrong!" };
  }
};

// RESOURCE ACTIONS


export const createResource = async (
  currentState: CurrentState,
  data: ResourceSchema
) => {
  try {
    const schoolId = await getSchoolId();

    const [lesson, assignment] = await Promise.all([
      data.lessonId ? prisma.lesson.findFirst({ where: { id: data.lessonId, schoolId } }) : null,
      data.assignmentId ? prisma.assignment.findFirst({ where: { id: data.assignmentId, schoolId } }) : null,
    ]);

    if ((data.lessonId && !lesson) || (data.assignmentId && !assignment)) {
      return { success: false, error: true, message: "Invalid lesson or assignment." };
    }

    await prisma.resource.create({
      data: {
        title: data.title,
        url: data.url,
        lessonId: data.lessonId || null,
        assignmentId: data.assignmentId || null,
        schoolId: schoolId,
      },
    });

    if (data.lessonId) revalidatePath("/list/lessons");
    revalidatePath("/list/resources");
    // if (data.assignmentId) revalidatePath("/list/assignments");

    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};

export const deleteResource = async (
  currentState: CurrentState,
  data: FormData
) => {
  const id = data.get("id") as string;
  try {
    const schoolId = await getSchoolId();
    await prisma.resource.deleteMany({
      where: {
        id: parseInt(id),
        schoolId: schoolId,
      },
    });

    // We don't know the exact path to revalidate without more context, 
    // but typically it's where the resource was shown.
    // For now, revalidate lessons.
    revalidatePath("/list/lessons");
    return { success: true, error: false };
  } catch (err: any) {
    console.log(err);
    return { success: false, error: true, message: "Something went wrong!" };
  }
};

// RESULT ACTIONS


export const createResult = async (
  currentState: CurrentState,
  data: ResultSchema
) => {
  try {
    const schoolId = await getSchoolId();

    const [exam, assignment, student] = await Promise.all([
      data.examId ? prisma.exam.findFirst({ where: { id: data.examId, schoolId } }) : null,
      data.assignmentId ? prisma.assignment.findFirst({ where: { id: data.assignmentId, schoolId } }) : null,
      prisma.student.findFirst({ where: { id: data.studentId, schoolId } }),
    ]);

    if ((data.examId && !exam) || (data.assignmentId && !assignment) || !student) {
      return { success: false, error: true, message: "Invalid exam, assignment, or student." };
    }

    await prisma.result.create({
      data: {
        score: data.score,
        examId: data.examId,
        assignmentId: data.assignmentId,
        studentId: data.studentId,
        schoolId: schoolId,
      },
    });

    revalidatePath("/list/results");
    return { success: true, error: false, message: "" };
  } catch (err) {
    console.log(err);
    return { success: false, error: true, message: "Something went wrong!" };
  }
};

export const updateResult = async (
  currentState: CurrentState,
  data: ResultSchema
) => {
  try {
    const schoolId = await getSchoolId();
    await prisma.result.updateMany({
      where: {
        id: data.id,
        schoolId: schoolId,
      },
      data: {
        score: data.score,
        examId: data.examId || null,
        assignmentId: data.assignmentId || null,
        studentId: data.studentId,
      },
    });

    revalidatePath("/list/results");
    return { success: true, error: false, message: "" };
  } catch (err) {
    console.log(err);
    return { success: false, error: true, message: "Something went wrong!" };
  }
};

export const deleteResult = async (
  currentState: CurrentState,
  data: FormData
) => {
  const id = data.get("id") as string;
  try {
    const schoolId = await getSchoolId();
    await prisma.result.deleteMany({
      where: {
        id: parseInt(id),
        schoolId: schoolId,
      },
    });

    revalidatePath("/list/results");
    return { success: true, error: false };
  } catch (err: any) {
    console.log(err);
    return { success: false, error: true, message: "Something went wrong!" };
  }
};

export const createMessage = async (
  currentState: CurrentState,
  data: MessageSchema
) => {
  try {
    const session = await getSessionUser();
    if (!session) {
      return { success: false, error: true, message: "Unauthorized!" };
    }

    const senderId = session.userId;
    const senderRole = session.role;

    // Fetch sender name
    let senderName = "";
    if (senderRole === "admin") {
      const admin = await prisma.admin.findUnique({ where: { id: senderId } });
      senderName = admin?.username || "Admin";
    } else if (senderRole === "teacher") {
      const teacher = await prisma.teacher.findUnique({ where: { id: senderId } });
      senderName = teacher ? `${teacher.name} ${teacher.surname}` : "Teacher";
    } else if (senderRole === "student") {
      const student = await prisma.student.findUnique({ where: { id: senderId } });
      senderName = student ? `${student.name} ${student.surname}` : "Student";
    } else if (senderRole === "parent") {
      const parent = await prisma.parent.findUnique({ where: { id: senderId } });
      senderName = parent ? `${parent.name} ${parent.surname}` : "Parent";
    }

    const schoolId = await getSchoolId();
    // Create Message with Recipients
    const message = await prisma.message.create({
      data: {
        subject: data.subject,
        content: data.content,
        senderId,
        senderRole,
        senderName,
        schoolId: schoolId,
        recipients: {
          create: data.recipients.map(recipient => ({
            recipientId: recipient.id,
            recipientRole: recipient.role,
            recipientName: recipient.name || "Unknown",
          }))
        }
      },
      include: {
        recipients: true
      }
    });

    // Create in-app notifications for all recipients
    const { createNotification } = await import("./notification-actions");
    const { redis } = await import("./redis");

    for (const recipient of message.recipients) {
      await createNotification(
        recipient.recipientId,
        recipient.recipientRole,
        `New Message: ${message.subject}`,
        `You have a new message from ${message.senderName}. Check your messages.`,
        "message_received",
        schoolId
      );

      // Publish to Redis for real-time notification
      await redis.publish(
        `notifications:${recipient.recipientId}`,
        JSON.stringify({
          id: Date.now().toString(),
          title: `New Message: ${message.subject}`,
          message: `You have a new message from ${message.senderName}`,
          type: "message_received",
          createdAt: new Date(),
          read: false,
        })
      );
    }

    // Send email notifications
    try {
      const nodemailer = await import("nodemailer");

      const port = parseInt(process.env.SMTP_PORT || "587");
      const transporter = nodemailer.default.createTransport({
        host: process.env.SMTP_HOST,
        port: port,
        secure: port === 465, // true for 465, false for other ports
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS?.replace(/\s+/g, ""), // Remove spaces from app password
        },
      });

      for (const recipient of message.recipients) {
        // Fetch recipient email
        let recipientEmail = "";
        if (recipient.recipientRole === "teacher") {
          const teacher = await prisma.teacher.findUnique({ where: { id: recipient.recipientId }, select: { email: true } });
          recipientEmail = teacher?.email || "";
        } else if (recipient.recipientRole === "student") {
          const student = await prisma.student.findUnique({ where: { id: recipient.recipientId }, select: { email: true } });
          recipientEmail = student?.email || "";
        } else if (recipient.recipientRole === "parent") {
          const parent = await prisma.parent.findUnique({ where: { id: recipient.recipientId }, select: { email: true } });
          recipientEmail = parent?.email || "";
        }

        if (recipientEmail) {
          await transporter.sendMail({
            from: `"School Management System" <${process.env.SMTP_USER}>`,
            to: recipientEmail,
            subject: `New Message: ${message.subject}`,
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #333;">You have a new message</h2>
                <p><strong>From:</strong> ${message.senderName}</p>
                <p><strong>Subject:</strong> ${message.subject}</p>
                <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
                  <p>${message.content}</p>
                </div>
                <p style="color: #666; font-size: 14px;">
                  Please log in to your school portal to reply to this message.
                </p>
              </div>
            `,
          });
          console.log(`✅ Email sent to ${recipientEmail}`);
        }
      }
    } catch (emailError) {
      console.error("❌ Failed to send email notifications:", emailError);
      // Don't fail the whole operation if email fails
    }

    revalidatePath("/list/messages");
    return { success: true, error: false, message: "Message sent!" };
  } catch (err) {
    console.log(err);
    return { success: false, error: true, message: "Something went wrong!" };
  }
};

export const deleteMessage = async (
  currentState: CurrentState,
  data: FormData
) => {
  const id = data.get("id") as string;
  try {
    const schoolId = await getSchoolId();
    await prisma.message.deleteMany({
      where: {
        id: parseInt(id),
        schoolId: schoolId,
      },
    });

    revalidatePath("/list/messages");
    return { success: true, error: false, message: "Message deleted!" };
  } catch (err) {
    console.log(err);
    return { success: false, error: true, message: "Something went wrong!" };
  }
};

// ASSIGNMENT ACTIONS

export const createAssignment = async (
  currentState: CurrentState,
  data: any // Using any temporarily to avoid schema import issues if not synced
) => {
  try {
    const schoolId = await getSchoolId();

    const lesson = await prisma.lesson.findFirst({ where: { id: data.lessonId, schoolId } });
    if (!lesson) {
      return { success: false, error: true, message: "Invalid lesson." };
    }

    await prisma.assignment.create({
      data: {
        title: data.title,
        startDate: data.startDate,
        dueDate: data.dueDate,
        lessonId: data.lessonId,
        schoolId: schoolId,
      },
    });

    revalidatePath("/list/assignments");
    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};

export const updateAssignment = async (
  currentState: CurrentState,
  data: any // Using any temporarily
) => {
  try {
    const schoolId = await getSchoolId();
    await prisma.assignment.updateMany({
      where: {
        id: data.id,
        schoolId: schoolId,
      },
      data: {
        title: data.title,
        startDate: data.startDate,
        dueDate: data.dueDate,
        lessonId: data.lessonId,
      },
    });

    revalidatePath("/list/assignments");
    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};

// ADMIN ACTIONS

export const createAdmin = async (
  currentState: CurrentState,
  data: any // Using any temporarily, should define AdminSchema
) => {
  try {
    const password = await hashPassword(data.password || "");
    const id = randomUUID();
    const schoolId = await getSchoolId();

    await prisma.admin.create({
      data: {
        id: id,
        username: data.username,
        password: password,
        school: {
          connect: { id: schoolId }
        }
      },
    });

    // revalidatePath("/admin/admins");
    return { success: true, error: false };
  } catch (err: any) {
    console.log(err);
    if (err.code === "P2002") {
      return {
        success: false,
        error: true,
        message: "Username already exists!",
      };
    }
    return { success: false, error: true, message: "Something went wrong!" };
  }
};

export const updateAdmin = async (
  currentState: CurrentState,
  data: any
) => {
  try {
    const schoolId = await getSchoolId();

    // Check ownership
    const admin = await prisma.admin.findFirst({
      where: { id: data.id, schoolId: schoolId }
    });

    if (!admin) {
      return { success: false, error: true, message: "Admin not found or access denied" };
    }

    await prisma.admin.update({
      where: {
        id: data.id,
      },
      data: {
        username: data.username,
        ...(data.password !== "" && { password: await hashPassword(data.password || "") }),
      },
    });

    // revalidatePath("/admin/admins");
    return { success: true, error: false };
  } catch (err: any) {
    console.log(err);
    if (err.code === "P2002") {
      return {
        success: false,
        error: true,
        message: "Username already exists!",
      };
    }
    return { success: false, error: true, message: "Something went wrong!" };
  }
};

export const deleteAdmin = async (
  currentState: CurrentState,
  data: FormData
) => {
  const id = data.get("id") as string;
  try {
    const schoolId = await getSchoolId();

    // Prevent deleting yourself
    const session = await getSessionUser();
    if (session?.userId === id) {
      return { success: false, error: true, message: "You cannot delete your own account!" };
    }

    await prisma.admin.deleteMany({
      where: {
        id: id,
        schoolId: schoolId,
      },
    });

    // revalidatePath("/admin/admins");
    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true, message: "Something went wrong!" };
  }
};
