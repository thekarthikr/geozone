import AboutWorks from "@/components/shared/About/about-works";
import Bounded from "@/components/shared/bounded";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";


export type OurWorksProps = SliceComponentProps<Content.OurWorksSlice>;


const OurWorks = ({ slice }: OurWorksProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
     <AboutWorks slice={slice} index={0} slices={[]} context={undefined}/>
    </Bounded>
  );
};

export default OurWorks;
