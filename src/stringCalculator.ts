export function add(numbers: string) {
  if (numbers === "") return 0;

  let delimiter = /[\n,]/;
  let numString = numbers;

  // Custom delimiter support
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    const delimiterPart = parts[0].slice(2);

    // Check if delimiter is in [brackets]
    if (delimiterPart.startsWith("[")) {
      // Match all delimiters between []
      const delimiters = Array.from(delimiterPart.matchAll(/\[(.*?)\]/g)).map(m => m[1]);
      delimiter = new RegExp(delimiters.map(d => escapeRegExp(d)).join("|"));
    } else {
      delimiter = new RegExp(`[${escapeRegExp(delimiterPart)}\n]`);
    }

    numString = parts[1];
  }

  const tokens = numString.split(delimiter).filter(n => n !== "");

  // Check for negatives
  const negatives = tokens.filter(n => parseInt(n) < 0);
  if (negatives.length > 0) {
    throw new Error(`Negative numbers are not allowed,${negatives.join(",")}`);
  }

  // Sum, ignoring > 1000
  return tokens.reduce((sum, n) => {
    const num = parseInt(n);
    if (num <= 1000) sum += num;
    return sum;
  }, 0);
}

// helper to safely escape regex symbols
function escapeRegExp(string: string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
