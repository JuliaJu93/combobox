const filterHelper = (options: string[], filterValue: string): string[] => {
  return options.filter((el) =>
    el.toUpperCase().includes(filterValue.toUpperCase())
  );
};

export default filterHelper;
