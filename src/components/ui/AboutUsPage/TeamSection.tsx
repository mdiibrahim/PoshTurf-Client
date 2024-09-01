import React from "react";

const TeamSection: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-green-50 to-blue-100 my-10 py-12">
      <section className="container mx-auto">
        <h2 className="text-5xl font-extrabold text-center mb-16 text-[#663635]">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Team Member 1 */}
          <div className="group text-center hover:shadow-xl p-8 transition-all duration-500 transform hover:-translate-y-3 rounded-lg bg-white border border-gray-200">
            <div className="relative mb-4">
              <img
                className="rounded-full w-32 h-32 mx-auto object-cover shadow-lg transform group-hover:scale-80 transition-transform duration-500"
                src="../../../assets/ceo.jpg"
                alt="John Doe"
              />
              <div className="absolute inset-0 rounded-full border-4 border-[#663635] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <h3 className="text-2xl font-bold text-[#663635] mb-2">John Doe</h3>
            <p className="text-gray-600 font-semibold mb-4">CEO & Founder</p>
            <p className="mt-2 text-sm text-gray-700">
              John is the visionary behind PoshTurf. With over 15 years of
              experience in the sports industry, he is dedicated to making
              high-quality sports facilities accessible to everyone.
            </p>
          </div>
          {/* Team Member 2 */}
          <div className="group text-center hover:shadow-xl p-8 transition-all duration-500 transform hover:-translate-y-2 rounded-lg bg-white border border-gray-200">
            <div className="relative mb-4">
              <img
                className="rounded-full w-32 h-32 mx-auto object-cover shadow-lg transform group-hover:scale-110 transition-transform duration-500"
                src="/assets/team2.jpg"
                alt="Jane Smith"
              />
              <div className="absolute inset-0 rounded-full border-4 border-[#663635] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <h3 className="text-2xl font-bold text-[#663635] mb-2">
              Jane Smith
            </h3>
            <p className="text-gray-600 font-semibold mb-4">COO</p>
            <p className="mt-2 text-sm text-gray-700">
              Jane oversees all operations at PoshTurf. She has a background in
              facility management and is passionate about ensuring an excellent
              customer experience.
            </p>
          </div>
          {/* Team Member 3 */}
          <div className="group text-center hover:shadow-xl p-8 transition-all duration-500 transform hover:-translate-y-2 rounded-lg bg-white border border-gray-200">
            <div className="relative mb-4">
              <img
                className="rounded-full w-32 h-32 mx-auto object-cover shadow-lg transform group-hover:scale-110 transition-transform duration-500"
                src="/assets/team3.jpg"
                alt="Michael Johnson"
              />
              <div className="absolute inset-0 rounded-full border-4 border-[#663635] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <h3 className="text-2xl font-bold text-[#663635] mb-2">
              Michael Johnson
            </h3>
            <p className="text-gray-600 font-semibold mb-4">CTO</p>
            <p className="mt-2 text-sm text-gray-700">
              Michael leads our tech team and ensures that PoshTurf runs
              smoothly behind the scenes. He’s an expert in building scalable
              systems for high-performance platforms.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamSection;
