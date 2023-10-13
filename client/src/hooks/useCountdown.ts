import React from 'react';

function useCountdown(duration: number) {
  const [number, setNumber] = React.useState(duration);

  React.useEffect(() => {
    const intervalId = window.setInterval(() => {
      setNumber(n => {
        if (n <= 0) {
          window.clearInterval(intervalId);

          return n;
        }

        return n - 1;
      });
    }, 1000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return number;
}

export default useCountdown;
