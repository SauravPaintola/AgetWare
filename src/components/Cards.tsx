import { CardsProps } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Cards: React.FC<CardsProps> = ({ id, title, price, image, rating }) => {
  return (
    <div className="w-64 bg-white shadow-lg p-3 h-[400px] group flex flex-col space-y-2 relative rounded-md overflow-hidden">
      <div className="w-full h-52">
        <Image
          className="w-full h-full object-contain group-hover:scale-105 transition-all duration-300"
          src={image}
          width={500}
          height={500}
          alt={title}
        />
      </div>
      <div className="flex items-center">
        <span>{rating.rate}</span>
        <span>/</span>
        <span>5 ⭐</span>
        <span className="ml-2 text-sm text-gray-600">
          {rating.count} review
        </span>
      </div>
      <h2 className="text-ellipsis line-clamp-2 min-h-[48px]">{title}</h2>
      <div className="flex items-center space-x-2">
        <span className="font-medium">₹{price}</span>
        <span className="text-gray-600 text-sm line-through">
          ₹{price + 100}
        </span>
      </div>
      <Link
        className="absolute bottom-0 left-0 w-full p-3 text-center text-white bg-black group-hover:opacity-100 transition-all duration-300"
        href={`/product/${id}`}
      >
        View Product
      </Link>
    </div>
  );
};

export default Cards;
