import { CommentInterface } from "entities/comment"

// Since it is not possible to perform sorting on the API side, it will be done here.

export const sortTypes = [
  { name: "новые", urlName: "date", order: "asc" },
  { name: "старые", urlName: "date", order: "desc" },
  { name: "с высоким рейтингом", urlName: "rating", order: "desc" },
  { name: "с низким рейтингом", urlName: "rating", order: "asc" },
];

export const sortBySelectedType = (
  commentsList: CommentInterface[],
  urlName: string,
  order: string,
) => {
  let sortedData: CommentInterface[] = [];

  if (urlName === "date") {
    order === "asc"
      ? sortedData = commentsList?.slice().sort((a, b) => a.timeSinceCreatedDate! - b.timeSinceCreatedDate!) // Sort by date from lowest to highest
      : sortedData = commentsList?.slice().sort((a, b) => b.timeSinceCreatedDate! - a.timeSinceCreatedDate!) // Sort by date from highest to lowest
  } else if (urlName === "rating") {
    order === "asc"
      ? sortedData = commentsList?.slice().sort((a, b) => a.rating - b.rating) // Sort by rating from lowest to highest
      : sortedData = commentsList?.slice().sort((a, b) => b.rating - a.rating) // Sort by rating from highest to lowest
  }

  return sortedData;
}