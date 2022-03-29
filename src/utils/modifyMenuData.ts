export const modifyMenuData = (menu: string[]) => {
  const menus: { name: string; price: string }[] = [];
  if (menu) {
    for (let i = 0; i < menu?.length - 1; i += 2) {
      menus.push({
        name: menu[i],
        price: menu[i + 1].replace('원', ''),
      });
    }
  }
  return menus;
};
