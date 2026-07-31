import { DescriptionApp } from "./DescriptionApp";
import { PaceForm } from "./PaceForm";

/**
 * Componente ContentApp que contiene la descripción de la aplicación
 * y el formulario para calcular los ritmos de carrera.
 *
 * @param {Function} onCalculate - Función que maneja el cálculo de zonas de entrenamiento.
 */

export const ContentApp = ({ onCalculate }) => {
  /**
   * Maneja el envío del formulario y extrae el nombre junto con las zonas calculadas.
   *
   * @param {Object} formData - Datos del formulario incluyendo el nombre y las zonas calculadas.
   */

  return (
    <main className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-14 sm:px-10 md:py-20 lg:grid-cols-[1fr_0.86fr] lg:items-center lg:gap-20 lg:px-12">
      <DescriptionApp />
      <PaceForm onCalculate={onCalculate} />
    </main>
  );
};
