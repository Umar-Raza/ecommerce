import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MyContext } from '../../context/myContext'
import toast from 'react-hot-toast'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth, firestore } from '../../config/Firebase'
import { collection, onSnapshot, query, where } from 'firebase/firestore'

export const Login = () => {
    const context = useContext(MyContext)
    const { loading, setLoading } = context;
    const navigate = useNavigate()
    const [userLogin, setUserLogin] = useState({
        email: "",
        password: ""
    });

    const userLoginFunction = async () => {
        // validation 
        if (userLogin.email === "" || userLogin.password === "") {
            toast.error("All Fields are required")
        }
        setLoading(true);
        try {
            const users = await signInWithEmailAndPassword(auth, userLogin.email, userLogin.password);

            console.log("user logedin")
            setLoading(false)
            try {
                const q = query(
                    collection(firestore, "user"),
                    where('uid', '==', users?.user?.uid)
                );
                const data = onSnapshot(q, (QuerySnapshot) => {
                    let user;
                    QuerySnapshot.forEach((doc) => user = doc.data());
                    localStorage.setItem("user", JSON.stringify(user))
                    setUserLogin({
                        email: "",
                        password: ""
                    })
                    toast.success("Login Successfully");
                    if (user.role === "user") {
                        navigate('/userDashboard');
                    } else {
                        navigate('/adminDashboard');
                    }
                    setLoading(false);
                });
                return () => data;
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }
        catch (error) {
            console.log(error);
            setLoading(false);
            toast.error("Login Failed!");
        }
    }

    return (
        <section className="bg-gray-200  min-h-screen">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 border-dark">
                <span className="flex items-center mb-6 text-2xl font-semibold text-dark dark:text-white">
                    {/* <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" /> */}
                    FROZEN FOOD.
                </span>
                <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0  ">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold  text-dark md:text-2xl text-center">
                            LOGIN
                        </h1>
                        <form className="space-y-4 md:space-y-6" >
                            <div>
                                <label className="block mb-2 text-sm font-medium text-dark dark:text-primary ">Your email</label>
                                <input type="email" name='email' value={userLogin.email} onChange={(e) => {
                                    setUserLogin({
                                        ...userLogin,
                                        email: e.target.value
                                    })
                                }} className="bg-gray-50 border border-gray-300 text-dark text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-dark dark:text-dark ">Password</label>
                                <input type="password" name='password' placeholder="••••••••" value={userLogin.password} onChange={(e) => {
                                    setUserLogin({
                                        ...userLogin,
                                        password: e.target.value
                                    })
                                }} className="bg-gray-50 border border-gray-300 text-dark text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                            <button type="button" onClick={userLoginFunction} className="w-full text-white bg-dark hover:bg-primary  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-dark dark:focus:ring-dark"> {!loading ? "LOGIN" : <span className="grid w-full place-items-center overflow-x-scroll rounded-lg lg:overflow-visible">
                                <svg className="text-light animate-spin" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"
                                    width="24" height="24">
                                    <path
                                        d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
                                        stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path
                                        d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
                                        stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-900">
                                    </path>
                                </svg>
                            </span>}</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account? <Link to="/signup" className="font-bold text-dark hover:underline hover:text-primary dark:text-primary">Signup here</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
