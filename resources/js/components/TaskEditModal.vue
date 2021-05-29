<template>
    <transition name="fade">
        <div class="modal-wrapper" v-if="taskEditModalShow">
            <div class="container">
                <div class="row d-flex justify-content-center">
                    <div class="col-md-5">
                        <div class="modal-box">
                            <div class="modal-box-header d-flex justify-content-end">
                                <button class="modal-close" @click="hideTaskEditModal">&times;</button>
                            </div>
                            <div class="modal-box-body">
                                <form action="">
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <p class="text-center">Task details</p>
                                            <ul v-if="errors.length > 0">
                                                <li v-for="error in errors" style="color: red;">{{ error }}</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-12 mb-3">
                                            <div class="form-group">
                                                <label for="taskName">Task Name</label>
                                                <input type="text" class="form-control" id="taskName" v-model="editingTask.title" required>
                                            </div>
                                        </div>
                                        <div class="col-sm-12 mb-3">
                                            <div class="form-group">
                                                <label for="taskText">Task Text</label>
                                                <textarea id="taskText" cols="30" rows="5" class="form-control" v-model="editingTask.text"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="modal-box-footer d-flex justify-content-end">
                                <button type="button" class="btn btn-success" @click="updateTask">Update</button>
                                <button type="button" class="btn btn-danger" @click="hideTaskEditModal">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "TaskEditModal",
        props: {
            task: Object,
            taskEditModalShow: Boolean
        },
        data() {
            return {
                errors: [],
            }
        },
        methods: {
            hideTaskEditModal() {
                this.$store.dispatch('hideTaskEditModal');
            },
            showAlert(message, type) {
                this.$store.dispatch('showAlert', {message, type});
            },
            validate() {
                this.errors = [];
                if (!this.task.title || this.task.title.trim().length === 0) this.errors.push('Task title is required');
                if (!this.task.text || this.task.text.trim().length === 0) this.errors.push('Task text is required');

                return this.errors.length === 0;
            },
            updateTask() {
                this.$store.dispatch('updateTask', this.editingTask);
                this.hideTaskEditModal();
                this.showAlert('Task has been updated successfuly', 'alert-success');
            }
        },
        computed: {
            editingTask() {
                return {
                    id: this.task.id,
                    title: this.task.title,
                    text: this.task.text,
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .modal-wrapper {
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.4);
        left: 0;
        top: 0;
        z-index: 9;

        .modal-box {
            margin-top: 100px;
            background-color: #fff;
            -webkit-border-radius: 4px;
            -moz-border-radius: 4px;
            border-radius: 4px;

            .modal-box-header {
                padding: 10px 20px;
                border-bottom: 1px solid #ebebeb;

                .modal-close {
                    background-color: transparent;
                    color: #888;
                    border: none;
                }
            }

            .modal-box-body {
                padding: 20px;

                form {
                    width: 100%;
                }
            }

            .modal-box-footer {
                padding: 10px 20px;
                border-top: 1px solid #ebebeb;

                button:first-of-type {
                    margin-right: 10px;
                }
            }
        }
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
        opacity: 0;
    }
</style>