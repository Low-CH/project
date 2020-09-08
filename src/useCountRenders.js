import { useRef } from "react";
export const useCountRenders = (type = "default") => {
  const renders = useRef(0);
  console.log(`type: ${type} renders: ${renders.current++}`);
};
