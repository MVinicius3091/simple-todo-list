
templateGenerate(getArrayList());

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
  clearCamp(getElement('#inputSearch'));
  templateGenerate(getArrayList());
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

listenerEvent('#btnDeletedAll', 'click', () => {
  let arrayList = getArrayList();

  if (ARRAY_SELECT.length > 0) {
    ARRAY_SELECT.forEach(j => {
      arrayList.forEach((v,i) => {
        if (v.id.includes(j)) {
          arrayList.splice(i, 1);
        }
      })
    });
   
    setStorage('array_list', arrayList);
  } else {
    clearList();
  }

  closeModal('#deleteAllModal');
  templateGenerate(getArrayList());
  msgAlert('Lista excluída com sucesso!', 'success');
})

listenerEvent('#btnSelect', 'click', () => {
  let allInputs = getElementAll('.inputSelect');
  ARRAY_SELECT = [];
  allInputs.forEach(element => {
    if (element.checked) {
      element.checked = false;
      ARRAY_SELECT = [];
    } else {
      element.checked = true;
      ARRAY_SELECT.push(element.dataset.id);
    }
  })
})




