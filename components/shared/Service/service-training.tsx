import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

export type TrainingProps = SliceComponentProps<Content.TrainingSlice>;


const ServiceTraining = ({ slice }: TrainingProps): JSX.Element => {
  return (
    <section>
      <div className="container p-4 mx-auto  max-w-7xl sm:p-6 lg:p-8 ">
        <div className="flex flex-wrap -mx-8">
          <div className="w-full px-8 lg:w-1/2">
            <div className="pb-12 mb-12 border-b lg:mb-0 lg:pb-0 lg:border-b-0">
              <h2 className="mb-4 text-3xl font-bold lg:text-4xl font-heading ">
              {slice.primary.heading}
              </h2>
              <p className="mb-8 leading-loose ">
               {slice.primary.description}
              </p>
              <div className="w-full md:w-1/3">
                <button type="button" className="py-2 px-4 bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg ">
                  See more
                </button>
              </div>
            </div>
          </div>
          <div className="w-full px-8 lg:w-1/2">
            <ul className="space-y-12">

              {
                slice.items.map(({title,summary},idx)=>(
                  <li key={idx} className="flex -mx-4">
                  <div className="px-4">
                    <span className="flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold text-red-600 rounded-full font-heading bg-red-50">
                      {idx + 1}
                    </span>
                  </div>
                  <div className="px-4">
                    <h3 className="my-4 text-xl font-semibold dark:text-white">
                   {title}
                    </h3>
                    <p className="leading-loose text-gray-500 dark:text-gray-300">
                    {summary}
                    </p>
                  </div>
                </li>
                ))
              }
           
           
            </ul>
          </div>
        </div>

        <div className="border-t py-3 my-6">
         <p className="max-w-5xl">
         {slice.primary.summary}
         </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceTraining;
