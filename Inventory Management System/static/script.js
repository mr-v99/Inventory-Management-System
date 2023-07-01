products = [
    {
        id:0001,
        name: "Chips",
        price: 0.200,
        quantity:0,
    },
    {
        id:0002,
        name: "Meat",
        price: 2.200,
        quantity:0,
    },
    {
        id:0003,
        name: "Juice",
        price: 0.300,
        quantity:0,
    },
    {
        id:0004,
        name: "Fish",
        price: 3.300,
        quantity:0,
    },
    {
        id:0005,
        name: "Cloths",
        price: 1.900,
        quantity:0,
    },
]

userCart = [
    {
        name:"",
        quantity:0,
        price:0,
        total:0
    },
    {
        name:"",
        quantity:0,
        price:0,
        total:0
    },
    {
        name:"",
        quantity:0,
        price:0,
        total:0
    },
    {
        name:"",
        quantity:0,
        price:0,
        total:0
    },
    {
        name:"",
        quantity:0,
        price:0,
        total:0
    },
];

var total = 0;
var counter = 1;
function addToCart(product){
    //add to cart
    //get the quantity from the user
    var quantityElement = document.getElementById("pq"+product);
    var quantity = Number(quantityElement.value);

    if(quantity > 0){
        
        //compute the product total and update the overall total
        var productTotal = products[product].price * quantity;
        total += productTotal;

        userCart[product] = {
            name: products[product].name,
            quantity: quantity,
            price: products[product].price,
            total: productTotal
        };

        // Create a button element
        var button = document.createElement("button");

        // Set button attributes
        button.innerHTML = "Delete";
        button.id = product;
        button.className = "btn btn-danger";
        button.onclick = function (){
            var element = document.getElementById(newRow.id);
            element.remove();
            total -= productTotal;
            document.getElementById("totalPrice").innerHTML=`Total Price: ${total} R.O`;
        };

        var table = document.getElementById("cartBody");

        var newRow = table.insertRow();
        newRow.id = "cartItem"+counter;
        var nameCell = newRow.insertCell();
        var quantityCell = newRow.insertCell();
        var priceCell = newRow.insertCell();
        var totalCell = newRow.insertCell();
        var deleteCell = newRow.insertCell();
        
        nameCell.innerHTML = userCart[product].name;
        quantityCell.innerHTML = userCart[product].quantity;
        priceCell.innerHTML = userCart[product].price;
        totalCell.innerHTML = productTotal;
        deleteCell.appendChild(button);

        document.getElementById("totalPrice").innerHTML=`Total Price: ${total} R.O`;
        document.getElementById("buyBtn").disabled = false;
        quantityElement.value = 0;
        counter++;
    }

}

function displayBill(){
    var confirmation = confirm("Do you confirm the buying process?")
    if(confirmation){
        var username = document.createElement("h6");
        var phone = document.createElement("h6");
        var location = document.createElement("h6");

        username.innerHTML = "Ali Al-Badi";
        phone.innerHTML = "99119911";
        location.innerHTML = "Code Academy";

        var bill = document.getElementById("bill");

        var billHeader = document.createElement("h1");
        billHeader.innerHTML = "Your Bill";

        var line1 = document.createElement("hr");
        var line2 = document.createElement("hr");

        var billId = document.createElement("h6");
        var totalBill = document.createElement("h6");
        billId.innerHTML=`Bill Id #: 678`;
        totalBill.innerHTML=`Total Price: ${total} R.O`;

        bill.appendChild(billHeader);
        bill.appendChild(line1);
        bill.appendChild(username);
        bill.appendChild(phone);
        bill.appendChild(location);
        bill.appendChild(line2);
        bill.appendChild(billId);
        bill.appendChild(totalBill);

        var cartBody = document.getElementById('cartBody');

        cartBody.innerHTML = "";
    }
    

}
