import Bounded from "@/components/shared/bounded";

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Image from "next/image";
import { BsTwitterX,BsFacebook,BsInstagram,BsWhatsapp } from "react-icons/bs";

import ContactForm from "@/components/shared/Contact/contact-form";
import ContactSection from "@/components/shared/Contact/contact-section";



export type ContactProps = SliceComponentProps<Content.ContactSlice>;


const Contact = ({ slice }: ContactProps): JSX.Element => {

  const icons = [BsTwitterX,BsFacebook,BsInstagram,BsWhatsapp
  ];
  return (
    <Bounded className="min-h-screen"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
       <ContactSection slice={slice} index={0} slices={[]} context={undefined} />
    </Bounded>
    
  );
};

export default Contact;
