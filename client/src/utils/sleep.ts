function sleep(seconds: number) {
  const t = typeof seconds;

  if (t !== 'number') {
    throw new Error(
      `Invalid function argument type: expected 'number' instead got ${t}`,
    );
  }

  return new Promise(resolve => {
    window.setTimeout(() => {
      resolve(null);
    }, seconds * 1000);
  });
}

export default sleep;
