$(document).ready(function() {
  // //disable double-tap zooming
  // $.fn.nodoubletapzoom = function() {
  //     $(this).bind('touchstart', function preventZoom(e) {
  //       var t2 = e.timeStamp
  //         , t1 = $(this).data('lastTouch') || t2
  //         , dt = t2 - t1
  //         , fingers = e.originalEvent.touches.length;
  //       $(this).data('lastTouch', t2);
  //       if (!dt || dt > 500 || fingers > 1) return; // not double-tap

  //       e.preventDefault(); // double tap - prevent the zoom
  //       // also synthesize click events we just swallowed up
  //       $(this).trigger('click').trigger('click');
  //     });
  // };
  $('#icon-coral').click(function(){
    console.log("hi");
    coralReef();
    $('.title').fadeOut();
    $('#globe').fadeIn();
    });
  $('#icon-desert').click(function(){
    console.log("hi");
    desert();
    $('.title').fadeOut();
    $('#globe').fadeIn();
    });
  $('#icon-space').click(function(){
    console.log("hi");
    space();
    $('.title').fadeOut();
    $('#globe').fadeIn();
    });
  $('#icon-grassland').click(function(){
    console.log("hi");
    grassland();
    $('.title').fadeOut();
    $('#globe').fadeIn();
    });
  $('#icon-arctic').click(function(){
    console.log("hi");
    antarctic();
    $('.title').fadeOut();
    $('#globe').fadeIn();
    });
  $('#globe').click(function(){
    $('.coral').fadeOut();
    $('.desert').fadeOut();
    $('.space').fadeOut();
    $('.grassland').fadeOut();
    $('.antarctic').fadeOut();
    $('.title').fadeIn();
    $(this).fadeOut();
  });




  init();
    var count = 0;
    var lastmar = 200.00;
    var girDeg = 0; //rotation degrees of giraffe
    var alienDeg = 0; //reotation degrees of alien
    var windowW;
    var windowH;
    var ballsize = 150;
    var shaken = false;
    var canRoll = true;
    var scene = 1;
    var shouldReset = false;
    
    function init() {
      //setup screen size
      // windowW = $(window).width();
      // windowH = $(window).height();
      windowW = 1024;
      windowH = 672;

      // document.body.style.height = screen.height; //doesn't work
      // document.body.style.width = screen.width;
      // document.getElementById("b1").style.width = screen.width;
      // $("#b1").css("min-height",windowH);
      // $("#b2").css("min-height",windowH);
      // $("#b2").css("min-width",windowW*(1542/1024));
      // $("#b3").css("min-height",windowH);
      // $("#b3").css("min-width",windowW*(2030/1024));

      $("#scenery-coral").css("min-height",windowH);
      $("#coral1").css("min-height",windowH);
      $("#coral2").css("min-height",windowH);
      $("#coral4").css("min-height",windowH);
      $("#title").css("min-height",windowH);

      // $("#cityB1").css("min-height",windowH);
      // $("#cityB2").css("min-height",windowH);
      // $("#cityB2").css("min-width",windowW*(1500/1024));
      // document.getElementById("b1 img").style.height = screen.height;
      $(document).bind('touchmove', false); //disables scrolling
      // console.log("height: "+screen.height+"; width: "+screen.width);
      // document.body.innerHTML = "window height: "+$(window).height()+"; window width: "+$(window).width();
      // document.body.innerHTML += "screen height: "+screen.height+"; screen width: "+screen.width;


      // if (window.DeviceOrientationEvent) {
        // document.getElementById("doEvent").innerHTML = "DeviceOrientation";
        // Listen for the deviceorientation event and handle the raw data
        /*window.addEventListener('deviceorientation', function(eventData) {
          // gamma is the left-to-right tilt in degrees, where right is positive
          var tiltLR = eventData.gamma;
          
          // beta is the front-to-back tilt in degrees, where front is positive
          var tiltFB = eventData.beta;
          
          // alpha is the compass direction the device is facing in degrees
          var dir = eventData.alpha;
          var dirHold = dir;
          var dirD = 0; //change in dir
          
          // call our orientation event handler
          deviceOrientationHandler(tiltLR, tiltFB, dir);
          }, false);*/
      // } else {
      //   document.getElementById("doEvent").innerHTML = "Not supported on your device or browser.  Sorry."
      // }

      // coralReef();
      // grassland();
      // antarctic();
      // space();
      // desert();
      // playBritney();
    }

    function playBritney(){
      console.log("playing");
      // $.playSound('../sounds/britney.mp3');
      document.getElementById('britney').play();
      setTimeout(function(){  
       document.getElementById('britney').pause();
     }, 5000);
    }

    function deviceOrientationHandler(tiltLR, tiltFB, dir) {

      if (scene == 1){
        sceneOne(tiltLR, tiltFB, dir);
        // shouldReset = true;
      } else if (scene == 2){
        // resetBall(0,510);
        // setTimeout(function(){$('.all1').fadeIn()}, 2000);
        // sceneOne(tiltLR, tiltFB, dir);
        sceneTwo(tiltFB);

      }
    }



    //resets ball to parametered X from left and Y from top
    function resetBall(x, y){
      if (shouldReset){
        $('#ball').css("margin-left", x+"px");
        $('#ball').css("top", y+"px");
      }
      // console.log("RESET TO: "+$('#ball').css("margin-left"));
    }


//////////////////////////////////////////////////////////////////////////////////////////////////
    function coralReef(){
      /* CORAL REEF */
      console.log("RUNNING CORAL REEF");
      $('.coral').fadeIn();
      // setTimeout(function(){$('.coral').fadeIn()}, 2000);

      var coralSwim = false; //whether or not already doing LR action
      var coralBubbles = false; //whether or not already doing FB action

      var listener = function(eventData) {
          // gamma is the left-to-right tilt in degrees, where right is positive
          // but is BF for horizontal ipad
          var tiltLR = eventData.gamma;

          // beta is the front-to-back tilt in degrees, where front is positive
          // but is LR for horizontal ipad -- positive is left, negative is right
          var tiltFB = eventData.beta;
          
          // alpha is the compass direction the device is facing in degrees
          var dir = eventData.alpha;
          var dirHold = dir;
          var dirD = 0; //change in dir
          
          // if (!coralSwim){
          //   if (tiltFB > 20){
          //     coralSwim = true;
          //     $('#coral3').html('<img src="images-cap/coral/schoolOfFish.gif">');
          //     $('#coral3').css('display', 'block');
          //     setTimeout(function(){
          //       $('#coral3').fadeOut();
          //       coralSwim = false;
          //     }, 6000);
          //   }
          // }

          var mar = $("#coral3").css("margin-left");
          mar = Number(mar.substring(0, mar.length - 2));
          var marT = $("#coral3").css("margin-top");
          marT = Number(marT.substring(0, marT.length - 2));
          swimFishes("#coral3", tiltFB, mar, marT);


            if (tiltLR > 25){
              $('#coral2').fadeIn();
            } else if (tiltLR < -10){
              $('#coral2').fadeOut();
            }
    
          if (!coralBubbles){
            coralBubbles = true;
            window.addEventListener('shake', bubbleShaker, false);
          }
          
      }

      var bubbleShaker = function(eventData){
        window.removeEventListener('deviceorientation', listener);
        window.removeEventListener('shake', bubbleShaker);
        $('#coral4').html('<img src="images-cap/coral/bubbles.gif">');
        $('#coral4').css('display', 'block');
        setTimeout(function(){
          $('#coral4').fadeOut();
          coralBubbles = false;
          window.addEventListener('deviceorientation', listener);
        }, 5000);
      }

      window.addEventListener('deviceorientation', listener);
    };

    function swimFishes(fish, tiltLR, mar, marT){
      // console.log("they see me rollin " + mar);
      // var moveDist = 10;      

      // //fish swimming
      // if (Math.round(tiltLR) > 0){ //swimming left  
      //   if (mar > -512){
      //     // document.getElementById(ball).style.marginLeft = (marB - rollDist) + 'px';
      //     // console.log((mar - moveDist) + 'px');
      //     var school  = document.getElementById('school').src = 'images-cap/coral/fishL.png';
      //     $(fish).css("margin-left",(mar - moveDist) + 'px');
      //     $(fish).css("margin-top",(marT - moveDist/3.0) + 'px');

      //   }
      // } else if (Math.round(tiltLR) < 0){ //swimming right
      //   if (mar < (windowW + 512)){
      //     console.log("ok");
      //     // console.log((mar - moveDist) + 'px');
      //     var school  = document.getElementById('school').src = 'images-cap/coral/fishR.png';
      //     $(fish).css("margin-left",(mar + moveDist) + 'px');
      //     $(fish).css("margin-top",(marT + moveDist/3.0) + 'px');

      //   }
      // }

      var moveDistLR = Math.abs(Math.round(tiltLR/2.0)); 

      //fish moving L and R
      if (Math.round(tiltLR) > 0){ //moving left  
        if (mar > -512){
          document.getElementById('school').src = 'images-cap/coral/fishL.png';
          $(fish).css("margin-left",(mar - moveDistLR) + 'px');

        }
      } else if (Math.round(tiltLR) < 0){ //moving right
        if (mar < (windowW + 512)){
          document.getElementById('school').src = 'images-cap/coral/fishR.png';
          $(fish).css("margin-left",(mar + moveDistLR) + 'px');

        }
      }
    }


//////////////////////////////////////////////////////////////////////////////////////////////////
    function grassland(){
      /* GRASSLAND */
      console.log("RUNNING GRASSLAND");
      $('#grass2').css('display', 'none');
      $('#grass3').css('display', 'none');
      $('.grassland').fadeIn();
      // setTimeout(function(){$('.grassland').fadeIn()}, 2000);

      var grasslandLR = false; //whether or not already doing LR action
      var grasslandFB = false; //whether or not already doing FB action
      var grasslandShake = false; //whether or not already doing shake action
      var sunIsUp = true;

      var listener = function(eventData) {
          // gamma is the left-to-right tilt in degrees, where right is positive
          // but is BF for horizontal ipad
          var tiltLR = eventData.gamma;

          // beta is the front-to-back tilt in degrees, where front is positive
          // but is LR for horizontal ipad -- positive is left, negative is right
          var tiltFB = eventData.beta;
          
          // alpha is the compass direction the device is facing in degrees
          var dir = eventData.alpha;
          var dirHold = dir;
          var dirD = 0; //change in dir
          

          // FRONT & BACK 
          if (!grasslandFB){
            if (tiltLR > 25 && sunIsUp){ //tilt forward for sunset
              grasslandFB = true;
              $('#grass2').html('<img src="images-cap/grassland/sunset.gif">');
              $('#grass2').css('display', 'block');
              setTimeout(function(){
                // $('#grass2').fadeOut();
                grasslandFB = false;
              }, 2200);
              sunIsUp = false;
              console.log("sun is set");
            } else if (tiltLR < -20 && !sunIsUp){ //tilt back for sunrise
              grasslandFB = true;
              $('#grass3').html('<img src="images-cap/grassland/sunrise.gif">');
              $('#grass3').css('display', 'block');
              setTimeout(function(){$('#grass2').css('display', 'none')}, 1000);
              setTimeout(function(){
                $('#grass3').fadeOut();
                grasslandFB = false;
              }, 2200);
              document.getElementById('sunrise').play();
              setTimeout(function(){  
                document.getElementById('sunrise').pause();
              }, 5000);

              sunIsUp = true;
              console.log("sun is up");
            }
          }

          //LEFT & RIGHT
          if (tiltFB > 0){ //rotate counterclockwise
            if (girDeg >= -15){ girDeg -= 5; }
          } else { //rotate clockwise
            if (girDeg <= 35){ girDeg += 5; }
          }
          // girDeg = -20;
          $('#grass5 img').css("webkit-transform", "rotate("+girDeg+"deg)");

    
          if (!grasslandShake){
            grasslandShake = true;
            window.addEventListener('shake', meerkatShaker, false);
          }
          
      }

      var meerkatShaker = function(eventData){
        window.removeEventListener('deviceorientation', listener);
        window.removeEventListener('shake', meerkatShaker);
        $('#grass6').html('<img src="images-cap/grassland/meerkats.gif">');
        $('#grass6').css('display', 'block');
        setTimeout(function(){
          $('#grass6').fadeOut();
          grasslandShake = false;
          window.addEventListener('deviceorientation', listener);
        }, 5000);
      }

      window.addEventListener('deviceorientation', listener);
    };


/////////////////////////////////////////////////////////////////////////////////////////////////
    function antarctic(){
      /* ANTARCTIC */
      console.log("RUNNING ANTARCTIC");
      $('.antarctic').fadeIn();
      // setTimeout(function(){$('.antarctic').fadeIn()}, 2000);

      var arcticLR = false; //whether or not already doing LR action
      var arcticFB = false; //whether or not already doing FB action
      var arcticShake = false; //whether or not already doing shake action

      var listener = function(eventData) {
          // gamma is the left-to-right tilt in degrees, where right is positive
          // but is BF for horizontal ipad
          var tiltLR = eventData.gamma;

          // beta is the front-to-back tilt in degrees, where front is positive
          // but is LR for horizontal ipad -- positive is left, negative is right
          var tiltFB = eventData.beta;
          
          // alpha is the compass direction the device is facing in degrees
          var dir = eventData.alpha;
          var dirHold = dir;
          var dirD = 0; //change in dir
          
          // if (!grasslandLR){
          //   if (tiltFB > 20){
          //     grasslandLR = true;
          //     $('#coral3').html('<img src="images-cap/coral/schoolOfFish.gif">');
          //     $('#coral3').css('display', 'block');
          //     setTimeout(function(){
          //       $('#coral3').fadeOut();
          //       coralSwim = false;
          //     }, 6000);
          //   }
          // }

          // FRONT & BACK 
          if (!arcticFB){
            arcticFB = true;
            if (tiltLR > 10){ //tilt forward for sliding penguin
              $('#ice3').html('<img src="images-cap/antarctic/slidingPenguin.gif">');
              $('#ice3').css('display', 'block');
              setTimeout(function(){
                // $('#ice3').fadeOut();
                arcticFB = false;
              }, 5200);
            } else if (tiltLR  < 0){ //tilt back for sunrise
              $('#ice5').html('<img src="images-cap/antarctic/orca.gif">');
              $('#ice5').css('display', 'block');
              setTimeout(function(){$('#ice5').css('display', 'none')}, 1000);
              setTimeout(function(){
                // $('#ice5').fadeOut();
                arcticFB = false;
              }, 5000);
              
            }
          }

          //LEFT & RIGHT
          if (!arcticLR){
            arcticLR = true;
            if (tiltFB > 0){ //tilt left
              // console.log("lefty");
              // $('#ice6').html('<img src="images-cap/antarctic/sealL.gif">');
              $('#ice6').html('display', 'block');
              // setTimeout(function(){
              //   // $('#ice6').css('display', 'none');
              //   $('#ice7').html('<img src="images-cap/antarctic/sealL.gif">');
              //   $('#ice7').html('display', 'block');
              //   setTimeout(function(){
              //     $('#ice7').fadeOut();
              //     arcticFB = false;
              //   }, 4000);
              // }, 4000);
            } else { //tilt right
              // console.log("righty");
              $('#ice8').html('<img src="images-cap/antarctic/sealR.gif">');
              $('#ice8').html('display', 'block');
              setTimeout(function(){
                // $('#ice8').css('display', 'none');
                $('#ice9').html('<img src="images-cap/antarctic/sealR.gif">');
                $('#ice9').html('display', 'block');
                setTimeout(function(){
                  $('#ice9').fadeOut();
                  arcticFB = false;
                }, 4000);
              }, 4000);
            }
          }
          
          if (!arcticShake){
            arcticShake = true;
            window.addEventListener('shake', snowShaker, false);
          }
          
      };

      window.addEventListener('deviceorientation', listener);

      var snowShaker = function(eventData){
        window.removeEventListener('shake', snowShaker);
        $('#ice10').html('<img src="images-cap/antarctic/snow.gif">');
        $('#ice10').css('display', 'block');
        setTimeout(function(){
          $('#ice10').fadeOut();
          arcticShake = false;
        }, 7000);
      };

    };
    
//////////////////////////////////////////////////////////////////////////////////////////////////
    function space(){
      /* SPACE */
      console.log("RUNNING SPACE");
      $('.space').fadeIn();
      // setTimeout(function(){$('.space').fadeIn()}, 2000);

      // var spaceLR = false; //whether or not already doing LR action
      // var spaceFB = false; //whether or not already doing FB action
      var spaceShake = false; //whether or not already doing shake action

      var listener = function(eventData) {
          // gamma is the left-to-right tilt in degrees, where right is positive
          // but is BF for horizontal ipad
          var tiltLR = eventData.gamma;

          // beta is the front-to-back tilt in degrees, where front is positive
          // but is LR for horizontal ipad -- positive is left, negative is right
          var tiltFB = eventData.beta;
          
          // alpha is the compass direction the device is facing in degrees
          var dir = eventData.alpha;
          var dirHold = dir;
          var dirD = 10; //change in dir
          
          var mar = $("#space2").css("margin-left");
          mar = Number(mar.substring(0, mar.length - 2));
          var marT = $("#space2").css("margin-top");
          marT = Number(marT.substring(0, marT.length - 2));
          moveAlien("#space2", tiltFB, tiltLR, mar, marT);


          //rotate alien
          alienDeg += 1;
          $('#space2 img').css("webkit-transform", "rotate("+alienDeg+"deg)");

          
          if (!spaceShake){
            spaceShake = true;
            window.addEventListener('shake', meteorShaker, false);
          }  
      }

      var meteorShaker = function(eventData){
        window.removeEventListener('shake', meteorShaker);
        $('#space3').html('<img src="images-cap/space/meteor.gif">');
        $('#space3').css('display', 'block');
        setTimeout(function(){
          $('#space3').fadeOut();
          spaceShake = false;
        }, 6000);
      }

      window.addEventListener('deviceorientation', listener);
    };

    function moveAlien(alien, tiltLR, tiltFB, mar, marT){
      // console.log("they see me rollin " + mar);
      var moveDistLR = Math.abs(Math.round(tiltLR/2.0)); 
      var moveDistFB = Math.abs(Math.round(tiltFB/2.0));

      //alien moving L and R
      if (Math.round(tiltLR) > 0){ //moving left  
        if (mar > 0){
          // document.getElementById(ball).style.marginLeft = (marB - rollDist) + 'px';
          // console.log((mar - moveDist) + 'px');
          $(alien).css("margin-left",(mar - moveDistLR) + 'px');

        }
      } else if (Math.round(tiltLR) < 0){ //moving right
        if (mar < (windowW - 400)){
          // console.log("ok");
          // console.log((mar - moveDist) + 'px');
          $(alien).css("margin-left",(mar + moveDistLR) + 'px');

        }
      }

      //alien moving Up and Down
      if (Math.round(tiltFB) < 0){ //moving up  
        if (marT > 0){
          // document.getElementById(ball).style.marginLeft = (marB - rollDist) + 'px';
          // console.log((mar - moveDist) + 'px');
          $(alien).css("margin-top",(marT - moveDistFB) + 'px');

        }
      } else if (Math.round(tiltFB) > 0){ //moving down
        if (marT < (windowH - 373)){
          console.log("ok");
          // console.log((mar - moveDist) + 'px');
          $(alien).css("margin-top",(marT + moveDistFB) + 'px');

        }
      }
    }

//////////////////////////////////////////////////////////////////////////////////////////////////
    function desert(){
      /* DESERT */
      console.log("RUNNING DESERT");
      $('.desert').fadeIn();
      // setTimeout(function(){$('.desert').fadeIn()}, 2000);

      var desertLR = false; //whether or not already doing LR action
      var desertFB = false; //whether or not already doing FB action
      var desertShake = false; //whether or not already doing shake action

      var listener = function(eventData) {
          // gamma is the left-to-right tilt in degrees, where right is positive
          // but is BF for horizontal ipad
          var tiltLR = eventData.gamma;

          // beta is the front-to-back tilt in degrees, where front is positive
          // but is LR for horizontal ipad -- positive is left, negative is right
          var tiltFB = eventData.beta;
          
          // alpha is the compass direction the device is facing in degrees
          var dir = eventData.alpha;
          var dirHold = dir;
          var dirD = 0; //change in dir
          

          //LEFT & RIGHT
          if (!desertLR){
            if (tiltFB > 20){
              desertLR = true;
              $('#desert4').html('<img src="images-cap/desert/vulture1.gif">');
              $('#desert4').css('display', 'block');
              setTimeout(function(){
                $('#desert4').fadeOut();
                desertLR = false;
              }, 6000);
            } else if (tiltFB < -20){
              desertLR = true;
              $('#desert3').html('<img src="images-cap/desert/tumbleweed.gif">');
              $('#desert3').css('display', 'block');
              setTimeout(function(){
                $('#desert3').fadeOut();
                desertLR = false;
              }, 6000);
            }
          }
    
          if (!desertShake){
            desertShake = true;
            window.addEventListener('shake', tornadoShaker, false);
          }
          
      }

      var tornadoShaker = function(eventData){
        window.removeEventListener('deviceorientation', listener);
        window.removeEventListener('shake', tornadoShaker);
        $('#desert5').html('<img src="images-cap/desert/tornado.gif">');
        $('#desert5').css('display', 'block');
        setTimeout(function(){
          $('#desert5').fadeOut();
          desertShake = false;
          window.addEventListener('deviceorientation', listener);
        }, 5000);
      }

      window.addEventListener('deviceorientation', listener);
    };

  

////////////////////////////////// SHAKE SHAKE SHAKE ///////////////////////////////////
    if (window.DeviceMotionEvent){
      console.log("deviceMotion is supported!");
    }

    // window.addEventListener('devicemotion', shakeEventDidOccur, false);

    // window.addEventListener('shake', shakeEventDidOccur, false);
    
    //define a custom method to fire when shake occurs.
    function shakeEventDidOccur () {
      // $('.all').fadeOut();
      if (shaken == true){
        document.body.background = "black";
        $('.all').fadeIn();
        shaken = false;
      } else {
        document.body.background = "blue";
        $('.all').fadeOut();
        shaken = true;
        //put your own code here etc.
        // if (confirm("Undo?")) {

        // }
      }
    }

});