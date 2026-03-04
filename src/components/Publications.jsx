"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { styles } from "../style";
import { publications as fallbackPublications } from "../constants";
import { SectionWrapper } from "../hoc";
import { Wrapper } from "./Wrapper";

const DocumentIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-4 h-4 shrink-0 mt-[3px] text-secondary"
  >
    <path d="M3 3.5A1.5 1.5 0 014.5 2h6.879a1.5 1.5 0 011.06.44l3.122 3.12A1.5 1.5 0 0116 6.622V16.5a1.5 1.5 0 01-1.5 1.5h-10A1.5 1.5 0 013 16.5v-13z" />
  </svg>
);

const CiteModal = ({ citation, onClose }) => (
  <AnimatePresence>
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        className="relative bg-[#1d1836] border border-white/10 rounded-xl p-6 max-w-lg w-full shadow-2xl"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ type: "spring", duration: 0.3 }}
      >
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-white text-[16px] font-semibold">BibTeX Citation</h4>
          <button onClick={onClose} className="text-secondary hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
            </svg>
          </button>
        </div>
        <pre className="bg-black/40 rounded-lg p-4 text-[13px] text-[#c4a6ff] font-mono whitespace-pre-wrap break-all overflow-y-auto max-h-[300px] leading-relaxed">
          {citation}
        </pre>
        <button
          onClick={() => {
            navigator.clipboard.writeText(citation);
            onClose();
          }}
          className="mt-4 w-full py-2.5 bg-[#915eff] hover:bg-[#7a4de0] text-white text-[14px] font-medium rounded-lg transition-colors"
        >
          Copy to Clipboard
        </button>
      </motion.div>
    </motion.div>
  </AnimatePresence>
);

const PublicationCard = ({ index, title, authors, venue, year, url, citation, tags }) => {
  const [showCite, setShowCite] = useState(false);

  return (
    <Wrapper index={index} fade="up" type="spring">
      <div className="bg-tertiary rounded-2xl p-6 relative overflow-hidden group hover:bg-[#1f1a3d] transition-colors duration-300">
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#915eff] to-[#6b3fa0] rounded-l-2xl" />

        <div className="flex gap-3">
          <DocumentIcon />
          <div className="min-w-0">
            <p className="text-secondary text-[14px] leading-relaxed">
              {authors}
              {year && <span> ({year})</span>}.{" "}
              {url ? (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#7b93db] hover:text-[#a5b8f0] transition-colors"
                >
                  {title}
                </a>
              ) : (
                <span className="text-white">{title}</span>
              )}
              .{" "}
              {venue && <em>{venue}</em>}
              {venue && "."}
            </p>

            {tags?.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag.name}
                    className={`text-[12px] font-medium ${tag.color || "blue-text-gradient"}`}
                  >
                    #{tag.name}
                  </span>
                ))}
              </div>
            )}

            <div className="mt-3 flex gap-2">
              {citation && (
                <button
                  onClick={() => setShowCite(true)}
                  className="px-3 py-1 text-[12px] font-medium rounded-md border border-white/15 text-secondary hover:text-white hover:border-white/30 transition-colors"
                >
                  Cite
                </button>
              )}
              {url && (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 text-[12px] font-medium rounded-md border border-white/15 text-secondary hover:text-white hover:border-white/30 transition-colors"
                >
                  URL
                </a>
              )}
            </div>
          </div>
        </div>

        {showCite && <CiteModal citation={citation} onClose={() => setShowCite(false)} />}
      </div>
    </Wrapper>
  );
};

const Publications = ({ publications: cmsPublications }) => {
  const resolvedPublications = cmsPublications?.length
    ? cmsPublications
    : fallbackPublications;

  if (!resolvedPublications?.length) return null;

  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>Research</p>
        <h2 className={styles.sectionHeadText}>Publications</h2>
      </motion.div>

      <div className="mt-4">
        <motion.p className="text-secondary text-[17px] max-w-3xl leading-[30px]">
          Peer-reviewed papers and preprints.
        </motion.p>
      </div>

      <div className="mt-16 flex flex-col gap-5">
        {resolvedPublications.map((pub, index) => (
          <PublicationCard key={`publication-${index}`} index={index} {...pub} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Publications, "publications");
