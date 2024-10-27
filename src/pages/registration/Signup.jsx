/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "../../context/myContext";
import toast from "react-hot-toast";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { firestore } from "../../config/Firebase"
import { Loader } from '../../components/loader/Loader'
export const Signup = () => {
    const context = useContext(MyContext)
    const navigate = useNavigate()
    const { loading, setLoading } = context;
    const [userSignup, setUserSignup] = useState({
        name: "",
        email: "",
        password: "",
        role: "user"
    })


    const userSignupFunction = async () => {
        if (userSignup.name === "" || userSignup.email === "" || userSignup.password === "") {
            toast.error("All Fields are required")
        }

        setLoading(true)
        try {
            const users = await createUserWithEmailAndPassword(getAuth, userSignup.email, userSignup.password)

            const user = {
                name: userSignup.name,
                email: users.email,
                uid: users.user.id,
                role: userSignup.role,
                time: Timestamp.now(),
                date: new Date().toLocaleString(
                    "en-US",
                    {
                        month: "short",
                        day: "2digit",
                        year: "numeric"
                    }
                )
            }

            // create user reffrence
            const userRefrence = collection(firestore, "users")
            addDoc(userRefrence, user)
            setUserSignup({
                name: "",
                email: "",
                password: ""
            })
            toast.success("Signup Successfully!")
            setLoading(false)
            navigate('/login')

        } catch (error) {
            console.log(error)
        }


    }


    return (

        <section className="bg-gray-200  min-h-screen ">

            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 border-dark">
                <span className="flex items-center mb-6 text-2xl font-semibold text-dark dark:text-white">
                    {/* <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" /> */}
                    FROZEN FOOD.
                </span>
                <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0  ">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold  text-dark md:text-2xl text-center">
                            SIGNUP
                        </h1>
                        <form className="space-y-4 md:space-y-6" >
                            <div>
                                <label className="block mb-2 text-sm font-medium text-dark dark:text-primary ">Full Name</label>
                                <input type="text" name="name" value={userSignup.name}
                                    onChange={(e) => {
                                        userSignup({
                                            ...userSignup,
                                            name: e.target.value
                                        })
                                    }}
                                    className="bg-gray-50 border border-gray-300 text-dark text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Full Name" required />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-dark dark:text-primary ">Your email</label>
                                <input type="email" name="email" value={userSignup.email} onChange={(e) => {
                                    userSignup({
                                        ...userSignup,
                                        email: e.target.value
                                    })
                                }} className="bg-gray-50 border border-gray-300 text-dark text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-dark dark:text-dark ">Password</label>
                                <input type="password" name="password" value={userSignup.password} onChange={(e) => {
                                    userSignup({
                                        userSignup,
                                        password: e.target.value
                                    })
                                }} id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-dark text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                            <button type="submit" onClick={userSignupFunction} className="w-full text-white bg-dark hover:bg-primary  font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:hover:bg-dark dark:focus:ring-dark">
                                SIGNUP
                            </button>

                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account? <Link to="/login" className="font-bold text-dark hover:underline hover:text-primary dark:text-primary">Login here</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>


    );
}
