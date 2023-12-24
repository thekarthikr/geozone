import Bounded from "@/components/shared/bounded";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `OurWorks`.
 */
export type OurWorksProps = SliceComponentProps<Content.OurWorksSlice>;

/**
 * Component for "OurWorks" Slices.
 */
const OurWorks = ({ slice }: OurWorksProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
         {slice.primary.tag}
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="07690130-d013-42bc-83f4-90de7ac68f76"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#07690130-d013-42bc-83f4-90de7ac68f76)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">The</span>
          </span>{' '}
        {slice.primary.heading}
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          {slice.primary.description}
        </p>
      </div>
      <div className="grid max-w-screen-lg mx-auto space-y-6 lg:grid-cols-2 lg:space-y-0 lg:divide-x">
     
        <div className="space-y-6 sm:px-16">
         
        {
        slice.items.slice(0,3).map(({title,summary} ,idx)=>(
          <div className="flex flex-col max-w-md sm:flex-row">
          <div className="mb-4 mr-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
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
            <p className="text-sm text-gray-900">
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
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
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
            <p className="text-sm text-gray-900">
              {summary}
            </p>
          </div>
        </div>
          )
         }
        
        
        </div>
      </div>
    </div>
    </Bounded>
  );
};

export default OurWorks;
