<template>
    <!-- Footer Nav -->
  <div class="footer-nav-area" id="footerNav">
    <div class="container px-0">
      <!-- Footer Content -->
      <div class="footer-nav position-relative">
        <ul class="h-100 d-flex align-items-center justify-content-between ps-0">
          <li>
            <NuxtLink to="/home/">
              <i class="bi bi-house"></i>
              <span>Schedule</span>
            </NuxtLink>
          </li>

          <li>
            <NuxtLink to="/treatment/">
              <i class="bi bi-collection"></i>
              <span>Info</span>
            </NuxtLink>
          </li>

          <li>
            <NuxtLink to="/contacts/">
              <i class="bi bi-folder2-open"></i>
              <span>Contacts</span>
            </NuxtLink>
          </li>

          <li>
            <NuxtLink to="/chat/">
              <i class="bi bi-chat-dots"></i>
              <span>Chat</span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style>
/* home route and active route will show in bold as it matches / and /about */
a.nuxt-link-active {
  font-weight: bold;
  color: #0d5afd;
}

a.nuxt-link-active span{
  font-weight: bold;
  color: #0d5afd !important;
}

a.nuxt-link-active i{
  font-weight: bold;
  color: #0d5afd;
}
/* exact link will show the primary color for only the exact matching link */
a.nuxt-link-exact-active {
  color: #00c58e;
}

a,
a:visited {
  text-decoration: none;
  color: inherit;
}

a:hover {
  color: #00c58e;
}


</style>

<script>
export default {
  name: 'BottomBar',
}
</script>
