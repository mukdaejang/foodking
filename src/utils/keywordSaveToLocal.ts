export const KeywordSaveToLocalStorage = (keyword: string) => {
  let recentSearch: any = localStorage.getItem('recentSearch');
  recentSearch = recentSearch === null ? [] : JSON.parse(recentSearch);
  if (recentSearch.length > 5) {
    recentSearch = recentSearch.slice(0, 5);
  }
  recentSearch = new Set([keyword, ...recentSearch]);
  localStorage.setItem('recentSearch', JSON.stringify([...recentSearch]));
};
