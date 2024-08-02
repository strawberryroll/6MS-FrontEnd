import * as S from "./purpose.style";

export default function PurposePresenter(props) {
  return (
    <S.Wrapper>
      <S.OptionGroup>
        <S.RowGroup>
          <S.Group id="근육키우기" onClick={props.onClickOption}>
              <S.Icon src="/images/purpose/muscle.png" />
              <S.Name>근육키우기</S.Name>
          </S.Group>
          <S.Group id="급찐급빠" onClick={props.onClickOption}>
              <S.Icon src="/images/purpose/sudden.png" style={{ width: "115px" }} />
              <S.Name>급찐급빠</S.Name>
          </S.Group>
        </S.RowGroup>

        <S.RowGroup>
          <S.Group id="식단조절" onClick={props.onClickOption}>
              <S.Icon src="/images/purpose/juicify.png" />
              <S.Name>식단조절</S.Name>
          </S.Group>
          <S.Group id="식욕방지" onClick={props.onClickOption}>
              <S.Icon src="/images/purpose/appetite.png" />
              <S.Name>식욕방지</S.Name>
          </S.Group>
        </S.RowGroup>
      </S.OptionGroup>

      <S.Text>user님의 목적은</S.Text>
      <S.Text>무엇인가요?⛹‍♀</S.Text>
    
    </S.Wrapper>
  );
}