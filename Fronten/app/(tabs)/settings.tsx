import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  Switch,
  StyleSheet,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "../context/ThemeContext"; // make sure the path is correct

const SettingsScreen: React.FC = () => {
  const { isDarkMode, toggleTheme, colors } = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <TouchableOpacity>
          <MaterialIcons name="arrow-back" size={28} color={colors.primary} />
        </TouchableOpacity>
        <Text style={[styles.header, { color: colors.text }]}>Settings</Text>
        <View style={{ width: 28 }} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* User Profile Card */}
        <View style={[styles.profileCard, { backgroundColor: colors.card }]}>
          <View style={styles.profileInfo}>
            <Image
              source={{
                uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvtwrNA1w5oMOXnTB3wg84C6b3Kb05-RQiGVEX9EJNI1SEF1pwyFsgktig4CYXNp46WTIZAnhvIogpC1OvBzLJFwA0P07T3ovJ8Sob-Uc2TVbOOIe4Q1NNQoafZuULutLOtR1gZhaOpgPyOy6opN3LrcKVPgfdvz5ZiFoZB10uxx4HZIKh6sbVpjoIz2HyU57fwcGaan1k0HmjF8K_qrl4NfW9qUMyvZewtFdEHbZvV26xkU7O3Hz_FwN382ndDLONrbnJflkcajyE",
              }}
              style={styles.profileImage}
            />
            <View style={{ marginLeft: 12 }}>
              <Text style={[styles.profileName, { color: colors.text }]}>Jane Doe</Text>
              <Text style={[styles.profileEmail, { color: colors.subText }]}>
                jane.doe@medicare.com
              </Text>
            </View>
          </View>
          <TouchableOpacity>
            <Text style={[styles.editButton, { color: colors.primary }]}>Edit</Text>
          </TouchableOpacity>
        </View>

        {/* App Settings */}
        <Text style={[styles.sectionHeader, { color: colors.text }]}>App Settings</Text>
        <View style={[styles.card, { backgroundColor: colors.card }]}>
          <TouchableOpacity style={styles.row}>
            <MaterialIcons name="notifications" size={28} color={colors.primary} />
            <Text style={[styles.rowText, { color: colors.text }]}>Notifications</Text>
            <MaterialIcons name="chevron-right" size={24} color={colors.subText} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.row}>
            <MaterialIcons name="verified_user" size={28} color={colors.primary} />
            <Text style={[styles.rowText, { color: colors.text }]}>Account Security</Text>
            <MaterialIcons name="chevron-right" size={24} color={colors.subText} />
          </TouchableOpacity>

          {/* Dark Mode Toggle */}
          <View style={styles.row}>
            <MaterialIcons name="dark_mode" size={28} color={colors.primary} />
            <Text style={[styles.rowText, { color: colors.text }]}>Dark Mode</Text>
            <Switch
              value={isDarkMode}
              onValueChange={toggleTheme}
              trackColor={{ false: "#ccc", true: colors.primary }}
              thumbColor="#fff"
            />
          </View>

          <TouchableOpacity style={styles.row}>
            <MaterialIcons name="language" size={28} color={colors.primary} />
            <Text style={[styles.rowText, { color: colors.text }]}>Language</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={[styles.rowSubText, { color: colors.subText }]}>English</Text>
              <MaterialIcons name="chevron-right" size={24} color={colors.subText} />
            </View>
          </TouchableOpacity>
        </View>

        {/* Support */}
        <Text style={[styles.sectionHeader, { color: colors.text }]}>Support</Text>
        <View style={[styles.card, { backgroundColor: colors.card }]}>
          <TouchableOpacity style={styles.row}>
            <MaterialIcons name="help" size={28} color={colors.primary} />
            <Text style={[styles.rowText, { color: colors.text }]}>Help & Support</Text>
            <MaterialIcons name="chevron-right" size={24} color={colors.subText} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.row}>
            <MaterialIcons name="info" size={28} color={colors.primary} />
            <Text style={[styles.rowText, { color: colors.text }]}>About MediCare</Text>
            <MaterialIcons name="chevron-right" size={24} color={colors.subText} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.row}>
            <MaterialIcons name="gavel" size={28} color={colors.primary} />
            <Text style={[styles.rowText, { color: colors.text }]}>Terms of Service</Text>
            <MaterialIcons name="chevron-right" size={24} color={colors.subText} />
          </TouchableOpacity>
        </View>

        {/* Logout */}
        <TouchableOpacity style={[styles.logoutButton, { borderColor: colors.primary }]}>
          <Text style={[styles.logoutText, { color: colors.primary }]}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  header: { fontSize: 18, fontWeight: "bold", flex: 1, textAlign: "center" },
  content: { paddingHorizontal: 16, paddingBottom: 32 },

  // Profile card
  profileCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    borderRadius: 16,
    marginBottom: 24,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  profileInfo: { flexDirection: "row", alignItems: "center" },
  profileImage: { width: 64, height: 64, borderRadius: 32 },
  profileName: { fontSize: 16, fontWeight: "bold" },
  profileEmail: { fontSize: 14 },
  editButton: { fontWeight: "500", fontSize: 14 },

  sectionHeader: { fontSize: 16, fontWeight: "bold", marginBottom: 8 },

  card: {
    borderRadius: 16,
    marginBottom: 24,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    justifyContent: "space-between",
  },
  rowText: { flex: 1, marginLeft: 12, fontSize: 16 },
  rowSubText: { fontSize: 14, marginRight: 4 },

  logoutButton: {
    borderWidth: 2,
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: "center",
  },
  logoutText: { fontWeight: "bold", fontSize: 16 },
});
