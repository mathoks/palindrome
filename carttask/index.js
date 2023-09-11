const list = [
  {
    path: "./cart/shoe.png",
    name: "shoe",
    like: 0,
    price: 800,
    Quant: 0,
    Tprice: 0,
    id: 0
  },
  {
    path: "./cart/136-1360615_red-sweatshirt-png-clip-art-transparent-background-clothes.png",
    name: "cloth",
    like: 0,
    price: 100,
    Quant: 0,
    Tprice: 0,
    id: 1,
  },
];

var mainDiv = document.getElementById("main2");
var count = [];
var summ = 0;
var sum = 0;
var suu;
var dd = 0;
var Total;
var Tp;
var Cancel;
window.onload = function (e) {
  for (i = 0; i < list.length; i++) {
    var item = {};
    item.price = list[i].price;
    item.Quant = list[i].Quant;
    var listItem = document.createElement("div");

    listItem.innerHTML = `<div key = ${i} class = "tii">Name: ${list[i].name} <span><img src = ${list[i].path} width = 50  height = 50></span><span ><button class= "btn">add</button> <span class = "hj">${list[i].Quant}</span><button class = "btn2" >minus</button></Span><span class ="price"> unit Price: ${list[i].price}</span><span class= "tp">Tprice: ${list[i].Tprice}</span><button class="can">Cancel</button></div>`;
    listItem.setAttribute("class", "item");
    mainDiv.appendChild(listItem);
  }

  const newdiv = document.getElementById("jou");
  const total = document.createElement("span");
	 total.textContent = `${count}`;
  newdiv.appendChild(total);

  Cancel = document.querySelectorAll(".can")
  Cancel.forEach((e,i)=>{
    Cancel[i].addEventListener("click", ()=>{
        var cim = document.getElementsByClassName("tii")
        cim[i].style.display = "none"
        let inde = count.findIndex((obj) => obj.id === i);
        if (inde > -1) {
          count.splice(inde, 100);
          suu = count.reduce((a, c) => {
            return a + c.price;
          }, 0);
        Total.innerText = `Total: ${suu}`;
        }

    })
  })
  Total = document.getElementById("total");
  Tp = document.querySelectorAll(".tp");
  var button2 = document.querySelectorAll(".btn2");
  let button = document.querySelectorAll(".btn");
  button.forEach((e, i) => {
    let val = document.querySelectorAll(".hj");
    button[i].addEventListener("click", () => {
                                               
	 console.log(Tp.length);

      val[i].textContent = ++list[i].Quant;
      var t = val[i].textContent;
      Tp[i].textContent = `Total:` + " " + t * list[i].price;

      count.push({ price: list[i].price, id: i });
      suu = count.reduce((a, c) => {
        return a + c.price;
      }, 0);

      Total.innerText = `Total: ${suu}`;

    });
  });

  button2.forEach((e, k) => {
    button2[k].addEventListener("click", () => {
      let val = document.querySelectorAll(".hj");
      if (list[k].Quant > 0) {
        val[k].textContent = --list[k].Quant;
        let index = count.findIndex((obj) => obj.id === k);
        if (index > -1) {
          count.splice(index, 1);
        }
        suu = count.reduce((a, c) => {
          return a + c.price;
        }, 0);
           
        console.log(i);

        Tp[k].textContent = ` Total: ${val[k].textContent * list[k].price}`;
        Total.innerText = suu;
      } else {
        val[k].textContent = list[k].Quant;
        return (Total.innerText = `Total: ${suu}`);
      }
    });
  });
};
