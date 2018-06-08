import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import text from '@/components/text'

Vue.use(Router)

// 1.配置路由信息--配置前需要创建好需要路由指引的组件
const routes=[
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    	path:'/text',
    	name:'text',
    	component:text
    },
 ];

// 2.实例化路由信息
export default new Router({
  routes 
})
