'use client'

import { Children, type ReactNode } from "react"
import { A11y, Keyboard } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"

interface ProjectsSliderProps {
   children: ReactNode
}

const ProjectsSlider = ({ children }: ProjectsSliderProps) => {
   const projects = Children.toArray(children)

   return (
      // make sign about the slider for mobile version. to show that the slider is scrollable, add a small arrow icon on the right side of the slider. or smt other.

      // when slider is active then start to play images. indicators  like how many images or time remaining to show the next image.
      <Swiper
         modules={[A11y, Keyboard]}
         aria-label="Our projects"
         centeredSlides
         grabCursor
         keyboard={{ enabled: true }}
         // loop={projects.length > 2}
         slidesPerView="auto"
         spaceBetween={16}
         className="w-full max-w-[1300px] !py-10 slider-box-shadow"
         breakpoints={{
            640: {
               spaceBetween: 24,
            },
         }}
      >
         {projects.map((project, index) => (
            <SwiperSlide
               key={index}
               className="!w-[calc(100%_-_2rem)] !max-w-[620px]"
            >
               {project}
            </SwiperSlide>
         ))}
      </Swiper>
   )
}

export default ProjectsSlider
