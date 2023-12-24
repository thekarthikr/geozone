import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

export type TechnologiesProps = SliceComponentProps<Content.TechnologiesSlice>;

/**
 * Component for "Technologies" Slices.
 */
export const ServiceTechnology = ({ slice }: TechnologiesProps): JSX.Element => {
    return (

     <div>
      
      <div className="text-center max-w-3xl mx-auto py-4">
         <h3 className='text-3xl md:text-4xl'>
          {slice.primary.heading}
         </h3>
         <p>
          {slice.primary.description}
         </p>
       </div>
       <div className="relative px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-20 lg:px-8 lg:py-14">
      
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 z-0 rounded-md w-full h-full bg-gray-100 dark:bg-gray-900/50 lg:w-3/4" />
      </div>
      <div className="relative">
        <div className="grid gap-12 row-gap-8 lg:grid-cols-2">
          <div className="grid gap-12 row-gap-5 md:grid-cols-2">
           {
            slice.items.map(({title,description},idx)=>(
              <div key={idx}>
              <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-teal-accent-400">
                <svg
                  className="w-8 h-8 text-teal-900"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="mb-2 font-semibold leading-5">
              {title}
              </h6>
              <p className="text-sm ">
               {description}
              </p>
            </div>
            ))
           }

            

      


           

          </div>
          {/* Image */}
          <div>
            <img
              className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
              src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
     </div>

     
    );
  };