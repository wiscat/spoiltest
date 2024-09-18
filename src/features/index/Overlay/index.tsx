export const Overlay = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      <div className="absolute top-0 left-0 bg-main_page_color w-full h-full" />
      <div className="absolute top-0 left-0 bg-gradient-to-b from-main_bg_color to-main_page_color w-full h-[23rem]" />
      <div className="absolute top-0 left-0 w-full h-full flex flex-row justify-center">
        <svg
          width="883"
          height="931"
          viewBox="0 0 883 931"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          className="w-[88.3rem] h-[93.1rem] top-[5rem] aspect-square object-none"
        >
          <g filter="url(#filter0_f_1_3)">
            <path
              d="M712.258 341.5C712.258 423.514 645.772 490 563.758 490C481.744 490 415.258 423.514 415.258 341.5C415.258 259.486 481.744 193 563.758 193C645.772 193 712.258 259.486 712.258 341.5Z"
              fill="#FFE600"
              fillOpacity="0.2"
            />
            <path
              d="M508.477 591.239C508.477 684.707 432.707 760.477 339.239 760.477C245.771 760.477 170 684.707 170 591.239C170 497.771 245.771 422 339.239 422C432.707 422 508.477 497.771 508.477 591.239Z"
              fill="#FF9900"
              fillOpacity="0.3"
            />
            <path
              d="M488.258 318.5C488.258 400.514 421.772 467 339.758 467C257.744 467 191.258 400.514 191.258 318.5C191.258 236.486 257.744 170 339.758 170C421.772 170 488.258 236.486 488.258 318.5Z"
              fill="#FFEBD3"
              fillOpacity="0.3"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_1_3"
              x="0"
              y="0"
              width="882.258"
              height="930.477"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="85"
                result="effect1_foregroundBlur_1_3"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
};
