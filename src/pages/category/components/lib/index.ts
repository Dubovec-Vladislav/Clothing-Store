import { ClothingInterface } from "app/api"


export const getCommonVariantsFromArrays = (generalArray: ClothingInterface[][]): ClothingInterface[] => {
  const nonEmptyArraysCount = generalArray.filter(array => array.length > 0).length;

  // Combining arrays
  const combinedArray: ClothingInterface[] = generalArray.reduce((result, currentArray) => result.concat(currentArray), []);
  // Count the number of repeating elements (create a collection, key - item, value - amount)
  const itemCountMap = combinedArray.reduce((map, item) => map.set(item, (map.get(item) || 0) + 1),
    new Map<ClothingInterface, number>()
  );

  const commonClothingVariants: ClothingInterface[] = [];
  itemCountMap.forEach((key, value) => key === nonEmptyArraysCount && commonClothingVariants.push(value))

  return commonClothingVariants;
};


export const filterData = (data: ClothingInterface[] | undefined, filterFunction: (item: ClothingInterface) => boolean) => {
  return data?.filter(filterFunction) || [];
};


export const sortTypes = [
  { name: "новые", urlName: "timeSinceReleaseDate", order: "asc" },
  { name: "старые", urlName: "timeSinceReleaseDate", order: "desc" },
  { name: "с высоким рейтингом", urlName: "rating", order: "desc" },
  { name: "с низким рейтингом", urlName: "rating", order: "asc" },
  { name: "по цене (max)", urlName: "price", order: "desc" },
  { name: "по цене (min)", urlName: "price", order: "asc" },
];