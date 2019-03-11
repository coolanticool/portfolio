
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
                $('footer').toggleClass('night')
            })
        })
    