import Vue from 'vue/dist/vue.common';
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    // {
    //     path: "/",
    //     name: "task-list",
    //     component: TaskList,
    // },
];

const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;