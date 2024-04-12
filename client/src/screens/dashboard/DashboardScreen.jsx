import React from "react";
import Title from "../../components/utils/Title";
import { Link } from "react-router-dom";
import Button from "../../components/utils/Button";
import { useSelector } from "react-redux";

function DashboardScreen() {
  const { profile } = useSelector((state) => state.profile);
  return (
    <div className="mt-16">
      {profile.length === 0 ? (
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
            Welcome --User--
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
          <div>
            <h2 className="mx-4 mt-6 p-4 font-bold border-b-2 border-zinc-600 text-zinc-600">
              Experience Credentials
            </h2>
            {/* Experience Table */}
            <div className="flex flex-col">
              <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    <table className="min-w-full">
                      <thead className="bg-white border-b">
                        <tr>
                          <th
                            scope="col"
                            className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            Company
                          </th>
                          <th
                            scope="col"
                            className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            Title
                          </th>
                          <th
                            scope="col"
                            className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            Years
                          </th>
                          <th
                            scope="col"
                            className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          ></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-gray-100 border-b">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            1
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Mark
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Otto
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            <Button dangerBtn>Delete</Button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Add Education */}
          <div>
            <h2 className="mx-4 mt-6 p-4 font-bold border-b-2 border-zinc-600 text-zinc-600">
              Education Credentials
            </h2>
            {/* Education Table */}
            <div className="flex flex-col">
              <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    <table className="min-w-full">
                      <thead className="bg-white border-b">
                        <tr>
                          <th
                            scope="col"
                            className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            School
                          </th>
                          <th
                            scope="col"
                            className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            Degree
                          </th>
                          <th
                            scope="col"
                            className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            Years
                          </th>
                          <th
                            scope="col"
                            className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          ></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-gray-100 border-b">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            1
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Mark
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Otto
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            <Button dangerBtn>Delete</Button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

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
