import Bounded from "@/components/shared/bounded";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { AboutHero as AboutSection } from "@/components/shared/About/about-hero";

export type AboutHeroProps = SliceComponentProps<Content.AboutHeroSlice>;


const AboutHero = ({ slice }: AboutHeroProps): JSX.Element => {
  return (
    <Bounded
    className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 "
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
    <AboutSection slice={slice} index={0} slices={[]} context={undefined}/>
    </Bounded>
  );
};

export default AboutHero;
