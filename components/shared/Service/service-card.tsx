import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../ui/card";
import ServiceCta from "./service-cta";


export type FeaturesProps = SliceComponentProps<Content.FeaturesSlice>;


const ServiceCard = ({ slice }: FeaturesProps): JSX.Element => {
 
 
 
return (
<>

{slice.variation === 'servicePageServices' && (
    <div className="">

    <div className="max-w-3xl mx-auto text-center py-8">
      <h2 className="text-3xl md:text-5xl">
        {slice.primary.heading}
      </h2>
      <p> {slice.primary.description} </p>
    </div>
  <div className="relative  px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div className="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0">
      <svg
        viewBox="0 0 88 88"
        className="w-full max-w-screen-xl text-indigo-50 dark:text-gray-800"
      >
        <circle
          fill="currentColor"
          fillOpacity="0.4"
          cx="44"
          cy="44"
          r="15.5"
        />
        <circle
          fillOpacity="0.1"
          fill="currentColor"
          cx="44"
          cy="44"
          r="44"
        />
        <circle
          fillOpacity="0.1"
          fill="currentColor"
          cx="44"
          cy="44"
          r="37.5"
        />
        <circle
          fillOpacity="0.1"
          fill="currentColor"
          cx="44"
          cy="44"
          r="29.5"
        />
        <circle
          fillOpacity="0.1"
          fill="currentColor"
          cx="44"
          cy="44"
          r="22.5"
        />
      </svg>
    </div>
    <div className="relative grid gap-5 sm:grid-cols-2 md:grid-cols-3 items-center">
     
     {
      slice.items.map(({title,summary},idx)=>(
        <Card key={idx} className="backdrop-blur-md bg-white/30 dark:bg-black/20  text-center transition duration-300 transform rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
       <CardHeader>
        <CardTitle>
          {title}
        </CardTitle>
       </CardHeader>
       <CardContent>
        <CardDescription>
          {summary}
        </CardDescription>
       </CardContent>
      
      </Card>
      ))
     }
     
    
  
    </div>
  </div>
 
</div>
)}
</>
)



}
export default ServiceCard;




