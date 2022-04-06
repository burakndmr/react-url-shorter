import React, { useState, useEffect } from "react";
import copy from "copy-to-clipboard";
export const useCopyLink = () => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let timeout;

    if (copied) {
      timeout = setTimeout(() => {
        setCopied(false);
      }, 3000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [copied]);

  const copyToClipboard = ({ link }) => {
    setCopied(true);
    copy(link.full_short_link);
  };

  return [copied, copyToClipboard];
};
