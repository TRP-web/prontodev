import Image from "next/image";
import MainScreenBg from "@/public/images/bg-mainscreen.png"
import IdeasObjects from "@/public/images/mainscreen-logos.png"
import Portfolio from "@/components/Portfolio";
import ApplyForms from "@/components/ApplyForms";
import Container from "@/components/Container";
import WhatYouGet from "@/components/WhatYouGet";
export default function Main() {
  return (
    <main>
      <section id="main-screen" className="">
        <div
          className="bg-main relative w-full overflow-hidden  bg-no-repeat bg-right-top xm:px-2 xs:px-3 py-20 sm:px-6 md:py-28 lg:bg-right lg:py-[210px] bg-[length:1229px_auto] lg:mb-[90px]"
          
        >
          <Image
                src={IdeasObjects}
                alt=""
                priority
                width={644}
                height={849}
                className="absolute top-0 left-[50%] hidden min-w-[500px] max-w-[720px] object-contain lg:block"
              />
          <Container className="relative z-10">
            <div className="w-full max-w-[679px] text-dark-blue">
              <div className="w-full">
                <p className="mb-4 sm:max-w-full text-[15px] font-medium leading-snug tracking-[0.02em] xm:text-center sm:text-start text-[#31558e] xs:text-[17px] md:mb-6">
                  Custom Software &bull; Automation &bull; Data Solutions
                </p>
                <h1 className="mb-4 sm:max-w-[523px] xm:text-4xl xm:text-center sm:text-start sm:text-[clamp(2.4rem,7.5vw,3.875rem)] font-bold leading-[1.04] tracking-normal text-dark-blue">
                  Turn Your Ideas Into Reality!
                </h1>
                <p className="mb-8 sm:max-w-[679px] xm:text-center sm:text-start sm:text-[clamp(1rem,3.3vw,1.625rem)] xm:text-xl xs:text-2xl leading-snug text-[#162340]">
                  Have an idea that could make work easier? We help businesses automate processes, improve team communication, and build powerful data solutions.
                </p>
                <div className="flex flex-col gap-4 xs:flex-row xs:flex-wrap xs:gap-5">
                  <a
                    href="#apply-forms"
                    className="inline-flex w-full items-center justify-center rounded-[3px] bg-blue text-center text-[clamp(1.125rem,3.8vw,1.75rem)] font-bold text-white transition hover:bg-[#244b82] xs:w-auto xs:px-[40px] sm:px-[38px] xm:py-[17px]"
                  >
                    Start a Project
                  </a>
                  <a
                    href="#portfolio"
                    className="inline-flex w-full items-center justify-center rounded-[3px] border border-[#7fa0cf] text-center text-[clamp(1.125rem,3.8vw,1.75rem)] font-bold text-blue transition hover:border-blue hover:bg-white/65 xs:w-auto xs:px-[38px] sm:px-[45px] xm:py-[17px]"
                  >
                    View our work
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>

      <WhatYouGet />

      <section id="portfolio">
        <Portfolio />
        <ApplyForms />
      </section>
    </main>
  )
}
