import React from 'react';
import {Modal, StyleSheet, TouchableOpacity, View} from 'react-native';
import {useModal} from './ModalProvider.tsx';
import CustomButton from '../CustomButton.tsx';

type GenericModalProps = {
  children: React.ReactNode;
};
const GenericModal = ({children}: GenericModalProps) => {
  const {isModalOpen, closeModal} = useModal();

  return isModalOpen ? (
    <Modal visible={isModalOpen} transparent={true} animationType="fade">
      <TouchableOpacity
        style={styles.overlay}
        onPress={closeModal}
        activeOpacity={1}
      />
      <View style={styles.modalContent}>
        <CustomButton
          style={styles.exitButton}
          textProps={{text: 'X'}}
          onPress={closeModal}
        />
        {children}
      </View>
    </Modal>
  ) : null;
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    zIndex: 2000,
  },
  exitButton: {
    zIndex: 1,
    borderWidth: 1,
    borderColor: 'black',
    alignSelf: 'flex-end',
    alignItems: 'center',
    borderRadius: 100,
    left: 20,
    bottom: -20,
    aspectRatio: 1,
    padding: 10,
    backgroundColor: 'white',
  },
});

export default GenericModal;
