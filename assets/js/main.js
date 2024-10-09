

var loginStatus = localStorage.getItem('loginStatus');
if(loginStatus == 'true'){
  $(".validate_form").hide();
  $(".validated_content").show();
}else{
  $(".validate_form").show();
  $(".validated_content").hide();
}

const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

function imgGallery() {
  const mainImg = document.querySelector(".details__img"),
    smallImg = document.querySelectorAll(".details__small-img");

  smallImg.forEach((img) => {
    img.addEventListener("click", function () {
      mainImg.src = this.src;
    });
  });
}

imgGallery();

let swiperCategories = new Swiper(".categories__container", {
  spaceBetween: 24,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    350: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 24,
    },
    1400: {
      slidesPerView: 6,
      spaceBetween: 24,
    },
  },
});

let swiperProducts = new Swiper(".new__container", {
  spaceBetween: 24,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});

const tabs = document.querySelectorAll("[data-target]"),
  tabsContents = document.querySelectorAll("[content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabsContents.forEach((tabsContent) => {
      tabsContent.classList.remove("active-tab");
    });

    target.classList.add("active-tab");

    tabs.forEach((tab) => {
      tab.classList.remove("active-tab");
    });

    tab.classList.add("active-tab");
  });
});




  $(document).ready(function() {

    $(".logOut").click(()=>{
      localStorage.setItem('loginStatus', false);
      location.reload();
    });

    $(".shopLogOut").click(()=>{
      localStorage.setItem('loginStatus', false);
      location.href = "/index.html";
    });

    if($("#listview").length){
      let Listview = document.querySelector('#listview');
      let Gridview = document.querySelector('#gridview');
      
      let listviewitem = document.querySelector('.list_view');
      // let listviewitem = document.querySelector('.list_view');
      
        Listview.addEventListener('click', function() {
          listviewitem.classList.add('active');
        });
        Gridview.addEventListener('click', function(){
          listviewitem.classList.remove('active');
        });
      
    }


    $("#registerForm").validate({
        rules: {
            firstname: {
                required: true,
                minlength: 2
            },
            lastname: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 6
            },
            confirmpassword: {
                required: true,
                minlength: 6,
                equalTo: "#password"
                
            }
        },
        messages: {
            firstname: {
                required: "Please enter your firstname",
                minlength: "Your firstname must consist of at least 2 characters"
            },
            lastname: {
                required: "Please enter your lastname",
                minlength: "Your lastname must consist of at least 2 characters"
            },
            email: {
                required: "Please enter your email address",
                email: "Please enter a valid email address"
            },
            password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 6 characters long"
            },
            confirmpassword: {
              required: "Please confirm your password",
              minlength: "Your confirm password must be at least 6 characters long",
              equalTo: "Password and confirm password must match"
          }
        },
        submitHandler: function(form) {
            // Hide form
            $("#registerForm").hide();
            // Show validated content
            // $("#validated_content").show();

            $("#validate_form").hide();
            $(".validated_content").show();


            localStorage.setItem('loginStatus', true);
        }
    });

   
});



