var client = prompt("Hello! Please kindly input your name for an easy and smooth experience.")

while(client === ""){
    var client = prompt("Apologies! But for better customer care service, completing this field is required. Please kindly input your name.");
}

function clientName() {
let link = document.getElementsByClassName("whatsapp_link");
for(i = 0; i < link.length; i++) {
    link[i].innerHTML = `<a href=https://wa.me/+27682424522?text=Hello%20Mr.Salem!%20My%20Name%20is%20${client}%20I'm%20contacting%20you%20from%20your%20website%20Nazach-Properties%20in%20regards%20to%20purchasing%20the%20 %20Offer%20I'm%20interested%20in.><button  class=click>Buy #</button></a>`;  

}
}
clientName();