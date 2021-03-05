import React, { useRef, useState } from "react";
import { View, FlatList, Text } from "react-native";

import CoachSection from "./CoachSection";
import AthleteSection from "./AthleteSection";
import Button from "../../../components/common/Button";
import NavOptions from "../../../components/NavOptions";

import styles from "./styles";

interface IOption {
  title?: string;
  index?: number;
}

interface IAuthSections {
  onSubmit?: Function;
  onChange?: Function;
  onSwitch?: Function;
  onLogin?: Function;
}

interface IRenderView {
  item?: 'coach' | 'athlete';
  index?: number;
}

interface IslidingRef {
  [key: string]: any;
}

interface IviewableItems {
  [key: string]: any;
}

const ViewTypes = {
    coach: CoachSection,
    athlete: AthleteSection,
}

const RenderView: React.FC<IRenderView> = ({item = 'coach'}) => {
  const ToShow = ViewTypes[item];
  return (
    <View style={styles.view}>
      <ToShow />
    </View>
  );
};

const AuthSections: React.FC<IAuthSections> = (props: IAuthSections) => {
  const slidingRef: IslidingRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  const viewTypes = ["coach", "athlete"];

  const assignRef = (ref: any) => (slidingRef.current = ref);

  const scrollTo = ({ index, title }: IOption) => {
    console.log("opt", index, title);

    if (slidingRef && slidingRef.current && slidingRef.current.scrollToIndex) {
      slidingRef.current.scrollToIndex({ index, animated: true });
    }
  };

  const onViewableItemsChanged = ({
    viewableItems,
    changed,
  }: IviewableItems) => {
    const { index = 0 } = viewableItems;
    console.log("Visible items are", viewableItems);
    console.log("Changed in this iteration", changed);
  };

  const navOptions = viewTypes.map((value, index) => ({
    title: value,
    onPress: scrollTo,
    index,
  }));
  return (
    <View style={styles.container}>
      <FlatList
        ref={assignRef}
        data={viewTypes}
        renderItem={RenderView}
        style={styles.list}
        pagingEnabled
        keyExtractor={(_, index) => `section-${index}`}
        horizontal
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 50,
        }}
      />
      <NavOptions options={navOptions} />
      <View style={styles.button}>
        <Button
          type="simple"
          props={{
            title: "LOGIN",
            size: "medium",
            onPress: props.onLogin,
            backgroundColor: "#EAEAEA",
          }}
        />
      </View>
    </View>
  );
};

export default AuthSections;
