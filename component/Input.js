import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

const ReusableInput = ({ label, placeholder, value, onChangeText, secureTextEntry = false }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        placeholderTextColor="#fff" // Add this line to change the placeholder text color
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: "100%", // Adjusted the width to be 100% or make it dynamic
},
label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
},
input: {
    height: 50,
    borderColor: '#fff',
    backgroundColor: "#43766c",
    borderWidth: 1,
    color: "#fff", // Text color (input text)
    borderRadius: 5,
    paddingLeft: 10,
    fontSize: 16
  },
});

export default ReusableInput;
