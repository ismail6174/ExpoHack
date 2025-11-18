import React from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView, Platform, StatusBar } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function Dashboard() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>

        {/* Top App Bar */}
        <View style={styles.topBar}>
          <View style={styles.profilePic}></View>
          <TouchableOpacity>
            <MaterialIcons name="notifications" size={28} color="#1abc9c" />
          </TouchableOpacity>
        </View>

        {/* Header */}
        <Text style={styles.greeting}>Hello, User 👋</Text>
        <Text style={styles.subText}>Your health journey starts here</Text>

        {/* Health Statistics Section */}
        <Text style={styles.sectionTitle}>Health Statistics</Text>
        <View style={styles.statsGrid}>
          <View style={styles.statsCard}>
            <MaterialIcons name="directions-walk" size={28} color="#1abc9c" />
            <Text style={styles.statsLabel}>Steps</Text>
            <Text style={styles.statsValue}>7,245</Text>
          </View>
          <View style={styles.statsCard}>
            <MaterialIcons name="favorite" size={28} color="#1abc9c" />
            <Text style={styles.statsLabel}>Heart Rate</Text>
            <Text style={styles.statsValue}>78 bpm</Text>
          </View>
          <View style={styles.statsCard}>
            <MaterialIcons name="bedtime" size={28} color="#1abc9c" />
            <Text style={styles.statsLabel}>Sleep</Text>
            <Text style={styles.statsValue}>6.8 hrs</Text>
          </View>
        </View>

        {/* Grid Buttons */}
        <View style={styles.grid}>
          {[
            { label: "Book Appointment", icon: "add-circle", route: "/components/newappoint" },
            { label: "Upcoming", icon: "calendar-month", route: "/(tabs)/appoint" },
            { label: "History", icon: "history", route: "/components/history" },
            { label: "Records", icon: "folder-shared", route: "/(tabs)/records" },
            { label: "Profile", icon: "person", route: "/(tabs)/profile" },
            { label: "Prescriptions", icon: "medication", route: "/components/prescriptions" },
          ].map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.card}
              onPress={() => router.push(item.route)}
            >
              <MaterialIcons name={item.icon} size={28} color="#1abc9c" />
              <Text style={styles.cardText}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#E8FFF9",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, // fix for Android
  },
  content: { paddingBottom: 100, paddingHorizontal: 16 },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    paddingTop: Platform.OS === "android" ? 12 : 12, // extra padding for Android already handled in container
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#ccc",
  },
  greeting: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 4,
  },
  subText: {
    fontSize: 16,
    color: "#555555",
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 8,
  },
  statsGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  statsCard: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 4,
    alignItems: "center",
    shadowColor: "#16a085",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 2,
  },
  statsLabel: { marginTop: 8, fontSize: 14, color: "#555555" },
  statsValue: { fontSize: 16, fontWeight: "bold", color: "#333333", marginTop: 4 },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#16a085",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 2,
    alignItems: "flex-start",
  },
  cardText: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: "bold",
    color: "#333333",
  },
});
