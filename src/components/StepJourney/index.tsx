
const steps = [
  {
    id: 1,
    title: "Choose a Path",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    img: "https://via.placeholder.com/50", // replace with your image
  },
  {
    id: 2,
    title: "Step",
    description: "Step 2 description goes here.",
  },
  {
    id: 3,
    title: "Step",
    description: "Step 3 description goes here.",
  },
  {
    id: 4,
    title: "Step",
    description: "Step 4 description goes here.",
  },
];

export default function StepJourney() {
  return (
    <div className="w-full flex flex-col items-center py-10">
      {/* Left side text and walking man */}
      <div className="flex items-center gap-6 mb-10">
        <div className="text-left font-bold text-2xl leading-tight">
          <p>Your</p>
          <p>Divine</p>
          <p>Journey</p>
          <p>Begins</p>
        </div>
        <div>
          {/* Walking man (SVG or image) */}
          <img
            src="https://cdn-icons-png.flaticon.com/512/1785/1785912.png"
            alt="walking"
            className="w-20"
          />
        </div>
      </div>

      {/* Horizontal Line */}
      <div className="relative w-full max-w-5xl border-t-4 border-black">
        <div className="absolute -top-20 left-0 w-full flex justify-between">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex flex-col items-center w-1/4 px-2"
            >
              {/* Step Circle */}
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-500 text-white font-bold">
                  {step.id}
                </div>
                <p className="text-orange-600 font-bold mt-1">
                  {step.title}
                </p>
              </div>

              {/* Step Content Box */}
              <div className="mt-4 bg-yellow-100 rounded-xl p-4 shadow-md min-h-[150px] text-center">
                <h3 className="font-bold mb-2">{step.title}</h3>
                <p className="text-sm">{step.description}</p>
                {step.img && (
                  <img
                    src={step.img}
                    alt="step"
                    className="w-12 h-12 rounded-full mt-3 mx-auto"
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Final Lotus Icon */}
        <div className="absolute -top-16 right-0">
          <img
            src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
            alt="lotus"
            className="w-16"
          />
        </div>
      </div>
    </div>
  );
}
