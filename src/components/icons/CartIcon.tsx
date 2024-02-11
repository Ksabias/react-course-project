import React from "react";
type Props = {
  className?: string;
};
const CartIcon = (props: Props) => {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <g clipPath="url(#clip0_250_85)">
        <path
          d="M21.9375 17.875H8.9375C8.76954 17.8743 8.60592 17.8216 8.46915 17.7241C8.33237 17.6267 8.22918 17.4892 8.17375 17.3306L3.48563 4.0625H0.8125C0.597012 4.0625 0.390349 3.9769 0.237976 3.82452C0.0856024 3.67215 0 3.46549 0 3.25C0 3.03451 0.0856024 2.82785 0.237976 2.67548C0.390349 2.5231 0.597012 2.4375 0.8125 2.4375H4.0625C4.23046 2.43817 4.39408 2.49087 4.53085 2.58836C4.66763 2.68585 4.77082 2.82332 4.82625 2.98188L9.51437 16.25H21.3525L24.4156 7.0525C24.4498 6.95114 24.5035 6.85749 24.5739 6.77691C24.6442 6.69633 24.7297 6.63039 24.8256 6.58285C24.9214 6.53532 25.0256 6.50713 25.1323 6.49988C25.239 6.49264 25.3461 6.50648 25.4475 6.54063C25.5489 6.57477 25.6425 6.62854 25.7231 6.69888C25.8037 6.76921 25.8696 6.85473 25.9171 6.95055C25.9647 7.04637 25.9929 7.15061 26.0001 7.25732C26.0074 7.36404 25.9935 7.47114 25.9594 7.5725L22.7094 17.3225C22.6549 17.4839 22.551 17.624 22.4125 17.7232C22.274 17.8223 22.1078 17.8754 21.9375 17.875Z"
          fill="black"
        />
        <path
          d="M22.75 8.125H8.125C7.90951 8.125 7.70285 8.0394 7.55048 7.88702C7.3981 7.73465 7.3125 7.52799 7.3125 7.3125C7.3125 7.09701 7.3981 6.89035 7.55048 6.73798C7.70285 6.5856 7.90951 6.5 8.125 6.5H22.75C22.9655 6.5 23.1722 6.5856 23.3245 6.73798C23.4769 6.89035 23.5625 7.09701 23.5625 7.3125C23.5625 7.52799 23.4769 7.73465 23.3245 7.88702C23.1722 8.0394 22.9655 8.125 22.75 8.125Z"
          fill="black"
        />
        <path
          d="M21.125 11.375H9.75C9.53451 11.375 9.32785 11.2894 9.17548 11.137C9.0231 10.9847 8.9375 10.778 8.9375 10.5625C8.9375 10.347 9.0231 10.1403 9.17548 9.98798C9.32785 9.8356 9.53451 9.75 9.75 9.75H21.125C21.3405 9.75 21.5472 9.8356 21.6995 9.98798C21.8519 10.1403 21.9375 10.347 21.9375 10.5625C21.9375 10.778 21.8519 10.9847 21.6995 11.137C21.5472 11.2894 21.3405 11.375 21.125 11.375Z"
          fill="black"
        />
        <path
          d="M20.3125 14.625H10.5625C10.347 14.625 10.1403 14.5394 9.98798 14.387C9.8356 14.2347 9.75 14.028 9.75 13.8125C9.75 13.597 9.8356 13.3903 9.98798 13.238C10.1403 13.0856 10.347 13 10.5625 13H20.3125C20.528 13 20.7347 13.0856 20.887 13.238C21.0394 13.3903 21.125 13.597 21.125 13.8125C21.125 14.028 21.0394 14.2347 20.887 14.387C20.7347 14.5394 20.528 14.625 20.3125 14.625Z"
          fill="black"
        />
        <path
          d="M20.3125 23.5625C19.8304 23.5625 19.3591 23.4195 18.9583 23.1517C18.5575 22.8839 18.245 22.5032 18.0605 22.0578C17.8761 21.6124 17.8278 21.1223 17.9218 20.6495C18.0159 20.1766 18.248 19.7423 18.5889 19.4014C18.9298 19.0605 19.3641 18.8284 19.837 18.7343C20.3098 18.6403 20.7999 18.6886 21.2453 18.873C21.6907 19.0575 22.0714 19.37 22.3392 19.7708C22.607 20.1716 22.75 20.6429 22.75 21.125C22.75 21.7715 22.4932 22.3915 22.0361 22.8486C21.579 23.3057 20.959 23.5625 20.3125 23.5625ZM20.3125 20.3125C20.1518 20.3125 19.9947 20.3602 19.8611 20.4494C19.7275 20.5387 19.6233 20.6656 19.5618 20.8141C19.5004 20.9625 19.4843 21.1259 19.5156 21.2835C19.547 21.4411 19.6243 21.5859 19.738 21.6995C19.8516 21.8132 19.9964 21.8905 20.154 21.9219C20.3116 21.9532 20.475 21.9372 20.6234 21.8757C20.7719 21.8142 20.8988 21.71 20.9881 21.5764C21.0773 21.4428 21.125 21.2857 21.125 21.125C21.125 20.9095 21.0394 20.7028 20.887 20.5505C20.7347 20.3981 20.528 20.3125 20.3125 20.3125Z"
          fill="black"
        />
        <path
          d="M10.5625 23.5625C10.0804 23.5625 9.60914 23.4195 9.2083 23.1517C8.80745 22.8839 8.49503 22.5032 8.31054 22.0578C8.12606 21.6124 8.07779 21.1223 8.17184 20.6495C8.26589 20.1766 8.49804 19.7423 8.83893 19.4014C9.17982 19.0605 9.61414 18.8284 10.087 18.7343C10.5598 18.6403 11.0499 18.6886 11.4953 18.873C11.9407 19.0575 12.3214 19.37 12.5892 19.7708C12.857 20.1716 13 20.6429 13 21.125C13 21.7715 12.7432 22.3915 12.2861 22.8486C11.829 23.3057 11.209 23.5625 10.5625 23.5625ZM10.5625 20.3125C10.4018 20.3125 10.2447 20.3602 10.1111 20.4494C9.97749 20.5387 9.87335 20.6656 9.81185 20.8141C9.75035 20.9625 9.73426 21.1259 9.76561 21.2835C9.79696 21.4411 9.87435 21.5859 9.98798 21.6995C10.1016 21.8132 10.2464 21.8905 10.404 21.9219C10.5616 21.9532 10.725 21.9372 10.8734 21.8757C11.0219 21.8142 11.1488 21.71 11.2381 21.5764C11.3273 21.4428 11.375 21.2857 11.375 21.125C11.375 20.9095 11.2894 20.7028 11.137 20.5505C10.9847 20.3981 10.778 20.3125 10.5625 20.3125Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_250_85">
          <rect width="26" height="26" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default CartIcon;