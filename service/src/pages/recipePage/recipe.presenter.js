// recipe.presenter.js
import * as S from "./recipe.style";
import { useState } from "react";

export default function RecipePresenterPage({ data, reviewData, recipeId }) {
  const { title, recipeImages, intro, level, servings, cost, fullRecipe, content, requiredTime, kcal, average, nickname, channel } = data;
  const summaryWidths = [52, 36, 50, 49, 69];

  const [userReview, setUserReview] = useState('');
  const [userRating, setUserRating] = useState(0);
  const [reviews, setReviews] = useState(reviewData || []);

  const handleReviewChange = (event) => {
    setUserReview(event.target.value);
  };

  const handleRatingChange = (rating) => {
    setUserRating(rating);
  };

  const handleReviewSubmit = (event) => {
    event.preventDefault();
    if (userReview && userRating) {
      const newReview = {
        nickname: nickname,
        score: userRating,
        comment: userReview,
        date: new Date().toISOString().split("T")[0], // current date
        image: "", // add image handling if needed
      };
      setReviews([newReview, ...reviews]);
      setUserReview('');
      setUserRating(0);

      // Post to server
      fetch(`http://13.124.20.140:8080/board/${recipeId}/comment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user: nickname, grade: userRating, text: userReview, date: new Date().toISOString().split("T")[0] })
      })
      .then(response => response.json())
      .then(result => {
        console.log(result);
        // Handle the response, e.g., show success message
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }
  };

  const handlePurchase = (ingredient) => {
    let url = `https://www.kurly.com/search?sword=${ingredient}`;
    window.open(url, '_blank');
  };

  return (
    <S.Wrapper>
      <S.CloseBox>
        <S.Icon src="/images/close.png" style={{ marginRight: "auto" }} />
        <S.Icon src="/images/search.png" />
      </S.CloseBox>

      <S.Title>{title}</S.Title>
      {recipeImages && recipeImages.length > 0 && (
        <S.MainImg src={recipeImages[0]} />
      )}
      <S.UserBox>
        <S.Icon src="/images/user.png" />
        <span>{intro}</span>
      </S.UserBox>

      <S.SummaryBox>
        <S.Summary style={{ width: `${summaryWidths[0]}px` }}> {level} </S.Summary>
        <S.Summary style={{ width: `${summaryWidths[1]}px` }}> {servings} </S.Summary>
        <S.Summary style={{ width: `${summaryWidths[2]}px` }}> {kcal} </S.Summary>
        <S.Summary style={{ width: `${summaryWidths[3]}px` }}> {requiredTime} </S.Summary>
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
          <S.UserName>{intro}</S.UserName>
        </S.UserProfile>
      </S.UserSection>

      <S.UserChannel>
        주 채널 : <S.ChannelLink href={channel}>{channel}</S.ChannelLink>
      </S.UserChannel>
      <S.RecipeReportTitle>{intro}님이 작성한 요리 보고서 항목</S.RecipeReportTitle>
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
    </S.Wrapper>
  );
}
