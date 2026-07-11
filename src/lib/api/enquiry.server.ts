import { createServerFn } from "@tanstack/react-start";
import { Resend } from "resend";
import { enquirySchema } from "../enquiry";
import { supabaseServer } from "../supabase.server";

// Helper to safely resolve env variables on the server
const resolveEnv = (key: string) => {
  if (typeof process !== "undefined" && process.env[key]) {
    return process.env[key];
  }
  if (typeof import.meta !== "undefined" && import.meta.env && import.meta.env[key]) {
    return import.meta.env[key];
  }
  return "";
};

const RESEND_API_KEY = resolveEnv("VITE_RESEND_API_KEY");
const RESEND_FROM_EMAIL = resolveEnv("VITE_RESEND_FROM_EMAIL") || "onboarding@resend.dev";

const resend = RESEND_API_KEY ? new Resend(RESEND_API_KEY) : null;

// ─── Enquiry Form Server Function ──────────────────────────────────────────
export const submitEnquiry = createServerFn({ method: "POST" })
  .inputValidator(enquirySchema)
  .handler(async ({ data }) => {
    console.log("[Enquiry Server] 1. Validation successful. Received submission for:", data.email);

    try {
      // --- 1. Supabase Insert ---
      const insertPayload = {
        student_name: data.name,
        mobile_number: data.mobile,
        email: data.email,
        course_interested: data.course,
        sub_course: data.subCourse,
        message: data.message || null,
      };

      console.log("[Enquiry Server] 2. Inserting into Supabase...", insertPayload);

      const { data: dbData, error: dbError } = await supabaseServer
        .from("enquiries")
        .insert(insertPayload)
        .select()
        .single();

      if (dbError) {
        console.error("[Enquiry Server] Supabase Insert Error:", dbError);
        throw new Error(dbError.message || "Failed to save enquiry to database.");
      }

      console.log("[Enquiry Server] 3. Database insertion successful. ID:", dbData.id);


      // --- 2. Send Emails (Resend) ---
      // We wrap this in a separate try/catch so if email fails, we don't roll back the success state
      // since the database record is safely stored.
      if (resend) {
        try {
          console.log("[Enquiry Server] 4. Sending email notifications...");
          const submittedDate = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

          // Send to Admin
          await resend.emails.send({
            from: `CADPOINT Enquiries <${RESEND_FROM_EMAIL}>`,
            to: ["sshathiskumar54@gmail.com"], // Using the email from the contact page
            subject: `New Course Enquiry: ${data.name} - ${data.course}`,
            html: `
              <h2>New Student Enquiry</h2>
              <p><strong>Name:</strong> ${data.name}</p>
              <p><strong>Mobile:</strong> ${data.mobile}</p>
              <p><strong>Email:</strong> ${data.email}</p>
              <p><strong>Domain:</strong> ${data.course}</p>
              <p><strong>Course:</strong> ${data.subCourse}</p>
              <p><strong>Message:</strong> ${data.message || "N/A"}</p>
              <p><strong>Submitted At:</strong> ${submittedDate}</p>
            `,
          });
          console.log("[Enquiry Server] - Admin email sent successfully.");

          // Send to Student
          await resend.emails.send({
            from: `CADPOINT Tiruvarur <${RESEND_FROM_EMAIL}>`,
            to: [data.email],
            subject: "Thank you for your enquiry - CADPOINT Tiruvarur",
            html: `
              <h2>Thank You for Contacting Us, ${data.name}!</h2>
              <p>We have successfully received your enquiry regarding the <strong>${data.subCourse}</strong> course under the <strong>${data.course}</strong> category.</p>
              <p>Our admissions team will review your details and get back to you within 24 hours.</p>
              <br/>
              <p><strong>Your Message:</strong></p>
              <blockquote>${data.message || "No message provided."}</blockquote>
              <br/>
              <p>Best Regards,</p>
              <p><strong>CADPOINT Tiruvarur Team</strong></p>
              <p>+91 82484 90202 | cadpointthiruvarur@gmail.com</p>
            `,
          });
          console.log("[Enquiry Server] - Student email sent successfully.");
        } catch (emailError) {
          console.error("[Enquiry Server] Email Sending Error:", emailError);
          // Non-fatal error, we still return success to the user
        }
      } else {
        console.warn("[Enquiry Server] Resend API key missing. Emails were not sent.");
      }

      console.log("[Enquiry Server] 5. Final Success. Flow complete.");

      return {
        success: true,
        message: "Your enquiry has been submitted successfully.",
      };
    } catch (err: any) {
      console.error("[Enquiry Server] Unexpected Error during flow:", err);
      // We throw an error so the client's `onError` or `catch` block can handle it
      throw new Error(err.message || "An unexpected error occurred during submission.");
    }
  });
