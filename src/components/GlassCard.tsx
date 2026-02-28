import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import { useTheme } from '../theme';

type GlassCardProps = {
  style?: any;
  padding?: number;
  children?: React.ReactNode;
};

// Neutral glass card with subtle tint and soft blur
const GlassCard: React.FC<GlassCardProps> = ({ children, style, padding = 16 }) => {
  const { theme } = useTheme();
  const blurType = theme.name === 'dark' ? 'dark' : 'light';
  const tintColor = theme.name === 'dark'
    ? 'rgba(255,255,255,0.04)'
    : 'rgba(255,255,255,0.25)';

  return (
    <View style={[styles.card, style]}>
      <BlurView
        style={StyleSheet.absoluteFill}
        blurType={blurType}
        blurAmount={12}
        reducedTransparencyFallbackColor={theme.colors.surface}
      />
      <View style={[styles.tint, { backgroundColor: tintColor }]} />
      <View style={[styles.content, { padding }]}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 14,
    overflow: 'hidden',
    backgroundColor: 'transparent',
    width: '100%',
  },
  tint: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 14,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
});

export default GlassCard;
