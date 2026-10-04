
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white text-gray-900">

      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid items-center gap-12 md:grid-cols-2">

          {/* Left */}
          <div>
            <div className="mb-5 inline-block rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
              Welcome to MyApp 🚀
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Build. Learn.
              <span className="block text-blue-600">
                Grow Together.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              A modern platform where students can learn new skills,
              explore opportunities, connect with others and build
              their future.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/about"
                className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Get Started
              </Link>

              <Link
                href="/contact"
                className="rounded-xl border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition hover:border-gray-400 hover:bg-gray-50"
              >
                Explore More
              </Link>
            </div>
          </div>

          {/* Right Card */}
          <div className="relative">
            <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8 shadow-xl">

              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">
                    Your Journey
                  </p>

                  <h2 className="mt-1 text-2xl font-bold">
                    Start Today
                  </h2>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-xl text-white">
                  ✨
                </div>
              </div>

              {/* Progress */}
              <div className="mb-6">
                <div className="mb-2 flex justify-between text-sm">
                  <span className="font-medium">
                    Learning Progress
                  </span>

                  <span className="text-blue-600">
                    75%
                  </span>
                </div>

                <div className="h-3 overflow-hidden rounded-full bg-gray-200">
                  <div className="h-full w-3/4 rounded-full bg-blue-600"></div>
                </div>
              </div>

              {/* Small Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-white p-5 shadow-sm">
                  <p className="text-2xl font-bold text-blue-600">
                    50+
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    Resources
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-5 shadow-sm">
                  <p className="text-2xl font-bold text-blue-600">
                    10K+
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    Students
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Features */}
      <section className="border-y border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-20">

          <div className="mx-auto max-w-2xl text-center">
            <p className="font-semibold text-blue-600">
              WHAT WE OFFER
            </p>

            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              Everything you need to move forward
            </h2>

            <p className="mt-4 text-gray-600">
              Learn, connect and discover new opportunities from
              one simple platform.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {/* Feature 1 */}
            <div className="rounded-2xl border border-gray-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl">
                📚
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Learn
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Discover useful resources and improve your
                technical and practical skills.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="rounded-2xl border border-gray-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl">
                👥
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Connect
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Connect with other students, share knowledge
                and discuss your ideas.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="rounded-2xl border border-gray-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl">
                🎯
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Grow
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Find opportunities and build a clear path toward
                your career goals.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-3xl bg-blue-600 px-8 py-14 text-center text-white md:px-16">

          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to start your journey?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            Take the first step today. Explore the platform,
            learn something new and connect with the community.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-block rounded-xl bg-white px-7 py-3 font-semibold text-blue-600 transition hover:bg-gray-100"
          >
            Get Started
          </Link>

        </div>
      </section>

    </main>
  );
}

