<template>
    <div>
        <div class="w3-collapse w3-white w3-animate-left" style="width: 100%!important;overflow: hidden;">
            <router-link :to="`/${$i18n.locale}/home`">
                <img src="../../assets/images/logo.gif" class="w3-round" :class="{rtlLogo:rtl , ltrLogo:!rtl}"
                     alt="logo"><br><br>
            </router-link>
            <div v-for="motto in motto" class="moto">
                <b v-if="!rtl">{{motto.value.en}}</b>
                <b v-else>{{motto.value.fa_IR}}</b>
            </div>
            <div v-for="subMotto in subMotto"  class="subMoto">
                <p class="w3-text-grey" v-if="!rtl">
                    {{subMotto.value.en}}
                </p>
                <p class="w3-text-grey" v-else>
                    {{subMotto.value.fa_IR}}
                </p>
            </div>
            <!--</div>-->
            <div class="w3-bar-block">
                <div>
                    <div>
                        <router-link :to="`/${$i18n.locale}/home`" style="text-decoration:none"
                                     routerLinkActive="router-link-active"
                                     class="w3-bar-item w3-padding" :style="{'text-align': menuAlign}"><i
                                class="fa fa-home fa-fw w3-margin-right"></i>
                            <div v-if="rtl" style="display:inline-block">خانه</div>
                            <div v-else style="display:inline-block">Home</div>
                        </router-link>
                    </div>
                </div>
                <div v-for="category in categories" v-if="category.name.en!='Footer' && category.name.en!='Slides'">
                    <div v-if="category.slug=='students'">
                        <router-link :to="{ name: 'Students', params: { filter: 'postdoc' }}"
                                     style="text-decoration:none"
                                     routerLinkActive="router-link-active"
                                     class="w3-bar-item w3-padding" :style="{'text-align': menuAlign}">
                            <i :class="'fa fa-fw w3-margin-right '+category.icon"></i>
                            <div v-if="rtl" style="display:inline-block">پسادکترا</div>
                            <div v-else style="display:inline-block">PostDoctorals</div>
                        </router-link>
                        <router-link :to="{ name: 'Students', params: { filter: 'current' }}"
                                     style="text-decoration:none"
                                     routerLinkActive="router-link-active"
                                     class="w3-bar-item w3-padding" :style="{'text-align': menuAlign}">
                            <i :class="'fa fa-fw w3-margin-right '+category.icon"></i>
                            <div v-if="rtl" style="display:inline-block">دانشجویان</div>
                            <div v-else style="display:inline-block">Students</div>
                        </router-link>
                        <router-link :to="{ name: 'Students', params: { filter: 'alumni' }}"
                                     style="text-decoration:none"
                                     routerLinkActive="router-link-active"
                                     class="w3-bar-item w3-padding" :style="{'text-align': menuAlign}">
                            <i :class="'fa fa-fw w3-margin-right '+category.icon"></i>
                            <div v-if="rtl" style="display:inline-block">دانش آموختگان</div>
                            <div v-else style="display:inline-block">Alumni</div>
                        </router-link>
                    </div>
                    <div v-else>
                        <router-link :to="`/${$i18n.locale}/category/`+category.slug" style="text-decoration:none"
                                     routerLinkActive="router-link-active"
                                     class="w3-bar-item w3-padding" :style="{'text-align': menuAlign}"><i
                                :class="'fa fa-fw w3-margin-right '+category.icon"></i>
                            <div v-if="rtl" style="display: inline-block">{{category.name.fa_IR}}</div>
                            <div v-else style="display: inline-block">{{category.name.en}}</div>
                        </router-link>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <router-link :to="`/${$i18n.locale}/contact-us`" style="text-decoration:none"
                                 routerLinkActive="router-link-active"
                                 class="w3-bar-item w3-padding" :style="{'text-align': menuAlign}"><i
                            class="fa fa-envelope-o fa-fw w3-margin-right"></i>
                        <div v-if="rtl" style="display:inline-block">تماس</div>
                        <div v-else style="display:inline-block">Contact</div>
                    </router-link>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "Sidebar",
        data() {
            return {
                categories: null,
                rtl: false,
                menuAlign: '',
                motto: '',
                subMotto: '',
                dropDownStyle: null
            }
        }, methods: {
            dropDownToggle() {
                if (window.innerWidth < 1000) {
                    if (this.dropDownStyle == null) {
                        this.dropDownStyle = 'fixed'
                    } else {
                        this.dropDownStyle = null
                    }
                }
            }
        },
        mounted() {
            if (this.$i18n.locale == 'en') {
                this.rtl = false
                this.menuAlign = 'left'
            } else {
                this.rtl = true
                this.menuAlign = 'right'
            }
            this.messages = {
                en: {
                    message: {
                        welcome: 'Welcome'
                    }
                },
                fr: {
                    message: {
                        welcome: 'Bonjour'
                    }
                }
            }
            axios.get('/api/getCategories').then(response => {
                this.categories = response.data
                // console.log(this.categories)
            }).catch(error => console.log(error))
            axios.get('/api/getMotto').then(response => {
                this.motto = response.data
            }).catch(error => console.log(error))
            axios.get('/api/getSubMotto').then(response => {
                this.subMotto = response.data
                // console.log(response.data);
            }).catch(error => console.log(error))
        }
    }
</script>

<style scoped>
    .w3-bar-block .w3-dropdown-hover .w3-dropdown-content, .w3-bar-block .w3-dropdown-click .w3-dropdown-content {
        width: 100%;
        min-width: auto !important;
    }

    .router-link-active {
        color: #009688;
        font-weight: bold;
        text-decoration: none
    }

    a {
        color: #000;
        text-decoration: none
    }

    .rtlLogo {
        width: 50%;
        margin-right: 25%
    }

    .ltrLogo {
        width: 50%;
        margin-left: 25%
    }
    .moto {
        font-size: 0.9em;
    }

    .subMoto {
        font-size: 0.85em;
    }
    /* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
    @media screen and (max-width: 1000px) {
        .moto {
            font-size: 1.1em;
        }

        .subMoto {
            font-size: 1em;
        }
        .sidebar {
            padding-top: 1px;
        }
    }


</style>