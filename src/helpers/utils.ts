type CreateFnType<T> = (index: number) => T;

export const createArray = <T>(
  fn: CreateFnType<T>,
  count: number,
): ReturnType<CreateFnType<T>>[] => {
  return Array.from({ length: count }).map((item, index) => {
    return fn(index);
  });
};
