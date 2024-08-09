const Notification = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-[#E9EBFF] p-40">
        <div className="relative">
          <div className="absolute right-0 top-[-84px] rounded-full bg-[#0C0E41] p-5 text-white">
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
                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
              />
            </svg>
          </div>
          <div className="flex w-fit flex-col gap-7 rounded-2xl bg-white p-10 font-poppin">
            <div className="flex flex-col gap-6">
              <h1 className="text-xl font-semibold">You have 1 new message</h1>
              <div className="flex items-center justify-center gap-6">
                <div className="w-fit rounded-lg bg-[#FFE9F2] p-[22px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6 text-[#C83974]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-semibold">Feb 22</h3>
                  <p className="text-lg font-normal">
                    If you like what we do, please tell your friends and share.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pl-[113px]">
              <button className="flex items-center justify-center gap-2 rounded-[34px] border border-[#158ABB] px-4 py-2 text-lg font-semibold text-[#158ABB]">
                <svg
                  viewBox="0 0 192 192"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="size-6 text-[#158ABB]"
                >
                  <path
                    stroke="#000000"
                    strokeLinejoin="round"
                    strokeWidth="12"
                    d="M126 38c-14.359 0-26 11.64-26 26a25.89 25.89 0 0 0 2.929 12C72 76 56 70 30 46c0 39.5 10 66 34 81-8 11.2-29.333 14.333-42 14.5 0 0 14 13.5 46 13.5 56 0 84-46.783 84-91l18-20h-27.386A25.892 25.892 0 0 0 126 38Z"
                  />
                </svg>
                <p>Twitter</p>
              </button>
              <button className="flex items-center justify-center gap-2 rounded-[34px] border border-[#158ABB] px-4 py-2 text-lg font-semibold text-[#205195]">
                <svg
                  fill="#000000"
                  viewBox="0 0 1920 1920"
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-6 text-[#205195]"
                >
                  <path
                    d="m1416.013 791.915-30.91 225.617h-371.252v789.66H788.234v-789.66H449.808V791.915h338.426V585.137c0-286.871 176.207-472.329 449.09-472.329 116.87 0 189.744 6.205 231.822 11.845l-3.272 213.66-173.5.338c-4.737-.451-117.771-9.25-199.332 65.655-52.568 48.169-79.191 117.433-79.191 205.65v181.96h402.162Zm-247.276-304.018c44.446-41.401 113.71-36.889 118.787-36.663l289.467-.113 6.204-417.504-43.544-10.717C1511.675 16.02 1426.053 0 1237.324 0 901.268 0 675.425 235.206 675.425 585.137v93.97H337v451.234h338.425V1920h451.234v-789.66h356.7l61.932-451.233H1126.66v-69.152c0-54.937 14.214-96 42.078-122.058Z"
                    fill-rule="evenodd"
                  />
                </svg>
                <p> Facebook</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notification;
