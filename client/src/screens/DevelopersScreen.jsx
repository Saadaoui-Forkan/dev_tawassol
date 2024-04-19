import React, { useEffect } from 'react'
import Button from '../components/utils/Button'
import { getProfiles } from '../redux/apiCalls/profileApiCall'
import { useDispatch, useSelector } from 'react-redux'

function DevelopersScreen() {
    const dispatch = useDispatch()

    const {profile} = useSelector(state => state.profile)
    console.log(profile)

    useEffect(()=>{
        dispatch(getProfiles())
    }, [dispatch])
  return (
    <div className='mt-16'>
        <Button dangerBtn>Developers</Button>
    </div>
  )
}

export default DevelopersScreen