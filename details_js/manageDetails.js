array=[]
let d1= new Details('CAY HOA GIÁY','US 20$',20,'New','CAYXANH')
array.push(d1)
localStorage.setItem("list",JSON.stringify(array))

function createrDetails(){
    array = JSON.parse(localStorage.getItem("list"))
    let data="<div id='create-main'>"
    for(let i=0; i<array.length;i++){
        data+="<div id='create-mains'>"
        data+= "<h2>"+array[i].name+"</h2>"
        data+= "<div class='main-proce'>"+array[i].price+"</div>"
        data+= "<div class='main-quantity'>"+"Quantity: " +"<input style='width:50px; height:30px; text-align: create;' value='"+array[i].quantity+"' >"+"</div>"
        data+= "<div class='main-condition'>"+"Condition: "+array[i].condition+"</div>"
        data+= "<div class='main-brand'>"+"Brand: "+array[i].brand+"</div>"
        data+="<button id='button' style='width:150px; height:40px; ' onclick='addCart("+i+")'><span></span>Add to Cart</button>"
        // data+="<td><button id='button' onclick='deleteProduct("+i+")'>Delete</button></td>"
        // data+="<td><button id='button' onclick='cartProduct("+i+")'>AddCart</button></td>" 
        data+="</div>"
    }
    data+="</div>"
    document.getElementById("results").innerHTML=data
    // console.log(data);
}

createrDetails()