import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const WelcomeScreen = () => {
  return (
    <LinearGradient
      colors={['#1C67F6', '#004089']}
      style={styles.gradient}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.circleIndicator}>
        <View style={[styles.circle, styles.activeCircle]} />
        <View style={styles.circle} />
        <View style={styles.circle} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to LEO-IN</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  circleIndicator: {
    flexDirection: 'row',
    position: 'absolute',
    top: 80,
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    marginHorizontal: 5,
  },
  activeCircle: {
    backgroundColor: 'rgba(255, 165, 0, 0.8)', // Or any other color for the active indicator
  },
  content: {
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    width: '80%',
    paddingVertical: 15,
    backgroundColor: 'white',
    borderRadius: 25,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
  },
  buttonText: {
    color: '#1C67F6',
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
