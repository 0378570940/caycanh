let arrayCart=[]
// localStorage.setItem("cart",JSON.stringify(array))

// xóa giỏ hàng
function deleteFunction(index){
    if(confirm("bạn muốn xóa sản phẩm này")){
        arrayCart.splice(index,1);
        alert("Bạn xóa thành công sản phẩm")
    }
    localStorage.setItem("cart",JSON.stringify(arrayCart))
    cartDisplay()
}

function cartDisplay(){
    arrayCart = JSON.parse(localStorage.getItem("cart"))
    let data ="<table class='create_table' border='1px' >"
    data+= "<tr  id='create_table' >"+
    "<td columns='2'>"+ "Name"+ "</td>" +
    "<td>"+ "price"+ "</td>" +
    "<td>"+ "amount"+ "</td>" +
    "<td>"+ "conditiion"+ "</td>" +
    "<td>"+ "brand"+ "</td>" +
    "</tr>"
    for(let i=0;i<arrayCart.length;i++){
        data+= "<tr>"+
        "<td style='color: white;'>"+ arrayCart[i].details.name+ "</td>" +
        "<td style='color:gold;'>"+ arrayCart[i].details.price+ "</td>" +
        "<td style='color: white;'>"+"<button  onclick='upAmount(" + i + ")'>+</button>"+"<input style='width:30px; height:25px; text-align: create;' value='"+arrayCart[i].amount+"' >" +"<button  onclick='downAmount(" + i + ")'>-</button>" +"</td>" +
        "<td style='color: white;'>"+ arrayCart[i].details.condition+ "</td>" +
        "<td style='color: white;'>"+ arrayCart[i].details.brand+ "</td>" +
        "<td onclick='deleteFunction("+i+")' style='color: red;'>Xóa</td>" +
        "</tr>"
    }
    data+="</table>"
    document.getElementById("result").innerHTML=data
}

cartDisplay()

function addCart(index) {
    //lấy giỏ hàng tử localStorage
    arrayCart = JSON.parse(localStorage.getItem("cart")) 
    if (arrayCart == null) {
        arrayCart = []
    }
    let check = true
    //kiểm tra nếu sản phẩm đã có thì tăng số lượng, không tạo mới
    for(let i = 0; i < arrayCart.length; i++) {
        if (arrayCart[i].details.name === array[index].name) {
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
    cartDisplay()
}

//hàm tăng số lượng
function upAmount(index) {
    let name = arrayCart[index].details.name
    for(let i = 0; i < array.length; i++) {
        //điều kiện không tăng quá số lượng sẵn có
        if (array[i].name === name && array[i].quantity > 0) {
            arrayCart[index].amount += 1
            array[i].quantity -= 1
            break
        }
    }
    localStorage.setItem("cart", JSON.stringify(arrayCart))
    localStorage.setItem("list", JSON.stringify(array))
    createrDetails()
    cartDisplay()
}

//hàm giảm số lượng
function downAmount(index) {
    let name = arrayCart[index].details.name
    for(let i = 0; i < array.length; i++) {
        //điều kiện trả số lượng cho giỏ hàng
        if (array[i].name === name) {
            //nếu đưa số lượng trong giỏ hàng về 0 thì sẽ tự động xóa phần tử đó
            if (arrayCart[index].amount === 1){
                arrayCart.splice(index,1)
            } else {
                arrayCart[index].amount -= 1   
            }
            array[i].quantity += 1
            break
        }
    }
    localStorage.setItem("cart", JSON.stringify(arrayCart))
    localStorage.setItem("list", JSON.stringify(array))
    createrDetails()
    cartDisplay()
}

// hàm có sẵn
document.getElementById("result").style.display="none"

function displayCart(){
    document.getElementById("result").style.display="block"
}

function cartDisplay1(){
    let x =document.getElementById("result");
    if(x.style.display==="none"){
        x.style.display="block"
    }else{
        x.style.display="none"
    }
}

