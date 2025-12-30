"use client";
import { Container } from "@/components/shared/Container";
import Image from "next/image";
import Link from "next/link";

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:pb-24 pt-28 overflow-hidden relative bg-linear-to-t to-[#EDFFEB] from[#F6F9F8]">
      <Container className="relative z-10 mb-12">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-6 mb-12">
          {/* Badge */}
          <div className="inline-flex items-center px-[21px] py-[7px] bg-[#EDFFEB] rounded-[70px]">
            <span className="text-[#00853F] text-base font-medium lg:font-bold">
              Why Choose Us?
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-[40px] md:text-[48px] lg:text-[54px] font-bold leading-[1.3] text-black text-center max-w-[933px]">
            Your Trusted <span className="text-[#54B948]">Partner</span> in Local and Global Markets
          </h2>
          <p className="text-center text-lg md:text-xl lg:text-2xl font-light text-primaryGray leading-tight">
            We combine decades of financial expertise, trusted memberships, and
            cutting-edge technology to deliver a secure, transparent, and
            rewarding trading experience.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Feature Card */}
          <div className="border border-[#00853F] rounded-2xl p-6 flex flex-col justify-between gap-6 h-[215px]">
            {/* Title */}
            <h3 className="text-xl lg:font-bold font-semibold text-[#00853F]">
              Full Market Access
            </h3>

            {/* Description */}
            <p className="text-base lg:text-lg font-light text-[#6B6D6C] leading-relaxed">
              Trade across local and international markets with one secure
              platform.
            </p>
          </div>

          {/* Duplicate cards for grid layout */}
          <div className="border border-[#00853F] rounded-2xl p-6 flex flex-col justify-between gap-6 h-[215px]">
            <h3 className="text-xl lg:font-bold font-semibold text-[#00853F]">
              Expert Guidance
            </h3>
            <p className="text-base lg:text-lg font-light text-[#6B6D6C] leading-relaxed">
              Get personalized support from our experienced team of financial
              advisors.
            </p>
          </div>

          <div className="border border-[#00853F] rounded-2xl p-6 flex flex-col justify-between gap-6 h-[215px]">
            <h3 className="text-xl lg:font-bold font-semibold text-[#00853F]">
              Advanced Tools
            </h3>
            <p className="text-base lg:text-lg font-light text-[#6B6D6C] leading-relaxed">
              Access cutting-edge trading tools and real-time market analytics.
            </p>
          </div>

          <div className="border border-[#00853F] rounded-2xl p-6 flex flex-col justify-between gap-6 h-[215px]">
            <h3 className="text-xl font-semibold text-[#00853F]">
              Secure Trading
            </h3>
            <p className="text-base text-[#6B6D6C] leading-relaxed">
              Your investments are protected with bank-level security and
              encryption.
            </p>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="#"
            className="inline-flex items-center gap-3 px-6 py-3 bg-[#00853F] hover:bg-[#006d33] rounded-[130px] transition-colors"
          >
            <span className="text-white text-base font-medium">
              Learn More About Our Services
            </span>

            {/* Arrow Icon */}
            <div className="w-[30px] h-[30px] flex items-center justify-center">
              <Image
                className="rotate-90 rtl:-rotate-90"
                src={"/assets/images/footer/arrow.svg"}
                alt="arrow"
                width={30}
                height={30}
              />
            </div>
          </Link>
        </div>
      </Container>
    </section>
  );
}
