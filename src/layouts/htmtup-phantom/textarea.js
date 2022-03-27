import React, { useState } from 'react';

const TextArea = ({ name, id, cols, placeholder, children }) => {
  const [textAreaHeight, setHeight] = useState(59);

  const textAreaStyle = {
    overflow: 'hidden',
    resize: 'none',
  };

  // Trim leading and trailing whitespace in textarea on focus change and ctrl-enter
  const trimElement = element => (element.value = element.value.trim());
  const trimOnCtrlEnter = event => {
    if (event.code === 'Enter' && event.ctrlKey) {
      event.preventDefault();
      event.stopPropagation();
      trimElement(event.target);
    }
  };

  // Auto-size the height of the textarea
  // FIXME: This is not shrinking when the field is cleared like the original does
  const setTextAreaHeight = event => {
    console.log(textAreaHeight, event.target, event.target.scrollHeight);
    setHeight(event.target.scrollHeight + 'px');
  };
  // Monitor events to resize
  // ['input', 'blur', 'focus'].forEach(eventName =>
  //   textarea.addEventListener(eventName, event => setHeight(event.target))
  // );

  return (
    <div className="textarea-wrapper">
      <textarea
        name={name}
        id={id}
        cols={cols}
        rows="1"
        placeholder={placeholder}
        style={{ ...textAreaStyle, height: textAreaHeight }}
        onKeyDown={trimOnCtrlEnter}
        // These are throwing error
        // onBlur={trimElement}
        // onFocus={trimElement}
        onInput={setTextAreaHeight}>
        {children}
      </textarea>
    </div>
  );
};

export default TextArea;
