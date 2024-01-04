import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import React from 'react';
import Bounded from '../bounded';
import { PrismicNextImage } from '@prismicio/next';
export type FeaturesProps = SliceComponentProps<Content.FeaturesSlice>;

const ServiceEditing = ({ slice }: FeaturesProps): JSX.Element => {
  return (

 <>
 {
    slice.variation === "videoEditing" && (
      <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      
    >
     
     <div className="relative max-w-screen-xl p-4 px-4 mx-auto sm:px-6 lg:px-8 py-26 lg:mt-20">
      <div className="relative">
        <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="ml-auto lg:col-start-2 lg:max-w-2xl">
          
            <h4 className="mt-2 text-2xl font-extrabold leading-8  sm:text-3xl sm:leading-9">
             {slice.primary.heading}
            </h4>
            <p className="mt-4 text-lg leading-6 ">
             {slice.primary.description}
            </p>
            <ul className="gap-6 mt-8 md:grid md:grid-cols-2">
             {
              slice.items.map(({title,summary},idx)=>(
                <li key={idx} className="mt-6 lg:mt-0">
                <div className="flex">
                  <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800  rounded-full dark:text-green-500 dark:bg-transparent">
                    <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </span>
                  <div className="ml-4 leading-6 text-gray-500 dark:text-gray-200">
                    <h4>
                      {title}
                    
                    </h4>
                    {/* <p>
                    {summary}
                    </p> */}
                  </div>
                </div>
              </li>
              ))
             }
             
            </ul>
          </div>
          <div className="relative mt-10 lg:-mx-4 relative-20 lg:mt-0 lg:col-start-1">
            <div className="relative space-y-4">
              <div className="flex items-end justify-center space-x-4 lg:justify-start">
               {
                slice.items.slice(0,2).map(({images},idx)=>(
                  <PrismicNextImage key={idx} field={images} className="w-32 rounded-lg shadow-lg md:w-56" width="200"  />
             
                ))
               }
              </div>
              <div className="flex items-start justify-center ml-12 space-x-4 lg:justify-start">
              {
                slice.items.slice(2,4).map(({images},idx)=>(
                  <PrismicNextImage key={idx} field={images} className="w-32 rounded-lg shadow-lg md:w-56" width="200"  />
             
                ))
               }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Bounded>
    )
   }
 </>



  );
};

export default ServiceEditing;
