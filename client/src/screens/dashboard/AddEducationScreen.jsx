import React, { useEffect, useState } from 'react'
import Title from '../../components/utils/Title'
import ProfileInput from '../../components/utils/ProfileInput'
import Button from '../../components/utils/Button'
import { Link, useNavigate } from 'react-router-dom'
import Textarea from '../../components/utils/Textarea'
import Message from "../../components/utils/Message";
import { RotatingLines } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux'
import { addEducation } from '../../redux/apiCalls/profileApiCall'
import { alertActions } from '../../redux/slices/alertSlice'

function AddEducationScreen() {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const { loading, isProfileCreated } = useSelector((state) => state.profile);
  const { alerts } = useSelector((state) => state.alert);

  const [school, setSchool] = useState('')
  const [degree, setDegree] = useState('')
  const [fieldofstudy, setFieldOfStudy] = useState('')
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [description, setDescription] = useState('')
  const [current, setCurrent] = useState(false)

  const [show, setShow] = useState(false);

  const checkHandler = () => {
    setCurrent(!current)
  }

  const handleAddEducation = () => {
    dispatch(
      addEducation({ school, degree, fieldofstudy, from, to, current, description })
    );

    alerts.map((alert) => dispatch(alertActions.clearAlert(alert.id)));
  };

  useEffect(() => {
    if (alerts.length > 0) {
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 3000);
    }
  }, [alerts]);

  useEffect(() => {
    if (isProfileCreated) {
      navigate("/dashboard");
    }
  }, [navigate, isProfileCreated]);

  return (
    <div className='mt-16'>
      <Title>Add your education</Title>
      <p className='ml-4 text-lg text-zinc-800 my-4'>Add any school or bootcamp that you have attended.</p>
      
      {alerts.length > 0 &&
        show &&
        alerts.map((alert, index) => (
          <Message error key={index}>
            {alert.message}
          </Message>
        ))}

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
        value={fieldofstudy}
        onChange={(e) => setFieldOfStudy(e.target.value)}
        id="fieldOfStudy"
      />
      <ProfileInput
        label="From Date"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
        id="From Date"
        type="date"
      />
      <div className='m-4 font-bold'>
      <input
        type="checkbox"
        id="checkbox"
        className='mr-2'
        checked={current}
        onChange={checkHandler}
      />
        <label htmlFor="checkbox">Current School</label>
      </div>
      <ProfileInput
        label="To Date"
        value={to}
        onChange={(e) => setTo(e.target.value)}
        id="To Date"
        type="date"
      />
      <Textarea
        label="Program Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        id="Desc"
      />

      <div className="mx-6 mb-10">
      <Button type="button" onClick={handleAddEducation}>
        {loading ? (
            <RotatingLines
              visible={true}
              height="25"
              width="25"
              strokeColor="white"
              strokeWidth="5"
              animationDuration="0.75"
              ariaLabel="rotating-lines-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          ) : (
            "Send"
          )}
        </Button>
        <Link to="/dashboard" className="mx-4">
          <Button lightBtn>Go Back</Button>
        </Link>
      </div>
    </div>
  )
}

export default AddEducationScreen