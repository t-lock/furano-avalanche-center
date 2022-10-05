import React from "react";

// This is the editing component
export const SimpleControl = (props) => {
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "100px 100px",
    gridGap: "5px",
  };
  const aStyle = {
    height: "100px",
    width: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div>
      <strong>Hi, I'm Simple.</strong>
      <div style={gridStyle}>
        <button
          value="1"
          style={aStyle}
          onClick={(e) => props.onChange(e.target.value)}
        >
          1
        </button>
        <button
          value="2"
          style={aStyle}
          onClick={(e) => props.onChange(e.target.value)}
        >
          2
        </button>
        <button
          value="3"
          style={aStyle}
          onClick={(e) => props.onChange(e.target.value)}
        >
          3
        </button>
        <button
          value="4"
          style={aStyle}
          onClick={(e) => props.onChange(e.target.value)}
        >
          4
        </button>
      </div>
    </div>
  );
};

// This is the preview component
export const SimplePreview = (props) => (
  <div>
    <pre>{props.value}</pre>
  </div>
);
