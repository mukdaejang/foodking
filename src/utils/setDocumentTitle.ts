const { REACT_APP_TITLE: BASE_DOC_TITLE } = process.env;

export const setDocumentTitle = (documentTitle: string) =>
  documentTitle ? `${BASE_DOC_TITLE} | ${documentTitle}` : BASE_DOC_TITLE;
