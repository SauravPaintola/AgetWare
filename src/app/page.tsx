import Shop from "@/slides/Shop";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="w-full h-[500px] flex relative ">
        <Image
          priority
          className="w-full h-full object-cover absolute top-0 right-0 z-0"
          src="/assets/hero.jpg"
          alt="hero"
          width={1000}
          height={1000}
        />
        <div className="flex flex-col z-10 justify-center p-5 lg:p-10 gap-4">
          <p className="font-medium">WINTER 2025 COLLECTION</p>
          <h1 className="text-7xl font-light">
            Valentin Paul <br /> Essential Collection
          </h1>
          <p className="text-sm text-[#7a7a7a]">
            Discover all the new arrivals of ready-to-wear and accessories
          </p>
          <Link
            className="font-medium flex items-center group"
            href={"/#products"}
          >
            {" "}
            <span>Shop Collection</span>
            <ArrowLongRightIcon className="w-5 group-hover:translate-x-4 transition-all" />
          </Link>
        </div>
      </div>
      <Shop />
    </div>
  );
};

export default page;
