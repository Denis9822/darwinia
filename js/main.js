AOS.init();
$(document).on("scroll", window, function() {
    if ($(window).scrollTop() > 10) {

        $(".style_main__JnoES").addClass('style_header');
    } else {
        $(".style_main__JnoES").removeClass('style_header');
    }
});

const swiper = new Swiper('.swiper3', {
    slidesPerView: 5,
    // Navigation arrows
    navigation: {
        nextEl: '.sssdd',
        prevEl: '.ssscc',
    },
    breakpoints: {

        320: {
            slidesPerView: 1,
        },

        640: {
            slidesPerView: 5,
        }
    }
});

const swiper2 = new Swiper('.swiper2', {
    slidesPerView: 5,
    // Navigation arrows
    navigation: {
        nextEl: '.sssd',
        prevEl: '.sssc',
    },
    breakpoints: {

        320: {
            slidesPerView: 1,
        },

        640: {
            slidesPerView: 5,
        }
    }
});