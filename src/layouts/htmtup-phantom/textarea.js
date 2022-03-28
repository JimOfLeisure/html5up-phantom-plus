import React from 'react';

const TextArea = ({ name, id, cols, placeholder, children }) => {
  const textAreaStyle = {
    overflow: 'hidden',
    resize: 'none',
    height: 'auto',
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
  const setTextAreaHeight = event => {
    event.target.style.height = 'auto';
    event.target.style.height = event.target.scrollHeight + 'px';
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
        // These are throwing error
        // onBlur={trimElement}
        // onFocus={trimElement}
        onInput={setTextAreaHeight}
        onBlur={setTextAreaHeight}
        onFocus={setTextAreaHeight}>
        {children}
      </textarea>
    </div>
  );
};

export default TextArea;
