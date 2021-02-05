
      
        $(document).ready(function(){

            $('.cross').hide();
            $('.hamburger').click(function(){
                $('.menu').slideToggle("slow", function(){
                    $('.hamburger').hide();
                    $('.cross').show();
                });
            });

            $(".cross").click(function() {
                $(".menu").slideToggle( "slow", function() {
                $(".cross").hide();
                $(".hamburger").show();
                });
                });
                
               

            $('.toggle').click(function(){
                
                $('.toggle').toggleClass('active')
                $('body').toggleClass('night')
                $('.menu a').toggleClass('night')
                $('.hamburger').toggleClass('night')
                $('.cross').toggleClass('night')
                $('.quizLinks a').toggleClass('night')
                $('footer').toggleClass('night')
                
            })
            
        })



        