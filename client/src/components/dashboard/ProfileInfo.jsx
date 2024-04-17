import React, { useState } from "react";
import ProfileInput from "../utils/ProfileInput";
import Button from "../utils/Button";

function ProfileInfo(props) {
  const {
    status,
    setStatus,
    company,
    setCompany,
    website,
    setWebsite,
    location,
    setLocation,
    skills,
    setSkills,
    githubUsername,
    setGithubUsername,
    bio,
    setBio,
    twitter,
    setTwitter,
    facebook,
    setFacebook,
    instagram,
    setInstagram,
    linkedin,
    setLinkedin,
    youtube,
    setYoutube,
  } = props;

  const [displayToggleInputs, setDisplayToggleInputs] = useState(false);

  const handleClick = (e) => {
    e.preventDefault()
    setDisplayToggleInputs(!displayToggleInputs);
  };
  return (
    <div>
      <ProfileInput
        label="Select Professional Status (Required)"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        id="status"
      />
      <ProfileInput
        label="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        id="company"
      />
      <ProfileInput
        label="Website"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        id="Website"
      />
      <ProfileInput
        label="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        id="location"
      />
      <ProfileInput
        label="Skills (Required)"
        value={skills}
        onChange={(e) => setSkills(e.target.value)}
        id="Skills"
      />
      <ProfileInput
        label="GithubUsername"
        value={githubUsername}
        onChange={(e) => setGithubUsername(e.target.value)}
        id="GithubUsername"
      />
      <ProfileInput
        label="Bio"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        id="Bio"
      />
      <div className="ml-2 md:ml-10 lg:ml-20 flex items-center">
        <Button lightBtn type={"button"} onClick={handleClick}>
          Add social network links
        </Button>
        <h3 className="text-zinc-700 font-bold mx-2">Optional</h3>
      </div>
      <div className="w-11/12 lg:w-2/3 mx-auto lg:ml-6 my-6">
        {displayToggleInputs && (
          <>
            <ProfileInput
              label={
                <i className="fa-brands fa-x-twitter text-black text-lg"></i>
              }
              value={twitter}
              onChange={(e) => setTwitter(e.target.value)}
              id="twitter"
            />

            <ProfileInput
              label={
                <i className="fa-brands fa-facebook-f text-blue-600 text-lg"></i>
              }
              value={facebook}
              onChange={(e) => setFacebook(e.target.value)}
              id="facebook"
            />

            <ProfileInput
              label={
                <i className="fa-brands fa-instagram text-pink-500 text-lg"></i>
              }
              value={instagram}
              onChange={(e) => setInstagram(e.target.value)}
              id="instagram"
            />

            <ProfileInput
              label={
                <i className="fa-brands fa-youtube text-red-600 text-lg"></i>
              }
              value={youtube}
              onChange={(e) => setYoutube(e.target.value)}
              id="Youtube"
            />

            <ProfileInput
              label={
                <i className="fa-brands fa-linkedin text-sky-600 text-lg"></i>
              }
              value={linkedin}
              onChange={(e) => setLinkedin(e.target.value)}
              id="Linkedin"
            />
          </>
        )}
      </div>
    </div>
  );
}

export default ProfileInfo;
