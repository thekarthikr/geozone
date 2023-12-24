import Bounded from "@/components/shared/bounded";

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Image from "next/image";
import { BsTwitterX,BsFacebook,BsInstagram,BsWhatsapp } from "react-icons/bs";
import contactBanner from '@/public/images/contact.svg'
import ContactForm from "@/components/shared/Contact/contact-form";



export type ContactProps = SliceComponentProps<Content.ContactSlice>;


const Contact = ({ slice }: ContactProps): JSX.Element => {

  const icons = [BsTwitterX,BsFacebook,BsInstagram,BsWhatsapp
  ];
  return (
    <Bounded className="min-h-screen"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
           < div className="lg:flex lg:items-center lg:-mx-10">
          <div className="lg:w-1/2 lg:mx-10">
            <h1 className="text-3xl font-semibold text-gray-800 capitalize dark:text-white lg:text-4xl">
             {slice.primary.heading}
            </h1>

            <p className="mt-4 text-gray-500 dark:text-gray-400">
             {slice.primary.description}
            </p>
          
            <ContactForm />
          </div>

          <div className="mt-12 lg:flex lg:mt-0 lg:flex-col lg:items-center lg:w-1/2 lg:mx-10">
         
            <Image src={contactBanner} alt="contact image for geozone tech"  className="hidden object-cover mx-auto rounded-full lg:block shrink-0 w-96 h-96"  />

            <div className="mt-6 space-y-8 md:mt-8">
              <p className="flex items-start -mx-2">
                {/* LOCATION ICON GOES HERE */}

                <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
               {slice.primary.location}
                </span>
              </p>

              <p className="flex items-start -mx-2">
              {/* PHONE ICONS GOES HERE */}
                <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
              {slice.primary.phone_number}
                </span>
              </p>

              <p className="flex items-start -mx-2">
              {/* MAIL ICON GOES HERE */}

                <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                {slice.primary.email}
                </span>
              </p>
            </div>

            <div className="mt-6 w-80 md:mt-8">
              <h3 className="text-gray-600 dark:text-gray-300 ">Follow us</h3>

              <div className="flex mt-4 -mx-1.5 ">
               
               {/* SOCIAL ICONS GOES HERE */}
              </div>
            </div>
          </div>
        </div>
    </Bounded>
    
  );
};

export default Contact;
