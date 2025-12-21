import nodemailer from "nodemailer";

export const sendAbsenceNotification = async (
    studentEmail: string,
    studentName: string,
    date: string,
    lessonName: string,
    lessonTime?: { start: string; end: string }
) => {
    try {
        const port = parseInt(process.env.SMTP_PORT || "587");
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: port,
            secure: port === 465,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS?.replace(/\s+/g, ""),
            },
        });

        const info = await transporter.sendMail({
            from: `"School Management System" <${process.env.SMTP_USER}>`,
            to: studentEmail,
            subject: "Absence Notification",
            html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #DC2626;">Absence Notification</h2>
          <p>Dear ${studentName},</p>
          <p>This is to inform you that you were marked <strong>absent</strong> for the following lesson:</p>
          <div style="background-color: #FEE2E2; padding: 15px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #DC2626;">
            <p><strong>Lesson:</strong> ${lessonName}</p>
            <p><strong>Date:</strong> ${date}</p>
            ${lessonTime
                    ? `<p><strong>Time:</strong> ${lessonTime.start} - ${lessonTime.end}</p>`
                    : ""
                }
          </div>
          <p>If you believe this is an error, please contact your teacher or the school administration.</p>
          <p>Best regards,<br>School Administration</p>
        </div>
      `,
        });

        console.log("Absence notification sent: %s", info.messageId);
        return { success: true };
    } catch (error) {
        console.error("Error sending absence notification:", error);
        return { success: false, error };
    }
};
