"use client";

import { Container } from "@/components/shared/Container";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function AreYouReady() {
  const t = useTranslations("home.AreYouReady");
  const ta = useTranslations("home.partnersAlt");

  return (
    <section id="partners" className="py-8 lg:pb-20 pt-0">
      <Container className="relative z-10 mb-12">
        {/* Gradient Banner Section */}
        <div className="relative w-full rounded-[16px] overflow-hidden">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-linear-to-r from-[#001625] to-[#005789]" />

          {/* Content Container */}
          <div className="relative z-10 h-full px-16 grid grid-cols-1 lg:grid-cols-[1fr_1fr] items-center">
            {/* Left side content - You can add text/buttons here */}
            <div className="max-lg:order-2 text-white flex items-center">
              {/* Add your content here */}
              {/* CTA Content */}
              <div className="flex flex-col py-5 items-start gap-8">
                {/* Large Heading */}
                <h2 className="text-[40px] md:text-[48px] lg:text-[48px] font-bold leading-[1.3] text-white">
                  Are You Ready?
                  <br />
                  Trade with confidence
                  <br />
                  Grow with us
                </h2>

                {/* Get Start Button */}
                <Link
                  href="#"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-[#00853F] hover:bg-[#006d33] rounded-[130px] transition-colors"
                >
                  <span className="text-white text-base font-medium">
                    Get Start
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
            </div>
            <div className="max-lg:order-1">
              <Image
                src="/assets/images/home/ready.svg"
                alt="partner-1"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
