import { Fragment } from 'react';
import { ReviewWrite } from '@/components';
import { useAppSelector } from '@/store/hooks';

import { Helmet } from 'react-helmet-async';
import { setDocumentTitle } from '@/utils';

const ReviewWritePage = () => {
  const auth = useAppSelector(({ auth }) => auth.status);

  return (
    <Fragment>
      <Helmet>
        <title>{setDocumentTitle('리뷰 쓰기')}</title>
      </Helmet>
      <ReviewWrite></ReviewWrite>
    </Fragment>
  );
};

export default ReviewWritePage;
