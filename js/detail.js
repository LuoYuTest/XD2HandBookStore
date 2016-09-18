var tabs=document.getElementById("tab").getElementsByTagName("li");

var divs=document.getElementById("tab_con").getElementsByTagName("div");

for(var i=0;i<tabs.length;i++){

  tabs[i].onclick=function(){change(this);}

}

function change(obj){
   for(var i=0;i<tabs.length;i++){

    if(tabs[i]==obj){

      tabs[i].className="fli";

      divs[i].className="fdiv";

      var width = (0.16 * i) * 100 +"%";
      document.getElementById("shade").style.left = width;

      if(i != 0){
        document.getElementsByClassName("fdiv")[0].style.borderRadius = "20px 20px 20px 20px";
      }

     }

   else{

    tabs[i].className="";

    divs[i].className="";

    }

   }

  }
