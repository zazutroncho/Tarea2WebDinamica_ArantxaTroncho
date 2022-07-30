/*function addRow(e){
    let newRow = document.createElement("tr");
    newRow.innerHTML = "<td></td><td></td><td></td><td></td>";
    let table = document.getElementById("tabla");
    table.appendChild(newRow);
}
document.getElementById("insertRowButton").addEventListener("click", addRow);*/
function addRow(e){
    let table = document.getElementById("tabla");
    table.insertAdjacentHTML('beforeend','<tr><td></td><td></td><td></td><td></td></tr>');
}
document.getElementById("insertRowButton").addEventListener("click", addRow);