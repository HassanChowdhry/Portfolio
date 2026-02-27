import logoImg from "./logo.svg";
import githubImg from "./github.png";
import menuImg from "./menu.svg";
import closeImg from "./close.svg";

import dalhousieImg from "./company/dalhousie.png";
import activisionImg from "./company/Activision.svg";
import upworkImg from "./company/upwork.png";
import ansysImg from "./company/ansys.jpg";
import botrImg from "./company/BOTR.jpg";
import icpcImg from "./company/icpc.png";

import pixisImg from "./projects/pixis.png";
import hassantreeImg from "./projects/hassantree.png";
import beatstreamImg from "./projects/beatstream.png";
import portfolioImg from "./projects/portfolio.png";
import leetbotImg from "./projects/leetbot.png";
import linksImg from "./projects/links.png";
import tweetImg from "./projects/tweet.png";
import podtext_aiImg from "./projects/podtext-ai.png";
import oldbailey_aiImg from "./projects/oldbailey.png";
import neurocode_aiImg from "./projects/neurocode.png";
import flappybirdImg from "./projects/flappybird.png";
import openllmImg from "./projects/openllm.png";
import deeprlImg from "./projects/deeprl.png";

import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaGoogleScholar } from "react-icons/fa6";

const unwrap = (img) => (typeof img === "object" && img !== null && img.src ? img.src : img);

export const logo = unwrap(logoImg);
export const github = unwrap(githubImg);
export const menu = unwrap(menuImg);
export const close = unwrap(closeImg);

export const dalhousie = unwrap(dalhousieImg);
export const activision = unwrap(activisionImg);
export const upwork = unwrap(upworkImg);
export const ansys = unwrap(ansysImg);
export const botr = unwrap(botrImg);
export const icpc = unwrap(icpcImg);

export const pixis = unwrap(pixisImg);
export const hassantree = unwrap(hassantreeImg);
export const beatstream = unwrap(beatstreamImg);
export const portfolio = unwrap(portfolioImg);
export const leetbot = unwrap(leetbotImg);
export const links = unwrap(linksImg);
export const tweet = unwrap(tweetImg);
export const podtext_ai = unwrap(podtext_aiImg);
export const oldbailey_ai = unwrap(oldbailey_aiImg);
export const neurocode_ai = unwrap(neurocode_aiImg);
export const flappybird = unwrap(flappybirdImg);
export const openllm = unwrap(openllmImg);
export const deeprl = unwrap(deeprlImg);

export const resume = "/resume.pdf";

export {
  FaLinkedin,
  FaGithub,
  FaGoogleScholar,
  SiLeetcode,
};
