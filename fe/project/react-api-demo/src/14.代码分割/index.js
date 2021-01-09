import React from 'react';
const OtherComponent = React.lazy(() => import('./OtherComp'));
import('./math').then(math => {
  console.log(math.add(12, 23));
});

export default () => (
  <div>
    <pre>
      代码分割的最佳方式是通过动态 import() 语法。
      该语法被webpack 或者 新的es提案支持
    </pre>
    
    <pre>
      React.lazy()
      React.Suspense
    </pre>
    <React.Suspense fallback={<div>Loading...</div>}>
      <OtherComponent />
    </React.Suspense>
  </div>
);
