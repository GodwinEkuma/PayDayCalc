import calaculateSalary from './helper/calculateSalary';

class salaryCalculator {
  static calculateInternSalary (employeeName, level) {
		let baseSalary = 15000;
    if (employeeName && Number(level) === 1) {
			return ` ${employeeName} Your Salary is #${baseSalary}`;
		}
		else if(employeeName && Number(level) === 2) {
		  baseSalary = baseSalary * 2;
		  return ` ${employeeName} Your Salary is #${baseSalary}`;

		}
	}
	static calculateAssociateSalary (employeeNamey, level) {
    let baseSalary = 20000
		if (employeeName && Number(level) === 1) {
			return ` ${employeeName} Your Salary is #${baseSalary}`;
		}
		else if(employeeName && Number(level) === 2) {
		  baseSalary = baseSalary * 2;
		  return ` ${employeeName} Your Salary is #${baseSalary}`;

		}
	}
	static calculateManagerSalary (employeeName, level) {
    let baseSalary = 30000
		if (employeeName && Number(level) === 1) {
			return ` ${employeeName} Your Salary is #${baseSalary}`;
		}
		else if(employeeName && Number(level) === 2) {
		  baseSalary = baseSalary * 2;
		  return ` ${employeeName} Your Salary is #${baseSalary}`;

		}
	}
	static calculateExecitiveSalary (employeeName, level) {
		let baseSalary = 40000
		
		if (employeeName && Number(level) === 1) {
			return ` ${employeeName} Your Salary is #${baseSalary}`;
		}
		else if(employeeName && Number(level) === 2) {
		  baseSalary = baseSalary * 2;
		  return ` ${employeeName} Your Salary is #${baseSalary}`;

		}
	}
	static calculateDirectorSalary (employeeName, level) {
    let baseSalary = 50000
		if (employeeName && Number(level) === 1) {
			return ` ${employeeName} Your Salary is #${baseSalary}`;
		}
		else if(employeeName && Number(level) === 2) {
		  baseSalary = baseSalary * 2;
		  return ` ${employeeName} Your Salary is #${baseSalary}`;

		}
	}
}

