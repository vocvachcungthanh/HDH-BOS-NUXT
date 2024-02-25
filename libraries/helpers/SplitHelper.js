export const keyGoogle = (string) => {
  const parts = string.split('=')
  return parts[parts.length - 1]
}
