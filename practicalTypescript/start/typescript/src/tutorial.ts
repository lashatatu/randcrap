type Employee = { id: number; name: string; department: string };
type Manager = { id: number; name: string; employees: Employee[] };

type Staff = Employee | Manager;

function printStaffDetails(staff: Staff): void {
  if ("employees" in staff) {
    console.log(
      `${staff.name} is an manager in the ${staff.employees.length} employees`
    );
  } else {
    console.log(
      `${staff.name} is an employee in the ${staff.department} department`
    );
  }
}

const alice: Employee = { id: 1, name: "alice", department: "sales" };
const steve: Employee = { id: 2, name: "steve", department: "HR" };
const bob: Manager = { id: 3, name: "bob", employees: [alice, steve] };


printStaffDetails(steve)
printStaffDetails(bob)
