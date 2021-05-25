<template>
    <transition name="modal" dir="ltr">
        <div v-if="student" class="modal-mask">
            <head>
                <meta name="keywords"
                      :content="student.research_text.en.replace(/<\/?[^>]+(>|$)/g, '').replace(';',', ').replace('-',', ').replace('keywords','Keywords').split('Keywords:',10)[1]">
            </head>
            <div class="modal-wrapper">
                <div class="wrap w3-animate-top">
                    <a @click="$router.go(-1)" class="exit-btn m-3" style="color:black;z-index: 2"><i
                            class="fa fa-times"></i></a>
                    <h2 class="register-title" v-if="!rtl">{{student.name.en}}</h2>
                    <h2 class="register-title" v-else>{{student.name.fa_IR}}</h2>
                    <div class="register" :class="{rtlText:rtl,ltrText:!rtl}">
                        <div class="w3-container">
                            <img v-lazy="student.image" alt="Avatar"
                                 class="titleImage w3-left w3-margin-right w3-animate-zoom"
                                 :class="{'w3-left':!rtl,'w3-right':rtl}"
                                 :alt="student.name.en"
                            />
                            <br>
                            <h3 v-if="!rtl">{{student.name.en}}</h3>
                            <h3 v-else>{{student.name.fa_IR}}</h3>
                            <br>
                            <strong class="register-switch  w3-animate-opacity" :class="{roleRtl:rtl,role:!rtl}">
                                {{student.role}}
                            </strong>
                            <br>
                            <strong>{{student.email.replace("@", "O")}}</strong>
                            <div v-if="!rtl" class="intro" style="float: left">
                                <br>
                                <router-link :to="{ name: 'Student', params: { studentName: student.name.en }}">
                                    biofluids.aut.ac.ir/student/{{student.name.en}}
                                </router-link>
                                <div><strong>Supervisor: </strong>{{student.supervisor.en}}</div>
                                <div>
                                    <strong>Research: </strong>
                                    <div style="display: inline">
                                        {{student.research_title.en}}
                                    </div>
                                </div>
                            </div>
                            <div v-else :class="{introRtl:rtl,intro:!rtl}" dir="rtl" style="float: right">
                                <meta name="keywords"
                                      content="Dr Nasser Fatouraee, Dr Malikeh Nabaei, fatouraee, فتورایی, ناصر فتورائی,ملیکه نبئی, ملیکه">
                                <div v-if="student.research_title.fa_IR">
                                    <div><strong>استاد راهنما: </strong>{{student.supervisor.fa_IR}}</div>
                                    <div>
                                        <strong>تحقیقات:</strong>
                                        <div style="display: inline">
                                            {{student.research_title.fa_IR}}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr>
                            <div class="register-switch  w3-animate-opacity" style="float: left"
                                 v-if="!rtl"
                                 v-html="student.research_text.en"></div>
                            <div class="register-switch  w3-animate-opacity" style="float: right" v-else
                                 v-html="student.research_text.fa_IR"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="title" class="modal-mask">
            <div class="modal-wrapper">
                <div class="wrap w3-animate-top">
                    <div @click="$emit('close')" class="exit-btn m-3" style="z-index: 1000000"><i
                            class="fa fa-times"></i></div>
                    <h2 class="register-title">{{title}}</h2>
                    <div class="register" :class="{rtlText:rtl,ltrText:!rtl}">
                        <div class="w3-container">
                            <img v-lazy="'/'+image" alt="Avatar"
                                 class="titleImage w3-left w3-margin-right w3-animate-zoom"
                                 :class="{'w3-left':!rtl,'w3-right':rtl}"
                                 :alt="title"
                            >
                            <br>
                            <div class="register-switch  w3-animate-opacity" v-html="content"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
    export default {
        props: {close: '', title: '', content: '', image: '', rtl: false},
        data() {
            return {
                student: null
            }
        },
        mounted() {
            if (this.$i18n.locale == 'en') {
                this.rtl = false
            } else {
                this.rtl = true
            }
            if (this.$route.params.studentName) {
                axios.get('/api/student/' + this.$route.params.studentName).then(response => {
                    if (response.data == 'nok') {
                        alert('Data not found');
                    } else {
                        this.student = response.data
                        if (!response.data.name.fa_IR && this.rtl) {
                            alert('Data is not translated');
                            this.rtl = false
                        }
                        if (!this.rtl) {
                            document.title = response.data.name.en + " - Amirkabir Biofluids Lab. Student";
                        } else {
                            document.title = response.data.name.fa_IR + " - دانشجوی آزمایشگاه بایوفلویید امیرکبیر ";
                        }
                    }
                }).catch(error => console.log(error))
            } else {
                document.title = this.title;
            }
        },

    };
</script>

<style scoped>
    .titleImage {
        width: 270px;
        margin: 2% 10% !important;
        border-radius: 10px;
        -webkit-box-shadow: 0px 10px 25px -5px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 0px 10px 25px -5px rgba(0, 0, 0, 0.75);
        box-shadow: 0px 10px 25px -5px rgba(0, 0, 0, 0.75);
    }

    .rtlText {
        text-align: right;
    }

    .ltrText {
        text-align: left;
    }

    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: table;
        transition: opacity 0.3s ease;
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }


    .modal-header h3 {
        margin-top: 0;
        color: #42b983;
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }

    /*//////////////////////////////////////////////////////////////////
    [ FONT ]*/
    .exit-btn {
        float: right;
        cursor: pointer;
        margin: 1%;
    }

    body {
        color: #404040;
        background: #272727;
    }

    .wrap {
        margin: auto;
        position: relative;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 95%;
        height: 100%;
        word-break: break-word;
    }

    .register-title {
        margin-top: 0;
        padding: 15px;
        width: 100%;
        /*line-height: 43px;*/
        /*font-size: 25px;*/
        /*font-weight: 500;*/
        color: #EEEEEE;
        text-align: center;
        text-shadow: 0 1px rgba(0, 0, 0, 0.3);
        border-radius: 3px;
        background-color: #3290B1;
        box-shadow: inset 0 1px rgba(255, 255, 255, 0.1), inset 0 0 0 1px rgba(255, 255, 255, 0.05), 0 0 1px 1px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.3);
    }

    .register {
        /*margin: 0 auto;*/
        width: 100%;
        height: 85vh;
        overflow-y: scroll;
        padding: 5px;
        background: #f4f4f4;
        border-radius: 3px;
        -webkit-box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.3);
        box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.3);
    }

    input {
        font-family: inherit;
        font-size: inherit;
        color: inherit;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

    .register-switch {
        height: 2px;
    }

    .register-switch-input:checked + .register-switch-label {
        font-weight: 500;
        color: #434248;
        text-shadow: 0 1px rgba(255, 255, 255, 0.5);
        background: white;
        border-radius: 2px;
        background-image: -webkit-linear-gradient(top, #fefefe, #eeeeee);
        background-image: -moz-linear-gradient(top, #fefefe, #eeeeee);
        background-image: -o-linear-gradient(top, #fefefe, #eeeeee);
        background-image: linear-gradient(to bottom, #fefefe, #eeeeee);
        -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);
    }

    :-moz-placeholder {
        color: #aaa;
        font-weight: 300;
    }

    ::-moz-placeholder {
        color: #aaa;
        font-weight: 300;
        opacity: 1;
    }

    ::-webkit-input-placeholder {
        color: #aaa;
        font-weight: 300;
    }

    :-ms-input-placeholder {
        color: #aaa;
        font-weight: 300;
    }

    ::-moz-focus-inner {
        border: 0;
        padding: 0;
    }
</style>
