import React, { FC, useState } from "react";
import { Modal, TextInput, View, Text, ScrollView } from "react-native";
import styles from "./habitForm.style";
import Title from "../Title/Title";
import timesOfDay from "../../data/timeOfDay.json";
import TimeOfDayButton from "../TimeOfDayButton/TimeOfDayButton";
import { IHabit, ITimeOfDay } from "../../types";
import DayOfWeekPicker from "../DayOfWeekPicker/DayOfWeekPicker";
import IconPickerButton from "../IconPickerButton/IconPickerButton";
import ColorPicker from "../ColorPicker/ColorPicker";
import Button from "../Button/Button";

interface Props {
  onSave: () => void;
  savedHabit?: IHabit;
}

const HabitForm: FC<Props> = ({ onSave, savedHabit }) => {
  const [showIconsModal, setShowIconsModal] = useState(false);

  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.inputWrapper}>
          <Title>Что хотим сделать привычкой?</Title>
          <TextInput style={styles.input} value={savedHabit?.title} />
        </View>
        <View style={styles.inputWrapper}>
          <Title>Когда слать напоминания?</Title>
          <View style={styles.timeWrapper}>
            {timesOfDay.map((time) => (
              <TimeOfDayButton {...(time as ITimeOfDay)} key={time.title} />
            ))}
          </View>
        </View>
        <View style={styles.inputWrapper}>
          <Title>В какие дни недели?</Title>
          <DayOfWeekPicker />
        </View>
        <View style={styles.inputWrapper}>
          <Title>Выбери подходящую иконку</Title>
          <IconPickerButton onPress={() => setShowIconsModal(true)} />
        </View>
        <View style={styles.inputWrapper}>
          <Title>Выбери цвет для иконки</Title>
          <ColorPicker />
        </View>
        <View style={styles.saveButtonWrapper}>
          <Button onPress={onSave}>Сохранить</Button>
        </View>
      </ScrollView>
      <Modal visible={showIconsModal} animationType="slide">
        <Text>Icons</Text>
      </Modal>
    </>
  );
};

export default HabitForm;
