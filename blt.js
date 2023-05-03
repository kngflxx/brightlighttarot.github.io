var showhide = document.querySelector("ul");
    showhide.addEventListener("click", function(e){
        document.querySelectorAll('.page').forEach(function(element){
            element.style.display = "none";
        });
    var data = e.target.dataset;
     if(data){
        document.getElementById(data.targetId).style.display = "block";
        document.querySelector(".home").style.display= "none";
     } 
    
    });

    var showhide2 = document.querySelector(".logo");
    showhide2.addEventListener("click", function(a){
        document.querySelectorAll('.home').forEach(function(element){
            element.style.display = "block";
        });
        var data2 = a.target.dataset;
        if(data2){
            document.querySelector(".home").style.display = "block";
            document.getElementById("about").style.display = "none";
            document.getElementById("youtube").style.display = "none";
            document.getElementById("decks").style.display = "none";
            document.getElementById("readings").style.display = "none";
        }
    });

var imgarray = [
    "ok/t1.jpg",
    "ok/t2.jpg",
    "ok/t3.jpg",
    "ok/t4.jpg",
    "ok/t5.jpg",
    "ok/t6.jpg",
    "ok/t7.jpg",
    "ok/t8.jpg",
    "ok/t9.jpg",
    "ok/t10.jpg",
    "ok/t11.jpg",
    "ok/t12.jpg",
    "ok/t13.jpg",
    "ok/t14.jpg",
    "ok/t15.jpg",
    "ok/t16.jpg",
    "ok/t17.jpg",
    "ok/t18.jpg",
    "ok/t19.jpg",
    "ok/t20.jpg",
    "ok/t21.jpg",
    "ok/t22.jpg",
    "ok/t23.jpg",
    "ok/t24.jpg",
    "ok/t25.jpg",
    "ok/t26.jpg",
    "ok/t27.jpg",
    "ok/t28.jpg",
    "ok/t29.jpg",
    "ok/t30.jpg",
    "ok/t31.jpg",
    "ok/t32.jpg",
    "ok/t33.jpg",
    "ok/t34.jpg",
    "ok/t35.jpg",
    "ok/t36.jpg",
    "ok/t37.jpg",
    "ok/t38.jpg",
    "ok/t39.jpg",
    "ok/t40.jpg",
    "ok/t41.jpg",
    "ok/t42.jpg",

];

function PAC() {
    var num = Math.floor(Math.random() * imgarray.length);
    document.getElementById("picture").src = imgarray[num];   
}
window.onload = PAC;

