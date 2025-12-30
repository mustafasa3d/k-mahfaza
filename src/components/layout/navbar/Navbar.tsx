"use client";

import { useState } from "react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import LanguageSwitch from "./LanguageSwitch";
import { Container } from "@/components/shared/Container";
import { cn } from "@/lib/utils";

export function Navbar() {
  const t = useTranslations("nav");
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const locale = useLocale();

  // const NAV_ITEMS = [
  //   // { href: `/${locale}/about-us`, label: t("about") },
  //   // { href: `/${locale}/products`, label: t("products") },
  //   // { href: `/${locale}/research`, label: t("research") },
  //   // { href: `/${locale}/publications`, label: t("publications") },
  //   // { href:  `/${locale}/media-center`, label: t("mediaCenter") },
  //   // { href: "#blog", label: t("blog") },
  //   // { href: `/${locale}/contact-us`, label: t("contact") },
  // ];

  return (
    <>
      <header className="w-full absolute top-0 left-0 right-0 h-[100px] z-10 bg-transparent flex items-center">
        <Container>
          <div className="flex items-center justify-between py-3">
            <Link href={`/${locale}`}>
              <Image
                src="/assets/images/navbar/logonav.png"
                className="h-20 w-32 md:h-16 md:w-47.5"
                alt="Mahfaza Center"
                width={240}
                height={120}
                priority
              />
            </Link>

            {/* <nav className="hidden xl:flex items-center gap-5 text-sm font-medium text-white">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition-colors hover:text-white/70 md:text-sm lg:text-lg"
                >
                  {item.label}
                </Link>
              ))}
            </nav> */}

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                {/* <Image
                  src="/assets/images/navbar/search.svg"
                  className="h-5 w-5"
                  alt="search"
                  width={20}
                  height={20}
                  priority
                /> */}
               <div className="bg-secondary py-2 px-4 rounded-full">
                 <LanguageSwitch />
               </div>
              </div>
              {/* <button
                type="button"
                className="xl:hidden text-white"
                aria-label="فتح القائمة"
                onClick={() => setIsMobileOpen(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#fff"
                    d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"
                  />
                </svg>
              </button> */}
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile nav */}
      {/* <div
        className={cn(
          "fixed inset-0 z-40 bg-black/40 xl:hidden transition-all duration-700",
          isMobileOpen ? "" : "opacity-0 -z-10"
        )}
        onClick={() => setIsMobileOpen(false)}
      >
        <div
          className={cn(
            "absolute inset-y-0 w-64 bg-primary text-white shadow-lg p-6 right-[-103%] duration-700! transition-all",
            isMobileOpen ? "right-0" : ""
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            className="mb-4 text-sm underline"
            onClick={() => setIsMobileOpen(false)}
          >
            {t("close")}
          </button>
          <nav className="flex flex-col gap-4 text-base font-medium">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-white/70"
                onClick={() => setIsMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <LanguageSwitch className="mt-5" />
        </div>
      </div> */}
    </>
  );
}
