<template>
    <li class="task d-flex align-items-center">
        <button class="task-check" v-bind:class="{ checked : isDone(task.id) }" @click="toggeDone(index)">
            <i class="far fa-check-circle"></i>
        </button>
        <p>{{ task.title }}</p>
        <button class="task-menu" :id="'navbarDropdownMenuLink' + index" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="fas fa-ellipsis-v"></i>
        </button>

        <ul class="dropdown-menu" :aria-labelledby="'navbarDropdownMenuLink' + index">
            <li class="dropdown-item" @click="showTaskEditModal(task)">Edit</li>
            <li class="dropdown-item" @click="removeTask(index)">Remove</li>
        </ul>
    </li>
</template>

<script>


    export default {
        name: "Task",
        props: {
            task: Object,
            index: Number
        },
        data() {
            return {

            }
        },
        methods: {
            toggeDone(index) {
                this.$store.dispatch('toggleDone', index)
            },
            getTask(id) {
                return this.$store.getters.getTask(id)
            },
            isDone(id) {
                return this.getTask(id).done;
            },
            removeTask(index) {
                this.$store.dispatch('removeTask', index);
            },
            showTaskEditModal(task) {
                this.$store.dispatch('showTaskEditModal');
                this.$store.dispatch('setEditingTask', task);
            }
        }
    }
</script>

<style scoped lang="scss">
    .task {
        background-color: #fff;
        color: #35495E;
        padding: 12px;
        font-size: 15px;
        border-bottom: 1px solid #ebebeb;
        position: relative;

        p {
            margin-bottom: 0;
        }

        .task-check, .task-menu {
            background-color: transparent;
            border: none;
            color: #cdcdcd;
            margin-right: 10px;
            font-size: 18px;
        }

        .task-check.checked {
            color: #41B783;
        }

        .task-check.checked ~ p {
            text-decoration: line-through;
        }

        .task-menu {
            position: absolute;
            right: 12px;
            top: 12px;
        }
        
        .dropdown-menu .dropdown-item {
            cursor: pointer;
        }
        .dropdown-menu .dropdown-item:active {
            background-color: inherit;
            color: inherit;
        }
    }
</style>