<template>
  <main id="content">
    <Title title="Trang chủ" buttonContent="Bắt đầu học" buttonLink="/lecture/1"/>
  </main>
</template>

<script>
import Title from "../../components/layout/Title";
export default {
  name: "HomeContent",
  components: {Title},
}
</script>

<style lang="scss" scoped>
@import 'src/assets/styles/styles';

</style>
