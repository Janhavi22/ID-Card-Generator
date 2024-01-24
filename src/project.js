
const preview =document.getElementById("preview");           //The addEventListener() method allows you to add event listeners on any-
preview.addEventListener("click",prev);                     // -HTML DOM object such as HTML elements, the HTML document.


function prev(){
const inName =document.getElementById("inName").value;        // getelem...ID used to read or edit an HTML element
const inAdd =document.getElementById("inAdd").value;
const inNum =document.getElementById("inNum").value;
const infield =document.getElementById("infield").value;

 const name =document.getElementById("name");
 const Address =document.getElementById("Address");
 const Number =document.getElementById("Number");
 const fieldyr =document.getElementById("fieldyr");

 name.innerHTML=inName;                                      // innerHTML property can be used to write the dynamic html on the html document!
 Address.innerHTML=inAdd;
 Number.innerHTML=inNum;
 fieldyr.innerHTML=infield ;
}


function loadImage(event){
    const image = document.getElementById("imgdisp");       //The URL.createObjectURL() static method creates a string containing a URL-
    image.src=URL.createObjectURL(event.target.files[0]);   //-representing the object given in the parameter.
}
// function loadimage(event){                                 //change in name of image 'i' n 'I'....'I' do function 
//     const image = document.getElementById("imgdisp");
//     image.src = URL.createObjectURL(event.target.files[0]);
// }
// const canvas = document.getElementById("result");
// canvas.height= canvas.width / 1.616;
// const ctx = canvas.getContext("2d");
// ctx.font="20px Helvetica";
// ctx.fillstyle="#159";
// ctx.rect(0,0,300,56);
// ctx.fill();