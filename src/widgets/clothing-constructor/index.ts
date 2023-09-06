export { ClothingConstructor } from './ui'
export {
  clothApi,
  useGetClothingItemsQuery as getClothingItems,
  useGetClothingItemByIDQuery as getClothingItemById,
  useGetTopSellingClothingQuery as getTopSellingClothing,
  useGetNewClothingQuery as getNewClothing,
  // useGetClothingCommentsQuery as getClothingComments,
} from './api'
export type { ClothingInterface } from './api'