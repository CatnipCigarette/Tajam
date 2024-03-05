const modal = document.getElementById('myModal');
const modalClose = modal.querySelector('.close');

const modalVideo = document.getElementById('video1');
const modalVideoClose = document.querySelector('.closeVideo');

const tellAboutModalOpenBtn = document.getElementById('myBtn');
const VideoModalOpenBtn = document.getElementById('VideoBtn');

const menuItems = document.querySelectorAll('.header__list a');

tellAboutModalOpenBtn.addEventListener('click', onTellAboutModalOpenBtnClick);
VideoModalOpenBtn.addEventListener('click', onVideoModalOpenBtnClick);

function onVideoModalOpenBtnClick() {
  showModal(modalVideo);
  
  initVideoModalListeners();
}

function onTellAboutModalOpenBtnClick() {
  showModal(modal);
  
  initAboutModalListeners();
}

function onVideoModalCloseClick() {
  closeVideoModal(modalVideo);
  removeVideoModalListeners();
}

function onModalCloseClick() {
  closeModal(modal);
  removeAboutModalListeners();
}

function initVideoModalListeners() {
  modalVideoClose.addEventListener('click', onVideoModalCloseClick);
}

function initAboutModalListeners() {
  modalClose.addEventListener('click', onModalCloseClick);
}

function removeVideoModalListeners() {
  modalClose.removeEventListener('click', onVideoModalCloseClick);
}

function removeAboutModalListeners() {
  modalClose.removeEventListener('click', onModalCloseClick);
}

function showModalVideo(modalVideo) {
  document.body.classList.add('modal-open');
  modalVideo.classList.add('show-modal');
}

function showModal(modal) {
  document.body.classList.add('modal-open');
  modal.classList.add('show-modal');
}

function closeVideoModal(modalVideo) {
  document.body.classList.remove('modal-open');
  modalVideo.classList.remove('show-modal');
}

function closeModal(modal) {
  document.body.classList.remove('modal-open');
  modal.classList.remove('show-modal');
}

function handleKeyDown(evt) {
  if (evt.key === 'Escape') {
    closeModal();
  }
}

//слайдер интро
document.addEventListener("DOMContentLoaded", function () {
  var introSlider = new Swiper(".intro__slaider", {
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    spaceBetween: 0,
    pagination: {
      el: ".intro__slaider-dots",
      clickable: true,
      renderBullet: function (index, className) {
        return '<button class="' + className + '"></button>';
      },
    },
  });
});

$(function(){
  // Scroll Events
$(window).scroll(function(){

  let wScroll = $(this).scrollTop();

  // Activate menu
  if (wScroll > 20) {
    $('.header').addClass('header__active');
  }
  else {
    $('.header').removeClass('header__active');
  };
      //Scroll Effects
      
  });

    $('.coment__slaider').slick({

      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:false,
      dots: false,
      infinite: true,
      speed: 900,
      asNavFor: '.person__slaider'
  });

  $('.person__slaider').slick({
      centerMode: true,
      centerPadding: '0px',
      slidesToShow: 5,
      slidesToScroll: 1,
      dots: false,
      infinite: true,
      arrows:true,
      asNavFor: '.coment__slaider',
      speed: 800,


      responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
            }
          },

          {
              breakpoint: 467,
              settings: {
                slidesToShow: 1,
              }
            },
      ]
  });
});


