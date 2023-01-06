// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    srcDir: 'src',
    app: {
        head: {
          meta: [
           
          ],
          script: [
            { src:"/js/bootstrap.bundle.min.js"},
            { src:"/js/slideToggle.min.js"},
            { src:"/js/internet-status.js"},
            { src:"/js/tiny-slider.js"},
            { src:"/js/baguetteBox.min.js"},
            { src:"/js/countdown.js"},
            { src:"/js/rangeslider.min.js"},
            { src:"/js/vanilla-dataTables.min.js"},
            { src:"/js/index.js"},
            { src:"/js/dark-rtl.js"},
            { src:"/js/active.js"},
            { src:"/js/pwa.js"},
          ],
          link: [
            { rel: 'icon', href: '/img/core-img/favicon.ico' },
            { rel: 'stylesheet', href: '/style.css' },
            { rel: 'stylesheet', href: '/css/bootstrap.min.css' },
            { rel: 'stylesheet', href: '/css/bootstrap-icons.css' },
            { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;display=swap' },
          ],
          // please note that this is an area that is likely to change
          style: [
            
          ],
          noscript: [
           
          ]
        }
    }
})
