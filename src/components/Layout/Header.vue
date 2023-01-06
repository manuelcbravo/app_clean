<template>
    <div class="header-demo-bg shadow-sm">
         <div class="container">
           <!-- # Header Two Layout -->
           <!-- # Copy the code from here ... -->
           <!-- Header Content -->
           
           <div class="header-content header-style-two position-relative d-flex align-items-center justify-content-between">
             <!-- Navbar Toggler -->
             <div class="setting-wrapper me-2">
               <div class="setting-trigger-btn" id="settingTriggerBtn">
                 <i class="bi bi-bell"></i>
                 <span></span>
               </div>
             </div>
   
             <!-- Logo Wrapper -->
             <div class="logo-wrapper">
               <a href="#">
                 <img src="../../img/bg-img/2.jpg" alt="" style="height:250px">
               </a>
             </div>
   
             <div class="navbar-content-wrapper d-flex align-items-center">
               <!-- Search -->
               <div class="search-wrapper me-2">
                 <a class="search-trigger-btn text-danger" :href="'tel:'+ contactos" @click="Call()">
                   <i class="bi bi-telephone-fill"></i>
                 </a>
               </div>
   
               <!-- Navbar Toggler -->
               <div class="navbar--toggler" id="affanNavbarToggler" data-bs-toggle="offcanvas"
                 data-bs-target="#affanOffcanvas" aria-controls="affanOffcanvas">
                 <div class="span-wrap">
                   <span class="d-block"></span>
                   <span class="d-block"></span>
                   <span class="d-block"></span>
                 </div>
               </div>
             </div>
           </div>
           <!-- # Header Two Layout End -->
         </div>
       </div>
     </template>
     <script>
     export default {
       data() {
         return {
           contactos: ''
         }
       },
       mounted() {
         document.addEventListener('click', function(e) {
           e = e || window.event;
           var target = e.target;   
           if (isElement(target, 'offcanvas-backdrop')) {
             document.querySelector('.offcanvas-backdrop').remove('.show');
             console.log( document.querySelector('.offcanvas-backdrop'));
           }
   
         }, false);
         
         function isElement(element, className) {
             return element.classList.contains(className) || element.closest(`.${className}`);
         }
   
         this.$nextTick(()=>{
          this.Call()
         })
       },
       methods:{
           Logout(){
             localStorage.removeItem('userAuth');
             this.$router.push('/auth/login')
           },
           Call(){
             let contactos = localStorage.getItem('contactos')
             if(contactos){
               this.contactos = JSON.parse(contactos)[5].numero
             }
           }
         }
     }
     </script>