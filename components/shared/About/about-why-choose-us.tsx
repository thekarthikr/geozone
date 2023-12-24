import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

export type FeaturesProps = SliceComponentProps<Content.FeaturesSlice>;

/**
 * Component for "Features" Slices.
 */
const WhyChooseUs = ({ slice }: FeaturesProps): JSX.Element => {
  return (
    <div className="max-w-3xl">
    <div className="col-span-2 mb-8">
      <p className="text-lg font-medium text-purple-600 dark:text-purple-500">{slice.primary.tag} </p>
      <h2 className="mt-3 mb-4 text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900  dark:text-white">
       {slice.primary.heading}
      </h2>
      <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400 border-b my-2">
       {slice.primary.description}
      </p>
      <div className="space-y-5">
      {/* <p>
        {slice.primary.}
      </p>
      <p>
        {slice.primary.content_two}
      </p>
      <p>
        {slice.primary.content_three}
      </p> */}
      </div>
    </div>
   
  </div>
  )
}

export default WhyChooseUs