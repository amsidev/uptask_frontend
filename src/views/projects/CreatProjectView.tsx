import { Link, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import ProjectForm from "@/components/projects/ProjectForm";
import type { ProjectFormData } from "@/types/index";
import { createProject } from "@/api/ProjectAPI";
import { useMutation } from "@tanstack/react-query";

const initialValues : ProjectFormData = {
    projectName: "",
    clientName: "",
    description: ""
}

export default function CreatProjectView() {
    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: initialValues })

    const {mutate} = useMutation({
        mutationFn: createProject,
        onError: (error) => {
            toast.error(error.message)
        },
        onSuccess: (data) => {
            toast.success(data)
            navigate('/')
        }
    })

    const handleForm = (formData : ProjectFormData) => {mutate(formData)}

    return (
        <>
            <div className="max-w-3xl mx-auto">
                <h1 className="text-5xl font-black">Create Project</h1>
                <p className="text-2xl font-light text-gray-500 mt-5">Complete the form below to create a project</p>

                <nav className="my-5">
                    <Link
                        className="bg-purple-400 hover:bg-purpl-500 px-10 py-3 text-white text-xl"
                        to='/'
                    >Back to Projects</Link>
                </nav>

                <form
                    className="mt-10 bg-white shadow-lg p-10 rounded-lg"
                    onSubmit={handleSubmit(handleForm)}
                    noValidate
                >

                    <ProjectForm
                        register={register}
                        errors={errors}
                    />

                    <input
                        type="submit"
                        value="Create project"
                        className="bg-fuchsia-600 hover:bg-fuchsia-700 w-full p-3 text-white uppercase font-bold cursor-pointer transition-colors"
                    />

                </form>
            </div>
        </>
    )
}
