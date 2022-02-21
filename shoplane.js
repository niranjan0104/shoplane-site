var productData = {
    "id": "1",
    "name": "Men Navy Blue Solid Sweatshirt",
    "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    "photos": [
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg"
    ],
    "description": "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
    "size": [
        1,
        1,
        0,
        1,
        0
    ],
    "isAccessory": false,
    "brand": "United Colors of Benetton",
    "price": 2599
}

// } {
/* <div id="image"><img id="image-decor" src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg" alt=""></div>

<div id="info-about">
    <p id="name">Men Navy Blue Solid Sweatshirt</p>
    <p id="brand">United Colors of Benetton</p>
    <p id="price">Price: Rs <span>2599</span></p>
    <p id="descrption">Description</p>
    <p id="descript-content">Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem</p>
    <p id="product-preview">Product Preview</p>

    <div id="img-section">
        <img class="active" class="img-section" 
        src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg" alt="img">
        <img class="img-section" src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg" alt="men">
        <img class="img-section" src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg" alt="men">
        <img class="img-section" src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg" alt="men">
        <img class="img-section" src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg" alt="men">
    </div>

    <button id="add-card">Add To Cart</button>

</div> */
let wrapper = document.getElementById("wrapper")

let image = document.createElement("img");
image.src = productData.preview;
image.className = "image-decor";


let imgDiv = document.createElement("div");
imgDiv.className = "image";


imgDiv.appendChild(image);
wrapper.appendChild(imgDiv);

//second section ------------------------------>

let div1 = document.createElement("div");
div1.className = "info-about";

let pName = document.createElement("p");
pName.innerHTML = productData.name;
pName.className = "name";
div1.appendChild(pName);

let pBrand = document.createElement("p");
pBrand.innerHTML = productData.brand;
pBrand.className = "brand";
div1.appendChild(pBrand);

let pPrice = document.createElement("p");
pPrice.innerHTML = "RS"+ " "+productData.price;
pPrice.className = "price";
div1.appendChild(pPrice);

let pDescrption = document.createElement("P");
pDescrption.innerHTML = "Description";
pDescrption.className = "descrption";
div1.appendChild(pDescrption);

let pDescriptContent = document.createElement("p");
pDescriptContent.innerHTML = productData.description;
pDescriptContent.className = "descript-content";
div1.appendChild(pDescriptContent);

let pProductPreview = document.createElement("p");
pProductPreview.innerHTML = "Product Preview";
pProductPreview.className = "product-preview";
div1.appendChild(pProductPreview);


let divImg = document.createElement("div");
divImg.classList = "img-section";

let clickHandler = function (src ,i) {
    image.src = src

    let imgeSec = document.getElementsByClassName("image-section")
    
    for (let i=0 ; i<imgeSec.length ; i++){
        imgeSec[i].classList.remove ("active")
        
    }
    imgeSec[i].className = "active image-section";
    
}


for (let i = 0; i < productData.photos?.length; i++) {
    let secImg = document.createElement("img");
    let src = productData.photos[i];
    secImg.src = src;
    secImg.className = "image-section";
    if (i === 0) {
        secImg.className = "active image-section"
    }

    secImg.addEventListener("click", function () {
        clickHandler(src, i);

        // secImg.style.border= "1px solid black"
    });


    divImg.appendChild(secImg);

};



let btn = document.createElement('button');
btn.innerHTML = "Add To Cart";
btn.className = "add-card";

div1.appendChild(divImg)
div1.appendChild(btn);
wrapper.appendChild(div1)


