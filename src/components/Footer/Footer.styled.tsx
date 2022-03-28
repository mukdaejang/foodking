import styled from '@emotion/styled';

const StyledFooter = styled.footer`
  padding: 3rem 10rem;
  background-color: ${({ theme }) => theme.colors.gray200};
  color: ${({ theme }) => theme.colors.gray300};

  .upper {
    display: flex;

    nav {
      display: flex;

      ul {
        margin: 0 6rem;

        li {
          margin-bottom: 1rem;
        }
      }
    }
  }

  img.logo {
    width: 8rem;
    height: 4rem;
  }

  hr {
    border: 1px solid ${({ theme }) => theme.colors.gray300};
    margin-bottom: 2rem;
  }

  small {
    p {
      span {
        display: block;
        margin-bottom: 1rem;

        &:last-of-type {
          margin-top: 2rem;
        }
      }
    }
  }
`;

export default StyledFooter;
