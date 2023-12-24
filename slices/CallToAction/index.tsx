import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Bounded from "@/components/shared/bounded";
import ServiceCta from "@/components/shared/Service/service-cta";


export type CallToActionProps = SliceComponentProps<Content.CallToActionSlice>;


const CallToAction = ({ slice }: CallToActionProps): JSX.Element => {
  return (
   

 <>

 {
  slice.variation === 'default' && (
    <Bounded
    className="relative py-10"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
   <div className="w-full h-full rounded-full  dark:bg-gradient-to-r from-gray-700 to-gray-900 absolute inset-0 blur-2xl opacity-10"></div>
      <div className="max-w-xl mx-auto text-center relative">
        <div className="py-4">
          <h3 className="text-3xl text-foreground font-semibold md:text-4xl">
            Unlock the Power of Precision Mapping with Geo Zone Technologies
          </h3>
          <p className="text-foreground-600 leading-relaxed mt-3">
            Revolutionize your mapping projects with Geo Zone Technologies. From
            advanced point cloud classifications to seamless topographical
            mapping, experience precision like never before.
          </p>
        </div>
        <div className="mt-5 items-center justify-center gap-3 sm:flex">
          <Button className="block w-full mt-2 py-2.5 px-8 text-gray-700 bg-white rounded-md duration-150 hover:bg-gray-100 sm:w-auto">
            <Link href="/#services"> Explore </Link>
          </Button>
          <Button className="block w-full mt-2 py-2.5 px-8 text-gray-300 bg-gray-700 rounded-md duration-150 hover:bg-gray-800 sm:w-auto">
            <Link href="/contact"> Schedule a call</Link>
          </Button>
        </div>
      </div>
    </Bounded>

  )
 }

 
  {
    slice.variation ==="serviceCta" && (
      <Bounded
     
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
      >
     <ServiceCta slice={slice} index={0} slices={[]} context={undefined} />
      </Bounded>
    )
  }
 </>
  );
};

export default CallToAction;
