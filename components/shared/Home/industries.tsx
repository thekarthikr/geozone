import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { GiTallBridge } from "react-icons/gi";
import { FaCity,FaRoad } from "react-icons/fa";
import { LiaIndustrySolid } from "react-icons/lia";
import { MdDirectionsRailway } from "react-icons/md";
import { AiOutlinePropertySafety } from "react-icons/ai";
import React from "react";

export type IndustriesProps = SliceComponentProps<Content.IndustriesSlice>;

export const Industries = ({ slice }: IndustriesProps): JSX.Element => {
    const icons = {
        bridge : GiTallBridge,
        city: FaCity,
        highway: FaRoad,
        industry : LiaIndustrySolid,
        railway: MdDirectionsRailway,
        property: AiOutlinePropertySafety
      }

    return (
        <section className="py-14 bg-gray-100 dark:bg-black/60">
            <div className="max-w-screen-xl mx-auto px-4 text-center  md:px-8">
                <div className="max-w-2xl mx-auto">
                    <h3 className=" text-3xl font-semibold sm:text-4xl">
                     {slice.primary.heading}
                    </h3>
                    <p className="mt-3">
                     {slice.primary.description}
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            slice.items.map(({title,description,item_id}, idx) => (
                                <li key={idx} className="space-y-3">
                                 
                                 <div className={`w-16 h-16 mx-auto bg-red-300/30 dark:bg-red-700/30 text-red-500 rounded-full flex items-center justify-center`}>
  {item_id && icons[item_id as keyof typeof icons] && (
    React.createElement(icons[item_id as keyof typeof icons], { className: 'text-5xl' })
  )}
</div>

                                    <h4 className="text-lg  font-semibold">
                                        {title} 
                                    </h4>
                                    <p>
                                        {description}
                                    </p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

