"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import EmailEditor from "react-email-editor";

const CampaignsEditor = () => {
  const { campaignID } = useParams();
  const emailEditorRef = useRef(null);
  const [emails, setEmails] = useState([]);
  const [template, setTemplate] = useState("");

  const exportHtml = () => {
    //TODO: In here we will send the html email and design to the database in the future
    const unlayer = emailEditorRef.current?.editor;

    unlayer?.exportHtml(
      (data) => {
        const { design, html } = data;
      },
      { minify: true }
    );
  };

  useEffect(() => {
    const temp = localStorage.getItem("template");
    setTemplate(JSON.parse(temp));
  }, []);

  const onReady = () => {
    //This will be for implementing templates later
    //And adding a button inside the email editor to save emails (if possible, I have to check the docs further)
    emailEditorRef.current?.editor.loadDesign(template);
  };

  return (
    <div className="mx-10 h-screen">
      <header className="py-5">
        <div className="flex justify-between">
          <article className="w-full text-center text-4xl font-bold text-ui_primary lg:text-left">
            <h1>Email Editor</h1>
          </article>
          <div className="hidden w-60 lg:block">
            <Link
              href={`/campaigns/${campaignID}/preview`}
              className="btn bg-ui_secondary1 hover:bg-ui_primary"
              onClick={exportHtml}
            >
              Done editing
            </Link>
          </div>
        </div>
      </header>
      <EmailEditor
        ref={emailEditorRef}
        onReady={onReady}
        style={{
          height: "85vh",
          borderRadius: "0.375rem",
          overflow: "hidden",
        }}
      />
    </div>
  );
};

export default CampaignsEditor;
