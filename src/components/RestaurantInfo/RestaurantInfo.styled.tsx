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
`;
