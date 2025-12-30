import { Container } from "@/components/shared/Container";
import ServicesTwoColumn from "./ServicesTwoColumn";

function Services() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col items-center gap-6 mb-12">
          {/* Badge */}
          <div className="inline-flex items-center px-[21px] py-[7px] bg-[#EDFFEB] rounded-[70px]">
            <span className="text-[#00853F] text-base font-medium lg:font-bold">
              Our Services
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-[40px] md:text-[48px] lg:text-[54px] font-bold leading-[1.3] text-black text-center max-w-[933px]">
            Seamless Access to <span className="text-[#54B948]">Local</span> and <span className="text-[#54B948]">Global</span> Financial Markets
          </h2>
        </div>
        {/* Two Column Layout */}
        <ServicesTwoColumn />
      </Container>
    </section>
  );
}

export default Services;
