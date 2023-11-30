import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registrationSchema } from "@schemas/schemas";
import { AuthContext } from "@contexts/auth-provider";
import { auth } from "@config/firebase";
import { Toaster, toast } from "react-hot-toast";
import { useRedirectActiveUser } from "@hooks/useRedirectActiveUser";
import FormGroup from "./FormGroup";
import Links from "./Links";
import Button from "./Button";


function Register() {
    const { signup, currentUser } = useContext(AuthContext)
    const resolver = yupResolver(registrationSchema)
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver })

    useRedirectActiveUser(currentUser, "/dashboard");

    const onSubmit = async (data) => {
        try {
            await signup(auth, data.email, data.password)
            toast.success("User registered successfully")
            console.log("user registered");
        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                toast.error('Email already in use')
            }
        }
    }


    return (
        <>
            <Toaster position="top-right" reverseOrder={false} />
            <h1 className="text-xl text-center font-bold leading-tight tracking-tight md:text-2xl">
                Create an account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <FormGroup
                    htmlFor={'email'}
                    labelText={'Your email'}
                    type={'email'}
                    name={'email'}
                    id={'email'}
                    placeholder={'name@gmail.com'}
                    inputClass={`${errors.email && 'border-red-500'}`}
                    register={register}
                    errors={errors.email}
                />
                <FormGroup
                    htmlFor={'password'}
                    labelText={'Password'}
                    name={'password'}
                    id={'password'}
                    placeholder={"••••••••"}
                    type={'password'}
                    inputClass={`${errors.password && 'border-red-500'}`}
                    register={register}
                    errors={errors.password}
                />
                <FormGroup
                    htmlFor={'confirmPassword'}
                    labelText={'Confirm password'}
                    type={'password'}
                    name={'confirmPassword'}
                    id={'confirmPassword'}
                    placeholder={"••••••••"}
                    inputClass={`${errors.confirmPassword && 'border-red-500'}`}
                    register={register}
                    errors={errors.confirmPassword}
                />
                <div className="flex items-start">
                    <div className="flex items-center h-5">
                        <input
                            id="terms"
                            aria-describedby="terms"
                            type="checkbox"
                            className="w-4 h-4 border border-gray-600 rounded bg-gray-700 focus:ring-3 focus:ring-indigo-400"
                        />
                    </div>
                    <div className="ml-3 text-sm">
                        <label htmlFor="terms" className="font-light text-gray-400">
                            I accept the {" "}
                            <Links text={'Terms and Conditions'} />
                        </label>
                    </div>
                </div>
                <Button text={'Sign up'} />
                <p className="text-sm font-light text-gray-400">
                    Already have an account? {" "}
                    <Links href={'/'} text={'Login here'} />
                </p>
            </form>
        </>
    )
}
export default Register