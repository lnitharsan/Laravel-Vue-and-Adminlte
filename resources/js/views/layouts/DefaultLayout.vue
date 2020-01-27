<template>
    <div class="hold-transition sidebar-mini">
        <div class="wrapper">
            <!-- Navbar -->
            <navbar></navbar>
            <!-- /.navbar -->


            <!-- Main Sidebar Container -->
            <main-sidebar></main-sidebar>


            <!-- Content Wrapper. Contains page content -->
            <router-view></router-view>
            <!-- /.content-wrapper -->


            <!-- Control Sidebar -->
            <control-sidebar></control-sidebar>
            <!-- /.control-sidebar -->


            <!-- Main Footer -->
            <main-footer></main-footer>
        </div>
    </div>
</template>

<script>
    import Navbar from "../partials/Navbar";
    import MainSidebar from "../partials/MainSidebar";
    import ControlSidebar from "../partials/ControlSidebar";
    import MainFooter from "../partials/MainFooter";

    export default {
        data() {
            return {

            }
        },
        components: {
            Navbar, MainSidebar, ControlSidebar, MainFooter
        },
        computed: {
        },
        methods: {

        }
    };
</script>
