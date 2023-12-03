"use client";

import { useEffect, useState } from "react";
import { CreateSMSForm } from "./CreateSMSForm";
import { SMSList } from "./SMSList";

const SmsDetails = () => {
  const [smsCampaigns, setSmsCampaigns] = useState([]);
  const [draftSms, setDraftSms] = useState([]);
  const [sentSms, setSentSms] = useState([]);

  const [showingSent, setShowingSent] = useState(false);
  const [showingDraft, setShowingDraft] = useState(true);

  useEffect(() => {
    //TODO: This will be used to fetch the campaigns later
    setSmsCampaigns([
      {
        id: 0,
        name: "campaign1",
        from_number: "+15017122661",
        status: "sent",
      },
      {
        id: 1,
        name: "campaign2",
        from_number: "+15017122661",
        status: "draft",
      },
      {
        id: 2,
        name: "campaign2",
        from_number: "+15017122661",
        status: "sent",
      },
    ]);
  }, []);

  useEffect(() => {
    //Separate sent/drafted campaigns, //TODO: in the future it will be fetched from supabase
    // Filtering campaigns based on their status
    const sent = smsCampaigns.filter((campaign) => campaign.status === "sent");
    const drafts = smsCampaigns.filter(
      (campaign) => campaign.status === "draft"
    );

    setSentSms(sent);
    setDraftSms(drafts);
  }, [smsCampaigns]);

  return (
    <>
      <header className="mx-10 py-5 ">
        <div className="flex justify-between">
          <article className="w-full text-center text-4xl font-bold text-ui_primary lg:text-left">
            <h1>SMS Campaign details</h1>
          </article>
          <div className="hidden w-60 lg:block">
            <CreateSMSForm />
          </div>
        </div>

        {/* Mobile campaign selection */}
        <select id="select-campaign" className="mt-5 md:hidden">
          <option value="draft">Drafts</option>
          <option value="sent">Sent</option>
        </select>

        {/* Desktop campaign selection */}
        <ul className="hidden md:flex gap-6 font-semibold mt-5 border-b-[1px]">
          {/* Sent tab */}
          <li
            className={`flex flex-shrink pb-3 border-b-2 transition-all hover:cursor-pointer  ${
              showingSent
                ? "border-ui_secondary1"
                : "border-transparent hover:scale-95"
            }`}
            onClick={() => {
              setShowingSent(true);
              setShowingDraft(false);
            }}
          >
            <div className="flex gap-2 items-center">
              <span>Sent</span>
              <span className="bg-slate-200 py-1 px-2 rounded-md">
                {sentSms.length}
              </span>
            </div>
          </li>

          {/* Draft tab */}
          <li
            className={`flex flex-shrink pb-3 border-b-2 transition-all hover:cursor-pointer  ${
              !showingSent
                ? "border-ui_secondary1"
                : "border-transparent hover:scale-95"
            }`}
            onClick={() => {
              setShowingDraft(true);
              setShowingSent(false);
            }}
          >
            <div className="flex gap-2 items-center">
              <span>Drafts</span>
              <span className="bg-slate-200 py-1 px-2 rounded-md">
                {draftSms.length}
              </span>
            </div>
          </li>
        </ul>
      </header>

      <section className="mx-10 mt-5 mb-10 bg-white rounded-md p-6">
        {showingSent ? (
          <SMSList smsCampaigns={sentSms} />
        ) : (
          <SMSList smsCampaigns={draftSms} />
        )}
      </section>
    </>
  );
};

export default SmsDetails;
