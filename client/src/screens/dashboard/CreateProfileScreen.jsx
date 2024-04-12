import React, { useState, useEffect } from "react";
import ProfileInfo from "../../components/dashboard/ProfileInfo";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/utils/Button";
import { useDispatch, useSelector } from "react-redux";
import { createProfile } from "../../redux/apiCalls/profileApiCall";

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

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { loading, isProfileCreated } = useSelector((state) => state.profile);

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
  };

  useEffect(() => {
    if (isProfileCreated) {
      navigate("/dashboard");
    }
  }, [navigate, isProfileCreated]);

  return (
    <div className="w-full mt-16">
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
          {loading ? "loading..." : "Create"}
        </button>
        <Link to="/dashboard" className="mx-4">
          <Button lightBtn>Go Back</Button>
        </Link>
      </div>
    </div>
  );
}

export default CreateProfileScreen;
