import styled from '@emotion/styled';

const TagButton = styled.button`
  padding: 0.5rem 1rem;
  margin-right: 0.5rem;
  border-radius: 1.5rem;
  border: 1px solid ${(props) => props.theme.colors.gray100};
`;

type TagType = {
  content: string;
};

const Tag = ({ content }: TagType) => {
  return <TagButton>#{content}</TagButton>;
};

export default Tag;
