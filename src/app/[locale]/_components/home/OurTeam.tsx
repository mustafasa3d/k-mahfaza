import { Container } from "@/components/shared/Container";
import Image from "next/image";

export default function OurTeam() {
  return (
    <section className="pb-8 pt-5 bg-[#EDFFEB]">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col items-center gap-6 mb-12">
          {/* Badge */}
          <div className="inline-flex items-center px-[21px] py-[7px] bg-[#EDFFEB] rounded-[70px]">
            <span className="text-[#00853F] text-base font-medium lg:font-bold">
              Our Team
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-[40px] md:text-[54px] lg:text-[54px] font-bold leading-[1.3] text-black text-center max-w-[933px]">
            Meet Our <span className="text-[#54B948]">Team</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* cart 1 */}
          {/* Team Member Card */}
          {Array.from({ length: 3 }).map((item,idx) => (
            <div key={idx} className="relative h-[417px] rounded-2xl overflow-hidden group cursor-pointer">
              {/* Image Background - Grayscale */}
              <div className="absolute inset-0 bg-gray-300">
                <Image
                  src="/assets/images/about/founder1.png"
                  alt="Team Member"
                  fill
                  className="object-cover grayscale"
                />
              </div>

              {/* Bottom Info Section - Blue */}
              <div className="absolute bottom-0 left-0 right-0 h-[83px] bg-secondary rounded-2xl mx-[14px] mb-[14px] p-4 flex items-center justify-between">
                {/* Name and Title */}
                <div className="flex flex-col gap-1">
                  <h3 className="text-white text-lg font-semibold leading-tight">
                    Mr. Mohammed Bahjat
                    <br />
                    Al-belbeisi
                  </h3>
                  <p className="text-white text-sm font-normal">Chairman</p>
                </div>

                {/* Arrow Icon */}
                <div className="w-[50px] h-[50px] flex items-center justify-center flex-shrink-0">
                  <Image
                    className="rotate-90 rtl:-rotate-90"
                    src="/assets/images/footer/arrow.svg"
                    width={50}
                    height={50}
                    alt="arrow"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
