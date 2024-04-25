import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProfile } from "../redux/apiCalls/profileApiCall";
import { Oval } from "react-loader-spinner";
import AboutProfile from "../components/profile/AboutProfile";
import ExperienceProfile from "../components/profile/ExperienceProfile";
import EducationProfile from "../components/profile/EducationProfile";
import GithubRepos from "../components/profile/GithubRepos";
import Button from "../components/utils/Button";

function SingleDeveloperScreen() {
  const dispatch = useDispatch();
  const { user_id } = useParams();

  const [currentTab, setCurrentTab] = useState(1);

  const toggleTab = (index) => {
    setCurrentTab(index);
  };

  const { profile, loading } = useSelector((state) => state.profile);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getSingleProfile(user_id));
  }, [dispatch, user_id]);

  if (loading) {
    return (
      <div className="h-[90vh] w-full flex items-center justify-center">
        <Oval
          height={120}
          width={120}
          color="#86198f"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#d8b4fe"
          strokeWidth={3}
          strokeWidthSecondary={3}
        />
      </div>
    );
  }

  return (
    <div className="mt-10 md:mt-12">
      <div className="relative w-full bg-neutral-100 flex flex-col items-center justify-center mx-auto pb-16 rounded">
        <div className="w-44 h-44">
          <img
            className="h-full w-full rounded-full p-4"
            src={profile?.user?.avatar}
            alt={profile?.user?.avatar}
          />
        </div>
        <h2 className="font-bold text-neutral-700 text-xl mb-4">
          {profile?.user?.name}
        </h2>
        <div className="flex items-center">
          <div className="flex items-center">
            {profile?.location && (
              <i className="fa-solid fa-location-dot text-neutral-600"></i>
            )}
            <p className="text-neutral-700 text-md mx-2">{profile?.location}</p>
          </div>
          <div className="flex items-center ml-2">
            {profile?.status && (
              <i className="fa-solid fa-briefcase text-neutral-600"></i>
            )}
            <p className="text-neutral-700 text-md mx-2">{profile?.status}</p>
          </div>
        </div>
        <div className="flex mt-4">
          {profile?.website && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={profile?.website}
            >
              <i className="fas fa-globe text-xl mr-2 text-zinc-500 mr-2 hover:text-zinc-700" />
            </a>
          )}
          {profile?.social
            ? Object.entries(profile?.social)
                .filter(([_, value]) => value)
                .map(([key, value]) => (
                  <a
                    key={key}
                    href={value}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      className={`fab fa-${key} text-xl text-zinc-500 mr-2 hover:text-zinc-700`}
                    ></i>
                  </a>
                ))
            : null}
        </div>
        {user ? (
          <div className="absolute left-4 bottom-2 flex">
            <Link to="/dashboard" className="mx-2">
              <Button>Dashboard</Button>
            </Link>
            <Link to="/">
              <Button>Add a post</Button>
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="flex">
        <h2
          onClick={() => toggleTab(1)}
          className={
            currentTab === 1
              ? "bg-slate-200 p-2 text-zinc-600 text-sm"
              : "p-2 text-zinc-600 text-sm cursor-pointer"
          }
        >
          About Me
        </h2>
        <h2
          onClick={() => toggleTab(2)}
          className={
            currentTab === 2
              ? "bg-slate-200 p-2 text-zinc-600 text-sm"
              : "p-2 text-zinc-600 text-sm cursor-pointer"
          }
        >
          Education
        </h2>
        <h2
          onClick={() => toggleTab(3)}
          className={
            currentTab === 3
              ? "bg-slate-200 p-2 text-zinc-600 text-sm"
              : "p-2 text-zinc-600 text-sm cursor-pointer"
          }
        >
          Experience
        </h2>
        <h2
          onClick={() => {
            toggleTab(4);
          }}
          className={
            currentTab === 4
              ? "bg-slate-200 p-2 text-zinc-600 text-sm"
              : "p-2 text-zinc-600 text-sm cursor-pointer"
          }
        >
          Github Repos
        </h2>
      </div>
      <div className="bg-slate-200 px-4">
        {currentTab === 1 ? (
          <AboutProfile profile={profile} />
        ) : currentTab === 2 ? (
          <EducationProfile education={profile.education} />
        ) : currentTab === 3 ? (
          <ExperienceProfile experience={profile.experience} />
        ) : (
          <GithubRepos />
        )}
      </div>
    </div>
  );
}

export default SingleDeveloperScreen;
