import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { CheckCircle2, Mail, Phone, MapPin } from "lucide-react";
import { useRouter } from "@tanstack/react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { enquirySchema, type EnquiryInput } from "@/lib/enquiry";
import { submitEnquiry } from "@/lib/api/enquiry.server";
import { subCourseMap } from "@/lib/data";

const courseOptions = [
 "Civil & Architecture",
"Mechanical & Aerospace",
"MEP, Piping & Plant",
"Enterprise Resource Planning",
"Project Management",
"Finance & Accounting",
"General CAD & QA",
"Data Analytics & Reporting",
"Electrical & Electronics",
"Digital Marketing",
];

export function EnquiryForm({ hideHeading }: { hideHeading?: boolean }) {
  const [sent, setSent] = useState(false);
  const router = useRouter();
  
  const { register, handleSubmit, reset, watch, setValue, formState: { errors, isSubmitting } } =
    useForm<EnquiryInput>({
      resolver: zodResolver(enquirySchema)
    });

  const selectedCourse = watch("course");

  useEffect(() => {
    setValue("subCourse", "");
  }, [selectedCourse, setValue]);

  const onSubmit = async (data: EnquiryInput) => {
    try {
      // Call TanStack Start server function
      const result = await submitEnquiry({ data });

      if (result.success) {
        toast.success(result.message || "Enquiry submitted successfully!");
        setSent(true);
        reset();
        
        // Redirect to thank you page after 1.5s
        setTimeout(() => {
          setSent(false);
          router.navigate({ to: "/thank-you" });
        }, 1500);
      }
    } catch (error: any) {
      console.error("Enquiry submission failed:", error);
      toast.error(error.message || "Failed to submit enquiry. Please try again.");
    }
  };

  const formContent = (
    <form
      data-aos={hideHeading ? undefined : "fade-left"}
      onSubmit={handleSubmit(onSubmit)}
      className={`space-y-4 ${!hideHeading ? "card-soft p-6 md:p-8" : ""}`}
    >
      <div>
        <label className="text-sm font-semibold text-charcoal">Student Name</label>
        <input
          {...register("name")}
          className="mt-1.5 w-full rounded-xl border bg-background px-4 py-3 text-sm focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 outline-none"
          placeholder="Your full name"
        />
        {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>}
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-semibold text-charcoal">Mobile Number</label>
          <input
            {...register("mobile")}
            className="mt-1.5 w-full rounded-xl border bg-background px-4 py-3 text-sm focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 outline-none"
            placeholder="10-digit mobile"
          />
          {errors.mobile && <p className="mt-1 text-xs text-destructive">{errors.mobile.message}</p>}
        </div>
        <div>
          <label className="text-sm font-semibold text-charcoal">Email</label>
          <input
            type="email"
            {...register("email")}
            className="mt-1.5 w-full rounded-xl border bg-background px-4 py-3 text-sm focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 outline-none"
            placeholder="you@example.com"
          />
          {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-semibold text-charcoal">Domain</label>
          <select
            {...register("course")}
            className="mt-1.5 w-full rounded-xl border bg-background px-4 py-3 text-sm focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 outline-none"
            defaultValue=""
          >
            <option value="" disabled>Select a course</option>
            {courseOptions.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
          {errors.course && <p className="mt-1 text-xs text-destructive">{errors.course.message}</p>}
        </div>

        <div>
          <label className="text-sm font-semibold text-charcoal">Course</label>
          <select
            {...register("subCourse")}
            className="mt-1.5 w-full rounded-xl border bg-background px-4 py-3 text-sm focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 outline-none disabled:opacity-50 disabled:cursor-not-allowed"
            defaultValue=""
            disabled={!selectedCourse}
          >
            <option value="" disabled>
              {selectedCourse ? "Select a sub-course" : "Select a category first"}
            </option>
            {selectedCourse && subCourseMap[selectedCourse]?.map((sc) => (
              <option key={sc} value={sc}>{sc}</option>
            ))}
          </select>
          {errors.subCourse && <p className="mt-1 text-xs text-destructive">{errors.subCourse.message}</p>}
        </div>
      </div>

      <div>
        <label className="text-sm font-semibold text-charcoal">Message</label>
        <textarea
          {...register("message")}
          rows={3}
          className="mt-1.5 w-full rounded-xl border bg-background px-4 py-3 text-sm focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 outline-none resize-none"
          placeholder="Tell us about your goals (optional)"
        />
        {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message.message}</p>}
      </div>

      <button type="submit" disabled={isSubmitting} className="btn-primary w-full !py-3.5">
        {isSubmitting ? "Sending..." : "Submit Enquiry"}
      </button>

      {sent && (
        <div className="flex items-center gap-2 rounded-xl bg-emerald-50 text-emerald-700 px-4 py-3 text-sm">
          <CheckCircle2 className="h-4 w-4" /> Enquiry Submitted ✓ Redirecting...
        </div>
      )}
    </form>
  );

  if (hideHeading) {
    return formContent;
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-surface">
      <div className="container-x grid lg:grid-cols-2 gap-10 lg:gap-16">
        <div data-aos="fade-right">
          <span className="eyebrow">Get in touch</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-charcoal">
            Book your free counselling session
          </h2>
          <p className="mt-3 text-muted-foreground max-w-md">
            Fill the form and our admissions team will call you back within 24 hours.
          </p>

          <div className="mt-8 space-y-5">
            <div className="flex items-start gap-4">
              <div className="h-11 w-11 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <div className="font-bold text-charcoal">Visit our campus</div>
                <div className="text-sm text-muted-foreground">Main Road, Tiruvarur, Tamil Nadu 610001</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="h-11 w-11 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <div className="font-bold text-charcoal">Call us</div>
                <div className="text-sm text-muted-foreground">+91 99999 99999</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="h-11 w-11 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <div className="font-bold text-charcoal">Email us</div>
                <div className="text-sm text-muted-foreground">info@cadpointtiruvarur.in</div>
              </div>
            </div>
          </div>
        </div>

        {formContent}
      </div>
    </section>
  );
}
