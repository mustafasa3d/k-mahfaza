import { Container } from "@/components/shared/Container";
import Image from "next/image";
import Link from "next/link";

function Contactus() {
  return (
    <section className="relative">
      <Container className="flex flex-col-reverse lg:flex-row items-center justify-between h-full pb-16 lg:pb-24">
        <div className="flex flex-col items-start gap-4 max-w-[658px]">
          {/* Badge */}
          <div className="inline-flex items-center px-[21px] py-[7px] bg-[#EDFFEB] rounded-[70px]">
            <span className="text-[#00853F]  text-base font-medium lg:font-bold">
              Contact us
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-[40px] md:text-[48px] lg:text-[54px] capitalize font-bold leading-[1.3] text-black">
            Your next <span className="text-[#54B948]">opportunity</span> is just a message away
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl lg:text-[18px] font-light text-[#6B6D6C] leading-relaxed max-w-[621px]">
            Have a question or need support? Our team is here to help—reach out
            to us today
          </p>
          {/* Phone Contact Button */}
          <div className="flex flex-col gap-2">
            <Link
              href="tel:+96265349508"
              className="flex items-center gap-4 px-2 py-2 border border-[#00853F] rounded-[60px] hover:bg-[#EDFFEB] transition-colors group"
            >
              {/* Phone Icon Circle */}
              <div className="w-[54px] h-[54px] rounded-full bg-[#00853F] flex items-center justify-center flex-shrink-0">
                <Image
                  src={"/assets/images/contactus/phone.svg"}
                  width={32}
                  height={32}
                  alt="whatsapp"
                />
              </div>

              {/* Phone Number */}
              <span
                className="text-lg md:text-xl font-medium text-black pr-4"
                dir="ltr"
              >
                4309508005349-0
              </span>
            </Link>
            <Link
              href="https://wa.me/96265349508"
              className="flex items-center gap-4 px-2 py-2 border border-[#00853F] rounded-[60px] hover:bg-[#EDFFEB] transition-colors group"
            >
              {/* Phone Icon Circle */}
              <div className="w-[54px] h-[54px] rounded-full bg-[#00853F] flex items-center justify-center flex-shrink-0">
                <Image
                  src={"/assets/images/contactus/whatsapp.svg"}
                  width={32}
                  height={32}
                  alt="whatsapp"
                />
              </div>

              {/* Phone Number */}
              <span
                className="text-lg md:text-xl font-medium text-black pr-4"
                dir="ltr"
              >
                4309508005349-0
              </span>
            </Link>
            <Link
              href="mailto:info@mahfaza.com"
              className="flex items-center gap-4 px-2 py-2 border border-[#00853F] rounded-[60px] hover:bg-[#EDFFEB] transition-colors group"
            >
              {/* Phone Icon Circle */}
              <div className="w-[54px] h-[54px] rounded-full bg-[#00853F] flex items-center justify-center flex-shrink-0">
                <Image
                  src={"/assets/images/contactus/chat.svg"}
                  width={32}
                  height={32}
                  alt="whatsapp"
                />
              </div>

              {/* Phone Number */}
              <span
                className="text-lg md:text-xl font-medium text-black pr-4"
                dir="ltr"
              >
                Live Chat
              </span>
            </Link>
            <Link
              href="mailto:info@mahfaza.com"
              className="flex items-center gap-4 px-2 py-2 border border-[#00853F] rounded-[60px] hover:bg-[#EDFFEB] transition-colors group"
            >
              {/* Phone Icon Circle */}
              <div className="w-[54px] h-[54px] rounded-full bg-[#00853F] flex items-center justify-center flex-shrink-0">
                <Image
                  src={"/assets/images/contactus/mail.svg"}
                  width={32}
                  height={32}
                  alt="whatsapp"
                />
              </div>

              {/* Phone Number */}
              <span
                className="text-lg md:text-xl font-medium text-black pr-4"
                dir="ltr"
              >
                E-mail
              </span>
            </Link>
          </div>
        </div>

        <div className="relative w-full lg:w-[520px]">
          <div className="absolute z-[999] w-full h-full rounded-2xl bg-secondary/20 top-0 left-0">
            <div className="flex items-end justify-center h-full py-5 lg:py-10">
              <Link
                className="text-white inline-flex items-center gap-3 px-6 py-3 bg-secondary/90 hover:bg-secondary rounded-[130px] transition-colors"
                href={"#"}
              >
                <span>text-white text-base font-medium</span>
                <div className="w-[30px] h-[30px] flex items-center justify-center">
                  <Image className="rotate-90 rtl:-rotate-90" src={"/assets/images/footer/arrow.svg"} width={30} height={30} alt="arrow" />
                </div>
              </Link>
            </div>
          </div>
          <div className="relative w-full overflow-hidden rounded-2xl max-h-[700px] aspect-[4/7] lg:aspect-[520/720]">
            <iframe
              src="https://www.google.com/maps?q=Amman%20Jordan&output=embed"
              className="absolute inset-0 h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              title="Google Map"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Contactus;
