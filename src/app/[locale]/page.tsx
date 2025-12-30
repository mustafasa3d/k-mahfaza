import About from "./_components/home/About";
import AreYouReady from "./_components/home/AreYouReady";
import Contactus from "./_components/home/Contactus";
import Hero from "./_components/home/Hero";
import InvestorRelations from "./_components/home/InvestorRelations";
import OurTeam from "./_components/home/OurTeam";
import Services from "./_components/home/Services";
import Vision from "./_components/home/Vision";
import WhyChooseUs from "./_components/home/WhyChooseUs";
import IntroWrapper from "./_components/intro/IntroWrapper";




import Image from 'next/image';


export default function LocaleHome() {





  return (
    <>
      <IntroWrapper>
        <Hero />
      </IntroWrapper>
      <About />
      <Vision />
      <Services />
      <InvestorRelations />
      <OurTeam />
      <WhyChooseUs />
      <AreYouReady />
      <Contactus />
    </>);
}
