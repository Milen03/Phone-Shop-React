import { Link, useNavigate } from "react-router"
import { useRegister } from "../../api/authApi.js"
import { useContext } from "react"
import { UserContext } from "../../context/userContext.js"


export default function Register() {
    const navigation = useNavigate()
    const { register } = useRegister()
    const { userLoginHandeler } = useContext(UserContext)

    const registerHandler = async (formData) =>{
        const {email,password} = Object.fromEntries(formData)

        const confirmPassword = formData.get('re-password')

        if (confirmPassword !== password) {
            alert('Password not mathing')
          }
      
          if (email.length < 6 || password.length < 6) {
            alert('Email or Password is too short, it must be at least 6 characters.')
            return
          }

          const authData = await register(email,password)

          userLoginHandeler(authData)

          navigation('/')
    }



    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">

                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">
                    Register Account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form action={registerHandler} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm/6 font-medium text-white">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                autoComplete="email"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm/6 font-medium text-white">
                                Password
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                autoComplete="current-password"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>


                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm/6 font-medium text-white">
                                Re-Password
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                id="re-password"
                                name="re-password"
                                type="password"
                                required
                                autoComplete="current-password"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>


                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-cyan-500 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-cyan-400 transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Sign in
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm/6 text-white">
                    You are have Accout?{' '}
                    <Link to="/phone/login" className="font-semibold text-cyan-600 hover:text-cyan-500">
                        Go to Login
                    </Link>
                </p>
            </div>
        </div>
    )
}