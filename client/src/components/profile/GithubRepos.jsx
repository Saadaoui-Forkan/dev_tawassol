import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserRepos } from "../../redux/apiCalls/profileApiCall";
import Message from "../utils/Message";

function GithubRepos() {
  const dispatch = useDispatch();

  const { repos, profile } = useSelector((state) => state.profile);
  const { alerts } = useSelector((state) => state.alert);

  useEffect(() => {
    dispatch(getUserRepos(profile?.githubusername));
  }, [dispatch, profile?.githubusername]);

  return (
    <div className="py-4">
      {repos?.length > 0 ? (
        repos.map((repo, index) => (
          <div
            className="border border-slate-700 flex justify-between py-2 mb-2"
            key={index}
          >
            <div className="px-2">
              <h2 className="text-fuchsia-700 font-bold text-sm">
                {repo.name}
              </h2>
              <p className="text-zinc-600 text-sm">{repo.description}</p>
            </div>
            <div className="px-2">
              <p className="bg-fuchsia-700 text-fuchsia-50 text-sm px-2 py-[2px] m-[1px] mb-2">
                Stars: {repo.stargazers_count}
              </p>
              <p className="bg-zinc-700 text-zinc-50 text-sm px-2 py-[1px] m-[1px] mb-2">
                Watchers: {repo.watchers_count}
              </p>
              <p className="bg-slate-100 text-slate-800 text-sm px-2 py-[1px] m-[1px]">
                Forks: {repo.forks_count}
              </p>
            </div>
          </div>
        ))
      ) : (
        <div className="py-8">
          <Message error>{alerts[0]?.message}</Message>
        </div>
      )}
    </div>
  );
}

export default GithubRepos;
