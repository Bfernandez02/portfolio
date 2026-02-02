import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const links = {
  Github: "https://github.com/Bfernandez02",
  Linkedin: "https://linkedin.com/in/brandon-fernandez-624191255",
  Figma: "https://figma.com/@brandonfernande",
  Email: "mailto:bfernandezling@gmail.com",
  Facebook: "https://facebook.com/",
  Instagram: "https://www.instagram.com/brandon_fernandez02/",
};

export default function SocialMediaIcon({
  icon,
  textSize = "text-4xl",
  url = "Github",
  color = "text-primary",
}) {
  return (
    <Link
      href={links[url]}
      target="_blank"
      rel="noopener noreferrer"
      className={`${textSize} ${color} flex p-0 w-fit h-fit`}
    >
      <FontAwesomeIcon icon={icon} />
    </Link>
  );
}
