<template>
    <div class="hold-transition sidebar-mini">
        <div class="wrapper">
            <!-- Content Wrapper. Contains page content -->
            <div class="content-wrapper ml-0">
                <!-- Main content -->
                <section class="content">
                    <div class="error-page">
                        <h2 class="headline text-warning"> 404</h2>

                        <div class="error-content">
                            <h3><i class="fas fa-exclamation-triangle text-warning"></i> Oops! Page not found.</h3>

                            <p>
                                We could not find the page you were looking for.
                                Meanwhile, you may <a href="../../index.html">return to dashboard</a> or try using the search form.
                            </p>

                            <form class="search-form">
                                <div class="input-group">
                                    <input type="text" name="search" class="form-control" placeholder="Search">

                                    <div class="input-group-append">
                                        <button type="submit" name="submit" class="btn btn-warning"><i class="fas fa-search"></i>
                                        </button>
                                    </div>
                                </div>
                                <!-- /.input-group -->
                            </form>
                        </div>
                        <!-- /.error-content -->
                    </div>
                    <!-- /.error-page -->
                </section>
                <!-- /.content -->
            </div>
            <!-- /.content-wrapper -->
            <footer class="main-footer ml-0">
                <div class="float-right d-none d-sm-block">
                    <b>Version</b> 3.0.2
                </div>
                <strong>Copyright &copy; 2014-2019 <a href="http://adminlte.io">AdminLTE.io</a>.</strong> All rights
                reserved.
            </footer>
        </div>
    </div>
</template>

<script>
    export default {
        name: "404"
    }
</script>

<style scoped>

</style>
