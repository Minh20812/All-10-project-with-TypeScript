import Card from "./Card";

const dataCard = [
  {
    name: "Ice Mobile 10GB",
    plus: "Up to 100Mbit/s",
    prices: 299,
    bgColor: "bg-[#FFFBEC]",
    img: "https://i.imgur.com/RXxlDyq.png",
  },
  {
    name: "Telia Mobil 15GB",
    plus: "Unlimited calls, SMS and MMS",
    prices: 953,
    bgColor: "bg-[#F9ECFF]",
    img: "https://i.imgur.com/xmpp7yr.png",
  },
  {
    name: "Telenor Next Fast",
    plus: "Up to 100Mbit/s",
    prices: 1028,
    bgColor: "bg-[#ECEEFF]",
    img: "https://i.imgur.com/vJJ3zQu.png",
  },
];

const BuySubscription = () => {
  return (
    <>
      <div className="flex items-center justify-center bg-[#FFFBEC] p-8">
        <div className="flex w-fit flex-col items-center justify-center gap-14 rounded-[14px] bg-[#F4F5FA] px-[150px] py-[82px]">
          {/* title  */}
          <div className="flex flex-col items-center justify-center gap-6">
            <h1 className="text-center font-merri text-[2rem] font-black">
              Get the most out of your mobile with the right subscription
            </h1>
            <h3 className="text-center font-poppin text-lg font-medium">
              All devices come with free delivery or pickup as standard. See
              information on available shopping options for your location.
            </h3>
          </div>
          {/* card */}
          <div className="grid grid-cols-3 gap-16">
            {dataCard.map((item, index) => (
              <Card
                name={item.name}
                plus={item.plus}
                prices={item.prices}
                bgColor={item.bgColor}
                img={item.img}
                key={index}
              />
            ))}
          </div>
          {/* button  */}
          <button className="w-fit rounded-[41px] bg-[#171435] px-6 py-4 font-poppin text-base font-medium text-white">
            See all subscriptions
          </button>
        </div>
      </div>
    </>
  );
};

export default BuySubscription;
