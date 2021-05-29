<template>
    <div class="nav-menu">
        <ul>
            <li>
                <a href="#">
                    <i class="fas fa-list"></i>
                </a>
            </li>
            <li>
                <a href="#">
                    <i class="fas fa-users"></i>
                </a>
            </li>
            <li>
                <a href="#">
                    <i class="fas fa-cogs"></i>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style scoped lang="scss">
    .nav-menu {
        min-width: 80px;
        background-color: #fff;
        padding-top: 30px;
        -webkit-box-shadow: 2px 0 10px 2px #ebebeb;
        -moz-box-shadow: 2px 0 10px 2px #ebebeb;
        box-shadow: 2px 0 10px 2px #ebebeb;

        ul {
            list-style-type: none;
            font-size: 22px;
            color: #888;

            li {
                margin-bottom: 30px;

                a {
                    color: inherit;
                    cursor: pointer;
                }

                a:hover, a.active {
                    color: #cdcdcd;
                }
            }
        }
    }
</style>