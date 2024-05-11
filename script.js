
templateGenerate(getArrayList());

let btnAdc = getElement('#btnAdicionar');

listenerEvent('#inputText', 'input', (event) => {
  onlyString(event);
});

listenerEvent('#inputSearch', 'input', (event) => {
  onlyString(event);
  serachList('#inputSearch');
});

listenerEvent('#inputEdit', 'input', (event) => {
  onlyString(event);
});

listenerEvent('#btn-search', 'click', () => {
  toogleClass('#inputSearch', 'show');
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

  templateGenerate(getArrayList());
  msgAlert('Adicionado com sucesso!', 'success');

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
  templateGenerate(getArrayList());
  msgAlert('Editado com sucesso!', 'success');

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
  templateGenerate(getArrayList());
  msgAlert('Excluído com sucesso!', 'success');

});




