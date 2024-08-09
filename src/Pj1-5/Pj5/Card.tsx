interface dataCard {
  name: string;
  live: string;
  job: string[];
}

const Card = ({ name, live, job }: dataCard) => {
  return (
    <>
      <div className="flex gap-4 rounded-2xl border border-[#BFC8E5] bg-[#FBFCFF] p-6">
        {/* img  */}
        <img
          src="https://i.imgur.com/ZgBah7z.jpg"
          alt=""
          className="w-24 self-start rounded-full"
        />
        {/* introduce  */}
        <div className="font-poppin text-xs">
          <div className="mb-4 flex flex-col gap-1 pt-5">
            <h1 className="font-merri text-lg font-black">{name}</h1>
            <h2>{live}</h2>
          </div>
          <div className="flex flex-wrap gap-1 overflow-x-auto text-[#516FD4]">
            {job.map((item, index) => (
              <p
                className="w-fit cursor-pointer rounded-[10px] border border-[#BFC8E6] px-2 py-[2px]"
                key={index}
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
