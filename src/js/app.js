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
            name: '',
            email: '',
            subject: ''
        },
    },
    methods: {
        submitForm() {
            axios.post('', this.form);
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


