<template>
<div class="loading-page">
  <div class="loading-text"><i class="fa fa-spin fa-spinner"></i> Loading...</div>
</div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.loading-page {
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: lightgray;
  top: 0;
  left: 0;
  // z-index: 1899;

  .loading-text {
    position: absolute;
    width: 100%;
    line-height: 30px;
    font-size: 18px;
    top: 50%;
    left: 0;
    margin-top: -15px;
    text-align: center;
    font-weight: 700;
    vertical-align: middle;
    color: gray;
  }
}
</style>
