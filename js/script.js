


$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:3,
        loop:true,
        nav:true,
        autoplay:true,
        responsive :{
            0:{
                items:1
            },
            450: {
                items:2
            },
            768:{
                items:3
            }
        }
    });
    $('.customNextBtn').click(function() {
        owl.trigger('next.owl.carousel');
    })

});



const sr = ScrollReveal({
    distance: '100px',
    duration: 2000,
    reset: true,
})


sr.reveal('.landing .right', {origin:'right', delay: 400})
sr.reveal('.landing .left', {origin:'left', delay: 400})
sr.reveal('.about .col-md-6', {origin:'top', delay: 400})
sr.reveal('.services .top', {origin:'top', delay: 400})
sr.reveal('.services .left', {origin:'left', delay: 400})
sr.reveal('.services .right', {origin:'right', delay: 400})
sr.reveal('.flib', {opacity: 0.2});
sr.reveal('.left', { origin: "left", delay: 400 });
sr.reveal('.right', { origin: "right", delay: 400 });


document.querySelectorAll('.taps li').forEach((ele) => {
    ele.addEventListener("click", () => {
        document.querySelector('.taps li.active').classList.remove("active")
        ele.classList.add("active");

        document.querySelectorAll(".services .row .col-12").forEach(ele => {
            ele.classList.add("hide");
            ele.classList.remove("show");

            console.log(ele)
        })
        document.querySelectorAll(`${ele.dataset.show}`).forEach((ele) => {
            ele.classList.add("show");
        })

        // ele.textContent.toLocaleLowerCase()
    })
})