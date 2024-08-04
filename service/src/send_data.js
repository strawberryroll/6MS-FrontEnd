export let data = { 
    // 내가 서버에 전달하는 데이터
    survey: {
        purpose: "",
        preference: [],
    },
    
    recipe: { 
        review: {
            nickname: "",
            score: 0,
            date: "",
            comment: "",
            image: "",
        }
    },

    writing: {
        title: "",
        intro: "",
        url: "",
        menu: "",
        category: "일상",
        level: 0,
        servings: 0,
        cost: "",
        ingredient: [],
        content: [],
        requiredTime: 0,
        // recipeImages: "",
    },

    bookmark: {
        recipeId: 0,
        check: ""
    }
  };