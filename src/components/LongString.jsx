import { useEffect, useRef, useState } from "react";

export function LongString({ content }) {
  const [isOverflowing, setIsOverflowing] = useState(false);
  const widthRef = useRef(null);

  const handleElapses = () => {
    const el = widthRef.current;
    el.classList.remove("overflow-hidden", "whitespace-nowrap");
    setIsOverflowing(false);
  };

  useEffect(() => {
    const el = widthRef.current;
    if (el.offsetWidth < el.scrollWidth) {
      setIsOverflowing(true);
    }
  }, []);

  return (
    <div className="flex items-baseline">
      <p
        className="overflow-hidden whitespace-nowrap"
        ref={widthRef}
      >
        {content}
      </p>&nbsp;
      {isOverflowing
        ? (
          <button
            className="underline text-sm"
            type="button"
            onClick={handleElapses}
          >...
          </button>
        )
        : null}
    </div>
  );
}
