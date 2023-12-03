"use client";

import { useEffect, useState } from "react";

import close from "@/public/icons/close.icon.svg";
import Image from "next/image";
import Link from "next/link";

export const CreateCampaignForm = () => {
  const [groups, setGroups] = useState([]);
  const [emails, setEmails] = useState([]);
  const [campaign, setCampaign] = useState({
    id: 0,
    name: "",
    subject: "",
    from_name: "",
    from_email: "",
    status: "",
  });

  const [isCreateCampaignOpen, setIsCreateCampaignOpen] = useState(false);
  const [isEditorSelectOpen, setIsEditorSelectOpen] = useState(false);
  const [isEmailSelectOpen, setIsEmailSelectOpen] = useState(false);

  ////////////////////////////////////////////////////!FOR TESTING ONLY
  const [selectedEmail, setSelectedEmail] = useState({});

  useEffect(() => {
    // In the future the fetching of the groups will be done here
    setGroups([
      { id: 1, name: "group1" },
      { id: 2, name: "group2" },
      { id: 3, name: "group3" },
    ]);

    //This is setting a dummy email array to test if selecting an email to import to the editor works
    //you should probably collapse it so it doesnt bother you, the html takes a lot of space
    setEmails([
      {
        id: 1,
        name: "Email test 1",
        html: `<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"> <html xmlns="http://www.w3.org/1999/xhtml"xmlns:v="urn:schemas-microsoft-com:vml"xmlns:o="urn:schemas-microsoft-com:office:office"> <head> <!--[if gte mso 9]>
        <xml>
          <o:OfficeDocumentSettings>
            <o:AllowPNG/>
            <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
        </xml>
        <![endif]--> <meta http-equiv="Content-Type"content="text/html; charset=UTF-8"> <meta name="viewport"content="width=device-width,initial-scale=1"> <meta name="x-apple-disable-message-reformatting"> <!--[if !mso]><!--><meta http-equiv="X-UA-Compatible"content="IE=edge"><!--<![endif]--> <title></title> <style type="text/css">@media only screen and (min-width:520px){.u-row{width:500px!important}.u-row .u-col{vertical-align:top}.u-row .u-col-100{width:500px!important}}@media (max-width:520px){.u-row-container{max-width:100%!important;padding-left:0!important;padding-right:0!important}.u-row .u-col{min-width:320px!important;max-width:100%!important;display:block!important}.u-row{width:100%!important}.u-col{width:100%!important}.u-col>div{margin:0 auto}}body{margin:0;padding:0}table,td,tr{vertical-align:top;border-collapse:collapse}p{margin:0}.ie-container table,.mso-container table{table-layout:fixed}*{line-height:inherit}a[x-apple-data-detectors=true]{color:inherit!important;text-decoration:none!important}table,td{color:#000}</style> </head> <body class="clean-body u_body"style="margin:0;padding:0;-webkit-text-size-adjust:100%;background-color:#e7e7e7;color:#000"> <!--[if IE]><div class="ie-container"><![endif]--> <!--[if mso]><div class="mso-container"><![endif]--> <table style="border-collapse:collapse;table-layout:fixed;border-spacing:0;mso-table-lspace:0;mso-table-rspace:0;vertical-align:top;min-width:320px;Margin:0 auto;background-color:#e7e7e7;width:100%"cellpadding="0"cellspacing="0"> <tbody> <tr style="vertical-align:top"> <td style="word-break:break-word;border-collapse:collapse!important;vertical-align:top"> <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #e7e7e7;"><![endif]--> <div class="u-row-container"style="padding:0;background-color:transparent"> <div class="u-row"style="margin:0 auto;min-width:320px;max-width:500px;overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;background-color:transparent"> <div style="border-collapse:collapse;display:table;width:100%;height:100%;background-color:transparent"> <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]--> <!--[if (mso)|(IE)]><td align="center" width="500" style="width: 500px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]--> <div class="u-col u-col-100"style="max-width:320px;min-width:500px;display:table-cell;vertical-align:top"> <div style="height:100%;width:100%!important;border-radius:0;-webkit-border-radius:0;-moz-border-radius:0"> <!--[if (!mso)&(!IE)]><!--><div style="box-sizing:border-box;height:100%;padding:0;border-top:0 solid transparent;border-left:0 solid transparent;border-right:0 solid transparent;border-bottom:0 solid transparent;border-radius:0;-webkit-border-radius:0;-moz-border-radius:0"><!--<![endif]--> <table style="font-family:arial,helvetica,sans-serif"role="presentation"cellpadding="0"cellspacing="0"width="100%"border="0"> <tbody> <tr> <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif"align="left"> <div style="font-size:14px;line-height:140%;text-align:left;word-wrap:break-word"> <p style="line-height:140%">Email1</p> </div> </td> </tr> </tbody> </table> <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]--> </div> </div> <!--[if (mso)|(IE)]></td><![endif]--> <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]--> </div> </div> </div> <!--[if (mso)|(IE)]></td></tr></table><![endif]--> </td> </tr> </tbody> </table> <!--[if mso]></div><![endif]--> <!--[if IE]></div><![endif]--> </body> </html>`,
        design: {
          counters: {
            u_column: 1,
            u_row: 1,
            u_content_text: 1,
          },
          body: {
            id: "M4gyXc2Sy0",
            rows: [
              {
                id: "mJg3H8uEtG",
                cells: [1],
                columns: [
                  {
                    id: "LKSGFRE2ve",
                    contents: [
                      {
                        id: "uQLG9pzTmx",
                        type: "text",
                        values: {
                          containerPadding: "10px",
                          anchor: "",
                          fontSize: "14px",
                          textAlign: "left",
                          lineHeight: "140%",
                          linkStyle: {
                            inherit: true,
                            linkColor: "#0000ee",
                            linkHoverColor: "#0000ee",
                            linkUnderline: true,
                            linkHoverUnderline: true,
                          },
                          displayCondition: null,
                          _meta: {
                            htmlID: "u_content_text_1",
                            htmlClassNames: "u_content_text",
                          },
                          selectable: true,
                          draggable: true,
                          duplicatable: true,
                          deletable: true,
                          hideable: true,
                          text: '<p style="line-height: 140%;">Email1</p>',
                        },
                      },
                    ],
                    values: {
                      backgroundColor: "",
                      padding: "0px",
                      border: {},
                      borderRadius: "0px",
                      _meta: {
                        htmlID: "u_column_1",
                        htmlClassNames: "u_column",
                      },
                    },
                  },
                ],
                values: {
                  displayCondition: null,
                  columns: false,
                  backgroundColor: "",
                  columnsBackgroundColor: "",
                  backgroundImage: {
                    url: "",
                    fullWidth: true,
                    repeat: "no-repeat",
                    size: "custom",
                    position: "center",
                    customPosition: ["50%", "50%"],
                  },
                  padding: "0px",
                  anchor: "",
                  hideDesktop: false,
                  _meta: {
                    htmlID: "u_row_1",
                    htmlClassNames: "u_row",
                  },
                  selectable: true,
                  draggable: true,
                  duplicatable: true,
                  deletable: true,
                  hideable: true,
                },
              },
            ],
            headers: [],
            footers: [],
            values: {
              popupPosition: "center",
              popupWidth: "600px",
              popupHeight: "auto",
              borderRadius: "10px",
              contentAlign: "center",
              contentVerticalAlign: "center",
              contentWidth: "500px",
              fontFamily: {
                label: "Arial",
                value: "arial,helvetica,sans-serif",
              },
              textColor: "#000000",
              popupBackgroundColor: "#FFFFFF",
              popupBackgroundImage: {
                url: "",
                fullWidth: true,
                repeat: "no-repeat",
                size: "cover",
                position: "center",
              },
              popupOverlay_backgroundColor: "rgba(0, 0, 0, 0.1)",
              popupCloseButton_position: "top-right",
              popupCloseButton_backgroundColor: "#DDDDDD",
              popupCloseButton_iconColor: "#000000",
              popupCloseButton_borderRadius: "0px",
              popupCloseButton_margin: "0px",
              popupCloseButton_action: {
                name: "close_popup",
                attrs: {
                  onClick:
                    "document.querySelector('.u-popup-container').style.display = 'none';",
                },
              },
              backgroundColor: "#e7e7e7",
              backgroundImage: {
                url: "",
                fullWidth: true,
                repeat: "no-repeat",
                size: "custom",
                position: "center",
              },
              preheaderText: "",
              linkStyle: {
                body: true,
                linkColor: "#0000ee",
                linkHoverColor: "#0000ee",
                linkUnderline: true,
                linkHoverUnderline: true,
              },
              _meta: {
                htmlID: "u_body",
                htmlClassNames: "u_body",
              },
            },
          },
          schemaVersion: 16,
        },
      },
      {
        id: 2,
        name: "Email test 2",
        html: `<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"> <html xmlns="http://www.w3.org/1999/xhtml"xmlns:v="urn:schemas-microsoft-com:vml"xmlns:o="urn:schemas-microsoft-com:office:office"> <head> <!--[if gte mso 9]>
        <xml>
          <o:OfficeDocumentSettings>
            <o:AllowPNG/>
            <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
        </xml>
        <![endif]--> <meta http-equiv="Content-Type"content="text/html; charset=UTF-8"> <meta name="viewport"content="width=device-width,initial-scale=1"> <meta name="x-apple-disable-message-reformatting"> <!--[if !mso]><!--><meta http-equiv="X-UA-Compatible"content="IE=edge"><!--<![endif]--> <title></title> <style type="text/css">@media only screen and (min-width:520px){.u-row{width:500px!important}.u-row .u-col{vertical-align:top}.u-row .u-col-100{width:500px!important}}@media (max-width:520px){.u-row-container{max-width:100%!important;padding-left:0!important;padding-right:0!important}.u-row .u-col{min-width:320px!important;max-width:100%!important;display:block!important}.u-row{width:100%!important}.u-col{width:100%!important}.u-col>div{margin:0 auto}}body{margin:0;padding:0}table,td,tr{vertical-align:top;border-collapse:collapse}p{margin:0}.ie-container table,.mso-container table{table-layout:fixed}*{line-height:inherit}a[x-apple-data-detectors=true]{color:inherit!important;text-decoration:none!important}table,td{color:#000}</style> </head> <body class="clean-body u_body"style="margin:0;padding:0;-webkit-text-size-adjust:100%;background-color:#e7e7e7;color:#000"> <!--[if IE]><div class="ie-container"><![endif]--> <!--[if mso]><div class="mso-container"><![endif]--> <table style="border-collapse:collapse;table-layout:fixed;border-spacing:0;mso-table-lspace:0;mso-table-rspace:0;vertical-align:top;min-width:320px;Margin:0 auto;background-color:#e7e7e7;width:100%"cellpadding="0"cellspacing="0"> <tbody> <tr style="vertical-align:top"> <td style="word-break:break-word;border-collapse:collapse!important;vertical-align:top"> <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #e7e7e7;"><![endif]--> <div class="u-row-container"style="padding:0;background-color:transparent"> <div class="u-row"style="margin:0 auto;min-width:320px;max-width:500px;overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;background-color:transparent"> <div style="border-collapse:collapse;display:table;width:100%;height:100%;background-color:transparent"> <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]--> <!--[if (mso)|(IE)]><td align="center" width="500" style="width: 500px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]--> <div class="u-col u-col-100"style="max-width:320px;min-width:500px;display:table-cell;vertical-align:top"> <div style="height:100%;width:100%!important;border-radius:0;-webkit-border-radius:0;-moz-border-radius:0"> <!--[if (!mso)&(!IE)]><!--><div style="box-sizing:border-box;height:100%;padding:0;border-top:0 solid transparent;border-left:0 solid transparent;border-right:0 solid transparent;border-bottom:0 solid transparent;border-radius:0;-webkit-border-radius:0;-moz-border-radius:0"><!--<![endif]--> <table style="font-family:arial,helvetica,sans-serif"role="presentation"cellpadding="0"cellspacing="0"width="100%"border="0"> <tbody> <tr> <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif"align="left"> <div style="font-size:14px;line-height:140%;text-align:left;word-wrap:break-word"> <p style="line-height:140%">Email2</p> </div> </td> </tr> </tbody> </table> <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]--> </div> </div> <!--[if (mso)|(IE)]></td><![endif]--> <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]--> </div> </div> </div> <!--[if (mso)|(IE)]></td></tr></table><![endif]--> </td> </tr> </tbody> </table> <!--[if mso]></div><![endif]--> <!--[if IE]></div><![endif]--> </body> </html>`,
        design: {
          counters: {
            u_column: 1,
            u_row: 1,
            u_content_text: 1,
          },
          body: {
            id: "SyDefDr_-H",
            rows: [
              {
                id: "xUSN6_q_Ua",
                cells: [1],
                columns: [
                  {
                    id: "Jc1_qpakHh",
                    contents: [
                      {
                        id: "UlxajXzY4f",
                        type: "text",
                        values: {
                          containerPadding: "10px",
                          anchor: "",
                          fontSize: "14px",
                          textAlign: "left",
                          lineHeight: "140%",
                          linkStyle: {
                            inherit: true,
                            linkColor: "#0000ee",
                            linkHoverColor: "#0000ee",
                            linkUnderline: true,
                            linkHoverUnderline: true,
                          },
                          displayCondition: null,
                          _meta: {
                            htmlID: "u_content_text_1",
                            htmlClassNames: "u_content_text",
                          },
                          selectable: true,
                          draggable: true,
                          duplicatable: true,
                          deletable: true,
                          hideable: true,
                          text: '<p style="line-height: 140%;">Email2</p>',
                        },
                      },
                    ],
                    values: {
                      backgroundColor: "",
                      padding: "0px",
                      border: {},
                      borderRadius: "0px",
                      _meta: {
                        htmlID: "u_column_1",
                        htmlClassNames: "u_column",
                      },
                    },
                  },
                ],
                values: {
                  displayCondition: null,
                  columns: false,
                  backgroundColor: "",
                  columnsBackgroundColor: "",
                  backgroundImage: {
                    url: "",
                    fullWidth: true,
                    repeat: "no-repeat",
                    size: "custom",
                    position: "center",
                    customPosition: ["50%", "50%"],
                  },
                  padding: "0px",
                  anchor: "",
                  hideDesktop: false,
                  _meta: {
                    htmlID: "u_row_1",
                    htmlClassNames: "u_row",
                  },
                  selectable: true,
                  draggable: true,
                  duplicatable: true,
                  deletable: true,
                  hideable: true,
                },
              },
            ],
            headers: [],
            footers: [],
            values: {
              popupPosition: "center",
              popupWidth: "600px",
              popupHeight: "auto",
              borderRadius: "10px",
              contentAlign: "center",
              contentVerticalAlign: "center",
              contentWidth: "500px",
              fontFamily: {
                label: "Arial",
                value: "arial,helvetica,sans-serif",
              },
              textColor: "#000000",
              popupBackgroundColor: "#FFFFFF",
              popupBackgroundImage: {
                url: "",
                fullWidth: true,
                repeat: "no-repeat",
                size: "cover",
                position: "center",
              },
              popupOverlay_backgroundColor: "rgba(0, 0, 0, 0.1)",
              popupCloseButton_position: "top-right",
              popupCloseButton_backgroundColor: "#DDDDDD",
              popupCloseButton_iconColor: "#000000",
              popupCloseButton_borderRadius: "0px",
              popupCloseButton_margin: "0px",
              popupCloseButton_action: {
                name: "close_popup",
                attrs: {
                  onClick:
                    "document.querySelector('.u-popup-container').style.display = 'none';",
                },
              },
              backgroundColor: "#e7e7e7",
              backgroundImage: {
                url: "",
                fullWidth: true,
                repeat: "no-repeat",
                size: "custom",
                position: "center",
              },
              preheaderText: "",
              linkStyle: {
                body: true,
                linkColor: "#0000ee",
                linkHoverColor: "#0000ee",
                linkUnderline: true,
                linkHoverUnderline: true,
              },
              _meta: {
                htmlID: "u_body",
                htmlClassNames: "u_body",
              },
            },
          },
          schemaVersion: 16,
        },
      },
    ]);

    //When there is backend the function that will fetch the proper campaign id will go here
    //Also the function that will relate the created campaign with the chosen group
  }, []);

  ////////////////////////////////////////////////////!

  const saveTemplate = (template) => {
    localStorage.setItem("template", JSON.stringify(template.design));
  };

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
                  {isEditorSelectOpen || isEmailSelectOpen
                    ? "Editor Settings"
                    : "Campaign Settings"}
                </h2>
              </article>

              <button
                className="z-10 p-2"
                onClick={() => {
                  setIsEditorSelectOpen(false);
                  setIsEmailSelectOpen(false);
                  setIsCreateCampaignOpen(false);
                }}
              >
                <Image src={close} alt="close" />
              </button>
            </div>

            {!isEditorSelectOpen && !isEmailSelectOpen && (
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
                  <label htmlFor="campaign-sender-name">Sender</label>
                  <div className="flex gap-2">
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
                    onClick={() => setIsEditorSelectOpen(true)}
                  >
                    Continue
                  </button>
                </section>
                {/* Add condition that if the fields are not filled then this button is greyed out */}
              </form>
            )}

            {isEditorSelectOpen && !isEmailSelectOpen && (
              <div className="mx-2 mb-2 grid min-h-[15rem] animate-fade-in grid-cols-2 gap-5 font-semibold text-slate-700">
                <button
                  onClick={() => {
                    setIsEmailSelectOpen(true);
                  }}
                  className="overflow-hidden rounded-md"
                >
                  <div
                    role="button"
                    tabIndex={0}
                    className="flex h-full w-full items-center justify-center bg-slate-200 transition-all hover:scale-110 hover:bg-slate-400"
                  >
                    <span>
                      Choose one of your previous emails as a template
                    </span>
                  </div>
                </button>

                <Link
                  href={`campaigns/${campaign.id}/email`}
                  onClick={() => {
                    saveTemplate({ design: "" });
                  }}
                  className="overflow-hidden rounded-md"
                >
                  <div
                    role="button"
                    tabIndex={0}
                    className="flex h-full w-full items-center justify-center bg-slate-200 transition-all hover:scale-110 hover:bg-slate-400"
                  >
                    <span>Start from scratch</span>
                  </div>
                </Link>
              </div>
            )}

            {/* Select previous email screen */}
            {isEmailSelectOpen && (
              <div className="mx-2 mb-2 flex min-h-[15rem] animate-fade-in items-center font-semibold text-slate-700">
                <form
                  className="form w-full"
                  onSubmit={(e) => {
                    e.preventDefault();
                    saveTemplate(
                      emails.find((email) => email.id == selectedEmail)
                    );
                    window.location.href = `/campaigns/${campaign.id}/email`;
                  }}
                >
                  <div>
                    <label htmlFor="select-email">Email template</label>
                    <select
                      name="select-email"
                      onChange={(e) => {
                        e.preventDefault();
                        setSelectedEmail(e.target.value);
                      }}
                    >
                      <option value="">Select an email</option>
                      {emails.map((email) => (
                        <option key={email.id} id={email.id} value={email.id}>
                          {email.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button type="submit">Next: Content</button>
                </form>
              </div>
            )}
          </div>
        </dialog>
      )}
    </>
  );
};
