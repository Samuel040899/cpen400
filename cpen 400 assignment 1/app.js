var products = [["box1", 10, 10],
                ["boxes", 10, 10],
                ["red dress", 10, 10],
                ["T-shirt", 10, 10],
                ["jeans", 10, 10],
                ["mouse", 10, 10],
                ["keyboard", 10, 10],
                ["m & k", 10, 10],
                ["computer", 10, 10],
                ["computer 2", 10, 10],
                ["computer 3,", 10, 10],
                ["tent", 10, 10]
                ];

var cart = [["box1", 0],
            ["boxes", 0],
            ["red dress", 0],
            ["T-shirt", 0],
            ["jeans", 0],
            ["mouse", 0],
            ["keyboard", 0],
            ["m & k", 0],
            ["computer", 0],
            ["computer 2", 0],
            ["computer 3", 0],
            ["tent", 0]
            ];

function addItems(item){
products[item][2] = products[item][2] - 1;
addToCart(item);
inactiveTime = 0;
}

function removeItems(item){
products[item][2] = products[item][2] + 1;
removeFromCart(item);
inactiveTime = 0;
}

function addToCart(item){
cart[item][1] = cart[item][1] + 1;
}

function removeFromCart(item){
cart[item][1] = cart[item][1] - 1;
}

function displayCart(){
inactiveTime = 0;
var tempCart = [];
var x = 0;

for (let i = 0; i < cart.length; i++){
if (cart[i][1] > 0){
tempCart[x] = cart[i][0] + ": " + cart[i][1];
x = x + 1;
}
}

if (x == 0){
alert("Nothing added to the cart");
}
else{
alert(tempCart.join("\n"));
}
}

var inactiveTime = 0;

var interval = setInterval(checkTime ,1000);

function checkTime(){
inactiveTime++;
if (inactiveTime > 29){
if(alert("Are you still buying anything?")){
}
else inactiveTime = 0;
}
}









