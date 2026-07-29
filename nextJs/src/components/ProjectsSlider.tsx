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
