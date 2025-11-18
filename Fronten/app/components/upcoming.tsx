import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function Appointments() {
  // Initial appointments
  const [appointments, setAppointments] = useState([
    {
      doctor: "Dr. Evelyn Reed",
      specialization: "Cardiologist",
      date: "Tuesday, Oct 26, 2024 at 10:30 AM",
      status: "Confirmed",
      statusColor: "green",
    },
    {
      doctor: "Dr. Ben Carter",
      specialization: "Dermatologist",
      date: "Friday, Nov 5, 2024 at 2:00 PM",
      status: "Pending",
      statusColor: "yellow",
    },
    {
      doctor: "Dr. Chloe Davis",
      specialization: "Pediatrician",
      date: "Monday, Nov 15, 2024 at 9:00 AM",
      status: "Confirmed",
      statusColor: "green",
    },
  ]);

  // Function to simulate adding a new appointment
  const addAppointment = (newAppointment:any) => {
    setAppointments([newAppointment, ...appointments]); // Add on top
  };

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      {/* Top App Bar */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialIcons name="arrow-back" size={24} color="#1abc9c" />
        </TouchableOpacity>
        <Text style={styles.header}>My Appointments</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        <TouchableOpacity style={[styles.tab, styles.activeTab]}>
          <Text style={[styles.tabText, styles.activeTabText]}>Upcoming</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Completed</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Cancelled</Text>
        </TouchableOpacity>
      </View>

      {/* Appointment Cards */}
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {appointments.map((item, index) => (
          <TouchableOpacity key={index} style={styles.card}>
            <View style={styles.cardHeader}>
              <View style={styles.iconWrapper}>
                <MaterialIcons name="calendar-month" size={28} color="#1abc9c" />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.doctor}>{item.doctor}</Text>
                <Text style={styles.specialization}>{item.specialization}</Text>
              </View>
            </View>
            <View style={styles.divider}>
              <Text style={styles.date}>{item.date}</Text>
            </View>
            <View style={styles.statusWrapper}>
              <View
                style={[
                  styles.statusBadge,
                  { backgroundColor: item.statusColor === "green" ? "#d1fae5" : "#fef9c3" },
                ]}
              >
                <Text
                  style={[
                    styles.statusText,
                    { color: item.statusColor === "green" ? "#065f46" : "#78350f" },
                  ]}
                >
                  {item.status}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Floating Action Button */}
      <View style={styles.fabWrapper}>
        <TouchableOpacity
          onPress={() => {
            // Simulate navigating to booking and returning with new appointment
            const newAppt = {
              doctor: "Dr. Olivia Chen",
              specialization: "Pediatrician",
              date: "Thursday, Nov 21, 2024 at 11:30 AM",
              status: "Confirmed",
              statusColor: "green",
            };
            addAppointment(newAppt);
          }}
          style={styles.fab}
        >
          <MaterialIcons name="add" size={24} color="#fff" />
          <Text style={styles.fabText}>New Appointment</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#E8FFF9" },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    justifyContent: "space-between",
  },
  header: { fontSize: 18, fontWeight: "bold", color: "#1abc9c" },
  tabs: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#1abc9c33",
    width: "100%",
    marginBottom: 16,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 3,
    borderBottomColor: "transparent",
  },
  activeTab: { borderBottomColor: "#1abc9c" },
  tabText: { fontSize: 14, fontWeight: "bold", color: "#648780" },
  activeTabText: { color: "#1abc9c" },
  content: { paddingHorizontal: 16, paddingBottom: 120 },
  card: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#16a085",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 2,
  },
  cardHeader: { flexDirection: "row", alignItems: "center", marginBottom: 8 },
  iconWrapper: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: "#1abc9c1a",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  doctor: { fontSize: 16, fontWeight: "bold", color: "#333333" },
  specialization: { fontSize: 14, color: "#648780" },
  divider: { borderTopWidth: 1, borderTopColor: "#1abc9c33", paddingTop: 8 },
  date: { fontSize: 14, color: "#648780" },
  statusWrapper: { alignItems: "flex-end", marginTop: 8 },
  statusBadge: { borderRadius: 999, paddingHorizontal: 8, paddingVertical: 2 },
  statusText: { fontSize: 12, fontWeight: "600" },
  fabWrapper: {
    position: "absolute",
    bottom: 24,
    right: 24,
  },
  fab: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#16a085",
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    shadowColor: "#1abc9c",
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 4,
  },
  fabText: { color: "#fff", fontWeight: "bold", fontSize: 14, marginLeft: 8 },
});
