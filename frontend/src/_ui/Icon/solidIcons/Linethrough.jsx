import React from 'react';

const Linethrough = ({ fill = '#C1C8CD', width = '25', className = '', viewBox = '0 0 25 25' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={width} viewBox="0 0 11 10" fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.6875 1.20801C4.58376 1.20801 3.79167 1.97927 3.79167 2.81217C3.79167 3.18634 3.95151 3.54806 4.22765 3.83301H3.1589C3.00393 3.52535 2.91667 3.18105 2.91667 2.81217C2.91667 1.38992 4.21391 0.333008 5.6875 0.333008C7.16109 0.333008 8.45833 1.38992 8.45833 2.81217C8.45833 3.0538 8.26246 3.24967 8.02083 3.24967C7.77921 3.24967 7.58333 3.0538 7.58333 2.81217C7.58333 1.97927 6.79124 1.20801 5.6875 1.20801ZM5.6875 5.29134H0.4375C0.195875 5.29134 0 5.09547 0 4.85384C0 4.61222 0.195875 4.41634 0.4375 4.41634H5.6875H9.77083C10.0125 4.41634 10.2083 4.61222 10.2083 4.85384C10.2083 5.09547 10.0125 5.29134 9.77083 5.29134H7.80239C8.20801 5.71649 8.45833 6.27075 8.45833 6.89551C8.45833 8.31776 7.16109 9.37467 5.6875 9.37467C4.21391 9.37467 2.91667 8.31776 2.91667 6.89551C2.91667 6.65388 3.11254 6.45801 3.35417 6.45801C3.59579 6.45801 3.79167 6.65388 3.79167 6.89551C3.79167 7.72842 4.58376 8.49967 5.6875 8.49967C6.79124 8.49967 7.58333 7.72842 7.58333 6.89551C7.58333 6.0626 6.79124 5.29134 5.6875 5.29134Z"
      fill={fill}
    />
  </svg>
);

export default Linethrough;