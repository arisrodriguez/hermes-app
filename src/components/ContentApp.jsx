import { DescriptionApp } from './DescriptionApp'
import { PaceForm } from './PaceForm'

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
        <section className='my-16 mx-auto flex w-full max-w-[700px] flex-col gap-5 px-6 md:flex-row md:items-center md:px-0'>
            {/* Componente que muestra la descripción de la aplicación */}
            <DescriptionApp />

            {/* Componente que contiene el formulario para ingresar datos */}
            <PaceForm onCalculate={onCalculate} />
        </section>
    )
}
