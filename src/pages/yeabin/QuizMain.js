import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
`;

const QuizBox = styled.div`
  li {
    list-style: none;
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
          <h3>{question}</h3>
          <ul>
            {options.map((option, index) => (
              <li key={index}>
                <button
                  onClick={() => handleClick(option)}
                  disabled={isAnswered}
                >
                  {option}
                </button>
              </li> 
            ))}
          </ul>
          {isAnswered && (
            <p>{isCorrect ? '정답입니다! 50포인트가 적립됩니다.' : '오답입니다.'}</p>
          )}
        </div>
      </QuizBox>
    </Container>    
  );
};

export default QuizMain;
