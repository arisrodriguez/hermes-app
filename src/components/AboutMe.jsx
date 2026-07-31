/**
 * Componente AboutMe
 *
 * Este componente muestra una breve biografía de Izzat Rodríguez, un corredor de media distancia.
 * Incluye un título, el nombre del atleta y una descripción de sus logros y habilidades.
 *
 * Diseño responsivo:
 * - En pantallas medianas y grandes (md: 768px en adelante), el contenedor toma el ancho completo disponible (`md:w-full`)
 *   y se expande proporcionalmente (`md:flex-1`) cuando se encuentra dentro de un `flex` container.
 *
 * @returns {JSX.Element} Un contenedor `<section>` con la información sobre el corredor.
 */

export const AboutMe = () => {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm md:flex-1">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
        The runner behind Hermes
      </p>
      <h1 className="text-3xl font-extrabold tracking-tight text-slate-950">
        About the athlete
      </h1>
      <h2 className="pt-5 pb-3 text-base font-bold text-slate-700">
        Izzat Rodríguez{" "}
        <span className="font-normal text-slate-500">
          / Middle distance runner
        </span>
      </h2>
      <p className="text-base leading-7 text-slate-600">
        A mid-distance runner competing from{" "}
        <strong className="text-slate-950">5k to 21k</strong>. Hermes is built
        from that same mix of training discipline, race strategy and curiosity
        for better data.
      </p>
    </section>
  );
};
