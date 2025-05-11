"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
// import { cn } from "@/lib/utils"; // cn is no longer used directly here
import "./../styles/TextGenerateEffect.scss"; // Adjusted path

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="text-generate-effect-word" // Replaced Tailwind classes
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={`text-generate-effect-root ${className || ''}`.trim()}>
      <div className="text-generate-effect-words-container"> {/* Replaced mt-4 */}
        <div className="text-generate-effect-words-wrapper"> {/* Replaced Tailwind classes */}
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
