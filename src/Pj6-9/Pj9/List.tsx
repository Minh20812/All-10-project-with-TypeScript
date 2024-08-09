import { useEffect, useRef } from "react";

const List = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <>
      <div className="flex items-center justify-center bg-[#EBEBFF] p-4">
        <div className="flex w-fit flex-col rounded-[36px] bg-white px-[123px] py-[7.5rem] shadow">
          <div className="flex justify-between">
            <div className="relative inline-flex items-center justify-start gap-2 rounded-lg border border-[#c5c5f7] py-4 pl-[51px] pr-4">
              <input
                className="p-2 font-poppin text-base font-normal text-[#0e0c46] opacity-60"
                ref={inputRef}
                placeholder="Search"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="absolute left-4 top-[22px] size-7 text-[#0E0D46]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>
            <div className="flex items-center justify-center gap-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-9"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                />
              </svg>

              <button className="rounded-full bg-[#8598FC] p-[17px] text-center font-poppin text-4xl font-medium text-white">
                IG
              </button>
            </div>
          </div>

          <h1 className="mb-7 mt-10 font-merri text-[32px] font-bold text-[#0e0c46]">
            Accounts
          </h1>

          <div className="flex flex-col gap-2">
            <div className="flex w-full items-center justify-center rounded-3xl bg-[#FAF2FE] p-5">
              <div className="mr-4 w-fit rounded-full bg-white p-4">
                <img className="" src="https://via.placeholder.com/41x38" />
              </div>

              <div className="mr-[10.5rem]">
                <div className="font-['Merriweather'] text-2xl font-bold text-[#0e0c46]">
                  Dropbox
                </div>
                <div className="font-['Poppins'] text-base font-medium text-[#0e0c46] opacity-70">
                  dropbox.com
                </div>
              </div>

              <div className="mr-[19.5rem] font-['Poppins'] text-base font-medium text-[#0e0c46]">
                24 accounts
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-9"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
              </div>
            </div>
            <div className="flex w-full items-center justify-center rounded-3xl p-5">
              <div className="mr-4 w-fit rounded-full bg-white p-4">
                <img className="" src="https://via.placeholder.com/41x38" />
              </div>

              <div className="mr-[10.5rem]">
                <div className="font-['Merriweather'] text-2xl font-bold text-[#0e0c46]">
                  Pinterest
                </div>
                <div className="font-['Poppins'] text-base font-medium text-[#0e0c46] opacity-70">
                  pinterest.com
                </div>
              </div>

              <div className="mr-[19.5rem] font-['Poppins'] text-base font-medium text-[#0e0c46]">
                3 accounts
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-9"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
              </div>
            </div>
            <div className="flex w-full items-center justify-center rounded-3xl p-5">
              <div className="mr-4 w-fit rounded-full bg-white p-4">
                <img className="" src="https://via.placeholder.com/41x38" />
              </div>

              <div className="mr-[10.5rem]">
                <div className="font-['Merriweather'] text-2xl font-bold text-[#0e0c46]">
                  Microsoft
                </div>
                <div className="font-['Poppins'] text-base font-medium text-[#0e0c46] opacity-70">
                  microsoft.com
                </div>
              </div>

              <div className="mr-[19.5rem] font-['Poppins'] text-base font-medium text-[#0e0c46]">
                19 accounts
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-9"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
