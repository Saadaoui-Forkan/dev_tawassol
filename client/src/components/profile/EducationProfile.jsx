import React from "react";
import moment from "moment";

function EducationProfile({ education }) {
  return (
    <>
      {education?.length === 0 ? (
        <h1 className="mx-auto font-roboto py-20 font-bold">No education credentials </h1>
      ) : (
        education?.map((educ) => (
          <div key={educ._id} className="py-4 border border-b-slate-400">
            <h2 className="font-bold">{educ.degree}</h2>
            <p>
              {educ.current
                ? `${moment(educ.from).format("DD MMM YYYY")} - Present`
                : `${moment(educ.from).format("DD MMM YYYY")} - ${moment(
                    educ.to
                  ).format("DD MMM YYYY")}`}
            </p>
            <p>
              <strong className="text-slate-800 text-sm font-roboto">
                School:{" "}
              </strong>
              {educ.company}
            </p>
            <p>
              <strong className="text-slate-800 text-sm font-roboto">
                Field of study:{" "}
              </strong>
              {educ.location}
            </p>
            <p>
              <strong className="text-slate-800 text-sm font-roboto">
                Description:{" "}
              </strong>
              {educ.description}
            </p>
          </div>
        ))
      )}
    </>
  );
}

export default EducationProfile;
