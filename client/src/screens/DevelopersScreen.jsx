import React, { useEffect, useState } from 'react'
import Button from '../components/utils/Button'
import Title from '../components/utils/Title'
import { getProfiles } from '../redux/apiCalls/profileApiCall'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function DevelopersScreen() {
    const dispatch = useDispatch()

    const {profile} = useSelector(state => state.profile)


    useEffect(()=>{
        dispatch(getProfiles())
    }, [dispatch])

    const [data, setData] = useState([])
    useEffect(()=>{
      setData([profile])
    }, [profile])
    console.log(data)
  return (
    <div className='mt-16'>
      <Title>Developers</Title>
      <p className="ml-4 text-lg text-zinc-800 my-4">
        Browse and connect with developers.
      </p>
      <div className="developers">
        {
          data[0]?.map((el, index) => (
            <div className="bg-slate-100 my-2 mx-4 border border-slate-300 rounded-sm flex
            flex-col sm:flex-row justify-between items-center lex-wrap" key={index}>
              <div className="flex flex-col sm:flex-row items-center">
                <div className="w-28 sm:w-36 h-28 sm:h-36 m-2 sm:m-4">
                  <img className='h-full w-full rounded-full' src={el.user?.avatar} alt={el.user?.avatar}/>
                </div>
                <div className='ml-4'>
                  <h2 className="font-bold text-lg">{el.user?.name}</h2>
                  <p className="text-md my-2">{el?.status}</p>
                  <p className="text-md my-2">{el?.location}</p>
                  <Link to={'#'}>
                    <Button>View Profile</Button>
                  </Link> 
                </div>
              </div>
              <ul className="text-fuchsia-800 mr-4 my-4 sm:my-auto">
              {el?.skills.slice(0, 4)?.map((skill, index) => (
                <li key={index} className='text-primary'>
                  <i className='fas fa-check'/> {skill}
                </li>
              ))}
              </ul>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default DevelopersScreen