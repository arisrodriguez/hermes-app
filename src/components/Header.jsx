import { FaArrowRight, FaRunning } from "react-icons/fa";

export const Header = () => {
  return (
    <header className="relative overflow-hidden bg-blue-700 text-white">
      <div
        className="absolute -right-16 -top-24 h-64 w-64 rounded-full border-[32px] border-white/10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-1/3 h-1 w-40 bg-yellow-400/80"
        aria-hidden="true"
      />

      <nav className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-7 sm:px-10 md:flex-row md:items-center md:justify-between md:gap-12 md:py-9 lg:px-12">
        <a
          href="/"
          className="group flex items-center gap-4"
          aria-label="Hermes home"
        >
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-yellow-400 text-blue-900 shadow-lg shadow-blue-950/20 transition-transform duration-300 group-hover:-rotate-6">
            <FaRunning className="text-2xl" aria-hidden="true" />
          </span>
          <span>
            <span className="block text-3xl font-extrabold tracking-[0.18em]">
              HERMES
            </span>
            <span className="mt-1 block text-xs font-semibold uppercase tracking-[0.28em] text-blue-100">
              Run with purpose
            </span>
          </span>
        </a>

        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between md:gap-10">
          <div className="border-l-2 border-yellow-400 pl-4">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-100">
              Train smarter
            </p>
            <p className="mt-1 max-w-xs text-lg font-semibold leading-tight">
              Find your pace. Own your next run.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <p className="hidden text-right text-sm leading-tight text-blue-100 sm:block">
              Running calculator by
              <a
                href="https://www.instagram.com/runwithizzat/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block font-bold text-white transition-colors duration-300 hover:text-yellow-300"
              >
                @runwithizzat
              </a>
            </p>
            <a
              href="#Form"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-blue-700 shadow-lg shadow-blue-950/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-yellow-400 hover:text-blue-900"
            >
              Calculate pace
              <FaArrowRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};
