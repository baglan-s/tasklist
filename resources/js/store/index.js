import Vue from 'vue/dist/vue.common';
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        editingTask: {},
        currentTaskId: 3,
        tasks: [
            {
                id: 1,
                title: 'Test first task',
                text: 'This is test first task content',
                done: false
            },
            {
                id: 2,
                title: 'Test second task',
                text: 'This is test second task content',
                done: false
            },
            {
                id: 3,
                title: 'Test third task',
                text: 'This is test third task content',
                done: false
            }
        ],
        taskCreateModalShow: false,
        taskEditModalShow: false,

        alertShow: false,
        alertMsg: null,
        alertType: null
    },
    getters: {
        getTask: state => id => {
            return state.tasks.find(tasks => tasks.id === id);
        },
        getAlertProps(state) {
            return {
                show: state.alertShow,
                message: state.alertMsg,
                type: state.alertType,
            }
        },
        getEditingTask(state) {
            return state.editingTask;
        }
    },
    mutations: {
        TOGGLE_DONE(state, index) {
            state.tasks[index].done = state.tasks[index].done ? false : true;
        },
        SHOW_TASK_CREATE_MODAL(state) {
            state.taskCreateModalShow = true;
        },
        HIDE_TASK_CREATE_MODAL(state) {
            state.taskCreateModalShow = false;
        },
        SHOW_TASK_EDIT_MODAL(state) {
            state.taskEditModalShow = true;
        },
        HIDE_TASK_EDIT_MODAL(state) {
            state.taskEditModalShow = false;
        },
        INCREMENT_TASK_ID(state) {
            state.currentTaskId++;
        },
        ADD_TASK(state, task) {
            state.tasks.push({
                id: state.currentTaskId,
                title: task.title,
                text: task.text,
                done: false
            })
        },
        UPDATE_TASK(state, task) {
            let tasksLength = state.tasks.length;
            for (let i = 0; i < tasksLength; i++) {
                if (state.tasks[i].id === task.id) {
                    state.tasks[i] = task;
                    break;
                }
            }
        },
        SET_EDITING_TASK(state, task) {
            state.editingTask = task;
        },
        REMOVE_TASK(state, index) {
            state.tasks.splice(index, 1)
        },
        SHOW_ALERT(state, data) {
            state.alertShow = true;
            state.alertMsg = data.message;
            state.alertType = data.type;

            setTimeout(() => {state.alertShow = false}, 2000)
        }
    },
    actions: {
        toggleDone({commit}, index) {
            commit('TOGGLE_DONE', index)
        },
        showTaskCreateModal({commit}) {
            commit('SHOW_TASK_CREATE_MODAL')
        },
        hideTaskCreateModal({commit}) {
            commit('HIDE_TASK_CREATE_MODAL')
        },
        showTaskEditModal({commit}) {
            commit('SHOW_TASK_EDIT_MODAL')
        },
        hideTaskEditModal({commit}) {
            commit('HIDE_TASK_EDIT_MODAL')
        },
        addTask({commit}, task) {
            commit('INCREMENT_TASK_ID');
            commit('ADD_TASK', task);
        },
        updateTask({commit}, task) {
            commit('UPDATE_TASK', task);
        },
        removeTask({commit}, index) {
            commit('REMOVE_TASK', index);
        },
        setEditingTask({commit}, task) {
            commit('SET_EDITING_TASK', task);
        },
        showAlert({commit}, data) {
            commit('SHOW_ALERT', data);
        }
    },
    modules: {},
});