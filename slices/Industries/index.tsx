import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import {Industries as Industry} from "@/components/shared/Home/industries";

export type IndustriesProps = SliceComponentProps<Content.IndustriesSlice>;

const Industries = ({ slice }: IndustriesProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
     <Industry slice={slice} index={0} slices={[]} context={undefined} />
    </section>
  );
};

export default Industries;
