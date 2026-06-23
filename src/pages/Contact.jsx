import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-dark sm:text-4xl mb-2">
          Contact Us
        </h1>
        <p className="mt-2 text-muted mb-6">
          For support, email us at
          <a href="mailto:lord.dev0x@gmail.com" className="ml-1 hover:text-primary-dark">
            lord.dev0x@gmail.com
          </a>
        </p>
        {submitted ? (
          <div className="mt-10 rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
            <span className="text-4xl">🎉</span>
            <h2 className="mt-4 text-xl font-semibold text-dark">
              Message Sent!
            </h2>
            <p className="mt-2 text-sm text-muted">
              Thanks for reaching out. We'll get back to you as soon as possible.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 space-y-6">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-dark">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-dark shadow-sm transition focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-dark">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-dark shadow-sm transition focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-dark">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-dark shadow-sm transition focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                placeholder="What's on your mind?"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition hover:bg-primary-dark hover:shadow-xl sm:w-auto"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
