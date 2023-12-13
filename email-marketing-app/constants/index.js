import image1 from "@/public/assets/images/Frame 57.svg";
import image2 from "@/public/assets/images/Feature Icon with circle.svg";
import image3 from "@/public/assets/images/Feature Icon with circle (1).svg";
import image4 from "@/public/assets/images/Feature Icon with circle (2).svg";
import image5 from "@/public/assets/images/Feature Icon with circle (4).svg";
import image6 from "@/public/assets/images/facebook.svg";
import image7 from "@/public/assets/images/Twitter.svg";
import image8 from "@/public/assets/images/LinkedIn.svg";
import image9 from "@/public/assets/images/Instagram.svg";
import image10 from "@/public/assets/images/email-icon.svg";
import image11 from "@/public/assets/images/Mobile.svg";
import image12 from "@/public/assets/images/Location.svg";
import { IoMdMail } from "react-icons/io";
import { FaSms, FaWpforms } from "react-icons/fa";

export const NavListData = [
  {
    id: 1,
    name: "Features",
    submenu: true,
    sublink: [
      { name: "Audit", link: "/" },
      { name: "Manage", link: "/" },
      { name: "Secure", link: "/" },
      { name: "Automate", link: "/" },
      { name: "About", link: "/" },
    ],
  },
  {
    id: 2,
    name: "Products",
    submenu: true,
    sublink: [
      { name: "Audit", link: "/" },
      { name: "Manage", link: "/" },
      { name: "Secure", link: "/" },
      { name: "Automate", link: "/" },
      { name: "About", link: "/" },
    ],
  },
  {
    id: 3,
    name: "Secure",
    submenu: true,
    sublink: [
      { name: "Audit", link: "/" },
      { name: "Manage", link: "/" },
      { name: "Secure", link: "/" },
      { name: "Automate", link: "/" },
      { name: "About", link: "/" },
    ],
  },
  {
    id: 4,
    name: "Automate",
    submenu: true,
    sublink: [
      { name: "Audit", link: "/" },
      { name: "Manage", link: "/" },
      { name: "Secure", link: "/" },
      { name: "Automate", link: "/" },
      { name: "About", link: "/" },
    ],
  },
  {
    id: 5,
    name: "Resources",
    submenu: true,
    sublink: [
      { name: "Audit", link: "/" },
      { name: "Manage", link: "/" },
      { name: "Secure", link: "/" },
      { name: "Automate", link: "/" },
      { name: "About", link: "/" },
    ],
  },
  {
    id: 6,
    name: "About",
    submenu: true,
    sublink: [
      { name: "Audit", link: "/" },
      { name: "Manage", link: "/" },
      { name: "Secure", link: "/" },
      { name: "Automate", link: "/" },
      { name: "About", link: "/" },
    ],
  },
];

export const campaignDetailsList = [
  {
    id: 1,
    photo: image1,
    alt: "Feature Icon",
    heading: "Plug-n-plPlug-n-play configuration",
    content: "Secure your organization without changing all the settings.",
  },
  {
    id: 2,
    photo: image1,
    alt: "Feature Icon",
    heading: "Easy Integration",
    content: "Smooth Integrated with Microsoft Office 365",
  },
];

export const campaignFeaturesDetails = [
  {
    id: 1,
    photo: image2,
    alt: "Feature Icon with circle",
    heading: "Web Security",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.",
  },
  {
    id: 2,
    photo: image3,
    alt: "Feature Icon with circle",
    heading: "Email Security",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.",
  },
  {
    id: 2,
    photo: image4,
    alt: "Feature Icon with circle",
    heading: "Endpoint Security",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat",
  },
  {
    id: 4,
    photo: image5,
    alt: "Feature Icon with circle",
    heading: "Firewall & ADR",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat",
  },
];

export const servicesData = [
  {
    id: 1,
    icon: <IoMdMail size={50} />,
    title: "Email",
    contents:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae optio natus officiis nesciunt eum repellendus commodi aliquam aperiam odit, iure illo ab esse molestias recusandae beatae ipsam, laudantium cum at.",
    href: "#",
    linkText: "Learn more",
  },
  {
    id: 2,
    icon: <FaSms size={50} />,
    title: "SMS",
    contents:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae optio natus officiis nesciunt eum repellendus commodi aliquam aperiam odit, iure illo ab esse molestias recusandae beatae ipsam, laudantium cum at.",
    href: "/sms",
    linkText: "Learn more",
  },
  {
    id: 1,
    icon: <FaWpforms size={50} />,
    title: "Form",
    contents:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae optio natus officiis nesciunt eum repellendus commodi aliquam aperiam odit, iure illo ab esse molestias recusandae beatae ipsam, laudantium cum at.",
    href: "#",
    linkText: "Learn more",
  },
];

export const socialMediaLinks = [
  {
    id: 1,
    href: "#",
    photo: image6,
    alt: "facebook-icon",
  },
  {
    id: 2,
    href: "#",
    photo: image7,
    alt: "twitter-icon",
  },
  {
    id: 3,
    href: "#",
    photo: image8,
    alt: "linkedin-icon",
  },
  {
    id: 4,
    href: "#",
    photo: image9,
    alt: "instagram-icon",
  },
];

export const footerLinks = [
  {
    id: 1,
    title: "MailBlink",
    links: [
      { id: 1, link: "Get a demo", href: "#" },
      { id: 2, link: "Download", href: "#" },
    ],
  },
  {
    id: 2,
    title: "Products",
    links: [
      { id: 1, link: "Newsletter", href: "#" },
      { id: 2, link: "Email Marketing", href: "#" },
      { id: 3, link: "Automation", href: "#" },
      { id: 4, link: "Automation", href: "#" },
      { id: 5, link: "Templates", href: "#" },
    ],
  },
  {
    id: 3,
    title: "Resources",
    links: [
      { id: 1, link: "Blog", href: "#" },
      { id: 2, link: "Webiner", href: "#" },
      { id: 3, link: "Marketing Guides", href: "#" },
      { id: 4, link: "Prices", href: "#" },
      { id: 5, link: "Contact us", href: "#" },
    ],
  },
];

export const contacts = [
  {
    id: 1,
    photo: image10,
    alt: "Email-icon",
    title: "Support:",
    details: "hello@landify.co",
  },
  {
    id: 2,
    photo: image11,
    alt: "Mobile-icon",
    title: "General:",
    details: "+91 98765 43210",
  },
  {
    id: 3,
    photo: image12,
    alt: "Location-icon",
    title: "Lagos Office:",
    details: "772 Ikeja, Ave Lagos, NIG 91789",
  },
  {
    id: 4,
    photo: image12,
    alt: "Location-icon",
    title: "Enugu Office:",
    details: "772 Enugu Ave, NairaTriangle, NIG 91789",
  },
];
