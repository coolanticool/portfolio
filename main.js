
        function myFunction() {
            var x= document.getElementById("myHamburger");
            if(x.className === "hamburger") {
                x.className += "responsive";
            } else {
                x.className = "hamburger";
            }
        }
        
        $(document).ready(function(){
            $('.toggle').click(function(){
                $('.toggle').toggleClass('active')
                $('body').toggleClass('night')
                $('.hamburger a').toggleClass('night')
                /*$('.hamburger a.icon').toggleClass('night')*/
                $('.hamburgerresponsive a.night').toggleClass('night')
               
                $('footer').toggleClass('night')
            })
        })
    