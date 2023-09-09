export const defineNumberOfPages = (dataLength: number, pageLimit: number, currentPage: number) => {
  const numberOfPages: number | undefined = dataLength && Math.ceil(dataLength / pageLimit);
  const arrayOfPages: number[] = [];

  for (let i = 1; numberOfPages && i <= numberOfPages; i++) arrayOfPages.push(i);

  if (arrayOfPages.length > 7) {
    const newArrayOfPages: number[] = [];
    arrayOfPages.forEach(
      pageNumber => (
        pageNumber === 1
        || pageNumber === arrayOfPages.length
        || (pageNumber >= currentPage - 2 && pageNumber <= currentPage + 2)
      ) && newArrayOfPages.push(pageNumber)
    )

    return newArrayOfPages;
  };

  return arrayOfPages;
}