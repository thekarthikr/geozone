import Bounded from "@/components/shared/bounded";
import HomeServices from "@/components/shared/Home/services";
import ServicesLink from "@/components/shared/Home/services-link";
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
      <ServicesLink slice={slice} index={0} slices={[]} context={undefined} />
  
    </Bounded>
  );
};

export default Services;
