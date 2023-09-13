import { ClothingInterface } from "app/api"

export const getCommonClothingVariants = (
  dataSortedByColor: ClothingInterface[] | undefined,
  dataSortedBySize: ClothingInterface[] | undefined): ClothingInterface[] | undefined => {

  // Union of two arrays
  const combinedClothing = dataSortedBySize && dataSortedByColor?.concat(dataSortedBySize);
  const commonClothingVariants: ClothingInterface[] = [];

  // If item is contained in both arrays and has not yet been added, then add
  combinedClothing?.forEach(item => {
    if (dataSortedByColor?.includes(item) && dataSortedBySize?.includes(item)) {
      !commonClothingVariants.includes(item) && commonClothingVariants.push(item)
    }});

  return commonClothingVariants;
}