import Image from "next/image";
import React from "react";

const foundersData = [
  {
    company: "Sanshi network tech pvt Ltd",
    name: "Vanaparthi santhosh",
    role: "Head of Strategy, Transformation, Service Management, and Risk at Sanshi Network Tech Pvt Ltd, overseeing strategic growth and operational excellence.",
  },
];

const FoundersSection = () => {
  return (
    <div className="bg-white py-12 md:px-6 flex justify-center items-center">
      <div>
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Founders</h2>
          <p className="text-gray-600 mt-2">
            A platform trusted by leaders to reach and connect with their
            audience.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto min-h-52">
          {foundersData.map((founder, index) => (
            <div
              key={index}
              className="bg-gray-50  pl-6 flex items-center space-x-4"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {founder.company}
                </h3>
                <p className="font-medium text-gray-800">{founder.name}</p>
                <p className="text-gray-500 ">{founder.role}</p>
                {/* <button className="mt-4 px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700 transition">
                  Watch
                </button> */}
              </div>
              <Image
                src="/founder.jpeg"
                alt="name1"
                className="w-52 h-52 object-cover"
                width={1000}
                height={1000}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoundersSection;
