import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from "react-native";
import { addStudent, updateStudent } from "../api/studentApi";

const StudentFormScreen = ({ route, navigation }) => {
  const student = route.params?.student;
  const [name, setName] = useState(student?.name || "");
  const [age, setAge] = useState(student?.age?.toString() || "");
  const [grade, setGrade] = useState(student?.grade || "");

  const validateInputs = () => {
    if (!name.trim()) {
      Alert.alert("Validation Error", "Name is required.");
      return false;
    }
    if (!age || isNaN(age) || Number(age) <= 0) {
      Alert.alert("Validation Error", "Please enter a valid age.");
      return false;
    }
    if (!grade.trim()) {
      Alert.alert("Validation Error", "Grade is required.");
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!validateInputs()) return;

    const payload = { name: name.trim(), age: Number(age), grade: grade.trim() };

    try {
      if (student) {
        await updateStudent(student.id, payload);
        Alert.alert("Success", "Student updated successfully!");
      } else {
        await addStudent(payload);
        Alert.alert("Success", "Student added successfully!");
      }
      navigation.goBack();
    } catch (error) {
      Alert.alert("Error", error.message || "Failed to save student.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        style={styles.input}
        placeholder="Enter student name"
      />

      <Text style={styles.label}>Age:</Text>
      <TextInput
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
        style={styles.input}
        placeholder="Enter student age"
      />

      <Text style={styles.label}>Grade:</Text>
      <TextInput
        value={grade}
        onChangeText={setGrade}
        style={styles.input}
        placeholder="Enter student grade"
      />

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>{student ? "Update Student" : "Add Student"}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: "#f8f8f8",
  },
  submitButton: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default StudentFormScreen;
