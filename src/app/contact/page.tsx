"use client";
import Footer from "@/components/Footer";
import { useAlert } from "@/context/AlertContext";
import { useState } from "react";

export default function Contact() {
  const { showAlert } = useAlert();
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setIsButtonDisabled(true);
    const form = event.currentTarget;

    event.preventDefault();
    const formData = new FormData(form);
    // Convert FormData to URLSearchParams safely
    const params = new URLSearchParams(
      Array.from(formData.entries()) as [string, string][],
    );
    await fetch("/__forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params,
    })
      .then(() => {
        form.reset();
        showAlert("Message Sent", "success");
      })
      .catch(() => showAlert("Something Went Wrong", "error"))
      .finally(() => setIsButtonDisabled(false));
  };

  return (
    <div className="flex min-h-screen flex-col">
      <h2 className="mt-10 text-center text-5xl font-bold text-primary md:my-10">
        Contact Us
      </h2>

      <div className="my-6 flex flex-col items-center justify-center gap-6 px-4 md:flex-row md:items-start">
        <div className="mt-10 flex max-w-xl flex-col space-y-6">
          <h3 className="text-3xl font-semibold text-primary">
            Become a Franchisee
          </h3>
          <p className="max-w-2xl text-lg">
            If you&apos;re considering becoming a franchisee with Moul Hanout,
            we&apos;re here to guide you every step of the way. From initial
            consultation to ongoing support, our team is dedicated to helping
            you succeed. Fill out the form with your email and message to start
            this exciting journey together.
          </p>
        </div>

        <form
          name="contact"
          onSubmit={handleFormSubmit}
          className="w-full max-w-3xl rounded-lg bg-secondary p-6 shadow-lg"
        >
          <input type="hidden" name="form-name" value="contact" />
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
            className={`${isButtonDisabled ? "bg-gray-500 hover:cursor-not-allowed" : "bg-primary hover:cursor-pointer hover:bg-primary-dark"} w-full rounded-lg py-3 text-white transition-colors duration-200`}
            disabled={isButtonDisabled}
          >
            Send Message
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
