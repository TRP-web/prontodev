'use client'


import Project from "./Project"


const Portfolio = () => {
   return (
      <div className="mb-28">
         <h3 className="text-center text-4xl font-medium mb-11">Our Projects</h3>
         <div className="flex flex-col items-center">
            <Project
               title="Prodaction issue reporting system"
               description="description"
            />
            <Project
               title="Prodaction issue reporting system"
               description="description"
            />
            <Project
               title="Prodaction issue reporting system"
               description="description"
            />
         </div>
      </div>
   )
}

export default Portfolio 