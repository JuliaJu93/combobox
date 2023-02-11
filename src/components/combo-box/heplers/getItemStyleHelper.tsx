const getItemStyleHelper = (
  activeItem: boolean,
  changeItem: boolean
): string => {
  let itemStyle = '';
  if (activeItem && !changeItem) {
    itemStyle = 'active-item';
  } else if (activeItem && changeItem) {
    itemStyle = 'active-change-item';
  } else if (changeItem) {
    itemStyle = 'change-item';
  }
  return itemStyle;
};

export default getItemStyleHelper;
