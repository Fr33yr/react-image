import React, { lazy, Suspense } from 'react';

// lazy load of the component image with a loading messaje
const LazyImage = lazy(() => import('./Image'));

const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyImage height={500} width={500} url="https://example.com/my-image.jpg" />
      </Suspense>
    </div>
  );
};

export default App;