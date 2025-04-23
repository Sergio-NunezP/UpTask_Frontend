import ProjectForm from '@/components/projects/ProjectForm'
import { useForm } from 'react-hook-form'
import { Link } from "react-router-dom"
import { ProjectFormData } from 'types'

export default function CreateProjectView() {

    const initialValues: ProjectFormData = {
        projectName: "",
        clientName: "",
        description: ""
    }

    // useForm es un hook que nos permite manejar el formulario de manera sencilla
    const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: initialValues })

    // handleForm es la funcion que se ejecuta al enviar el formulario
    const handleForm = (data: ProjectFormData) => {
        console.log(data)
    }

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

            <form
                className="mt-10 bg-white shadow-lg rounded-lg p-10"
                onSubmit={handleSubmit(handleForm)}
            >

                <ProjectForm
                    register={register}
                    errors={errors}
                />

                <input type="submit"
                    value="Crear Proyecto"
                    className='bg-fuchsia-600 hover:bg-fuchsia-700 w-full p-3 text-white uppercase font-bold rounded cursor-pointer transition-colors'
                />
            </form>
        </>
    )
}
