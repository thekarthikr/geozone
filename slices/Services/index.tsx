import Bounded from "@/components/shared/bounded";
import ServiceCardLink from "@/components/shared/Home/service-card";
import HomeServices from "@/components/shared/Home/services";
import { DroneVideography } from "@/components/shared/Service/service-drone-video";
import ServiceEditing from "@/components/shared/Service/service-editing";
import ServiceTraining from "@/components/shared/Service/service-training";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";


export type ServicesProps = SliceComponentProps<Content.ServicesSlice>;


const Services = ({ slice }: ServicesProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
   
    >
  
     <HomeServices slice={slice} index={0} slices={[]} context={undefined} />   
      {/* <ServicesLink slice={slice} index={0} slices={[]} context={undefined} /> */}
      <ServiceCardLink slice={slice} index={0} slices={[]} context={undefined}/>
     
     
    
    </Bounded>
  );
};

export default Services;
