import { emojis } from "../data/emojis"

const getRandomEmoji = (): string => {
  const randomIndex = Math.floor(Math.random() * emojis.length)
  return emojis[randomIndex]
}

export default getRandomEmoji
