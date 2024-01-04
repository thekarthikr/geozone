import { Button } from "@/components/ui/button"
import { Content } from "@prismicio/client";
import {  SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

export type HeroProps = SliceComponentProps<Content.HeroSlice>;


const Home = ({ slice }: HeroProps): JSX.Element => {
  return (
  <>
   {
    slice.variation === 'default' && (
      <section className="relative ">
      
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid  grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="flex mt-32 flex-col text-center lg:text-left gap-4">
            <p className="text-base font-semibold tracking-wider text-blue-600 uppercase">
           {slice.primary.tag}
            </p>
            <h1 className=" text-4xl font-bold   md:text-5xl lg:text-4xl">
           {slice.primary.heading}
           <span className="relative px-2 whitespace-nowrap text-red-500">
       <svg
         aria-hidden="true"
         viewBox="0 0 418 42"
         className="absolute top-2/3 left-0 h-[0.58em] w-full fill-red-600/70"
         preserveAspectRatio="none"
       >
         <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
       </svg>
       <span className="font-heading relative text-transparent bg-clip-text bg-gradient-to-r text-clip from-orange-400 to-pink-700">{slice.primary.hightlighted_text} </span>
     </span>
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

          <div >
            <div className='hidden  lg:flex gap-5'>
            <div className="space-y-4 pt-28">
              {

slice.items.slice(0,2).map(({image},idx)=>(
                  <PrismicNextImage key={idx} className="aspect-[2/3] object-cover w-44 rounded-md" field={image} />
                ))
              }
                </div>
              
                <div className="space-y-4">
                {
                slice.items.slice(2,4).map(({image},idx)=>(
                  <PrismicNextImage key={idx} className="aspect-[2/3] object-cover w-44 rounded-md" field={image} />
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
