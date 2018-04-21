 var lheight=$("#layer2").offset().top;
        $(window).resize(function(){
            lheight=$("#layer2").offset().top;
            console.log(lheight);
        });
        
        $("#test1").css("background-color","black");
        /*
        $(window).scroll(function (event) {
            var scroll = $(window).scrollTop();
            console.log(scroll);
            if(scroll < lheight){
                $("#test").css("background-color","black");
            }
            else{
                $("#test").css("background-color","rgba(218,178,57,0.2)");
            }
        });*/
        
        $("#next").click(function(){
           $("#team2").fadeToggle(); 
        $("#member3").fadeToggle(); 
        $("#member4").fadeToggle(); 
        });
        
        function openNav(){
            document.getElementById("nav-bar").style.width="250px";
            document.getElementById("layer1").style.marginLeft = "250px";
            document.getElementById("l1img").style.animation="l1ImgAnimate 1s forwards";
            document.getElementById("l1h1").style.animation="l1H1Animate 1s forwards";
            
        }
        function closeNav(){
            document.getElementById("nav-bar").style.width="0";
            document.getElementById("layer1").style.marginLeft = "0";
            document.getElementById("l1img").style.animation="l1ImgAnimateb 1s forwards";
            document.getElementById("l1h1").style.animation="l1H1Animateb 1s forwards";
        }
        var layer=1;
        
        //on access bar click
        $("#test1").click(function(){
            layer=1;
            $("html, body").animate({
                    scrollTop: lheight*(layer-1)
                    }, 500);
            //make access bar black on scroll
            $("#test"+layer).css("background-color","black");
            for(i=1;i<6;i++){
                if(i != layer){
                    $("#test"+i).css("background-color","rgba(218,178,57,0.7)");
                }
            }
        });
        $("#test2").click(function(){
            layer=2;
            $("html, body").animate({
                    scrollTop: lheight*(layer-1)
                    }, 500);
            //make access bar black on scroll
            $("#test"+layer).css("background-color","black");
            for(i=1;i<6;i++){
                if(i != layer){
                    $("#test"+i).css("background-color","rgba(218,178,57,0.7)");
                }
            }
        });
        $("#test3").click(function(){
            layer=3;
            $("html, body").animate({
                    scrollTop: lheight*(layer-1)
                    }, 500);
            //make access bar black on scroll
            $("#test"+layer).css("background-color","black");
            for(i=1;i<6;i++){
                if(i != layer){
                    $("#test"+i).css("background-color","rgba(218,178,57,0.7)");
                }
            }
        });
        
        $("#test4").click(function(){
            layer=4;
            $("html, body").animate({
                    scrollTop: lheight*(layer-1)
                    }, 500);
            //make access bar black on scroll
            $("#test"+layer).css("background-color","black");
            for(i=1;i<6;i++){
                if(i != layer){
                    $("#test"+i).css("background-color","rgba(218,178,57,0.7)");
                }
            }
        });
        
        $("#test5").click(function(){
            layer=5;
            $("html, body").animate({
                    scrollTop: lheight*(layer-1)
                    }, 500);
            //make access bar black on scroll
            $("#test"+layer).css("background-color","black");
            for(i=1;i<6;i++){
                if(i != layer){
                    $("#test"+i).css("background-color","rgba(218,178,57,0.7)");
                }
            }
        });
        
        var flag=true;
        //on scroll
        $(window).bind('mousewheel', function(event) {
            event.preventDefault();
        if(flag){
            flag=false;    
            event.preventDefault();
            if (layer>0 && layer<6){
                
                if (event.originalEvent.wheelDelta >= 0 && layer>1 && layer<6) {
                    $("html, body").animate({
                    scrollTop: '-='+lheight
                    }, 500);
                    layer=layer-1;
                    //make access bar black on scroll
                    $("#test"+layer).css("background-color","black");
                    for(i=1;i<6;i++){
                        if(i != layer){
                            $("#test"+i).css("background-color","rgba(218,178,57,0.7)");
                        }
                    }
                }
                else if(event.originalEvent.wheelDelta < 0 && layer>0 && layer<5){
                    $("html, body").animate({
                    scrollTop: '+='+lheight
                    }, 500);
                    layer=layer+1;
                    $("#test"+layer).css("background-color","black");
                    for(i=1;i<6;i++){
                        if(i != layer){
                            $("#test"+i).css("background-color","rgba(218,178,57,0.7)");
                        }
                    }
                }
                console.log(layer);
            } 
            setTimeout(function(){ flag=true; }, 500);
            console.log("true");
        }
        });
        
        /*
        //smooth scrolling   
        $(document).ready(function(){
          // Add smooth scrolling to all links
          $("a").on('click', function(event) {

            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
              // Prevent default anchor click behavior
              event.preventDefault();

              // Store hash
              var hash = this.hash;

              // Using jQuery's animate() method to add smooth page scroll
              // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
              $('html, body').animate({
                scrollTop: $(hash).offset().top
              }, 800, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
              });
            } // End if
          });
        });*/