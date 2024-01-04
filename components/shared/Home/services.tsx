import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";



export type ServicesProps = SliceComponentProps<Content.ServicesSlice>;


const HomeServices = ({ slice }: ServicesProps): JSX.Element => {
  return (
    <section id="services" className=" px-4 text-gray-600 md:px-8">
    <div className="grid grid-cols-1  md:grid-cols-2">
      <div className="max-w-xl space-y-3">
       
        <h2 className="text-foreground text-4xl   md:text-7xl font-semibold ">
          <div>
           
            <span className="font-heading text-transparent bg-clip-text bg-gradient-to-r text-clip from-orange-400 to-pink-700">
              Services
            </span>
          </div>
          <div>We Offer</div>
        </h2>
      </div> 

      <p className="text-md md:text-lg mt-10">
     {slice.primary.description}
      </p>
    </div>
  </section>
  )
}

export default HomeServices