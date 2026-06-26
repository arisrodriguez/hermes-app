/**
 * Componente DescriptionApp que proporciona una breve descripción de Hermes App.
 * Contiene un título y un párrafo explicativo sobre la funcionalidad de la aplicación.
 */
import { MdOutlineFileDownload } from "react-icons/md";

export const DescriptionApp = () => {
    return (
        <section className='flex-1'>
            {/* Contenedor del título */}
            <div className="flex justify-center">
                <h1 className='inline-block font-semibold text-2xl text-gray-700 border rounded-md text-center px-5 py-3 mb-10'>Hermes App</h1>
            </div>

            {/* Descripción de la aplicación */}
            <p className='text-gray-700 text-base'>Hermes is the ultimate app for optimizing your physical training. Designed for athletes of all levels, Hermes Running Calculator accurately calculates your personalized training zones based on your heart rate and pace. Enter your data, and the app will provide you with specific zones to maximize your performance, enhance your endurance, and achieve your goals more efficiently.</p>
            <br />
           <p  className='text-gray-700 text-base'>Download the testing guide, complete the tests, and help improve Hermes.</p>

            <a
                href="/Hermes_Guia_Testers.pdf"
                download
                className="mx-auto mt-6 flex w-fit items-center justify-center gap-2 rounded-md border border-blue-700 px-5 py-3 text-blue-700 transition-colors duration-500 hover:bg-blue-700 hover:text-white hover:tras"
                >
                <MdOutlineFileDownload className="text-2xl" />
                <span className="font-medium">Download Testing Guide</span>
            </a>
        </section>
    )
}
