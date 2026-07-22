


export function getObjectEntries<
  T extends ArrayLike<T[keyof T]> |
  Record<keyof T, T[keyof T]>
>(
  object: T,
) {
  return Object.entries<T[keyof T]>(object);
  // as Array<[keyof T, T[keyof T]]>;
}