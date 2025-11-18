import React, { useState } from "react";
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, StyleSheet, Platform, StatusBar } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router"; // using router to send back params

export default function NewAppointment() {
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedDate, setSelectedDate] = useState("5"); // default day
  const [selectedTime, setSelectedTime] = useState("09:30 AM");

  const doctors = [
    "Dr. Emily Carter - Cardiologist",
    "Dr. Ben Adams - Dermatologist",
    "Dr. Olivia Chen - Pediatrician",
  ];

  const times = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:30 AM",
    "02:00 PM", "02:30 PM", "03:00 PM"
  ];

  const daysInMonth = Array.from({ length: 30 }, (_, i) => (i + 1).toString());

  const confirmBooking = () => {
    if (!selectedDoctor || !selectedDate || !selectedTime) {
      alert("Please select doctor, date, and time!");
      return;
    }

    const newAppointment = {
      doctor: selectedDoctor,
      specialization: selectedDoctor.split("-")[1]?.trim() || "",
      date: `Day ${selectedDate} at ${selectedTime}`,
      status: "Confirmed",
      statusColor: "green",
    };

    // Navigate back to appointments and pass the new appointment
    router.push({
      pathname: "/components/upcoming",
      params: { newAppointment: JSON.stringify(newAppointment) },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.topBar}>
          <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
            <MaterialIcons name="arrow-back" size={28} color="#111716" />
          </TouchableOpacity>
          <Text style={styles.header}>Book Appointment</Text>
          <View style={{ width: 40 }} />
        </View>

        {/* Doctor Selector */}
        <View style={styles.section}>
          <Text style={styles.label}>Choose a Doctor</Text>
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={selectedDoctor}
              onValueChange={(itemValue) => setSelectedDoctor(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Select Doctor" value="" />
              {doctors.map((doc, idx) => (
                <Picker.Item key={idx} label={doc} value={doc} />
              ))}
            </Picker>
          </View>
        </View>

        {/* Select Date */}
        <View style={styles.section}>
          <Text style={styles.label}>Select a Date</Text>
          <View style={styles.dateGrid}>
            {daysInMonth.map((day) => (
              <TouchableOpacity
                key={day}
                style={[styles.dateButton, selectedDate === day && styles.dateButtonSelected]}
                onPress={() => setSelectedDate(day)}
              >
                <Text style={[styles.dateText, selectedDate === day && styles.dateTextSelected]}>
                  {day}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Select Time */}
        <View style={styles.section}>
          <Text style={styles.label}>Select a Time</Text>
          <View style={styles.timeGrid}>
            {times.map((time) => (
              <TouchableOpacity
                key={time}
                style={[styles.timeButton, selectedTime === time && styles.timeButtonSelected]}
                onPress={() => setSelectedTime(time)}
              >
                <Text style={[styles.timeText, selectedTime === time && styles.timeTextSelected]}>
                  {time}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Confirm Button */}
        <TouchableOpacity style={styles.confirmButton} onPress={confirmBooking}>
          <Text style={styles.confirmText}>Confirm Booking</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#f6f8f8",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  content: { paddingBottom: 100, paddingHorizontal: 16 },
  topBar: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingVertical: 12 },
  backButton: { width: 40, height: 40, justifyContent: "center", alignItems: "center" },
  header: { fontSize: 18, fontWeight: "bold", textAlign: "center", color: "#111716", flex: 1 },
  section: { marginTop: 24 },
  label: { fontSize: 16, fontWeight: "600", marginBottom: 8, color: "#111716" },
  pickerWrapper: { borderWidth: 1, borderColor: "#dce5e3", borderRadius: 12, backgroundColor: "#fff", overflow: "hidden" },
  picker: { height: 50, width: "100%" },
  dateGrid: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  dateButton: { width: 40, height: 40, borderRadius: 12, justifyContent: "center", alignItems: "center", borderWidth: 1, borderColor: "#dce5e3" },
  dateButtonSelected: { backgroundColor: "#1abc9c" },
  dateText: { color: "#111716" },
  dateTextSelected: { color: "#fff", fontWeight: "bold" },
  timeGrid: { flexDirection: "row", flexWrap: "wrap", gap: 8, marginTop: 8 },
  timeButton: { paddingVertical: 10, paddingHorizontal: 12, borderRadius: 12, borderWidth: 1, borderColor: "#1abc9c" },
  timeButtonSelected: { backgroundColor: "#1abc9c" },
  timeText: { color: "#1abc9c", fontWeight: "600" },
  timeTextSelected: { color: "#fff", fontWeight: "bold" },
  confirmButton: { marginTop: 32, backgroundColor: "#16a085", paddingVertical: 16, borderRadius: 16, alignItems: "center" },
  confirmText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});
