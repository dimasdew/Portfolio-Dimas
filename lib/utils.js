/** Join class names, dropping falsy values. Keeps conditional classes readable. */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}
