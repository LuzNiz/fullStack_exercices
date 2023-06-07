export function createRows(id, date, last_name, first_name, dni, age, transaction_number, details){
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${id}</td>
        <td>${date}</td>
        <td>${last_name}</td>
        <td>${first_name}</td>
        <td>${dni}</td>
        <td>${age}</td>
        <td>${transaction_number}</td>
        <td>${details}</td>
        <td>
        <i class="las la-pen edit"></i>
        <i class="las la-trash trash"></i>
        </td>
        `;
    return row;
}

