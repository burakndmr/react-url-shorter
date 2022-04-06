import React from "react";
import { useCopyLink } from "../Hooks/useCopyLink";
const LinkItem = ({ link }) => {
  const [copied, copyToClipboard] = useCopyLink();

  return (
    <div>
      <div className="link-item-container">
        <div className="link-item-original">
          <p>{link.original_link}</p>
          <div className="link-item-short">
            <a href={link.full_short_link} target="_blank">
              {link.full_short_link}
            </a>
            <button onClick={() => copyToClipboard({ link })}>
              {copied ? "kopyalandı" : "kopyala"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkItem;
