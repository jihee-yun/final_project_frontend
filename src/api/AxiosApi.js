import axios from "axios";
const KH_DOMAIN = "http://localhost:8111";

const AxiosApi = {
  // 지역별 카페 정보 조회
  cafeInfoGet: async(region, sortingOption) => {
    let url = KH_DOMAIN + `/cafe/region?region=${region}`;
    if(sortingOption) {
      url += `&sortingOption=${sortingOption}`;
    }
    return axios.get(url);
  },
  // 카페 디테일 정보 조회
  detailInfoGet: async(cafeNum) => {
    return await axios.get(KH_DOMAIN + `/cafe/detail?cafeNum=${cafeNum}`);
  },
  // 카페 이미지 리스트 조회
  imgListGet: async(cafeNum) => {
    return await axios.get(KH_DOMAIN + `/cafe/img?cafeNum=${cafeNum}`);
  },
  // 길드 전체 리스트 조회
  guildInfoGet: async(guildList) => {
    return await axios.get(KH_DOMAIN + `/guild/all?guildList=${guildList}`)
  },
  // 특정 길드 디테일 정보 조회
  guildDeInfoGet: async(guildNum) => {
    return await axios.get(KH_DOMAIN + `/guild/detail?guildNum=${guildNum}`)
  },
  // 새로운 길드 생성
  createNewGuild: async(grantType, accessToken, memNum, guildName, guildIntro, guildDetailIntro, meetDay, category, member, region, url) => {
    const guildData = {
      memNum : memNum,
      guildName : guildName,
      guildIntro : guildIntro,
      guildDetailIntro : guildDetailIntro,
      meetDay : meetDay,
      category: category,
      member : member,
      region : region,
      thumbnail : url
    };
    return await axios.post(KH_DOMAIN + "/guild/newGuild", guildData, {
      headers: {
        Authorization: `${grantType} ${accessToken}`
      }
    });
  },
  // 길드 가입 회원 확인하기
  isMemberGet: async(guildNum, userNum) => {
    return await axios.get(KH_DOMAIN + `/guild/isMember?guildNum=${guildNum}&userNum=${userNum}`)
  },
  //길드 가입하기
  joinGuild: async(guildNum, userNum, grantType, accessToken) => {
    const data = {
      guildNum: guildNum,
      userNum: userNum
    }
    return await axios.post(KH_DOMAIN + `/guild/join`, data, {
      headers: {
        Authorization: `${grantType} ${accessToken}`
      }
    });
  },
  // 새로운 리뷰 작성
  createNewReview: async(memNum, cafeNum, content, score, url1, url2, grantType, accessToken) => {
    const reviewData = {
      memNum: memNum,
      cafeNum: cafeNum,
      content: content,
      score: score,
      url1: url1,
      url2: url2
    }
    return await axios.post(KH_DOMAIN + `/review/newReview`, reviewData, {
      headers: {
        Authorization: `${grantType} ${accessToken}`
      }
    });
  },
  // 특정 카페 리뷰 조회
  cafeReviewGet: async(cafeNum) => {
    return await axios.get(KH_DOMAIN  + `/review/cafeReview?cafeNum=${cafeNum}`);
  },
  // 리뷰 수정
  editReview: async(cafeNum, reviewNum, content, editScore, url1, url2, grantType, accessToken) => {
    const data = {
      cafeNum: cafeNum,
      reviewNum: reviewNum,
      content: content,
      editScore: editScore,
      url1: url1,
      url2: url2 
    }
    return await axios.post(KH_DOMAIN + `/review/edit`, data, {
      headers: {
        Authorization: `${grantType} ${accessToken}`
      }
    });
  },
  // 리뷰 삭제
  deleteReview: async(id, cafeNum, grantType, accessToken) => {
    const data = {
      reviewId: id,
      cafeNum: cafeNum
    }
    return await axios.post(KH_DOMAIN + `/review/delete`, data, {
      headers: {
        Authorization: `${grantType} ${accessToken}`
      }
    });
  },
  // 리뷰 좋아요
  reviewLike: async(memNum, id, grantType, accessToken) => {
    const data = {
      memNum: memNum,
      reviewId: id
    }
    return await axios.post(KH_DOMAIN + `/review/like`, data, {
      headers: {
        Authorization: `${grantType} ${accessToken}`
      }
    });
  },
  // 카페 좋아요 
  cafeLike: async(cafeNum, memNum, grantType, accessToken) => {
    const data = {
      cafeNum: cafeNum,
      memNum: memNum
    }
    return await axios.post(KH_DOMAIN + `/cafe/like`, data, {
      headers: {
        Authorization: `${grantType} ${accessToken}`
      }
    });
  },
  // 카페 좋아요 상태값 관리
  getLikeState: async(cafeNum, memNum, grantType, accessToken) => {
    return await axios.get(KH_DOMAIN + `/cafe/getLike?cafeNum=${cafeNum}&memNum=${memNum}`, {
      headers: {
        Authorization: `${grantType} ${accessToken}`
      }
    });
  }
};

export default AxiosApi;