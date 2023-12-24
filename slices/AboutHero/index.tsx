import Bounded from "@/components/shared/bounded";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { COMPILER_INDEXES } from "next/dist/shared/lib/constants";

/**
 * Props for `AboutHero`.
 */
export type AboutHeroProps = SliceComponentProps<Content.AboutHeroSlice>;

/**
 * Component for "AboutHero" Slices.
 */
const AboutHero = ({ slice }: AboutHeroProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 ">
      <span
       
        className="border rounded-2xl py-1 px-4 text-slate-500 text-sm mb-5 hover:scale-105 transition duration-300 ease-in-out"
      >
        About us
      </span>
      <h1 className="mx-auto max-w-4xl  text-5xl font-bold tracking-normal  sm:text-7xl">
      {slice.primary.heading}
        <span className="relative whitespace-nowrap text-red-400">
          <svg
            aria-hidden="true"
            viewBox="0 0 418 42"
            className="absolute top-2/3 left-0 h-[0.58em] w-full fill-red-600/70"
            preserveAspectRatio="none"
          >
            <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
          </svg>
          <span className="relative">{slice.primary.heading_highlight} </span>
        </span>
      </h1>
      <p className="mx-auto mt-12 max-w-3xl font-body text-lg  leading-7">
       {slice.primary.description}
      </p>
      <div className="relative grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-5 mt-8 ">
       
           {
            slice.items.map(({title,description},idx)=>(
              <Card key={idx} className="inline-block  text-center backdrop-blur-sm ">
              <CardHeader >
               
              
                <CardTitle>
                  
                   {title} </CardTitle>
              </CardHeader>
             <CardContent>
              <CardDescription>
                {description}
                </CardDescription>
             </CardContent>
            </Card>
            ))
           }
          </div>
    </div>
    </Bounded>
  );
};

export default AboutHero;
