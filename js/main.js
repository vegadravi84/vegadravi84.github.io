(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    document.getElementById('searchBtn').addEventListener('click', function() {
        var keyword = document.getElementById('keywordInput').value.trim().toLowerCase();
        var location = document.getElementById('locationSelect').value.trim().toLowerCase();
    
        var jobProfiles = document.querySelectorAll('.job-profile');
    
        jobProfiles.forEach(function(profile) {
            var profileKeyword = profile.getAttribute('data-keyword').toLowerCase();
            var profileLocation = profile.getAttribute('data-location').toLowerCase();
            console.log(profileKeyword.includes(keyword),keyword, profileLocation, location);
            if ((keyword === '' && profileLocation === location) ||  (profileKeyword.includes(keyword) &&  location === '') || (profileKeyword.includes(keyword) &&  profileLocation === location)) {
                profile.style.display = 'block';
            } else {
                profile.style.display = 'none';
            }
        });
    });
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

