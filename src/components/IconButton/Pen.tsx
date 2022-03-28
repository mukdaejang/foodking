import { SVGProps } from 'react';

const Pen = ({ width, height, fill, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="svg3300"
    viewBox="0 0 128.14 288.54"
    version="1.0"
    width={width}
    height={height}
    {...props}
  >
    <g id="layer1" transform="translate(-321.19 -330.24)">
      <g
        id="g3292"
        strokeLinejoin="round"
        stroke="#000"
        strokeLinecap="round"
        transform="matrix(.92668 .37585 -.37585 .92668 341.08 -494.58)"
      >
        <path
          id="path3274"
          strokeWidth="1.5995"
          fill={fill}
          d="m384.8 787.87l1.84 210.73 13.83 39.6 16.05-40.31-0.88-213.03c-10.98 1.35-21.74 2.6-30.84 3.01z"
        />
        <path
          id="path3278"
          fill={fill}
          d="m395.5 1022.7c3.85-2.7 6.58-2.4 10.36 0.2"
        />
        <path
          id="path2488"
          strokeWidth="1.6"
          fill={fill}
          d="m384.94 756.76v-17.77c4.89-10.99 24.78-12.69 30.38-0.92l-0.32 17.97c-7.06 2.98-17.85 4.27-30.06 0.72z"
        />
        <path
          id="path2486"
          strokeWidth="1.8065"
          fill={fill}
          d="m384.73 792.05v-36.49c9.33-2.35 18.35-5.56 30.51 0l0.65 36.49c-12.67-2.86-22.37-1.32-31.16 0z"
        />
        <path
          id="path3268"
          strokeWidth=".79049"
          fill={fill}
          d="m384.83 768.97c9.63-2.42 18.45-2.7 30.04-0.71l0.38 6.22c-9.96-2.61-19.96-2.02-30.42 0.03v-5.54z"
        />
        <path
          id="path3290"
          transform="translate(108.22 729.44)"
          fill="none"
          d="m278.38 267.38c8.63-6.3 18.13-8.98 29.59-0.19"
        />
      </g>
    </g>
  </svg>
);

export default Pen;
