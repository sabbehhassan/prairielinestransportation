import { useEffect, useState } from "react";
import {
  FaStar,
  FaQuoteLeft,
  FaArrowRight,
} from "react-icons/fa";

const reviews = [
  {
    name: "John Doe",
    role: "Amazon Partner",
    review:
      "We rely heavily on Amazon load deliveries, and Prairie Lines Transportation has never let us down. Every shipment is handled with precision.",
  },
  {
    name: "Alessandro Daluz",
    role: "Logistics Client",
    review:
      "Highly recommended logistics agency. Their team understands transportation and freight operations perfectly.",
  },
  {
    name: "Michael Smith",
    role: "Freight Partner",
    review:
      "Dedicated lanes service has improved our delivery timeline significantly. Reliable and professional company.",
  },
  {
    name: "Sarah Wilson",
    role: "Government Contractor",
    review:
      "Government contract logistics were handled securely and professionally. Great communication throughout.",
  },
  {
    name: "Gysin David",
    role: "Business Owner",
    review:
      "Excellent customer support and dependable shipping services. We use them regularly for freight.",
  },
  {
    name: "Emma Johnson",
    role: "Transport Manager",
    review:
      "Fast response time and very organized logistics planning. Highly satisfied with their services.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 2) % reviews.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const visibleReviews = [
    reviews[currentIndex],
    reviews[(currentIndex + 1) % reviews.length],
  ];

  return (
    <section className="bg-gradient-to-b from-[#EEF3E8] to-[#F8F5EE] py-24 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">

          <span className="bg-[#2E6B3D]/10 text-[#2E6B3D] px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wide border border-[#2E6B3D]/10">
            Client Feedback
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0F3D2E] mt-6 leading-tight">
            Trusted By Businesses Worldwide
          </h2>

          <p className="text-[#5d6d63] text-base leading-8 mt-6">
            Hear directly from our satisfied clients who trust us for freight,
            transportation, and logistics excellence.
          </p>

        </div>

        {/* Reviews */}
        <div className="grid lg:grid-cols-2 gap-8 mt-20">

          {visibleReviews.map((review, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-[32px] p-8 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-[#D4A017]/10"
            >

              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#2E6B3D]/5 to-[#D4A017]/5 opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-[#2E6B3D]/10 text-6xl group-hover:text-[#D4A017]/20 transition duration-500">
                <FaQuoteLeft />
              </div>

              <div className="relative">

                {/* Stars */}
                <div className="flex gap-1 text-[#D4A017] mb-5">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-sm" />
                  ))}
                </div>

                {/* Review */}
                <p className="text-[#4f5f55] text-base leading-8">
                  "{review.review}"
                </p>

                {/* Divider */}
                <div className="w-full h-[1px] bg-[#dfe7dc] my-8"></div>

                {/* User */}
                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-4">

                    {/* Avatar */}
                    <div className="w-[55px] h-[55px] rounded-full bg-gradient-to-br from-[#2E6B3D] to-[#0F3D2E] text-white flex items-center justify-center font-bold text-lg shadow-lg">
                      {review.name.charAt(0)}
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-[#0F3D2E]">
                        {review.name}
                      </h4>

                      <p className="text-sm text-[#6d7a72]">
                        {review.role}
                      </p>
                    </div>

                  </div>

                  {/* Arrow */}
                  <div className="text-[#2E6B3D] text-lg group-hover:text-[#D4A017] group-hover:translate-x-1 transition duration-300">
                    <FaArrowRight />
                  </div>

                </div>

              </div>

              {/* Top Accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2E6B3D] to-[#D4A017]"></div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Testimonials;