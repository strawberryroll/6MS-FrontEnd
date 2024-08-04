import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Noto Sans KR";
`;

export const CloseBox = styled.div`
  width: 100%;
  height: 15%;
  margin-top: 10%;
  display: flex;
  justify-content: flex-start;
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
  padding: 10px;
`;

export const Title = styled.div`
  width: 100%;
  height: 33px;
  padding: 15px;
  margin-left: 25px;
  font-weight: 700;
  font-size: 28px;
  text-align: left;
  letter-spacing: -1px;
`;

export const MainImg = styled.img`
  width: 95%;
  height: 217px;
  padding: 5px;
`;

export const UserBox = styled.div`
  width: 95%;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  span {
    font-size: 10px;
    font-weight: 600;
  }
`;

export const SummaryBox = styled.div`
  width: 95%;
  height: 50px;
//   background: grey;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Summary = styled.div`
  height: 20px;
  padding: 6px 0 0;
  margin: 3px;
  font-size: 9px;
  font-weight: 400;
  background: rgba(255, 100, 13, 0.2);
  border-radius: 20px;
  border: 0;
  letter-spacing: -0.5px;
`;

export const Table = styled.table`
  width: 95%;
  margin: 10px 0 20px;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  font-size: 10px;
`;

export const TableBody = styled.tbody`
  font-size: 9px;
//   text-align: left;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #f8f8f8;
`;

export const TableHeader = styled.th`
  padding: 10px;
//   text-align: left;
  font-weight: 700;
  border-bottom: 1px solid grey;
`;

export const TableCell = styled.td`
  padding: 5px;
`;

export const Button = styled.button`
  padding: 2px 8px;
  border: 1px solid #ddd;
  border-radius: 20px;
  background: white;
  color: black;
  font-size: 9px;
  cursor: pointer;
`;

export const OrderList = styled.ul`
  width: 95%;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const OrderItem = styled.li`
  margin: 15px 0;
  padding: 5px;
//   background: #f8f8f8;
  display: flex;
  align-items: center;
`;

export const Step = styled.div`
  font-weight: bold;
`;

export const Instruction = styled.div`
  font-size: 10px;
  margin-left: 5px;
  text-align: left;
`;

export const OrderImage = styled.img`
  width: 60px;
  height: 40px;
  margin-left: auto;
  border-radius: 10px;
`;

export const UserProfile = styled.div`
  display: flex;
  align-items: center;
`;

export const UserSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const UserName = styled.span`
  font-weight: 600;
  font-size: 14px;
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  margin-left: 40px;
`;

export const StarRating = styled.span`
  font-size: 10px;
  font-weight: 600;
  margin-right: 10px;
`;

export const Stars = styled.div`
  display: flex;
`;

export const Star = styled.div`
  width: 15px;
  height: 15px;
  background: ${(props) => (props.filled ? "gold" : "lightgray")};
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
  margin-right: 5px;
`;

export const UserChannel = styled.div`
  width: 95%;
  margin-top: 10px;
  font-size: 12px;
  text-align: left;
`;

export const ChannelLink = styled.a`
  color: #0073e6;
`;

export const RecipeReportTitle = styled.h3`
  width: 100%;
  margin: 20px 0px 10px 20px;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -0.5px;
  text-align: left;
`;

export const ReportItems = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 10px 0px 30px 10px;
`;

export const ReportItem = styled.div`
  width: 30%;
  height: 133px;
  background: rgba(255, 100, 13, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const ReportItemImage = styled.img`
  width: 30px;
  height: 30px;
`;

export const Reviews = styled.div`
  width: 100%;
`;

export const Review = styled.div`
  margin-top: 20px;
//   padding: 20px;
//   background: ${(props) => (props.highlight ? "#fff5f5" : "#fff")};
//   border-radius: 10px;
//   box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const ReviewTextBox = styled.div`
//   width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const ReviewSmallBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ReviewText = styled.div`
  font-size: 14px;
  margin-left: 10px;
  display: flex;
  align-items: center;
`;

export const ReviewDate = styled.div`
  font-size: 8px;
  margin: 5px 5px 5px 10px;
  display: flex;
  align-items: center;
  color: #AAAAAA;
`;

export const ReviewImage = styled.img`
  width: 50px;
  height: 50px;
  margin-top: 0px;
  margin-bottom: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
`;

export const MyReview = styled.div`
  width: 95%;
  margin-top: 20px;
  margin-bottom: 40px;
  padding: 10px;
  border-radius: 10px;
  border: 1.5px solid #FF640D;
`;

export const WriteButton = styled.button`
  margin-top: 10px;
  padding: 5px 10px;
  border: none;
  border-radius: 20px;
  background: rgba(255, 100, 13, 0.2);
  color: black;
  font-size: 12px;
  cursor: pointer;
`;

export const InputReview = styled.textarea`
  width: 90%;
  height: 80px;
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 10px;
  font-size: 14px;
  resize: vertical;
  outline: none;
`;

export const IconButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 90%;
  margin-left: 25px;
`;

export const Form = styled.form`
  width: 100%;
`;

export const LogButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;