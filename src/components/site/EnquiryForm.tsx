import { useForm } from "react-hook-form";
import { useState } from "react";
import { CheckCircle2, Mail, Phone, MapPin } from "lucide-react";

type FormData = {
  name: string;
  mobile: string;
  email: string;
  course: string;
  message: string;
};

const courseOptions = [
  "AutoCAD", "Civil CAD", "Mechanical CAD", "Electrical CAD", "Revit",
  "STAAD Pro", "CATIA", "SolidWorks", "Python", "Java",
  "Full Stack Development", "Data Science", "Tally",
];

export function EnquiryForm() {
  const [sent, setSent] = useState(false);
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } =
    useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 600));
    console.log("enquiry:", data);
    setSent(true);
    reset();
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-surface">
      <div className="container-x grid lg:grid-cols-2 gap-10 lg:gap-16">
        <div data-aos="fade-right">
          <span className="eyebrow">Get in touch</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-navy">
            Book your free counselling session
          </h2>
          <p className="mt-3 text-muted-foreground max-w-md">
            Fill the form and our admissions team will call you back within 24 hours.
          </p>

          <div className="mt-8 space-y-5">
            <div className="flex items-start gap-4">
              <div className="h-11 w-11 rounded-xl bg-electric/10 text-electric flex items-center justify-center">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <div className="font-bold text-navy">Visit our campus</div>
                <div className="text-sm text-muted-foreground">Main Road, Tiruvarur, Tamil Nadu 610001</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="h-11 w-11 rounded-xl bg-electric/10 text-electric flex items-center justify-center">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <div className="font-bold text-navy">Call us</div>
                <div className="text-sm text-muted-foreground">+91 99999 99999</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="h-11 w-11 rounded-xl bg-electric/10 text-electric flex items-center justify-center">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <div className="font-bold text-navy">Email us</div>
                <div className="text-sm text-muted-foreground">info@cadpointtiruvarur.in</div>
              </div>
            </div>
          </div>
        </div>

        <form
          data-aos="fade-left"
          onSubmit={handleSubmit(onSubmit)}
          className="card-soft p-6 md:p-8 space-y-4"
        >
          <div>
            <label className="text-sm font-semibold text-navy">Student Name</label>
            <input
              {...register("name", { required: "Name is required", maxLength: 80 })}
              className="mt-1.5 w-full rounded-xl border bg-background px-4 py-3 text-sm focus:border-electric focus:ring-2 focus:ring-electric/20 outline-none"
              placeholder="Your full name"
            />
            {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>}
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-semibold text-navy">Mobile Number</label>
              <input
                {...register("mobile", {
                  required: "Mobile is required",
                  pattern: { value: /^[6-9]\d{9}$/, message: "Enter a valid 10-digit number" },
                })}
                className="mt-1.5 w-full rounded-xl border bg-background px-4 py-3 text-sm focus:border-electric focus:ring-2 focus:ring-electric/20 outline-none"
                placeholder="10-digit mobile"
              />
              {errors.mobile && <p className="mt-1 text-xs text-destructive">{errors.mobile.message}</p>}
            </div>
            <div>
              <label className="text-sm font-semibold text-navy">Email</label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email" },
                })}
                className="mt-1.5 w-full rounded-xl border bg-background px-4 py-3 text-sm focus:border-electric focus:ring-2 focus:ring-electric/20 outline-none"
                placeholder="you@example.com"
              />
              {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>}
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold text-navy">Course Interested</label>
            <select
              {...register("course", { required: "Please select a course" })}
              className="mt-1.5 w-full rounded-xl border bg-background px-4 py-3 text-sm focus:border-electric focus:ring-2 focus:ring-electric/20 outline-none"
              defaultValue=""
            >
              <option value="" disabled>Select a course</option>
              {courseOptions.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
            {errors.course && <p className="mt-1 text-xs text-destructive">{errors.course.message}</p>}
          </div>

          <div>
            <label className="text-sm font-semibold text-navy">Message</label>
            <textarea
              {...register("message", { maxLength: 500 })}
              rows={3}
              className="mt-1.5 w-full rounded-xl border bg-background px-4 py-3 text-sm focus:border-electric focus:ring-2 focus:ring-electric/20 outline-none resize-none"
              placeholder="Tell us about your goals (optional)"
            />
          </div>

          <button type="submit" disabled={isSubmitting} className="btn-primary w-full !py-3.5">
            {isSubmitting ? "Sending..." : "Submit Enquiry"}
          </button>

          {sent && (
            <div className="flex items-center gap-2 rounded-xl bg-emerald-50 text-emerald-700 px-4 py-3 text-sm">
              <CheckCircle2 className="h-4 w-4" /> Thanks! We'll contact you within 24 hours.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
