// Custom pagination
export const defineNumberOfPages = (
  dataLength: number,
  pageLimit: number,
  currentPage: number
) => {
  const numberOfPages: number | undefined =
    dataLength && Math.ceil(dataLength / pageLimit);
  const arrayOfPages: number[] = [];

  for (let i = 1; numberOfPages && i <= numberOfPages; i++)
    arrayOfPages.push(i);

  if (arrayOfPages.length > 7) {
    const newArrayOfPages: number[] = [];
    arrayOfPages.forEach(
      (pageNumber) =>
        (pageNumber === 1 || // If this is the first page
          pageNumber === arrayOfPages.length || // Or if this is the last page
          (currentPage < 4
            ? pageNumber >= currentPage - 2 && pageNumber < 7 // Or if the current page is less than 4, then increase the right border (Optional)
            : currentPage > arrayOfPages.length - 4
            ? pageNumber >= arrayOfPages.length - 5 &&
              pageNumber <= currentPage + 2 // Or if the page is 4 pages before the last one, then increase the left border (Optional)
            : pageNumber >= currentPage - 2 &&
              pageNumber <= currentPage + 2)) && // Or this page is within +/- 2 pages of the current page
        newArrayOfPages.push(pageNumber) // Then we add it
    );

    // Then the zero will be replaced by an ellipsis
    newArrayOfPages[1] > newArrayOfPages[0] + 1 &&
      newArrayOfPages.splice(1, 0, 0); // If the second element does not differ by 1 from the first, then insert zero
    newArrayOfPages[newArrayOfPages.length - 1] >
      newArrayOfPages[newArrayOfPages.length - 2] + 1 &&
      newArrayOfPages.splice(newArrayOfPages.length - 1, 0, 0); // If the last element differs from the penultimate one by more than 1, then insert zero

    return newArrayOfPages;
  }

  return arrayOfPages;
};
