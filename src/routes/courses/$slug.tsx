import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { PageWrapper } from "@/components/site/PageWrapper";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { Clock, CheckCircle2, ArrowRight } from "lucide-react";
import { courses } from "@/lib/data";

export const Route = createFileRoute("/courses/$slug")({
  head: ({ params }) => {
    const course = courses.find((c) => c.slug === params.slug);
    return {
      meta: [
        { title: `${course?.name || "Course"} | CADPOINT Tiruvarur` },
        { name: "description", content: course?.desc || "Course details." },
      ],
    };
  },
  component: CourseDetailsPage,
});

function CourseDetailsPage() {
  const { slug } = Route.useParams();
  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold">Course Not Found</h1>
        <Link to="/courses" className="mt-4 btn-primary">Back to Courses</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <PageWrapper className="flex-1">
        <div className="container-x">
          <Breadcrumb title={course.name} />
          
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-8">
              <div data-aos="fade-up">
                <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-white bg-electric rounded-full">
                  {course.cat}
                </span>
                <h1 className="text-4xl md:text-5xl font-extrabold text-navy leading-tight">
                  {course.name}
                </h1>
                <p className="mt-4 text-xl text-muted-foreground">
                  {course.desc}
                </p>
              </div>

              <div data-aos="fade-up" data-aos-delay="100" className="prose prose-lg max-w-none text-foreground/80">
                <h3 className="text-2xl font-bold text-navy">Course Overview</h3>
                <p>{course.details}</p>
                
                <h3 className="text-2xl font-bold text-navy mt-8">What You Will Learn</h3>
                <ul className="space-y-3 mt-4">
                  {[
                    "Industry-standard tools and techniques",
                    "Practical hands-on project experience",
                    "Real-world application and problem solving",
                    "Preparation for certification and employment"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-electric flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-1" data-aos="fade-left">
              <div className="card-soft p-6 sticky top-28">
                <div className={`h-32 rounded-xl mb-6 bg-gradient-to-br ${course.grad} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.25),transparent_60%)]" />
                  <span className="font-display text-4xl font-extrabold text-white drop-shadow">
                    {course.name.split(" ")[0]}
                  </span>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-between pb-4 border-b">
                    <span className="text-muted-foreground font-medium">Duration</span>
                    <span className="flex items-center gap-1.5 font-bold text-navy">
                      <Clock className="h-4 w-4 text-electric" /> {course.duration}
                    </span>
                  </div>
                  <div className="flex items-center justify-between pb-4 border-b">
                    <span className="text-muted-foreground font-medium">Mode</span>
                    <span className="font-bold text-navy">Offline / Online</span>
                  </div>
                  <div className="flex items-center justify-between pb-4 border-b">
                    <span className="text-muted-foreground font-medium">Placement</span>
                    <span className="font-bold text-navy">100% Assistance</span>
                  </div>
                </div>

                <Link to="/enquiry" className="btn-primary w-full justify-center">
                  Enquire Now <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
