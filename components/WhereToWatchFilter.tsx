import React from "react";
import Accordion from "./Accordion";

const WhereToWatchFilter = () => {
  return (
    <Accordion title="Where To Watch" pill={52}>
      <div className="flex flex-col gap-2 p-3">
        <span className="font-thin">Soon™</span>
      </div>
    </Accordion>
  );
};

export default WhereToWatchFilter;
