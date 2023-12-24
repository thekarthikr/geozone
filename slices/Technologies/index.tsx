import Bounded from "@/components/shared/bounded";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import {  ServiceTechnology } from "@/components/shared/Service/service-technology";


export type TechnologiesProps = SliceComponentProps<Content.TechnologiesSlice>;

const Technologies = ({ slice }: TechnologiesProps): JSX.Element => {
  return (
    <Bounded
    data-slice-type={slice.slice_type}
    data-slice-variation={slice.variation}
  >
 <ServiceTechnology slice={slice} index={0} slices={[]} context={undefined}  />
   </Bounded>

  );
};

export default Technologies;
