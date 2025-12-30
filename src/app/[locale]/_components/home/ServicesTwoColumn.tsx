import React from "react";
import Image from "next/image";
import Link from "next/link";

function ServicesTwoColumn() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      {/* Left Side - Image Container */}
      <div className="relative bg-[#F6F9F8] p-8 pb-0 rounded-t-2xl">
        <div className="relative w-full aspect-[528/516] rounded-t-2xl overflow-hidden">
          <Image
            src="/assets/images/home/access.png"
            alt="Local Market Trading"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Right Side - Content */}
      <div className="flex flex-col gap-6">
        {/* Title */}
        <h2 className="text-[40px] md:text-[48px] lg:text-[40px] font-bold leading-[1.3] text-black">
          Local Market Trading <span className="text-[#54B948]">(ASE)</span>
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl lg:text-2xl font-light text-[#6B6D6C] leading-relaxed">
          Our brokerage department is distinguished by excellent customer service, easily accessible through direct contact, making us always ready to meet the needs and inquiries of our clients.
        </p>

        {/* CTA Button */}
        <Link
          href="#"
          className="inline-flex items-center gap-3 px-6 py-3 bg-[#00853F] hover:bg-[#006d33] rounded-[130px] transition-colors self-start"
        >
          <span className="text-white text-base font-medium">Start Now</span>

          {/* Arrow Icon */}
          <div className="w-[30px] h-[30px] flex items-center justify-center">
            <Image className="rotate-90 rtl:-rotate-90" src={"/assets/images/footer/arrow.svg"} alt="arrow" width={30} height={30} />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ServicesTwoColumn;
