import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AddTask from '@/views/AddTask.vue';
import TaskList from '@/views/TaskList.vue';
import CombinedView from '@/views/CombinedView.vue';

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView,
  },
  {
    path: '/addtask',
    name: 'AddTask',
    component: AddTask,
  },
  {
    path: '/tasklist',
    name: 'TaskList',
    component: TaskList,
  },
  {
    path: '/combined',
    name: 'CombinedView',
    component: CombinedView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
