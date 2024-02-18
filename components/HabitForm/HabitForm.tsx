import React, { FC } from "react";
import { Modal, TextInput } from "react-native";
import styles from "./habitForm.style";

interface Props {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}

const HabitForm: FC<Props> = ({ setShowModal, showModal }) => {
  return (
    <Modal visible={showModal} animationType="slide">
      <TextInput style={styles.input} />
    </Modal>
  );
};

export default HabitForm;
