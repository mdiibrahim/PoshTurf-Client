const WorkFlow = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-5xl font-bold text-blue-500 mb-4">1</div>
            <p>Select your preferred facility and check availability.</p>
          </div>
          <div>
            <div className="text-5xl font-bold text-blue-500 mb-4">2</div>
            <p>Confirm your booking and make the payment.</p>
          </div>
          <div>
            <div className="text-5xl font-bold text-blue-500 mb-4">3</div>
            <p>Enjoy the facility at the selected time.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkFlow;
