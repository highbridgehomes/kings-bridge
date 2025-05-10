import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const Counter = ({ target }: { target: number }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (!inView) return;

    const steps = 100;
    const increment = Math.max(1, Math.ceil(target / steps));
    let currentCount = 0;

    const interval = setInterval(() => {
      currentCount += increment;
      if (currentCount >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(currentCount);
      }
    }, 10);

    return () => clearInterval(interval);
  }, [inView, target]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
};

export default Counter;
