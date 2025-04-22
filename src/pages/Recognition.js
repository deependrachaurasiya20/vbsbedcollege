import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Recognition = () => {
  const recognitionData = [
    {
      label: "College Code",
      value: "760",
      labelColor: "text-purple-700",
      valueColor: "text-purple-900",
    },
    {
      label: "College Name",
      value:
        "Veer Bahadur Singh Mahavidyalaya, Haranahi (Mahuraav), Gorakhpur",
      labelColor: "text-purple-700",
      valueColor: "text-purple-900",
    },
    {
      label: "Established",
      value: "Year 1996",
      labelColor: "text-green-700",
      valueColor: "text-green-900",
    },
    {
      label: "Founder",
      value: "Shri Gulab Singh",
      labelColor: "text-blue-700",
      valueColor: "text-blue-900",
    },
    {
      label: "Chairman/Manager",
      value: "Anshu Singh",
      labelColor: "text-indigo-700",
      valueColor: "text-indigo-900",
    },
    {
      label: "Recognition Year",
      value: "1996",
      labelColor: "text-emerald-700",
      valueColor: "text-emerald-900",
    },
    {
      label: "Faculty of Arts (UG Level)",
      value:
        "Hindi, Sanskrit, English, Sociology, Political Science, and Medieval History",
      extra: "Introduced In: 2005",
      labelColor: "text-red-700",
      valueColor: "text-red-900",
    },
    {
      label: "Additional Arts Subjects (UG Level)",
      value:
        "Ancient History, Education, Philosophy, Geography, and Home Science",
      labelColor: "text-red-700",
      valueColor: "text-red-900",
    },
    {
      label: "Faculty of Arts (PG Level)",
      value: "Hindi and Sociology",
      labelColor: "text-purple-700",
      valueColor: "text-purple-900",
    },
    {
      label: "Faculty of Education (UG Level)",
      value: "B.Ed. program",
      labelColor: "text-pink-700",
      valueColor: "text-pink-900",
    },
    {
      label: "Educational Mission Year",
      value: "2008 — B.P.Ed. program introduced",
      labelColor: "text-teal-700",
      valueColor: "text-teal-900",
    },
    {
      label: "PG Level Additions",
      value: "2015 — Political Science and History",
      labelColor: "text-purple-700",
      valueColor: "text-purple-900",
    },
    {
      label: "Faculty of Commerce (UG Level)",
      value: "B.Com.",
      labelColor: "text-yellow-700",
      valueColor: "text-yellow-900",
    },
  ];

  return (
    <>
      <Navbar />

      <section className="min-h-screen p-6 bg-gradient-to-b from-white to-purple-50 text-black">
        <div className="max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-10 text-purple-800"
          >
            College Recognition
          </motion.h1>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            className="grid gap-6 text-lg sm:text-xl leading-8"
          >
            {recognitionData.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white border-l-4 border-purple-400 shadow-md rounded-md p-4 hover:shadow-lg transition"
              >
                <p>
                  <span className={`font-semibold block mb-1 ${item.labelColor}`}>
                    {item.label}:
                  </span>
                  <span className={`${item.valueColor}`}>
                    {item.value}
                  </span>
                  {item.extra && (
                    <div className="text-sm text-gray-700 mt-1 font-medium">
                      {item.extra}
                    </div>
                  )}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Recognition;
