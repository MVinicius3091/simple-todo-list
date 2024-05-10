
templateGenerate();

let btnAdc = getElement('#btnAdicionar');

listenerEvent('#inputText', 'input', (event) => {
  onlyString(event);
});

listenerEvent('#btnAdicionar', 'click', () => {
  let inputText = getElement('#inputText');
  let validate = rules([''], inputText.value);

  if (validate) {
    msgAlert('Preencha o campo vazio!');
    return;
  }

  pushObject({name: inputText.value});

  clearCamp(inputText);

  templateGenerate();
});

listenerEvent('#btnEdit', 'click', (event) => {
  let arrayList = getArrayList();
  let id = event.target.dataset.editId;
  let inputEdit = getElement('#inputEdit');

  arrayList.forEach((obj, idx) => {
    if (obj.id === id) {
      obj.name = inputEdit.value
    }
  });

  setStorage('array_list', arrayList);
  closeModal('#editModal');
  templateGenerate();

});

listenerEvent('#btnDeleted', 'click', (event) => {
  let arrayList = getArrayList();
  let id = event.target.dataset.deleteId;

  arrayList.forEach((obj, idx) => {
    if (obj.id === id) {
      arrayList.splice(idx, 1);
    }
  });

  setStorage('array_list', arrayList);
  closeModal('#deleteModal');
  templateGenerate();
});




