import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../Components/navbar'
import ProfileDetails from '../Components/ProfileDetails'
import Profilepost from '../Components/Profilepost'

const Profile = () => {
  let {id} =  useParams()
  const [userDetails,setUserDetails]= useState({})
  const [userPosts,setuserPosts]= useState([])
  useEffect(() => {
    console.log(id,"hello google");
    const userId = id
    axios.get(`http://localhost:5000/getuserprofile/${userId}`).then((response)=>{
      console.log(response.data);
      setUserDetails({...userDetails,...response.data.response})
      setuserPosts([...userPosts,...response.data.convertedPost])
    }).catch((err)=>{
      console.log(err);
    })
  }, [])
  
  return (
    <div className='overflow-auto divScroll h-screen'><div>
        <Navbar/>
    </div>
<ProfileDetails userDetails={userDetails}/>
      <div className='md:px-[2rem]  ' >
<Profilepost userPost={userPosts} />
      </div>
    </div>
  )
}

export default Profile