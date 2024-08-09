import { useEffect, useRef } from "react";

const ProductReview = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <>
      <div className="flex items-center justify-center bg-[#FDD4D4] py-4">
        <div className="relative flex w-[41rem] flex-col gap-8 rounded-[2.5rem] bg-white p-16 font-poppin">
          <div className="absolute right-8 top-8 cursor-pointer rounded-full bg-[#F5F4FF] p-4">
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
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div>
            <h1 className="mb-4 font-merri text-2xl font-black text-[#121633]">
              Overall rating
            </h1>
            <div className="flex gap-1">
              <div className="w-fit cursor-pointer rounded-md border-2 border-[#EEF2FF] p-2">
                <svg
                  width="35"
                  height="33"
                  viewBox="0 0 35 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.5 26.3646L7.98484 31.3673L9.80246 20.7714L2.09413 13.2681L12.7316 11.7265L17.4892 2.08642L22.2468 11.7265L32.8843 13.2681L25.176 20.7714L26.9936 31.3673L17.5 26.3646Z"
                    fill="#FFEC8A"
                    stroke="#FFB444"
                    strokeWidth="2.3125"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="w-fit cursor-pointer rounded-md border-2 border-[#EEF2FF] p-2">
                <svg
                  width="35"
                  height="33"
                  viewBox="0 0 35 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.5 26.3646L7.98482 31.3673L9.80245 20.7714L2.09412 13.2681L12.7316 11.7265L17.4892 2.08642L22.2468 11.7265L32.8843 13.2681L25.1759 20.7714L26.9936 31.3673L17.5 26.3646Z"
                    stroke="#AEB3C5"
                    strokeWidth="2.3125"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            <p className="mt-2">Click to rate</p>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-sm font-semibold text-[#121633]">
              Review title
            </h3>
            <input
              type="text"
              placeholder="Example: Easy to use"
              ref={inputRef}
              className="w-full rounded-md border-2 border-[#EEF2FF] p-4"
            />
          </div>
          <div>
            <h3 className="mb-6 text-base font-medium text-[#121633]">
              Would you recommend this product to a friend?
            </h3>
            <div className="flex gap-6">
              <div className="flex gap-2">
                <input
                  type="radio"
                  id="recommendYes"
                  name="recommend"
                  value="Yes"
                />
                <label htmlFor="recommendYes" className="cursor-pointer">
                  Yes
                </label>
              </div>
              <div className="flex gap-2">
                <input
                  type="radio"
                  id="recommendNo"
                  name="recommend"
                  value="No"
                />
                <label htmlFor="recommendNo" className="cursor-pointer">
                  No
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-sm font-semibold text-[#121633]">
              Product review
            </h3>
            <textarea
              placeholder="Example: Since I bought this a month ago, it has been used a lot. What I like best/what is worst about this product is ..."
              className="w-full resize-none rounded-md border-2 border-[#EEF2FF] p-4"
            ></textarea>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col gap-1">
              <h3 className="text-sm font-semibold text-[#121633]">Nickname</h3>
              <input
                type="text"
                placeholder="Example: bob27"
                className="w-full rounded-md border-2 border-[#EEF2FF] p-4"
              />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="whitespace-nowrap text-sm font-semibold text-[#121633]">
                Email address (will not be published)
              </h3>
              <input
                type="text"
                placeholder="Example: your@email.com"
                className="w-full rounded-md border-2 border-[#EEF2FF] p-4"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <input
              type="checkbox"
              name="accept"
              value="I accept the terms and conditions"
              id="accept"
            />

            <label
              htmlFor="accept"
              className="cursor-pointer text-base font-medium text-[#121633]"
            >
              I accept the terms and conditions
            </label>
          </div>
          <p className="text-sm font-medium text-[#121633]">
            You will be able to receive emails in connection with this review
            (eg if others comment on your review). All emails contain the option
            to unsubscribe. We can use the text and star rating from your review
            in other marketing.
          </p>
          <button className="w-fit rounded bg-[#121633] p-4 text-white">
            Submit product review
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductReview;
