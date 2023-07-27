import { useState, useEffect } from "react";
import { styled } from "styled-components";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AxiosApi from "../api/AxiosApi";

const Box = styled.div`
margin-top: 2rem;
display: flex;
justify-content: space-between;
`;

const Question = styled.span`
font-weight: bold;
`;

const Button = styled.button`
background-color: #ffffff;
border: none;
align-items: center;
align-self: center;
`;

const Box2 = styled.div`
margin-top: 20px;
border-bottom: 1px solid #a5acb1;

`;

const Answer = styled.ul`
    display: flex;
    padding-bottom: 1.875rem;
    padding-left: 0;
    padding-right: 0;
    color: #33363b;
    cursor: pointer;

.answer {
  border-radius: 5px;
  line-height: 1.7;
  letter-spacing: -.05rem;
  white-space: pre-wrap;
  word-break: keep-all;
  color: #52565d;
  font-size: 1rem;
  padding: 1.875rem 1.5rem;
  background-color: #f7f7fa;
}

`;

const BusinessQna = () => {
    const [isOpen, setIsOpen] = useState({});
    const [qnaList, setQnaList] = useState([]);

    useEffect(() => {
        const qna = async () => {
            const rsp = await AxiosApi.QnaGet("BUSINESS")
            .then((rsp) => {
              setQnaList(rsp.data);
              console.log("qna 정보 가져오기 성공: ", rsp.data)
            })
            .catch((error) => {
              console.log(error);
            });
        };
        qna();
        console.log(qnaList);
      }, []);
      
    
    const questionOpen = (index) => {
      setIsOpen((prev) => ({
        ...prev,
        [index]: !prev[index],
      }));
    }
    return(
    <>
    {qnaList.map((business, index) => (
    <div key={business.id}>
      <Box >
        <Question > {business.question}
          <Button onClick={() => questionOpen(index)}>
          {isOpen[index] ? <ExpandMoreIcon style={{fill: "gray"}}/> : <ExpandLessIcon style={{fill: "gray"}}/>}
        </Button> </Question>
      </Box>
      
      <Box2>
      <Answer style={{ display: isOpen[index] ? "block" : "none" }}>
        <div className="answer">{business.answer}</div>
      </Answer>
      </Box2>
      
      </div>
      ))}
      </>
    );
};
export default BusinessQna;