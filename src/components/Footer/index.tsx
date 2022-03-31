import StyledFooter from './Footer.styled';
import Logo from '@/assets/img/darkLogo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <StyledFooter>
      <div className="upper">
        <div>
          <Link to={'/'}>
            <img className="logo" src={Logo} alt="mukdaejang" />
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link to={'/'}>회사소개</Link>
            </li>
            <li>
              <Link to={'/'}>망고플레이트 채용</Link>
            </li>
            <li>
              <Link to={'/'}>투자 정보</Link>
            </li>
            <li>
              <Link to={'/'}>브랜드 가이드라인</Link>
            </li>
            <li>
              <Link to={'/'}>망고플레이트 비즈니스</Link>
            </li>
            <li>
              <Link to={'/'}>광고 문의</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to={'/'}>공지사항</Link>
            </li>
            <li>
              <Link to={'/'}>이용약관</Link>
            </li>
            <li>
              <Link to={'/'}>비회원 이용자 이용정책</Link>
            </li>
            <li>
              <Link to={'/'}>개인정보처리방침</Link>
            </li>
            <li>
              <Link to={'/'}>위치기반서비스 이용약관</Link>
            </li>
            <li>
              <Link to={'/'}>커뮤니티 가이드라인</Link>
            </li>
            <li>
              <Link to={'/'}>청소년보호정책</Link>
            </li>
            <li>
              <Link to={'/'}>홀릭 소개</Link>
            </li>
            <li>
              <Link to={'/'}>문의하기</Link>
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
              사업자 등록번호: 742-86-00224{' '}
              <Link to={'/'}>[사업자정보확인]</Link>
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
