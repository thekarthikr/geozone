import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

export type FeaturesProps = SliceComponentProps<Content.FeaturesSlice>;
const AboutGoal = ({ slice }: FeaturesProps): JSX.Element => {
  return (
           <>
           {
            slice.variation === 'aboutPurposeAndGoal' && (
              <div className='overflow-y-hidden'>
              <div >
              
                
                  <section className="">
                    <div className="">
                      <div role="contentinfo" className="flex items-center flex-col ">
                     
                        <h1  className="focus:outline-none text-4xl lg:text-4xl pt-4 font-extrabold text-center leading-tight  lg:w-7/12 md:w-9/12 xl:w-5/12"> {slice.primary.heading}  </h1>
                        <p className="md:max-w-3xl mx-auto  text-center">
                          {slice.primary.description}
                        </p>
                      </div>
                    </div>
          
                     <div  aria-label="group of cards" className="focus:outline-none  py-3   mt-12 rounded-md lg:px-0">
                      <div className=" block md:flex flex-wrap lg:px-24">
                     
                     {
                      slice.items[0] && (
          <div  aria-label="card 1" className="focus:outline-none flex sm:w-full md:w-1/2 lg:border-r md:border-r sm:border-r-0  border-opacity-50 pb-10 lg:pt-10">
                          <div className=" flex flex-shrink-0 mr-5 ">
                        
                          </div>
                          <div className="md:w-9/12 lg:w-9/12">
                            <h2  className="focus:outline-none text-lg font-semibold leading-5 "> {slice.items[0].title} </h2>
                            <p  className="focus:outline-none text-base  leading-normal xl:w-10/12 pt-2"> {slice.items[0].summary} </p>
                          </div>
                        </div>
                      )
                     }
          
                     {
                      slice.items[1] && (
                        <div  aria-label="card 2" className="focus:outline-none flex sm:w-full md:w-1/2 lg:pb-10 lg:pt-10">
                        <div className=" flex flex-shrink-0 sm:ml-0 md:ml-10 lg:ml-10 mr-5 ">
                        
                        </div>
                        <div className="md:w-9/12 lg:w-9/12 ">
                          <h2  className="focus:outline-none text-lg font-semibold leading-5 ">{slice.items[1].title}</h2>
                          <p  className="focus:outline-none text-base  leading-normal xl:w-10/12 pt-2">{slice.items[1].title}</p>
                        </div>
                        </div>
                      )
                     }
                        
                  {
                    slice.items[2] && (
                      <div  aria-label="card 3" className="focus:outline-none flex sm:w-full md:w-1/2 lg:border-t md:border-t sm:border-t-0 lg:border-r md:border-r sm:border-r-0  border-opacity-50 pt-10 lg:pb-20">
                      <div className=" flex flex-shrink-0 mr-5 ">
                     
                      </div>
                      <div className="md:w-9/12 lg:w-9/12 ">
                        <h2  className="focus:outline-none text-lg font-semibold leading-5 ">{slice.items[2].title}</h2>
                        <p  className="focus:outline-none text-base  leading-normal xl:w-10/12 pt-2">{slice.items[2].title}</p>
                      </div>
                    </div>
                    )
                  }
                      
                       {
                        slice.items[3] && (
                          <div  aria-label="card 4" className="focus:outline-none flex sm:w-full md:w-1/2 lg:border-t md:border-t sm:border-t-0  border-opacity-50 pt-10 lg:pb-20">
                          <div className=" flex flex-shrink-0 sm:ml-0 md:ml-10 lg:ml-10 mr-5 ">
                           
                          </div>
                          <div className="md:w-9/12 lg:w-9/12 ">
                            <h2  className="focus:outline-none text-lg font-semibold leading-5 ">{slice.items[3].title}</h2>
                            <p  className="focus:outline-none text-base  leading-normal xl:w-10/12 pt-2">{slice.items[3].summary}</p>
                          </div>
                        </div>
                        )
                       }
          
          {
                        slice.items[4] && (
                          <div  aria-label="card 3" className="focus:outline-none flex sm:w-full md:w-1/2 lg:border-t md:border-t sm:border-t-0 lg:border-r md:border-r sm:border-r-0  border-opacity-50 pt-10 lg:pb-20">
                          <div className=" flex flex-shrink-0 mr-5 ">
                         
                          </div>
                          <div className="md:w-9/12 lg:w-9/12 ">
                            <h2  className="focus:outline-none text-lg font-semibold leading-5 ">{slice.items[4].title} </h2>
                            <p  className="focus:outline-none text-base  leading-normal xl:w-10/12 pt-2">{slice.items[4].summary}</p>
                          </div>
                        </div>
                        )
                       }
          
          {
                        slice.items[5] && (
                          <div  aria-label="card 4" className="focus:outline-none flex sm:w-full md:w-1/2 lg:border-t md:border-t sm:border-t-0  border-opacity-50 pt-10 lg:pb-20">
                          <div className=" flex flex-shrink-0 sm:ml-0 md:ml-10 lg:ml-10 mr-5 ">
                           
                          </div>
                          <div className="md:w-9/12 lg:w-9/12 ">
                            <h2  className="focus:outline-none text-lg font-semibold leading-5 "> {slice.items[5].title} </h2>
                            <p  className="focus:outline-none text-base  leading-normal xl:w-10/12 pt-2"> {slice.items[5].summary} </p>
                          </div>
                        </div>
                        )
                       }
                     
                      </div>
                    </div>
                  </section>
                 
              </div>
          
            </div>
            )
           }
           </>
  )
}

export default AboutGoal