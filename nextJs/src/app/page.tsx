import Image from "next/image";
import ThinkingPerson from "@/public/weblogo/thinkperson.png"
import ChartIcon from "@/public/smallicons/presentation3.png"
import TimeIcon from "@/public/smallicons/time-management.png"
import IdiasIcon from "@/public/smallicons/mentorship.png"
import AutomationIcon from "@/public/smallicons/automation.png"
import Portfolio from "@/components/Portfolio";
import ApplyForms from "@/components/ApplyForms";
export default function Main() {
  return (
    <main>
      {/* лого(наверное какойто текст лого от аи) и картинки
      шрифты не забудь
      наебашьить какой визуал чтобы сайт не сильно простым казался
      капча на квизе
      бек вроде как сейчас не нужен

      разобраться с емейлами обязательно... */}
      <div className="flex min-h-[443px] mt-[65px] sm:max-lg:mt-10 xm:max-sm:mt-4  mb-[168px] xs:max-lg:mb-14 xm:max-xs:mb-8 xm:max-md:flex-col xm:max-md:justify-center" >
        <div className="pt-10 mr-16 xm:max-md:mr-0 xm:max-md:mb-5">
          <h1 className="text-5xl md:max-lg:text-4xl mb-8 ">Make your thinks <strong>real !</strong> </h1>
          <p className="text-[22px] md:max-lg:text-[20px]">
            Have any idias how to make world easier? We are here to make it real.
            Automate work processes, workers communications,
            Data collection processing and ect.
            Please let us know how we can help!
          </p>
        </div>
        <div className="w-full relative shrink-0 grow max-w-[443px] md:max-lg:max-w-[360px] xm:max-md:mx-auto">
          <Image
            src={ThinkingPerson.src}
            alt="profile"
            sizes="100vw"
            width={0}
            height={0}
            className="top-0 left-0"
            style={{ width: "100%", height: "auto" }}

          />
        </div>
      </div>
      <div className="flex justify-between items-start mb-[180px] max-lg:flex-wrap max-sm:justify-center">
        <div className="max-w-[250px] sm:max-lg:max-w-[300px] flex flex-col items-center mr-10 xm:max-sm:mr-0 sm:max-lg:mr-5 xm:max-lg:mb-7">
          <Image
            src={TimeIcon.src}
            alt="profile"
            className="mb-3"
            width={102}
            height={102}
          />
          <h3 className="text-2xl font-medium text-center md:max-lg:text-3xl">Make your work easyly</h3>
          <p className="text-xl md:max-lg:text-2xl">
            Simplify worker tasks with software designed specifically for their tasks.
          </p>
        </div>
        <div className="max-w-[250px] md:max-lg:max-w-[300px] flex flex-col items-center mr-10 xm:max-sm:mr-0 sm:max-lg:mr-5 xm:max-lg:mb-7">
          <Image
            src={ChartIcon.src}
            alt="profile"
            className="mb-3"
            width={102}
            height={102}
          />
          <h3 className="text-2xl font-medium text-center md:max-lg:text-3xl">Colect and analyze data</h3>
          <p className="text-xl md:max-lg:text-2xl">
            Collect, compile and review any information to increase efficiency.
            working hours, orders, sales and etc.
          </p>
        </div>
        <div className="max-w-[250px] md:max-lg:max-w-[300px] flex flex-col items-center mr-10 xm:max-sm:mr-0 md:max-lg:mr-5 xm:max-lg:mb-7">
          <Image
            src={IdiasIcon.src}
            alt="profile"
            className="mb-3"
            width={102}
            height={102}
          />
          <h3 className="text-2xl font-medium text-center md:max-lg:text-3xl">
            Сreate new opportunities
          </h3>
          <p className="text-xl md:max-lg:text-2xl">
            Implement new directions of your business quickly and conveniently. Let’s discuss it
          </p>
        </div>
        <div className="max-w-[250px] md:max-lg:max-w-[300px] flex flex-col items-center mr-10 xm:max-sm:mr-0 md:max-lg:mr-5">
          <Image
            src={AutomationIcon.src}
            alt="profile"
            className="mb-3"
            width={102}
            height={102}
          />
          <div className="">
            <h3 className="text-2xl font-medium text-center md:max-lg:text-3xl">Scalability</h3>
            <p className="text-xl md:max-lg:text-2xl">
              Our solution evolves with the business: as the company grows, new modules, functions and integrations can be added.
            </p>
          </div>

        </div>
      </div>
      <Portfolio />
      <ApplyForms />
      {/* footer // rent server to start mb // adaptive // contact us // about us //  */}
    </main>
  )
}
