import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaGoogleScholar } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const iconMap = {
  FaLinkedin,
  FaGithub,
  FaGoogleScholar,
  SiLeetcode,
};

export function getIcon(name) {
  return iconMap[name] || null;
}
