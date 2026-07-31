import { FaInstagramSquare, FaYoutube, FaDiscord } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

/**
 * Componente FollowMe
 *
 * Este componente proporciona enlaces a las redes sociales de un atleta para que los usuarios puedan seguirlo.
 * Incluye una breve descripción con enlaces en línea y una lista de íconos clickeables que redirigen a sus perfiles.
 *
 * Diseño responsivo:
 * - En dispositivos móviles, el margen superior es más grande (`mt-16`).
 * - En pantallas medianas y grandes (`md: 768px en adelante`), se ajusta al ancho disponible (`md:w-full`)
 *   y comparte espacio proporcionalmente (`md:flex-1`) con otros componentes en un contenedor flex.
 *
 * Interactividad:
 * - Cada ícono tiene un efecto `hover` que cambia su color a azul (`hover:text-blue-700`).
 * - Se aplica una animación de escala al pasar el cursor (`hover:scale-110`).
 * - Se utilizan atributos `aria-label` para mejorar la accesibilidad.
 *
 * @returns {JSX.Element} Un contenedor `<section>` con enlaces a redes sociales y sus íconos representativos.
 */

export const FollowMe = () => {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm md:flex-1">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
        Keep the momentum
      </p>
      <h1 className="text-3xl font-extrabold tracking-tight text-slate-950">
        Follow the journey
      </h1>
      <p className="pt-5 text-base leading-7 text-slate-600">
        Workouts, achievements and behind-the-scenes moments from the road. Find
        Hermes and Izzat across the platforms below.
      </p>

      {/* Íconos de redes sociales */}
      <ul className="mt-7 flex items-center justify-center gap-3">
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
            className="inline-flex rounded-xl bg-slate-100 p-3 text-2xl text-slate-800 transition-all duration-300 hover:bg-yellow-400 hover:text-blue-900"
            href="https://www.instagram.com/runwithizzat/"
            aria-label="Instagram"
          >
            <FaInstagramSquare aria-hidden="true" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            title="Youtube"
            className="inline-flex rounded-xl bg-slate-100 p-3 text-2xl text-slate-800 transition-all duration-300 hover:bg-yellow-400 hover:text-blue-900"
            href="https://www.youtube.com/soyizzat"
            aria-label="YouTube"
          >
            <FaYoutube aria-hidden="true" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            title="TikTok"
            className="inline-flex rounded-xl bg-slate-100 p-3 text-2xl text-slate-800 transition-all duration-300 hover:bg-yellow-400 hover:text-blue-900"
            href="https://www.tiktok.com/@soyizzat"
            aria-label="TikTok"
          >
            <AiFillTikTok aria-hidden="true" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            title="Email"
            className="inline-flex rounded-xl bg-slate-100 p-3 text-2xl text-slate-800 transition-all duration-300 hover:bg-yellow-400 hover:text-blue-900"
            href="mailto:izzat1029@gmail.com"
            aria-label="Correo"
          >
            <MdEmail aria-hidden="true" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            title="Discord"
            className="inline-flex rounded-xl bg-slate-100 p-3 text-2xl text-slate-800 transition-all duration-300 hover:bg-yellow-400 hover:text-blue-900"
            href="https://discord.gg/Hbwquentmn"
            aria-label="Discord"
          >
            <FaDiscord aria-hidden="true" />
          </a>
        </li>
      </ul>
    </section>
  );
};
