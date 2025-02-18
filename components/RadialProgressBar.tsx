import classNames from "classnames";
import React from "react";
type RadialProgressBarProps = {
  percentage: number;
  size: "big" | "small";
};
function RadialProgressBar({
  percentage,
  size = "small",
}: RadialProgressBarProps) {
  const dimensions = size === "small" ? "h-10 w-10" : "h-20 w-20";
  return (
    <div className="inline-flex items-center justify-center overflow-hidden rounded-full bg-black">
      <svg
        className={dimensions}
        viewBox="0 0 80 80"
        preserveAspectRatio="xMidYMid meet"
      >
        <circle
          className="text-white opacity-40"
          strokeWidth="5"
          stroke="currentColor"
          fill="transparent"
          r="30"
          cx="40"
          cy="40"
        />
        <circle
          className={"origin-center -rotate-90"}
          strokeWidth="5"
          strokeDasharray={30 * 2 * Math.PI}
          strokeDashoffset={30 * 2 * Math.PI * (1 - percentage / 100)}
          strokeLinecap="round"
          stroke={getColorCode(percentage)}
          fill="black"
          r="30"
          cx="40"
          cy="40"
        />
      </svg>
      <span
        className={classNames(
          "absolute font-semibold text-white",
          size === "small" ? " text-xs " : "text-3xl",
          percentage
            ? " mr-0.5 after:absolute after:top-[-3px] after:text-[.45rem] after:content-['%'] "
            : "",
        )}
      >
        {Math.round(percentage) || "N/A"}
      </span>
    </div>
  );
}

function getColorCode(percentage: number): string {
  if (percentage < 0 || percentage > 100) {
    throw new Error("Percentage must be between 0 and 100");
  }

  if (percentage < 40) {
    return "#d0225d";
  } else if (percentage < 70) {
    return "#d2d531";
  } else {
    return "#21d07a";
  }
}
export default RadialProgressBar;
