import React, { FunctionComponent } from 'react';

export const Loading: FunctionComponent = () => {
  return (
    <div className="spinner-grow" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
};
