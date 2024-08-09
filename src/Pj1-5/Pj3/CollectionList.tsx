import Card from "./Card";

const dataBtn = [
  {
    name: "Profile",
  },
  {
    name: "New York",
  },
  {
    name: "Relaxing",
  },
  {
    name: "Person",
  },
  {
    name: "Fashion",
  },
];

const dataCard = [
  {
    imgL1: "https://i.imgur.com/diLhaAI.jpeg",
    imgN1: "https://i.imgur.com/diLhaAI.jpeg",
    imgN2: "https://i.imgur.com/diLhaAI.jpeg",
    imgN3: "https://i.imgur.com/diLhaAI.jpeg",
    title: "People",
    count: "144",
  },
  {
    imgL1: "https://i.imgur.com/diLhaAI.jpeg",
    imgN1: "https://i.imgur.com/diLhaAI.jpeg",
    imgN2: "https://i.imgur.com/diLhaAI.jpeg",
    imgN3: "https://i.imgur.com/diLhaAI.jpeg",
    title: "Nature",
    count: "7K",
  },
  {
    imgL1: "https://i.imgur.com/diLhaAI.jpeg",
    imgN1: "https://i.imgur.com/diLhaAI.jpeg",
    imgN2: "https://i.imgur.com/diLhaAI.jpeg",
    imgN3: "https://i.imgur.com/diLhaAI.jpeg",
    title: "History",
    count: "431",
  },
];

const CollectionList = () => {
  return (
    <>
      <div className="bg-[#D8DAE2] p-7">
        <div className="relative flex flex-col items-center justify-center gap-[56px] rounded-3xl bg-[#EFF0F1] p-8">
          {/* Indexing  */}
          <div className="self-start">
            <h1 className="font-merri text-3xl font-bold">
              Popular Collections
            </h1>
            <div className="mt-6 flex gap-2">
              {dataBtn.map((item, index) => (
                <button
                  className="rounded-lg bg-white p-[10px] text-base font-medium"
                  key={index}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
          {/* Card  */}
          <div className="grid grid-cols-3 gap-[64px]">
            {dataCard.map((item, index) => (
              <Card
                imgL1={item.imgL1}
                imgN1={item.imgN1}
                imgN2={item.imgN2}
                imgN3={item.imgN3}
                title={item.title}
                count={item.count}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CollectionList;
