import React, { useContext } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { AuthContext } from "../../context/AuthContext"; // correct path

export default function ProfileScreen() {
  const { user } = useContext(AuthContext); // get user from context

  

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <TouchableOpacity>
          <MaterialIcons name="arrow-back" size={28} color="#1ABC9C" />
        </TouchableOpacity>
        <Text style={styles.header}>My Profile</Text>
        <View style={{ width: 28 }} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Profile Image */}
        <View style={styles.profileImageWrapper}>
          <Image
            source={{
              uri: user?.avatar || "https://via.placeholder.com/128",
            }}
            style={styles.profileImage}
          />
        </View>

        {/* Info Cards */}
        <View style={styles.infoCard}>
          {/* Full Name */}
          <View style={styles.infoRow}>
            <MaterialIcons name="person" size={28} color="#1ABC9C" />
            <View style={styles.infoText}>
              <Text style={styles.label}>Full Name</Text>
              <Text style={styles.value}>{user?.name || "N/A"}</Text>
            </View>
          </View>
          <View style={styles.divider} />

          {/* Email */}
          <View style={styles.infoRow}>
            <MaterialIcons name="mail" size={28} color="#1ABC9C" />
            <View style={styles.infoText}>
              <Text style={styles.label}>Email Address</Text>
              <Text style={styles.value}>{user?.email || "N/A"}</Text>
            </View>
          </View>
          <View style={styles.divider} />

          {/* Phone (optional, if you store it in user object) */}
          <View style={styles.infoRow}>
            <MaterialIcons name="phone" size={28} color="#1ABC9C" />
            <View style={styles.infoText}>
              <Text style={styles.label}>Phone Number</Text>
              <Text style={styles.value}>{user?.phone || "(555) 123-4567"}</Text>
            </View>
          </View>
        </View>

        {/* Edit Profile Button */}
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </ScrollView>
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
  header: { fontSize: 18, fontWeight: "bold", color: "#333", textAlign: "center", flex: 1 },
  content: { paddingHorizontal: 16, paddingBottom: 32 },

  profileImageWrapper: { alignItems: "center", marginVertical: 16 },
  profileImage: { width: 128, height: 128, borderRadius: 64 },

  infoCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    paddingVertical: 8,
    marginBottom: 32,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  infoRow: { flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 12 },
  infoText: { marginLeft: 12 },
  label: { fontSize: 12, color: "#888" },
  value: { fontSize: 16, fontWeight: "600", color: "#333" },
  divider: { height: 1, backgroundColor: "#ddd", marginHorizontal: 16 },

  editButton: {
    backgroundColor: "#16A085",
    paddingVertical: 16,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#1ABC9C",
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 4,
  },
  editButtonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});
