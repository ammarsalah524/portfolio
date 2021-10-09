function nextImg($sender) {
  // matrix(scaleX(),skewY(),skewX(),scaleY(),translateX(),translateY())
  function getTranslate($element) {
    var style = window.getComputedStyle($element);
    var matrix = new WebKitCSSMatrix(style.transform);
    return matrix;
  }
  function getTranslateY($element) {
    var style = window.getComputedStyle($element);
    var matrix = new WebKitCSSMatrix(style.transform);
    console.log('translateX: ', matrix.m41);
  }
  function getTranslateZ($element) {
    var style = window.getComputedStyle($element);
    var matrix = new WebKitCSSMatrix(style.transform);
    console.log('translateX: ', matrix.m41);
  }

  function slide() {
    anime.timeline({ loop: false }).add({
      targets: ".hide-card",
      duration: 1500,
      translateX: "-400px",
      easing: "easeInOutSine",
      direction: "alternate",
      delay: 400,
    });
  }
  let img_container = $($($sender).closest(".p-info")[0]).find(
    ".pf-image-container"
  );
  let count = $(img_container).find("img").length;
  let containers = $(img_container).find("div.pf-img");
  let current = $(img_container).find("div.pf-img.selected");
  let current_light = $(current).find("div.pf-imgae-lighter");
  let index = $(current).attr('num');
  let nextItem = (index == count - 1)? $(img_container).find("div.pf-img")[0] : $(img_container).find("div.pf-img")[+index + 1];
  let nextLight = $(nextItem).find("div.pf-imgae-lighter");

  let current_matrix = getTranslate($(current)[0]);
  let current_light_matrix = getTranslate($(current_light)[0]);
  $(current).css('animation-play-state', 'paused');
  $(current_light).css('animation-play-state', 'paused');

  $(current).css('transform', current_matrix);
  $(current_light).css('transform', current_light_matrix);

  $(current).removeClass('selected');
  $(current).addClass('hide-card');
  $(current).css('animation-play-state', 'running');
  
  $(current_light).addClass('hide-light');
  $(current_light).css('animation-play-state', 'running');

  setTimeout(() => {
    $(current).addClass('hidden');
    
    $(current).removeClass('selected');

    $(current_light).removeClass('hide-light');

    $(nextItem).removeClass('hidden');
    $(nextItem).addClass('show-card');

    $(nextLight).addClass('show-light');
    setTimeout(() => {
      $(nextItem).removeClass('show-card');
      $(nextLight).removeClass('show-light');
      $(nextItem).addClass('selected');
    }, 500);
  }, 800);
  return img_container;
}
function openPage($sender, $page){
  if($page == "home"){
    slideDown();
  }else{
    $(".pn-item.selected").removeClass("selected");
    $($sender).addClass('selected');
    let current = $(".p-page.selected");
    $(current).addClass("hide-page");
    $(current).removeClass('selected');
    setTimeout(() => {
      $(current).addClass("hidden");
      $(current).removeClass("hide-page");
      if($("#" + $page).length != 0){
        console.log($page);
        $("#" + $page).removeClass('hidden');
        $("#" + $page).addClass('show-page');
        $("#" + $page).addClass('selected');
        setTimeout(() => {
          $("#" + $page).removeClass('show-page');
        }, 1000);
      }else{
        console.log(0);
        $("#still-developping").removeClass('hidden');
        $("#still-developping").addClass('show-page');
        $("#still-developping").addClass('selected');
        setTimeout(() => {
          $("#still-developping").removeClass('show-page');
        }, 1000);
      }
    }, 700);

    if($page == 'axtro-erp'){

    }
    if($page == 'axtro-autopay'){

    }
    if($page == 'axtro-deorm'){

    }
    if($page == 'axtro-dashboard'){

    }
    if($page == 'axtro-web'){

    }
    if($page == 'axtro-xd'){

    }
    if($page == 'axtro-courses'){

    }
  }
}