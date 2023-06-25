import React from "react";
import styled from "styled-components";

const ModalBox = styled.div`
  width: 90%;
  margin: 0 auto;
  position: relative;

  .select{
    margin-bottom: 30px;
    font-weight: bold;

    &:nth-child(2), &:nth-child(3) {
      span{
        font-size: 1rem;
        font-weight: bold;
      }
    }

    &:nth-child(1) {
      span{
        margin-bottom: 15px;
      }
    }

    input{
      position: absolute;
      right: 10px;
    }
    span{
      display: inline-block;
      font-size: .8rem;
      font-weight: 500;
    }

    p{
      font-size: 1rem;
      font-weight: bold;
    }
  }
`;


const CafeFilterModal = ({selectOption, setSelectOption}) => {
  // 필터 선택
  const optionChange = (e) => {
    setSelectOption(e.target.value);
  }

  return(

    <>
     <ModalBox>
      <div className="select">
        <p>지역별</p>
        <div>
          <label htmlFor="all"><span>전체</span></label>
          <input type="radio" id="all" name="filterOption" value="전체" 
          checked={selectOption === "전체"} onChange={optionChange} />
        </div>
        <div>
          <label htmlFor="seoul"><span>서울특별시</span> </label>
          <input type="radio" id="seoul" name="filterOption" value="서울특별시" 
          checked={selectOption === "서울특별시"} onChange={optionChange} />
        </div>
        <div>
          <label htmlFor="gyeonggi"><span>경기도</span></label>
          <input type="radio" id="gyeonggi" name="filterOption" value="경기도" 
          checked={selectOption === "경기도"} onChange={optionChange} />
        </div>
        <div>
          <label htmlFor="busan"><span>부산광역시</span></label>
          <input type="radio" id="busan" name="filterOption" value="부산광역시" 
          checked={selectOption === "부산광역시"} onChange={optionChange} />
        </div>
      </div>
      <div className="select">
        <label htmlFor="top"><span>인기순</span></label>
        <input type="radio" id="top" name="filterOption" value="인기순" 
        checked={selectOption === "인기순"} onChange={optionChange} />
      </div> <div className="select">
        <label htmlFor="star"><span>별점순</span></label>
        <input type="radio" id="star" name="filterOption" value="별점순" 
        checked={selectOption === "별점순"} onChange={optionChange} />
      </div>
      </ModalBox>
    </>
  );
};

export default CafeFilterModal