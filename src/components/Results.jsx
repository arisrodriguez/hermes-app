/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { forwardRef } from 'react'

/**
 * Componente Results
 * 
 * Muestra las zonas de entrenamiento basadas en la frecuencia cardíaca (FC) y el ritmo (Pace).
 * Se presenta en forma de tabla con tres columnas: zona, FC en latidos por minuto (BPM) y ritmo en min/km.
 * 
 * @param {Object} props - Propiedades del componente.
 * @param {Array} props.zones - Array de objetos que contienen las zonas de entrenamiento.
 * @param {string} props.name - Nombre del usuario que se mostrará en el mensaje de bienvenida.
 * 
 * @returns {JSX.Element | null} Un componente de tabla con las zonas de entrenamiento o `null` si no hay datos válidos.
 */

export const Results = forwardRef(({ zones, name }, ref) => {

    // Validación: Verifica si "zones" es un array válido antes de renderizar la tabla.
    if (!zones || !Array.isArray(zones)) {
        console.error('Error: "zones" es undefined o no es un array', zones);
        return null;
    }

    return (
        <section ref={ref} id='results' className='bg-blue-700 text-center px-6'>
            <div className='md:w-[700px] mx-auto'>
                <div className="text-white pt-16">
                    <h1 className='font-bold text-4xl mb-5'>Training zones</h1>
                    <p className='mb-10 text-base'>Hey <strong>{name || "Athlete"}</strong>. Enjoy your training zones
                        and build your best version</p>
                </div>

                {/* Tabla con las zonas de entrenamiento */}
                <div className='pb-16 text-white'>
                    <table className="w-full table-fixed border-separate border-spacing-2">
                        {/*Encabezado de la tabla */}
                        <thead>
                            <tr>
                                <th className="bg-white text-blue-700 font-bold py-2 px-3 rounded w-1/3">Zones</th>
                                <th className="bg-white text-blue-700 font-bold py-2 px-3 rounded w-1/3">HR (bpm)</th>
                                <th className="bg-white text-blue-700 font-bold py-2 px-3 rounded w-1/3">Pace (min/km)</th>
                            </tr>
                        </thead>

                        {/* Cuerpo de la tabla con las zonas de entrenamiento */}
                        <tbody>
                            {zones.map(({ zone, hr, pace }) => (
                                <tr key={zone}>
                                    <td className="bg-white text-blue-700 py-2 px-4 rounded">{zone}</td>
                                    <td className="bg-white text-blue-700 py-2 px-4 rounded">{hr}</td>
                                    <td className="bg-white text-blue-700 py-2 px-4 rounded">{pace}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {/* Botón solo visible cuando hay datos */}
            {/*<div className="pb-10">
                <button
                    className="bg-white text-blue-700 font-bold py-2 px-4 rounded hover:bg-gray-300 transition cursor-pointer"
                >
                    Download as Image
                </button>
            </div>*/}
        </section>
    )
})
