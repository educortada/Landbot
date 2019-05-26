export const sortMessages = (message) => {
  return Object
    .values(message)
    .sort((a, b) => a.timestamp - b.timestamp)
}
