import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../schemas";
import { AuthContext } from "../contexts/auth-provider";
import { auth } from "../config/firebase";
import FormGroup from "./FormGroup";
import Links from "./Links";
import Button from "./Button";


function Login() {
    const { login } = useContext(AuthContext)
    const resolver = yupResolver(loginSchema)
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver })
    const navigate = useNavigate()
    const user = auth.currentUser


    useEffect(() => {
        if (user) {
            return navigate('/dashboard')
        }
    }, [user])


    const onSubmit = async (data) => {
        try {
            await login(auth, data?.email, data?.password)
            console.log("user logged in")
        } catch (error) {
            console.log(error.message)
            console.log(error.code)
            toast.error('Invalid login credentials')
        }
    }


    return (
        <>
            <Toaster position="top-right" reverseOrder={false} />
            <h1 className="text-xl text-center font-bold leading-tight tracking-tight md:text-2xl">
                Login to your account
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
                <div className="flex items-center justify-between ">
                    <div className="flex items-center">
                        <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            className="h-4 w-4 bg-gray-700 text-purple-600 focus:ring-purple-500 border-gray-600 rounded ring-offset-gray-800"
                        />
                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-400">
                            Remember me
                        </label>
                    </div>
                    <div className="text-sm">
                        <Links text={'Forgot your password?'} />
                    </div>
                </div>
                <Button text={'Login'} />
                <p className="text-sm font-light text-gray-400">
                    Don't have an account? {" "}
                    <Links text={'Create one'} href={'/register'} />
                </p>
            </form>
        </>
    )
}

export default Login