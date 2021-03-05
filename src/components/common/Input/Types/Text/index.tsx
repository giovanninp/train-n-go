import React from "react";
import { TextInput, StyleSheet } from "react-native";

interface ITextType {
  initialValue?: string;
  onChange?: Function;
  onSubmit?: Function;
  onBlur?: Function;
  assignRef?: Function;
  backgroundColor?: string;
  textColor?: string;
  size: "small" | "medium" | "large";
  placeholder: string;
}

const sizes = {
  small: 20,
  medium: 40,
  large: 60,
};

const TextType: React.FC<ITextType> = ({
  initialValue,
  backgroundColor = "#fff",
  textColor,
  size = "medium",
  ...props
}) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor,
      elevation: 2,
      height: sizes[size],
      borderRadius: sizes[size] * .3,
      width: '100%',
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  const handleChange = ({ target }: any) => {
    const { onChange } = props;
    const { value = "" } = target;

    if (onChange) onChange(value);
  };

  return (
    <TextInput
      onChange={handleChange}
      placeholder={props.placeholder}
      style={styles.container}
      textAlign='left'
      textAlignVertical='center'
    />
  );
};

export default TextType;