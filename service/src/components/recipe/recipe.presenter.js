import * as S from "./recipe.styles";
import { useState} from "react";
import { recipe } from "./recipe.data";

function RecipePresenterPage(props) {
    const { name, user, grade, summary, ingredients, cookingOrder } = recipe;
  
  return (
    <S.Wrapper>
      <S.CloseBox>
        <S.Icon src="/images/close.png" style={{ marginRight: "auto" }} />
        <S.Icon src="/images/search.png" />
      </S.CloseBox>
      
      <S.Title>{name}</S.Title>
      <S.MainImg src="/images/foodimg.png" />
      <S.UserBox>
        <S.Icon src="/images/user.png" />
        <span>{user}</span>
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
            <S.Instruction>{instruction}</S.Instruction>
            <S.OrderImage src={`/images/foodimg.png`} />
            {/* <S.OrderImage src={`/images/order_${step}.png`} />  */}
            {/* Update the image path as per your project */}
          </S.OrderItem>
        ))}
      </S.OrderList>

      <S.Title>작성자</S.Title>
      
        <S.UserProfile>
            <S.UserSection>
                <S.Icon src="/images/user.png" />
                <S.UserName>{user}</S.UserName>
            </S.UserSection>
            <S.Rating>
                <S.StarRating>평점</S.StarRating>
                <S.Stars>
                    {[...Array(5)].map((_, i) => (
                        <S.Star key={i} filled={i < grade} />
                    ))}
                </S.Stars>
            </S.Rating>
        </S.UserProfile>
        
        <S.UserChannel>
          주 채널 : <S.ChannelLink href="https://www.youtube.com/">https://www.youtube.com/</S.ChannelLink>
        </S.UserChannel>
      

      <S.RecipeReportTitle>{user}님이 작성한 요리 보고서 항목</S.RecipeReportTitle>
      <S.ReportItems>
        {[...Array(3)].map((_, i) => (
          <S.ReportItem key={i}>
            <S.ReportItemImage src="/images/recipe/photo.png" />
          </S.ReportItem>
        ))}
      </S.ReportItems>

      <S.Title>후기</S.Title>
      <S.Reviews>
        {[{
          user: "동이빠",
          grade: 4,
          date: "2024.06.13",
          text: "너무너무 맛있어요~~",
        }, {
          user: "투어스토리",
          grade: 4,
          date: "2024.06.27",
          text: "생각보다 달았지만 그래도 맛있었습니다!!",
          image: "/images/foodimg.png",
        }, {
          user: "마피",
          grade: 4,
          date: "",
          text: "레시피 감사합니다~",
        }].map((review, index) => (
          <S.Review key={index}>
            <S.ReviewHeader>
              <S.ReviewUserProfile>
                <S.Icon src="/images/user.png" />
                <S.UserName>{review.user}</S.UserName>
              </S.ReviewUserProfile>
              <S.ReviewRating>
                {[...Array(5)].map((_, i) => (
                  <S.Star key={i} filled={i < review.grade} />
                ))}
              </S.ReviewRating>
            </S.ReviewHeader>
            <S.ReviewText>{review.text}</S.ReviewText>
            {review.image && <S.ReviewImage src={review.image} />}
            {index === 2 && <S.WriteButton>작성</S.WriteButton>}
          </S.Review>
        ))}
      </S.Reviews>

    </S.Wrapper>
  );
}

export default RecipePresenterPage;
