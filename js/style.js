let arrayCart=[]
localStorage.setItem("cart",JSON.stringify(array))

function createCart(){
    arr = JSON.parse(localStorage.getItem("cart"))
    let data ="<table border='1px' >"
    data+= "<tr  id='create_table' >"+
    "<td>"+ "Name"+ "</td>" +
    "<td>"+ "price"+ "</td>" +
    "<td>"+ "amount"+ "</td>" +
    "<td>"+ "conditiion"+ "</td>" +
    "<td>"+ "brand"+ "</td>" +
    "</tr>"
    for(let i=0;i<array.length;i++){
        data+= "<tr>"+
        "<td>"+ array[i].detaild.name+ "</td>" +
        "<td>"+ array[i].detaild.price+ "</td>" +
        "<td>"+ array[i].amount+ "</td>" +
        "<td>"+ array[i].detaild.condition+ "</td>" +
        "<td>"+ array[i].detaild.brand+ "</td>" +
        "<td onclick='deleteFunction("+i+")'>Delete</td>" +
        "</tr>"
    }
    data+="</table>"
    document.getElementById("result").innerHTML=data
}

function addCart(index) {
    //lấy giỏ hàng tử localStorage
    arrayCart = JSON.parse(localStorage.getItem("cart")) 
    if (arrayCart == null) {
        arrayCart = []
    }
    let check = true
    //kiểm tra nếu sản phẩm đã có thì tăng số lượng, không tạo mới
    for(let i = 0; i < arrayCart.length; i++) {
        if (arrayCart[i].product.name === array[index].name) {
            arrayCart[i].amount += 1
            check = false
            break
        }
    }
    //nếu là sản phẩm mới thì tạo mới trong giỏ hàng
    if (check) {
        let cartElement = new Cart(array[index],1)
        arrayCart.push(cartElement)
    }
    array[index].quantity -= 1
    //lưu 2 mảng vào localstorage
    localStorage.setItem("cart", JSON.stringify(arrayCart))
    localStorage.setItem("list", JSON.stringify(array))
    createrDetails()
    createCart()
}

createCart()


// hàm có sẵn
document.getElementById("result").style.display="none"

function displayCart(){
    document.getElementById("result").style.display="block"
}

function cartDisplay(){
    let x =document.getElementById("result");
    if(x.style.display==="none"){
        x.style.display="block"
    }else{
        x.style.display="none"
    }
}

