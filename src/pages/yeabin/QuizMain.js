import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
`;

const QuizBox = styled.div`
  h2 {
    margin-top: 40px;
  }

  h3 {
    margin-top: 30px;
    margin-bottom: 40px;
  }

  ul {
    padding-left: 0;
  }

  li {
    list-style: none;
  }

  button {
    width: 300px;
    height: 50px;
    margin: 20px;
    font-size: 1.1rem;
    border: none;
    background-color: #FFCFDA;
  }

  p{
    margin-top: 40px;
    font-size: 1.1rem;
  }
`;

const QuizMain = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleClick = (option) => {
    if (!isAnswered) {
      setSelectedOption(option);
      setIsAnswered(true);
      setIsCorrect(option === answer);
    }
  };

  const question = '여기ㅇㅔ 문제를 쓸게요';
  const options = ['답 1', '답 2', '답 3', '답 4'];
  const answer = '답 2';
  
  return (
    <Container>
      <QuizBox>
        <div>
          <h2>오늘의 퀴즈</h2>
          <h3>{question}</h3>
          <ul>
            {options.map((option, index) => (
              <li key={index}>
                <button onClick={() => handleClick(option)} disabled={isAnswered}>{option}</button>
              </li> 
            ))}
          </ul>
          {isAnswered && (
            <p>{isCorrect ? '정답! 10포인트가 적립됩니다.' : '땡! 내일 다시 도전해주세요.'}</p>
          )}
        </div>
      </QuizBox>
    </Container>    
  );
};

export default QuizMain;
