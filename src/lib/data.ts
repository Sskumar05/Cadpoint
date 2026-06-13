import g1 from "@/assets/cad_img1.png";
import g2 from "@/assets/cad_img2.png";
import g3 from "@/assets/cad_img3.png";
import g4 from "@/assets/cad_img4.png";
import g5 from "@/assets/cad_img5.png";
import g7 from "@/assets/cad_img7.png";
import g8 from "@/assets/cad_img8.png";
import g9 from "@/assets/cad_img9.png";
import g10 from "@/assets/cad_img10.png";
import g11 from "@/assets/cad_img11.png";

import imgAutocad from "@/assets/courses/autocad.png";
import imgCivil from "@/assets/courses/civil_cad.png";
import imgMech from "@/assets/courses/mechanical_cad.png";
import imgElec from "@/assets/courses/electrical_cad.png";
import imgRevit from "@/assets/courses/revit.png";
import imgStaad from "@/assets/courses/staad_pro.png";
import imgCatia from "@/assets/courses/catia.png";
import imgSolidworks from "@/assets/courses/solidworks.png";
import imgPython from "@/assets/courses/python.jpg";
// import imgJava from "@/assets/courses/java.jpg";
import imgFullStack from "@/assets/courses/full_stack.jpg";
import imgDataScience from "@/assets/courses/data_science.jpg";
import imgTally from "@/assets/courses/tally.jpg";

export const courses = [
  { slug: "autocad", name: "AutoCAD", desc: "2D & 3D drafting for design professionals.", duration: "2 Months", cat: "CAD", image: imgAutocad,
    details: "Learn the industry standard for computer-aided design. This comprehensive AutoCAD course covers everything from basic 2D drafting commands to advanced 3D modeling techniques. Perfect for beginners and professionals looking to upgrade their skills." },
  { slug: "civil-cad", name: "Civil CAD", desc: "Site plans, layouts & structural drawings.", duration: "3 Months", cat: "Civil", image: imgCivil,
    details: "Master the tools needed for civil engineering drafting. Learn to create detailed site plans, floor plans, elevations, and structural drawings that meet industry standards." },
  { slug: "mechanical-cad", name: "Mechanical CAD", desc: "Part modeling, assembly & drafting.", duration: "3 Months", cat: "Mech", image: imgMech,
    details: "Focus on the mechanical aspects of CAD. You'll learn parametric part modeling, complex assemblies, and how to generate production-ready drafting and detailing." },
  { slug: "electrical-cad", name: "Electrical CAD", desc: "Schematic, panel & wiring design.", duration: "2 Months", cat: "Elec", image: imgElec,
    details: "Specialized training for electrical engineers and draftsmen. Learn to create precise electrical schematics, panel layouts, and comprehensive wiring diagrams." },
  { slug: "revit-architecture", name: "Revit Architecture", desc: "BIM modeling for architects.", duration: "3 Months", cat: "BIM", image: imgRevit,
    details: "Step into the world of Building Information Modeling (BIM). This course teaches you how to design, coordinate, and document architectural projects efficiently using Revit." },
  { slug: "staad-pro", name: "STAAD Pro", desc: "Structural analysis & design.", duration: "2 Months", cat: "Civil", image: imgStaad,
    details: "Learn advanced structural analysis and design. This course covers everything from modeling and loading to analyzing and designing complex concrete and steel structures." },
  { slug: "catia", name: "CATIA", desc: "Advanced surface & product design.", duration: "3 Months", cat: "Mech", image: imgCatia,
    details: "Master advanced product design with CATIA. This course focuses on complex surface modeling, mechanical design, and assemblies used in aerospace and automotive industries." },
  { slug: "solidworks", name: "SolidWorks", desc: "Parametric 3D modeling.", duration: "3 Months", cat: "Mech", image: imgSolidworks,
    details: "Become proficient in SolidWorks. Learn parametric 3D modeling, sheet metal design, weldments, and how to create detailed engineering drawings." },
  { slug: "python-programming", name: "Python Programming", desc: "From basics to automation & APIs.", duration: "3 Months", cat: "IT", image: imgPython,
    details: "Start your programming journey with Python. This course covers core concepts, data structures, object-oriented programming, and practical automation scripts." },
  // { slug: "java-full-stack", name: "Java Full Stack", desc: "Core Java, Spring Boot & databases.", duration: "4 Months", cat: "IT", image: imgJava,
  //   details: "Become a complete Java developer. Learn Core Java, advanced Java concepts, Spring Boot framework, REST APIs, and database integration for enterprise applications." },
  { slug: "full-stack-development", name: "Full Stack Development", desc: "MERN stack with live projects.", duration: "5 Months", cat: "IT", image: imgFullStack,
    details: "Master the MERN stack (MongoDB, Express.js, React, Node.js). Build responsive frontends and robust backends through hands-on, live project development." },
  { slug: "data-science", name: "Data Science", desc: "Python, ML, Pandas & visualization.", duration: "5 Months", cat: "IT", image: imgDataScience,
    details: "Dive into data science. Learn data manipulation with Pandas, data visualization techniques, and foundational Machine Learning algorithms using Python." },
  { slug: "tally-prime", name: "Tally Prime", desc: "Accounting, GST & business analytics.", duration: "2 Months", cat: "Biz", image: imgTally,
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
  // { name: "Rahul M.", role: "Java Developer", company: "Wipro", pkg: "₹6.0 LPA", course: "Java Full Stack" },
  { name: "Nandini T.", role: "Data Analyst", company: "Cognizant", pkg: "₹5.5 LPA", course: "Data Science" },
];

export const galleryImages = [
  { src: g1, alt: "CAD training lab", span: "md:col-span-2 md:row-span-2" },
  { src: g2, alt: "Graduation ceremony", span: "" },
  { src: g3, alt: "Classroom session", span: "" },
  { src: g4, alt: "Placement interview", span: "md:col-span-2" },
  // Reusing images to create a larger gallery
  { src: g5, alt: "Advanced IT Lab", span: "" },
  { src: g7, alt: "Practical Session", span: "md:col-span-2" },
  { src: g8, alt: "Career Guidance", span: "" },
  { src: g9, alt: "Placement interview", span: "md:col-span-2" },
  { src: g10, alt: "Advanced IT Lab", span: "" },
  { src: g11, alt: "Group Discussion", span: "" },
];

export const testimonialsData = [
  { name: "Aravind P.", course: "AutoCAD + Revit", text: "CADPOINT changed my career. The trainers explain every concept practically, and I got placed within a month of finishing my course.", rating: 5 },
  { name: "Meena R.", course: "Full Stack Development", text: "Loved the live projects and one-on-one mentorship. The placement team helped me crack my first developer interview.", rating: 5 },
  { name: "Vignesh S.", course: "CATIA", text: "Best institute in Tiruvarur for mechanical CAD. Industry-grade labs and friendly faculty. Highly recommended!", rating: 5 },
  { name: "Lakshmi K.", course: "Python + Data Science", text: "Hands-on training with real datasets. I now work as a data analyst thanks to CADPOINT's career support.", rating: 5 },
  { name: "Rohit V.", course: "Java Full Stack", text: "The curriculum is very up-to-date with current industry standards. The mock interviews were especially helpful.", rating: 5 },
];
