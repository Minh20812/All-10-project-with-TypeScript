interface dataCard {
  imgL1: string;
  imgN1: string;
  imgN2: string;
  imgN3: string;
  title: string;
  count: string;
}

const Card = ({ imgL1, imgN1, imgN2, imgN3, title, count }: dataCard) => {
  return (
    <>
      <div className="rounded-[2rem] bg-white p-4 font-poppin sm:p-6">
        <img
          src={imgL1}
          alt=""
          className="aspect-[16/9] h-auto w-full rounded-3xl border-2 border-[#EFF0F1] object-cover sm:h-[17rem] sm:max-w-[24rem]"
        />
        <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-4">
          <img
            src={imgN1}
            alt=""
            className="aspect-square h-auto w-full rounded-2xl border-2 border-[#EFF0F1] object-cover sm:h-[97px] sm:max-w-[119px] sm:rounded-3xl"
          />
          <img
            src={imgN2}
            alt=""
            className="aspect-square h-auto w-full rounded-2xl border-2 border-[#EFF0F1] object-cover sm:h-[97px] sm:max-w-[119px] sm:rounded-3xl"
          />
          <img
            src={imgN3}
            alt=""
            className="aspect-square h-auto w-full rounded-2xl border-2 border-[#EFF0F1] object-cover sm:h-[97px] sm:max-w-[119px] sm:rounded-3xl"
          />
        </div>
        <div className="mt-4 flex items-center justify-between sm:mt-6">
          <h2 className="text-2xl font-medium">{title}</h2>
          <div className="flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5 sm:h-6 sm:w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
            <p className="text-sm sm:text-base">{count}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
