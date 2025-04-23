import React from "react";
import { SlCheck } from "react-icons/sl";


const WhySofty = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-900 via-pink-400 to-purple-900 bg-clip-text text-transparent">
            Why to Choose Softy Hygiene Pvt. Ltd?
          </h2>
          <p className="text-neutral-700 mt-2">
            We SOFTY HYGIENE PVT.LTD. are one of the largest private level manufacturing of
            disposable wet wipes, Baby wipes, Baby Diaper, Sanitary Napkins and Tissue paper.
          </p>
        </div>

        {/* Image and Cards */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-lg relative">
              <img
                src="/8.png" // Replace with your image path
                alt="Softy Baby"
                className="w-full h-auto object-cover"
              />
              {/* Top Left Tag */}
              <div className="absolute top-4 left-4 bg-[#f3f3ad] text-sm text-gray-900 px-4 py-2 rounded-md shadow-md font-semibold flex items-center gap-2">
              <SlCheck />
              No 1 in Personal hygienic
              </div>
              {/* Bottom Right Tag */}
              <div className="absolute bottom-4 right-4 bg-[#f3f3ad] text-sm text-gray-900 px-4 py-2 rounded-md shadow-md font-semibold flex items-center gap-2">
                📢 Nepal's No.1 Hygiene Brand
              </div>
            </div>
          </div>

          {/* Info Cards */}
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-pink-50 border border-pink-200 shadow-sm">
              <h4 className="text-lg font-semibold mb-2 text-purple-900 flex items-center gap-2">
                🧼 Why Softy?
              </h4>
              <p className="text-gray-700">
                As action speaks louder than words. “We SOFTY HYGIENE PVT.LTD. is one of the
                largest private level manufacturing of disposable wet wipes, Baby wipes, Baby Diaper,
                Sanitary Napkins and Tissue paper.”
              </p>
            </div>
            <div className="p-6 rounded-xl bg-green-50 border border-green-200 shadow-sm">
              <h4 className="text-lg font-semibold mb-2 text-purple-900 flex items-center gap-2">
                🌍 Our Vision
              </h4>
              <p className="text-gray-700">
                To become one of the most liable, respectable manufacturing company based on
                wet tissue, Sanitary Napkins, Baby Diaper and tissue paper and expand our business all
                over Nepal and Global Market too.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-indigo-50 border border-indigo-200 shadow-sm">
              <h4 className="text-lg font-semibold mb-2 text-purple-900 flex items-center gap-2">
                🎯 Our Mission
              </h4>
              <p className="text-gray-700">
                Our mission is to bring joy, happiness and inspiration to baby, and all people all
                over Nepal and Global market by providing our products to ensure you with best experience
                with us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySofty;
