import React, { useState } from 'react';

const TextArea = ({ name, id, cols, placeholder, children }) => {
  const [height, setHeight] = useState(59);

  const textAreaStyle = {
    overflow: 'hidden',
    resize: 'none',
    height: height,
  };

  return (
    <div className="textarea-wrapper">
      <textarea
        name={name}
        id={id}
        cols={cols}
        rows="1"
        placeholder={placeholder}
        style={textAreaStyle}>
        {children}
      </textarea>
    </div>
  );
};

export default TextArea;
