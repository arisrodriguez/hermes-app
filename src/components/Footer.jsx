import {
  FaCcPaypal,
  FaGithub,
  FaReact,
  FaHtml5,
  FaCss3,
  FaJs,
} from "react-icons/fa";

/**
 * Componente Footer
 *
 * Este componente representa el pie de página de la aplicación Hermes Running Calculator App.
 * Contiene información sobre la aplicación, enlaces de soporte y tecnologías utilizadas en su desarrollo.
 *
 * Estructura:
 * - Sección con el nombre de la aplicación y su descripción.
 * - Sección para apoyar el proyecto con enlaces a PayPal y GitHub.
 * - Sección con el nombre del desarrollador y las tecnologías usadas.
 * - Derechos de autor al final.
 *
 * Tecnologías usadas:
 * - React
 * - HTML5
 * - CSS3
 * - JavaScript
 */

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-blue-700 py-12 text-white">
      <div
        className="pointer-events-none absolute -right-24 bottom-[-9rem] h-80 w-80 rounded-full border-[40px] border-white/10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-16 top-[-7rem] h-56 w-56 rounded-full border-[28px] border-yellow-400/20"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-10 md:px-12">
        <div className="grid gap-10 border-b border-white/15 pb-10 text-center md:grid-cols-[1fr_auto_1fr] md:items-start md:gap-12 md:text-left">
          {/* Sección de información de la aplicación */}
          <div className="font-semibold text-lg md:justify-self-start">
            <h1 className="text-2xl font-extrabold tracking-[0.16em]">
              HERMES
            </h1>
            <div className="mt-3">
              <h1 className="font-normal text-blue-100">
                Running Calculator App
              </h1>
            </div>
          </div>

          {/* Sección de soporte del proyecto */}
          <div className="text-center">
            <h1 className="font-semibold text-lg">Support this Project</h1>

            <ul className="mt-5 flex items-center justify-center gap-4">
              <li>
                <a
                  href="https://www.paypal.com/donate?hosted_button_id=Y2D6XZPVWMLHJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Paypal"
                  className="inline-flex text-white text-4xl transition-all duration-300 hover:text-yellow-400 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-yellow-400"
                >
                  <FaCcPaypal />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/arisrodriguez"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub"
                  className="inline-flex text-white text-4xl transition-all duration-300 hover:text-yellow-400 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-yellow-400"
                >
                  <FaGithub />
                </a>
              </li>
            </ul>
          </div>

          {/* Sección de créditos y tecnologías usadas */}
          <div className="md:justify-self-end md:text-right">
            <h1 className="font-semibold text-lg">
              Coded by{" "}
              <a
                href="https://a-r-dev.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-block text-white transition-all duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-yellow-400 hover:after:w-full after:transition-all after:duration-300"
              >
                Aris Rodríguez
              </a>
            </h1>

            <ul className="mt-5 flex items-center justify-center gap-4 md:justify-end">
              <li>
                <span
                  title="React"
                  className="inline-flex text-white text-4xl transition-all duration-300 hover:text-yellow-400 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-yellow-400"
                >
                  <FaReact aria-hidden="true" />
                </span>
              </li>
              <li>
                <span
                  title="HTML5"
                  className="inline-flex text-white text-4xl transition-all duration-300 hover:text-yellow-400 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-yellow-400"
                >
                  <FaHtml5 aria-hidden="true" />
                </span>
              </li>
              <li>
                <span
                  title="CSS3"
                  className="inline-flex text-white text-4xl transition-all duration-300 hover:text-yellow-400 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-yellow-400"
                >
                  <FaCss3 aria-hidden="true" />
                </span>
              </li>
              <li>
                <span
                  title="JavaScript"
                  className="inline-flex text-white text-4xl transition-all duration-300 hover:text-yellow-400 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-yellow-400"
                >
                  <FaJs aria-hidden="true" />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Derechos de autor */}
      <div className="relative z-10 mx-auto mt-6 max-w-6xl px-6 pb-4 text-center text-sm font-medium text-blue-100 sm:px-10 md:px-12">
        <h1>© runwithizzat. All rights reserved.</h1>
      </div>
    </footer>
  );
};
