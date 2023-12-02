"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect } from "react";

const SMSCampaignPreview = () => {
  const { smsID } = useParams();

  useEffect(() => {
    //TODO: fetch the campaign details based on the campaignID
  });

  return (
    <>
      <header className="mx-10 py-5 ">
        <div className="flex justify-between">
          <article className="w-full text-center text-4xl font-bold text-ui_primary lg:text-left">
            <h1>SMS Campaign Preview</h1>
          </article>
          <div className="hidden w-60 lg:block">
            <Link
              href={`/sms`}
              className="btn bg-ui_secondary1 hover:bg-ui_primary"
            >
              Send SMS Campaign
            </Link>
          </div>
        </div>
      </header>

      <section className="mx-10 mt-5 mb-10 bg-white rounded-md p-6">
        This page will show a preview of the campaign details and then allow the
        user to send the campaign or edit the details of the campaign, along
        with a preview of the SMS
      </section>
    </>
  );
};

export default SMSCampaignPreview;
