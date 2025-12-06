// Test email configuration
// Run with: npx tsx test-email.ts

import nodemailer from "nodemailer";
import * as dotenv from "dotenv";

dotenv.config();

async function testEmail() {
    console.log("🧪 Testing email configuration...\n");

    // Check environment variables
    console.log("📋 Environment Variables:");
    console.log(`EMAIL_HOST: ${process.env.EMAIL_HOST || "❌ NOT SET"}`);
    console.log(`EMAIL_PORT: ${process.env.EMAIL_PORT || "❌ NOT SET"}`);
    console.log(`EMAIL_USER: ${process.env.EMAIL_USER || "❌ NOT SET"}`);
    console.log(`EMAIL_PASS: ${process.env.EMAIL_PASS ? "✅ SET (hidden)" : "❌ NOT SET"}`);
    console.log(`EMAIL_FROM: ${process.env.EMAIL_FROM || "❌ NOT SET"}\n`);

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        console.error("❌ ERROR: EMAIL_USER and EMAIL_PASS must be set in .env file");
        console.log("\n📝 Add these to your .env file:");
        console.log("EMAIL_HOST=smtp.gmail.com");
        console.log("EMAIL_PORT=587");
        console.log("EMAIL_USER=your-email@gmail.com");
        console.log("EMAIL_PASS=your-app-password");
        console.log("EMAIL_FROM=School Portal <noreply@yourschool.com>");
        process.exit(1);
    }

    try {
        console.log("🔌 Creating transporter...");
        const transporter = nodemailer.createTransporter({
            host: process.env.EMAIL_HOST || "smtp.gmail.com",
            port: parseInt(process.env.EMAIL_PORT || "587"),
            secure: false,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
            debug: true, // Enable debug output
        });

        console.log("✅ Transporter created\n");

        console.log("🔍 Verifying connection...");
        await transporter.verify();
        console.log("✅ Connection verified!\n");

        console.log("📧 Sending test email...");
        const info = await transporter.sendMail({
            from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
            to: process.env.EMAIL_USER, // Send to yourself
            subject: "Test Email from School Portal",
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #333;">✅ Email Configuration Working!</h2>
                    <p>This is a test email from your School Portal application.</p>
                    <p><strong>Sent at:</strong> ${new Date().toLocaleString()}</p>
                    <p style="color: #666; font-size: 14px;">
                        If you received this email, your email configuration is working correctly.
                    </p>
                </div>
            `,
        });

        console.log("✅ Email sent successfully!");
        console.log(`📬 Message ID: ${info.messageId}`);
        console.log(`📨 Preview URL: ${nodemailer.getTestMessageUrl(info)}`);
        console.log("\n🎉 Email configuration is working correctly!");
        console.log(`Check your inbox at: ${process.env.EMAIL_USER}`);
    } catch (error: any) {
        console.error("\n❌ ERROR sending email:");
        console.error(error.message);

        if (error.code === "EAUTH") {
            console.log("\n💡 Authentication failed. Common fixes:");
            console.log("1. For Gmail: Use an App Password, not your regular password");
            console.log("   - Go to: https://myaccount.google.com/apppasswords");
            console.log("   - Generate a new app password");
            console.log("   - Update EMAIL_PASS in .env");
            console.log("2. Enable 2-Step Verification first");
            console.log("3. Make sure 'Less secure app access' is enabled (if using regular password)");
        } else if (error.code === "ECONNECTION" || error.code === "ETIMEDOUT") {
            console.log("\n💡 Connection failed. Common fixes:");
            console.log("1. Check your internet connection");
            console.log("2. Verify EMAIL_HOST and EMAIL_PORT are correct");
            console.log("3. Check if your firewall is blocking the connection");
        }
    }
}

testEmail();
