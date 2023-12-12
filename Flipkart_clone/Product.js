let sample_data = [
    {
        Brand:"Blue Wish",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/r/f/5/11-2531910312-11-u-s-polo-assn-off-white-original-imags5qhjgh9sgq2.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"758",
        actualprice:"2,299",
        discount:"60% off",
        img2:"https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" 

    },
    {
        Brand:"Mokshi",
        img_src:"https://rukminim2.flixcart.com/image/612/612/kxz0pe80/gown/h/y/m/na-l-sleeveless-stitched-rd-crp-drs-006-rudraaksha-na-original-imagaazse5sgpmzw.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"1,329",
        actualprice:"1,799",
        discount:"60% off",
        img2:"https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"

    },
    {
        Brand:"Avantika Fashion",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/sari/g/l/u/-original-imagu22a23mzudy7.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"1,286",
        actualprice:"2,499",
        discount:"50% off",
        img2:"https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
    },
     {
        Brand:"Vendoz",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/sari/1/x/o/free-banarasi-avantika-fashion-unstitched-original-imagh576t2nhv8ey.jpeg?q=70",
        names:"Men Slim Self Shirt",
        price:"1,758",
        actualprice:"2,099",
        discount:"50% off",
        img2:"https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
    },
    {
        Brand:"Puma",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/gown/o/g/k/na-s-full-sleeve-stitched-salsa-kedar-fab-na-original-imagtwgu4vdgzdgr.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"558",
        actualprice:"1,399",
        discount:"50% off",
        img2:"https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
    },
    {
        Brand:"Blinkin",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/jewellery-set/g/u/g/d-cultured-1-jalak-gold-pink-brado-jewellery-original-imagqh7xdeydwghp.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"558",
        actualprice:"1,399",
        discount:"50% off",
        img2:"https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
    },
    
    {
        Brand:"Puma",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/eye-shadow/z/d/f/-original-imaggu2mzzdf3rxb.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"5578",
        actualprice:"10,399",
        discount:"50% off",
        img2:"https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
    },
    {
        Brand:"Arrow",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/s/4/f/-original-imagsfejwcyfa4yx.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"2,038",
        actualprice:"2,899",
        discount:"50% off",
        img2:"https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
    
    },
    {
        Brand:"Fossil",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/watch/b/w/w/1-es5253set-fossil-women-original-imags22zzgnqdx7w.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"558",
        actualprice:"1,399",
        discount:"50% off",
        img2:"https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
    },
    {
        Brand:"Vendoz",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/s/3/j/m-22mo116-2-moca-by-monte-carlo-original-imagkhz8pfsa7eyp.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"558",
        actualprice:"1,399",
        discount:"50% off",
        img2:"https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
    },
    {
        Brand:"Deals4you",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/d/n/5/3-1412beg-3-mosac-beige-original-imagd4byphzgqghu-bb.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"558",
        actualprice:"1,399",
        discount:"50% off",
        img2:"https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
    },
    {
        Brand:"Maybeline New York",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/kajal/r/a/p/-original-imagzbzwjuhzy5ge.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"558",
        actualprice:"1,399",
        discount:"50% off",
        img2:"https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
    },
    {
        Brand:"Puma",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/o/l/g/-original-imagr4kcakf4pgbg.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"5578",
        actualprice:"10,399",
        discount:"50% off",
        img2:"https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
    },
    {
        Brand:"Puma",
        img_src:"https://rukminim2.flixcart.com/image/612/612/kvba7bk0/kids-dress/9/k/n/9-10-years-gmd0017-blk-fashion-dream-original-imag88znfzgx2aay.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"5578",
        actualprice:"10,399",
        discount:"50% off",
        img2:"https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
    },
    {
        Brand:"Deals4you",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/9/t/c/m-ku779grn-mokshi-original-imagm5wzqgthgaw8.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"5578",
        actualprice:"10,399",
        discount:"50% off",
        img2:"https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
    },

]


localStorage.setItem("productsdata", JSON.stringify(sample_data));

let collection = JSON.parse(localStorage.getItem("productsdata")) || [];

Product();

function Product(){

    collection.map((element)=>{
        
        let box = document.createElement("div");
         box.className="box";
        let innerbox = document.createElement("div")
    let price1 = document.createElement("span");
     price1.innerHTML = element.price
     price1.className="p1";
    let price2 = document.createElement("span");
    price2.innerHTML = element.actualprice
    price2.className="ac";
    let dis=document.createElement("span")
    dis.innerHTML=element.discount
    dis.className="dis";

    innerbox.append(price1, price2,dis);
    innerbox.className = "innerbox"
  let avatar = document.createElement("img");
  avatar.src = element.img_src;
  avatar.className = "avatar"
  let logo=document.createElement("img");
  logo.src=element.img2;
  logo.className="logo"
  let brand = document.createElement("p");
  brand.innerHTML = element.Brand;
  brand.className="brand"
   box.append(avatar,brand,logo,innerbox);
   document.getElementById("collection").append(box);

    })
}

