require('./modernizr');


import axios from 'axios';

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */


const contact = new Vue({
    el: '#contact',
    data: {
        form: {
            errors: {},
            successful: '',
            name: null,
            email: null,
            subject: null
        },
    },
    methods: {
        submitForm() {
            // Mudar para api Selecioanada
            axios.post('http://lumen.infocorp.local/api/contato', this.form)
                .then((response) => {
                    this.form.successful = "Enviado com sucesso!";
                })
                .catch((error) => {
                    console.log(error.response.data)

                    this.form.errors = this.errorListServer(error);
                })
        },
        checkForm: function () {
            this.form.errors = this.errorList;

            if (this.form.name && this.form.email && this.form.subject) {
                this.submitForm();
                return true;
            }
        },
        errorListServer(error) {
            const log = {};

            if (error.response.data.name) log.name = error.response.data.name[0];

            if (error.response.data.email) log.email = error.response.data.email[0];

            if (error.response.data.subject) log.subject = error.response.data.subject[0];

            return log;

        }
    },
    computed: {
        errorList() {
            const errors = {};
            if (!this.form.name) errors.name = "Nome é Obrigatório";

            if (!this.form.email) errors.email = "E-mail é Obrigatório";

            if (!this.form.subject) errors.subject = "Assunto é Obrigatório";

            return errors;
        }
    }
});

const brief = new Vue({
    el: '#conte_sua_ideia',
    data: {
        form: {
            errors: {},
            successful: '',
            name: null,
            instituicao: null,
            email: null,
            phone: null,
            explain_ajuda: null,
            beneficios: null,
            publico_alvo: null,
            website: false,
            mobile: false,
            sistemaWeb: false,
            sistemasDesktop: false,
            curso: false
        },
    },
    methods: {
        submitForm() {
            // Mudar para api Selecioanada
            axios.post('http://lumen.infocorp.local/api/contato', this.form)
                .then((response) => {
                    this.form.successful = "Enviado com sucesso!";
                })
                .catch((error) => {
                    console.log(error.response.data)

                    this.form.errors = this.errorListServer(error);
                })
        },
        checkForm: function () {
            this.form.errors = this.errorList;

            if (this.form.name && this.form.email && this.form.subject) {
                this.submitForm();
                return true;
            }

            document.getElementById("conte_sua_ideia").scrollIntoView();
        },
        errorListServer(error) {
            const log = {};

            if (error.response.data.name) log.name = error.response.data.name[0];

            if (error.response.data.instituicao) log.instituicao = error.response.instituicao.email[0];

            if (error.response.data.email) log.email = error.response.data.email[0];

            if (error.response.data.phone) log.phone = error.response.data.phone[0];

            return log;

        }
    },
    computed: {
        errorList() {
            const errors = {};
            if (!this.form.name) errors.name = "Nome é Obrigatório";

            if (!this.form.instituicao) errors.instituicao = "Instituição é Obrigatório";

            if (!this.form.email) errors.email = "E-mail é Obrigatório";

            if (!this.form.phone) errors.phone = "Telefone é Obrigatório";

            return errors;
        }
    }
});

/**
 * Swiper 4.3.3
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://www.idangero.us/swiper/
 *
 * Copyright 2014-2018 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: June 5, 2018
 */

/*import swiper from 'swiper';

const Services = new swiper('.swiper-container', {
    autoplay: {
        delay: 3000,
    },
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        // when window width is <= 480px
        991: {
            slidesPerView: 1,
        },
    }
});*/


