import React from 'react';

import {TouchableOpacity, Text, StyleSheet} from 'react-native';

interface ISimple {
    title?:string;
    onPress?: (args: any) => void;
    backgroundColor?:string;
    textColor?:string;
    size: "small" | "medium" | "large"
};

const sizes = {
    small: 20,
    medium: 40,
    large: 60,
};

const Simple: React.FC<ISimple> = ({title, size = 'medium', backgroundColor = '#fff', onPress, textColor = '#000'}) => {

    const styles = StyleSheet.create({
        container: {
            minHeight: sizes[size],
            minWidth: sizes[size],
            borderRadius: sizes[size] * .3,
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: sizes[size] * .5,
            paddingVertical: sizes[size] * .3,
            elevation: 2,
            backgroundColor,
        },
        text: {
            fontSize: sizes[size] / 2,
            textAlign: 'center',
            color: textColor,
            fontWeight: 'bold',
        }
    })

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

export default Simple;