import React from "react";
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function MyDocuments() {
  const documents = [
    { title: "Blood Test Results", uploaded: "May 20, 2024" },
    { title: "MRI Scan - Spine", uploaded: "April 15, 2024" },
    { title: "Annual Physical Check-up", uploaded: "March 02, 2024" },
    { title: "Prescription Details", uploaded: "Feb 18, 2024" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <TouchableOpacity>
          <MaterialIcons name="arrow-back-ios" size={28} color="#16A085" />
        </TouchableOpacity>
        <Text style={styles.header}>My Documents</Text>
        <View style={{ width: 28 }} />
      </View>

      {/* Search Bar */}
      <View style={styles.searchWrapper}>
        <View style={styles.searchBar}>
          <MaterialIcons name="search" size={24} color="#1ABC9C" />
          <TextInput
            placeholder="Search documents..."
            style={styles.searchInput}
            placeholderTextColor="#888"
          />
        </View>
      </View>

      {/* Document List */}
      <ScrollView contentContainerStyle={styles.listContainer}>
        {documents.map((doc, idx) => (
          <TouchableOpacity key={idx} style={styles.listItem}>
            <View style={styles.listLeft}>
              <View style={styles.iconWrapper}>
                <MaterialIcons name="description" size={28} color="#1ABC9C" />
              </View>
              <View style={styles.textWrapper}>
                <Text style={styles.title}>{doc.title}</Text>
                <Text style={styles.subtitle}>Uploaded: {doc.uploaded}</Text>
              </View>
            </View>
            <MaterialIcons name="chevron-right" size={28} color="#888" />
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Floating Action Button */}
      <TouchableOpacity style={styles.fab}>
        <MaterialIcons name="add" size={32} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#E8FFF9" },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  header: { fontSize: 18, fontWeight: "bold", color: "#333" },
  searchWrapper: { paddingHorizontal: 16, paddingVertical: 8 },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 24,
    paddingHorizontal: 12,
    height: 48,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: "#333",
  },
  listContainer: { paddingHorizontal: 16, paddingBottom: 100 },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  listLeft: { flexDirection: "row", alignItems: "center", gap: 12 },
  iconWrapper: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: "#E8FFF9",
    justifyContent: "center",
    alignItems: "center",
  },
  textWrapper: { flexShrink: 1 },
  title: { fontSize: 16, fontWeight: "600", color: "#333" },
  subtitle: { fontSize: 14, color: "#666", marginTop: 4 },
  fab: {
    position: "absolute",
    bottom: 24,
    right: 24,
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#16A085",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#16A085",
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 4,
  },
});
