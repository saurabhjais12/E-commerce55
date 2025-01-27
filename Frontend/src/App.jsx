
import { Outlet, Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import SummaryApi from './common';
import Context from './context';
import { useDispatch } from 'react-redux';
import { setUserDetails } from './Store/userslice';

function App() {
  const dispatch =useDispatch()

  const fetchUserDetails = async () => {
    const dataResponse = await fetch(SummaryApi.current_user.url, {
      method: SummaryApi.current_user.method,
      credentials: "include"
    })

    const dataApi = await dataResponse.json()

    if(dataApi.success){
      dispatch(setUserDetails(dataApi.data))
    }


    console.log("user-data", dataResponse)
  }

  useEffect(() => {
    //user details
    fetchUserDetails()


  }, [])


  return (
    <>

    <Context.Provider value={{
      fetchUserDetails  //user details fetch
    }}>

      <ToastContainer />
      <Header />
      <main className='pt-16'>
        <Outlet />
      </main>
      <Footer />

      </Context.Provider>
    </>
  )
}

export default App
