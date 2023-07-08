import React from 'react'
import ProfileCard from '../components/Dashboard/Profile/ProfileCard'
import { useOutletContext } from 'react-router-dom'

export default function Profile() {
  const {userDetails} = useOutletContext();
/*   console.log(userDetails)
 */  return (
    
    <>
      <ProfileCard userDetails= {userDetails} />
    </>
  )
}
