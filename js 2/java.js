
// var inputName = document.getElementById("input1");
// var inputurl = document.getElementById("input2");
// var sitedisplay = document.getElementById("list-site");

// // if (localStorage.getItem("mylist") !== null) {
// //   var siteList = JSON.parse(localStorage.getItem("mylist"));
// //   display(siteList);
// // }


// if( localStorage.getItem("mylist") !== null ){
//   siteList = JSON.parse(localStorage.getItem("mylist"))
//   display(siteList);
// }
  
// function addsite() {
//   var siteList = [];
 
//   if ( validName() &&  validURL() ) { // Check if both input fields have values
//     var site = {
//       Name: inputName.value,
//       url : inputurl.value
//     };
//     siteList.push(site);
//     localStorage.setItem("mylist", JSON.stringify(siteList));
//     display(siteList);
//     inputName.value = "";
//     inputurl.value = "";
//   } else {
//     alert("Please fill all the fields");
//   }
// }

// //     function addsite(){
// //   sitedisplay.innerHTML = "listElement";
// //   console.log("dfdsfsd")
// // 	}
// function display(arr) {
//   var listElement = "";

//   for (var i = 0; i < arr.length; i++) {
//     listElement += `
//       <div class="row">
//         <div class="col text-center">
//           <h3 class="my-4">URL</h3>
//           <p>${arr[i].url}</p>
//         </div>
//         <div class="col text-center">
//           <h3 class="my-4">Name</h3>
//           <p>${arr[i].Name}</p>
//         </div>
//         <div class="col text-center">
//           <h3 class="my-4">Visit</h3>
//           <div class="fs-5 px-5 py-2 btn a mx-auto ">
//             <a  target="_blank" href="${arr[i].url}">
//               <i class="fa-solid fa-eye" aria-hidden="true"></i>
//               Visit
//             </a>
//           </div>
//         </div>
//         <div class="col text-center">
//           <h3 class="my-4">Delete</h3>
//           <div onclick="del(${i})" 
//           class="fs-5 px-5 py-2 btn mx-auto btn-danger ">
//             <i class="fa-solid fa-trash" aria-hidden="true"></i>
//             Delete
//           </div>
//         </div>
//       </div>
//     `;
//   }
//       sitedisplay.innerHTML +=  listElement;
// }


// //  function deleteSite(i){
// //     siteList =   siteList.splice(i,1)
// // 	  localStorage.setItem("mylist", JSON.stringify(siteList))
// // 	  display(siteList)
// //  }

// function del(i) {
//   var siteList = JSON.parse(localStorage.getItem("mylist"));
//   siteList.splice(i, 1);
//   localStorage.setItem("mylist", JSON.stringify(siteList));
//   display(siteList);
// }


//  function validName(){
//    var regName = /^[a-z].+$/
//      if(regName.test(inputName.value ) == true){
//       inputName.classList.add("is-valid")
//       inputName.classList.remove("is-invalid")
//       return true  
//      } else{
//       inputName.classList.add("is-invalid")
//       inputName.classList.remove("is-valid")
//       return false  
//      }
//   }

//   function validURL() {
//     var regURL = /^(https?:\/\/)?([\w.-]+)\.([a-zA-Z]{2,})(\/\S*)?$/;
    
//     if (regURL.test(inputurl.value)) {
//       inputurl.classList.add("is-valid");
//       inputurl.classList.remove("is-invalid");
//       return true;
//     } else {
//       inputurl.classList.add("is-invalid");
//       inputurl.classList.remove("is-valid");
//       return false;
//     }
//   }






//   //  var productName = document.getElementById('input');
//   //  var productPrice = document.getElementById('input2');
//   //  var productDescription = document.getElementById('textarea');
//   //  var productCategory = document.getElementById('select');
//   //  var productImage = document.getElementById('file');
//   //  var productContainer = document.getElementById("ProductElementContainer");
  
//   //  var productList = [];
  
//   //  if (localStorage.getItem("proList") !== null) {
//   //    // Retrieve data from local storage
//   //    productList = JSON.parse(localStorage.getItem("proList"));
//   //    display(productList);
//   //  }
  
//   //  function addProduct() {
//   //    if( invalidName() && invalidPrice ){
//   // 	 var product = {
//   // 	 productName: productName.value,
//   // 	 productPrice: productPrice.value,
//   // 	 productDescription: productDescription.value,
//   // 	 productCategory: productCategory.value,
//   // 	 productImage: productImage.files[0].name
//   //    };
  
//   //    productList.push(product);
//   //    reset();
//   //    display(productList);
//   //    localStorage.setItem("proList", JSON.stringify(productList));
//   //  } else{
//   //    alert("Please fill all the fields");
//   //  }
  
//   //  }
  
//   //  function reset() {
//   //    productName.value = '';
//   //    productPrice.value = '';
//   //    productDescription.value = '';
//   //    productCategory.value = "choose another element";
//   //    productImage.value = null;
//   //  }
  
  
  
//   //  var addUpdate;
//   //  var btn1 = document.getElementById("btn1");
//   //  var btn2 = document.getElementById("btn2");
  
//   //  function throwToInput(updateIndex) {
//   //    productName.value = productList[updateIndex].productName;
//   //    productDescription.value = productList[updateIndex].productDescription;
//   //    productCategory.value = productList[updateIndex].productCategory;
//   //    // productImage.value = productList[updateIndex].productImage;
//   //    productPrice.value = productList[updateIndex].productPrice;
  
//   //    addUpdate = updateIndex;
//   //    btn1.classList.replace("d-block", "d-none");
//   //    btn2.classList.replace("d-none", "d-block");
  
  
//   //  }
  
  
//   // 	  function update( ){
//   // 	   console.log("helo wolrldddd")
//   // 		  productList[addUpdate].productName = productName.value;
//   // 		  productList[addUpdate].productDescription = productDescription.value;
//   // 		  productList[addUpdate].productCategory = productCategory.value;
//   // 		  productList[addUpdate].productPrice = productPrice.value;
//   // 		  reset();
//   // 		  display(productList);
//   // 		  localStorage.setItem("proList", JSON.stringify(productList));
//   // 		  btn1.classList.replace("d-none", "d-block");
//   // 		  btn2.classList.replace("d-block", "d-none");   }
  
  
//   //  function search() {
//   // 	 var term = document.getElementById('search').value;
//   // 	 var listSearch = [];
//   // 	 if (term.trim() !== '') {
//   // 	   for (let i = 0; i < productList.length; i++) {
//   // 		 if (productList[i].productName.toLowerCase().includes(term.toLowerCase())) {
//   // 		   listSearch.push(productList[i]);
//   // 		 }
//   // 	   }
//   // 	 } else {
//   // 	   listSearch = productList;
//   // 	 }
//   // 	 display(listSearch);
//   //    }
  
//   //  function display(arr) {
//   //    var productElement = '';
  
//   //    for (let i = 0; i < arr.length; i++) {
//   // 	 productElement += `
//   // 	   <div class="col border p-3 shadow-sm m-2 p-2">
//   // 		 <div>
//   // 		   <img src="./images/${arr[i].productImage}" class="w-100 h-100 object-fit-contain" alt="">
//   // 		 </div>
//   // 		 <h3 class="fs-5">${arr[i].productName}</h3>
//   // 		 <p class="fs-4 text-secondary">${arr[i].productDescription}</p>
//   // 		 <div class="d-flex justify-content-between pe-3">
//   // 		   <p class="fs-4">${arr[i].productCategory}</p>
//   // 		   <p class="fs-4 me-5">${arr[i].productPrice}</p>
//   // 		   <i onclick="deleteProduct(${i})" class="px-2 mt-2 fa-solid fs-5 fa-trash-can text-danger" aria-hidden="true"></i>
//   // 		   <i  onclick="throwToInput(${i})" class="px-2 mt-2 fa-solid fs-5 fa-pen-to-square text-success" aria-hidden="true"></i>
//   // 		 </div>
//   // 	   </div>
//   // 	 `;
//   //    }
  
//   //    productContainer.innerHTML = productElement;
//   //  }
  
//   //  function deleteProduct(deleteIndex) {
//   //    productList.splice(deleteIndex, 1);
//   //    localStorage.setItem("proList", JSON.stringify(productList));
//   //    display(productList);
//   //   }
  
//   //   function  invalidPrice(){
  
//   // 	var regPrice = /^\d+$/;
//   // 	if(regPrice.test(productPrice.value) == true){
//   // 		productPrice.classList.add("is-valid")
//   // 		productPrice.classList.remove("is-invalid")
//   // 		return true
//   // 	   } else{
//   // 	  productPrice.classList.add("is-invalid")
//   // 	  productPrice.classList.remove("is-valid")
//   // 	  return false
//   //    }
//   //   }
//   //   function  invalidName(){
  
//   // 	var regName = /^[A-Z].+$/;
//   // 	if(regName.test(productName.value) == true){
//   // 		productName.classList.add("is-valid")
//   // 		productName.classList.remove("is-invalid")
//   // 		return true
//   // 	   } else{
//   // 	  productName.classList.add("is-invalid")
//   // 	  productName.classList.remove("is-valid")
//   // 	  return false
//   //    }
//   //   }

var inputName = document.getElementById("input1");
var inputurl = document.getElementById("input2");
var sitedisplay = document.getElementById("list-site");

if (localStorage.getItem("mylist") !== null) {
  var siteList = JSON.parse(localStorage.getItem("mylist"));
  display(siteList);
} else {
  var siteList = [];
}

function addsite() {
  if (validName() && validURL()) {
    var site = {
      Name: inputName.value,
      url: inputurl.value
    };
    siteList.push(site);
    localStorage.setItem("mylist", JSON.stringify(siteList));
    display(siteList);
    inputName.value = "";
    inputurl.value = "";
  } else {
    alert("Please fill all the fields");
  }
}

function display(arr) {
  var listElement = "";

  for (var i = 0; i < arr.length; i++) {
    listElement += `
      <div class="row">
        <div class="col text-center">
          <h3 class="my-4">URL</h3>
          <p>${arr[i].url}</p>
        </div>
        <div class="col text-center">
          <h3 class="my-4">Name</h3>
          <p>${arr[i].Name}</p>
        </div>
        <div class="col text-center">
  <h3 class="my-4">Visit</h3>
  <div class="fs-5 px-5 py-2 aa btn mx-auto">
    <a target="_blank" href="${arr[i].url}">
      <i class="fa-solid fa-eye" aria-hidden="true"></i>
      Visit
    </a>
  </div>
</div>
        <div class="col text-center">
          <h3 class="my-4">Delete</h3>
          <div onclick="del(${i})" 
          class="fs-5 px-5 py-2 btn mx-auto btn-danger ">
            <i class="fa-solid fa-trash" aria-hidden="true"></i>
            Delete
          </div>
        </div>
      </div>
    `;
  }
  sitedisplay.innerHTML = listElement;
}

function del(i) {
  siteList.splice(i, 1);
  localStorage.setItem("mylist", JSON.stringify(siteList));
  display(siteList);
}
   

function validName() {
  var regName = /^[a-z].+$/;
  if (regName.test(inputName.value) == true) {
    inputName.classList.add("is-valid");
    inputName.classList.remove("is-invalid");
    return true;
  } else {
    inputName.classList.add("is-invalid");
    inputName.classList.remove("is-valid");
    return false;
  }
}

function validURL() {
  var regURL = /^(https?:\/\/)?([\w.-]+)\.([a-zA-Z]{2,})(\/\S*)?$/;
  if (regURL.test(inputurl.value)) {
    inputurl.classList.add("is-valid");
    inputurl.classList.remove("is-invalid");
    return true;
  } else {
    inputurl.classList.add("is-invalid");
    inputurl.classList.remove("is-valid");
    return false;
  }
}


