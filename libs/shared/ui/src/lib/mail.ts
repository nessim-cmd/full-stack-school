import nodemailer from "nodemailer";

export const sendCredentials = async (
  email: string,
  username: string,
  pass: string,
  role: string
) => {
  try {
    const port = parseInt(process.env.SMTP_PORT || "587");
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: port,
      secure: port === 465, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS?.replace(/\s+/g, ""), // Remove spaces from app password
      },
    });

    const info = await transporter.sendMail({
      from: `"School Management System" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Your Account Credentials",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #4F46E5;">Welcome to School Management System</h2>
          <p>Hello,</p>
          <p>Your account has been created successfully. Here are your login credentials:</p>
          <div style="background-color: #f3f4f6; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Role:</strong> ${role}</p>
            <p><strong>Username:</strong> ${username}</p>
            <p><strong>Password:</strong> ${pass}</p>
          </div>
          <p>Please login and change your password immediately.</p>
          <p>Best regards,<br>School Admin</p>
        </div>
      `,
    });

    console.log("Message sent: %s", info.messageId);
    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error };
  }
};

export const sendEventNotification = async (
  email: string,
  userName: string,
  eventTitle: string,
  eventDescription: string,
  startTime: Date,
  endTime: Date,
  className?: string
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

    const formatDate = (date: Date) => {
      return new Intl.DateTimeFormat("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }).format(date);
    };

    const formatTime = (date: Date) => {
      return new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }).format(date);
    };

    const classInfo = className ? `for ${className}` : "for all classes";

    const info = await transporter.sendMail({
      from: `"School Management System" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `📅 New Event: ${eventTitle}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px;">📅 New Event Announcement</h1>
          </div>
          
          <div style="background-color: #ffffff; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 10px 10px;">
            <p style="font-size: 16px; color: #374151;">Hello ${userName},</p>
            
            <p style="font-size: 16px; color: #374151; line-height: 1.6;">
              A new event has been scheduled ${classInfo}. Please mark your calendar!
            </p>
            
            <div style="background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%); padding: 25px; border-radius: 8px; margin: 25px 0; border-left: 4px solid #667eea;">
              <h2 style="color: #667eea; margin-top: 0; font-size: 24px;">${eventTitle}</h2>
              <p style="color: #6b7280; font-size: 15px; line-height: 1.8; margin: 15px 0;">
                ${eventDescription}
              </p>
              
              <div style="margin-top: 20px; padding-top: 20px; border-top: 2px solid #d1d5db;">
                <p style="margin: 8px 0; color: #374151;">
                  <strong style="color: #667eea;">📅 Date:</strong> ${formatDate(startTime)}
                </p>
                <p style="margin: 8px 0; color: #374151;">
                  <strong style="color: #667eea;">🕐 Time:</strong> ${formatTime(startTime)} - ${formatTime(endTime)}
                </p>
                ${className ? `<p style="margin: 8px 0; color: #374151;">
                  <strong style="color: #667eea;">🏫 Class:</strong> ${className}
                </p>` : `<p style="margin: 8px 0; color: #374151;">
                  <strong style="color: #667eea;">🏫 Audience:</strong> All Classes
                </p>`}
              </div>
            </div>
            
            <div style="background-color: #fef3c7; padding: 15px; border-radius: 6px; border-left: 4px solid #f59e0b; margin: 20px 0;">
              <p style="margin: 0; color: #92400e; font-size: 14px;">
                <strong>⚠️ Important:</strong> Please ensure your attendance and make necessary arrangements.
              </p>
            </div>
            
            <p style="font-size: 14px; color: #6b7280; margin-top: 30px;">
              If you have any questions, please contact the school administration.
            </p>
            
            <p style="font-size: 14px; color: #374151; margin-top: 20px;">
              Best regards,<br>
              <strong>School Administration</strong>
            </p>
          </div>
          
          <div style="text-align: center; padding: 20px; color: #9ca3af; font-size: 12px;">
            <p style="margin: 5px 0;">School Management System</p>
            <p style="margin: 5px 0;">This is an automated notification. Please do not reply to this email.</p>
          </div>
        </div>
      `,
    });

    console.log("Event notification email sent: %s", info.messageId);
    return { success: true };
  } catch (error) {
    console.error("Error sending event notification email:", error);
    return { success: false, error };
  }
};

export const sendMessageNotification = async (
  email: string,
  recipientName: string,
  senderName: string,
  subject: string
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
      to: email,
      subject: `📩 New Message: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
          <div style="background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px;">📩 New Message Received</h1>
          </div>
          
          <div style="background-color: #ffffff; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 10px 10px;">
            <p style="font-size: 16px; color: #374151;">Hello ${recipientName},</p>
            
            <p style="font-size: 16px; color: #374151; line-height: 1.6;">
              You have received a new message from <strong>${senderName}</strong>.
            </p>
            
            <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #3b82f6;">
              <p style="margin: 0; color: #4b5563; font-size: 14px;">
                <strong>Subject:</strong> ${subject}
              </p>
            </div>
            
            <div style="text-align: center; margin-top: 30px;">
              <a href="${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/list/messages" 
                 style="background-color: #3b82f6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">
                View Message
              </a>
            </div>
            
            <p style="font-size: 14px; color: #6b7280; margin-top: 30px;">
              Please log in to the portal to reply to this message.
            </p>
            
            <p style="font-size: 14px; color: #374151; margin-top: 20px;">
              Best regards,<br>
              <strong>School Administration</strong>
            </p>
          </div>
        </div>
      `,
    });

    console.log("Message notification email sent: %s", info.messageId);
    return { success: true };
  } catch (error) {
    console.error("Error sending message notification email:", error);
    return { success: false, error };
  }
};

export const sendOTP = async (email: string, otp: string) => {
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
      to: email,
      subject: "Password Reset OTP",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #4F46E5;">Password Reset Request</h2>
          <p>Hello,</p>
          <p>You requested a password reset. Here is your OTP code:</p>
          <div style="background-color: #f3f4f6; padding: 15px; border-radius: 5px; margin: 20px 0; text-align: center;">
            <h1 style="letter-spacing: 5px; color: #333;">${otp}</h1>
          </div>
          <p>This code will expire in 10 minutes.</p>
          <p>If you did not request this, please ignore this email.</p>
          <p>Best regards,<br>School Admin</p>
        </div>
      `,
    });

    console.log("OTP sent: %s", info.messageId);
    return { success: true };
  } catch (error) {
    console.error("Error sending OTP:", error);
    return { success: false, error };
  }
};
