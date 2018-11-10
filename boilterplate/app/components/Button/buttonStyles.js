import { css } from 'styled-components';

const buttonStyles 
 = css`
  display: inline-block;
  box-sizing: border-box;
  padding: 0.20em 2em;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Tahoma';
  font-weight: bold;
  font-size: 16px;
  border: 2px solid #fff;
  color: #5b748f;

  &:active {
    background: #41addd;
    color: #fff;
  }
`;

export default buttonStyles;
