$('.owl-carousel').owlCarousel({
    loop: false,
    margin: 30,

    dots: true,


    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        950: {
            items: 3
        },
        1200: {
            items: 4
        }
    }
})