export const KeywordSaveToLocalStorage = (keyword: string) => {
  let recentSearch: any = localStorage.getItem('recentSearch');
  recentSearch = recentSearch === null ? [] : JSON.parse(recentSearch);
  if (recentSearch.length > 3) {
    recentSearch = recentSearch.slice(0, 4);
  }

  recentSearch = new Set([keyword, ...recentSearch]);
  localStorage.setItem('recentSearch', JSON.stringify([...recentSearch]));
};
