// 创建 Vue Router 实例分 4 步：
// 1. 注入插件；2. 配置路由和组件之间的应用关系；3. 创建 router 实例；4. 传出 router 实例。

import Vue from 'vue';
import VueRouter from 'vue-router';

// 1. 注入插件。
Vue.use(VueRouter);

// import HelloWorld from '@/components/HelloWorld'
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

// 2. 配置路由和组件之间的应用关系。

// (1) Vue Router 路由有两种，静态路由：页面 path 路径是确定的。动态路由：页面 path 路径不确定。
// 动态路由需要传入参数以确定 path 路径，需要 path 和 Component 的匹配关系。
// 动态路由也是传递数据的一种方式。传递参数主要有两种方式: params 和 query；获取参数一种方式：$route。
// params 类型传递方式: 在 path 后跟对应的值。
// query 类型传递方式: 对象中使用 query 的 key 传递，传递大量数据时可使用此方式。
// 获取参数需要通过路由对象 $route，在使用 Vue Router 的应用中，路由对象会被注入每个组件中，
// 并被赋值为 this.$route，路由对象表示当前激活的路由的状态信息，包含了当前 URL 解析得到的信息，
// 还有 URL 匹配到的路由记录。路由对象是不可变的，每次成功的导航后都会产生一个新的对象。
// 注意：在组件中，this.$router 为 Vue Router 实例，this.$route 为当前激活的路由信息对象。

// (2) “导航”表示路由正在发生改变。Vue Router 提供的导航守卫主要用来通过跳转或取消的方式守卫导航。
// 有多种机会植入路由导航过程中：全局的、路由独享的,、组件内的。
// 全局的：router.beforeEach、，router.beforeResolve、router.afterEach；
// 路由独享的：beforeEnter；
// 组件内的：beforeRouteEnter、beforeRouteUpdate、beforeRouteLeave。

// (3) 打包构建应用时，Javascript 包会变得非常大，影响页面加载。若不同路由对应的组件分割成
// 不同的代码块，然后当路由被访问的时候才加载对应组件，这样更高效的做法，叫做懒加载。

// 配置组件和路径的映射关系（全加载）
// import Home from '../components/Home';
// import HomeNews from '../components/HomeNews';
// import HomeMessage from '../components/HomeMessage';
// import About from '../components/About';
// import User from '../components/User';
// import Profile from '../components/Profile';

// 配置组件和路径的映射关系（懒加载）（懒加载的方式有三种，这是简单写法）
const Home = () => import('../components/Home');
const HomeNews = () => import('../components/HomeNews');
const HomeMessage = () => import('../components/HomeMessage');
const About = () => import('../components/About');
const User = () => import('../components/User');
const Profile = () => import('../components/Profile');

const routes = [
  {
    // 设置默认页：重定向到首页
    path: '',
    redirect: '/home'
  },
  // 首页
  {
    path: '/home',
    component: Home,
    // 元数据：描述数据的数据
    meta: {
      title: '首页'
    },
    // 嵌套路由：一个路径映射一个组件，路由里映射子路由。嵌套路由的实现分2步：
    // ①创建对应的子组件且在路由映射中配置对应的子路由；②在组件内部使用 <router-view> 标签。
    children: [
      {
        // 嵌套路由也可以设置默认页。设置默认页：重定向到首页新闻页
        path: '',
        redirect: 'news'
      },
      {
        // 子路由里配置 path 时不需要'/'
        path: 'news',
        component: HomeNews,
        meta: {
          title: '新闻'
        }
      },
      {
        path: 'message',
        component: HomeMessage
      }
    ]
  },
  // 关于
  {
    path: '/about',
    component: About,
    meta: {
      title: '关于'
    },
    // 路由独享导航守卫
    beforeEnter: (to, from, next) => {
      console.log('这是关于页（“About”）的路由独享导航守卫。');
      // 必须调用 next() 函数
      next();
    }
  },
  // 我的
  {
    // 动态路由：使用 params 类型传递参数
    path: '/user/:id',
    component: User,
    meta: {
      title: '我的'
    }
  },
  // 档案
  {
    // 动态路由：使用 query 类型传递参数
    path: '/profile',
    component: Profile,
    meta: {
      title: '档案'
    }
  }
];

// 3. 创建 router 实例。
const router = new VueRouter({
  // 引入配置
  routes,
  // 路由中改变路径的方式有两种: URL 的 hash 和 HTML5 的 history，默认用前者，这里改为后者。
  mode: 'history',
  // 当该标签对应的路由匹配成功时，Vue Router 会自动给当前匹配成功跳转的标签添加设置
  // 其为 router-link-active 类，linkActiveClass 用于修改为指定类。也可在标签中修改。
  linkActiveClass:'actived'
})

// 全局前置导航守卫：页面跳转前回调
router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title;
  console.log(to);
  console.log('这是全局前置导航守卫。');
  // 必须调用 next() 函数
  next();
})

// 全局后置钩子导航守卫：页面跳转后回调
router.afterEach((to, from) => {
  console.log('这是全局后置钩子导航守卫。');
})

// 4. 传出 router 实例。
export default router;