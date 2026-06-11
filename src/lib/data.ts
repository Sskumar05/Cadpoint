import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";

export const courses = [
  { slug: "autocad", name: "AutoCAD", desc: "2D & 3D drafting for design professionals.", duration: "2 Months", cat: "CAD", grad: "from-blue-500 to-indigo-600",
    details: "Learn the industry standard for computer-aided design. This comprehensive AutoCAD course covers everything from basic 2D drafting commands to advanced 3D modeling techniques. Perfect for beginners and professionals looking to upgrade their skills." },
  { slug: "civil-cad", name: "Civil CAD", desc: "Site plans, layouts & structural drawings.", duration: "3 Months", cat: "Civil", grad: "from-amber-500 to-orange-600",
    details: "Master the tools needed for civil engineering drafting. Learn to create detailed site plans, floor plans, elevations, and structural drawings that meet industry standards." },
  { slug: "mechanical-cad", name: "Mechanical CAD", desc: "Part modeling, assembly & drafting.", duration: "3 Months", cat: "Mech", grad: "from-rose-500 to-red-600",
    details: "Focus on the mechanical aspects of CAD. You'll learn parametric part modeling, complex assemblies, and how to generate production-ready drafting and detailing." },
  { slug: "electrical-cad", name: "Electrical CAD", desc: "Schematic, panel & wiring design.", duration: "2 Months", cat: "Elec", grad: "from-yellow-500 to-amber-600",
    details: "Specialized training for electrical engineers and draftsmen. Learn to create precise electrical schematics, panel layouts, and comprehensive wiring diagrams." },
  { slug: "revit-architecture", name: "Revit Architecture", desc: "BIM modeling for architects.", duration: "3 Months", cat: "BIM", grad: "from-cyan-500 to-blue-600",
    details: "Step into the world of Building Information Modeling (BIM). This course teaches you how to design, coordinate, and document architectural projects efficiently using Revit." },
  { slug: "staad-pro", name: "STAAD Pro", desc: "Structural analysis & design.", duration: "2 Months", cat: "Civil", grad: "from-emerald-500 to-teal-600",
    details: "Learn advanced structural analysis and design. This course covers everything from modeling and loading to analyzing and designing complex concrete and steel structures." },
  { slug: "catia", name: "CATIA", desc: "Advanced surface & product design.", duration: "3 Months", cat: "Mech", grad: "from-violet-500 to-purple-600",
    details: "Master advanced product design with CATIA. This course focuses on complex surface modeling, mechanical design, and assemblies used in aerospace and automotive industries." },
  { slug: "solidworks", name: "SolidWorks", desc: "Parametric 3D modeling.", duration: "3 Months", cat: "Mech", grad: "from-sky-500 to-indigo-600",
    details: "Become proficient in SolidWorks. Learn parametric 3D modeling, sheet metal design, weldments, and how to create detailed engineering drawings." },
  { slug: "python-programming", name: "Python Programming", desc: "From basics to automation & APIs.", duration: "3 Months", cat: "IT", grad: "from-green-500 to-emerald-600",
    details: "Start your programming journey with Python. This course covers core concepts, data structures, object-oriented programming, and practical automation scripts." },
  { slug: "java-full-stack", name: "Java Full Stack", desc: "Core Java, Spring Boot & databases.", duration: "4 Months", cat: "IT", grad: "from-red-500 to-rose-600",
    details: "Become a complete Java developer. Learn Core Java, advanced Java concepts, Spring Boot framework, REST APIs, and database integration for enterprise applications." },
  { slug: "full-stack-development", name: "Full Stack Development", desc: "MERN stack with live projects.", duration: "5 Months", cat: "IT", grad: "from-indigo-500 to-purple-600",
    details: "Master the MERN stack (MongoDB, Express.js, React, Node.js). Build responsive frontends and robust backends through hands-on, live project development." },
  { slug: "data-science", name: "Data Science", desc: "Python, ML, Pandas & visualization.", duration: "5 Months", cat: "IT", grad: "from-fuchsia-500 to-pink-600",
    details: "Dive into data science. Learn data manipulation with Pandas, data visualization techniques, and foundational Machine Learning algorithms using Python." },
  { slug: "tally-prime", name: "Tally Prime", desc: "Accounting, GST & business analytics.", duration: "2 Months", cat: "Biz", grad: "from-lime-500 to-green-600",
    details: "Essential training for accounting professionals. Learn comprehensive business accounting, inventory management, taxation (GST), and financial reporting using Tally Prime." },
];

export const placementCompanies = ["Larsen & Toubro", "TCS", "Infosys", "Wipro", "Cognizant", "L&T Construction", "Godrej", "Ashok Leyland", "HCL", "Accenture", "Mahindra", "Capgemini"];

export const placementStories = [
  { name: "Karthik R.", role: "AutoCAD Designer", company: "L&T Construction", pkg: "₹4.8 LPA", course: "Civil CAD" },
  { name: "Priya M.", role: "Mechanical Engineer", company: "Ashok Leyland", pkg: "₹5.2 LPA", course: "CATIA + SolidWorks" },
  { name: "Suresh K.", role: "Full Stack Developer", company: "TCS", pkg: "₹6.5 LPA", course: "Full Stack Development" },
  { name: "Divya S.", role: "BIM Engineer", company: "AECOM India", pkg: "₹5.8 LPA", course: "Revit Architecture" },
  { name: "Arun V.", role: "Python Developer", company: "Infosys", pkg: "₹4.5 LPA", course: "Python Programming" },
  { name: "Sneha P.", role: "Design Engineer", company: "Godrej", pkg: "₹5.0 LPA", course: "AutoCAD" },
  { name: "Rahul M.", role: "Java Developer", company: "Wipro", pkg: "₹6.0 LPA", course: "Java Full Stack" },
  { name: "Nandini T.", role: "Data Analyst", company: "Cognizant", pkg: "₹5.5 LPA", course: "Data Science" },
];

export const galleryImages = [
  { src: g1, alt: "CAD training lab", span: "md:col-span-2 md:row-span-2" },
  { src: g2, alt: "Graduation ceremony", span: "" },
  { src: g3, alt: "Classroom session", span: "" },
  { src: g4, alt: "Placement interview", span: "md:col-span-2" },
  // Reusing images to create a larger gallery
  { src: g2, alt: "Advanced IT Lab", span: "" },
  { src: g3, alt: "Group Discussion", span: "" },
  { src: g1, alt: "Practical Session", span: "md:col-span-2" },
  { src: g4, alt: "Career Guidance", span: "" },
];

export const testimonialsData = [
  { name: "Aravind P.", course: "AutoCAD + Revit", text: "CADPOINT changed my career. The trainers explain every concept practically, and I got placed within a month of finishing my course.", rating: 5 },
  { name: "Meena R.", course: "Full Stack Development", text: "Loved the live projects and one-on-one mentorship. The placement team helped me crack my first developer interview.", rating: 5 },
  { name: "Vignesh S.", course: "CATIA", text: "Best institute in Tiruvarur for mechanical CAD. Industry-grade labs and friendly faculty. Highly recommended!", rating: 5 },
  { name: "Lakshmi K.", course: "Python + Data Science", text: "Hands-on training with real datasets. I now work as a data analyst thanks to CADPOINT's career support.", rating: 5 },
  { name: "Rohit V.", course: "Java Full Stack", text: "The curriculum is very up-to-date with current industry standards. The mock interviews were especially helpful.", rating: 5 },
];
