'use client'
import React from "react"

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    // Add your Web3Forms access key
    formData.append("access_key", "b587b1c3-e73c-4fe7-a8d3-4046288a1a68");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Your message is submitted, and we'll get back to you soon!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section className="relative w-full bg-[image:url(/background.png)] bg-repeat bg-center pt-20">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl text-center text-white">Contact Us</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-300 sm:text-xl">
          Have a question about SOAR 2025? Want to send feedback about any improvements? Need details about the Conference? Let us know.
        </p>
        <form onSubmit={onSubmit} className="space-y-8">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="shadow-sm bg-black border border-gray-300 text-white text-sm rounded-lg focus:ring-accent_blue focus:outline-0 focus:border-accent_blue w-full p-2.5"
              placeholder="example@gmail.com"
              required
            />
          </div>
          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-white">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              className="block p-3 w-full text-sm text-white bg-black rounded-lg border border-gray-300 shadow-sm focus:ring-accent_blue focus:border-accent_blue focus:outline-0"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">
              Your message
            </label>
            <textarea
              name="message"
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-white bg-black rounded-lg shadow-sm border border-gray-300 focus:ring-accent_blue focus:border-accent_blue focus:outline-0"
              placeholder="Leave a comment..."
              required
            ></textarea>
          </div>
          <input
            type="submit"
            className="block mx-auto text-white text-2xl py-1 px-4 rounded-lg grad transition-all bg-size-200 bg-pos-50 hover:bg-pos-150 ease-linear duration-300 focus:ring-accent_yellow focus:ring-opacity-65 focus:ring-4 focus:outline-none gradient-transition"
            value="Send"
          />
        </form>
        <span className="block text-center text-white mt-4">{result}</span>
      </div>
    </section>
  );
}
