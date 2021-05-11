console.log("Hey bro");

// id="qty"
// id="minus"
// id="dlt"
// id="add"

const qty = document.getElementById("qty");
const add = document.getElementById("add");
const minus = document.getElementById("minus");
const dlt = document.getElementById("dlt");
count = 1;


add.addEventListener('click', function(e) {
    console.log("hey you clicked on add");
count+=1;
qty.innerHTML = count;
});
minus.addEventListener('click', function(e) {
    console.log("hey you clicked on minus");
    count-=1;
    qty.innerHTML = count;
    if(count <=  0){
        count = 0;
        qty.innerHTML = 1;
    }
})
dlt.addEventListener('click', function(e) {
    console.log("hey you clicked on delete");
})