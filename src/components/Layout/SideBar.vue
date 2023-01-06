<template>
    <div class="offcanvas offcanvas-start" id="affanOffcanvas" data-bs-scroll="true" tabindex="-1"
    aria-labelledby="affanOffcanvsLabel">

    <button class="btn-close btn-close-white text-reset" type="button" data-bs-dismiss="offcanvas"
      aria-label="Close"></button>

    <div class="offcanvas-body p-0">
      <div class="sidenav-wrapper">
        <!-- Sidenav Profile -->
        <div class="sidenav-profile bg-gradient">
          <div class="sidenav-style1"></div>

          <!-- User Thumbnail -->
          <div class="user-profile">
            <img src="../../img/bg-img/2.jpg" alt="">
          </div>

          <!-- User Info -->
          <div class="user-info">
            <h6 class="user-name mb-0">prueba</h6>
          </div>
        </div>

        <!-- Sidenav Nav -->
        <ul class="sidenav-nav ps-0">
          <li>
            <a href="#" @click.prevent="Logout()"><i class="bi bi-box-arrow-right"></i> Logout</a>
          </li>
        </ul>
        <!-- Copyright Info -->
        <div class="copyright-info">
          <p>
            <!-- <span id="copyrightYear"></span>
            &copy; Made by <a href="#">Designing World</a> -->
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import mixins from '~/Mixins/function.js';

export default {
  name: "SideBar",
  data() {
    return {
      user:{ }
    }
  },
  mounted() {
    // this.loading('aqui');
    this.$nextTick(()=>{
      let user = localStorage.getItem('userAuth')
      this.user = JSON.parse(user)
    })
  },
  mixins: [mixins],
  methods:{
      async Logout(){
        try{
            const res = await this.$api.$post('/logout.php', JSON.stringify({ id: this.user.id}));
            let user = res
            if(user.nota != "success"){
                this.errorSwal('Ooops...','Please try again.')
            }else{
              localStorage.removeItem('userAuth');
              this.$router.push('/auth/login')
            }
        }catch(e){
            this.errorSwal('Error', e)
        }
        
      }
    }
}
</script>