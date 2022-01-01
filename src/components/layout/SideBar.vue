<template>
  <aside v-if="showSidebar" id="sidebar">
    <router-link to="/" id="logo">
      <img id="logo-icon" src="@/assets/icons/logo-icon.png" alt="logo">
      <img id="logo-title" src="@/assets/icons/logo-title.png" alt="logo">
    </router-link>
    <Topic title="Đếm hình vuông, chữ nhật" topicId="1"/>
    <Topic title="Đếm đoạn thẳng, tam giác" topicId="2"/>
    <Topic title="Đếm hình khối" topicId="3"/>
    <Topic title="Suy luận bằng loại trừ" topicId="4"/>
    <Topic title="Suy luận bằng bảng" topicId="5"/>
  </aside>
</template>

<script>
import Topic from "./Topic";
import {mapState} from 'vuex';

export default {
  name: "SideBar",
  components: {Topic},
  computed: mapState(['showSidebar'])
}
</script>

<style lang="scss">
@import 'src/assets/styles/styles';

#sidebar {
  width: $sidebar-width;
  //height: 100vh;
}

@media (max-width: 768px) {
  #sidebar {
    width: 10rem;
    .topic {
      @include flex-center-center;
    }
    .topic-img {
      width: 5rem;
      margin: 0;
    }
    .topic-title {
      display: none;
    }

    #logo-title {
      display: none;
    }
  }
}

@media (max-width: 500px) {
  #sidebar {
    width: 5rem;
    .topic-img {
      width: 3rem;
    }
  }

  img {
    width: 4rem;
  }
}

#logo {
  display: block;
  margin: 2rem auto;
  @include flex-center;
  justify-content: center;
  #logo-title {
    margin-left: 1.5rem;
  }
}
</style>
