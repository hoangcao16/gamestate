import React from 'react';
import styled from 'styled-components';
const StyledLoading = styled.div`
  height: 1000px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* position: absolute;
  top: 50%; */
  /* left: 50%; */
  background-color: #000;
  padding: 10px;
  border-radius: 10px;
  & .progress {
    background-color: black;
    border-radius: 20px;
    /* position: relative; */
    margin: 15px 0;
    height: 10px;
    width: 600px;
  }

  & .progress-done {
    background: white;
    box-shadow: 0 3px 3px -5px #f2709c, 0 2px 5px #f2709c;
    border-radius: 20px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 0;
    opacity: 0;
    transition: 1s ease 0.3s;
  }
`;
const Loading = ({ done }) => {
  const [style, setStyle] = React.useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`,
    };

    setStyle(newStyle);
  }, 200);

  return (
    <StyledLoading>
      <div className="progress">
        <div className="progress-done" style={style}></div>
      </div>
    </StyledLoading>
  );
};

export default Loading;
