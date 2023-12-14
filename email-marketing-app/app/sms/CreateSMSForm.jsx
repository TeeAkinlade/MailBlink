"use client";

import { useEffect, useState } from "react";

<<<<<<< HEAD
import close from "@/public/assets/icons/close.icon.svg";
=======
import close from "@/public/icons/close.icon.svg";
>>>>>>> 03691fac21fe7c9d1cbc741974d76de17d85be51
import Image from "next/image";
import Link from "next/link";

export const CreateSMSForm = () => {
  const [groups, setGroups] = useState([]);
  const [sms, setSms] = useState([]);
  const [campaign, setCampaign] = useState({
    id: 0,
    name: "",
    subject: "",
    from_name: "",
    from_email: "",
    status: "",
  });

  const [isCreateCampaignOpen, setIsCreateCampaignOpen] = useState(false);
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  ////////////////////////////////////////////////////!FOR TESTING ONLY
  useEffect(() => {
    // In the future the fetching of the groups will be done here
    setGroups([
      { id: 1, name: "smsGroup1" },
      { id: 2, name: "smsGroup2" },
      { id: 3, name: "smsGroup3" },
    ]);

    //This is setting a dummy email array to test if selecting an email to import to the editor works
    //you should probably collapse it so it doesnt bother you, the html takes a lot of space
  }, []);

  ////////////////////////////////////////////////////!

  const handleChange = (e) => {
    //TODO: field validation, until fields are validated the button to continue is greyed out
    return;
  };

  const handleSubmit = (e) => {
    //Here will be the code to send campaign to the db | Handlesubmit after the user chooses an option for email editor
    return;
  };

  return (
    <>
      <button
        onClick={() => {
          setIsCreateCampaignOpen(true);
        }}
        className="btn bg-ui_secondary1 hover:bg-ui_primary"
      >
        Create Campaign
      </button>

      {/* Dialog to choose how to proceed, with an already created email or start from scratch */}

      {isCreateCampaignOpen && (
        <dialog
          open={isCreateCampaignOpen}
          className="fixed top-0 flex h-full w-full animate-fade-in items-center justify-center bg-gray-400 bg-opacity-60 backdrop-blur-sm"
        >
          <div
            className={`bg-secondary mx-10 flex w-full max-w-md flex-col rounded-md`}
          >
            <div className="m-2 flex items-center justify-between">
              <article className="relative left-5 z-0 flex w-full items-center justify-center">
                <h2 className="text-lg font-bold">
                  {isEditorOpen ? "SMS Content" : "Campaign Settings"}
                </h2>
              </article>

              <button
                className="z-10 p-2"
                onClick={() => {
                  setIsEditorOpen(false);
                  setIsCreateCampaignOpen(false);
                }}
              >
                <Image src={close} alt="close" />
              </button>
            </div>

            {!isEditorOpen && (
              <form className="form mx-2 mb-4 flex flex-col">
                {/* Campaign name */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="campaign-name">Campaign name</label>
                  <input
                    id="campaign-name"
                    type="text"
                    name="campaign-name"
                    placeholder="Campaign"
                    required
                  />
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="campaign-sender-name">
                    Sender phone number
                  </label>

                  <input
                    id="campaign-sender-name"
                    type="text"
                    name="campaign-sender-name"
                    placeholder="+15017122661"
                    required
                  />
                </div>

                {/* Recipients */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="campaign-name">Recipients</label>
                  <select name="select-group">
                    <option value="">Select recipient group</option>
                    {groups.map((group) => (
                      <option key={group.id} id={group.id} value={group.id}>
                        {group.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Button */}
                <section>
                  <button
                    className="btn"
                    type="submit"
                    onClick={() => setIsEditorOpen(true)}
                  >
                    Next: Content
                  </button>
                </section>
                {/* Add condition that if the fields are not filled then this button is greyed out */}
              </form>
            )}

            {isEditorOpen && (
              <form className="form mx-2 mb-4 flex flex-col">
                {/* SMS body */}
                <div>
                  <label htmlFor="">Text content*</label>
                  <textarea
                    name="sms-body"
                    rows="4"
                    required
                    placeholder="Your text message content"
                  ></textarea>
                </div>

                {/* SMS image url */}
                <div>
                  <label htmlFor="">Image url</label>
                  <input
                    type="url"
                    placeholder="https://www.image.com/example"
                  />
                </div>

                {/* SMS url */}
                <div>
                  <label htmlFor="">SMS url</label>
                  <input type="url" placeholder="https://www.yourpage.com" />
                </div>

                {/* Button */}
                <section>
                  <Link
                    href={`/sms/${sms.id}/preview`}
                    className="btn bg-ui_secondary1 hover:bg-ui_primary"
                  >
                    Next: Preview
                  </Link>
                </section>
              </form>
            )}
          </div>
        </dialog>
      )}
    </>
  );
};
