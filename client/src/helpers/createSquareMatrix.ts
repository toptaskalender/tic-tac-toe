function createSquareMatrix(n: number, defaultValue: any = null) {
  const t = typeof n;
  const isNumber = t === 'number';

  if (!isNumber) {
    throw new Error(
      `Invalid function argument type: expected 'number' instead got ${t}`,
    );
  }

  return Array.from(Array(n), () => Array.from(Array(n), () => defaultValue));
}

export default createSquareMatrix;
