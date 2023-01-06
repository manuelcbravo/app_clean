<template>
    <div>
     <!-- Preloader -->
     <!-- <div id="preloader">
        <div class="spinner-grow text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div> -->
    
      <!-- Internet Connection Status -->
      <div class="internet-connection-status" id="internetStatus"></div>
      <div id="setting-popup-overlay" class=""></div>
        <Notifications/>
        <Header/>
        <SideBar/>
            <slot name="body">
                
            </slot>
        <BottomBar/>
    </div>
</template>
<script>
import Header from './Header.vue';
import SideBar from './SideBar.vue';
import BottomBar from './BottomBar.vue';
import Notifications from './Notifications.vue';

export default {
    name: "Layout",
    data() {
        return {
        }
    },
    components: { Header, SideBar, BottomBar, Notifications }
}
</script>