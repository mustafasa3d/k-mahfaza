import { Container } from "@/components/shared/Container";
import Image from "next/image";

function InvestorRelations() {
  return (
    <section className="relative bg-[#EDFFEB] overflow-hidden py-16 md:py-24">
      <Container className="relative">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-6 mb-12">
          {/* Badge */}
          <div className="inline-flex items-center px-[21px] py-[7px] bg-[#EDFFEB] rounded-[70px]">
            <span className="text-[#00853F] text-base font-medium lg:font-bold">
              Investor Relations
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-[40px] md:text-[48px] lg:text-[54px] font-bold leading-[1.3] text-black text-center max-w-[933px]">
            Investor Relations Transparency You Can <span className="text-[#54B948]">Trust</span>
          </h2>
          <p className="text-center text-lg md:text-xl lg:text-[35px] text-primaryGray leading-tight">
            <span className="text-[#54B948]">We are committed to delivering clear, transparent,</span> and timely
            information to our investors. Our Investor Relations section
            provides access to financial reports, market updates, and corporate
            governance resources to help you make informed decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {/* cart 1 */}
          {/* Service Card */}
          <div className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center gap-4 h-[242px]">
            {/* Icon */}
            <div className="w-[112px] h-[112px] flex items-center justify-center">
              <Image
                src={"/assets/images/home/in1.svg"}
                width={115}
                height={115}
                alt="files"
              />
            </div>

            {/* Title */}
            <h3 className="text-lg lg:text-xl text-[#6B6D6C] text-center">
              <span className="block">Financial</span>
              Documents
            </h3>
          </div>

          {/* Additional Service Cards */}
          <div className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center gap-4 h-[242px]">
            <div className="w-[112px] h-[112px] flex items-center justify-center">
              <Image
                src={"/assets/images/home/in2.svg"}
                width={115}
                height={115}
                alt="files"
              />
            </div>
            <h3 className="text-lg lg:text-xl text-[#6B6D6C] text-center">
              <span className="block">Press</span>
              Releases
            </h3>
          </div>

          <div className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center gap-4 h-[242px]">
            <div className="w-[112px] h-[112px] flex items-center justify-center">
              <Image
                src={"/assets/images/home/in3.svg"}
                width={115}
                height={115}
                alt="files"
              />
            </div>
            <h3 className="text-lg lg:text-xl text-[#6B6D6C] text-center">
              <span className="block">Corporate</span>
              Governance
            </h3>
          </div>
          <div className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center gap-4 h-[242px]">
            <div className="w-[112px] h-[112px] flex items-center justify-center">
              <Image
                src={"/assets/images/home/in4.svg"}
                width={115}
                height={115}
                alt="files"
              />
            </div>
            <h3 className="text-lg lg:text-xl text-[#6B6D6C] text-center">
              <span className="block">Creditor</span>
              Information
            </h3>
          </div>
          <div className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center gap-4 h-[242px]">
            <div className="w-[112px] h-[112px] flex items-center justify-center">
              <Image
                src={"/assets/images/home/in5.svg"}
                width={115}
                height={115}
                alt="files"
              />
            </div>
            <h3 className="text-lg lg:text-xl text-[#6B6D6C] text-center">
              <span className="block">Integrity </span>
              Hotlines
            </h3>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default InvestorRelations;
