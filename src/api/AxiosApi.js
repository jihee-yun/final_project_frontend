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
  },

  // 회원가입 여부 
  checkId : async(userId) => {
    return await axios.get(KH_DOMAIN + `/user/check?userId=${userId}`);
  },
  
    // 회원가입
    userReg : async(userId, password, name, phone, email, birthday, signUpTime, gender, authority) => {
        const member ={
            userId : userId,
            password: password,
            name : name,
            phone : phone,
            email : email,
            birthday : birthday,
            signUpTime : signUpTime,
            gender : gender,
            authority : authority
    };
        return await axios.post(KH_DOMAIN + "/user/new", member);
    },

    // 로그인
    userLogin: async (userId, password, grantType, accessToken) => {
      const loginData = {
        userId: userId,
        password: password
      };

    return await axios.post(KH_DOMAIN + "/user/login", loginData)
  },

  // 비밀번호 찾기
  findPw: async(findPwdId, findPwdEmail) => {
    const data = {
        findPwdId : findPwdId,
        findPwdEmail : findPwdEmail
    };
    return await axios.post(KH_DOMAIN + "/findpw", data);
  },

    // 아이디 찾기
    findId : async(findIdName, findIdEmail) => {
      const data = {
        findIdName : findIdName,
        findIdEmail : findIdEmail
      };
      return await axios.post(KH_DOMAIN + "/findId", data);
    },


    // 사용자 삭제
    deleteUsers : async(memberNum) => {
        return await axios.delete(KH_DOMAIN + `/admin/usermanage/delete/${memberNum}`);
    },

    // 리뷰 삭제
    deleteReviews : async(reviewNum) => {
        return await axios.delete(KH_DOMAIN + `/admin/review/delete/${reviewNum}`);
    },

    // 신고 삭제
    deleteReports : async(reportNum) => {
      return await axios.delete(KH_DOMAIN + `/admin/report/delete/${reportNum}`);
    },

    // 사용자 정보 수정
    saveUserInfo : async(userInfoToSave) => {
      const {memberNum} = userInfoToSave;
      try {
        return await axios.put(KH_DOMAIN + `/admin/usermanage/modify/${memberNum}`, userInfoToSave);
      } catch(error) {
        throw error;
      }
    }, 
     
    
    // 신고 전체 조회
    reportGetAll: async () => {
      return await axios.get(KH_DOMAIN + '/admin/report/all');
    },

    // 신고 내용 조회
    reportGetContents : async(reportNum) => {
      return await axios.get(KH_DOMAIN + `/admin/report/getContents?reportNum=${reportNum}`)
    },

    // 리뷰 전체 조회
    reviewGetAll : async() => {
      return await axios.get(KH_DOMAIN + `/admin/review/all`);
    },

    // 사용자 조회
    userGetAll : async() => {
      return await axios.get(KH_DOMAIN + `/admin/usermanage`);
    },

    // 관리자 로그인
    adminLogin : async(adminId, password) => {
      const adminData = {
        adminId : adminId,
        password : password
      }
      return await axios.post(KH_DOMAIN + `/admin/login`, adminData);
    },

    // 관리자 등록
    adminReg : async(adminId, password, name, birthday, phone, gender) => {
      const admin = {
          adminId : adminId,
          password : password,
          name : name,
          birthday : birthday,
          phone : phone,
          gender : gender
      };

      return await axios.post(KH_DOMAIN + `/admin/register`, admin);
    },
    // 챌린지 조회
  challengeGet: async(chList) => {
    return await axios.get(KH_DOMAIN + `/event/chList?chList=${chList}`);
  },

  // 쿠폰 조회
  getCoupon: async(couponget) => {
    return await axios.get(KH_DOMAIN + `/couponstore/couponget?couponget=${couponget}`);
  },

  // 이벤트 포인트 적립
  pointGet: async(memberNum, winning, pointType) => {
    const points = {
      memberNum: memberNum,
      point: winning,
      pointType: pointType
    };
    return await axios.post(KH_DOMAIN + "/point/pointadd", points);
  },

  // 내 정보 조회
  myInfoGet: async(memberNum) => {
    return await axios.get(KH_DOMAIN + `/member/myinfo?memberNum=${memberNum}`);
  },

  // 챌린지 신청
  challengeApply: async(challengeId, memberId) => {
    const data = {
      challengeId: challengeId,
      memberId: memberId
    };
    return await axios.post(KH_DOMAIN + "/mychallenge/apply", data)
  },

  // 마이챌린지 조회
  mychallengeGet: async(userNum, challengeId) => {
    return await axios.get(KH_DOMAIN + `/mychallenge/get?userNum=${userNum}&challengeId=${challengeId}`);
  },

  // 쿠폰 결제
  couponPayment: async(memberNum, couponId) => {
    const data = {
      memberNum: memberNum,
      couponId: couponId
    };
    return await axios.post(KH_DOMAIN + "/couponstore/couponpay", data)
  }
};

export default AxiosApi;