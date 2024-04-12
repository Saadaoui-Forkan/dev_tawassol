import React, { useState } from 'react'
import Title from '../../components/utils/Title'
import ProfileInput from '../../components/utils/ProfileInput'
import Button from '../../components/utils/Button'
import { Link } from 'react-router-dom'

function AddEducationScreen() {
  const [school, setSchool] = useState('')
  const [degree, setDegree] = useState('')
  const [fieldOfStudy, setFieldOfStudy] = useState('')
  const [fromDate, setFromDate] = useState('')
  const [toDate, setToDate] = useState('')
  const [description, setDescription] = useState('')
  const [isChecked, setIsChecked] = useState(false)
  const checkHandler = () => {
    setIsChecked(!isChecked)
  }
  return (
    <div className='mt-16'>
      <Title>Add your education</Title>
      <p className='ml-4 text-lg text-zinc-800 my-4'>Add any school or bootcamp that you have attended.</p>
      <ProfileInput
        label="School or Bootcamp (Required)"
        value={school}
        onChange={(e) => setSchool(e.target.value)}
        id="school"
      />
      <ProfileInput
        label="Degree or certificate (Required)"
        value={degree}
        onChange={(e) => setDegree(e.target.value)}
        id="degree"
      />
      <ProfileInput
        label="Field of study"
        value={fieldOfStudy}
        onChange={(e) => setFieldOfStudy(e.target.value)}
        id="fieldOfStudy"
      />
      <ProfileInput
        label="From Date"
        value={fromDate}
        onChange={(e) => setFromDate(e.target.value)}
        id="From Date"
        type="date"
      />
      <div className='m-4 font-bold'>
      <input
        type="checkbox"
        id="checkbox"
        className='mr-2'
        checked={isChecked}
        onChange={checkHandler}
      />
        <label htmlFor="checkbox">Current School</label>
      </div>
      <ProfileInput
        label="To Date"
        value={toDate}
        onChange={(e) => setToDate(e.target.value)}
        id="To Date"
        type="date"
      />
      <ProfileInput
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        id="Desc"
      />

      <div className="mx-6 mb-10">
        <Button type="button">Send</Button>
        <Link to="/dashboard" className="mx-4">
          <Button lightBtn>Go Back</Button>
        </Link>
      </div>
    </div>
  )
}

export default AddEducationScreen