import Card from "./Card";
import { useEffect, useRef } from "react";

const dataCard = [
  {
    name: "Lelah Nichols",
    live: "Troy, MI",
    job: ["clothes", "stem"],
  },
  {
    name: "Jesus Weiss",
    live: "Fort Worth, TX",
    job: ["headset", "gadget", "speed", "winter"],
  },
  {
    name: "Annie Rice",
    live: "Austin, TX",
    job: ["road", "mountain", "trip", "earth", "nature"],
  },
  {
    name: "Robert Brower",
    live: "Cincinnati, OH",
    job: ["Maintenance", "gears", "frames", "repair"],
  },
  {
    name: "Amy Campbell",
    live: "Warrior, AL",
    job: ["music", "disks"],
  },
  {
    name: "Anthony S. Morin",
    live: "Lyndhurst, NJ",
    job: ["vintage", "electric"],
  },
];

const UserList = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <>
      <div className="flex items-center justify-center bg-[#BFC8E6] p-20">
        <div className="rounded-2xl bg-white p-[6.25rem] font-poppin text-base font-medium">
          {/* User Search Filter  */}
          <div className="mb-[70px]">
            <h1 className="mb-6 font-merri text-3xl font-black text-[#151B32]">
              Users
            </h1>
            <div className="flex w-full justify-between">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search users"
                  ref={inputRef}
                  className="rounded border border-[#BFC8E6] py-4 pl-12 pr-4"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="absolute left-4 top-4 size-6 text-gray-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </div>
              <ul className="flex">
                <li className="p-4">
                  <a href="">Reputation</a>
                </li>
                <li className="cursor-pointer rounded-lg bg-[#849FFF] p-4 text-white">
                  <a href="">New users</a>
                </li>
                <li className="p-4">
                  <a href="">Voters</a>
                </li>
                <li className="p-4">
                  <a href="">Editors</a>
                </li>
                <li className="p-4">
                  <a href="">Moderators</a>
                </li>
              </ul>
            </div>
          </div>
          {/* Card  */}
          <div className="grid grid-cols-3 gap-4">
            {dataCard.map((item, index) => (
              <Card
                name={item.name}
                live={item.live}
                job={item.job}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserList;
