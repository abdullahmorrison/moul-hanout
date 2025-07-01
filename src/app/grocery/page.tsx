import Image from "next/image";

export default function Grocery() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-20 p-6">
      <h2 className="mb-4 text-6xl font-bold text-primary">
        Grocery & Marketplace
      </h2>
      <div className="mb-10 flex w-full max-lg:flex-wrap justify-center gap-10">
        <Image
          src="/grocery.jpg"
          alt="Moul Hanout Grocery"
          className="rounded-lg shadow-lg"
          width={500}
          height={500}
        />
        <div className="flex max-w-2xl flex-col justify-center">
          <p className="mb-6 max-w-2xl text-xl">
            Discover the taste of Morocco at Moul Hanout&apos;s grocery section.
            We offer a selection of authentic 100% Moroccan products imported
            directly from Morocco. From spices to specialty ingredients and
            treats, our shelves are stocked with the finest flavours of Morocco.
            We regularly update our inventory with new selections and items to
            ensure you always have access to the freshest and most exciting
            products. Explore our grocery section today and bring the flavours
            of Morocco into your home.
          </p>
          <Image
            src="/product-of-morocco.png"
            alt="Product of Morocco"
            className="mb-4 h-auto w-40"
            width={160}
            height={160}
          />
        </div>
      </div>
    </div>
  );
}
