import styled from '@emotion/styled';

interface Status {
  view: number;
  write: number;
  star: number;
}

export const TitleHeader = styled.header<{ status: Status }>`
  div.title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;

    div {
      display: flex;

      &:first-of-type {
        font-size: 1.6rem;
      }

      h1 {
        margin-right: 1rem;
      }

      span {
        color: ${({ theme }) => theme.colors.orange};
      }
    }
  }

  div:last-of-type {
    font-size: 0.9rem;

    span {
      &::after {
        margin-left: 0.4rem;
        margin-right: 1.2rem;
      }

      &.view::after {
        content: '${({ status }) => status.view.toLocaleString()}';
      }

      &.write::after {
        content: '${({ status }) => status.write.toLocaleString()}';
      }

      &.star::after {
        content: '${({ status }) => status.star.toLocaleString()}';
      }
    }
  }

  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray400};
`;

export const Descriptions = styled.div`
  font-size: 0.8rem;

  dl {
    display: flex;
    margin-bottom: 1rem;
  }

  dt {
    width: 8rem;
    color: ${({ theme }) => theme.colors.gray100};
  }

  dd {
    & > span {
      display: block;

      &:last-of-type {
        margin-top: 0.5rem;
      }

      &.address_jibun {
        color: ${({ theme }) => theme.colors.gray300};

        &::before {
          content: '지번';
          border: 1px solid ${({ theme }) => theme.colors.gray400};
          border-radius: 3px;
          margin-right: 0.5rem;
          font-size: 0.6rem;
          padding: 0.1rem;
        }
      }
    }

    ul.menus {
      width: 16rem;
      margin-bottom: 1rem;

      li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 0.5rem;
        padding-bottom: 0.4rem;
        border-bottom: 1px solid ${({ theme }) => theme.colors.gray500};
      }
    }

    button {
      width: 4rem;
      height: 4rem;

      & > img {
        width: 100%;
        height: 100%;
      }
    }
  }

  p {
    text-align: right;
    color: ${({ theme }) => theme.colors.gray100};
  }
`;
