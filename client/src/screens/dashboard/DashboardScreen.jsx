import React, { useEffect } from "react";
import Title from "../../components/utils/Title";
import { Link } from "react-router-dom";
import Button from "../../components/utils/Button";
import Loader from "../../components/utils/Loader";
import { useDispatch, useSelector } from "react-redux";
import { getMyProfile } from "../../redux/apiCalls/profileApiCall";
import Experience from "../../components/dashboard/Experience";
import Education from "../../components/dashboard/Education";

function DashboardScreen() {
  const dispatch = useDispatch();

  const { profile, loading } = useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(getMyProfile());
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="mt-16">
      {profile?.length === 0 ? (
        <>
          <Title>Dashboard</Title>
          <div className="mx-4 mb-4 lg:mx-8">
            <p className="text-lg text-zinc-800 my-4">
              You have not yet setup a profile, please add some info.
            </p>
            <Button>
              <Link to="/dashboard/create-profile">Create Profile</Link>
            </Button>
          </div>
        </>
      ) : (
        <>
          <Title>Dashboard</Title>
          <p className="text-lg text-zinc-800 font-bold my-4 mx-4 lg:mx-8">
            Welcome {profile?.user?.name}
          </p>
          <div className="flex">
            <div className="mx-2">
              <Button lightBtn>
                <Link to="/dashboard/edit-profile">
                  <i className="fa-solid fa-user-pen text-fuchsia-600 mr-1"></i>
                  Edit Profile
                </Link>
              </Button>
            </div>
            <div className="mx-2">
              <Button lightBtn>
                <Link to="/dashboard/add-experience">
                  <i className="fa-solid fa-briefcase text-fuchsia-600 mr-1"></i>
                  Add Experience
                </Link>
              </Button>
            </div>
            <div className="mx-2">
              <Button lightBtn>
                <Link to="/dashboard/add-education">
                  <i className="fa-solid fa-user-graduate text-fuchsia-600 mr-1"></i>
                  Add Education
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Add Experience */}
          <Experience/>
          
          {/* Add Education */}
          <Education/>
          

          {/* Delete Account Btn */}
          <div className="m-6">
            <Button dangerBtn>
              <i className="fa-solid fa-user-minus mr-2"></i>
              Delete My Account
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

export default DashboardScreen;
