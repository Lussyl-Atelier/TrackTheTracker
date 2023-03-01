export default function Frame3(props: Frame3Props) {
  return (
    <div className="w-5 h-5">
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1_479)">
          <path
            d="M 9.999 10.977 L 14.124 6.852 L 15.302 8.03 L 9.999 13.333 L 4.695 8.03 L 5.874 6.852 L 9.999 10.977 Z"
            fill="#CACACA"
           />
        </g>
        <defs>
          <clipPath id="clip0_1_479">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

Frame3.defaultProps = {};

interface Frame3Props {}

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
