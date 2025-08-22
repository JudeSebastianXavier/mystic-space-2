import { useState, useEffect, useRef } from 'react';

interface UseTypingEffectOptions {
  text: string;
  speed?: number;
  delay?: number;
  loop?: boolean;
  bidirectional?: boolean;
}

export function useTypingEffect({
  text,
  speed = 100,
  delay = 0,
  loop = false,
  bidirectional = false,
}: UseTypingEffectOptions) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const directionRef = useRef(1); // 1 for forward, -1 for backward

  useEffect(() => {
    if (!text) return;

    setIsTyping(true);
    setDisplayedText('');
    setCurrentIndex(0);
    directionRef.current = 1;

    const startDelay = setTimeout(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          if (bidirectional) {
            const newIndex = prevIndex + directionRef.current;
            
            if (directionRef.current === 1 && newIndex > text.length) {
              // Reached the end of forward phase, add delay before going backward
              if (loop) {
                // Pause the animation for 2 seconds, then continue
                setTimeout(() => {
                  directionRef.current = -1;
                }, 2000);
                return text.length;
              } else {
                clearInterval(interval);
                setIsTyping(false);
                return text.length;
              }
            } else if (directionRef.current === -1 && newIndex < 0) {
              // Reached the beginning, start going forward immediately
              if (loop) {
                directionRef.current = 1;
                return 0;
              } else {
                clearInterval(interval);
                setIsTyping(false);
                return 0;
              }
            }
            
            return newIndex;
          } else {
            // Unidirectional typing
            if (prevIndex >= text.length) {
              if (loop) {
                return 0;
              } else {
                clearInterval(interval);
                setIsTyping(false);
                return prevIndex;
              }
            }
            return prevIndex + 1;
          }
        });
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(startDelay);
  }, [text, speed, delay, loop, bidirectional]);

  useEffect(() => {
    setDisplayedText(text.slice(0, currentIndex));
  }, [currentIndex, text]);

  return {
    displayedText,
    isTyping,
    isComplete: currentIndex >= text.length,
  };
} 