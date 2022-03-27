import React, { useState } from 'react';

const TextArea = ({ name, id, cols, placeholder, children }) => {
  const [height, setHeight] = useState(59);

  const textAreaStyle = {
    overflow: 'hidden',
    resize: 'none',
    height: height,
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
  return (
    <div className="textarea-wrapper">
      <textarea
        name={name}
        id={id}
        cols={cols}
        rows="1"
        placeholder={placeholder}
        style={textAreaStyle}
        onKeyDown={trimOnCtrlEnter}
        onBlur={trimElement}
        onFocus={trimElement}>
        {children}
      </textarea>
    </div>
  );
};

export default TextArea;
