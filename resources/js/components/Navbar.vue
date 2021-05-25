<template>
    <div class="w3-row w3-large mobilePadding" style="background-color: #605e8b!important; "
         :class="{mobileRtlMargin:rtl,mobileLtrMargin:!rtl}">
        <div v-for="page in pages" class="w3-col m6 l3 s6 w3-rtl " :style="{float: menuAlign}" v-if="page.template == 'menus'">
            <router-link v-if="!rtl" :to="`/${$i18n.locale}/page/`+page.slug" class="w3-block navtext">

                {{page.title.en}}

            </router-link>
            <router-link v-else :to="`/${$i18n.locale}/page/`+page.slug" class="w3-block navtext">

                {{page.title.fa_IR}}

            </router-link>
        </div>
        <div class="w3-col m6 l3 s6 w3-rtl" :style="{float: langAlign}">
            <div class="navtext">
                <img src="../../assets/images/uk.png" class="w3-round" :class="{rtlLogo:rtl , ltrLogo:!rtl}"
                     alt="uk" v-if="!rtl">
                <img src="../../assets/images/ir.png" class="w3-round" :class="{rtlLogo:rtl , ltrLogo:!rtl}"
                     alt="iran" v-else>
                <select v-model="$i18n.locale" class="select-css">
                    <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
                        {{ lang }}
                    </option>
                </select>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Navbar",
        data() {
            return {
                pages: null,
                langs: ['fa', 'en'],
                rtl: false,
                langAlign: '',
                menuAlign: '',
            }
        },
        watch: {
            '$i18n.locale': function (val) {
                window.location.href = '/' + val + '/home'
            }
        },
        mounted() {
            if (this.$i18n.locale == 'en') {
                this.rtl = false
                this.menuAlign = ''
                this.langAlign = ''
            } else {
                this.rtl = true
                this.menuAlign = 'right'
                this.langAlign = 'right'
            }
            axios.get('/api/getPages').then(response => {
                this.pages = response.data
                // console.log(this.pages)
            }).catch(error => console.log(error))
        },
        methods: {
            redirect() {
                alert('unmad')
                // router.push('/')
            }
        }
    }
</script>

<style scoped>
    .router-link-active {
        background-color: #009688 !important;
        font-weight: bold;
        text-decoration: none;
        /*word-wrap: break-word;*/
    }

    .select-css {
        /*display: inline-block;*/
        /*font-family: sans-serif;*/
        /*font-weight: 700;*/
        color: #444 !important;
        line-height: 1.3;
        padding: 2px 30px 2px 5px;
        width: inherit;
        /*height: 100%;*/
        /*max-width: 100%;*/
        box-sizing: border-box;
        /*margin: 0;*/
        border: 1px solid #aaa;
        /*box-shadow: 0 1px 0 1px rgba(0,0,0,.04);*/
        border-radius: .5em;
        -moz-appearance: none;
        -webkit-appearance: none;
        appearance: none;
        background-color: #fff;
        background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
        linear-gradient(to bottom, #ffffff 0%, #ffffff 100%);
        background-repeat: no-repeat, repeat;
        background-position: right .7em top 50%, 0 0;
        background-size: .65em auto, 100%;
    }

    .select-css::-ms-expand {
        display: none;
    }

    .select-css:hover {
        border-color: #888;
    }

    .select-css:focus {
        border-color: #aaa;
        box-shadow: 0 0 1px 3px rgba(59, 153, 252, .7);
        box-shadow: 0 0 0 3px -moz-mac-focusring;
        color: #222;
        outline: none;
    }

    .select-css option {
        font-weight: normal;
    }

    .navtext {
        font-weight: bold;
        text-align: center;
        color: white;
        text-decoration: none;
        vertical-align: middle;
        height: 60px;
        padding: 6% 3%;
    }

    @media screen and (max-width: 1000px) {

        /*a,*{*/
            /*font-size: 1.12em!important;*/
        /*}*/
        .router-link-active {
            background-color: transparent !important;
            color: #009688 !important;
            /*font-size: 34px;*/
        }

        .mobilePadding {
            padding: 2.5%;
        }

        .mobileRtlMargin {
            margin-right: 12%;
        }

        .mobileLtrMargin {
            margin-left: 12%;
        }
    }
</style>