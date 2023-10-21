import { CommentInterface } from "entities/comment";

export const truncateTextInObjects = (
  data: CommentInterface[],
  MAX_WORDS: number
): CommentInterface[] => {
  return data?.map((item) => {
    const words = item.text.split(" ");
    const truncatedWords = words.slice(0, MAX_WORDS);
    const truncatedText = truncatedWords.join(" ");

    const ellipsis = words.length > MAX_WORDS ? "..." : "";

    return { ...item, text: truncatedText + ellipsis };
  });
};
