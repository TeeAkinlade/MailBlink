"use client"
import { useParams } from "next/navigation";
import { useRef, useState } from "react";
import EmailEditor from "react-email-editor";

const CampaignsEditor = () => {
  const {campaignID} = useParams()
  const emailEditorRef = useRef(null);
  const [emails, setEmails] = useState([])

  const exportHtml = () => {
    const unlayer = emailEditorRef.current?.editor;

    unlayer?.exportHtml((data) => {
      const { html } = data;
      console.log("exportHtml", html);
    });
  };

  const onReady = () => {
    //This will be for implementing templates later
    //And adding a button inside the email editor to save emails (if possible, I have to check the docs further)
  }

  return (
      <EmailEditor ref={emailEditorRef} onReady={onReady}/>
  );
};

export default CampaignsEditor;