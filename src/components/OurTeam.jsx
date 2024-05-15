import { motion, useScroll } from "framer-motion"


import img1 from "../assets/image/team1.jpg"
import img2 from "../assets/image/team2.jpg"
import img3 from "../assets/image/team3.jpg"
import img4 from "../assets/image/team4.jpg"

const OurTeam = () => {
    const { scrollYProgress } = useScroll();


    


  return (

        
    <section className="mb-14 sm:mb-28 flex justify-center items-center mx-auto">
    <div className="container px-4 sm:px-6 py-8 mx-auto">
      <motion.div
        style={{ scaleX: scrollYProgress }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 capitalize sm:text-3xl">Meet Our Volunteers</h2>
      </motion.div>

      <div className="grid gap-8 mt-8 sm:mt-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="w-full max-w-xs mx-auto">
          <div className="mx-auto text-center ">
            <img
            
              className="object-cover object-center w-full h-64 mx-auto rounded-lg overflow-hidden shadow-md transform transition-transform hover:scale-105"
              src={img1}
              alt="avatar"
            />
            <div className="mt-2">
              <h3 className="text-lg font-medium text-gray-700">Emily Patel</h3>
              <span className="mt-1 block text-base font-medium text-gray-600">Nourishment Navigator</span>
            </div>
          </div>
        </div>

        {/* Repeat this block for each volunteer */}
        <div className="w-full max-w-xs mx-auto">
          <div className="mx-auto text-center">
            <img
              className="object-cover object-center w-full h-64 mx-auto rounded-lg overflow-hidden shadow-md transform transition-transform hover:scale-105"
              src={img2}
              alt="avatar"
            />
            <div className="mt-2">
              <h3 className="text-lg font-medium text-gray-700">Benjamin Garcia</h3>
              <span className="mt-1 block text-base font-medium text-gray-600">Meal Mobilizer</span>
            </div>
          </div>
        </div>

        <div className="w-full max-w-xs mx-auto">
          <div className="mx-auto text-center">
            <img
              className="object-cover object-center w-full h-64 mx-auto rounded-lg overflow-hidden shadow-md transform transition-transform hover:scale-105"
              src={img3}
              alt="avatar"
            />
            <div className="mt-2">
              <h3 className="text-lg font-medium text-gray-700">Food Aid Advocate</h3>
              <span className="mt-1 block text-base font-medium text-gray-600">Food Aid Advocate</span>
            </div>
          </div>
        </div>

        <div className="w-full max-w-xs mx-auto">
          <div className="mx-auto text-center">
            <img
              className="object-cover object-center w-full h-64 mx-auto rounded-lg overflow-hidden shadow-md transform transition-transform hover:scale-105"
              src={img4}
              alt="avatar"
            />
            <div className="mt-2">
              <h3 className="text-lg font-medium text-gray-700">Jackson Adams</h3>
              <span className="mt-1 block text-base font-medium text-gray-600">Community Cuisine Coordinator</span>
            </div>
          </div>
        </div>
        {/* End of volunteer blocks */}
      </div>
    </div>
  </section>
  );
};

export default OurTeam;
