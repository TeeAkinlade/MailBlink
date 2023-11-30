"use client"

import Link from "next/link";
import { useEffect, useState } from "react";
// import DialogButton from "../components/Dialog";

const CampaignsDetails = () => {
  const [groups, setGroups] = useState([]);
  const [campaign, setCampaign] = useState({
    id: 0,
    name: "",
    subject: "",
    from_name: "",
    from_email: "",
  });

  useEffect(() => {
    // In the future the fetching of the groups will be done here
    setGroups([
      { id: 1, name: "group1" },
      { id: 2, name: "group2" },
      { id: 3, name: "group3" },
    ]);

    //When there is backend the function that will fetch the proper campaign id will go here
    //Also the function that will relate the created campaign with the chosen group
  }, []);

  const handleSubmit = (e) => {
    //Here will be the code to send campaign to the db
    return;
  };

  return (
    <>
      <header>
        <article>Campaign details</article>
      </header>

      {/* Form */}
      <section>
        <form action="" className="flex flex-col">
          {/* Campaign name */}
          <label htmlFor="campaign-name">Campaign name</label>
          <input
            id="campaign-name"
            type="text"
            name="campaign-name"
            placeholder="Campaign"
            required
          />

          {/* Subject */}
          <label htmlFor="campaign-sender-name">Sender</label>
          <div className="flex">
            <input
              id="campaign-sender-name"
              type="text"
              name="campaign-sender-name"
              placeholder="Name of the sender"
              required
            />
            <input
              id="campaign-sender-email"
              type="email"
              name="campaign-sender-email"
              placeholder="Email of the sender"
              required
            />
          </div>

          {/* Recipients */}
          <label htmlFor="campaign-name">Recipients</label>
          <select name="" id="">
            <option value="">Select recipient group</option>
            {groups.map((group) => (
              <option key={group.id} id={group.id} value={group.id}>
                {group.name}
              </option>
            ))}
          </select>

          {/* Button */}
          <section>
            <Link href={`campaigns/${campaign.id}/email`}>
              <button className="btn" type="submit" onClick={handleSubmit}>
                Next: Content
              </button>
            </Link>
          </section>
          {/* Add condition that if the fields are not filled then this button is greyed out */}
          {/* <DialogButton></DialogButton> */}
        </form>
      </section>
    </>
  );
};

export default CampaignsDetails;
