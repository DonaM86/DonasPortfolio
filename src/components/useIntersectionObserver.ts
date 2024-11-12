// import { useEffect, useState, useRef } from "react";

// export function useIntersectionObserver(
//   options: IntersectionObserverInit = {}
// ) {
//   const [isIntersecting, setIsIntersecting] = useState<boolean>(false);
//   const ref = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsIntersecting(entry.isIntersecting);
//       },
//       options
//     );

//     if (ref.current) {
//       observer.observe(ref.current);
//     }

//     return () => {
//       if (ref.current) {
//         observer.unobserve(ref.current);
//       }
//     };
//   }, [options]);

//   return { ref, isIntersecting };
// }
