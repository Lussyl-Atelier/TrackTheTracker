export default function Frame1(props: Frame1Props) {
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
        <g clipPath="url(#clip0_1_419)">
          <path
            d="M 12.997 16.172 L 18.361 10.808 L 19.775 12.222 L 11.997 20 L 4.219 12.222 L 5.633 10.808 L 10.997 16.172 V 4 H 12.997 V 16.172 Z"
            fill="#90DF9E"
           />
        </g>
        <defs>
          <clipPath id="clip0_1_419">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

Frame1.defaultProps = {};

interface Frame1Props {}

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
