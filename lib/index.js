function animationInfo(){
    // textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    $('.text-wrapper').css("visibility", "visible")
    anime.timeline({loop: false})
    .add({
      targets: '.line1 .letter',
      translateY: ["2.1em", 0],
      translateZ: 0,
      duration: 750,
      delay: (el, i) => 50 * i
    });

    anime.timeline({loop: false})
    .add({
        targets: '.line2 .letter',
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 1000,
        offset: '+=1600',
        delay: (el, i) => 34 * (i+1)
    })
    .add({
        targets: '.line3 .letter',
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 1000,
        offset: '+=10',
        delay: (el, i) => 37 * (i+1)
    })
    .add({
        targets: '.line4 .letter',
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 1000,
        offset: '+=10',
        delay: (el, i) => 37 * (i+1)
    })
}

var currentPageNum = 0;

function slideUp(){
    let currentPage = $(".page[num=" + currentPageNum + "]");
    let nextPage = $(".page[num=" + (currentPageNum + 1) + "]");
    if(nextPage != undefined){
        $(currentPage).addClass("slideUp");
        setTimeout(() => {
            $(currentPage).addClass("hidden");
        }, 1000);
        setTimeout(() => {
            $(nextPage).removeClass("hidden");
            $(nextPage).addClass("slideInFromDown");
        }, 400);
    }
}