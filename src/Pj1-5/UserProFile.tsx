const UserProFile = () => {
  return (
    <>
      <div className="flex h-screen w-full items-center justify-center bg-[#E6EFFA]">
        <div className="flex w-[35rem] gap-4 rounded-lg bg-white p-12 font-poppin">
          <img
            src="https://placewaifu.com/image/200"
            alt=""
            className="w-28 animate-fade-down self-start rounded-full border-8 border-[#e6effa]"
          />
          <div className="animate-fade-down space-y-7 text-[#1C2B62]">
            <div className="pt-6">
              <h1 className="font-merri text-2xl font-bold">David Grant</h1>
              <h2 className="text-base font-medium">3D Artist</h2>
            </div>
            <div className="space-y-4">
              <p className="flex gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
                4.7 Rating
              </p>
              <p className="flex gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>
                4.447 Reviews
              </p>
              <p className="flex gap-1">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
                478 Students
              </p>
            </div>
            <p className="text-lg">
              David Grant has been making video games for a living for more than
              14 years as a Designer, Producer, Creative Director, and Executive
              Producer, creating games for console, mobile, PC and Facebook.{" "}
            </p>
            <button className="rounded border-2 border-[#c4cadf] p-[10px]">
              Show More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProFile;
