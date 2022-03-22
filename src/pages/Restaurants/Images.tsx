import { FC } from 'react';
import styled from '@emotion/styled';

const ImagesContainer = styled.ul<{ size: string }>`
  display: flex;

  li {
    width: ${({ size }) => (size === 'small' ? '8rem' : '20%')};
    height: ${({ size }) => (size === 'small' ? 8 : 23.5)}rem;
    margin-right: ${({ size }) => (size === 'small' ? '0.6' : '0.4')}rem;

    &:last-of-type {
      margin-right: 0;
    }
  }

  button {
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export interface ImageProps {
  id?: string;
  src: string;
  title: string;
}

interface ImagesProps {
  images: ImageProps[];
  size: 'small' | 'big';
}

export const Image: FC<ImageProps> = ({ src, title }) => (
  <li>
    <button>
      <img src={src} alt={title} />
    </button>
  </li>
);

const Images = ({ images, size }: ImagesProps) => {
  return (
    <ImagesContainer size={size}>
      {images.map(({ id, src, title }) => (
        <Image key={id} src={src} title={title} />
      ))}
    </ImagesContainer>
  );
};

export default Images;
