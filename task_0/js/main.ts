interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string,
}

const student1: Student = {
    firstName: "Shoes",
    lastName: "Cheese",
    age: 61,
    location: "EveryWhere"
};

const student2: Student = {
    firstName: "Capybara",
    lastName: "Potato",
    age: 33,
    location: "NotBornYet"
};

const studentsList: Student[] = [student1, student2];

const table: HTMLTableElement = document.createElement('table');
document.body.appendChild(table);

const tablehead: HTMLTableSectionElement = document.createElement('tablehead');
tablehead.innerHTML = '<tr><th>FirstName</th><th>Location</th></tr>';
table.appendChild(tablehead);
const tablebody: HTMLTableSectionElement = document.createElement('tablebody');
table.appendChild(tablebody);
for (let i: number = 0; i < studentsList.length; i++) {
    const row: HTMLTableRowElement = document.createElement('tr');
    const nameCell: HTMLTableCellElement = document.createElement('th');
    const locCell: HTMLTableCellElement = document.createElement('th');
    nameCell.innerHTML = studentsList[i].firstName;
    locCell.innerHTML = studentsList[i].location;
    row.appendChild(nameCell);
    row.appendChild(locCell);
    tablebody.appendChild(row);
}
