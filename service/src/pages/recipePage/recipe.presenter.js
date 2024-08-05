import * as S from "./recipe.style";
import { Link } from 'react-router-dom';
import { useState } from "react";
import { data as initialData } from '../../send_data';

export default function RecipePresenterPage({ response_data, reviewData, recipeId }) {
  const { title, recipeImages, intro, level, servings, cost, fullRecipe, content, requiredTime, kcal, average, nickname, channel } = response_data;

  const [userReview, setUserReview] = useState('');
  const [userRating, setUserRating] = useState(0);
  const [reviews, setReviews] = useState(reviewData);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [data, setData] = useState(initialData);

  const summaryWidths = [52, 36, 50, 49, 69];

  const handleButton = (event) => {
    console.log('click');
  };

  const handleReviewChange = (event) => {
    setUserReview(event.target.value);
  };

  const handleRatingChange = (rating) => {
    setUserRating(rating);
  };

  const logDataToConsole = () => {
    console.log("send_data:", initialData);
    console.log("변수 data:", data);
    console.log("userReview, userRating", userReview, userRating);
    console.log("reviews", reviews);
    console.log(JSON.stringify({
      "comment": userReview,
      "score": userRating,})
  )
    console.log(recipeId);
  };

  const handleReviewSubmit = async (event) => {
    event.preventDefault();
  
    if (userReview && userRating) {
      const visibleReview = {
        nickname: nickname,
        score: userRating,
        comment: userReview,
        date: new Date().toISOString().split("T")[0], // 현재 날짜 저장
        // image: "", // 이미지 추가 기능을 구현하려면 여기에서 추가
      }

      const newReview = {
        score: userRating,
        comment: userReview,
      };
  
      setReviews([visibleReview, ...reviews]);
      setUserReview('');
      setUserRating(0);
  
      try {
        console.log('Sending review:', JSON.stringify(newReview, null, 2));
  
        const response = await fetch(`/api/board/${recipeId}/comment`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newReview),
          // credentials: 'include'
        });
  
        if (response.ok) {
          const result = await response.text();
          // const res = result ? JSON.parse(result) : {};
          console.log('Response:', result);
          alert('리뷰 작성 성공!');
        } else {
          console.error('서버 응답 오류:', response.status);
        }
      } catch (error) {
        console.error('리뷰 작성 실패:', error);
        alert('리뷰 작성 실패');
      }
    } else {
      console.log({
        score: userRating,
        comment: userReview,
      });
    }
  };

  const handlePurchase = (ingredient) => {
    let url = `https://www.kurly.com/search?sword=${ingredient}`;
    window.open(url, '_blank');
  };

  const handleBookmarkToggle = () => {
    const updatedData = {
      ...data,
      bookmark: {
        recipeId: recipeId,
        check: !isBookmarked
      }
    };

    setData(updatedData);
    setIsBookmarked(!isBookmarked);

    fetch(`/board/${recipeId}/pick`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedData.bookmark)
    })
    .then(response => response.json())
    .then(result => {
      console.log(result);
      // Handle the response, e.g., show success message
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  return (
    <S.Wrapper>
      <S.CloseBox>
        <Link style={{width: '100%'}} to='/home'>
          <S.Icon src="/images/close.png" style={{ marginRight: "auto" }} />
        </Link>
        <S.Icon 
          src={isBookmarked ? "/images/bookmarkOn.png" : "/images/bookmark.png"} 
          onClick={handleBookmarkToggle} 
        />
        <S.Icon src="/images/search.png" />
      </S.CloseBox>

      <S.Title>{title}</S.Title>
      {recipeImages && recipeImages.length > 0 && (
        <S.MainImg src={recipeImages[0]} />
      )}
      <S.UserBox>
        <S.Icon src="/images/user.png" />
        <span>{nickname}</span>
      </S.UserBox>

      <S.SummaryBox>
        <S.Summary style={{ width: `${summaryWidths[0]}px` }}> 난이도: {level} </S.Summary>
        <S.Summary style={{ width: `${summaryWidths[1]}px` }}> {servings}인분 </S.Summary>
        <S.Summary style={{ width: `${summaryWidths[2]}px` }}> {kcal}Kcal </S.Summary>
        <S.Summary style={{ width: `${summaryWidths[3]}px` }}> {requiredTime} mins </S.Summary>
        <S.Summary style={{ width: `${summaryWidths[4]}px` }}> {cost} </S.Summary>
      </S.SummaryBox>

      <S.Title>재료</S.Title>
      <S.Table>
        <S.TableHead>
          <S.TableRow>
            <S.TableHeader>재료</S.TableHeader>
            <S.TableHeader></S.TableHeader>
            <S.TableHeader></S.TableHeader>
            <S.TableHeader></S.TableHeader>
          </S.TableRow>
        </S.TableHead>
        <S.TableBody>
          {fullRecipe?.map(([ingredient, quantity], index) => (
            <S.TableRow key={index}>
              <S.TableCell>{ingredient}</S.TableCell>
              <S.TableCell></S.TableCell>
              <S.TableCell>{quantity}</S.TableCell>
              <S.TableCell>
                <S.Button onClick={() => handlePurchase(ingredient)}>구매</S.Button>
              </S.TableCell>
            </S.TableRow>
          ))}
        </S.TableBody>
      </S.Table>

      <S.Title>조리순서</S.Title>
      <S.OrderList>
        {content.map((instruction, index) => (
          <S.OrderItem key={index}>
            <S.Step>{index + 1}</S.Step>
            <S.Instruction>{instruction}</S.Instruction>
          </S.OrderItem>
        ))}
      </S.OrderList>

      <S.Title>작성자</S.Title>
      <S.UserSection>
        <S.UserProfile>
          <S.Icon src="/images/user.png" />
          <S.UserName>{nickname}</S.UserName>
        </S.UserProfile>
      </S.UserSection>

      <S.UserChannel>
        자기소개 : <S.ChannelLink style={{color: 'black'}}>{intro}</S.ChannelLink>
      </S.UserChannel>
      <S.UserChannel>
        주 채널 : <S.ChannelLink href={channel}>{channel}</S.ChannelLink>
      </S.UserChannel>
      <S.RecipeReportTitle>{nickname}님이 작성한 요리 보고서 항목</S.RecipeReportTitle>
      <S.ReportItems>
        {[...Array(3)].map((_, i) => (
          <S.ReportItem key={i}>
            <S.ReportItemImage src="/images/recipe/photo.png" />
          </S.ReportItem>
        ))}
      </S.ReportItems>

      {reviews.length > 0 && (
        <>
          <S.UserSection>
            <S.Title style={{ marginLeft: 0 }}>후기</S.Title>
            <S.Rating>
              <S.StarRating style={{ width: 20 }}>평점</S.StarRating>
              <S.Stars>
                {[...Array(5)].map((_, i) => (
                  <S.Star key={i} filled={i < (average || 0)} />
                ))}
              </S.Stars>
            </S.Rating>
          </S.UserSection>

          <S.Reviews>
            {reviews.map((review, index) => (
              <S.Review key={index}>
                <S.UserSection>
                  <S.UserProfile>
                    <S.Icon src="/images/user.png" />
                    <S.UserName>{review.nickname}</S.UserName>
                  </S.UserProfile>
                  <S.Rating>
                    <S.StarRating>별점</S.StarRating>
                    {[...Array(5)].map((_, i) => (
                      <S.Star key={i} filled={i < review.score} />
                    ))}
                  </S.Rating>
                </S.UserSection>
                <S.ReviewTextBox>
                  <S.ReviewSmallBox>
                    <S.ReviewText>{review.comment}</S.ReviewText>
                    <S.ReviewDate>{review.date}</S.ReviewDate>
                  </S.ReviewSmallBox>
                  {review.image && <S.ReviewImage src={review.image} />}
                </S.ReviewTextBox>
              </S.Review>
            ))}
          </S.Reviews>
        </>
      )}

      <S.Form onSubmit={handleReviewSubmit}>
        <S.MyReview>
          <S.UserSection>
            <S.UserProfile>
              <S.Icon src="/images/user.png" />
              <S.UserName>{nickname}</S.UserName>
            </S.UserProfile>
            <S.Rating>
              <S.StarRating>별점</S.StarRating>
              <S.Stars>
                {[...Array(5)].map((_, i) => (
                  <S.Star
                    key={i}
                    filled={i < userRating}
                    onClick={() => handleRatingChange(i + 1)}
                  />
                ))}
              </S.Stars>
            </S.Rating>
          </S.UserSection>
          <S.InputReview value={userReview} onChange={handleReviewChange} />
          <S.IconButtonContainer>
            <S.Icon style={{ marginTop: 10 }} src="/images/attach.png" />
            <S.WriteButton type="submit">작성</S.WriteButton>
          </S.IconButtonContainer>
        </S.MyReview>
      </S.Form>
      <S.LogButton onClick={logDataToConsole}>콘솔에 데이터 확인</S.LogButton>
    </S.Wrapper>
  );
}