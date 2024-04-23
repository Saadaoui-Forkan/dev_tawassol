import React from "react";

function AboutProfile({ profile }) {
  return (
    <>
      <div className="py-4 border border-b-slate-500">
        <h2 className="font-bold">Bio:</h2>
        <p>
          {profile?.bio
            ? profile?.bio
            : `${profile?.user?.name} did not add a personal bio to his profile`}
        </p>
      </div>
      <div className="py-4">
        <h2 className="font-bold">Skill Set:</h2>
        <ul className="text-slate-800 flex">
          {profile?.skills?.map((skill, index) => (
            <li key={index} className="mx-2 text-sm">
              <i className="fas fa-check" /> {skill}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default AboutProfile;
