import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '/src/components/views/HomeView.vue';
import AddTask from '/src/components/views/AddTask.vue';
import TaskList from '/src/components/views/TaskList.vue';
import CombinedView from '/src/components/views/Combined.vue'
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
