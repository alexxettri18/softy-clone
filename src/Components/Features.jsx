import React from "react";
import { SlCheck } from "react-icons/sl";

const features = [
  {
    title: "Innovative Hygiene Solutions",
    description:
      "Providing a diverse range of premium hygiene products, including wet wipes, tissues, and personal care items.",
    icon: "💧",
  },
  {
    title: "Uncompromising Quality",
    description:
      "Ensuring the highest standards in product quality to meet the hygiene needs of families and businesses.",
    icon: "✨",
  },
  {
    title: "Nationwide Distribution",
    description:
      "Efficient and reliable delivery services that ensure timely availability of hygiene products across Nepal.",
    icon: "🚛",
  },
  {
    title: "Proudly Made in Nepal",
    description:
      "Softy Hygiene is a locally established brand, offering innovative and accessible hygiene products to every household.",
    icon: "🏭",
  },
  {
    title: "Dedicated Customer Support",
    description:
      "Reach us at +01-5191390 or softy.corporate@gmail.com for queries and feedback. Located in Matighar, Kathmandu.",
    icon: "📞",
  },
  {
    title: "Committed to Growth",
    description:
      "Focused on enhancing customer satisfaction while expanding into new markets and setting industry benchmarks.",
    icon: "📈",
  },
];

const Features = () => {
  return (
    <div className="relative z-0">
      {/* Background Grid & Glow */}
      <div
        className="absolute inset-0 -z-10 w-full h-full 
        bg-white 
        [background-image:linear-gradient(to_right,#4b4b4b1a_1px,transparent_1px),linear-gradient(to_bottom,#4b4b4b1a_1px,transparent_1px)] 
        [background-size:14px_24px]"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-fuchsia-600 opacity-30 blur-[160px]"></div>
      </div>

      {/* Feature Section */}
      <div className="py-16 mx-auto max-w-7xl bg-transparent">
        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-purple-900 via-pink-400 to-purple-900 text-transparent bg-clip-text mb-2">
          Discover the Softy Hygiene Advantage{" "}
        </h2>
        <p className="text-center text-neutral-800 mb-12">
          Delivering innovative and high-quality hygiene solutions for every home
          and business.
        </p>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-purple-50 hover:bg-purple-100 transition-colors"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-purple-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
          <section className="bg-gradient-to-r from-white to-purple-50 py-16 px-4 mt-20">
            <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
              {/* Left Text Content */}
              <div>
                <h4 className="text-lg font-semibold bg-gradient-to-r from-purple-900 via-pink-400 to-purple-900 bg-clip-text text-transparent">
                  Nepal's No.1 Hygiene Brand
                </h4>
                <h2 className="text-4xl font-bold  bg-gradient-to-r from-purple-900 via-pink-400 to-purple-900 bg-clip-text text-transparent my-4 mb-6">
                  Innovating Hygiene Solutions
                </h2>
                <p className="text-neutral-800 text-lg mb-4 max-w-xl">
                  High-quality, safe, and hygienic products designed for the
                  well-being of women, children, and families.
                </p>

                <ul className="space-y-4 text-lg text-gray-800">
                  <li>
                    <span className="font-semibold text-purple-700">
                      💧 Premium Quality Wipes:
                    </span>{" "}
                    Soft and durable wet wipes for babies and everyday use.
                  </li>
                  <li>
                    <span className="font-semibold text-purple-700">
                      😊 Comfortable Baby Diapers:
                    </span>{" "}
                    Ensuring comfort and protection for your little ones.
                  </li>
                  <li>
                    <span className="font-semibold text-purple-700">
                      🛡️ Safe Sanitary Napkins:
                    </span>{" "}
                    Ultra-soft top sheet with superior absorbency for maximum
                    comfort.
                  </li>
                  <li>
                    <span className="font-semibold text-purple-700">
                      📄 Versatile Tissue Papers:
                    </span>{" "}
                    Daily hygiene essentials for homes and workplaces.
                  </li>
                </ul>
              </div>

              {/* Right Image Content */}
              <div className="relative bg-[#e4e488] p-6 rounded-lg border-8 border-purple-800 shadow-xl flex items-center justify-center">
                <img
                  src="/9.png" // Replace with actual path
                  alt="Softy Baby Wipes"
                  className="max-w-full h-auto"
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
          </section>
        </div>
      </div>
    </div>
  );
};

export default Features;
