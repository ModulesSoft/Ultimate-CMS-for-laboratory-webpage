<template>
    <div class="w3-padding-large w3-light-grey">
        <h4 v-if="!rtl"><b>Contact Us</b></h4>
        <h4 v-else><b>تماس با ما</b></h4>
        <div class="w3-row-padding w3-center w3-padding-24" style="margin:0 -16px">
            <div class="w3-third w3-dark-grey">
                <p><i class="fa fa-envelope w3-xxlarge w3-text-light-grey"></i></p>
                <p>{{contactEmail}}</p>
            </div>
            <div class="w3-third w3-teal">
                <p><i class="fa fa-map-marker w3-xxlarge w3-text-light-grey"></i></p>
                <p v-if="!rtl">{{contactAddresss}}</p>
                <p v-else>{{contactAddresssFa}}</p>
            </div>
            <div class="w3-third w3-dark-grey">
                <p><i class="fa fa-phone w3-xxlarge w3-text-light-grey"></i></p>
                <p v-if="!rtl">{{contactPhone}}</p>
                <p v-else>{{contactPhoneFa}}</p>
            </div>
        </div>
        <hr class="w3-opacity">
        <div>
            <div class="w3-section">
                <label v-if="!rtl">Name</label>
                <label v-else="rtl">نام و نام خانوادگی</label>
                <input class="w3-input w3-border" type="text" name="Name" v-model="name" required>
            </div>
            <div class="w3-section">
                <label v-if="!rtl">Email</label>
                <label v-else="rtl">ایمیل</label>
                <input class="w3-input w3-border" type="text" name="Email" v-model="email" required>
            </div>
            <div class="w3-section">
                <label v-if="!rtl">Message</label>
                <label v-else="rtl">پیام</label>
                <textarea class="w3-input w3-border" type="text" name="mesage" rows="5" v-model="message"
                          required></textarea>
            </div>
            <div :style="{color:errorColor}">
                {{error}}
            </div>

            <vue-recaptcha
                    ref="recaptcha"
                    @verify="send"
                    @expired="onCaptchaExpired"
                    size="invisible"
                    sitekey="6Lcg6rcUAAAAAAwqH78U9kzaXhzyy0h9MKz9c0tZ">
            </vue-recaptcha>
            <button v-if="errorColor != 'green'" class="w3-button w3-black w3-margin-bottom" @click="executeRecaptcha">
                <i
                        class="fa fa-paper-plane w3-margin-right"></i>
                <div v-if="!rtl" style="display:inline-block">
                    Send Message
                </div>
                <div v-else style="display:inline-block">
                    ارسال پیام
                </div>
            </button>
        </div>
    </div>
</template>

<script>
    import VueRecaptcha from 'vue-recaptcha';

    export default {
        components: {VueRecaptcha},
        name: "Contact",
        data() {
            return {
                rtl: false,
                message: null,
                email: null,
                name: null,
                error: null,
                errorColor: 'red',
                contactEmail: '',
                contactPhone: '',
                contactPhoneFa:'',
                contactAddresss: '',
                contactAddresssFa: ''
            }
        },
        methods: {
            onCaptchaExpired () {
                this.$refs.recaptcha.reset();
            },
            executeRecaptcha() {
                this.$refs.recaptcha.execute()
                // this.bus.$emit('execute')
            },
            send(recaptchaToken) {
                this.$refs.recaptcha.reset();
                if (!this.rtl) {
                    this.error = 'sending...'
                } else {
                    this.error = 'در حال ارسال...'
                }
                this.errorColor = 'green'
                if (this.message != null || this.email != null || this.name != null) {
                    axios.post('/api/sendMail', {
                        message: this.message,
                        email: this.email,
                        name: this.name,
                        recaptchaToken: recaptchaToken
                    }).then(response => {
                        if (response.data == 'ok') {
                            if (!this.rtl) {
                                this.error = 'email sent successfully'
                            } else {
                                this.error = 'ایمیل ارسال شد'
                            }
                            this.errorColor = 'green'
                        } else if (response.data == 'nok0') {
                            if (!this.rtl) {
                                this.error = 'email is not valid'
                            } else {
                                this.error = 'ایمیل وارد شده معتبر نیست'
                            }
                            this.errorColor = 'red'
                            return null
                        } else if (response.data == 'nok1') {
                            if (!this.rtl) {
                                this.error = 'All fields are required'
                            } else {
                                this.error = 'تمامی فیلد ها اجباری هستند'
                            }
                            this.errorColor = 'red'
                            return null
                        } else if (response.data == 'nok2') {
                            this.errorColor = 'red'
                            if (!this.rtl) {
                                this.error = 'server error: Email not sent!'
                            } else {
                                this.error = 'ارور سرور : ایمیل ارسال نشد!'
                            }
                            this.errorColor = 'red'
                            return null
                        }

                    }).catch(error => {
                        console.error(error)
                        this.error = error + "<br>try again later"
                        this.errorColor = 'red'
                    });
                } else {
                    this.errorColor = 'red'
                    if (!this.rtl) {
                        this.error = 'All fields are required'
                    } else {
                        this.error = 'تمامی فیلد ها اجباری هستند'
                    }
                }
            }
        },
        mounted() {
            if (this.$i18n.locale == 'en') {
                this.rtl = false
                document.title = "Contact - Biofluids Laboratory Amirkabir University"
            } else {
                this.rtl = true
                document.title = "تماس - آزمایشگاه سیالات بیولوژیک دانشگاه امیرکبیر"
            }
            axios.get('/api/getPhone').then(response => {
                this.contactPhone = response.data[0].value.en
                this.contactPhoneFa = response.data[0].value.fa_IR
            }).catch(error => console.log(error))

            axios.get('/api/getEmail').then(response => {
                this.contactEmail = response.data[0].value.en
            }).catch(error => console.log(error))

            axios.get('/api/getAddress').then(response => {
                this.contactAddresss = response.data[0].value.en
                // console.log(response.data[0].value.en);
                this.contactAddresssFa = response.data[0].value.fa_IR
            }).catch(error => console.log(error))
        }
    }
</script>

<style scoped>

</style>