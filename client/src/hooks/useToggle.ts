import React from 'react';

function useToggle(initialValue: boolean) {
  const t = typeof initialValue;
  const isBoolean = t === 'boolean';

  if (!isBoolean) {
    throw new Error(
      `Invalid function argument type: expected 'boolean' instead got ${t}`,
    );
  }

  const [value, setValue] = React.useState(initialValue);

  function toggleValue() {
    setValue(v => !v);
  }

  return [value, toggleValue] as const;
}

export default useToggle;
