import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { useTheme } from '../theme';

const ProfileScreen: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.title, { color: theme.colors.text }]}>Profile</Text>
      <View style={styles.row}>
        <Text style={{ color: theme.colors.text, fontSize: 16 }}>Dark mode</Text>
        <Switch value={theme.name === 'dark'} onValueChange={toggleTheme} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 16 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 12 },
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '60%', paddingVertical: 8 },
});

export default ProfileScreen;
