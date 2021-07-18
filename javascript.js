var listarr=[];
document.querySelector('.refresh').addEventListener('click',function(){
    listarr.length=0;
    document.querySelector('.list').innerHTML="";
    document.querySelector('.start').style.display='block';
});
var date=new Date();
document.querySelector('.date').innerText=date.toDateString();
document.addEventListener('keyup',function(e){
    if(e.keyCode===13){
        
    if(document.querySelector('input').value.trim()=="")//to check if user is not entering white spaces
    {alert("Enter some task to add to To-Do list");}
    else
    {   listarr.push([[document.querySelector('input').value],[1]]);
        display();
        document.querySelector('input').value="";
    }
}});
function display(){
    listarr.forEach((element,index)=>{
        if(index===0){
            document.querySelector('.list').innerHTML="";   
        }
        document.querySelector('.list').innerHTML+=`<li><i class="far fa-circle icons"onclick="complete(${index})"></i><p>`+element[0]+`</p><i class="far fa-trash-alt delete icons"onclick="deelete(${index})"></i></li>`;
        if(listarr.length==0){
            document.querySelector('.start').style.display="block";
            document.querySelector('.list').style.display="none"; 
        }
        else
        {
            document.querySelector('.start').style.display="none";
        document.querySelector('.list').style.display="block";
        }
    });
};
function complete(i){
            document.querySelector('.list').innerHTML="";
         listarr.forEach((element,index)=>{
             if(index===i||element[1]===2)
             {    
                document.querySelector('.list').innerHTML+=`<li><i class="far fa-check-circle icons2"onclick="uncomplete(${index})"></i><p class="para">`+element[0]+`</p><i class="far fa-trash-alt delete icons"onclick="deelete(${index})"></i></li>`;
                element[1]=2;
             }
             else
             {
                document.querySelector('.list').innerHTML+=`<li><i class="far fa-circle icons"onclick="complete(${index})"></i><p>`+element[0]+`</p><i class="far fa-trash-alt delete icons"onclick="deelete(${index})"></i></li>`;
             }
         });  
         
}
function uncomplete(i){
    document.querySelector('.list').innerHTML="";
    listarr.forEach((element,index)=>{
        if(index==i||element[1]==1)
        {
            document.querySelector('.list').innerHTML+=`<li><i class="far fa-circle icons"onclick="complete(${index})"></i><p>`+element[0]+`</p><i class="far fa-trash-alt delete icons"onclick="deelete(${index})"></i></li>`;
            element[1]=1;
        }
        else{
            document.querySelector('.list').innerHTML+=`<li><i class="far fa-check-circle icons2"onclick="uncomplete(${index})"></i><p class="para">`+element[0]+`</p><i class="far fa-trash-alt delete icons"onclick="deelete(${index})"></i></li>`;
        }
    })
}
function deelete(i){
        listarr.splice(i,1);//to delete elements from i to i+1(not inclusive)
        document.querySelector('.list').innerHTML="";
    listarr.forEach((element,index)=>{
        if(element[1]==1)
        {
            document.querySelector('.list').innerHTML+=`<li><i class="far fa-circle icons"onclick="complete(${index})"></i><p>`+element[0]+`</p><i class="far fa-trash-alt delete icons"onclick="deelete(${index})"></i></li>`;
        }
        else{
            document.querySelector('.list').innerHTML+=`<li><i class="far fa-check-circle icons2"onclick="uncomplete(${index})"></i><p class="para">`+element[0]+`</p><i class="far fa-trash-alt delete icons"onclick="deelete(${index})"></i></li>`;
        }
    });
    if(listarr.length==0){
        document.querySelector('.start').style.display="block";
        document.querySelector('.list').style.display="none"; 
    }

}
