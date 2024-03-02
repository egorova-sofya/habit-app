import React from "react";
import Title from "../Title/Title";
import { TextInput } from "react-native";
import styles from "./Input.style";
import { Controller, FieldValues, UseControllerProps } from "react-hook-form";
import CustomRegularText from "../Text/CustomRegularText";

interface InputProps<T extends FieldValues> extends UseControllerProps<T> {
  label?: string;
  editable?: boolean;
}

function Input<T extends FieldValues>({
  name,
  control,
  label,
  editable = true,
}: InputProps<T>) {
  return (
    <>
      <Title>{label}</Title>
      <Controller
        render={({ field: { onChange, value }, fieldState }) => (
          <>
            <TextInput
              onChangeText={onChange}
              value={value}
              style={styles.input}
              editable={editable}
            />
            <CustomRegularText>{fieldState.error?.message}</CustomRegularText>
          </>
        )}
        name={name}
        control={control}
      />
    </>
  );
}

export default Input;
