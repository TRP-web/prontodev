import Image from "next/image";
import ThinkingPerson from "@/public/weblogo/thinkperson.png"
import ChartIcon from "@/public/smallicons/presentation3.png"
import TimeIcon from "@/public/smallicons/time-management.png"
import IdiasIcon from "@/public/smallicons/mentorship.png"
import AutomationIcon from "@/public/smallicons/automation.png"
import Portfolio from "@/components/Portfolio";
export default function Main() {
  return (
    <>
      {/* лого(наверное какойто текст лого от аи) и картинки
      шрифты не забудь
      наебашьить какой визуал чтобы сайт не сильно простым казался
      капча на квизе
      бек вроде как сейчас не нужен

      разобраться с емейлами обязательно... */}
      <div className="flex min-h-[443px] mt-[65px] mb-[168px]">
        <div className="pt-10 mr-16">
          <h1 className="text-5xl mb-8">Make your thinks real !</h1>
          <p className="text-[22px]">
            Have any idias how to make world easier? We are here to make it real.
            automate work processes, workers communications.
            Data collection and processing.
            Please let us know how we can help!
          </p>
        </div>
        <div className="w-full relative shrink-0 grow max-w-[443px]">
          <Image
            src={ThinkingPerson.src}
            alt="profile"
            objectFit="cover"
            fill
            className="top-0 left-0"
          />
        </div>
      </div>
      <div className="flex justify-between items-start mb-[180px]">
        <div className="max-w-[250px] flex flex-col items-center mr-10">
          <Image
            src={TimeIcon.src}
            alt="profile"
            className="mb-3"
            width={102}
            height={102}
          />
          <h3 className="text-2xl font-medium text-center">Make your work easyly</h3>
          <p className="text-xl">
            Simplify worker tasks with software designed specifically for their tasks.
          </p>
        </div>
        <div className="max-w-[250px] flex flex-col items-center mr-10">
          <Image
            src={ChartIcon.src}
            alt="profile"
            className="mb-3"
            width={102}
            height={102}
          />
          <h3 className="text-2xl font-medium text-center">Colect and analyze data</h3>
          <p className="text-xl">
            Collect, compile and review any information to increase efficiency.
            working hours, orders, sales and etc.
          </p>
        </div>
        <div className="max-w-[250px] flex flex-col items-center mr-10">
          <Image
            src={IdiasIcon.src}
            alt="profile"
            className="mb-3"
            width={102}
            height={102}
          />
          <h3 className="text-2xl font-medium text-center">
            Сreate new opportunities
          </h3>
          <p className="text-xl">
            Implement new directions of your business quickly and conveniently. Let’s discuss it
          </p>
        </div>
        <div className="max-w-[250px] flex flex-col items-center mr-10">
          <Image
            src={AutomationIcon.src}
            alt="profile"
            className="mb-3"
            width={102}
            height={102}
          />
          <div className="">
            <h3 className="text-2xl font-medium text-center">Scalability</h3>
            <p className="text-xl">
              Our solution evolves with the business: as the company grows, new modules, functions and integrations can be added.
            </p>
          </div>

        </div>
      </div>
      <Portfolio />
    </>
  )
}
