<template>
    <transition name="slide-fade">
        <div class="modal-alert alert" :class="type" role="alert" v-if="show">
            {{ message }}
        </div>
    </transition>
</template>

<script>
    export default {
        name: "ModalAlert",
        props: {
            show: Boolean,
            type: String,
            message: String,
        }
    }
</script>

<style scoped>
    .modal-alert {
        position: fixed;
        min-width: 25%;
        right: 0;
        top: 0;
        z-index: 999;
        text-align: center;
    }

    .slide-fade-enter-active {
        transition: all .3s ease;
    }
    .slide-fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active до версии 2.1.8 */ {
        transform: translateX(10px);
        opacity: 0;
    }
</style>