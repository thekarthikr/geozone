import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import { BsTwitterX,BsFacebook,BsInstagram,BsLinkedin } from "react-icons/bs";


import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";


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
  
  const footerNavs = [
    {
        href: 'javascript:void()',
        name: 'About'
    },
    {
        href: 'javascript:void()',
        name: 'Blog'
    },
    {
        href: 'javascript:void()',
        name: ''
    },
    {
        href: 'javascript:void()',
        name: 'Team'
    },
    {
        href: 'javascript:void()',
        name: 'Careers'
    },

    {
        href: 'javascript:void()',
        name: 'Suuport'
    }
]




  return (


    <footer className="text-gray- px-4 py-5  md:px-8 ">
      


       
         
        


      <div className="mt-8 py-6 border-t border-gray-900 border-opacity-30 items-center justify-between sm:flex">
        <div className="mt-4 sm:mt-0">
          Copyright &copy; GeoZone All rights reserved.
        </div>

           
        <ul className="items-center justify-center  space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
                {
                    footer.data.quick_links.map((item, idx) => (
                        <li key={idx} className=" hover:text-gray-800">
                        {
                          item.link.link_type === 'Web' ? <Link href='/#services'>
                           {item.name}
                          </Link> :  <PrismicNextLink field={item.link}>
                                { item.name } 
                            </PrismicNextLink>
                        }

                          
                        </li>
                    ))
                }
            </ul>
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
