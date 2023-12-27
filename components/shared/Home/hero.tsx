import { Button } from "@/components/ui/button"
import { Content } from "@prismicio/client";
import { PrismicLink, SliceComponentProps } from "@prismicio/react";

export type HeroProps = SliceComponentProps<Content.HeroSlice>;


const Home = ({ slice }: HeroProps): JSX.Element => {
  return (
  <>
   {
    slice.variation === 'default' && (
      <section className="relative py-12 magic-pattern  sm:py-28 lg:py-40">
      {/* <div className="absolute inset-0">
        <img className="object-cover w-full h-full" src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/5/grid-pattern.png" alt=""/>
      </div> */}

      <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-xl mx-auto text-center">
          <h1 className="text-3xl font-bold  sm:text-4xl lg:text-5xl">
         {slice.primary.heading}
          </h1>
          <p className="max-w-md mx-auto mt-6 text-base font-normal leading-7 ">
           {slice.primary.description}
          </p>

      

          <div className="flex items-center justify-center mt-6 space-x-6 sm:space-x-8">
           <Button >
           <PrismicLink field={slice.primary.button_one_link}>
            {slice.primary.button_one_name}
           </PrismicLink>
           </Button>
           <Button variant="outline" >
           <PrismicLink field={slice.primary.button_two_link}>
            {slice.primary.button_two_name}
           </PrismicLink>
           </Button>

          </div>
        </div>
      </div>

   
    </section>
    )
   }
  </>
  )
}

export default Home
