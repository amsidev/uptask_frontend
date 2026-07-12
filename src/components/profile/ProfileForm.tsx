import { useForm } from "react-hook-form"
import ErrorMessage from "../ErrorMessage"
import type { User, UserProfileForm } from "@/types/index"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateProfile } from "@/api/ProfileApi"
import { toast } from "react-toastify"

type ProfileFormProps = {
    data: User
}

export default function ProfileForm({ data }: ProfileFormProps) {
    const { register, handleSubmit, formState: { errors } } = useForm<UserProfileForm>({ defaultValues: data })

    const queryClient = useQueryClient()
    const { mutate } = useMutation({
        mutationFn: updateProfile,
        onError: (error) => toast.error(error.message),
        onSuccess: (data) => {
            toast.success(data)
            queryClient.invalidateQueries({queryKey: ['user']})
        }
    })

    const handleEditProfile = (formData: UserProfileForm) => mutate(formData)

    return (
        <>
            <div className="mx-auto max-w-3xl">
                <h1 className="text-5xl font-black">My Profile</h1>
                <p className="text-2xl font-light text-gray-500 mt-5">
                    Update your personal information below.
                </p>

                <form
                    onSubmit={handleSubmit(handleEditProfile)}
                    className="mt-14 space-y-5 bg-white shadow-lg p-10 rounded-l"
                    noValidate
                >
                    <div className="mb-5 space-y-3">
                        <label
                            className="text-sm uppercase font-bold"
                            htmlFor="name"
                        >
                            Full Name
                        </label>

                        <input
                            id="name"
                            type="text"
                            placeholder="Enter your full name"
                            className="w-full p-3 border border-gray-200"
                            {...register("name", {
                                required: "Please enter your name.",
                            })}
                        />

                        {errors.name && (
                            <ErrorMessage>{errors.name.message}</ErrorMessage>
                        )}
                    </div>

                    <div className="mb-5 space-y-3">
                        <label
                            className="text-sm uppercase font-bold"
                            htmlFor="email"
                        >
                            Email Address
                        </label>

                        <input
                            id="email"
                            type="email"
                            placeholder="Enter your email address"
                            className="w-full p-3 border border-gray-200"
                            {...register("email", {
                                required: "Please enter your email address.",
                                pattern: {
                                    value: /\S+@\S+\.\S+/,
                                    message: "Please enter a valid email address.",
                                },
                            })}
                        />

                        {errors.email && (
                            <ErrorMessage>{errors.email.message}</ErrorMessage>
                        )}
                    </div>

                    <input
                        type="submit"
                        value="Save Changes"
                        className="bg-fuchsia-600 w-full p-3 text-white uppercase font-bold hover:bg-fuchsia-700 cursor-pointer transition-colors"
                    />
                </form>
            </div>
        </>
    )
}