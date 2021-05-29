<template>
    <div class="main">
        <Navbar/>
        <TaskList/>
    </div>
</template>

<script>
    import Navbar from './components/Navbar.vue';
    import TaskList from './views/TaskList';

    export default {
        name: "App",
        components: {Navbar, TaskList},
        data() {
            return {
                message: 'test'
            }
        }
    }
</script>

<style scoped>

</style>