

import HomeFaqs from "@/components/shared/Home/faq";
import Bounded from "@/components/shared/bounded";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";



export type FaqsProps = SliceComponentProps<Content.FaqsSlice>;


const Faqs = ({ slice }: FaqsProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
     <HomeFaqs slice={slice} index={0} slices={[]} context={undefined}/> 
    </Bounded>
  );
};

export default Faqs;
