
import Link from "next/link";

export default function About() {
  return (
    <main className="bg-white text-gray-900">

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">

          <p className="font-semibold text-blue-600">
            ABOUT US
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Helping students build a
            <span className="text-blue-600"> better future.</span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            We are building a simple platform where students can
            learn, connect with others, discover opportunities and
            make better decisions about their future.
          </p>

        </div>
      </section>

      {/* About Content */}
      <section className="border-y border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-20">

          <div className="grid items-center gap-12 md:grid-cols-2">

            {/* Text */}
            <div>
              <p className="font-semibold text-blue-600">
                OUR MISSION
              </p>

              <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
                Making the student journey easier
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                Students often have to search across multiple
                platforms to find useful information, resources
                and people who can help them.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                Our goal is to bring these things together in one
                place and create an environment where students can
                learn from each other and grow together.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Get in Touch
              </Link>
            </div>

            {/* Stats Card */}
            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">

              <h3 className="text-2xl font-bold">
                Our Focus
              </h3>

              <div className="mt-8 grid grid-cols-2 gap-4">

                <div className="rounded-2xl bg-blue-50 p-6">
                  <p className="text-3xl font-bold text-blue-600">
                    10K+
                  </p>
                  <p className="mt-2 text-sm text-gray-600">
                    Students
                  </p>
                </div>

                <div className="rounded-2xl bg-blue-50 p-6">
                  <p className="text-3xl font-bold text-blue-600">
                    50+
                  </p>
                  <p className="mt-2 text-sm text-gray-600">
                    Resources
                  </p>
                </div>

                <div className="rounded-2xl bg-blue-50 p-6">
                  <p className="text-3xl font-bold text-blue-600">
                    100%
                  </p>
                  <p className="mt-2 text-sm text-gray-600">
                    Student Focused
                  </p>
                </div>

                <div className="rounded-2xl bg-blue-50 p-6">
                  <p className="text-3xl font-bold text-blue-600">
                    24/7
                  </p>
                  <p className="mt-2 text-sm text-gray-600">
                    Community
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-6xl px-6 py-20">

        <div className="mx-auto max-w-2xl text-center">
          <p className="font-semibold text-blue-600">
            WHAT WE BELIEVE
          </p>

          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            Built around students
          </h2>

          <p className="mt-4 text-gray-600">
            Everything we build is focused on making learning,
            collaboration and growth easier.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">

          {/* Value 1 */}
          <div className="rounded-2xl border border-gray-200 p-7 transition hover:-translate-y-1 hover:shadow-lg">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl">
              💡
            </div>

            <h3 className="mt-5 text-xl font-bold">
              Simplicity
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Information should be easy to find, understand and
              use without unnecessary complexity.
            </p>
          </div>

          {/* Value 2 */}
          <div className="rounded-2xl border border-gray-200 p-7 transition hover:-translate-y-1 hover:shadow-lg">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl">
              🤝
            </div>

            <h3 className="mt-5 text-xl font-bold">
              Community
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Students can learn faster when they share knowledge,
              experiences and ideas with each other.
            </p>
          </div>

          {/* Value 3 */}
          <div className="rounded-2xl border border-gray-200 p-7 transition hover:-translate-y-1 hover:shadow-lg">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl">
              🚀
            </div>

            <h3 className="mt-5 text-xl font-bold">
              Growth
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              The goal is not just to learn, but to turn knowledge
              into real skills and opportunities.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-3xl bg-blue-600 px-8 py-14 text-center text-white md:px-16">

          <h2 className="text-3xl font-bold sm:text-4xl">
            Have something to share?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            We would love to hear your ideas, suggestions or
            feedback.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-block rounded-xl bg-white px-7 py-3 font-semibold text-blue-600 transition hover:bg-gray-100"
          >
            Contact Us
          </Link>

        </div>
      </section>

    </main>
  );
}

