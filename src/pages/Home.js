import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const Home = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [showFullBio, setShowFullBio] = useState({});
    const [showFullText, setShowFullText] = useState(false);


    const openImage = (src) => setSelectedImage(src);
    const closeImage = () => setSelectedImage(null);

    const toggleBio = (role) => {
        setShowFullBio((prev) => ({
            ...prev,
            [role]: !prev[role]
        }));
    };

    const getBio = (role) => {
        const bios = {
            founder: [
                "Gulab Singh",
                "Founder",
                `Just as the most elevated place in the world is for human life, similarly, education is the supreme means to elevate all living beings to the highest position among them. The saying from the Mahabharata is: "Naasti Vidya Samam Chakshuh Naasti Satyam Samam Tapah," meaning neither is there an eye equal to knowledge, nor any penance equal to truth. Therefore, education holds a significant place in human life. Education is the natural, balanced, and progressive development of all the powers of a human being. It is education that has made humans cultured and civilized. Education makes humans sensitive and sharpens their vision, leading to the integrated development of the individual, fostering national unity, increasing the possibilities of scientific technology, and bringing freedom in understanding and thought. For education, manpower development occurs according to the need. It is on the foundation of education that research and development receive support, which is the cornerstone of national self-reliance. Emphasizing the importance of education in life, Swami Vivekananda wrote: "We want that education by which character is formed, strength of mind is increased, intellect is expanded and by which one can stand on one's own feet."
Education is also helpful in the development of an individual's life at the national level. The progress of any nation depends on its capable citizens. The widespread dissemination of education is at the root of the development of nations like America, Britain, Russia, France, and Germany. In a democracy, the important function of education is the all-round development of every citizen. To keep democracy secure, it is necessary that every individual achieves physical, intellectual, and moral development, possesses vocational skills, patriotism, national unity, emotional goodwill, and national discipline. Education contributes the most to this task. That is, for human life, education is a very important means.
`
            ],
            chairman: [
                "Anshu Singh",
                "Chairman / Manager / Block Pramukh Khajni",
                `Discipline fosters a positive learning environment for students, where they can study effectively and gain valuable knowledge and skill-building opportunities. Well-disciplined students receive various learning opportunities that help broaden their knowledge.

Discipline refers to a set of rules and regulations created to maintain a positive environment in organizations, workplaces, societies, colleges, or universities. It is essential for schools and colleges to ensure that students understand the importance of discipline in their lives and follow it so they can achieve holistic development.

Students who value discipline tend to perform better academically, as they prioritize their studies. They are more likely to participate actively in class and learn effectively.

Colleges emphasize students’ academic performance and encourage them to manage their time well. Well-disciplined schools always ensure that students become reliable individuals. They also help in developing qualities like respect, hard work, and honesty for the overall development of students.

Additionally, students are given opportunities to take ownership and responsibility for their choices, which helps them develop the ability to make wise decisions. In today’s world, colleges not only provide comprehensive education but also focus on the social development of students.`
            ],
            principal: [
                "Dr. Kushhar Prasad Chaurasia",
                "Principal",
                "Qualification: M.A. Sociology, Ph.D.",
                "Mobile: 9451560186",
                "Email: drkpchaurasia@gmail.com",
                "Experience: 2+ years",
                "The objective of modern education is not merely to provide formal knowledge, but to ensure the holistic development of an individual’s personality. It empowers a person to face life's challenges and enables them to utilize their inner potential for the betterment of society. The goal of higher education institutions is not only to prepare competent professionals but also to nurture responsible citizens who can contribute to the building of a strong nation.",
                "Therefore, it is essential to reform traditional education systems and bridge the gap between real-life challenges and classroom learning. Higher education institutions play a pivotal role in modernizing the education system by offering a variety of postgraduate-level programs that produce capable professionals. These institutions prepare students for competitive futures and equip them with the necessary skills to meet the demands of everyday employment.",
                "Dr. Sarvepalli Radhakrishnan, while interpreting modern education, stated that the purpose of education is not merely for livelihood or preparation for life, but it is considered an essential factor in the complete and meaningful development of the human personality and society as a whole."
            ],
            HOD: [
                "Dr. Shyama Kumar Singh ",
                "Head of Department",
                "Qualification: M.A, M.Ed, P.hd.",
                "Experience: 14+ years",
                "Personality development means knowing, accepting, and improving yourself. It includes confidence, positivity, humility, and proper behavior. Education plays a vital role by enhancing knowledge, intellect, confidence, and ethics. It teaches moral values, proper behavior, and social etiquette. Education builds communication, discipline, healthy habits, and thinking skills. It creates opportunities that offer experience and exposure. A well-educated person gains respect and leaves a lasting impression. Education helps distinguish right from wrong and nurtures a positive personality. With education, one becomes responsible, courteous, and confident—traits essential for success and personal growth"
            ]

        };
        return bios[role];
    };

    return (
        <div>
            <Navbar />
            <motion.main
                className="p-6 bg-gradient-to-br from-blue-50 to-purple-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <motion.h1
                    className="text-4xl sm:text-5xl text-center font-bold mb-8 text-pink-900"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.9 }}
                >
                    <span className="animate-text-glow">
                        <Typewriter
                            options={{
                                strings: [
                                    "Welcome to Veer Bahadur Singh B.Ed College",
                                    "Empowering Educators of Tomorrow",
                                    "Your Journey to Teaching Excellence Starts Here"
                                ],
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 30,
                                delay: 50,
                            }}
                        />
                    </span>
                </motion.h1>


                <motion.section
                    className="mt-10 flex flex-col md:flex-row items-center gap-6 bg-white p-4 rounded-lg shadow-md"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <img
                        loading="lazy"
                        src="/college-history.jpg"
                        alt="College History"
                        className="w-full md:w-1/2 rounded-lg lazy-img"
                        onLoad={(e) => e.currentTarget.classList.add("lazy-img-loaded")}
                    />

                    <div className="text-gray-800">
                        <p
                            style={{
                                display: "-webkit-box",
                                WebkitLineClamp: showFullBio["aboutUs"] ? "none" : 4,
                                WebkitBoxOrient: "vertical",
                                overflow: "hidden",
                            }}
                        >
                            With the aim that underprivileged people in rural areas should not be deprived of education and recognizing the importance of education for the development of society, this college was established in the year 1996 in memory of the former Chief Minister Late Veer Bahadur Singh Ji by his younger brother, Shri Gulab Singh Ji — former Chairman of PCF Uttar Pradesh, former Chairman of District Council Gorakhpur and Maharajganj, and former Block Pramukh of Khajni.

                            The objective was to provide education from primary to higher levels to the students of this rural area, ensuring access to proper education for all sections of society. In 1996, the institution received recognition and affiliation from the Government of Uttar Pradesh and Gorakhpur University, Gorakhpur.

                            From 1996 to 2012, Shri Gulab Singh Ji carried out the responsibilities of managing the institution. From 2012 onward, the management responsibilities were undertaken by the Late Shri Surendra Bahadur Singh. After his untimely demise on 23rd November 2016, his wife, Smt. Anshu Singh, has been handling the managerial responsibilities of the college.
                            Under the leadership of Smt. Anshu Singh, the institution is moving forward on the path of development. Various educational, cultural, and sports programs are conducted in the institution to train students, enabling them to achieve outstanding accomplishments.
                        </p>
                        <button
                            className="mt-2 text-blue-500 hover:underline text-sm"
                            onClick={() => toggleBio("aboutUs")}
                        >
                            {showFullBio["aboutUs"] ? "Show Less" : "Read More"}
                        </button>
                    </div>



                </motion.section>

                <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {["founder", "chairman", "principal", "HOD"].map((role, idx) => (
                        <motion.div
                            key={role}
                            className={`bg-white shadow-md p-4 rounded-lg text-center hover:shadow-xl transition-all duration-300 ${role === "HOD" ? "md:col-start-2" : ""
                                }`}
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 + idx * 0.2 }}
                        >
                            <p className="text-lg font-bold text-gray-600 mb-1 uppercase">{role}</p>
                            <img
                                loading="lazy"
                                src={`/${role}.jpg`}
                                alt={role}
                                className="mx-auto h-40 w-40 rounded-full object-cover lazy-img"
                                onLoad={(e) => e.currentTarget.classList.add("lazy-img-loaded")}
                            />

                            {getBio(role)?.slice(0, 2).map((line, i) => (
                                <h3 key={i} className="text-md text-blue-700 font-semibold">{line}</h3>
                            ))}

                            <div
                                className="text-sm text-gray-700 text-left mt-2 overflow-hidden"
                                style={{
                                    display: "-webkit-box",
                                    WebkitLineClamp: showFullBio[role] ? "none" : 3,
                                    WebkitBoxOrient: "vertical"
                                }}
                            >
                                {getBio(role)?.slice(2).map((line, i) => (
                                    <p key={i} className="mb-1">{line}</p>
                                ))}
                            </div>

                            <button
                                className="mt-2 text-blue-500 hover:underline text-sm"
                                onClick={() => toggleBio(role)}
                            >
                                {showFullBio[role] ? "Show Less" : "Read More"}
                            </button>
                        </motion.div>
                    ))}
                </section>


                <section className="mt-10 bg-gradient-to-r from-indigo-100 to-white p-4 rounded-lg shadow">
                    <motion.h2
                        className="text-3xl font-bold mb-4 text-indigo-800"
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Infrastructure
                    </motion.h2>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                        {[...Array(10)].map((_, i) => (
                            <img
                                key={i}
                                loading="lazy"
                                src={`/infra${i + 1}.jpg`}
                                alt={`Infrastructure ${i + 1}`}
                                className="h-48 w-full object-cover rounded-lg shadow-md cursor-pointer lazy-img"
                                onClick={() => openImage(`/infra${i + 1}.jpg`)}
                                onLoad={(e) => e.currentTarget.classList.add("lazy-img-loaded")}
                            />
                        ))}
                    </div>
                </section>

                <section className="mt-10 bg-white p-4 rounded-lg shadow">
                    <h2 className="text-3xl font-bold mb-4 text-blue-700 text-center">Our Courses</h2>

                    <div
                        className={`grid gap-6 ${["B.Ed"].length === 1
                            ? "grid-cols-1 place-items-center"
                            : "grid-cols-1 md:grid-cols-3"
                            }`}
                    >
                        {["B.Ed"].map((course) => (
                            <motion.div
                                key={course}
                                className="bg-gradient-to-r from-purple-100 to-blue-100 shadow-md p-6 w-full max-w-sm rounded-lg text-center hover:shadow-lg transition"
                                whileHover={{ scale: 1.05 }}
                            >
                                <h3 className="text-xl font-semibold mb-4 text-purple-800">{course}</h3>
                                <a
                                    href="/get-details"
                                    className="text-white font-bold px-5 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded hover:from-purple-700 hover:to-blue-700 transition-all duration-300 inline-block"
                                >
                                    Get Details
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </section>
                <section className="mt-10 bg-white p-4 rounded-lg shadow">
                    <h2 className="text-3xl font-bold mb-4 text-green-700">Achievements</h2>

                    <p className="text-gray-700 mb-6">
                        Veer Bahadur Singh P.G. College has proudly celebrated numerous academic and extracurricular achievements over the years. These accomplishments reflect our commitment to excellence and holistic development.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {[...Array(10)].map((_, i) => (
                            <img
                                key={i}
                                loading="lazy"
                                src={`/achieve${i + 1}.jpg`}
                                alt={`Achievement ${i + 1}`}
                                className="rounded-lg cursor-pointer w-full h-40 object-cover shadow-md transition-transform hover:scale-105 duration-300"
                                onClick={() => openImage(`/achieve${i + 1}.jpg`)}
                                onLoad={(e) => e.currentTarget.classList.add("lazy-img-loaded")}
                            />
                        ))}
                    </div>

                    <p className="text-gray-700 mt-6">
                        These moments are just a glimpse of the hard work, dedication, and talent of our students and faculty. We continue to strive for excellence in every field of education and development.
                    </p>
                </section>


                {/* <section className="mt-10 bg-gradient-to-r from-yellow-50 to-pink-100 p-4 rounded-lg shadow">
                    <h2 className="text-3xl font-bold mb-2 text-pink-700">Fests & Functions</h2>
                    <p className="mb-4 text-gray-800 leading-relaxed">
                        The program of <span className="font-semibold">Veer Bahadur Singh Educational Group of Colleges</span> was presided over by
                        <span className="font-medium text-pink-700"> Hon’ble Shri Shriram Chauhan Ji</span>
                        (<span className="italic">MLA – Khajni</span>).<br /><br />

                        The Chief Guest was
                        <span className="font-medium text-orange-500"> Shri Sandeep Singh Ji</span>
                        (<span className="italic">Minister of Basic Education, Government of Uttar Pradesh</span>).<br /><br />

                        <span className="font-semibold">Special Guests</span> included:
                        <ul className="list-disc list-inside ml-4">
                            <li>
                                <span className="font-medium">Shri Pawan Tripathi Ji</span> – Vice President, BJP Maharashtra
                            </li>
                            <li>
                                <span className="font-medium">Shri Janardan Tiwari</span> – District President, BJP & Treasurer, Siddhi Vinayak Temple, Maharashtra (also a former student of the college)
                            </li>
                        </ul>
                        <br />

                        <span className="font-semibold">Representing the Veer Bahadur Singh Educational Group of Colleges</span> were:
                        <ul className="list-disc list-inside ml-4">
                            <li>Hon’ble Smt. Anshu Singh Ji – Block Pramukh, Khajni</li>
                            <li>Hon’ble Shri Sandeep Singh Sisodiya Ji – Secretary</li>
                            <li>Hon’ble Smt. Rita Singh Ji – Vice President</li>
                            <li>Hon’ble Shri Anshumali Dhar Dubey Ji – Block Pramukh Representative, Khajni</li>
                            <li>Dr. K.P. Chaurasia Ji – Principal, Veer Bahadur Singh P.G. College</li>
                            <li>Dr. Nilambuj Singh Ji – Principal, Veer Bahadur Singh B.T.C. College</li>
                            <li>Dr. Ajit Pandey Ji – Principal, Veer Bahadur Singh Smarak Mahavidyalaya, Hariharpur (Sairo), Gorakhpur</li>
                            <li>Dr. Sumant Maurya Ji – Principal, Veer Bahadur Singh Smarak B.T.C. College</li>
                            <li>Dr. Pankaj Kumar Tripathi Ji – Principal, Veer Bahadur Singh Mahila Mahavidyalaya</li>
                            <li>Dr. Vikram Pratap Singh Ji – Principal, St. Anne’s Public School</li>
                        </ul>
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                        {[...Array(20)].map((_, i) => (
                            <img
                                key={i}
                                loading="lazy"
                                src={`/fest${i + 1}.jpg`}
                                alt={`Fest ${i + 1}`}
                                className="rounded-lg cursor-pointer lazy-img"
                                onClick={() => openImage(`/fest${i + 1}.jpg`)}
                                onLoad={(e) => e.currentTarget.classList.add("lazy-img-loaded")}
                            />
                        ))}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[...Array(8)].map((_, i) => (
                            <video
                                key={i}
                                controls
                                className="w-full rounded-lg lazy-img"
                                onLoadedData={(e) => e.currentTarget.classList.add("lazy-img-loaded")}
                            >
                                <source src={`/fest-video${i + 1}.mp4`} type="video/mp4" />
                            </video>
                        ))}
                    </div>
                </section> */}
                <section className="mt-10 bg-gradient-to-r from-yellow-50 to-pink-100 p-4 rounded-lg shadow">
                    <h2 className="text-3xl font-bold mb-2 text-pink-700">Fests & Functions</h2>

                    <div className="mb-4 text-gray-800 leading-relaxed">
                        {showFullText ? (
                            <>
                                <p>
                                    The program of <span className="font-semibold">Veer Bahadur Singh Educational Group of Colleges</span> was presided over by
                                    <span className="font-medium text-pink-700"> Hon’ble Shri Shriram Chauhan Ji</span>
                                    (<span className="italic">MLA – Khajni</span>).
                                </p><br />

                                <p>
                                    The Chief Guest was
                                    <span className="font-medium text-orange-500"> Shri Sandeep Singh Ji</span>
                                    (<span className="italic">Minister of Basic Education, Government of Uttar Pradesh</span>).
                                </p><br />

                                <p className="font-semibold">Special Guests included:</p>
                                <ul className="list-disc list-inside ml-4">
                                    <li><span className="font-medium">Shri Pawan Tripathi Ji</span> – Vice President, BJP Maharashtra</li>
                                    <li><span className="font-medium">Shri Janardan Tiwari</span> – District President, BJP & Treasurer, Siddhi Vinayak Temple, Maharashtra (also a former student of the college)</li>
                                </ul><br />

                                <p className="font-semibold">Representing the College were:</p>
                                <ul className="list-disc list-inside ml-4">
                                    <li>Hon’ble Smt. Anshu Singh Ji – Block Pramukh, Khajni</li>
                                    <li>Hon’ble Shri Sandeep Singh Sisodiya Ji – Secretary</li>
                                    <li>Hon’ble Smt. Rita Singh Ji – Vice President</li>
                                    <li>Hon’ble Shri Anshumali Dhar Dubey Ji – Block Pramukh Representative, Khajni</li>
                                    <li>Dr. K.P. Chaurasia Ji – Principal, Veer Bahadur Singh P.G. College</li>
                                    <li>Dr. Nilambuj Singh Ji – Principal, Veer Bahadur Singh B.T.C. College</li>
                                    <li>Dr. Ajit Pandey Ji – Principal, Veer Bahadur Singh Smarak Mahavidyalaya, Hariharpur (Sairo), Gorakhpur</li>
                                    <li>Dr. Sumant Maurya Ji – Principal, Veer Bahadur Singh Smarak B.T.C. College</li>
                                    <li>Dr. Pankaj Kumar Tripathi Ji – Principal, Veer Bahadur Singh Mahila Mahavidyalaya</li>
                                    <li>Dr. Vikram Pratap Singh Ji – Principal, St. Anne’s Public School</li>
                                </ul>
                            </>
                        ) : (
                            <p>
                                The program of <span className="font-semibold">Veer Bahadur Singh Educational Group of Colleges</span> was presided over by
                                <span className="font-medium text-pink-700"> Hon’ble Shri Shriram Chauhan Ji</span> and the Chief Guest was
                                <span className="font-medium text-orange-500"> Shri Sandeep Singh Ji</span>. <span className="italic text-gray-600">Click "Read More" to view all guest details.</span>
                            </p>
                        )}

                        <button
                            onClick={() => setShowFullText(!showFullText)}
                            className="mt-2 text-sm text-blue-700 font-medium hover:underline focus:outline-none"
                        >
                            {showFullText ? 'Show Less' : 'Read More'}
                        </button>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                        {[...Array(20)].map((_, i) => (
                            <img
                                key={i}
                                loading="lazy"
                                src={`/fest${i + 1}.jpg`}
                                alt={`Fest ${i + 1}`}
                                className="rounded-lg cursor-pointer lazy-img"
                                onClick={() => openImage(`/fest${i + 1}.jpg`)}
                                onLoad={(e) => e.currentTarget.classList.add("lazy-img-loaded")}
                            />
                        ))}
                    </div>

                    {/* fest video if need to update the video take refrence through this section  */}

                    {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[...Array(8)].map((_, i) => (
                            <video
                                key={i}
                                controls
                                className="w-full rounded-lg lazy-img"
                                onLoadedData={(e) => e.currentTarget.classList.add("lazy-img-loaded")}
                            >
                                <source src={`/fest-video${i + 1}.mp4`} type="video/mp4" />
                            </video>
                        ))}
                    </div> */}
                </section>


                <section className="mt-10 bg-white p-4 rounded-lg shadow">
                    <h2 className="text-3xl font-bold mb-4 text-indigo-700">Student Activities</h2>

                    <p className="text-gray-700 text-base mb-6">
                        At Veer Bahadur Singh P.G. College, students actively participate in a wide range of extracurricular activities that promote holistic development. These activities include cultural programs, sports events, academic competitions, social service initiatives, and more.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {[...Array(20)].map((_, i) => (
                            <img
                                key={i}
                                loading="lazy"
                                src={`/student${i + 1}.jpg`}
                                alt={`Student Activity ${i + 1}`}
                                className="w-full h-40 object-cover rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105"
                                onClick={() => openImage(`/student${i + 1}.jpg`)}
                                onLoad={(e) => e.currentTarget.classList.add("lazy-img-loaded")}
                            />
                        ))}
                    </div>
                </section>


            </motion.main>

            {/* {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
                    onClick={closeImage}
                >
                    <img
                        src={selectedImage}
                        alt="Full View"
                        className="max-w-full max-h-full rounded-lg shadow-lg"
                    />
                </div>
            )} */}


            {selectedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
                    <img src={selectedImage} alt="Preview" className="max-h-[90vh] rounded" />
                    <button
                        className="absolute top-4 right-4 text-white text-2xl"
                        onClick={closeImage}
                    >
                        &times;
                    </button>
                </div>
            )}

            <Footer />
        </div>
    );
};

export default Home;
