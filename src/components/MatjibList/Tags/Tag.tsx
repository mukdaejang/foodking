import styled from '@emotion/styled';

const TagButton = styled.button`
  padding: 0.5rem 1rem;
  margin: 0.2rem 0.2rem;
  border-radius: 1.5rem;
  color: ${({ theme }) => theme.colors.gray100};
  border: 1px solid ${(props) => props.theme.colors.gray100};
  background-color: ${({ theme }) => theme.colors.white};
`;

export const TagBox = styled.div`
  padding: 10px;
`;

type TagType = {
  content: string;
};

export const Tag = ({ content }: TagType) => {
  return <TagButton>#{content}</TagButton>;
};
