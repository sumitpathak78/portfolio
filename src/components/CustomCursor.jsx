import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const cursorBorderRef = useRef(null);

  // Disable on mobile devices
  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 768px)").matches;

  if (isMobile) return null;

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorBorder = cursorBorderRef.current;

    // Center both elements
    gsap.set([cursor, cursorBorder], {
      xPercent: -50,
      yPercent: -50,
    });

    // Cursor dot follows instantly
    const xTo = gsap.quickTo(cursor, "x", {
      duration: 0.05,
      ease: "power1.out",
    });
    const yTo = gsap.quickTo(cursor, "y", {
      duration: 0.05,
      ease: "power1.out",
    });

    // Border follows smoothly
    const xToBorder = gsap.quickTo(cursorBorder, "x", {
      duration: 0.15,
      ease: "power2.out",
    });
    const yToBorder = gsap.quickTo(cursorBorder, "y", {
      duration: 0.15,
      ease: "power2.out",
    });

    const handleMouseMove = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
      xToBorder(e.clientX);
      yToBorder(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    const handleMouseDown = () => {
      gsap.to([cursor, cursorBorder], {
        scale: 0.8,
        duration: 0.2,
      });
    };

    const handleMouseUp = () => {
      gsap.to([cursor, cursorBorder], {
        scale: 1,
        duration: 0.2,
      });
    };

    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <>
      {/* Yellow Dot (Main Cursor) */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-[20px] h-[20px] bg-yellow-400 rounded-full pointer-events-none z-[9999] mix-blend-difference"
      />

      {/* White Border (Trailing Circle) */}
      <div
        ref={cursorBorderRef}
        className="fixed top-0 left-0 w-[45px] h-[45px] border border-white rounded-full pointer-events-none z-[9998] mix-blend-difference opacity-50"
      />
    </>
  );
};

export default CustomCursor;
