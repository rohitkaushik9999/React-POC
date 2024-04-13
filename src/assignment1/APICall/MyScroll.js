import { useState } from "react";

export const MyScroll = (start = 25, pace = 2) => {
  const [limit, setLimit] = useState(start);

  window.onscroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.offsetHeight
    ) {
      setLimit(limit + pace);
    }
  };
  return limit;
};

// window.onscroll = () => {
//   if (
//     window.innerHeight + document.documentElement.scrollTop + 1 >=
//     document.documentElement.offsetHeight
//   ) {
//     setLimit(limit + pace);
//   }
// };
