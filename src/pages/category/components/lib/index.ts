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
}