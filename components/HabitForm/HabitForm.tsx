import React, { FC, useState } from "react";
import { Modal, View, Text, ScrollView } from "react-native";
import styles from "./habitForm.style";
import Title from "../Title/Title";
import timesOfDay from "../../data/timeOfDay.json";
import TimeOfDayButton from "../TimeOfDayButton/TimeOfDayButton";
import { IHabit, ITimeOfDay } from "../../types";
import DayOfWeekPicker from "../DayOfWeekPicker/DayOfWeekPicker";
import IconPickerButton from "../IconPickerButton/IconPickerButton";
import ColorPicker from "../ColorPicker/ColorPicker";
import Button from "../Button/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import Input from "../Input/Input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface Props {
  onSave: () => void;
  savedHabit?: IHabit;
}

const schema = yup
  .object({
    title: yup.string().max(50).required("Обязательное поле"),
    time: yup.string().required("Укажите время"),
    day: yup.string().required("Укажите день"),
    icon: yup.string().required("Выберите иконку"),
    color: yup.string(),
  })
  .required();

export type FormData = yup.InferType<typeof schema>;

const HabitForm: FC<Props> = ({ onSave, savedHabit }) => {
  const [showIconsModal, setShowIconsModal] = useState(false);
  const { control, register, handleSubmit } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      title: "test",
    },
  });

  const onSaveFn: SubmitHandler<FormData> = (data) => {
    console.log("🐶", data);
    onSave();
  };

  return (
    <>
      <ScrollView>
        <View style={styles.inputWrapper}>
          <Input
            label="Что хотим сделать привычкой?"
            control={control}
            name="title"
          />
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
          <Button onPress={handleSubmit(onSaveFn)}>Сохранить</Button>
        </View>
      </ScrollView>
      <Modal visible={showIconsModal} animationType="slide">
        <Text>Icons</Text>
      </Modal>
    </>
  );
};

export default HabitForm;
