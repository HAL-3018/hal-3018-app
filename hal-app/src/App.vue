<template>
  <v-app light>
    <v-navigation-drawer fixed temporary clipped v-model="drawer" app>
      <!--<img src="./assets/images/image.png" style="height:auto; width:100%">-->
      <v-list>
        <v-list-tile value="true" v-for="(item, i) in items" :key="i" :href="'#' + item.link" exact>
          <v-list-tile-action>
            <v-icon light v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed clipped-left app >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer dar:fixed="fixed" dark app>
      <v-spacer></v-spacer>
      <span style="color:white">HAL &copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        clipped: false,
        drawer: false,
        fixed: false,
        items: [{
          icon: 'explore',
          title: 'Explore',
          link: '/'
        },
        {
          icon: 'account_circle',
          title: 'Profile',
          link: '/profile'
        },
        {
          icon: 'wifi_tethering',
          title: 'News',
          link: '/news'
        },
        {
          icon: 'description',
          title: 'About',
          link: '/about'
        },
        {
          icon: 'settings',
          title: 'Settings',
          link: '/settings'
        }],
        active: null,
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Travel with HAL'
      }
    }
  }
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
