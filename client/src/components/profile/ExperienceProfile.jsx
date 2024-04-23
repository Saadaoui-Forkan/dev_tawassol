import React from 'react'
import moment from "moment";

function ExperienceProfile({experience}) {
  return (
    <>
      {experience?.length === 0 ? (<h1 className='mx-auto font-roboto py-20 font-bold'>No experience credentials </h1>) : (experience?.map((exp) => (
          <div key={exp._id} className="py-4 border border-b-slate-400">
            <h2 className="font-bold">{exp.title}</h2>
            <p>
              {exp.current
                ? `${moment(exp.from).format("DD MMM YYYY")} - Present`
                : `${moment(exp.from).format("DD MMM YYYY")} - ${moment(
                    exp.to
                  ).format("DD MMM YYYY")}`}
            </p>
            <p>
              <strong className="text-slate-800 text-sm font-roboto">Company: </strong>
              {exp.company}
            </p>
            <p>
              <strong className="text-slate-800 text-sm font-roboto">Location: </strong>
              {exp.location}
            </p>
            <p>
              <strong className="text-slate-800 text-sm font-roboto">Description: </strong>
              {exp.description}
            </p>
          </div>
        )))}
    </>
  )
}

export default ExperienceProfile