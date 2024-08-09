interface dataCard {
  icon: React.ReactNode;
  name: string;
  count: number;
  colorFrom: string;
  colorTo: string;
}

const Card = ({ icon, name, count, colorFrom, colorTo }: dataCard) => {
  return (
    <>
      <div className="inline-flex flex-col items-center justify-center gap-8 rounded-2xl bg-white px-10 py-12 shadow">
        <div className="inline-flex items-center justify-start gap-4">
          <div
            className={`rounded-[14px] bg-gradient-to-br ${colorFrom} ${colorTo} p-4`}
          >
            {icon}
          </div>
          <h2 className="font-poppin text-2xl font-medium text-[#1d2146]">
            {name}
          </h2>
        </div>

        <button className="self-stretch rounded-lg border border-[#c2c5e2] bg-white px-6 py-4 font-poppin text-lg font-medium text-[#1d2146]">
          {count} open positions
        </button>
      </div>
    </>
  );
};

export default Card;
