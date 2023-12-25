import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import ContactForm from "./contact-form";
import Image from "next/image";
import contactBanner from '@/public/images/contact.svg'
export type ContactProps = SliceComponentProps<Content.ContactSlice>;
import { IoLocationOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import {BsTwitterX,BsInstagram,BsFacebook,BsLinkedin} from 'react-icons/bs'
import { PrismicNextLink } from "@prismicio/next";
import { createClient } from "@/prismicio";
import React from "react";


const client = createClient()
const ContactSection = async ({ slice }: ContactProps): Promise<JSX.Element >=> {

 const social = await client.getSingle('social_media')

  const icons = {
    Facebook : BsFacebook,
    Instagram : BsInstagram,
    Twitter : BsTwitterX,
    Linkedin: BsLinkedin
  }

  return (
    < div className="md:flex md:items-center ">
    <div className="md:w-1/2 md:mx-10">
      <h1 className="text-3xl font-semibold  capitalize  md:text-4xl">
       {slice.primary.heading}
      </h1>

      <p className="mt-4 ">
       {slice.primary.description}
      </p>
    
      <ContactForm />
    </div>

    <div className="mt-12 md:flex md:mt-0 md:flex-col md:items-center md:w-1/2 md:mx-10">
   
      <Image src={contactBanner} alt="contact image for geozone tech"  className="hidden object-cover mx-auto rounded-full md:block shrink-0 w-96 h-96"  />

      <div className="mt-6 space-y-8 md:mt-8">
        <p className="flex items-center -mx-2">
       <IoLocationOutline />

          <span className="mx-2  truncate w-72 ">
         {slice.primary.location}
          </span>
        </p>

        <p className="flex items-center -mx-2">
      <LuPhone />
          <span className="mx-2  truncate w-72 ">
        {slice.primary.phone_number}
          </span>
        </p>

        <p className="flex items-center -mx-2">
        <MdEmail />

          <span className="mx-2  truncate w-72 ">
          {slice.primary.email}
          </span>
        </p>
      </div>

      <div className="mt-6 w-80 md:mt-8">
        <h3 className="text-gray-600 dark:text-gray-300 ">Follow us</h3>

        <div className="mt-6 sm:mt-0">
          <ul className="flex items-center my-2 space-x-4">
           
            {social.data.social_media.map(({ name,link },idx) => (
              <li
                key={idx}
                className="w-10 h-10 border border-gray-900 border-opacity-50 rounded-full flex items-center justify-center"
              >
                <PrismicNextLink field={link} >
                {
  name && icons[name as keyof typeof icons] && (
    React.createElement(icons[name as keyof typeof icons])
  )
}

        </PrismicNextLink>
               
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
  );
};

export default ContactSection;
