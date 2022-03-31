import { FC } from 'react';
import styled from '@emotion/styled';
import { ImageType } from '@/firebase/type';

const ImagesContainer = styled.ul<{ size: string }>`
  display: flex;

  li {
    width: ${({ size }) => (size === 'small' ? '8rem' : '20%')};
    height: ${({ size }) => (size === 'small' ? 8 : 22)}rem;
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
      object-fit: cover;
    }
  }
`;

interface ImagesProps {
  images: ImageType[];
  size: 'small' | 'big';
}

export const Image: FC<ImageType> = ({ title, src }) => (
  <li>
    <button>
      <img src={src} alt={title} />
    </button>
  </li>
);

const Images = ({ images, size }: ImagesProps) => {
  return (
    <ImagesContainer size={size}>
      {images.map(({ title, src }, i) => (
        <Image key={title + i} title={title} src={src} />
      ))}
    </ImagesContainer>
  );
};

export default Images;
