import React from "react";
type AccordionType = {
  title: string;
  pill?: number;
  open?: boolean;
  children: React.ReactNode;
};
const Accordion = ({ title, pill, open, children }: AccordionType) => {
  return (
    <details
      open={open}
      className="group flex w-full border-collapse rounded-lg border bg-white text-black shadow-md md:w-60"
    >
      <summary className="flex cursor-pointer list-none items-center justify-between p-3 font-medium">
        <span>{title}</span>
        {!!pill && (
          <span className="ml-auto mr-2 rounded-md border bg-neutral-200 px-1.5 text-sm font-thin">
            {pill}
          </span>
        )}
        <span className="mb-1 transition group-open:rotate-90">
          <svg
            fill="none"
            height="24"
            shapeRendering="geometricPrecision"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="M6 9l6 6-6 6"></path>
          </svg>
        </span>
      </summary>
      <hr />
      <div className="group-open:animate-fadeIn">{children}</div>
    </details>
  );
};

export default Accordion;
