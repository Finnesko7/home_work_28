class OfficeMan {
  private taxes = 0;
  private monthlyBonus = 0;
  private salary = 0;
  constructor(salary = 300) {
    this.setSalary(salary);
  }

  setSalary(salary: number) {
    this.salary = salary;
    this.taxes = salary * 0.05;
    this.monthlyBonus = salary * 0.1;
  }

  protected getSalary() {
    return this.salary;
  }
}

class JavaProgrammer extends OfficeMan {
  logSalary() {
    console.log(this.getSalary());
  }
}

const programmer = new JavaProgrammer(1000);

programmer.setSalary(5);

programmer.logSalary();
