import Bounded from "@/components/shared/bounded";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Image from "next/image";
import grid from'@/public/images/grid.svg'


/**
 * Props for `Features`.
 */
export type FeaturesProps = SliceComponentProps<Content.FeaturesSlice>;

/**
 * Component for "Features" Slices.
 */
const Features = ({ slice }: FeaturesProps): JSX.Element => {
  return (
    <>

{
    slice.variation === 'default' && (
      <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      
    >
       

        <div className="max-w-xl space-y-3" id="features" >
          {/* <Chip color="secondary" variant="flat">
            Why choose us{" "}
          </Chip> */}
          <h2 className="text-foreground text-3xl font-semibold sm:text-4xl">
           {slice.primary.heading}
          </h2>
          <p>
           {slice.primary.description}
          </p>
        </div>

        <div className="grid grid-cols-3 mt-12">
          {slice.items.map(({  title, summary,tagline }, idx) => (
            <Card
              key={idx}
              className="space-y-3  w-[400px] z-10 relative border border-gray-300 dark:border-gray-900 border-opacity-50"
            >
              <Image
                src={grid}
                alt="Grid pattern"
                className="absolute  inset-0 -z-10 right-0 opacity-10 dark:opacity-40"
              />
              <CardHeader className="flex flex-col items-start">
              <CardTitle>
            {title}
              </CardTitle>
                {/* <Chip variant="light" className="text-xs font-body ">
                  {" "}
                  {tag}{" "}
                </Chip> */}
              </CardHeader>
              <CardContent>
              <CardDescription>
             {summary}
              </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      
    </Bounded>
    )
   }

{
  slice.variation === 'aboutPurposeAndGoal' && (
  
 
    <div className='overflow-y-hidden'>
    <div className="pb-16" >
      {/* Code block starts */}
      
        <section className="mx-auto container  mt-10  pt-16">
          <div className="px-4 lg:px-0">
            <div role="contentinfo" className="flex items-center flex-col px-4">
              <p  className="focus:outline-none uppercase text-sm text-center  leading-none">{slice.primary.tag} </p>
              <h1  className="focus:outline-none text-4xl lg:text-4xl pt-4 font-extrabold text-center leading-tight  lg:w-7/12 md:w-9/12 xl:w-5/12"> {slice.primary.heading}  </h1>
              <p className="max-w-3xl mx-auto px-3 text-center">
                {slice.primary.description}
              </p>
            </div>
          </div>

           <div  aria-label="group of cards" className="focus:outline-none px-4  bg-indigo-700 mt-12 rounded-md lg:px-0">
            <div className="mx-auto container flex flex-wrap px-2 lg:px-24">
           
           {
            slice.items[0] && (
<div  aria-label="card 1" className="focus:outline-none flex sm:w-full md:w-1/2 lg:border-r md:border-r sm:border-r-0 border-indigo-400 border-opacity-50 pb-10 lg:pt-10">
                <div className=" flex flex-shrink-0 mr-5 text-white">
              
                </div>
                <div className="md:w-9/12 lg:w-9/12">
                  <h2  className="focus:outline-none text-lg font-semibold leading-5 text-white"> {slice.items[0].title} </h2>
                  <p  className="focus:outline-none text-base text-white leading-normal xl:w-10/12 pt-2"> {slice.items[0].summary} </p>
                </div>
              </div>
            )
           }

           {
            slice.items[1] && (
              <div  aria-label="card 2" className="focus:outline-none flex sm:w-full md:w-1/2 lg:pb-10 lg:pt-10">
              <div className=" flex flex-shrink-0 sm:ml-0 md:ml-10 lg:ml-10 mr-5 text-white">
              
              </div>
              <div className="md:w-9/12 lg:w-9/12 ">
                <h2  className="focus:outline-none text-lg font-semibold leading-5 text-white">{slice.items[1].title}</h2>
                <p  className="focus:outline-none text-base text-white leading-normal xl:w-10/12 pt-2">{slice.items[1].title}</p>
              </div>
              </div>
            )
           }
              
        {
          slice.items[2] && (
            <div  aria-label="card 3" className="focus:outline-none flex sm:w-full md:w-1/2 lg:border-t md:border-t sm:border-t-0 lg:border-r md:border-r sm:border-r-0 border-indigo-400 border-opacity-50 pt-10 lg:pb-20">
            <div className=" flex flex-shrink-0 mr-5 text-white">
           
            </div>
            <div className="md:w-9/12 lg:w-9/12 ">
              <h2  className="focus:outline-none text-lg font-semibold leading-5 text-white">{slice.items[2].title}</h2>
              <p  className="focus:outline-none text-base text-white leading-normal xl:w-10/12 pt-2">{slice.items[2].title}</p>
            </div>
          </div>
          )
        }
            
             {
              slice.items[3] && (
                <div  aria-label="card 4" className="focus:outline-none flex sm:w-full md:w-1/2 lg:border-t md:border-t sm:border-t-0 border-indigo-400 border-opacity-50 pt-10 lg:pb-20">
                <div className=" flex flex-shrink-0 sm:ml-0 md:ml-10 lg:ml-10 mr-5 text-white">
                 
                </div>
                <div className="md:w-9/12 lg:w-9/12 ">
                  <h2  className="focus:outline-none text-lg font-semibold leading-5 text-white">{slice.items[3].title}</h2>
                  <p  className="focus:outline-none text-base text-white leading-normal xl:w-10/12 pt-2">{slice.items[3].summary}</p>
                </div>
              </div>
              )
             }

{
              slice.items[4] && (
                <div  aria-label="card 3" className="focus:outline-none flex sm:w-full md:w-1/2 lg:border-t md:border-t sm:border-t-0 lg:border-r md:border-r sm:border-r-0 border-indigo-400 border-opacity-50 pt-10 lg:pb-20">
                <div className=" flex flex-shrink-0 mr-5 text-white">
               
                </div>
                <div className="md:w-9/12 lg:w-9/12 ">
                  <h2  className="focus:outline-none text-lg font-semibold leading-5 text-white">{slice.items[4].title} </h2>
                  <p  className="focus:outline-none text-base text-white leading-normal xl:w-10/12 pt-2">{slice.items[4].summary}</p>
                </div>
              </div>
              )
             }

{
              slice.items[5] && (
                <div  aria-label="card 4" className="focus:outline-none flex sm:w-full md:w-1/2 lg:border-t md:border-t sm:border-t-0 border-indigo-400 border-opacity-50 pt-10 lg:pb-20">
                <div className=" flex flex-shrink-0 sm:ml-0 md:ml-10 lg:ml-10 mr-5 text-white">
                 
                </div>
                <div className="md:w-9/12 lg:w-9/12 ">
                  <h2  className="focus:outline-none text-lg font-semibold leading-5 text-white"> {slice.items[5].title} </h2>
                  <p  className="focus:outline-none text-base text-white leading-normal xl:w-10/12 pt-2"> {slice.items[5].summary} </p>
                </div>
              </div>
              )
             }
           
            </div>
          </div>
        </section>
       
 
      {/* Code block ends */}
    </div>

  </div>
  
  )
}

{
    slice.variation === "whyChooseUs" && (
    
      <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      
    >
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
        <p>
          {slice.primary.content_one}
        </p>
        <p>
          {slice.primary.content_two}
        </p>
        <p>
          {slice.primary.content_three}
        </p>
        </div>
      </div>
     
    </div>
    </Bounded>
    
    )
  }
  

  {
    slice.variation === 'servicePageServices' && (
      <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      
    >
 <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="">
          <h3>
            {slice.primary.heading}
          </h3>
          <p>
            {slice.primary.description}
          </p>
        </div>
        
          <div className="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0">
            <svg
              viewBox="0 0 88 88"
              className="w-full max-w-screen-xl text-indigo-100 dark:text-black"
            >
              <circle fill="currentColor" cx="44" cy="44" r="15.5" />
              <circle
                fillOpacity="0.2"
                fill="currentColor"
                cx="44"
                cy="44"
                r="44"
              />
              <circle
                fillOpacity="0.2"
                fill="currentColor"
                cx="44"
                cy="44"
                r="37.5"
              />
              <circle
                fillOpacity="0.3"
                fill="currentColor"
                cx="44"
                cy="44"
                r="29.5"
              />
              <circle
                fillOpacity="0.3"
                fill="currentColor"
                cx="44"
                cy="44"
                r="22.5"
              />
            </svg>
          </div>
          <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
           
           {
            slice.items.map(({title,summary},idx)=>(
<div key={idx} className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 backdrop-blur-md rounded shadow-xl group hover:shadow-2xl">
              <div className="p-5 dark:bg-black">
                <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50 dark:bg-gray-700">
                  <svg
                    className="w-8 h-8 text-deep-purple-accent-400"
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
                <p className="mb-2 font-bold"> {title} </p>
                <p className="text-sm leading-5 text-gray-900">
                 {summary}
                </p>
              </div>
              <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            </div>
            ))
           }
           
            
           
          </div>
        </div>
      </Bounded>
    )
  }

    </>
  
  );
};

export default Features;
