var i = 0;

var image = document.getElementsByTagName("img");

var next = document.querySelector(".rightArrow");

var prev = document.querySelector(".leftArrow");

next.addEventListener("click",function(){

    i++;

    if(i==0)
    {
        image.setAttribute("src", "messi1.png");
        // image.style.width="";
    }
    else if(i==1)
    {
      image.setAttribute("src", "messi2.jpg");
    //   image.style.width="900px";
    }
    else if(i==2)
    {
        image.setAttribute("src","messi3.jpg");
        // image.style.width="990px";
    }
    else if(i==3)
    {
        image.setAttribute("src","messi4.jpg");
        // image.style.width="880px";
    }
    else 
    {
        alert("End of Slide");
        i--;
    }
})


prev.addEventListener("click",function(){

    i--;

    if(i==0)
    {
        image.setAttribute("src", "messi1.png");
    }
    else if(i==1)
    {
        image.setAttribute("src", "messi2.jpg");
    }
    else if(i==2)
    {
        image.setAttribute("src","messi3.jpg");
    }
    else if(i==3)
    {
        image.setAttribute("src","messi4.jpg");
    }
    else 
    {
        alert("End of Slide");
        i++;
    }
})

