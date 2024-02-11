import React from "react";
type Props = {
  className?: string;
  color?: string;
};
const Arrow = (props: Props) => {
  return (
    <svg
      className={props.className}
      width="12"
      height="11"
      viewBox="0 0 12 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.48942 0.806945C7.10666 0.408812 6.47362 0.396353 6.07549 0.779118C5.67735 1.16188 5.66489 1.79492 6.04766 2.19306L8.26555 4.5H1C0.447715 4.5 0 4.94772 0 5.5C0 6.05229 0.447715 6.5 1 6.5H8.26555L6.04766 8.80694C5.66489 9.20508 5.67735 9.83812 6.07549 10.2209C6.47362 10.6036 7.10666 10.5912 7.48942 10.1931L11.335 6.19306L12.0013 5.5L11.335 4.80694L7.48942 0.806945Z"
        fill={props.color ? props.color : "white"}
      />
    </svg>
  );
};
export { Arrow };
