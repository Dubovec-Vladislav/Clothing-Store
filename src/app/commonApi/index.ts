export {
  clothApi,
  useGetClothingItemsQuery as getClothingItems,
  useGetClothingItemsByCategoryQuery as getClothingItemsByCategory,
  useGetClothingItemsByCategoryAndPageQuery as getClothingItemsByCategoryAndPage,
  useGetClothingItemsByCategoryAndPageAndSortQuery as getClothingItemsByCategoryAndPageAndSort,
  useGetClothingItemByIDQuery as getClothingItemById,
  useGetTopSellingClothingQuery as getTopSellingClothing,
  useGetNewClothingQuery as getNewClothing,
  useGetClothingItemsBySearchQuery as getClothingItemsBySearch,
  useGetClothingItemsBySearchAndPageQuery as getClothingItemsBySearchAndPage,
} from "./clothApi";
export type { ClothingInterface, ImageObjectInterface } from "./clothApi";
