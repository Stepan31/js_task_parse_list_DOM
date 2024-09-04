"use strict";
const listEmployes = [
    ...document.getElementsByTagName("li")
];
function sortList() {
    const salaryArr = listEmployes.map((el)=>{
        const salary = el.dataset.salary;
        const numericSalary = Number(salary.replace(/[$,]/g, ""));
        return {
            element: el,
            salary: numericSalary
        };
    });
    salaryArr.sort((firstEm, secondEm)=>secondEm.salary - firstEm.salary);
    const parentLi = listEmployes[0].parentNode;
    salaryArr.forEach(({ element })=>{
        parentLi.appendChild(element);
    });
}
function getEmployees() {
    const objectOfEmployees = listEmployes.map((el)=>{
        const nameEmp = el.textContent.trim();
        const position = el.dataset.position;
        const salary = el.dataset.salary;
        const age = el.dataset.age;
        return {
            name: nameEmp,
            position,
            salary,
            age
        };
    });
    return objectOfEmployees;
}
sortList();
getEmployees();

//# sourceMappingURL=index.f75de5e1.js.map