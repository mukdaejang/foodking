import { FC } from 'react';
import StyledFooter from './Footer.styled';
import Logo from '@/assets/img/darkLogo.png';

const Footer: FC = () => {
  return (
    <StyledFooter>
      <div className="upper">
        <div>
          <a>
            <img className="logo" src={Logo} alt="mukdaejang" />
          </a>
        </div>
        <nav>
          <ul>
            <li>
              <a>회사소개</a>
            </li>
            <li>
              <a>망고플레이트 채용</a>
            </li>
            <li>
              <a>투자 정보</a>
            </li>
            <li>
              <a>브랜드 가이드라인</a>
            </li>
            <li>
              <a>망고플레이트 비즈니스</a>
            </li>
            <li>
              <a>광고 문의</a>
            </li>
          </ul>
          <ul>
            <li>
              <a>공지사항</a>
            </li>
            <li>
              <a>이용약관</a>
            </li>
            <li>
              <a>비회원 이용자 이용정책</a>
            </li>
            <li>
              <a>개인정보처리방침</a>
            </li>
            <li>
              <a>위치기반서비스 이용약관</a>
            </li>
            <li>
              <a>커뮤니티 가이드라인</a>
            </li>
            <li>
              <a>청소년보호정책</a>
            </li>
            <li>
              <a>홀릭 소개</a>
            </li>
            <li>
              <a>문의하기</a>
            </li>
          </ul>
        </nav>
      </div>
      <hr />
      <div>
        <small>
          <p>
            <span>㈜ 여기어때컴퍼니</span>
            <span>서울특별시 강남구 봉은사로 479, 479타워 11층</span>
            <span>대표이사: 정명훈</span>
            <span>
              사업자 등록번호: 742-86-00224 <a>[사업자정보확인]</a>
            </span>
            <span>통신판매업 신고번호: 2017-서울강남-01779</span>
            <span>고객센터: 02-565-5988</span>
            <span>© 2022 MangoPlate Co., Ltd. All rights reserved.</span>
          </p>
        </small>
      </div>
    </StyledFooter>
  );
};
export default Footer;
