export function splitParagraph(string: string) {
  return string.split(/\n\s+/)
    .filter((value: string) => value)
}
