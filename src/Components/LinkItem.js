import React from "react";

const LinkItem = ({ link }) => {
  return (
    <div>
      <div className="link-item-container">
        <div className="link-item-original">
          <p>{link.original_link}</p>
          <div className="link-item-short">
            <a href={link.full_short_link} target="_blank">
              {link.full_short_link}
            </a>
            <button>CUSTOM_BUTTON</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkItem;
