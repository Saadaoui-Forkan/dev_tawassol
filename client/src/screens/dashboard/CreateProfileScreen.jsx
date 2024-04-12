import React, { useState } from "react";
import ProfileInfo from "../../components/dashboard/ProfileInfo";
import { Link } from "react-router-dom";
import Button from "../../components/utils/Button";

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
  return (
    <div className="w-full">
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
        <Button type="button">Send</Button>
        <Link to="/dashboard" className="mx-4">
          <Button lightBtn>Go Back</Button>
        </Link>
      </div>
    </div>
  );
}

export default CreateProfileScreen;
