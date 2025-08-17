import { useNetlifyForm } from '@netlify/next-runtime/form'
import Image from "next/image";

export default function Catering() {
  const { formProps, handleSubmit } = useNetlifyForm({ name: 'catering' })

  return (
    <div className="flex items-center justify-center gap-10 p-4 max-lg:flex-wrap">
      <div className="flex flex-col">
        <h2 className="mt-10 text-5xl font-bold text-primary md:my-10">
          We Cater!
        </h2>
        <p className="my-6 max-w-2xl text-lg">
          Let us handle the food for your next event with our authentic Moroccan
          dishes made right here in Ottawa. From small gatherings to large
          parties, we offer delicious options to suit any occasion. Our menu is
          always fresh, with new items added regularly. Contact us today to
          discuss your catering needs and let us bring the flavors of Morocco to
          your event.
        </p>
        <form
          className="w-full max-w-3xl rounded-lg bg-secondary p-6 shadow-lg"
          name="catering"
          method="POST"
          data-netlify="true"
          {...formProps}
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="catering" />
          <div className="mb-4">
            <label htmlFor="name" className="mb-2 block text-lg font-semibold">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
              required
              className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="mb-2 block text-lg font-semibold">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="johndoe@gmail.com"
              required
              className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="number"
              className="mb-2 block text-lg font-semibold"
            >
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="tel"
              name="tel"
              placeholder="(613)-456-7890"
              required
              className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="mb-2 block text-lg font-semibold"
            >
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder="Your message here..."
              className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-primary focus:outline-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-primary py-3 text-white transition-colors duration-200 hover:cursor-pointer hover:bg-primary-dark"
          >
            Send Message
          </button>
        </form>
      </div>
      <div className="flex flex-col space-y-6">
        <h2 className="text-3xl font-semibold text-primary">Why Choose Us?</h2>
        <p className="max-w-2xl text-lg">
          At Moul Hanout, we pride ourselves on providing authentic Moroccan
          cuisine made with the freshest ingredients. Our catering services are
          designed to bring the rich flavors of Morocco to your events, ensuring
          a memorable experience for you and your guests. Whether it&apos;s a
          wedding, corporate event, or family gathering, we are here to make it
          special.
        </p>
        <Image
          src="/catering-picture.png"
          alt="Catering Service"
          width={600}
          height={400}
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
