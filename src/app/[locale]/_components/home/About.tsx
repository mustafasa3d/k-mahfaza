import { Container } from "@/components/shared/Container";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

export default function About(params: any) {
  // const t = await getTranslations("home");

  const normalDirection = params?.locale === "ar" ? "rtl" : "ltr";

  return (
    <section id="about" className="relative py-16 md:py-20">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col items-center gap-6 mb-12">
          {/* Badge */}
          <div className="inline-flex items-center px-[21px] py-[7px] bg-[#EDFFEB] rounded-[70px]">
            <span className="text-[#00853F] font-bold text-base">
              Who We Are
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-[40px] md:text-[48px] lg:text-[54px] font-bold leading-[1.3] text-black text-center max-w-[933px]">
            Regulated. Reliable. Ready for <span className="text-[#54B948] block">Global Markets</span>
          </h2>
          <p className="text-center text-lg md:text-xl lg:text-2xl font-light text-primaryGray leading-tight">
            Continuing to Provide Innovative and Sustainable Financial
            Solutions: Enhancing Service Levels to achieve the highest levels of
            customer satisfaction. Committed to keeping pace with sustainable
            technological developments in our sector. Preserving and enhancing
            the investments of our portfolio shareholders.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10">
          <div className="max-lg:order-2">
            {/* Section Header */}
            <div className="flex flex-col gap-6 mb-6">
              {/* Badge */}
              <div className="inline-flex items-center w-fit px-[21px] py-[7px] bg-[#EDFFEB] rounded-[70px]">
                <span className="text-[#00853F] font-bold text-base">
                  Our Journey
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="text-[40px] md:text-[48px] lg:text-[54px] font-bold leading-[1.3] text-black max-w-[933px]">
                Evolving with markets Empowering investors
              </h2>
            </div>

            <div className="h-[350px] lg:h-[400px] overflow-auto" dir="rtl">
              {/* Timeline Section */}
              <div className="flex gap-5" dir={normalDirection}>
                {/* Timeline Items */}
                <div className="flex flex-col gap-[16px] flex-1">
                  {/* Timeline Item 1 - 1982 (Green Background) */}
                  <div className="hover:bg-primary/15 duration-300 border border-[#D9D9D9] rounded-2xl p-6">
                    <h4 className="text-2xl font-bold text-black mb-3">1982</h4>
                    <p className="text-[14px] font-light text-[#A6A6A6] leading-relaxed">
                      The National Portfolio Securities Company, a limited
                      public shareholding company, was established and
                      registered in the public shareholding companies register
                      at the Ministry of Industry and Trade in the Hashemite
                      Kingdom of Jordan under number (166) on March 20, 1982.
                    </p>
                  </div>

                  {/* Timeline Item 2 - 1989 (Border Only) */}
                  <div className="hover:bg-primary/15 duration-300 border border-[#D9D9D9] rounded-2xl p-6">
                    <h4 className="text-2xl font-bold text-black mb-3">1989</h4>
                    <p className="text-[14px] font-light text-[#A6A6A6] leading-relaxed">
                      Mahfaza recorded its first benchmark trading volume of 45
                      million Jordanian dinars.
                    </p>
                  </div>

                  {/* Timeline Item 3 - 1992 (Border Only) */}
                  <div className="hover:bg-primary/15 duration-300 border border-[#D9D9D9] rounded-2xl p-6">
                    <h4 className="text-2xl font-bold text-black mb-3">1992</h4>
                    <p className="text-[14px] font-light text-[#A6A6A6] leading-relaxed">
                      Mahfaza purchased a piece of land located on Issam
                      Al-Ajlouni Street in Shmeisani with a constructed facility
                      upon it to serve as its headquarters.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Stats Card with Image */}
          <div className="relative h-[632px] max-lg:order-1">
            {/* Background Grayscale Image */}
            <div className="absolute right-0 top-0 w-[413px] h-[632px] rounded-2xl overflow-hidden">
              <Image
                src="/assets/images/home/contact.png"
                alt="Financial Markets"
                fill
                className="object-cover grayscale"
              />
            </div>

            {/* Stats Box with Notched Circle */}
            <div className="absolute left-0 bottom-40 w-[228px] h-[259px]">
              {/* Blue Stats Container */}
              <div className="absolute left-[11px] top-[10px]  pt-10 w-[217px] bg-secondary rounded-2xl flex flex-col items-center justify-center px-6 py-8">
                {/* Green Circle Decoration */}
                <div className="absolute -left-2 -top-5 w-[72px] h-[72px] bg-[#EDFFEB] border border-[#54B947] ring-3 ring-white rounded-full flex items-center justify-center z-10">
                  <Image
                    src="/assets/images/home/twoarrows.svg"
                    alt="Financial Markets"
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                {/* Large Number */}
                <div className="font-gulf text-[144px] font-bold text-white leading-none">
                  47
                </div>

                {/* Description */}
                <p className="text-white text-center text-lg font-medium leading-tight">
                  Years in Financial Markets
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
