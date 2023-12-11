import Image from "next/image";
import search from "@/public/icons/search.icon.svg";
import deleteIcon from "@/public/icons/delete.icon.svg";

export const SMSList = ({ smsCampaigns }) => {
  return (
    <ul className="flex flex-col gap-6">
      {/* Search bar */}
      <div className="border-b-[1px]">
        <form id="search-campaign" className="mb-6 text-slate-500">
          <div className="flex">
            <input
              className="w-full rounded-l-full border-y-[1px] border-l-[1px] border-slate-200 px-2 py-3 font-normal transition-colors focus:border-slate-400 focus:outline-none"
              type="text"
              placeholder="Search Campaign"
            />
            <button className="flex flex-shrink justify-center items-center rounded-r-full border-[1px] border-slate-200 bg-slate-200 p-[2.40rem] py-3 text-white transition-all hover:border-slate-100 hover:bg-slate-100">
              <Image src={search} alt="search"></Image>
            </button>
          </div>
        </form>
      </div>

      {/* List the smsCampaigns */}
      {smsCampaigns.map((campaign) => {
        return (
          <li key={campaign.id} className="flex items-start justify-between">
            <section className="flex gap-6">
              {/* Sms preview */}
              <div className="flex h-32 w-32 items-center rounded-md bg-slate-200 text-center">
                Here will go the sms preview
              </div>

              {/* Campaign content */}
              <section className="mt-2 flex flex-col items-start">
                <article className="text-2xl font-normal">
                  <h2>{campaign.name}</h2>
                </article>
                <div className="text-slate-500">
                  <div className="flex flex-col gap-1 lg:flex-row">
                    <span>From: </span>
                    <h3>{campaign.from_number}</h3>
                  </div>
                </div>
              </section>
            </section>

            {/* Edit/Delete campaign button */}
            <div className="hidden gap-[1px] overflow-hidden rounded-full font-medium text-slate-500 lg:flex">
              <button className="bg-slate-200 px-4 py-2 transition-colors hover:bg-slate-100">
                Edit
              </button>
              <button className="bg-slate-200 p-2 transition-colors hover:bg-slate-100">
                <Image src={deleteIcon} alt="delete campaign"></Image>
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
