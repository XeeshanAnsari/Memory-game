           var imgCount = 1;
            var total = 6 ;
 window.setInterval(function slideA() {
            
            var image = document.getElementById("mainContainer");
            imgCount++ ;
            if(imgCount < 1){
                imgCount = total;
            }
            else if(imgCount > total){
                imgCount = 1;
            }
            else{
                image.style.backgroundImage = 'url(./image/slider/img'+ imgCount + '.jpg)';
            }
              
        },3000);