{/* <script src="/product.js"></script> */}
// import {Product} from './product.js'
array=[]
let p1= new Product('/img/caycanhcard1-removebg-preview.png','cay hoa giáy','15$')
let p2= new Product("../img/caycanhcard10-removebg-preview.png", "Cay Mộc Lan1", "15$")
let p3= new Product("../img/caycanhcard11-removebg-preview.png", "Cay Mộc Lan2", "15$")
let p4= new Product("../img/caycanhcard12-removebg-preview.png", "Cay Mộc Lan3", "15$")
let p5= new Product("../img/caycanhcard12-removebg-preview.png", "Cay Mộc Lan3", "15$")
let p6= new Product("../img/caycanhcard12-removebg-preview.png", "Cay Mộc Lan3", "15$")
array.push(p1)
array.push(p2)
array.push(p3)
array.push(p4)
array.push(p5)
array.push(p6)
localStorage.setItem("list",JSON.stringify(array))

function createrCart(){
    array = JSON.parse(localStorage.getItem("list"))
    let data="<div id='create-main' style='display: grid; grid-template-columns: auto auto ;'>"
    for(let i=0; i<array.length;i++){
        data+="<div id='create-mains'>"
        data+="<p class='create-main-text'>"+"<img src='../img/caycanhcard1-removebg-preview.png'>"+"</p>"
        data+= "<h2>"+array[i].name+"</h2>"
        data+= "<div class='main-proce'>"+array[i].price+"</div>"
        data+="<td><button id='button' onclick='editProduct("+i+")'>Edit</button></td>"
        data+="<td><button id='button' onclick='deleteProduct("+i+")'>Delete</button></td>"
        // data+="<td><button id='button' onclick='cartProduct("+i+")'>AddCart</button></td>" 
        data+="</div>"
    }
    data+="</div>"
    document.getElementById("result").innerHTML=data
}

// xóa sản phẩm 
function deleteProduct(index){
    if(confirm("Bạn muốn xóa sản phẩm này !")){
        array.splice(index,1)
        alert("Bạn xóa thành công sản phẩm !")
    }
    localStorage.setItem("list",JSON.stringify(array))
    createrCart()
}

// thêm sản phẩm mới từ js sang html

function createProduct(){
    let img=document.getElementById("imgAdd").value;
    let name=document.getElementById("nameAdd").value;
    let price=document.getElementById("priceAdd").value;
    let newProduct=new Product(img,name,price)
    array.push(newProduct)
    document.getElementById("imgAdd").value="";
    document.getElementById("nameAdd").value="";
    document.getElementById("priceAdd").value="";
    localStorage.setItem("list",JSON.stringify(array))
    createrCart();
    
}

// sửa sản phẩm từ js
function editProduct(index){
    document.getElementById("imgUpdate").value=array[index].img
    document.getElementById("nameUpdate").value=array[index].name
    document.getElementById("priceUpdate").value=array[index].price
    localStorage.setItem("indexUpdate",index)
}

// sủa từ html vào js
function updateProduct() {
    let img = document.getElementById("imgUpdate").value
    let name = document.getElementById("nameUpdate").value
    let price = document.getElementById("priceUpdate").value
    if (img !== "" && name !== "" && price !== "") {
        let product = new Product(img, name, price)
        array[localStorage.getItem("indexUpdate")] = product
        alert("Sửa thành công")
    }
    localStorage.setItem("list", JSON.stringify(array))
    document.getElementById("imgUpdate").value = ""
    document.getElementById("nameUpdate").value = ""
    document.getElementById("priceUpdate").value = ""
    createrCart()

}

createrCart()
