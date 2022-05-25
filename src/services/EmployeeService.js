import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:9000/api/vi/create_employees";

class EmployeeService{
    saveEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee);

    }
    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    deleteEmployee(id){
        return axios.delete(EMPLOYEE_API_BASE_URL + "/" + id)
    }

}

export default new EmployeeService();