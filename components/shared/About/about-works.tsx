import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

export type OurWorksProps = SliceComponentProps<Content.OurWorksSlice>;

/**
 * Component for "OurWorks" Slices.
 */
const AboutWorks = ({ slice }: OurWorksProps): JSX.Element => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
      <div>
        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider  uppercase rounded-full bg-teal-accent-400">
       {slice.primary.tag}
        </p>
      </div>
      <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight  sm:text-4xl md:mx-auto">
       
      {slice.primary.heading}
      </h2>
      <p className="text-base  md:text-lg">
        {slice.primary.description}
      </p>
    </div>
    <div className="grid max-w-screen-lg mx-auto space-y-6 lg:grid-cols-2 lg:space-y-0 lg:divide-x">
   
      <div className="space-y-6 sm:px-16">
       
      {
      slice.items.slice(0,3).map(({title,summary} ,idx)=>(
        <div key={idx} className="flex flex-col max-w-md sm:flex-row">
        <div className="mb-4 mr-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50 dark:bg-black/80">
            <svg
              className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
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
        </div>
        <div>
          <h6 className="mb-3 text-xl font-bold leading-5">
          {title}
          </h6>
          <p className="text-sm ">
          {summary}
          </p>
        </div>
      </div>
      ))
     }
     
       
      
      </div>
      <div className="space-y-6 sm:px-16">
       
       {
        slice.items.slice(3,7).map(({title,summary},idx)=>
        <div key={idx} className="flex flex-col max-w-md sm:flex-row">
        <div className="mb-4 mr-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50 dark:bg-black/80">
            <svg
              className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
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
        </div>
        <div>
          <h6 className="mb-3 text-xl font-bold leading-5">
          {title}
          </h6>
          <p className="text-sm ">
            {summary}
          </p>
        </div>
      </div>
        )
       }
      
      
      </div>
    </div>
  </div>
  )
}

export default AboutWorks