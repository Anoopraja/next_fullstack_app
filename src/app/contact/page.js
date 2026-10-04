
import Link from "next/link";

export default function Contact() {
  return (
    <main className="bg-white text-gray-900">

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="mx-auto max-w-3xl text-center">

          <p className="font-semibold text-blue-600">
            CONTACT US
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Let&apos;s start a
            <span className="text-blue-600"> conversation.</span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Have a question, suggestion, or just want to say hello?
            Send us a message and we&apos;ll get back to you.
          </p>

        </div>
      </section>

      {/* Contact Section */}
      <section className="border-y border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-20">

          <div className="grid gap-10 md:grid-cols-2">

            {/* Contact Information */}
            <div>

              <p className="font-semibold text-blue-600">
                GET IN TOUCH
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                We&apos;d love to hear from you
              </h2>

              <p className="mt-5 leading-8 text-gray-600">
                Whether you have feedback, a question about the
                platform, or an idea for improvement, feel free to
                reach out.
              </p>

              <div className="mt-8 space-y-5">

                {/* Email */}
                <div className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-xl">
                    ✉️
                  </div>

                  <div>
                    <h3 className="font-semibold">
                      Email
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      hello@example.com
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-xl">
                    📍
                  </div>

                  <div>
                    <h3 className="font-semibold">
                      Location
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      India
                    </p>
                  </div>
                </div>

                {/* Response */}
                <div className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-xl">
                    ⚡
                  </div>

                  <div>
                    <h3 className="font-semibold">
                      Response Time
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      Usually within 24 hours
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">

              <h2 className="text-2xl font-bold">
                Send us a message
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Fill out the form below and we&apos;ll get back to
                you soon.
              </p>

              <form className="mt-8 space-y-5">

                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Subject
                  </label>

                  <input
                    id="subject"
                    type="text"
                    placeholder="What is this about?"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    rows="5"
                    placeholder="Write your message..."
                    className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  ></textarea>
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="w-full rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
                >
                  Send Message
                </button>

              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-3xl bg-blue-600 px-8 py-14 text-center text-white md:px-16">

          <h2 className="text-3xl font-bold sm:text-4xl">
            Want to know more?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            Explore our platform and learn more about what we are
            building.
          </p>

          <Link
            href="/about"
            className="mt-8 inline-block rounded-xl bg-white px-7 py-3 font-semibold text-blue-600 transition hover:bg-gray-100"
          >
            Learn More
          </Link>

        </div>
      </section>

    </main>
  );
}

