//Problem 1
const employees = [
    {
        Name : 'Sam',
        Department : 'Tech',
        Designation : 'Manager',
        Salary : 40000,
        RaiseEligible : true
    },
    {
        Name : 'Mary',
        Department : 'Finance',
        Designation : 'Trainee',
        Salary : 18500,
        RaiseEligible : true
    },
    {
        Name : 'Bill',
        Department : 'HR',
        Designation : 'Executive',
        Salary : 21200,
        RaiseEligible : false
    }
];

console.log("Problem 1:")
console.log('Employee list', employees);

//Problem 2
const company = {   
    companyName: 'Tech Stars',
    website: 'www.techstars.site',
    employees: employees
};

console.log("Problem 2:")
console.log('Company info:', company);

//Problem 3
const newEmployee = {Name: 'Anna', Department: 'Tech', Designation: 'Executive', Salary: 25600, RaiseEligible: false };
company.employees.push(newEmployee);

console.log("Problem 3:")
console.log('New employee added:', employees)

//Problem 4
let totalSalary = 0;
company.employees.forEach(employee => {
  totalSalary += employee.Salary;
});

console.log("Problem 4:")
console.log('Total Salary $' + totalSalary);

//Problem 5
function giveRaiseAndUpdateEligibility(companyEmployees) {
    companyEmployees.forEach(employee => {
      if (employee.RaiseEligible) {
        employee.Salary *= 1.1; // Increase salary by 10%
        employee.RaiseEligible = false; // Set raise eligibility to false
      }
    });
}

giveRaiseAndUpdateEligibility(company.employees);

console.log("Problem 5:")
console.log('Employees after giving raise:', company.employees);

//Problem 6
const employeesWorkingFromHome = ['Anna', 'Sam'];
company.employees.forEach(employee => {
  employee.wfh = employeesWorkingFromHome.includes(employee.Name);
});

console.log("Problem 6:")
console.log('Updated company data with WFH status:', company);
