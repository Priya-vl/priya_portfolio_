import { useEffect, useState } from "react";

const text = "Gesix GeoAI Intern";
const typingSpeed = 80;   // ms per character
const pauseAfterTyping = 3000; // 3 seconds

const TypingText = () => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    // Typing
    if (!isDeleting && index < text.length) {
      timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, typingSpeed);
    }

    // Pause after full text typed
    else if (!isDeleting && index === text.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseAfterTyping);
    }

    // Deleting
    else if (isDeleting && index > 0) {
      timeout = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
        setIndex(index - 1);
      }, typingSpeed / 2);
    }

    // Restart typing
    else if (isDeleting && index === 0) {
      setIsDeleting(false);
    }

    return () => clearTimeout(timeout);
  }, [index, isDeleting]);

  return (
    <h2 className="typing-text">
      {displayText}
      <span className="cursor">|</span>
    </h2>
  );
};

export default TypingText;
