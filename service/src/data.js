export let data = { 
    // 내가 서버에 전달하는 데이터
    survey: {
        purpose: "",
        preference: [],
    },
    
    recipe: { 
        review: {
            user: "",
            grade: 0,
            date: "",
            text: "",
            image: "",
        }
    },

    writing: {
        id: 0,
        user: "",
        title: "",
        image: "",
        selfIntroduction: "",
        summary: ["", "", "", ""],
        ingredients: {
            // 두부: ["1모"], 
            // 양파: ["1/2개"],
            // 고추: ["1개"],
            // 물: ["8T"], 
        },
        cookingOrder: {
            // 1: ["두부는 도톰하게 자르고 야채는 채 썰어주세요. 이때는 
            //     준비되었습니다. 백탁 그럼 양념장을 만들어야죠.", "img1"],
        },

    }
  };