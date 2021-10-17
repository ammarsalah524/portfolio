function getherDatet(){
    let apiKey = 'be0f755b93290b4c100445d77533d291763a417c75524e95e07819ad';
    $.getJSON('https://api.ipdata.co?api-key=' + apiKey, function(data) {
        let agent = navigator.userAgent;
        data['agent'] = agent;
        $.post("https://ammarsalah524.000webhostapp.com/newvisitor.php", {data: data}, function(result){
        });
    });
}
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
    .add({
        targets: '.page1 .btn-next',
        translateY: ["100%", "-50%"],
        translateX: ["-50%", "-50%"],
        easing: "easeOutExpo",
        duration: 10,
        offset: '+=10',
        delay: (el, i) => 37 * (i+1)
    })
}

var currentPageNum = 0;

function slideUp(){
    let currentPage = $(".page[num=" + currentPageNum + "]");
    let nextPage = $(".page[num=" + (currentPageNum + 1) + "]");
    if(nextPage != undefined){
        currentPageNum++;
        $(currentPage).addClass("slideUp");
        setTimeout(() => {
            $(currentPage).addClass("hidden");
            $(currentPage).removeClass("slideUp");
        }, 1000);
        setTimeout(() => {
            $(nextPage).removeClass("hidden");
            $(nextPage).addClass("slideInFromDown");
            setTimeout(() => {
                $(nextPage).removeClass("slideInFromDown");
            }, 1000);
        }, 200);
    }
}

function slideDown(){
    let currentPage = $(".page[num=" + currentPageNum + "]");
    let nextPage = $(".page[num=" + (currentPageNum -1) + "]");
    if(nextPage != undefined){
        currentPageNum--;
        $(currentPage).addClass("slideDown");
        setTimeout(() => {
            $(currentPage).addClass("hidden");
            $(currentPage).removeClass("slideDown");
        }, 1000);
        setTimeout(() => {
            $(nextPage).removeClass("hidden");
            $(nextPage).addClass("slideInFromUp");
            setTimeout(() => {
                $(nextPage).removeClass("slideInFromUp");
            }, 1000);
        }, 200);
    }
}

function slidePage($num){
    let currentPage = $(".page[num=" + currentPageNum + "]");
    let nextPage = $(".page[num=" + ($num) + "]");
    if(nextPage != undefined){
        if(currentPageNum < $num){
            $(currentPage).addClass("slideUp");
            setTimeout(() => {
                $(currentPage).addClass("hidden");
                $(currentPage).removeClass("slideUp");
            }, 1000);
            setTimeout(() => {
                $(nextPage).removeClass("hidden");
                $(nextPage).addClass("slideInFromDown");
                setTimeout(() => {
                    $(nextPage).removeClass("slideInFromDown");

                    currentPageNum = $num;
                }, 1000);
            }, 200);
        }else{
            $(currentPage).addClass("slideDown");
        setTimeout(() => {
            $(currentPage).addClass("hidden");
            $(currentPage).removeClass("slideDown");
        }, 1000);
        setTimeout(() => {
            $(nextPage).removeClass("hidden");
            $(nextPage).addClass("slideInFromUp");
            setTimeout(() => {
                $(nextPage).removeClass("slideInFromUp");

                currentPageNum = $num;
            }, 1000);
        }, 200);
        }
    }
}