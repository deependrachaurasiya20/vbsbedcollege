// import React from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// const courses = [
//     {
//         title: "Bachelor of Education (B.Ed.)",
//         degree: "Undergraduate",
//         duration: "2 Years",
//         totalFee: "₹51,250",
//         description:
//             "A comprehensive course designed for students to become qualified educators, focusing on pedagogy, psychology, and classroom management.",
//         formLink:
//             "https://docs.google.com/forms/d/e/1FAIpQLSdtZfjk3WJbgR2xFR48NFrRNAE7sBQotYnIfMAKyHyHFTy8Ng/viewform?usp=dialog",
//     },
// ];

// const Course = () => {
//     return (
//         <>
//             <Navbar />

//             <section className="min-h-screen bg-gradient-to-r from-purple-200 via-pink-200 to-blue-200 pt-8 pb-20 px-6">
//                 <div className="max-w-7xl mx-auto text-center">
//                     <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-8 tracking-tight animate__animated animate__fadeIn">
//                         Our Courses
//                     </h1>
//                     <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
//                         We offer a specialized Bachelor of Education (B.Ed.) program that prepares students for a successful career in teaching.
//                     </p>

//                     <div className="flex flex-wrap gap-8 justify-center">
//                         {courses.map((course, i) => (
//                             <div
//                                 key={i}
//                                 className="bg-gradient-to-tr from-indigo-300 via-purple-300 to-yellow-300 text-gray-800 rounded-3xl shadow-xl p-8 w-full sm:w-96 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:rotate-2"
//                             >
//                                 <h3 className="text-2xl font-semibold text-purple-800 mb-4 hover:text-purple-600 transition-colors duration-300">
//                                     {course.title}
//                                 </h3>
//                                 <p className="text-sm sm:text-base text-gray-700 mb-2">
//                                     <strong className="font-semibold">Degree:</strong> {course.degree}
//                                 </p>
//                                 <p className="text-sm sm:text-base text-gray-700 mb-2">
//                                     <strong className="font-semibold">Duration:</strong> {course.duration}
//                                 </p>
//                                 <p className="text-sm sm:text-base text-gray-700 mb-4">
//                                     <strong className="font-semibold">Total Fee:</strong> {course.totalFee}
//                                 </p>
//                                 <p className="text-sm sm:text-base text-gray-800 leading-relaxed mb-6">
//                                     {course.description}
//                                 </p>
//                                 <a
//                                     href={course.formLink}
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="inline-block bg-purple-800 text-white px-6 py-3 rounded-full shadow-md transform transition-all duration-300 hover:bg-purple-700 hover:scale-105"
//                                 >
//                                     Admission Form
//                                 </a>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             <Footer />
//         </>
//     );
// };

// export default Course;


import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Typewriter } from "react-simple-typewriter";

const courses = [
  {
    title: "Bachelor of Education (B.Ed.)",
    degree: "Undergraduate",
    duration: "2 Years",
    FirstYearFee: "₹51,250",
    SecondYearFee:"₹30000",
    description:
      "A comprehensive course designed for students to become qualified educators, focusing on pedagogy, psychology, and classroom management.",
   
  },
];

const Course = () => {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-gradient-to-r from-purple-200 via-pink-200 to-blue-200 pt-8 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-8 tracking-tight animate__animated animate__fadeIn">
            Our Courses
          </h1>

          <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-8 font-semibold">
            <span className="animate-text-glow">
              <Typewriter
                words={[
                  "Bachelor of Education (B.Ed.) program.",
                  "A journey into pedagogy and psychology.",
                  "Preparing future educators with excellence.",
                  "Empowering minds, shaping futures.",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={60}
                deleteSpeed={40}
                delaySpeed={1500}
              />
            </span>
          </p>

          <div className="flex flex-wrap gap-8 justify-center">
            {courses.map((course, i) => (
              <div
                key={i}
                className="bg-gradient-to-tr from-indigo-300 via-purple-300 to-yellow-300 text-gray-800 rounded-3xl shadow-xl p-8 w-full sm:w-96 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:rotate-2"
              >
                <h3 className="text-2xl font-semibold text-purple-800 mb-4 hover:text-purple-600 transition-colors duration-300">
                  {course.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-700 mb-2">
                  <strong className="font-semibold">Degree:</strong>{" "}
                  {course.degree}
                </p>
                <p className="text-sm sm:text-base text-gray-700 mb-2">
                  <strong className="font-semibold">Duration:</strong>{" "}
                  {course.duration}
                </p>
                <p className="text-sm sm:text-base text-gray-700 mb-4">
                  <strong className="font-semibold">1st Year Fee:</strong>{" "}
                  {course.FirstYearFee}
                </p>
                <p className="text-sm sm:text-base text-gray-700 mb-4">
                  <strong className="font-semibold">2nd Year Fee:</strong>{" "}
                  {course.SecondYearFee}
                </p>
                <p className="text-sm sm:text-base text-gray-800 leading-relaxed mb-6">
                  {course.description}
                </p>
                {/* <a
                  href={course.formLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-purple-800 text-white px-6 py-3 rounded-full shadow-md transform transition-all duration-300 hover:bg-purple-700 hover:scale-105"
                >
                  Admission Form
                </a> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Course;
