let selectedRow = null
    
function onFormSubmit() {
    let formData = readData()
    if(selectedRow == null) {
        insertData(formData)
    }else {
        updateData(formData)
    }
}

function readData() {
    let formData = {}
        formData.nome = document.getElementById('nome').value
        formData.email = document.getElementById('email').value
        formData.salario = document.getElementById('salario').value
        return formData
}

function insertData(readData) {
    var table = document.getElementById('tabela').getElementsByTagName('tbody')[0]
    var newRow = table.insertRow(table.length)
    cell1 = newRow.insertCell(0)
    cell1.innerHTML = readData.nome
    cell2 = newRow.insertCell(1)
    cell2.innerHTML = readData.email
    cell3 = newRow.insertCell(2)
    cell3.innerHTML = readData.salario
    cell4 = newRow.insertCell(3)
    cell4.innerHTML = '<a onClick="onEdit(this)">Edit</a> | <a onCLick="DeleteData(this)">Delete</a>'
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    console.log(td)
    document.getElementById("nome").value = selectedRow.cells[0].innerHTML
    document.getElementById("email").value = selectedRow.cells[1].innerHTML
    document.getElementById("salario").value = selectedRow.cells[2].innerHTML
}

function updateData(formData) {
    selectedRow.cells[0].innerHTML = formData.nome;
    selectedRow.cells[1].innerHTML = formData.email;
    selectedRow.cells[2].innerHTML = formData.salario;
    selectedRow = null
}

function DeleteData(a) {
    row = a.parentElement.parentElement
    document.getElementById('tabela').deleteRow(row.rowIndex)
}