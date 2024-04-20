// src/hooks/useDefault.js
import { useState } from 'react';

function useDefault(initialValue) {
  const [value, setValue] = useState(initialValue);

  return [value, setValue];
}

export default useDefault;
