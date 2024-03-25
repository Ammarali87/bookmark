
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


