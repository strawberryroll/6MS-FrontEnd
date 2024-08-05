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
        introUrl: "",
        menu: "",
        preference: "일상",
        purpose: "근육키우기",
        level: 0,
        servings: 0,
        cost: "",
        fullRecipe: [],
        content: [],
        requiredTime: 0,
        // recipeImages: "",
    },

    bookmark: {
        recipeId: 0,
        check: ""
    }
  };