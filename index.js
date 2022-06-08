const employee = {
    name: "Sam"
    }
    function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = { ...employee };
    newObj[key] = value;
    return newObj;
    }
    const updatedEmployee = updateEmployeeWithKeyAndValue(
        name,
        "street adress",
        "11 Broadway"
    );
    function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
        employee.streetAddress = "12 Broadway";
        return employee
    }
    function deleteFromEmployeeByKey(employee, key) {
    const updatedEmployee = { ...employee };
    delete updatedEmployee.name;
    return updatedEmployee;
    }
    function destructivelyDeleteFromEmployeeByKey(employee, key) {
     delete employee.name;   
     return employee;
    }