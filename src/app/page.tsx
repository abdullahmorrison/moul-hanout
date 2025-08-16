"use client";
import Button from "@/components/Button";
import Testamonial from "@/components/Testamonial";
import testimonials from "@/lib/testamonials";
import menuHighlights from "@/lib/menu-highlights";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import routes from "@/lib/routes";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-primary text-white">
        <div className="flex items-center justify-around px-4 py-10 max-md:flex-wrap md:px-10">
          <div className="flex flex-col items-start gap-5">
            <h1 className="text-6xl font-bold xl:text-8xl">
              Halal Moroccan Cuisine
            </h1>
            <h2 className="text-6xl font-bold xl:text-8xl">مول الحانوت</h2>
            <Button path={routes.menu} btnText="View Menu" />
          </div>
          <div className="relative mt-10 aspect-[1/1] w-full max-w-md xl:max-w-2xl">
            <div className="absolute bottom-0 left-0 aspect-auto h-[60%] w-[60%] rounded-lg shadow-xl">
              <Image
                src="/moul-hanout-meal-2.jpg"
                alt="Moroccan Cuisine"
                fill
              />
            </div>
            <div className="absolute top-0 right-0 z-10 h-[65%] w-[65%] rounded-lg shadow-xl">
              <Image
                src="/moul-hanout-meal-1.jpg"
                alt="Moroccan Cuisine"
                fill
              />
            </div>
          </div>
        </div>
        <div className="flex w-full overflow-hidden py-10 uppercase">
          <ul className="flex w-[175vw] shrink-0 animate-infinite-scroll justify-around text-sm font-bold sm:text-sm md:w-screen md:text-xl xl:text-3xl">
            <li>Grocery</li>
            <li>Deli Meals</li>
            <li>Bakery</li>
            <li>Sandwiches</li>
            <li>Couscous</li>
            <li>Takeout</li>
          </ul>
          <ul className="flex w-[175vw] shrink-0 animate-infinite-scroll justify-around text-sm font-bold sm:text-sm md:w-screen md:text-xl xl:text-3xl">
            <li>Grocery</li>
            <li>Deli Meals</li>
            <li>Bakery</li>
            <li>Sandwiches</li>
            <li>Couscous</li>
            <li>Takeout</li>
          </ul>
        </div>
      </header>

      <main>
        <section className="mt-10 flex min-h-200 flex-col items-center justify-center space-y-6 p-4">
          <h2 className="mb-8 text-5xl font-semibold text-primary">About Us</h2>
          <div className="max-w-8xl mb-6 flex flex-wrap items-start justify-center gap-10 space-x-4">
            <div className="relative aspect-square max-md:w-full w-md overflow-hidden rounded-xl shadow-lg">
              <Image
                src="/moul-hanout-about.webp"
                alt="Moul Hanout About"
                className="object-cover"
                fill
              />
            </div>

            <div className="flex max-w-2xl flex-col space-y-10 text-lg">
              <p>
                Experience the magic of Morocco at Moul Hanout, where the
                vibrant spirit of the souks meets the warmth of a family-owned
                eatery. Nestled within our doors, you&apos;ll find more than
                just a restaurant — we&apos;re a bustling grocery hub, a cozy
                coffee bar, and a delightful pastry haven, all infused with the
                rich flavors and traditions of Morocco.
              </p>
              <p>
                Indulge in our signature sandwiches and savory tagines, crafted
                with care and bursting with authentic Moroccan spices. From the
                moment you step inside, you&apos;ll be transported to a world of
                culinary delights, where every dish tells a story and every meal
                is a celebration of Moroccan hospitality and heritage.
              </p>
              <p>
                Join us at Moul Hanout and embark on a culinary journey like no
                other.
              </p>
            </div>

            <video
              loop
              autoPlay
              muted
              playsInline
              controls
              className="max-h-150 rounded-lg shadow-xl"
            >
              <source src="/moul-hanout-instagram-promo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>

        <section className="flex min-h-200 flex-col items-center justify-center space-y-6 bg-primary p-10 text-white">
          <h2 className="mb-4 text-center text-5xl font-semibold">
            Menu Highlights
          </h2>
          <p className="mb-6 max-w-2xl text-lg">View our Morrocan meals</p>
          <div className="min-h-[300px] w-full p-6">
            <Carousel
              responsive={{
                desktop: {
                  breakpoint: { max: 3000, min: 1768 },
                  items: 5,
                  slidesToSlide: 3, // optional, default to 1.
                },
                laptop: {
                  breakpoint: { max: 1768, min: 1024 },
                  items: 3,
                  slidesToSlide: 2, // optional, default to 1.
                },
                tablet: {
                  breakpoint: { max: 1024, min: 464 },
                  items: 2,
                  slidesToSlide: 2, // optional, default to 1.
                },
                mobile: {
                  breakpoint: { max: 464, min: 0 },
                  items: 1,
                  slidesToSlide: 1, // optional, default to 1.
                },
              }}
              infinite={true}
              removeArrowOnDeviceType={["tablet", "mobile"]}
              autoPlay={true}
              autoPlaySpeed={5000}
            >
              {menuHighlights.map((item, index) => (
                <div key={index} className="relative flex justify-center">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    className="aspect-square rounded-lg object-cover shadow-xl"
                    width={400}
                    height={300}
                    draggable={false}
                  />
                </div>
              ))}
            </Carousel>
          </div>
          <Button path={routes.menu} btnText="Explore Full Menu" />
        </section>

        <section className="flex min-h-200 flex-wrap items-center justify-center gap-20 p-10">
          <div className="flex max-w-5xl flex-col space-y-6">
            <h2 className="text-center text-4xl font-semibold text-primary">
              Catering
            </h2>
            <p className="w-full max-w-2xl text-lg">
              Elevate your next event with the rich flavors of Morocco. At Moul
              Hanout, we offer catering services that bring the essence of our
              restaurant to your gatherings. Whether it&apos;s a wedding,
              corporate event, or family celebration, our catering menu features
              a variety of Moroccan dishes, from savory tagines to delectable
              hospitality of Moroccan cuisine. Let us take care of the food
              while you enjoy your special occasion.
            </p>
            <Link
              href={routes.catering}
              className="text-lg font-semibold text-primary hover:text-primary-dark"
            >
              Learn More &#8594;
            </Link>
          </div>
          <div className="flex max-w-5xl flex-col space-y-6">
            <h2 className="text-center text-4xl font-semibold text-primary">
              Grocery
            </h2>
            <p className="w-full max-w-2xl text-lg">
              Explore our grocery section, where you can find a wide range of
              authentic Moroccan ingredients. From exotic spices to specialty
              products, we have everything you need to recreate the flavors of
              Morocco in your own kitchen. Our knowledgeable staff is always
              available to help you find what you need and provide cooking tips.
            </p>
            <Link
              href={routes.grocery}
              className="text-lg font-semibold text-primary hover:text-primary-dark"
            >
              Learn More &#8594;
            </Link>
          </div>
        </section>

        <section className="my-10 flex min-h-200 flex-col items-center justify-center space-y-6 p-4">
          <h2 className="mb-10 text-4xl font-semibold text-primary">
            Testimonials
          </h2>
          <div className="flex flex-wrap justify-center gap-20">
            {testimonials.map((testimonial, index) => (
              <Testamonial
                key={index}
                name={testimonial.name}
                rating={testimonial.rating}
                testimonial={testimonial.testimonial}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
