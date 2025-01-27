import { Product } from "@/utils/data";
import getProductDetails from "@/utils/getProductDetails";
import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "@/components/AddToCartButton"; // Import the client-side button component

const ProductPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;
  const data: Product = await getProductDetails({ slug });

  const colors = [
    { label: "Red", hex: "#8B0000" },
    { label: "Blue", hex: "#00008B" },
    { label: "Orange", hex: "#FFA500" },
    { label: "Green", hex: "#008000" },
    { label: "Pink", hex: "#FFC0CB" },
    { label: "Black", hex: "#000" },
    { label: "White", hex: "#FFF" },
  ];

  const sizes = ["XXS", "XS", "S", "M", "L", "XL", "XXL"];

  return (
    <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Image Section */}
      <div className="flex flex-col items-center overflow-hidden lg:h-[550px]">
        <Image
          priority
          src={data.image}
          alt={data.title}
          width={1000}
          height={1000}
          className="rounded-lg w-full h-full object-contain"
        />
      </div>

      {/* Details Section */}
      <div>
        <nav className="text-sm text-gray-500 mb-4">
          <span>
            <Link href={"/"}>Home</Link> / {data.category} /
          </span>{" "}
          <span className="text-black font-semibold">{data.title}</span>
        </nav>

        <h1 className="text-2xl font-bold mb-2">{data.title}</h1>
        <p className="text-yellow-500">★★★★★ {data.rating.count} reviews</p>

        <div className="flex items-center mt-4 space-x-4">
          <span className="text-xl font-bold text-red-500">${data.price}</span>
        </div>

        <p className="text-gray-600 mt-4">{data.description}</p>

        <div className="mt-6">
          <p className="font-semibold">Color:</p>
          <div className="flex space-x-2 mt-2">
            {colors.map((color, index) => (
              <button
                key={index}
                style={{ backgroundColor: color.hex }}
                className="w-8 h-8 rounded-full border-2 border-transparent"
                title={color.label}
              ></button>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <p className="font-semibold">Size:</p>
          <div className="flex space-x-2 mt-2">
            {sizes.map((size, index) => (
              <button
                key={index}
                className="px-4 py-2 border rounded-lg bg-gray-100"
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <p className="font-semibold">Rating:</p>
          <span className="text-gray-600">{data.rating.rate} out of 5</span>
        </div>

        {/* AddToCartButton is now a client-side component */}
        <AddToCartButton
          image={data.image}
          productId={data.id}
          title={data.title}
          price={data.price}
        />

        <div className="flex items-center justify-between mt-4 text-gray-500">
          <Link href={"/cart"}>Cart</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
