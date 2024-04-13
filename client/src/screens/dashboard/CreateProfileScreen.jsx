import React, { useState, useEffect } from "react";
import ProfileInfo from "../../components/dashboard/ProfileInfo";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/utils/Button";
import { useDispatch, useSelector } from "react-redux";
import { createProfile } from "../../redux/apiCalls/profileApiCall";
import { alertActions } from "../../redux/slices/alertSlice";
import Message from "../../components/utils/Message";
import Title from "../../components/utils/Title";
import { RotatingLines } from 'react-loader-spinner'

function CreateProfileScreen() {
  const [status, setStatus] = useState("");
  const [company, setCompany] = useState("");
  const [website, setWebsite] = useState("");
  const [location, setLocation] = useState("");
  const [skills, setSkills] = useState("");
  const [githubUsername, setGithubUsername] = useState("");
  const [bio, setBio] = useState("");
  const [twitter, setTwitter] = useState("");
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [youtube, setYoutube] = useState("");
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { loading, isProfileCreated } = useSelector((state) => state.profile);
  const { alerts } = useSelector((state) => state.alert);

  const addNewProfile = (e) => {
    e.preventDefault();
    dispatch(
      createProfile({
        status,
        company,
        website,
        location,
        skills,
        githubUsername,
        bio,
        twitter,
        facebook,
        instagram,
        linkedin,
        youtube,
      })
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
    <div className="w-full mt-16">
      <Title>Create Your Profile</Title>

      {alerts.length > 0 &&
        show &&
        alerts.map((alert, index) => (
          <Message error key={index}>
            {alert.message}
          </Message>
        ))}

      <ProfileInfo
        status={status}
        setStatus={setStatus}
        company={company}
        setCompany={setCompany}
        website={website}
        setWebsite={setWebsite}
        location={location}
        setLocation={setLocation}
        skills={skills}
        setSkills={setSkills}
        githubUsername={githubUsername}
        setGithubUsername={setGithubUsername}
        bio={bio}
        setBio={setBio}
        twitter={twitter}
        setTwitter={setTwitter}
        facebook={facebook}
        setFacebook={setFacebook}
        instagram={instagram}
        setInstagram={setInstagram}
        linkedin={linkedin}
        setLinkedin={setLinkedin}
        youtube={youtube}
        setYoutube={setYoutube}
      />

      <div className="mx-6 mb-10">
        <button
          className="bg-fuchsia-600 text-fuchsia-50 hover:bg-fuchsia-800 p-2 rounded-sm font-bold duration-200 text-sm lg:text-md"
          onClick={addNewProfile}
        >
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
            "Create"
          )}
        </button>
        <Link to="/dashboard" className="mx-4">
          <Button lightBtn>Go Back</Button>
        </Link>
      </div>
    </div>
  );
}

export default CreateProfileScreen;
