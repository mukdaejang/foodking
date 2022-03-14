import { FC } from 'react';
import styled from '@emotion/styled';

const TagButton: FC = styled.button`
  padding: 0.5rem 1rem;
  margin-right: 0.5rem;
  border-radius: 1.5rem;
  border: 1px solid ${(props) => props.theme.colors.gray100};
`;

type TagType = {
  content: string;
};

const Tag: FC<TagType> = ({ content }) => {
  return <TagButton>#{content}</TagButton>;
};

export default Tag;
