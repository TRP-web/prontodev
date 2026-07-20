import Image, { type StaticImageData } from "next/image";
import Container from "@/components/Container";
import AdvantageTime from "@/public/images/advantages-1.png";
import AdvantageData from "@/public/images/advantages-2.png";
import AdvantageOpportunity from "@/public/images/advantages-3.png";
import AdvantageScale from "@/public/images/advantages-4.png";

type Advantage = {
  image: StaticImageData;
  title: string;
  description: string;
  imageWidth: number;
};

const advantages: Advantage[] = [
  {
    image: AdvantageTime,
    title: "Make your work easily",
    description:
      "Simplify worker tasks with software designed specifically for their tasks",
    imageWidth: 180,
  },
  {
    image: AdvantageData,
    title: "Colect and analyze data",
    description:
      "Collect, compile and review any information to increase efficiency. working hours, orders, sales and etc",
    imageWidth: 198,
  },
  {
    image: AdvantageOpportunity,
    title: "Create new opportunities",
    description:
      "Implement new directions of your business quickly and conveniently. Let’s discuss it",
    imageWidth: 202,
  },
  {
    image: AdvantageScale,
    title: "Scale easily",
    description:
      "Our solution evolves with the business: as the company grows, new modules, functions and integrations can be added",
    imageWidth: 210,
  },
];

const WhatYouGet = () => {
  return (
    <section className="mb-[90px] px-4">
      <Container className="relative z-10">
        <h2 className="mb-12 text-center text-[42px] font-bold leading-none text-dark-blue sm:text-[50px]">
          WHAT YOU GET
        </h2>

        <div className="flex flex-wrap xm:justify-center xl:justify-between">
          {advantages.map((advantage) => (
            <article
              key={advantage.title}
              className="flex h-[400px] w-[300px] flex-col items-center rounded-[16px] border-3 border-blue px-2 py-4 text-center mb-4 mr-4 xl:mr-0 xm:bg-white/70 sm:bg-transparent"
            >
              <div className="flex h-[205px] w-full items-center justify-center">
                <Image
                  src={advantage.image}
                  alt=""
                  width={advantage.imageWidth}
                  height={advantage.imageWidth}
                  className="h-auto object-contain"
                  sizes={`${advantage.imageWidth}px`}
                />
              </div>

              <h3 className="mt-4 text-xl font-bold leading-tight text-blue">
                {advantage.title}
              </h3>
              <p className="mt-3 text-xl leading-[1.12] text-[#181818]">
                {advantage.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhatYouGet;
