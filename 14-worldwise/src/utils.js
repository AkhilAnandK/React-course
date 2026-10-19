export function getFlagImageUrl(emoji) {
  const codePoints = Array.from(emoji, (character) => character.codePointAt(0));

  if (
    codePoints.length !== 2 ||
    codePoints.some((codePoint) => codePoint < 127462 || codePoint > 127487)
  ) {
    throw new Error(`Invalid country flag emoji: ${emoji}`);
  }

  const countryCode = codePoints
    .map((codePoint) => String.fromCharCode(codePoint - 127397))
    .join("")
    .toLowerCase();

  return `https://flagcdn.com/w80/${countryCode}.png`;
}
