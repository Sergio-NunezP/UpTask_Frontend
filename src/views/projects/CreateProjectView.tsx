import { Link } from "react-router-dom"

export default function CreateProjectView() {
    return (
        <>
            <h1 className="text-5xl font-black">Crear Proyecto</h1>
            <p className="text-2xl font-light text-gray-500 mt-5">Llena el siguiente formulario para crear un proyecto</p>

            <nav>
                < Link
                    className="bg-purple-400 hover:bg-purple-500 text-white font-bold cursors-pointer px-10 transition-colors  rounded-md mt-5 inline-block py-3 text-xl"
                    to='/'
                >Volver a Proyectos</Link>
            </nav>
        </>
    )
}
