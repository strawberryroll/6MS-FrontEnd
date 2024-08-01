const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

let response_data = [
    // 예제 데이터
    {
        "recipeId": 0,
        "title": "abc",
        "recipeImages": [
            "https://yoribogo.s3.ap-northeast-2.amazonaws.com/05d9a50d-6546-4867-8d22-5e8111428fd3_%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2023-11-06_215607.png"
        ],
        "intro": "abcd",
        "level": 2,
        "servings": 1,
        "cost": 10000,
        "ingredient": [
            ["apple", "1개"],
            ["banana", "2개"]
        ],
        "content": [
            "abc",
            "def"
        ],
        "requiredTime": 13,
        "kcal": "abc",
        "average": 0.0,
        "nickname": "test1",
        "review": {
            "totalGrade": 4,
            "response": [
                {
                    "user": "동이빠",
                    "grade": 4,
                    "date": "2024.06.13",
                    "text": "너무너무 맛있어요~~",
                    "image": "",
                },
                {
                    "user": "투어스토리",
                    "grade": 4,
                    "date": "2024.06.27",
                    "text": "생각보다 달았지만 그래도 맛있었습니다!!",
                    "image": "/images/foodimg.png",
                },
            ],
        },
        "channel": "https://www.youtube.com/",
    }
];

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/recipe', (req, res) => {
    res.json(response_data);
});

app.post('/api/writing', (req, res) => {
    const data = req.body;
    res.json(data); // 응답을 JSON으로 반환
});

app.post('/api/survey', (req, res) => {
    const survey = req.body;
    res.json(survey); // 응답을 JSON으로 반환
});

app.listen(4000, () => {
    console.log("Server started on port 4000");
});
