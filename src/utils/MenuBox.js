import styled from 'styled-components';

const MenuBox = styled.div`
  width: 260px;
  height: 330px;
  border-radius: 20px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  margin: 50px;

  img {
    width: 30%;
    margin: 40px 0 10px 20px;
  }
  
  h3 {
    margin-left: 20px;
    line-height: 10%;
  }

  p {
    margin-left: 20px;
    color: gray;
    font-size: 1rem;
  }

  .menuButton{
    width: 50%;
    height: 50px;
    margin: 0 auto;
  }
  button {
    margin-top: 45px;
    width: 100%;
    height: 35px;
    border: none;
    border-radius: 20px;
    color: white;
    background-color: #7D5A5A;
    font-size: 1.1rem;
    font-weight: bolder;
    cursor: pointer;
  }
`;

export default MenuBox;