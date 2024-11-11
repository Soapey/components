import React from "react";
import PropTypes from "prop-types";
import "./TestButton.css";

export const TestButton = ({ backgroundColor, hoverColor, ...props }) => {
  return (
    <button className="testButton" type="button" {...props}>
      TestButton
      <style jsx>{`
        button {
          background-color: ${backgroundColor};
        }
        button:hover {
          background-color: ${hoverColor};
        }
      `}</style>
    </button>
  );
};

TestButton.propTypes = {
  backgroundColor: PropTypes.string,
  hoverColor: PropTypes.string,
};

TestButton.defaultProps = {
  backgroundColor: "blue",
  hoverColor: "darkblue",
};
