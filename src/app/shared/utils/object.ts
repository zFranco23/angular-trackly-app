type AnyObject = Record<string, any>;

export const getDifferences = <T extends AnyObject>(
  original: T,
  changed: T
): Partial<T> => {
  const diff: Partial<T> = {};

  const allKeys = new Set([...Object.keys(original), ...Object.keys(changed)]);

  for (const key of allKeys as Set<keyof T>) {
    const val1 = original[key];
    const val2 = changed[key];

    if (
      typeof val1 === 'object' &&
      typeof val2 === 'object' &&
      val1 !== null &&
      val2 !== null &&
      !Array.isArray(val1) &&
      !Array.isArray(val2)
    ) {
      const nestedDiff = getDifferences(val1, val2);
      if (Object.keys(nestedDiff).length > 0) {
        diff[key] = nestedDiff as T[keyof T];
      }
    } else if (val1 !== val2) {
      diff[key] = val2;
    }
  }

  return diff;
};
