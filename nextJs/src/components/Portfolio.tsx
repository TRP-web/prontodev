'use client'

import ChatImage from "@/public/portfolio/chat-main.png"
import ChatImage1 from "@/public/portfolio/chat-1.png"
import PortfolioImage from "@/public/portfolio/portfolio-main.png"
import PortfolioImage1 from "@/public/portfolio/portfolio-1.png"
import PortfolioImage2 from "@/public/portfolio/portfolio-2.png"
import FoodImage from "@/public/portfolio/food-main.png"
import FoodImage1 from "@/public/portfolio/food-1.png"
import Project from "./Project"


const Portfolio = () => {
   return (
      <div className="mb-28">
         <h3 className="text-center text-4xl font-bold mb-11">Our Projects</h3>
         <div className="flex flex-col items-center">
            <Project
               image={ChatImage.src}
               extraImages={[ChatImage1.src]}
               title="Main company website"
               description={<>
                  <strong>Website for a home services company</strong>, designed to effectively present services, generate leads, and streamline client communication. The project features a modern, responsive design optimized for all devices, fast performance, and SEO-friendly structure.
                  <br/>
                  The website includes a <strong>flexible content management system (CMS)</strong> that allows the business owner to easily update services, prices, images, and text without technical knowledge. Additional functionality can be extended or customized as the business grows, making the platform scalable and easy to maintain.

                  The solution focuses on usability, reliability, and adaptability, helping the company manage content efficiently while providing a smooth experience for customers.
               </>}
            />
            <Project
               image={PortfolioImage.src}
               title="Personal website portfolio"
               extraImages={[PortfolioImage1.src, PortfolioImage2.src]}
               description={<>
                  <strong>Portfolio website</strong> designed and developed to present personal projects, skills, and professional experience in a clear and modern format.
                  <br />
                  <strong>
                     Key Features:
                  </strong>
                  <br />
                  <ul>
                     <li className="pl-1">
                        - Fully responsive design for all screen sizes
                     </li>
                     <li className="pl-1">
                        - Clean and minimal user interface
                     </li>
                     <li className="pl-1">
                        - Structured project and content sections
                     </li>
                     <li className="pl-1">
                        - Optimized performance and fast load times
                     </li>
                     <li className="pl-1">
                        - SEO-friendly markup and accessibility best practices
                     </li>
                  </ul>
               </>

               }
            />
            {/* // Interface created especially for customer purposes. For combining between workers. Quick response and correction of product quality problems. Thus improving the quality of products and decreasing the number of marriages. Can additionally display photos for accurate problem detection. Works on any device capable of running a browser. */}
            <Project
               image={FoodImage.src}
               title="Delivery system"
               extraImages={[FoodImage1.src]}
               description={<>
               <strong>Food delivery website</strong> with a modern UI and easy-to-use CMS for managing menus, prices, and promotions. Optimized for mobile devices and fast ordering.
               </>}
            />
         </div>
      </div>
   )
}

export default Portfolio 