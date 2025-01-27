import React, { useContext, useState } from 'react'
import loginIcons from '../assest/signin.gif'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import imageTobase64 from '../helpers/imageTobase64';
import SummaryApi from "../common"



const SignUp = () => {
  const [showPassword, setshowPassword] = useState(false)
  const [showconfermpassword, setshowconfermPassword] = useState(false)
  const [data, setdata] = useState({
    name: "",
    email: "",
    password: "",
    confermpassword: "",
    profilepic: ""
  })
  const navigate =useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target

    setdata((prev) => {
      return {
        ...prev,
        [name]: value

      }
    })
  }
  const handleUploadpic=async(e) =>{
    const file=e.target.files[0]

    //after making helper to convert image to data for  redelbe
    const imagePic =await imageTobase64(file)
    
    setdata((prev) => ({
      ...prev, 
      profilepic: imagePic,
  }));
  }



  const handleSubmit = async(e) => {
    e.preventDefault();


    if(data.password === data.confermpassword){
      const dataResponse =await fetch(SummaryApi.signUp.url,{
        method :SummaryApi.signUp.method,
        headers :{
          "content-type" : "application/json"
        },
        body : JSON.stringify(data)
  
      })
      const dataApi =await dataResponse.json()

      if(dataApi.success){
        toast.success(dataApi.message)
        navigate("/login");
      }
      if(data.error){
        toast.error(dataApi.message)
      }
      // toast(dataApi.message)


      // console.log("data", dataApi);

    }else{
      console.log("please check password");
    }

  }

  return (

    <section id='sign-up'>
      <div className='mx-auto container p-4'>

        <div className='bg-white p-5 w-full max-w-sm mx-auto'>
          <div className='w-20 h-20 mx-auto'>

            <form>
              <label>
                <div>
                  <img src={data.profilepic || loginIcons} alt='login icons' />
                </div>
                <div className='text-xs text-center '>
                  Upload photo
                </div>
                <input type="file" className='hidden' onChange={handleUploadpic} />
              </label>

            </form>
          </div>

          <form className='pt-6 flex flex-col gap-3' onSubmit={handleSubmit} >
            <div className='grid'>
              <label>Name : </label>
              <div className='bg-slate-100 p-2'>
                <input
                  type='text'
                  placeholder='Enter Your Name'
                  name='name'
                  value={data.name}
                  onChange={handleChange}
                  required
                  className='w-full h-full outline-none bg-transparent' />
              </div>
            </div>
            <div className='grid'>
              <label>Email : </label>
              <div className='bg-slate-100 p-2'>
                <input
                  type='email'
                  placeholder='enter email'
                  name='email'
                  value={data.email}
                  onChange={handleChange}
                  required
                  className='w-full h-full outline-none bg-transparent' />
              </div>
            </div>

            <div>
              <label>Password : </label>
              <div className='bg-slate-100 p-2 flex'>
                <input
                  type={showconfermpassword ? "text" : "password"}
                  placeholder='enter password'
                  onChange={handleChange}
                  name='password'
                  value={data.password}
                  required
                  className='w-full h-full outline-none bg-transparent' />
                <div className='cursor-pointer text-xl' onClick={() => setshowconfermPassword((prev) => !prev)} >
                  <span>
                    {
                      showconfermpassword ? (
                        <FaEyeSlash />
                      )
                        :
                        (
                          <FaEye />
                        )
                    }

                  </span>
                </div>
              </div>
              {/* <Link to={'/forgot-password'} className='block w-fit ml-auto hover:underline hover:text-red-600'>
                Forgot password ?
              </Link> */}
            </div>
            <div>
              <label> Conferm Password : </label>
              <div className='bg-slate-100 p-2 flex'>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder='Conferm password'
                  onChange={handleChange}
                  name='confermpassword'
                  value={data.confermpassword}
                  required
                  className='w-full h-full outline-none bg-transparent' />
                <div className='cursor-pointer text-xl' onClick={() => setshowPassword((prev) => !prev)} >
                  <span>
                    {
                      showPassword ? (
                        <FaEyeSlash />
                      )
                        :
                        (
                          <FaEye />
                        )
                    }

                  </span>
                </div>
              </div>
              <Link to={'/forgot-password'} className='block w-fit ml-auto hover:underline hover:text-red-600'>
                Forgot password ?
              </Link>
            </div>

            <button className='bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6'>Sign Up</button>

          </form>

          <p className='my-5'>Already have an Account ? <Link to={"/login"} className=' text-red-600 hover:text-red-700 hover:underline'>Login</Link></p>
        </div>


      </div>
    </section>
  )
}

export default SignUp