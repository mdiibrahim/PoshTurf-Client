const TeamSection = () => {
  return (
    <div>
      <section className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-6">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="text-center">
            <img
              className="rounded-full w-32 h-32 mx-auto mb-4"
              src="/assets/team1.jpg"
              alt="Team Member 1"
            />
            <h3 className="text-xl font-semibold">John Doe</h3>
            <p className="text-gray-600">CEO & Founder</p>
            <p className="mt-2 text-sm">
              John is the visionary behind PoshTurf. With over 15 years of
              experience in the sports industry, he is dedicated to making
              high-quality sports facilities accessible to everyone.
            </p>
          </div>
          {/* Team Member 2 */}
          <div className="text-center">
            <img
              className="rounded-full w-32 h-32 mx-auto mb-4"
              src="/assets/team2.jpg"
              alt="Team Member 2"
            />
            <h3 className="text-xl font-semibold">Jane Smith</h3>
            <p className="text-gray-600">COO</p>
            <p className="mt-2 text-sm">
              Jane oversees all operations at PoshTurf. She has a background in
              facility management and is passionate about ensuring an excellent
              customer experience.
            </p>
          </div>
          {/* Team Member 3 */}
          <div className="text-center">
            <img
              className="rounded-full w-32 h-32 mx-auto mb-4"
              src="/assets/team3.jpg"
              alt="Team Member 3"
            />
            <h3 className="text-xl font-semibold">Michael Johnson</h3>
            <p className="text-gray-600">CTO</p>
            <p className="mt-2 text-sm">
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
