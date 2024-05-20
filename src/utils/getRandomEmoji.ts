import { emojiList } from "../data/emojiList"

const getRandomEmoji = (): string => {
  const randomIndex = Math.floor(Math.random() * emojiList.length)
  return emojiList[randomIndex]
}

export default getRandomEmoji
