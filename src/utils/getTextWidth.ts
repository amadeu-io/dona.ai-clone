const getTextWidth = (text: string, fontWeight: number): number => {
  const canvas = document.createElement("canvas")
  const context = canvas.getContext("2d")

  context.font = `${fontWeight} 14px Roboto`

  const metrics = context.measureText(text)
  return metrics.width
}

export default getTextWidth
