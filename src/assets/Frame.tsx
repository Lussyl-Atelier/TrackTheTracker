export default function Frame(props: FrameProps) {
  return (
    <div className="w-6 h-6">
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1_412)">
          <path
            d="M 12.997 7.828 V 20 H 10.997 V 7.828 L 5.633 13.192 L 4.219 11.778 L 11.997 4 L 19.775 11.778 L 18.361 13.192 L 12.997 7.828 Z"
            fill="#E95D5C"
           />
        </g>
        <defs>
          <clipPath id="clip0_1_412">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

Frame.defaultProps = {};

interface FrameProps {}

/**
 * This component was generated from Figma with FireJet.
 * Learn more at https://www.firejet.io
 *
 * README:
 * The output code may look slightly different when copied to your codebase. To fix this:
 * 1. Include the necessary fonts. The required fonts are imported from public/index.html
 * 2. Include the global styles. They can be found in App.css
 *
 * Note: Step 2 is not required for tailwind.css output
 */
