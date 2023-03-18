import React from 'react';

const FunctionCommon = {
  SleepMs : (ms: number = 0): Promise<void> => {
    return new Promise(resolve => setTimeout(resolve, ms));
  },
};

export default FunctionCommon