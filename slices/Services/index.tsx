import Bounded from "@/components/shared/bounded";
import ServicesLink from "@/components/shared/services-link";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Services`.
 */
export type ServicesProps = SliceComponentProps<Content.ServicesSlice>;

/**
 * Component for "Services" Slices.
 */
const Services = ({ slice }: ServicesProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
  
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="grid grid-cols-1  md:grid-cols-2">
          <div className="max-w-xl space-y-3">
            {/* <Chip color="success" variant="flat">
              What we do
            </Chip> */}
            <h2 className="text-foreground text-5xl  md:text-7xl font-semibold ">
              <div>
                What{" "}
                <span className="font-heading text-transparent bg-clip-text bg-gradient-to-r text-clip from-orange-400 to-pink-700">
                  Services
                </span>
              </div>
              <div>We're Offering</div>
            </h2>
          </div>

          <p className="text-md md:text-lg mt-10">
         {slice.primary.description}
          </p>
        </div>
      </div>
      <ServicesLink slice={slice} index={0} slices={[]} context={undefined} />
  
    </Bounded>
  );
};

export default Services;
