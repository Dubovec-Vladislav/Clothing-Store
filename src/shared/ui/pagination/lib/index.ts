// Custom pagination
export const defineNumberOfPages = (dataLength: number, pageLimit: number, currentPage: number) => {
  const numberOfPages: number | undefined = dataLength && Math.ceil(dataLength / pageLimit);
  const arrayOfPages: number[] = [];

  for (let i = 1; numberOfPages && i <= numberOfPages; i++) arrayOfPages.push(i);

  if (arrayOfPages.length > 7) {
    const newArrayOfPages: number[] = [];
    arrayOfPages.forEach(
      pageNumber => (
        pageNumber === 1 // If this is the first page (1)
        || pageNumber === arrayOfPages.length // Or if this is the last page (2)
        || (currentPage < 4
          ? (pageNumber >= currentPage - 2 && pageNumber < 7) // Or if the current page is less than 4, then increase the right border
          : (pageNumber >= currentPage - 2 && pageNumber <= currentPage + 2))  // Or this page is within +/- 2 pages of the current page (3)
      ) && newArrayOfPages.push(pageNumber) // Then we add it
    )

    return newArrayOfPages;
  };

  return arrayOfPages;
}