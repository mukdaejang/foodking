import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { login } from '@/store/auth/auth-actions';
import { useAppDispatch } from '@/store/hooks';
import { loginModalDiv, closeBtn } from './Modal.styled';

interface socialLoginProps {
  closePortal: () => void;
}
const SocialLogin = ({ closePortal }: socialLoginProps) => {
  const dispatch = useAppDispatch();
  const googleLogin = () => {
    dispatch(login('Google'));
  };
  const facebookLogin = () => {
    dispatch(login('Facebook'));
  };
  const githubLogin = () => {
    dispatch(login('Github'));
  };

  return (
    <div css={loginModalDiv}>
      <button css={closeBtn} onClick={closePortal}>
        <FontAwesomeIcon icon={faXmark} size="2x" />
      </button>
      <h2>로그인</h2>
      <p>
        로그인 하면 가고싶은 식당을 <br></br>저장할 수 있어요
      </p>
      <div>
        <button onClick={googleLogin}>구글로 계속하기</button>
        <button onClick={facebookLogin}>페이스북으로 계속하기</button>
        <button onClick={githubLogin}>깃허브로 계속하기</button>
      </div>
    </div>
  );
};

export default SocialLogin;
