import { useCallback, useEffect, useMemo, useState } from "react";

interface ReturnUseInput<T> {
  value: T;
  onChange: (value: T) => void;
  reset: () => void;
}

const useInput = <T>(initialValue: T): ReturnUseInput<T> => {
  const [value, setValue] = useState(initialValue);

  const onChange = useCallback((value: T) => {
    setValue(value);
  }, []);

  const reset = useCallback(() => {
    setValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return useMemo(() => {
    return {
      value,
      onChange,
      reset,
    };
  },[onChange, reset, value]);
};

export default useInput;
