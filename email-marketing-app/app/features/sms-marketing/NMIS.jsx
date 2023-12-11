import Link from "next/link";
// import Dropdown from "./expand_more_black_24dp (1) 1.png";
import Image from "next/image";
// import Rec from "./Group 1000000869.png";

const feedback = [
  { question: "What does NMIS stand for?", id: 1 },
  { question: "What does NMIS stand for?", id: 2 },
  { question: "What is a network management system?", id: 3 },
  { question: "What is a network management software?", id: 4 },
  { question: "What is wireless network management software?", id: 5 },
  { question: "What are the advantages of using network?", id: 6 },
];

export default function NMIS() {
  return (

    <section className="bg-blue-50 relative items-center mt-10">
    <div className="flex flex-col items-center ml-0 mx-4 md:flex-row md:justify-center md:items-start md:ml-20">
      <main className="font-poppins px-4 md:px-10 py-10 shadow-lg max-w-xl rounded-3xl mt-10 md:mt-0 bg-white relative z-10">
        <h2 className="text-ui_primary text-2xl md:text-4xl font-semibold font-poppins">
          Download NMIS
        </h2>
        <p className="mt-4 md:mt-7 text-sm md:text-lg font-md">
          NMIS (Network Management Information System) <br />
          is an open-source network management system
          <br /> that was first released in 1998.
          <br />
          <Link href="" className="text-ui_button underline mt-2">
            Download dataSheet
          </Link>
        </p>
        <div className="mt-4 md:mt-7 text-md md:text-md">
          <input type="radio" />
          <label className=" md:text-lg ">
            Download NMIS 9.3.0
            <Link href="" className="ml-2 md:ml-10 text-ui_button">
              View Documentation
            </Link>
          </label>
          <br />
          <input type="radio" className="mt-2" />
          <label className=" md:text-lg ">
            Download NMIS 8.8.0
            <Link href="" className="ml-2 md:ml-10 text-ui_button">
              View Documentation
            </Link>
          </label>
          <br />
          <input type="radio" className="mt-2" />
          <label className=" md:text-lg ">
            NMIS Source(GitHub)
            <Link href="" className="ml-2 md:ml-10 text-ui_button">
              View Documentation
            </Link>
          </label>
        </div>
        <div className="mt-6 md:mt-10">
          <label>Email</label>
          <br />
          <input
            type="email"
            placeholder="youremail@gmail.com"
            className="border border-gray-400 py-1 px-4 w-full md:w-96 rounded-md focus:outline-none focus:ring focus:border-gray-400"
          />
        </div>
        <div className="mt-3 md:mt-10">
          <input
            type="checkbox"
            className="h-4 w-5 text-blue-500 border-blue-500 rounded"
          />
          <label> Apply all terms and conditions</label>
        </div>
        <button className="bg-ui_primary2 hover:bg-ui_button text-white font-bold py-2 px-10 rounded-3xl mt-4 md:mt-5">
          Download
        </button>
      </main>
  
      {/* FAQ */}
      <main className="font-poppins mt-6   md:ml-[100px] md:mb-6 ">
        <section className="ml-10">
          <h2 className="text-ui_primary text-2xl md:text-4xl font-semibold font-poppins">
            FAQ
          </h2>
          <div className="mt-4 md:mt-5 text-md md:text-md font-semibold">
            {feedback.map((feedback) => (
              <p
                className="grid grid-cols-2 text-sm md:text-md items-center mt-4 md:mt-5"
                key={feedback.id}
              >
                {feedback.question}
                <Image src="/assets/icons/expand_more_black_24dp (1) 1.png" width={35} height={5} alt="drop" className="col-span-1 ml-2 md:ml-4" />
              </p>
            ))}
          </div>
        </section>
      </main>
    </div>
    <div className="mt-[-150px] w-full hidden md:flex">
      <Image src="/assets/images/Group 1000000869.png" width={1500} height={30} alt="imx" className="w-full" />
    </div>
  </section>
  );
}
