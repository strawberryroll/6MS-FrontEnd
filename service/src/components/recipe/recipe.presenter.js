import * as S from "./recipe.styles";
import { useState } from "react";
import { recipe } from "./recipe.data";

function RecipePresenterPage(props) {
  const { menu, user, writerName, summary, ingredients, cookingOrder, review, writer } = recipe;

  return (
    <S.Wrapper>
      <S.CloseBox>
        <S.Icon src="/images/close.png" style={{ marginRight: "auto" }} />
        <S.Icon src="/images/search.png" />
      </S.CloseBox>
      
      <S.Title>{menu}</S.Title>
      <S.MainImg src="/images/foodimg.png" />
      <S.UserBox>
        <S.Icon src="/images/user.png" />
        <span>{writerName}</span>
      </S.UserBox>
      <S.SummaryBox>
        {summary.map((item, index) => (
          <S.Summary key={index} style={{ width: `${item.length * 10}px` }}>
            {item}
          </S.Summary>
        ))}
      </S.SummaryBox>

      <S.Title>재료</S.Title>
      <S.Table>
        <S.TableHead>
          <S.TableRow>
            <S.TableHeader>재료</S.TableHeader>
            <S.TableHeader>칼로리</S.TableHeader>
            <S.TableHeader>양</S.TableHeader>
            <S.TableHeader></S.TableHeader>
          </S.TableRow>
        </S.TableHead>
        <S.TableBody>
          {Object.entries(ingredients).map(([ingredient, details], index) => (
            <S.TableRow key={index}>
              <S.TableCell>{ingredient}</S.TableCell>
              <S.TableCell>{details[0]}</S.TableCell>
              <S.TableCell>{details[1]}</S.TableCell>
              <S.TableCell><S.Button>구매</S.Button></S.TableCell>
            </S.TableRow>
          ))}
        </S.TableBody>
      </S.Table>

      <S.Title>조리순서</S.Title>
      <S.OrderList>
        {Object.entries(cookingOrder).map(([step, instruction], index) => (
          <S.OrderItem key={index}>
            <S.Step>{step}</S.Step>
            <S.Instruction>{instruction[0]}</S.Instruction>
            <S.OrderImage src={`/images/${instruction[1]}`} />
          </S.OrderItem>
        ))}
      </S.OrderList>

      <S.Title>작성자</S.Title>
      <S.UserSection>
        <S.UserProfile>
          <S.Icon src="/images/user.png" />
          <S.UserName>{writerName}</S.UserName>
        </S.UserProfile>
        <S.Rating>
          <S.StarRating>평점</S.StarRating>
          <S.Stars>
            {[...Array(5)].map((_, i) => (
              <S.Star key={i} filled={i < writer.grade} />
            ))}
          </S.Stars>
        </S.Rating>
      </S.UserSection>
        
      <S.UserChannel>
        주 채널 : <S.ChannelLink href={writer.channel}>{writer.channel}</S.ChannelLink>
      </S.UserChannel>
      <S.RecipeReportTitle>{writerName}님이 작성한 요리 보고서 항목</S.RecipeReportTitle>
      <S.ReportItems>
        {[...Array(3)].map((_, i) => (
          <S.ReportItem key={i}>
            <S.ReportItemImage src="/images/recipe/photo.png" />
          </S.ReportItem>
        ))}
      </S.ReportItems>

      
      <S.UserSection>
        <S.Title style={{marginLeft: 0}}>후기</S.Title>
        <S.Rating>
          <S.StarRating style={{width: 20}}>평점</S.StarRating>
          <S.Stars>
            {[...Array(5)].map((_, i) => (
              <S.Star key={i} filled={i < review.totalGrade} />
            ))}
          </S.Stars>
        </S.Rating>
      </S.UserSection>
      
      <S.Reviews>
        {review.response.map((review, index) => (
          <S.Review key={index}>
            <S.UserSection>
              <S.UserProfile>
                <S.Icon src="/images/user.png" />
                <S.UserName>{review.user}</S.UserName>
              </S.UserProfile>
              <S.Rating>
                <S.StarRating>별점</S.StarRating>
                {[...Array(5)].map((_, i) => (
                  <S.Star key={i} filled={i < review.grade} />
                ))}
              </S.Rating>
            </S.UserSection>
            <S.ReviewTextBox>
                <S.ReviewText>{review.text}</S.ReviewText>
                {review.image && <S.ReviewImage src={review.image} />}
            </S.ReviewTextBox>
          </S.Review>
        ))}
      </S.Reviews>

      <S.MyReview>
        <S.UserSection>
            <S.UserProfile>
                <S.Icon src="/images/user.png" />
                <S.UserName>{user}</S.UserName>
            </S.UserProfile>
            <S.Rating>
                <S.StarRating>별점</S.StarRating>
                {[...Array(5)].map((_, i) => (
                  <S.Star key={i} filled={i < review.grade} />
                ))}
            </S.Rating>
        </S.UserSection>
        <S.InputReview></S.InputReview>
        <S.WriteButton>작성</S.WriteButton>

      </S.MyReview>

      

    </S.Wrapper>
  );
}

export default RecipePresenterPage;
