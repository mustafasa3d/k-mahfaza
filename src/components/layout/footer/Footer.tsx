"use client";

import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { useTranslations } from "next-intl";
import Image from "next/image";

export function Footer() {
  const t = useTranslations("footer");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary text-white py-6 md:py-8" id="footer">
      <Container>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Column 1: Services & Navigation Links */}
          <div className="flex-1 flex flex-col gap-6">
            {/* Service Links */}
            <div className="flex flex-col gap-6">
              <Link
                href="#"
                className="flex items-start justify-start gap-0 text-[#D4D6D9] hover:text-white transition-colors group"
              >
                <span className="text-lg md:text-xl lg:text-[28px] font-medium leading-tight flex-1">
                  {t("services.localMarket")}
                </span>
                <svg
                  width="6"
                  height="6"
                  viewBox="0 0 6 6"
                  className="mt-1 flex-shrink-0 stroke-[#D4D6D9] group-hover:stroke-white transition-colors -rotate-90"
                  fill="none"
                >
                  <path
                    d="M1 1L5 5M5 5V1M5 5H1"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>

              <Link
                href="#"
                className="flex items-start gap-2 text-[#D4D6D9] hover:text-white transition-colors group"
              >
                <span className="text-lg md:text-xl lg:text-[28px] font-medium leading-tight flex-1">
                  {t("services.forexMarkets")}
                </span>
                <svg
                  width="6"
                  height="6"
                  viewBox="0 0 6 6"
                  className="mt-1 flex-shrink-0 stroke-[#D4D6D9] group-hover:stroke-white transition-colors -rotate-90"
                  fill="none"
                >
                  <path
                    d="M1 1L5 5M5 5V1M5 5H1"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col gap-1 text-sm md:text-base lg:text-[14px] font-medium">
              <div className="flex items-center gap-4 flex-wrap">
                <Link
                  href="/"
                  className="text-[#D4D6D9] hover:text-white transition-colors"
                >
                  {t("navigation.home")}
                </Link>
                <span className="text-[#D4D6D9]">/</span>
                <Link
                  href="/blog"
                  className="text-[#D4D6D9] hover:text-white transition-colors"
                >
                  {t("navigation.blog")}
                </Link>
                <span className="text-[#D4D6D9]">/</span>
                <Link
                  href="/sale"
                  className="text-[#D4D6D9] hover:text-white transition-colors"
                >
                  {t("navigation.sale")}
                </Link>
                <span className="text-[#D4D6D9]">/</span>
              </div>
              <div className="flex items-center gap-4 flex-wrap">
                <Link
                  href="/about"
                  className="text-[#D4D6D9] hover:text-white transition-colors"
                >
                  {t("navigation.aboutUs")}
                </Link>
                <span className="text-[#D4D6D9]">/</span>
                <Link
                  href="/customers"
                  className="text-[#D4D6D9] hover:text-white transition-colors"
                >
                  {t("navigation.forCustomers")}
                </Link>
                <span className="text-[#D4D6D9]">/</span>
              </div>
              <div className="flex items-center gap-4">
                <Link
                  href="/contact"
                  className="text-[#D4D6D9] hover:text-white transition-colors"
                >
                  {t("navigation.contacts")}
                </Link>
              </div>
            </div>
          </div>

          {/* Column 2: Contact Information */}
          <div className="flex-1 flex lg:items-end lg:justify-center">
            <div className="lg:w-fit flex flex-col gap- self-end">
              {/* Phone */}
              <div className="flex flex-col gap-2">
                <h4 className="text-[#D4D6D9] text-[10px] font-medium uppercase">
                  {t("contact.title")}
                </h4>
                <a
                  href={`tel:${t("contact.phone")}`}
                  className="text-white text-lg md:text-xl lg:text-[20px] font-medium hover:text-primary transition-colors"
                  dir="ltr"
                >
                  {t("contact.phone")}
                </a>
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <h4 className="text-[#D4D6D9] text-[10px] font-medium uppercase">
                  {t("contact.emailLabel")}
                </h4>
                <a
                  href={`mailto:${t("contact.email")}`}
                  className="text-white text-[14px] font-normal hover:text-primary transition-colors"
                >
                  {t("contact.email")}
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Address & Hours */}
          <div className="flex-1 flex flex-col gap-4 lg:self-end">
            {/* Address */}
            <div className="flex flex-col gap-2">
              <h4 className="text-[#D4D6D9] text-[10px] font-medium uppercase">
                {t("address.title")}
              </h4>
              <p className="text-white text-base text-[14px] leading-relaxed">
                {t("address.text")}
              </p>
            </div>

            {/* Opening Hours */}
            <div className="flex flex-col gap-2">
              <h4 className="text-[#D4D6D9] text-[10px] font-medium uppercase">
                {t("hours.title")}
              </h4>
              <p className="text-white text-lg md:text-xl font-medium">
                {t("hours.time")}
              </p>
            </div>
          </div>

          {/* Column 4: Scroll to Top & Copyright */}
          <div className="lg:w-fit flex flex-col justify-between items-end gap-28">
            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-[#4aa03e] transition-colors group rotate-180"
              aria-label={t("scrollToTop")}
            >
              <Image
                className="rotate-180"
                src={"/assets/images/footer/arrow.svg"}
                width={25}
                height={25}
                alt="arrow"
              />
            </button>

            {/* Copyright */}
            <p className="text-[#D4D5D9] text-xs font-normal text-end">
              {t("copyright")}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
