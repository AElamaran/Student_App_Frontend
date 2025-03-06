import axios from "axios";


const API_URL = "http://local_ip_address:8080/students";


export const getStudents = async () => {
  try {
    const response = await axios.get(API_URL);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error fetching students:", error);
    throw new Error("Failed to fetch students.");
  }
};

// Fetch a single student by ID
export const getStudentById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching student with ID ${id}:`, error);
    return null;
  }
};

// Add a new student
export const addStudent = async (student) => {
  try {
    const response = await axios.post(API_URL, student);
    return response.data;
  } catch (error) {
    console.error("Error adding student:", error);
    return null;
  }
};

// Update a student
export const updateStudent = async (id, student) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, student);
    return response.data;
  } catch (error) {
    console.error(`Error updating student with ID ${id}:`, error);
    return null;
  }
};

// Delete a student
export const deleteStudent = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
    return { message: "Student deleted successfully" };
  } catch (error) {
    console.error(`Error deleting student with ID ${id}:`, error);
    return { message: "Error deleting student" };
  }
};
