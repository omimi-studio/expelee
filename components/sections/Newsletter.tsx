export default function Newsletter() {
  return (
    <div className="bg-ex-dark-blue py-16 sm:py-24">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden text-center  bpx-6 py-24 sm:px-24 xl:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-base font-semibold leading-7 text-ex-blue">
              Subscribe Newsletters
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Looking for the best IT business solutions?
            </h2>
          </div>

          <form className="mx-auto mt-10 flex max-w-xl gap-x-4">
            <div className="relative w-full">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full block rounded-full border-0 bg-transparent px-4 py-3 text-white shadow-sm ring-2 ring-inset ring-white focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                placeholder="Enter your email address ..."
              />
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
                <button
                  type="submit"
                  className="flex-none rounded-full bg-ex-blue px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
