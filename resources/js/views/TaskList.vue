<template>
    <div class="container">
        <ModalAlert :show="alertProps.show" :type="alertProps.type" :message="alertProps.message"/>
        <div class="row">
            <div class="col-sm-12">
                <div class="head-actions d-flex justify-content-between align-items-center">
                    <h1 class="page-header">Task List</h1>
                    <button class="add-task" @click="showTaskCreateModal"><i class="fas fa-plus"></i></button>
                    <TaskCreateModal :taskCreateModalShow="taskCreateModalShow" />
                    <TaskEditModal :taskEditModalShow="taskEditModalShow" :task="getEditingTaks"/>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <div class="task-list">
                    <ul class="list">
                        <Task v-for="(task, index) in getTasks" :key="task.id" :task="task" :index="index" />
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Task from '../components/Task';
    import TaskCreateModal from '../components/TaskCreateModal';
    import TaskEditModal from '../components/TaskEditModal';
    import ModalAlert from '../components/ModalAlert';

    export default {
        name: "TaskList",
        data() {
            return {}
        },
        methods: {
            showTaskCreateModal() {
                this.$store.dispatch('showTaskCreateModal');
            }
        },
        computed: {
            getTasks() {
                return this.$store.state.tasks;
            },
            taskCreateModalShow() {
                return this.$store.state.taskCreateModalShow
            },
            taskEditModalShow() {
                return this.$store.state.taskEditModalShow
            },
            alertProps() {
                return this.$store.getters.getAlertProps
            },
            getEditingTaks() {
                return this.$store.getters.getEditingTask;
            }
        },
        components: {Task, TaskCreateModal, TaskEditModal, ModalAlert}
    }
</script>

<style scoped lang="scss">
    .head-actions {
        padding: 20px 0;

        .add-task {
            width: 50px;
            height: 50px;
            color: #fff;
            cursor: pointer;
            border: none;
            background-color: #486EE3;
            -webkit-border-radius: 50%;
            -moz-border-radius: 50%;
            border-radius: 50%;

        }
    }
    .task-list {
        ul {
            padding-left: 0;
            list-style-type: none;
        }
    }
</style>