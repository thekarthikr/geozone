

import Link from "next/link";
import { Button } from "../../ui/button";

type ServiceHero = {
  heading: string;
  tag: string;
  desc: string;
};

const ServiceHero = ({ heading, tag, desc }: ServiceHero) => {
  return (
    <section id="services" className="pt-32">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="grid grid-cols-1  md:grid-cols-2">
          <div className="max-w-xl space-y-3">
            {/* <Chip color="success" variant="flat">
              {tag}
            </Chip> */}
            <h2 className="text-foreground  text-7xl font-semibold ">
              {heading}
            </h2>
          </div>

          <div className="text-md space-y-3 md:text-lg mt-10">
            <p>{desc}</p>

            <Button>
              {" "}
              <Link href="/about-us"> Get to know us</Link>{" "}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
