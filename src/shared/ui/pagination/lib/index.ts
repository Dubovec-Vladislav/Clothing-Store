export const defineNumberOfPages = (dataLength: number, pageLimit: number) => {
  const numberOfPages: number | undefined = dataLength && Math.ceil(dataLength / pageLimit);
  const arrayOfPages: number[] = [];
  for (let i = 1; numberOfPages && i <= numberOfPages; i++) arrayOfPages.push(i);
  return arrayOfPages
}