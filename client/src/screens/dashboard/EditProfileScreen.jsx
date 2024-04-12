import React, { useState } from 'react'
import ProfileInfo from '../../components/dashboard/ProfileInfo';
import Button from '../../components/utils/Button';
import { Link } from 'react-router-dom';
import Title from '../../components/utils/Title';

function EditProfileScreen() {
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
    <div className="w-full mt-16">
      <Title>Edit Your Profile</Title>
      <p className='ml-4 text-lg text-zinc-800 my-4'>Add some changes to your profile.</p>
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
        <Button type="button">Update</Button>
        <Link to="/dashboard" className="mx-4">
          <Button lightBtn>Go Back</Button>
        </Link>
      </div>
    </div>
  )
}

export default EditProfileScreen