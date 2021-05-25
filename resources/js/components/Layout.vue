<template>
    <div class="container" :dir="dir">
        <div class="row">
            <Slide v-if="sidebarToggleBtn && !rtl" disableEsc isOpen noOverlay style="background-color: white" :crossIcon="false" width="270">
                <sidebar></sidebar>
            </Slide>
            <Slide v-else-if="!sidebarToggleBtn && !rtl" disableEsc  isOpen :burgerIcon="false" :crossIcon="false" width="270"
                   disableOutsideClick noOverlay
                   style="background-color: white">
                <sidebar></sidebar>
            </Slide>
            <Slide v-else-if="sidebarToggleBtn && rtl" disableEsc isOpen right
                   noOverlay :crossIcon="false"
                   style="background-color: white" width="270">
                <sidebar></sidebar>
            </Slide>
            <Slide v-else-if="!sidebarToggleBtn && rtl" disableEsc isOpen right :burgerIcon="false" :crossIcon="false" width="270"
                   disableOutsideClick noOverlay
                   style="background-color: white">
                <sidebar></sidebar>
            </Slide>
        </div>
        <div :class="{content:!rtl,rtlContent:rtl}">
            <div class="row">
                <navbar></navbar>
            </div>
            <div class="row">
                <router-view/>
                <vue-progress-bar></vue-progress-bar>
                <footerr class="w3-animate-opacity"></footerr>
            </div>
        </div>
    </div>
</template>

<script>
    import sidebar from './Sidebar.vue'
    import Contact from "./pages/Contact";
    import Navbar from "./Navbar";
    import {Slide} from 'vue-burger-menu'
    import Footerr from "./pages/Footerr";

    export default {
        components: {Footerr, Navbar, Contact, sidebar, Slide},
        data() {
            return {
                sidebarToggleBtn: false,
                rtl: false,
                dir: 'ltr'
            }
        },
        mounted() {
            this.$Progress.finish()
            if (this.$i18n.locale == 'en') {
                this.rtl = false
                this.dir = 'ltr'
            } else {
                this.rtl = true
                this.dir = 'rtl'
            }
            // console.log('Component mounted.')
            if (window.innerWidth < 1000) {
                this.sidebarToggleBtn = true
            } else {
                this.sidebarToggleBtn = false
            }
        },
        created () {
            //  [App.vue specific] When App.vue is first loaded start the progress bar
            this.$Progress.start()
            //  hook the progress bar to start before we move router-view
            this.$router.beforeEach((to, from, next) => {
                //  does the page we want to go to have a meta.progress object
                if (to.meta.progress !== undefined) {
                    let meta = to.meta.progress
                    // parse meta tags
                    this.$Progress.parseMeta(meta)
                }
                //  start the progress bar
                this.$Progress.start()
                //  continue to next page
                next()
            })
            //  hook the progress bar to finish after we've finished moving router-view
            this.$router.afterEach((to, from) => {
                //  finish the progress bar
                this.$Progress.finish()
            })
        }
    }
</script>
<style>
    .bm-burger-button {
        /*position: fixed;*/
        width: 30px;
        /*height: 45px;*/
        left: 7px;
        right: 7px!important;
        top: 20px;
        cursor: pointer;
    }
    .bm-item-list {
        margin-left: 0% !important;
    }
    .bm-menu {
        background-color: white !important;
        padding-top: 20px!important;
        -webkit-box-shadow: 0px -4px 46px -4px rgba(0, 0, 0, 0.38);
        -moz-box-shadow: 0px -4px 46px -4px rgba(0, 0, 0, 0.38);
        box-shadow: 0px -4px 46px -4px rgba(0, 0, 0, 0.38);
    }
    .content {
        margin-left: 250px;
    }

    .rtlContent {
        margin-right: 250px;
    }

    @media screen and (max-width: 1000px) {

        .content {
            margin-left: 0%;
        }

        .rtlContent {
            margin-right: 0%;
        }
    }
</style>