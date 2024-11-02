import {useCallback, useState} from 'react';

const useDebounce = (callback: () => void, delay: number) => {
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  const reset = useCallback(() => {
    if (timer) {
      clearTimeout(timer);
    }
  }, [timer]);

  const start = useCallback(() => {
    reset();
    const newTimer = setTimeout(() => {
      callback();
    }, delay);
    setTimer(newTimer);
  }, [callback, delay, reset]);

  return {start, reset};
};

export default useDebounce;
