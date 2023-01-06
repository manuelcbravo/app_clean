<template>
    <!-- Preloader -->
<!-- <div id="preloader">
	<div class="spinner-grow text-primary" role="status">
		<span class="visually-hidden">Loading...</span>
	</div>
</div> -->
<!-- Internet Connection Status -->
<!-- # This code for showing internet connection status -->
<div class="internet-connection-status" id="internetStatus"></div>
<!-- Back Button -->
<div class="login-back-button">
	<a href="element-hero-blocks.html">
		<svg class="bi bi-arrow-left-short" width="32" height="32" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
			<path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"></path>
		</svg>
	</a>
</div>
<!-- Login Wrapper Area -->
<div class="login-wrapper d-flex align-items-center justify-content-center">
	<div class="custom-container">
		<div class="text-center px-4">
			<img class="login-intro-img" src="img/bg-img/36.png" alt="">
		</div>
		<!-- Register Form -->
		<div class="register-form mt-4">
			<h6 class="mb-3 text-center">Log in to continue to Affan.</h6>
            <div class="form-group">
                <input class="form-control" type="text" placeholder="Username">
            </div>
            <div class="form-group position-relative">
                <input class="form-control" id="psw-input" type="password" placeholder="Enter Password">
                <div class="position-absolute" id="password-visibility">
                    <i class="bi bi-eye"></i>
                    <i class="bi bi-eye-slash"></i>
                </div>
            </div>
            <NuxtLink to="/home/" class="btn btn-primary w-100" type="submit">Sign In</NuxtLink>
            <!-- <button class="btn btn-primary w-100" type="submit">Sign In</button> -->
		</div>
		<!-- Login Meta -->
		<div class="login-meta-data text-center">
			<a class="stretched-link forgot-password d-block mt-3 mb-1" href="page-forget-password.html">Forgot Password?</a>
			<p class="mb-0">Didn't have an account? <a class="stretched-link" href="page-register.html">Register Now</a>
			</p>
		</div>
	</div>
</div>
</template>
<script>
export default {
        name: "Login",
        head() {
            return {
                title: "Login"
            };
        },
        data(){
            return{
                model:{
                    email:'',
                    password:'',
                    token:'1'
                }
            }
        },
        mounted() {
            let user = localStorage.getItem('b55C1tJxCtH/6r637k3QQQ==')
            if(user != null){
                this.$router.push('/home/')
            }else{
                localStorage.clear()
            }
        },
        methods: {
            async Login(){
                this.loading()
                if(this.model.email !== '' && this.model.password !== ''){
                    try{
                        this.loadingClose()
                        const res = await this.$api.$post('/login.php', JSON.stringify(this.model));
                        let user = res
                        if(user.nota != "success"){
                            this.errorSwal('Error','The user name or password provided are wrong, please check them to sign in')
                        }else{
                            localStorage.setItem('userAuth',JSON.stringify(user))
                            this.$router.push('/home/')
                        }
                    }catch(e){
                        this.loadingClose()
                        this.errorSwal('Error', e)
                    }
                }
            },
        },
    }
</script>