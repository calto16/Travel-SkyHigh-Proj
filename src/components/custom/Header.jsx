import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import { useNavigation } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import axios from 'axios';
function Header() {

  const user = JSON.parse(localStorage.getItem('user'));
  const [openDailog, setOpenDailog] = useState(false);

  useEffect(() => {
    console.log(user)
  }, [])

  const login = useGoogleLogin({
    onSuccess: (codeResp) => GetUserProfile(codeResp),
    onError: (error) => console.log(error)
  })

  const GetUserProfile = async(tokenInfo) => {
    console.log("HERE",tokenInfo)
     axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?acess_token=${tokenInfo?.access_token}`, {
      headers: {
        Authorization: `Bearer ${tokenInfo?.access_token}`,
        Accept: 'Application/json'
      }
    }).then((resp) => {
      console.log(resp);
      localStorage.setItem('user', JSON.stringify(resp.data));
      setOpenDailog(false);
      window.location.reload()
    })
  }

  return (
    <div className='p-3 shadow-sm flex justify-between items-center px-5'>
     <a href='/'>
     <img 
        src='/loguyh.png' 
        className='absolute top-[-0.4rem] h-[3rem] mt-[14px] ml-[-20px]  lg:h-[5rem] lg:mt-0 lg:ml-0' 
        alt='Logo' 
      />
      </a>
      <div>
        {user ?
          <div className='flex items-center gap-3'>
            <a href='/create-trip'>
            <Button variant="outline" 
            className="rounded-full w-[85px] text-xs lg:text-sm lg:w-auto">+ Create Trip</Button>
            </a>
            <a href='/my-trips'>
            <Button variant="outline" 
            className="rounded-full w-[85px] text-xs lg:text-sm lg:w-auto">My Trips</Button>
            </a>
            <Popover>
            <PopoverTrigger>
            <img src={user?.picture} className='h-[35px] w-[35px] rounded-full'/>
            </PopoverTrigger>
            <PopoverContent>
              <h2 className='cursor-pointer' onClick={()=>{
                googleLogout();
                localStorage.clear();
                window.location.reload();
              }}>Logout</h2>
            </PopoverContent>
          </Popover>
          </div>
          :
          <Button onClick={()=>setOpenDailog(true)}>Sign In</Button>
        }
      </div>
      <Dialog open={openDailog}>

<DialogContent>
  <DialogHeader>

    <DialogDescription>
      <img src="/loguyh.png" />
      <h2 className='font-bold text-lg mt-7'>Sign In With Google</h2>
      <p>Sign in to the App with Google authentication securely</p>

      <Button

        onClick={login}
        className="w-full mt-5 flex gap-4 items-center">

        <FcGoogle className='h-7 w-7' />
        Sign In With Google

      </Button>

    </DialogDescription>
  </DialogHeader>
</DialogContent>
</Dialog>
    </div>
  )
}

export default Header