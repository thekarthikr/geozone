// import { Button } from "@/components/ui/button";
// import { Content } from "@prismicio/client";
// import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
// import { SliceComponentProps } from "@prismicio/react";


// export type HeroProps = SliceComponentProps<Content.HeroSlice>;


// const HomeHero = ({ slice }: HeroProps): JSX.Element => {
//   return (
//     <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
//     <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">

//       <h1 className="text-4xl text-gray-800 dark:text-gray-200 font-extrabold font-heading md:text-5xl">
//          {slice.primary.heading}
//       </h1>
//       <p>
//     {slice.primary.description}
//       </p>
//       {/* <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
//        <Button>
//          <PrismicNextLink field={slice.primary.button_one_link}>
//           {slice.primary.button_one_name}
//          </PrismicNextLink>
//        </Button>
//        <Button variant='outline'>
//          <PrismicNextLink field={slice.primary.button_two_link}>
//           {slice.primary.button_two_name}
//          </PrismicNextLink>
//        </Button>
//       </div> */}
//     </div>
//     <div className="flex-none mt-14 md:mt-0 md:max-w-xl">

//     <PrismicNextImage field={slice.primary.image} width={500} />
     
//     </div>
//   </div>
  
//   )
// }

// export default HomeHero