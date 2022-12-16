class Department {
  private readonly id: string;
  name: string;
  private employees: string[] = [];

  // constructor(private id: string, public name) {}

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }

  describe(this: Department) {
    console.log(`Department ID: ${this.id}`);
    console.log(`Department: ${this.name}`);
  }

  addEmployee(employee: string) {
    // validation etc
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];

  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  reports: string[];

  constructor(id: string, reports: string[]) {
    super(id, "Accounting");
    this.reports = reports;
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  getReports() {
    console.log(this.reports);
  }
}

const accounting = new AccountingDepartment("d1", ["Monet"]);
accounting.addReport("Something went wrong...");
accounting.getReports();

const IT = new ITDepartment("d2", []);
IT.addEmployee("Max");
IT.addEmployee("Manu");
IT.describe();
IT.printEmployeeInformation();

// accounting.employees[2] = "Anna";
// const accountingCopy = { name: "DUMMY", describe: accounting.describe };

// accountingCopy.describe();
