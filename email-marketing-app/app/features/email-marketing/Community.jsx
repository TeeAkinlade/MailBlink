import Image from "next/image";
import Link from "next/link";

const items = [
  {
    id: 1,
    image: "/assets/icons/support.svg",
    title: "Community Support",
    description:
      "Community Support is also available for all open source users.",
  },
  {
    id: 2,
    image: "/assets/icons/github.icon.svg",
    title: "MailBlink on GitHub",
    description: "Track the MailBlink development changes on GitHub.",
  },
];

const Community = () => {
  return (
    <section className="flex md:flex-row flex-col lg:gap-28 md:gap-14 justify-center items-center md:h-[49.875rem] lg:px-[7.37rem] md:px-10 px-6 py-20 rounded-[100px]">
      <div className="md:w-[30.31rem] w-full md:h-[34.5rem] md:mb-0 mb-16 ">
        <Image
          src="/assets/images/community.jpeg"
          alt=""
          width={1000}
          height={1000}
          quality={100}
          className="w-full h-full object-cover rounded-[100px]"
        />
      </div>

      <div className="md:w-[34.6rem]">
        <h2 className=" text-ui_primary font-bold lg:text-5xl text-4xl">
          Download NMIS
        </h2>
        <p className=" leading-8 text-Ash mt-2">
          NMIS (Network Management Information System) is an open-source network
          management system that was first released in 1998.
          <Link href="/">
            <span className="underline text-ui_secondary1 block cursor-pointer">
              Download daataSheet
            </span>
          </Link>
        </p>
        <div className="flex justify-center items-center gap-8 mt-10">
          {items.map((item) => (
            <div className="w-[50%]">
              <img src={item.image} alt="" />
              <h3 className="font-semibold md:text-2xl text-xl mt-3">
                {item.title}
              </h3>
              <p className="text-Ash my-5">{item.description}</p>
              <Link href="/">
                <button className="border-2 border-ui_secondary1 bg-transparent rounded-full px-6 py-2 hover:bg-ui_secondary1 hover:text-white ">
                  Join
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;
