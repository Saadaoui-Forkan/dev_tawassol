import React, { useEffect, useState } from "react";
import ProfileInput from "../../components/utils/ProfileInput";
import Title from "../../components/utils/Title";
import Button from "../../components/utils/Button";
import { Link, useNavigate } from "react-router-dom";
import Textarea from "../../components/utils/Textarea";
import { useDispatch, useSelector } from "react-redux";
import { addAnExperience } from "../../redux/apiCalls/profileApiCall";
import { alertActions } from "../../redux/slices/alertSlice";

function AddExperienceScreen() {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const { loading, isProfileCreated } = useSelector((state) => state.profile);
  const { alerts } = useSelector((state) => state.alert);

  const [show, setShow] = useState(false);

  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [description, setDescription] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const checkHandler = () => {
    setIsChecked(!isChecked);
  };

  const handleAddAnExperience = () => {
    dispatch(
      addAnExperience({ title, company, location, from, to, description })
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
    <div className="mt-16">
      <Title>Add an experience</Title>
      <p className="ml-4 text-lg text-zinc-800 my-4">
        Add any developer/programming positions that you can have had in the
        past.
      </p>
      <ProfileInput
        label="Job Title (Required)"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
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
        value={from}
        onChange={(e) => setFrom(e.target.value)}
        id="From Date"
        type="date"
      />
      <div className="m-4 font-bold">
        <input
          type="checkbox"
          id="checkbox"
          className="mr-2"
          checked={isChecked}
          onChange={checkHandler}
        />
        <label htmlFor="checkbox">Current Job</label>
      </div>
      <ProfileInput
        label="To Date"
        value={to}
        onChange={(e) => setTo(e.target.value)}
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
        <button type="button" onClick={handleAddAnExperience}>
          Send
        </button>
        <Link to="/dashboard" className="mx-4">
          <Button lightBtn>Go Back</Button>
        </Link>
      </div>
    </div>
  );
}

export default AddExperienceScreen;
