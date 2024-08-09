interface dataTitle {
  name: string;
  plus: string;
  prices: number;
  bgColor: string;
  img: string;
}

const Card = ({ name, plus, prices, bgColor, img }: dataTitle) => {
  return (
    <div className="relative h-[326px] w-[285px]">
      {/* shadow */}
      <div className={`absolute inset-0 rounded-[14px] ${bgColor}`} />

      {/* main card */}
      <div className="absolute inset-0 flex translate-x-6 translate-y-6 flex-col items-start justify-between rounded-[14px] border-2 border-[#F0F0F6] bg-white p-10 shadow">
        {/* title */}
        <div className="flex flex-col items-start justify-start gap-4 font-poppin text-[#161335]">
          <img className="w-fit" src={img} alt="Card icon" />
          <div className="flex flex-col items-start justify-start gap-1">
            <div className="text-lg font-semibold">{name}</div>
            <div className="whitespace-nowrap text-sm font-medium">{plus}</div>
          </div>
          <div className="inline-flex items-center justify-start gap-1">
            <div className="text-2xl font-bold">{prices},-</div>
            <div className="text-sm font-medium">/month</div>
          </div>
        </div>

        {/* button */}
        <button className="w-full rounded-[41px] border border-[#f0f0f6] bg-[#f4f5fa] px-6 py-4 font-poppin text-base font-normal text-[#161335] transition-colors hover:bg-[#e4e5ea]">
          Add subscription
        </button>
      </div>
    </div>
  );
};

export default Card;
