import * as S from "./preference.style";

export default function PreferencePresenter(props) {
  return (
    <S.Wrapper>

      <S.RowGroup>
        <S.Group id="초스피드" onClick={props.onClickOption}>
            <S.Icon src="/images/preference/speed.png" />
            <S.Name>초스피드</S.Name>
        </S.Group>
        <S.Group id="일상" onClick={props.onClickOption}>
            <S.Icon src="/images/preference/daily.png" />
            <S.Name>일상</S.Name>
        </S.Group>
        <S.Group id="해장" onClick={props.onClickOption}>
            <S.Icon src="/images/preference/hangover.png" />
            <S.Name>해장</S.Name>
        </S.Group>
      </S.RowGroup>

      <S.RowGroup>
        <S.Group id="안주" onClick={props.onClickOption}>
            <S.Icon src="/images/preference/snack.png" />
            <S.Name>안주</S.Name>
        </S.Group>
        <S.Group id="다이어트" onClick={props.onClickOption}>
            <S.Icon src="/images/preference/diet.png" />
            <S.Name>다이어트</S.Name>
        </S.Group>
        <S.Group id="디저트" onClick={props.onClickOption}>
            <S.Icon src="/images/preference/dessert.png" />
            <S.Name>디저트</S.Name>
        </S.Group>
      </S.RowGroup>

      <S.RowGroup>
        <S.Group id="야식" onClick={props.onClickOption}>
            <S.Icon src="/images/preference/latemeal.png" />
            <S.Name>야식</S.Name>
        </S.Group>
        <S.Group id="요리초보" onClick={props.onClickOption}>
            <S.Icon src="/images/preference/beginner.png" />
            <S.Name>요리초보</S.Name>
        </S.Group>
        <S.Group id="글로벌" onClick={props.onClickOption}>
            <S.Icon src="/images/preference/global.png" />
            <S.Name>글로벌</S.Name>
        </S.Group>
      </S.RowGroup>

      <S.RowGroup>
        <S.Group id="집들이" onClick={props.onClickOption}>
            <S.Icon src="/images/preference/housewarming.png" />
            <S.Name>집들이</S.Name>
        </S.Group>
        <S.Group id="기념일" onClick={props.onClickOption}>
            <S.Icon src="/images/preference/anniversary.png" />
            <S.Name>기념일</S.Name>
        </S.Group>
      </S.RowGroup>

    </S.Wrapper>
  );
}