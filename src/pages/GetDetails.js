import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const GetDetails = () => {
  return (
    <div>
      <Navbar />
      <main className="p-6 min-h-screen bg-gradient-to-br from-blue-100 via-white to-pink-100">
        <h1 className="text-4xl text-center font-bold mb-12 text-indigo-700">Course Details</h1>

        <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8 space-y-12">
          {/* B.Ed Course Details Section */}
          <section>
            <h2 className="text-3xl font-bold text-purple-700 mb-6">B.Ed (Bachelor of Education)</h2>
            <p className="text-lg text-gray-700 mb-4">
              The Bachelor of Education (B.Ed.) program is a two-year undergraduate professional course designed
              to prepare students for a career in teaching. It covers pedagogy, educational psychology, teaching
              methodologies, and classroom management.
            </p>
            <div className="space-y-2">
              <p className="text-lg text-gray-800"><strong>Duration:</strong> 2 Years</p>
              <p className="text-lg text-gray-800"><strong>Total Fee:</strong> ₹81,250</p>
              <p className="text-lg text-gray-800"><strong>Eligibility:</strong> Graduation from a recognized university with a minimum of 50% marks.</p>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-indigo-600 mb-4">Subjects Offered:</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Philosophical and Sociological Foundations of Education</li>
                <li>Psychology of Teaching and Learning</li>
                <li>Pedagogy of School Subjects (e.g. Hindi, English, Social Science, Mathematics, Science)</li>
                <li>Educational Technology and ICT</li>
                <li>Guidance and Counselling</li>
                <li>Environmental Education</li>
                <li>Gender, School, and Society</li>
                <li>Assessment for Learning</li>
                <li>School Internship / Practice Teaching</li>
              </ul>
            </div>
          </section>

          {/* Admission Details Section */}
          <section>
            <h2 className="text-3xl font-bold text-green-700 mb-6">Admission Details</h2>
            <p className="text-lg text-gray-800 mb-4">Admission Process:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Admissions begin in the month of June every year.</li>
              <li>Students must fill out the admission form either online or offline.</li>
              <li>Required documents: Marksheet, Transfer Certificate, Passport-size Photos, Caste Certificate (if applicable).</li>
              <li>Admission is based on merit and seat availability.</li>
            </ul>
            <p className="mt-6 text-lg">
              For more information, contact us at{" "}
              <a href="mailto:veerbahadursingheducationalgroup@gmail.com" className="text-blue-600 font-semibold hover:text-blue-800">veerbahadursingheducationalgroup@gmail.com</a> or call{" "}
              <span className="font-semibold">+91-9451560186</span>,

              <span className="font-semibold">+91-7518095532</span>.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GetDetails;
