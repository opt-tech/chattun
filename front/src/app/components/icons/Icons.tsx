import React from 'react';

interface IconProps {
  className?: string;
}
export const IconAddReaction = ({ className: additional }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 96 96"
      className={`chaticon ${additional}`}
      width="48"
    >
      <path d="M65.91,90.39A45.94,45.94,0,1,1,90.39,65.91" />
      <path d="M69,56.31a29.74,29.74,0,0,1-42.06,0" />
      <circle cx="31.5" cy="36.9" r="7" />
      <circle cx="64.5" cy="36.9" r="7" />
      <line x1="78.08" y1="92.61" x2="78.08" y2="64" />
      <line x1="63.78" y1="78.31" x2="92.39" y2="78.31" />
    </svg>
  );
};

export const IconSetting = ({ className: additional }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 96 96"
      className={`chaticon ${additional}`}
      width="48"
    >
      <path d="M10.31,56.36H6.18A4.18,4.18,0,0,1,2,52.18V43.82a4.18,4.18,0,0,1,4.18-4.18h4.13a4.09,4.09,0,0,0,3.92-2.73A33.66,33.66,0,0,1,16.28,32a4.1,4.1,0,0,0-.83-4.72l-2.92-2.92a4.16,4.16,0,0,1,0-5.91l5.92-5.92a4.16,4.16,0,0,1,5.91,0l2.92,2.92a4.1,4.1,0,0,0,4.72.83,33.66,33.66,0,0,1,4.91-2.05,4.09,4.09,0,0,0,2.73-3.92V6.18A4.18,4.18,0,0,1,43.82,2h8.36a4.18,4.18,0,0,1,4.18,4.18v4.13a4.09,4.09,0,0,0,2.73,3.92A33.66,33.66,0,0,1,64,16.28a4.1,4.1,0,0,0,4.72-.83l2.92-2.92a4.16,4.16,0,0,1,5.91,0l5.92,5.92a4.16,4.16,0,0,1,0,5.91l-2.92,2.92A4.1,4.1,0,0,0,79.72,32a33.66,33.66,0,0,1,2,4.91,4.09,4.09,0,0,0,3.92,2.73h4.13A4.18,4.18,0,0,1,94,43.82v8.36a4.18,4.18,0,0,1-4.18,4.18H85.69a4.09,4.09,0,0,0-3.92,2.73,33.66,33.66,0,0,1-2,4.91,4.1,4.1,0,0,0,.83,4.72l2.92,2.92a4.16,4.16,0,0,1,0,5.91l-5.92,5.92a4.16,4.16,0,0,1-5.91,0l-2.92-2.92A4.1,4.1,0,0,0,64,79.72a33.66,33.66,0,0,1-4.91,2,4.09,4.09,0,0,0-2.73,3.92v4.13A4.18,4.18,0,0,1,52.18,94H43.82a4.18,4.18,0,0,1-4.18-4.18V85.69a4.09,4.09,0,0,0-2.73-3.92,33.66,33.66,0,0,1-4.91-2,4.1,4.1,0,0,0-4.72.83l-2.92,2.92a4.16,4.16,0,0,1-5.91,0l-5.92-5.92a4.16,4.16,0,0,1,0-5.91l2.92-2.92A4.1,4.1,0,0,0,16.28,64a33.66,33.66,0,0,1-2.05-4.91A4.09,4.09,0,0,0,10.31,56.36Z" />
      <circle cx="48" cy="48" r="16.73" />
    </svg>
  );
};

export const IconThread = ({ className: additional }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 96 96"
      className={`chaticon ${additional}`}
      width="48"
    >
      <path d="M48.71,57.8,34,62l4.67-14A29.51,29.51,0,0,1,34,32,30,30,0,1,1,48.71,57.8Z" />
      <line x1="49.65" y1="24.48" x2="78.35" y2="24.48" />
      <line x1="49.65" y1="33.3" x2="78.35" y2="33.3" />
      <line x1="49.65" y1="42.13" x2="78.35" y2="42.13" />
      <path d="M20.32,36.36A30,30,0,0,0,32,94a31.1,31.1,0,0,0,4.12-.28,30.25,30.25,0,0,0,3.94-.82,29,29,0,0,0,3.74-1.32,29.35,29.35,0,0,0,3.49-1.78l3.68,1,3.67,1.05,3.68,1L62,94l-1.17-3.5L59.67,87l-1.17-3.5L57.33,80a29.49,29.49,0,0,0,3.45-7.53" />
      <line x1="27.65" y1="56.48" x2="17.65" y2="56.48" />
      <line x1="25.65" y1="65.3" x2="17.65" y2="65.3" />
      <line x1="46.35" y1="74.13" x2="17.65" y2="74.13" />
    </svg>
  );
};

export const IconOpenSlack = ({ className: additional }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 96 96"
      className={`chaticon ${additional}`}
      width="48"
    >
      <path d="M91.91,83v9A1.9,1.9,0,0,1,90,94H71.91A1.9,1.9,0,0,1,70,92.09V74a1.9,1.9,0,0,1,1.91-1.9h9" />
      <line x1="87.74" y1="70" x2="94" y2="70" />
      <line x1="94" y1="76.26" x2="94" y2="70" />
      <line x1="82.52" y1="81.48" x2="94" y2="70" />
      <path d="M8.78,57.19a6.79,6.79,0,0,1,0-13.57h6.78v6.79A6.79,6.79,0,0,1,8.78,57.19Z" />
      <path d="M29.59,78a6.79,6.79,0,0,1-6.78-6.78V50.41a6.78,6.78,0,1,1,13.56,0V71.22A6.79,6.79,0,0,1,29.59,78Z" />
      <path d="M36.37,15.56H29.59a6.78,6.78,0,1,1,6.78-6.78Z" />
      <path d="M29.59,36.37H8.78a6.78,6.78,0,0,1,0-13.56H29.59a6.78,6.78,0,0,1,0,13.56Z" />
      <path d="M71.22,36.38H64.44V29.59a6.78,6.78,0,1,1,6.78,6.79Z" />
      <path d="M50.41,36.38a6.79,6.79,0,0,1-6.78-6.79V8.78a6.78,6.78,0,0,1,13.56,0V29.59A6.8,6.8,0,0,1,50.41,36.38Z" />
      <path d="M50.41,78a6.79,6.79,0,0,1-6.78-6.78V64.44h6.78a6.78,6.78,0,0,1,0,13.56Z" />
      <path d="M71.22,57.19H50.41a6.78,6.78,0,1,1,0-13.56H71.22a6.78,6.78,0,1,1,0,13.56Z" />
    </svg>
  );
};

export const IconArrow = ({ className: additional }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 96 52"
      className={`chaticon ${additional}`}
      width="48"
    >
      <polyline points="94 50 48 2 2 50" />
    </svg>
  );
};

export const IconCheck = ({ className: additional }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 96 68"
      className={`chaticon ${additional}`}
      width="48"
    >
      <polyline points="2 34 38 66 94 2" />
    </svg>
  );
};
