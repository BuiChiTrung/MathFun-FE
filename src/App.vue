<template>
  <router-view :key="$route.fullPath"/>
</template>

<style lang="scss">
@import 'assets/styles/styles';
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');

html {
  font-size: 10px;
}

@media (max-width: 1200px) {
  html {
    font-size: 9px;
  }
}

@media (max-width: 992px) {
  html {
    font-size: 8px;
  }
}

@media (max-width: 768px) {
  html {
    font-size: 7px;
  }
}

body {
  margin: 0;
  width: 100vw;
  height: 100vh;
  font-family: "Open Sans", sans-serif;
}

#app {
  color: #2c3e50;
  display: flex;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

::-webkit-scrollbar {
  width: 0.7rem;
}

/* Track */
::-webkit-scrollbar-track {
  //box-shadow: inset 0 0 2px grey;
  border-radius: 1px;
  background: white;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #bdc3c7;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: grey;
}

#content {
  background: linear-gradient(45deg, rgba(123, 210, 120, 0.7), rgba(255, 255, 255, 0.7)), url("./assets/images/background.png");
  background-size: cover;
  flex-grow: 1;
  height: 100vh;
  padding: 0 3rem;
}

.btn-navigation {
  position: absolute;
  border-radius: 3rem;
  padding: 1rem;
  right: 0;
  font-weight: bold;
  color: white !important;
  background: $main-color-2;
}

.btn-navigation:hover {
  cursor: pointer;
  background: $main-color-1;
  color: black !important;
}

.btn-navigation.green {
  background: $main-color-1;
  color: black !important;
}

.btn-navigation.green:hover {
  color: white !important;
  background: $main-color-2;
}
</style>
