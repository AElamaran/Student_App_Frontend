import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const StudentForm = ({ initialValues, onSubmit }) => {
  const [name, setName] = useState(initialValues?.name || "");
  const [age, setAge] = useState(initialValues?.age || "");
  const [grade, setGrade] = useState(initialValues?.grade || "");

  return (
    <View style={styles.container}>
      <Text>Name:</Text>
      <TextInput value={name} onChangeText={setName} style={styles.input} />
      
      <Text>Age:</Text>
      <TextInput value={age} onChangeText={setAge}  style={styles.input} />
      
      <Text>Grade:</Text>
      <TextInput value={grade} onChangeText={setGrade} style={styles.input} />
      
      <Button title="Save" onPress={() => onSubmit({ name, age, grade })} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: { borderWidth: 1, marginBottom: 10, padding: 5 },
});

export default StudentForm;
