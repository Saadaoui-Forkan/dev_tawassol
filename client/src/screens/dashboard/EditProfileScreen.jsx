import React, { useEffect, useState } from 'react'
import ProfileInfo from '../../components/dashboard/ProfileInfo';
import Button from '../../components/utils/Button';
import { Link, useNavigate } from 'react-router-dom';
import Title from '../../components/utils/Title';
import { useDispatch, useSelector } from 'react-redux';
import { alertActions } from '../../redux/slices/alertSlice';
import { createProfile } from '../../redux/apiCalls/profileApiCall';
import Message from '../../components/utils/Message';
import { RotatingLines } from 'react-loader-spinner';

function EditProfileScreen() {
  const [status, setStatus] = useState("");
  const [company, setCompany] = useState("");
  const [website, setWebsite] = useState("");
  const [location, setLocation] = useState("");
  const [skills, setSkills] = useState("");
  const [githubusername, setGithubUsername] = useState("");
  const [bio, setBio] = useState("");
  const [twitter, setTwitter] = useState("");
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [youtube, setYoutube] = useState("");

  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { profile, loading, isProfileCreated } = useSelector((state) => state.profile);
  const { alerts } = useSelector((state) => state.alert);

  useEffect(() => {
    setStatus(profile.status || '')
    setCompany(profile.status || '')
    setWebsite(profile.website || '')
    setSkills(profile.skills || '')
    setLocation(profile.location || '')
    setGithubUsername(profile.githubusername || '')
    setBio(profile.bio || '')
    setLinkedin(profile.linkedin || '')
    setFacebook(profile.facebook || '')
    setYoutube(profile.youtube || '')
    setInstagram(profile.instagram || '')
    setTwitter(profile.twitter || '')
  }, [profile])

  const updateProfile = (e) => {
    e.preventDefault();
    dispatch(
      createProfile({
        status,
        company,
        website,
        location,
        skills,
        githubusername,
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
      <Title>Edit Your Profile</Title>

      {alerts.length > 0 &&
        show &&
        alerts.map((alert, index) => (
          <Message error key={index}>
            {alert.message}
          </Message>
        ))}

      <p className="ml-4 text-lg text-zinc-800 my-4">
        Add some changes to your profile.
      </p>
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
        githubUsername={githubusername}
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
          type="button"
          onClick={updateProfile}
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
            "Update"
          )}
        </button>
        <Link to="/dashboard" className="mx-4">
          <Button lightBtn>Go Back</Button>
        </Link>
      </div>
    </div>
  );
}

export default EditProfileScreen