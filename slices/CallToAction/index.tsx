import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Bounded from "@/components/shared/bounded";

/**
 * Props for `CallToAction`.
 */
export type CallToActionProps = SliceComponentProps<Content.CallToActionSlice>;

/**
 * Component for "CallToAction" Slices.
 */
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
    slice.variation === 'ctaWithGradient' && (
      <Bounded
      className="relative py-10"
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
      >
      <div
      className="relative isolate overflow-hidden bg-white px-6 py-20 text-center sm:rounded-3xl sm:border sm:border-gray-100 sm:px-16 sm:shadow-sm">

      <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Join our community today!
      </h2>

      <h3 className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-500">
          Sign up for exclusive access to events, resources, and more
      </h3>

      <div className="mt-8 flex items-center justify-center gap-x-6">
          <a className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              href="#">
              Explore the forum
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"></path>
              </svg>
          </a>
      </div>
      </div>
      </Bounded>
    )
  }
 </>
  );
};

export default CallToAction;
