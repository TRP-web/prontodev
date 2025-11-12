'use client'
import AlertAppImage from "@/public/portfolio/alert-app.png"
import ChatImage from "@/public/portfolio/chat-main.png" 

import Project from "./Project"


const Portfolio = () => {
   return (
      <div className="mb-28">
         <h3 className="text-center text-4xl font-medium mb-11">Our Projects</h3>
         <div className="flex flex-col items-center">
            <Project
               image={ChatImage.src}
               title="Main company website"
               description="Website for home service company. The project has a convenient and flexible functionality that can be changed by the owner with the help of CMS system."
            />
            <Project
               image={AlertAppImage.src}
               title="Prodaction issue reporting system"
               description="Interface created especially for customer purposes. For combining between workers. Quick response and correction of product quality problems. Thus improving the quality of products and decreasing the number of marriages. Can additionally display photos for accurate problem detection. Works on any device capable of running a browser."
            />
            
            <Project
               title="Coming soon!"
               description="description"
            />
         </div>
      </div>
   )
}

export default Portfolio 