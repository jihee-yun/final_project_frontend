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
  createNewGuild: async(memNum, guildName, guildIntro, guildDetailIntro, meetDay, member, region, url) => {
    const guildData = {
      memNum : memNum,
      guildName : guildName,
      guildIntro : guildIntro,
      guildDetailIntro : guildDetailIntro,
      meetDay : meetDay,
      member : member,
      region : region,
      thumbnail : url
    };
    return await axios.post(KH_DOMAIN + "/guild/newGuild", guildData);
  },
  //길드 가입하기
  // 새로운 리뷰 작성
  createNewReview: async(memNum, cafeNum, content, score, url1, url2) => {
    const reviewData = {
      memNum: memNum,
      cafeNum: cafeNum,
      content: content,
      score: score,
      url1: url1,
      url2: url2
    }
    return await axios.post(KH_DOMAIN + `/review/newReview`, reviewData);
  },
  // 특정 카페 리뷰 조회
  cafeReviewGet: async(cafeNum) => {
    return await axios.get(KH_DOMAIN  + `/review/cafeReview?cafeNum=${cafeNum}`);
  },
  // 리뷰 수정
  editReview: async(cafeNum, reviewNum, content, editScore, url1, url2) => {
    const data = {
      cafeNum: cafeNum,
      reviewNum: reviewNum,
      content: content,
      editScore: editScore,
      url1: url1,
      url2: url2 
    }
    return await axios.post(KH_DOMAIN + `/review/edit`, data);
  },
  // 리뷰 삭제
  deleteReview: async(id) => {
    const data = {
      reviewId: id
    }
    return await axios.post(KH_DOMAIN + `/review/delete`, data);
  },
  // 리뷰 좋아요 누르기
  // 리뷰 좋아요 취소
  // 카페 좋아요 누르기
  // 카페 좋아요 취소
};

export default AxiosApi;