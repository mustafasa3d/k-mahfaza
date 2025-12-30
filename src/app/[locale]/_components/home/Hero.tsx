import { Container } from "@/components/shared/Container";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

export default async function Hero() {
  const t = await getTranslations("home");
  return (
    <section
      className="relative overflow-hidden text-secondary bg-linear-to-b from-white to-black"
      id="hero"
    >
      <Container>
        <div className="absolute inset-0">
          <Image
            src="/assets/images/hero/hero-bg-placeholder.svg"
            // src="/assets/images/hero/hero-bg-placeholder.png"
            alt="خلفية مركز الحقيقة"
            fill
            className="object-cover w-full h-full opacity-80"
          />
          {/* <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-black/60" /> */}
        </div>

        <div className="relative flex justify-center min-h-[calc(100vh+100px)] flex-col px-4 pb-30 pt-24 lg:px-0">
          <div>
            <h1 className="mb-4 max-w-[760px] text-2xl font-alexandria rtl:leading-relaxed tracking-tight sm:text-3xl lg:text-[3rem] xl:text-[72px] font-bold lg:font-[900]">
              {t("hero.title")}
            </h1>
            <p className="text-sm max-w-[760px] font-medium sm:text-[20px]">
              {t("hero.subtitle")}
            </p>
          </div>
          <div className="flex flex-wrap gap-4 mt-8">
            {/* btn 1 - Start Now */}
            <button className="group flex items-center gap-2 rounded-full bg-secondary px-8 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:bg-[#0052A3] hover:shadow-lg hover:scale-105">
              <span>{t("hero.startNow")}</span>
              <Image
                className="transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
                src="/assets/images/hero/arrowhero.svg"
                alt="arrow"
                width={24}
                height={21}
              />
            </button>

            {/* btn 2 - Explore More */}
            <button className="group rounded-full border-2 border-secondary bg-transparent px-8 py-3.5 text-base font-semibold text-secondary transition-all duration-300 hover:bg-secondary hover:text-white hover:shadow-lg hover:scale-105">
              {t("hero.exploreMore")}
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
