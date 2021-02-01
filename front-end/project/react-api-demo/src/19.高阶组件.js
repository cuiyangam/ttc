import React from 'react';

export default () => (
  <div>
    
      过滤掉非此 HOC 额外的 props，且不要进行透传 <br/>
      const |extraProp, ...passThroughProps|  = this.props;<br/>

      包装显示名称以便轻松调试<br/>
      WithSubscription.displayName = `WithSubscriptionWrappedComponent`;<br/> 
   
  </div>
);
