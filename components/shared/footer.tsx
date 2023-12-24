import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import { BsTwitterX,BsFacebook,BsInstagram,BsLinkedin } from "react-icons/bs";


import React from "react";
import { Button } from "@/components/ui/button";


const client = createClient()
const Footer = async () => {

  const footer = await client.getSingle('navigation')
  const social = await client.getSingle('social_media')

  const icons = {
    Facebook : BsFacebook,
    Instagram : BsInstagram,
    Twitter : BsTwitterX,
    Linkedin: BsLinkedin
  }
  
  return (
    <footer className="text-gray- px-4 py-5  md:px-8  border-t border-gray-800 border-opacity-60">
      <div className="gap-6 justify-between md:flex">
        <div className="flex-1">
          <div className="max-w-xs">
            <h2>{footer.data.title} </h2>
            <p className="leading-relaxed mt-2 text-[15px]">
             {footer.data.description}
            </p>
          </div>
        </div>
        <div className="flex-1 mt-10 space-y-6  justify-between sm:flex md:space-y-0 md:mt-0">

            <ul className="space-y-4" >
            <span className="font-heading font-semibold" > Explore </span>
              {footer.data.explore.map(({ name,link }, idx) => (
                <li key={idx}>
                  
                
                 <PrismicNextLink
                  field={link}
                    className="hover:underline hover:text-indigo-600"
                  >
                    {name}
                  </PrismicNextLink>
                
                </li>
              ))}
            </ul>
            <ul className="space-y-4" >
             <span className="font-heading font-semibold" > Services </span>
            {footer.data.services.map(({ name,link }, idx) => (
              <li key={idx}>
            
              <PrismicNextLink
                field={link}
                  className="hover:underline hover:text-indigo-600"
                >
                  {name}
                </PrismicNextLink>
           
              </li>
            ))}
          </ul>
          <ul className="space-y-4" >
          <span className="font-heading font-semibold" > Contacts </span>
            {footer.data.contact.map(({ name,link }, idx) => (
              <li key={idx}>
             
               <PrismicNextLink
                field={link}
                  className="hover:underline hover:text-indigo-600"
                >
                  {name}
                </PrismicNextLink>
           

              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-8 py-6 border-t border-gray-900 border-opacity-30 items-center justify-between sm:flex">
        <div className="mt-4 sm:mt-0">
          &copy; { new Date().getFullYear()  } GeoZone All rights reserved.
        </div>
        <div className="mt-6 sm:mt-0">
          <ul className="flex items-center space-x-4">
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
    </footer>
  );
};

export default Footer;
