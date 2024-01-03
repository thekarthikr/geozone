import { Button } from "@/components/ui/button"
import { Content } from "@prismicio/client";
import { PrismicLink, SliceComponentProps } from "@prismicio/react";
import Image from "next/image";
import img1 from '@/public/images/heroImg.webp'
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

export type HeroProps = SliceComponentProps<Content.HeroSlice>;


const Home = ({ slice }: HeroProps): JSX.Element => {
  return (
  <>
   {
    slice.variation === 'default' && (
      <section className=" ">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid  grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="flex mt-32 flex-col text-center lg:text-left gap-4">
            <p className="text-base font-semibold tracking-wider text-blue-600 uppercase">
           {slice.primary.tag}
            </p>
            <h1 className=" text-2xl font-bold  sm:text-5xl">
           {slice.primary.heading}
            </h1>
            <p className="   sm:text-xl">
           {slice.primary.description}
            </p>

           <div className="space-x-4 ">
            <Button >
              <PrismicNextLink field={slice.primary.button_one_link} >
                {slice.primary.button_one_name}
              </PrismicNextLink>
            </Button>

            <Button variant='outline'>
              <PrismicNextLink field={slice.primary.button_two_link} >
                {slice.primary.button_two_name}
              </PrismicNextLink>
            </Button>
           </div>
          </div>

          <div>
            <div className='flex gap-5'>
            <div className="space-y-4 pt-28">
              {
                slice.items.slice(0,2).map(({image})=>(
                  <PrismicNextImage className="aspect-[2/3] object-cover w-44 rounded-md" field={image} />
                ))
              }
                </div>
              
                <div className="space-y-4">
                {
                slice.items.slice(2,4).map(({image})=>(
                  <PrismicNextImage className="aspect-[2/3] object-cover w-44 rounded-md" field={image} />
                ))
              }
                </div>
                <div className="pt-28">
                <PrismicNextImage className="aspect-[2/3] object-cover w-44 rounded-md" field={slice.items[4].image} />
                </div>
            </div>
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
