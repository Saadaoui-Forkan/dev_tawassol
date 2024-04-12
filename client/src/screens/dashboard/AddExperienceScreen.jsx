import React, { useState } from 'react'
import ProfileInput from '../../components/utils/ProfileInput'
import Title from '../../components/utils/Title'
import Button from '../../components/utils/Button'
import { Link } from 'react-router-dom'
import Textarea from '../../components/utils/Textarea'

function AddExperienceScreen() {
  const [jobTitle, setJobTitle] = useState('')
  const [company, setCompany] = useState('')
  const [location, setLocation] = useState('')
  const [fromDate, setFromDate] = useState('')
  const [toDate, setToDate] = useState('')
  const [description, setDescription] = useState('')
  const [isChecked, setIsChecked] = useState(false)
  const checkHandler = () => {
    setIsChecked(!isChecked)
  }
  return (
    <div className='mt-16'>
      <Title>Add an experience</Title>
      <p className='ml-4 text-lg text-zinc-800 my-4'>Add any developer/programming positions that you can have had in the past.</p>
      <ProfileInput
        label="Job Title (Required)"
        value={jobTitle}
        onChange={(e) => setJobTitle(e.target.value)}
        id="job"
      />
      <ProfileInput
        label="Company (Required)"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        id="company"
      />
      <ProfileInput
        label="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        id="Location"
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
        <label htmlFor="checkbox">Current Job</label>
      </div>
      <ProfileInput
        label="To Date"
        value={toDate}
        onChange={(e) => setToDate(e.target.value)}
        id="To Date"
        type="date"
      />
      <Textarea
        label="Job Description"
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

export default AddExperienceScreen