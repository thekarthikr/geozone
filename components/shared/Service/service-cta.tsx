import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

export type CallToActionProps = SliceComponentProps<Content.CallToActionSlice>;

/**
 * Component for "CallToAction" Slices.
 */
const ServiceCta = ({ slice }: CallToActionProps): JSX.Element => {
  return (
 
     

      
        <div className="flex rounded-md max-w-4xl mx-auto flex-col items-center bg-card border border-gray-900 border-opacity-70 px-4 py-10 text-center md:py-14">
       
          <h2 className="mb-6 flex-col text-3xl font-bold  md:text-5xl  ">
           {slice.primary.title}
          </h2>
        
          
          <div className="mx-auto">
            <ul className="mb-6 flex flex-col flex-nowrap gap-3  md:flex-row ">
             
             {
                slice.items.map(({key_feature},idx)=>(
                    <li key={idx} className="ml-2 mr-2 flex flex-row items-center md:mx-4">
                    <img
                      src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358be3a3c2bb8076f2bad62_Vector-6.svg"
                      alt=""
                      className="mr-2 inline-block h-4 w-4"
                    />
                    <p>{key_feature} </p>
                  </li>
                ))
             }
             
             
            </ul>
          </div>
          {/* CTA Button */}
          <a
            href="#"
            className="mb-4 flex flex-row items-center bg-[#276ef1] px-8 py-4 font-semibold  transition [box-shadow:rgb(171,_196,245)-8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px]"
          >
            <p className="mr-6 font-bold">{slice.primary.button_text} </p>
            <svg
              fill="currentColor"
              className="h-4 w-4 flex-none"
              viewBox="0 0 20 21"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Arrow Right</title>
              <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"></polygon>
            </svg>
          </a>
        
        </div>
     
   
  );
};

export default ServiceCta;
