import React, { useEffect, useState } from 'react'

const useCharacterCount = (initialText) => {
  const [text, setText] = useState(initialText);
  const [count, setCount] = useState(initialText.length);

  useEffect(() => {
    setCount(text.length);
  }, [text]);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return {text, count, handleTextChange};
}

export default useCharacterCount;