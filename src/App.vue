<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <header id="app-header">

    </header>
    <main id="app-main">
      <aside id="app-main-aside">
      </aside>
      <article id="app-main-article">
        <router-view/>
      </article>
    </main>
    <footer id="app-footer">

    </footer>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
#app-header,#app-main,#app-footer{
  width: 100%;
}
#app-header,#app-footer{
  height: 12.5%;
  min-height: 50px;
  background: yellowgreen;
}
#app-main{
  width: 100%;
  height: 75%;
  max-height: clac(100% - 100px);
  clear: both;
  background: orangered;
}
#app-main-aside,#app-main-article{
  float: left;
  height: 100%;
}
#app-main-aside{
  width: 10%;
  min-width: 100px;
  background:lightseagreen;
}
#app-main-article{
  width: 90%;
  max-width:calc(100% - 100px);
  background:blueviolet;
}
</style>
