import ServiceTraining from "@/components/shared/Service/service-training";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

export type TrainingProps = SliceComponentProps<Content.TrainingSlice>;


const Training = ({ slice }: TrainingProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
    <ServiceTraining slice={slice} index={0} slices={[]} context={undefined} />
    </section>
  );
};

export default Training;
