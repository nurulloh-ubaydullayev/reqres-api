import "./users.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

/* This example requires Tailwind CSS v2.0+ */
import { PaperClipIcon } from "@heroicons/react/solid";

// Components
import EditForm from "../Edit-form/edit-form";

export default function Example() {
  const { id } = useParams();
  const [userData, setUserData] = useState({});
  const getUserInfo = async () => {
    const res = await fetch("https://reqres.in/api/users/" + id);
    const data = await res.json();
    setUserData(data.data);
    return "Free";
  };
  useEffect(() => {
    getUserInfo();
  }, []);
  return (
    <section className="user-info">
      <div className="main-container">
        <div className="mb-8 bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="flex items-center justify-between px-4 py-5 sm:px-6">
            <div className="user__top-title">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                User Information
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Personal details and application.
              </p>
            </div>

            {userData.avatar && (
              <img
                src={userData.avatar}
                alt="User avatar"
                width={40}
                height={40}
                style={{ borderRadius: "50%" }}
              />
            )}
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Full name</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {userData
                    ? userData.first_name + " " + userData.last_name
                    : "..."}
                </dd>
              </div>

              <div className="bg-white-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Email address
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {userData ? userData.email : "..."}
                </dd>
              </div>

              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">About</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
                  incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
                  consequat sint. Sit id mollit nulla mollit nostrud in ea
                  officia proident. Irure nostrud pariatur mollit ad adipisicing
                  reprehenderit deserunt qui eu.
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div>
          <EditForm id={id} />
        </div>
      </div>
    </section>
  );
}