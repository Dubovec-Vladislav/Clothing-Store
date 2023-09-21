export {
  clothApi,
  useGetClothingItemsQuery as getClothingItems,
  useGetClothingItemsByPageQuery as getClothingItemsByPage,
  useGetClothingItemsByPageAndSortQuery as getClothingItemsByPageAndSort,
  useGetClothingItemByIDQuery as getClothingItemById,
  useGetTopSellingClothingQuery as getTopSellingClothing,
  useGetNewClothingQuery as getNewClothing,
} from './clothApi'
export type { ClothingInterface, ImageObjectInterface} from './clothApi'