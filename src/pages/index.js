//pages>index.js
import Loadable from 'react-loadable';
// import Loading from './my-loading-component';
 // 意思是在加载的时候 显示 都加载组件没有组件的时候 我们可以写为
const Loading = () => null;  //加载时不现实loading
 
const home = Loadable({ 
  loader: () => import('./home'), //按需加载 点击时只加载一个页面
  loading: Loading,
});
const about = Loadable({ 
  loader: () => import('./about'),
  loading: Loading,
});
const experience = Loadable({ 
  loader: () => import('./experience'),
  loading: Loading,
});
const summary = Loadable({ 
  loader: () => import('./summary'),
  loading: Loading,
});
const contact = Loadable({ 
  loader: () => import('./contact'),
  loading: Loading,
});
export {
  home, about, experience, summary, contact
}//将页面导出