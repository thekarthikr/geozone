
import { FAQAccordion } from "@/components/shared/faq-accordion";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";


/**
 * Props for `Faqs`.
 */
export type FaqsProps = SliceComponentProps<Content.FaqsSlice>;

/**
 * Component for "Faqs" Slices.
 */
const Faqs = ({ slice }: FaqsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="space-y-3 text-center">
        <h1 className="text-3xl text-gray-800 font-semibold">
          {slice.primary.title}
        </h1>
        <p className="text-gray-600 max-w-lg mx-auto text-lg">
         {slice.primary.description}
        </p>
      </div>
      <div className="mt-14 max-w-2xl mx-auto mb-14">
     <FAQAccordion slice={slice} index={0} slices={[]} context={undefined}  />
      </div>
    </section>
  );
};

export default Faqs;
