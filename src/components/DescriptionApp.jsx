/**
 * Componente DescriptionApp que proporciona una breve descripción de Hermes App.
 * Contiene un título y un párrafo explicativo sobre la funcionalidad de la aplicación.
 */
import { FaArrowDown, FaBolt, FaChartLine } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";

export const DescriptionApp = () => {
  return (
    <section className="relative">
      <div className="mb-8 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
        <span className="h-2 w-2 rounded-full bg-yellow-400" />
        Personal training intelligence
      </div>

      <h1 className="max-w-xl text-5xl font-extrabold leading-[0.98] tracking-tight text-slate-950 sm:text-6xl">
        Know your zones.
        <br />
        <span className="text-blue-700">Run with purpose.</span>
      </h1>
      <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
        Hermes turns your heart rate and race pace into a simple training map,
        so every session has a clear intention.
      </p>

      <div className="mt-10 grid max-w-xl grid-cols-3 gap-3 border-y border-slate-200 py-5">
        <div>
          <FaBolt className="mb-3 text-yellow-500" aria-hidden="true" />
          <strong className="block text-2xl text-slate-950">5</strong>
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Intensity zones
          </span>
        </div>
        <div>
          <FaChartLine className="mb-3 text-blue-700" aria-hidden="true" />
          <strong className="block text-2xl text-slate-950">2</strong>
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Key metrics
          </span>
        </div>
        <div>
          <FaArrowDown className="mb-3 text-[#f97316]" aria-hidden="true" />
          <strong className="block text-2xl text-slate-950">1</strong>
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Clear next step
          </span>
        </div>
      </div>

      <a
        href="#Form"
        className="mt-8 inline-flex items-center gap-3 rounded-full bg-blue-700 px-6 py-3.5 font-bold text-white shadow-lg shadow-blue-700/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-800"
      >
        Start your calculation
        <span aria-hidden="true">-&gt;</span>
      </a>

      <a
        href="/Hermes_Guia_Testers.pdf"
        download
        className="ml-5 inline-flex items-center gap-2 text-sm font-bold text-slate-600 transition-colors hover:text-blue-700"
      >
        <MdOutlineFileDownload className="text-lg" aria-hidden="true" />
        Testing guide
      </a>
    </section>
  );
};
