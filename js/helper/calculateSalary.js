function getSalary(baseSalary, employeeName, level) {
    if (employeeName && Number(level) === 1) {
        return ` ${employeeName} Your Salary is #${baseSalary}`;
    }
    else if(employeeName && Number(level) === 2) {
      baseSalary = baseSalary * 2;
      return ` ${employeeName} Your Salary is #${baseSalary}`;

    }
}
export default getSalary;