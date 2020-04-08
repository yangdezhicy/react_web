import {
  home, about, experience, summary, contact
} from './pages' //导入页面
//通过组件配置路由
const routes = [
  {
    path: '/home',
    component: home
  },
  {
    path: '/about',
    component: about
  }
  ,
  {
    path: '/experience',
    component: experience
  }
  ,
  {
    path: '/summary',
    component: summary
  }
  ,
  {
    path: '/contact',
    component: contact
  }
];

export default routes