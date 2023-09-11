export {
  clothApi,
  useGetClothingItemsQuery as getClothingItems,
  useGetClothingItemsByPageQuery as getClothingItemsByPage,
  useGetClothingItemByIDQuery as getClothingItemById,
  useGetTopSellingClothingQuery as getTopSellingClothing,
  useGetNewClothingQuery as getNewClothing,
} from './clothApi'
export type { ClothingInterface, ImageObjectInterface} from './clothApi'