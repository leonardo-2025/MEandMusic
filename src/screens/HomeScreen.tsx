import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import GlassCard from '../components/GlassCard';
import { useTheme } from '../theme';
import Ionicons from 'react-native-vector-icons/Ionicons';

type Track = { id: string; title: string; artist: string };

const MOCK_TRACKS: Track[] = [
  { id: '1', title: 'Aurora', artist: 'Luna' },
  { id: '2', title: 'Dawn Chorus', artist: 'Eclipse' },
  { id: '3', title: 'Midnight Stroll', artist: 'Nova' },
  { id: '4', title: 'Ghost Trails', artist: 'Sol' },
  { id: '5', title: 'Whispering Pines', artist: 'Quark' },
];

const HomeScreen: React.FC = () => {
  const { theme } = useTheme();
  const [isPlaying, setPlaying] = React.useState(false);

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <GlassCard style={styles.mostCard}>
        <View style={styles.mostRow}>
          <Text style={[styles.mostTitle, { color: theme.colors.text }]}>Most Played</Text>
          <TouchableOpacity onPress={() => setPlaying(!isPlaying)}>
            <Ionicons name={isPlaying ? 'pause' : 'play'} size={22} color={theme.colors.text} />
          </TouchableOpacity>
        </View>
        <Text style={[styles.mostSubtitle, { color: theme.colors.subtle }]}>Artist: placeholder</Text>
      </GlassCard>

      <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>New Music</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.carousel}>
        {MOCK_TRACKS.map((t) => (
          <GlassCard key={t.id} style={styles.albumCard}>
            <View style={styles.albumArt} />
            <Text style={[styles.albumTitle, { color: theme.colors.text }]}>{t.title}</Text>
            <Text style={[styles.albumArtist, { color: theme.colors.subtle }]}>{t.artist}</Text>
          </GlassCard>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.sidebarButton}>
        <Text style={styles.sidebarText}>Create Playlist</Text>
      </TouchableOpacity>

      <GlassCard style={styles.miniPlayer}>
        <Text style={[styles.nowTitle, { color: theme.colors.text }]}>Song Title</Text>
        <Text style={[styles.nowArtist, { color: theme.colors.subtle }]}>Artist</Text>
        <View style={styles.controls}>
          <TouchableOpacity><Ionicons name="play" size={20} color={theme.colors.text} /></TouchableOpacity>
          <TouchableOpacity style={styles.controlBtn}><Ionicons name="play-skip-back" size={20} color={theme.colors.text} /></TouchableOpacity>
          <TouchableOpacity style={styles.controlBtn}><Ionicons name="play-skip-forward" size={20} color={theme.colors.text} /></TouchableOpacity>
        </View>
      </GlassCard>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 16, paddingTop: 16 },
  mostCard: { width: '100%', padding: 16, marginVertical: 8 },
  mostRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  mostTitle: { fontSize: 16, fontWeight: '600' },
  mostSubtitle: { marginTop: 6, fontSize: 12 },
  sectionTitle: { fontSize: 14, fontWeight: '600', marginTop: 16, marginBottom: 8 },
  carousel: { paddingVertical: 8 },
  albumCard: { width: 140, padding: 12, marginRight: 12 },
  albumArt: { width: 110, height: 110, borderRadius: 8, backgroundColor: '#D9D9D9' },
  albumTitle: { marginTop: 8, fontSize: 12, fontWeight: '600' },
  albumArtist: { fontSize: 11 },
  sidebarButton: { position: 'absolute', left: -40, top: 180, transform: [{ rotate: '-90deg' }] },
  sidebarText: { color: '#888', fontSize: 12, letterSpacing: 1 },
  miniPlayer: { position: 'absolute', left: 12, right: 12, bottom: 72, height: 72, paddingHorizontal: 12 },
  nowTitle: { fontSize: 14, fontWeight: '600' },
  nowArtist: { fontSize: 12 },
  controls: { flexDirection: 'row', alignItems: 'center' },
  controlBtn: { marginLeft: 10 },
});

export default HomeScreen;
