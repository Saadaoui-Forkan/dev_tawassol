import React from "react";
import Button from "../utils/Button";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { deleteExperience } from "../../redux/apiCalls/profileApiCall";
import { profileActions } from '../../redux/slices/profileSlice'

function Experience() {
  const dispatch = useDispatch()

  const { profile } = useSelector((state) => state.profile);

  const handleRemoveExperience = (id) => {
    dispatch(deleteExperience(id))
    dispatch(profileActions.removeExperience(id))
  }

  return (
    <div>
      <h2 className="mx-4 mt-6 p-4 font-bold border-b-2 border-zinc-600 text-zinc-600">
        Experience Credentials
      </h2>
      {/* Experience Table */}
      {profile?.experience?.length === 0 ? (
        <h4 className="text-md text-titillium mx-4 mt-6 p-4 border-b-2 border-zinc-600 text-zinc-600">
          Please press the button above to add an experience.
        </h4>
      ) : (
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
                        -
                      </th>
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
                    {profile?.experience.map((exp, index) => (
                      <tr key={index} className="bg-gray-100 border-b">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {index + 1}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {exp.company}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {exp.title}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {exp.current
                            ? `${moment(exp.from).format(
                                "DD MMM YYYY"
                              )} - present`
                            : `${moment(exp.from).format(
                                "DD MMM YYYY"
                              )} - ${moment(exp.to).format("DD MMM YYYY")}`}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <Button dangerBtn type={'button'} onClick={()=>handleRemoveExperience(exp._id)}>Delete</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Experience;
