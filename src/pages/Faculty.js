import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

// Teaching Faculty Data
const facultyData = [
    // {
    //     name: "Dr. Shyama Kumar Singh ",
    //     title: "Assistant Professor",
    //     experience: "15+ years",
    //     qualification: "  M.A, M.Ed, P.hd ",
    //     mobile: "9450000047",
    //     email: "pushpapandey6773@gmail.com",
    //     image: "/Shyama.jpg",
    //     department: "Department of B.Ed",
    //     nameColor: "text-purple-700"
    //   },
    {
      name: "Roli Singh",
      title: "Assistant Professor",
      experience: "5 years",
      qualification: "M.A, M.Ed, NET",
      mobile: "6394919082",
      email: "dearksaumya16@gmail.com",
      image: "/Roli.jpg",
      department: "Department of B.Ed",
      nameColor: "text-amber-800"
    },
    {
      name: "Arun Kumar Singh",
      title: "Assistant Professor",
      experience: "5 years",
      qualification: "M.A, M.Ed,NET",
      mobile: "9598443316",
      email: "rjkmrkmr01@gmail.com",
      image: "/Arun.jpg",
      department: "Department of B.Ed",
      nameColor: "text-indigo-800"
    },
      {
        name: "Akhilesh",
        title: "Assistant Professor",
        experience: "10+ years",
        qualification: "M.A, M.Ed, NET",
        mobile: "9793202963",
        email: "tripathishrinarayan7897@gmail.com",
        image: "/Aklesh.jpg",
        department: "Department of B.Ed",
        nameColor: "text-green-800"
      },
      {
        name: "Ayodhya Prasad",
        title: "Assistant Professor",
        experience: "5+ years",
        qualification: "M.A, M.Ed, Net",
        mobile: "9450440245",
        email: "ijsingh2807@gmail.com",
        image: "/Ayodhya.jpg",
        department: "Department of B.Ed",
        nameColor: "text-fuchsia-800"
      },
  
    {
    name: "Dinesh Kumar Yadav",
    title: "Assistant Professor",
    experience: "17+ years",
    qualification: "M.A , M.Ed, NET",
    mobile: "9336707290",
    email: "shailendra273405@gmail.com",
    image: "/Dinesh.jpg",
    department: "Department of B.Ed",
    nameColor: "text-blue-800"
  },
  {
    name: "Ramesh Kumar",
    title: "Assistant Professor",
    experience: "7+ years",
    qualification: "M.A, M.Ed, NET",
    mobile: "97955047264",
    email: "virender2305@gmail.com",
    image: "/Ramesh.jpg",
    department: "Department of B.Ed",
    nameColor: "text-blue-800"
  },
  {
    name: "Sandeep Kumar ",
    title: "Assistant Professor",
    experience: "7+ years",
    qualification: "M.A, M.Ed, NET",
    mobile: "9648042624",
    email: "girishsingh05@gmail.com",
    image: "/Sandeep.jpg",
    department: "Department of B.Ed",
    nameColor: "text-blue-800"
  },
  {
    name: "Surendra Kumar Rajaka ",
    title: "Assistant Professor",
    experience: "5+ years",
    qualification: "M.A, M.Ed, NET",
    mobile: "8737964800",
    email: "arunnayak116@gmail.com",
    image: "/Surendra.jpg",
    department: "Department of B.Ed",
    nameColor: "text-violet-800"
  },
  {
    name: "Rajendra Prasad",
    title: "Assistant Professor",
    experience: "8+ years",
    qualification: "M.A, M.ED, NET",
    mobile: "9598443316",
    email: "rk5398363@gmail.com",
    image: "/Rajendra.jpg",
    department: "Department of B.Ed",
    nameColor: "text-yellow-700"
  },
  {
    name: "Anamika Singh Rathore",
    title: "Assistant Professor",
    experience: "8+ years",
    qualification: "M.A, M.Ed, NET",
    mobile: "7839766575",
    email: "chandrapal.wapcos@gmail.com",
    image: "/Anamika.jpg",
    department: "Department of B.Ed",
    nameColor: "text-gray-800"
  },

  {
    name: "Vikram",
    title: "Assistant Professor",
    experience: "7+ years",
    qualification: "Msc, M.Ed NET",
    mobile: "7376934825",
    email: "pushpamishra2908@gmail.com",
    image: "/Vikram.jpg",
    department: "Department of B.Ed",
    nameColor: "text-pink-800"
  },
  {
    name: "Ajit Kumar",
    title: "Assistant Professor",
    experience: "7+ years",
    qualification: "Msc, M.Ed, NET",
    mobile: "8574074015",
    email: "sumantmaurya5@gmail.com",
    image: "/Ajit.jpg",
    department: "Department of B.Ed",
    nameColor: "text-red-700"
  },
 
  {
    name: "Chandra Prakash",
    title: "Assistant Professor",
    experience: "7 years",
    qualification: "Msc, M.Ed, NET",
    mobile: "7518934645",
    email: "abhimanyuji50@gmail.com",
    image: "/Chandra.jpg",
    department: "Department of B.Ed",
    nameColor: "text-orange-800"
  },
  {
    name: "Prathik Kumar Verma",
    title: "Assistant Professor",
    experience: "7+ years",
    qualification: "M.P.Ed Net",
    mobile: "9598443316",
    email: "gssrcmheart@gmail.com",
    image: "/Prathik.jpg",
    department: "Department of B.Ed",
    nameColor: "text-cyan-800"
  },
  {
    name: "Aarti Shrivastava",
    title: "Assistant Professor",
    experience: "7 years",
    qualification: "M.A, M.Phil,NET",
    mobile: "9839679894",
    email: "nasimavns007@gmail.com",
    image: "/Aarti.jpg",
    department: "Department of B.Ed",
    nameColor: "text-emerald-700"
  },
  
  
];



// Reusable Card Component
const ProfileCard = ({
  name,
  title,
  experience,
  qualification,
  mobile,
  email,
  image,
  department,
  nameColor,
  position
}) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white rounded-lg shadow-md p-4 w-full sm:w-[48%] lg:w-[30%] xl:w-[23%] flex flex-col items-center hover:scale-105 transform transition duration-300"
  >
   <img
  src={image}
  alt={name}
  loading="lazy"
  className="w-full max-w-[200px] h-auto aspect-[3/4] object-cover rounded-md mb-4 border border-gray-300 shadow-sm mx-auto"
/>

    <h2 className={`text-lg sm:text-xl font-bold ${nameColor} text-center`}>{name}</h2>
    <p className="text-sm text-gray-600 text-center">{title || position}</p>
    <p className="text-sm text-gray-600 italic text-center mb-2">{department}</p>
    <div className="text-sm text-gray-700 w-full">
    {qualification && <p className="flex justify-center" ><strong>Qualification: </strong>&nbsp;{qualification}</p>}
      <p className="flex justify-center "><strong>Experience:</strong>&nbsp;{experience}</p>
     
  
    </div>
  </motion.div>
);

// Main Component
const Faculty = () => {
  return (
    <div>
      <Navbar />
      <main className="p-4 sm:p-6 md:p-10 bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50 min-h-screen">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-purple-800">Teaching Faculty</h1>
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {facultyData.map((faculty, index) => (
            <ProfileCard key={index} {...faculty} />
          ))}
        </div>

       {/* <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-green-800">Non-Teaching Staff</h1>
        <div className="flex flex-wrap justify-center gap-6">
          {nonTeachingStaff.map((staff, index) => (
            <ProfileCard key={index} {...staff} />
          ))}
        </div>*/}
      </main>
      <Footer />
    </div>
  );
};

export default Faculty;
