import React from "react";

const CompactHeroMotif = () => (
  <div
    className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-40 md:h-48 lg:hidden"
    aria-hidden="true"
  >
    <span className="absolute -right-12 -top-10 h-32 w-32 rounded-full bg-[#F1E2AC]/30 md:-right-8 md:-top-14 md:h-40 md:w-40" />
    <span className="absolute -left-8 -bottom-4 h-28 w-28 rounded-full bg-[#E3E9DA]/30 md:h-32 md:w-32" />
  </div>
);

const HeroIllustration = ({ compact = false }) => {
  if (compact) {
    return <CompactHeroMotif />;
  }

  return (
    <div className="relative hidden min-h-[520px] lg:block" aria-hidden="true">
      <svg
        viewBox="0 0 520 560"
        className="absolute inset-0 h-full w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="414" cy="108" r="84" fill="#F1E2AC" fillOpacity="0.72" />
        <circle cx="91" cy="459" r="80" fill="#E3E9DA" />

        <path
          d="M22 183C107 105 218 84 321 119C392 143 453 195 500 267"
          stroke="#D8CFC0"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="2 13"
        />
        <path
          d="M43 167C114 126 191 112 263 124"
          stroke="#E6DDCF"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        <path
          d="M66 363C66 263 141 199 247 199H276C378 199 445 258 445 346C445 438 372 493 269 493H213L139 530L159 477C101 454 66 415 66 363Z"
          fill="#FFFDF8"
          stroke="#97AA92"
          strokeWidth="3"
        />

        <path
          d="M145 304C186 287 232 289 280 304"
          stroke="#748A94"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <path
          d="M139 351C192 370 253 365 320 341"
          stroke="#9DB79A"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <path
          d="M154 399C217 378 281 384 350 410"
          stroke="#E8C95F"
          strokeWidth="8"
          strokeLinecap="round"
        />

        <path
          d="M274 489C270 435 286 398 302 362C321 320 309 286 327 246C343 210 373 183 372 138"
          stroke="#78967E"
          strokeWidth="7"
          strokeLinecap="round"
        />
        <path
          d="M310 335C292 308 296 282 322 258C339 286 335 311 310 335Z"
          fill="#9DB79A"
        />
        <path
          d="M337 271C340 239 358 220 390 215C386 246 369 265 337 271Z"
          fill="#F0D779"
        />
        <path
          d="M365 221C342 201 338 177 351 149C375 170 379 194 365 221Z"
          fill="#A9C8C0"
        />

        <circle cx="372" cy="126" r="10" fill="#78967E" />
        <circle cx="401" cy="151" r="5.5" fill="#FFFDF8" />
        <circle cx="345" cy="111" r="4.5" fill="#E8C95F" />

        <path
          d="M93 235H142"
          stroke="#97AA92"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M104 251H130"
          stroke="#E6DDCF"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M418 181H469"
          stroke="#FFFDF8"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M446 197H478"
          stroke="#9DB79A"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default HeroIllustration;
