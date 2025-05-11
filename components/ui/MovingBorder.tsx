"use client";
import React from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useRef } from "react"; // No change to imports needed for this
import '../styles/MovingBorder.scss';


export function Button({
  borderRadius = "1.75rem",
  children,
  as: Component = "button",
  containerClassName,
  borderClassName,
  duration,
  className,
  ...otherProps
}: {
  borderRadius?: string;
  children: React.ReactNode;
  as?: any;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  className?: string;
  [key: string]: any;
}) {
  return (
    <Component
      className="moving-button"
      style={{
        borderRadius: borderRadius,
      }}
      {...otherProps}
    >
      <div
        className="moving-button__border-container"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }} // Inner container for path
      >
        <MovingBorder duration={duration} rx={borderRadius} ry={borderRadius}> {/* Use borderRadius for rx/ry */}
          <div className={`moving-button__border ${borderClassName || ''}`.trim()} /> {/* Apply borderClassName */}
        </MovingBorder>
      </div>

      <div
        className= "moving-button__content"
      >
        {children}
      </div>
    </Component>
  );
}

export const MovingBorder = ({
  children,
  duration = 2000,
  rx,
  ry,
  ...otherProps
}: {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
  [key: string]: any;
}) => {
  const pathRef = useRef<any>();
  const progress = useMotionValue<number>(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMillisecond = length / duration;
      progress.set((time * pxPerMillisecond) % length);
    }
  });

  const x = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).x
  );
  const y = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).y
  );

  // Create a motion value for the angle
  const angle = useMotionValue(0);

  // Update useAnimationFrame to calculate and set the angle
  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const currentProgress = (time * (length / duration)) % length;
      progress.set(currentProgress); // Update progress for x and y

      // Calculate angle
      const p1 = pathRef.current.getPointAtLength(currentProgress);
      // Get a point slightly ahead to determine tangent, handle path end
      const delta = 0.1; // Small delta for tangent calculation
      let p2Val = currentProgress + delta;
      if (p2Val > length) { 
        // If at the end, use a point before to get the tangent of the last segment
        // This keeps the angle consistent with the segment it's on
        p2Val = currentProgress - delta; 
        const p2 = pathRef.current.getPointAtLength(Math.max(0, p2Val));
        angle.set(Math.atan2(p1.y - p2.y, p1.x - p2.x)); // Angle from p2 to p1
      } else {
        const p2 = pathRef.current.getPointAtLength(p2Val);
        angle.set(Math.atan2(p2.y - p1.y, p2.x - p1.x)); // Angle from p1 to p2
      }
    }
  });

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%) rotate(${angle}rad)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="moving-border__svg"
        width="100%"
        height="100%"
        {...otherProps}
      >
        <rect
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          ref={pathRef}
        />
      </svg>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};
