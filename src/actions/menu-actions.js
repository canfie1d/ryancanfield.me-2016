export const HOVER_MENU_ITEM = 'HOVER_MENU_ITEM';

export function toggleMenuItem(item) {
  return {
    type            : HOVER_MENU_ITEM,
    currentMenuItem : item
  };
};
