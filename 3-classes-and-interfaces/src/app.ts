class Department {
  private readonly id: string;
  name: string;
  protected employees: string[] = [];

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
  private lastReport: string;
  reports: string[];

  get mostRecentReport() {
    if (this.lastReport) return this.lastReport;

    throw new Error("No report found.");
  }

  set mostRecentReport(value: string) {
    if (!value) throw new Error("Please pass in a valid value!");

    this.addReport(value);
  }

  constructor(id: string, reports: string[]) {
    super(id, "Accounting");
    this.reports = reports;
    this.lastReport = reports[0];
  }

  addEmployee(employee: string): void {
    if (employee === "Max") {
      return;
    }
    this.employees.push(employee);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  getReports() {
    console.log(this.reports);
  }
}

const accounting = new AccountingDepartment("d1", []);

accounting.addEmployee("Max");
accounting.addEmployee("Manu");
// accounting.printEmployeeInformation();

accounting.addReport("Something went wrong...");

accounting.mostRecentReport = "Year End Report";
console.log(accounting.mostRecentReport);
// accounting.getReports();

const IT = new ITDepartment("d2", []);

IT.addEmployee("Max");
IT.addEmployee("Manu");
// IT.describe();
// IT.printEmployeeInformation();

// accounting.employees[2] = "Anna";
// const accountingCopy = { name: "DUMMY", describe: accounting.describe };

// accountingCopy.describe();
