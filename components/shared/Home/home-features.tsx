import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { CardHeader,Card, CardContent,CardTitle,CardDescription } from "../../ui/card";
import Image from "next/image";
import grid from'@/public/images/grid.svg'
/**
 * Props for `Features`.
 */
export type FeaturesProps = SliceComponentProps<Content.FeaturesSlice>;

/**
 * Component for "Features" Slices.
 */
const HomeFeatures = ({ slice }: FeaturesProps): JSX.Element => {
  return (
    <div>
       

       <div className="max-w-xl space-y-3" id="features" >
          {/* <Chip color="secondary" variant="flat">
            Why choose us{" "}
          </Chip> */}
          <h2 className="text-foreground text-3xl font-semibold sm:text-4xl">
           {slice.primary.heading}
          </h2>
          <p>
           {slice.primary.description}
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3 grid-cols-1 place-items-center items-start mt-12">
          {slice.items.map(({  title, summary,tagline }, idx) => (
            <Card
              key={idx}
              className="space-y-3 h-56  z-10 relative border border-gray-300 dark:border-gray-900 border-opacity-50"
            >
              <Image
                src={grid}
                alt="Grid pattern"
                className="absolute  inset-0 -z-10 right-0 opacity-10 dark:opacity-40"
              />
              <CardHeader className="flex flex-col items-start">
              <CardTitle>
            {title}
              </CardTitle>
                {/* <Chip variant="light" className="text-xs font-body ">
                  {" "}
                  {tag}{" "}
                </Chip> */}
              </CardHeader>
              <CardContent>
              <CardDescription>
             {summary}
              </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
    </div>
  )
}

export default HomeFeatures