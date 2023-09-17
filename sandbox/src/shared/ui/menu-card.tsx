import { Feather } from '@expo/vector-icons';
import { useOnDelayPress } from '@reuni/hooks';
import React, { ReactNode } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
type MenuCardProps = {
  icon: ReactNode;
  label: string;
  onPress?: () => void;
};

export const MenuCard = ({ icon, label, onPress }: MenuCardProps) => {
  const handle = useOnDelayPress(onPress);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.container}
      onPress={handle}
    >
      <View style={styles.row}>
        {icon}
        <Text style={styles.text}>{label}</Text>
      </View>
      <Feather color="black" name="chevron-right" size={22} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    borderRadius: 10,
    alignItems: 'center',
    margin: 10,
    backgroundColor: 'white',
    padding: 10,
    paddingVertical: 20,
    justifyContent: 'space-between',
    shadowColor: 'black',
    shadowRadius: 4,
    shadowOpacity: 0.08,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  text: {
    marginLeft: 10,
    fontSize: 16,
    alignContent: 'flex-start',
  },
});
