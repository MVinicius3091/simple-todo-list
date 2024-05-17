ARRAY_OBJECT = [];
ARRAY_SELECT = [];

addEventListener("DOMContentLoaded", () => {
  let arrayStorage = getStorage("array_list");
  if (arrayStorage && arrayStorage.length > 0) {
    arrayStorage.forEach((obj) => {
      ARRAY_OBJECT.push(obj);
    });
  }
});

function getArrayList() {
  return ARRAY_OBJECT;
}

function getTotal() {
  let arrayStorage = getStorage("array_list");
  let total = null;

<<<<<<< HEAD
  (arrayStorage && arrayStorage.length > 0) ? total = arrayStorage.length : total = 0;
=======
  arrayStorage.length > 0 ? total = arrayStorage.length : total = 0;
>>>>>>> 47f9f08c6f3d0a9b6a2bbb1f556410408983216f

  let txtTotal = getElement('#txt-total');
  setHtml(txtTotal, total);
}

function closeModal(element) {
  let el = getElement(element);
  let body = getElement('body');
  let b = new this.bootstrap.Modal(getElement(element));
  b._hideModal();

  setAttr(el, 'style', 'display: none;');
  setAttr(el, 'aria-hidden', !0);
  removeAttr(el, 'aria-modal');
  removeAttr(el, 'role');
  setAttr(body, 'class', '');
  setAttr(body, 'style', '');
}

function getElement(element) {
  return document.querySelector(element);
}

function getElementAll(element) {
  return document.querySelectorAll(element);
}

function getAttr(element, attribute) {
  return document.querySelector(element).getAttribute(attribute);
}

function setAttr(element, attribute, value) {
  element.setAttribute(attribute, value);
}

function createAttr(attribute, value) {
  document.createAttribute(attribute, value);
}

function removeAttr(element, attribute) {
  element.removeAttribute(attribute);
}

function setHtml(element, text) {
  element.innerHTML = text;
}

function toogleClass(element, className) {
  let attr = getAttr(element, 'class');

  if (attr.includes(className)) {
    setAttr(getElement(element), 'class', 'form-control fade');
  } else {
    setAttr(getElement(element), 'class', 'form-control fade show');
  }
}

function onlyString(input) {
  let patterns = /^[A-Za-zÀ-ÿ ]+$/;

  if (!patterns.exec(input.data) || input.target.value.length > 50) {
    input.target.value = input.target.value.slice(0, -1);
  }
}

function listenerEvent(element, listener, callback) {
  document
    .querySelector(element)
    .addEventListener(listener, (target) => callback(target));
}

function rules(rule, target) {
  if (typeof rule == "object") {
    let result = null;

    rule.forEach((r) => {
      r == target ? (result = true) : (result = false);
    });

    return result;
  } else {
    return rule == target ? true : false;
  }
}

function createElement(element, className = "") {
  let el = document.createElement(element);

  if (className != "") {
    setAttr(el, "class", className);
  }

  return el;
}

function msgAlert(message, type = "danger") {
  let html = getElement("html");

  let div = createElement(
    "div",
    `alert alert-${type} alert-dismissible position-absolute top-0 m-4`
  );
  let strong = createElement("strong");
  let button = createElement("button", "btn-close");
  setAttr(button, "data-bs-dismiss", "alert");
  setHtml(strong, message);

  div.append(strong);
  div.append(button);

  html.append(div);

  setTimeout(() => {
    div.remove();
  }, 3000);
}

function setStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getStorage(key) {
  let getList = localStorage.getItem(key);
  return JSON.parse(getList);
}

function clearStorage() {
  localStorage.clear();
}

function clearList() {
  ARRAY_OBJECT = [];
  clearStorage();
}

function clearCamp(camp) {
  camp.value = "";
}

function pushObject(obj) {
  let setId = Math.random().toString(36).substring(2, 6);
  obj.id = setId;

  ARRAY_OBJECT.forEach((str) => {
    if (str.id === setId) {
      str.id = Math.random().toString(36).substring(2, 6);
    }
  });

  ARRAY_OBJECT.push(obj);

  setStorage("array_list", ARRAY_OBJECT);
}

function sleep() {
  return new Promise(r => setTimeout(r, 400));
}

async function templateGenerate(arrayList, text = 'Lista vazia!') {
  let txtTtml = "";
  let htmlList = getElement("#name-list");
<<<<<<< HEAD
=======

  arrayList.reverse();
>>>>>>> 47f9f08c6f3d0a9b6a2bbb1f556410408983216f

  await sleep();

  if (arrayList.length > 0) {
    arrayList.forEach((obj) => {
      txtTtml += `<li class="list-group-item d-flex justify-content-between align-items-center my-2 px-1 py-2 m-0 shadow-lg">
<<<<<<< HEAD
                      <div class="d-flex">
                        <input type="checkbox" class="mx-2 inputSelect" data-id="${obj.id}" onclick="selectList(event)">
                        <p class="fs-5 p-0 m-0">
                        ${String(obj.name).toLocaleUpperCase()}
                        </p>
                      </div>    
                      <div class="d-flex justify-content-between">
                        <button class="me-1 btn btn-success btn-sm" data-id="${obj.id}"
                        data-bs-toggle="modal" data-bs-target="#editModal" onclick="editList(event)">
                          Editar
                        </button>
                        <button class="btn btn-sm btn-danger" data-id="${obj.id}"
=======
                      <p class="fs-5 p-0 m-0">
                        ${String(obj.name).toLocaleUpperCase()}
                      </p>
                      <div class="d-flex justify-content-between">
                        <button class="me-1 btn btn-success btn-sm" id="btnEditar" data-id="${obj.id}"
                        data-bs-toggle="modal" data-bs-target="#editModal" onclick="editList(event)">
                          Editar
                        </button>
                        <button class="btn btn-sm btn-danger" id="btnExcluir" data-id="${obj.id}"
>>>>>>> 47f9f08c6f3d0a9b6a2bbb1f556410408983216f
                        data-bs-toggle="modal" data-bs-target="#deleteModal" onclick="deleteList(event)">
                          Excluir
                        </button>
                      </div>
                  </li>`;
  
      setHtml(htmlList, txtTtml);
    });
  } else {
    setHtml(htmlList, text);
  }
  
  getTotal();
  ARRAY_SELECT = [];
}

function editList(event) {
  let getId = event.target.dataset.id;
  let arrayList = getStorage('array_list');
  let inputEdit = getElement('#inputEdit');
  let btnEdit = getElement('#btnEdit');

  arrayList.forEach(obj => {
    if (obj.id == getId) {
      inputEdit.value = obj.name;
      setAttr(btnEdit, 'data-edit-id', obj.id);
    }
  });
}

function deleteList(event) {
  let getId = event.target.dataset.id;
  let btnDeleted = getElement('.btnDeleted');
  setAttr(btnDeleted, 'data-delete-id', getId);
}

function selectList(event) {
  let targetElement = event.target;
  let getId = targetElement.dataset.id;

  if (targetElement.checked) {
    ARRAY_SELECT.push(getId);
  } else {
    ARRAY_SELECT.filter((v,i) => {
      if (v.includes(getId)) {
        ARRAY_SELECT.splice(i, 1);
      }
    });
  }
}

listenerEvent('html', 'click', (event) => {
  let body = getElement('body');
  let backdrop = getElement('.modal-backdrop');
  let cts = body.contains(backdrop);

  if (cts) {
    backdrop.remove();
  }

});

async function serachList(element) {

  let arrayList = getArrayList();
  let searchValue = getElement(element).value;

  arrayList = arrayList.filter(search => {
    if (search.name.includes(searchValue)) {
      return [search];
    }
  });

  await sleep(); 
  templateGenerate(arrayList, 'Nenhum resultado encontrado!');
}