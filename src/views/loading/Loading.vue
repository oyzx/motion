<template>
  <div class="bg">
      <img class="header-img" src="@/assets/loading/header.png" alt="">
      <p class="p p_1">RUN LAPS</p>
      <p class="p p_2">A FITNESS RUNNING CIRCLE</p>
      <img class="footer-img" src="@/assets/loading/footer.png" alt="">
  </div>
</template>

<script>
export default {
  data() {
      return {

      }
  }
};
</script>

<style scoped>
.bg {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: #21283C;
    text-align: center;
}
.bg .header-img {
    width: 70px;
    height: 60px;
    margin-top: 124px;
}
.bg .p {
    font-family: Arial Black;
    font-weight: Black;
    color: #FFFFFF;
}
.bg .p_2 {
    margin-top: 9px;
    font-size: 24px;
}
.bg .p_2 {
    margin-top: 268px;
    font-size: 18px;
}
.bg .footer-img {
    width: 100%;;
    height: 133px;
}
</style>
