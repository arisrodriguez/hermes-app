import React from "react";
import { AboutMe } from "./AboutMe";
import { FollowMe } from "./FollowMe";

/**
 * Componente ProfileOverview
 *
 * Este componente organiza y muestra una visión general del perfil del usuario,
 * incluyendo información personal y enlaces a redes sociales.
 *
 * Contiene dos subcomponentes:
 * - `AboutMe`: Muestra información sobre el usuario.
 * - `FollowMe`: Muestra enlaces a las redes sociales del usuario.
 *
 * Diseño responsive:
 * - En dispositivos móviles, los elementos se organizan en una columna.
 * - En pantallas más grandes (md: 768px en adelante), los elementos se distribuyen en fila con un espacio entre ellos.
 *
 * @returns {JSX.Element} Un contenedor `<section>` con la vista general del perfil.
 */

export const ProfileOverview = () => {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-6 py-16 sm:px-10 md:flex-row md:gap-6 md:px-12 md:py-20">
      {/* Sección de información sobre el usuario */}
      <AboutMe />
      {/* Sección de enlaces a redes sociales */}
      <FollowMe />
    </section>
  );
};
