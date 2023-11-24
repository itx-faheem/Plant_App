import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import Header from '../component/Header';
import AppButton from '../component/AppButton';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const CELL_COUNT = 5;

const OtpScreen = ({ navigation }) => {
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    return (
        <View style={{ backgroundColor: '#F2F1F6' }}>
            <Header color="#000" onPress={() => navigation.goBack()} />
            <View style={styles.innerContainer}>
                <View style={{ gap: 24 }} >
                    <View style={{ gap: 5 }}>
                        <Text style={styles.title}>Enter Verification Code</Text>
                        <Text style={styles.description}>
                            Enter the 5 digit code we just sent to hello@planIt.app & your
                            provided number. If you don’t see it, check spam.
                        </Text>
                    </View>
                    <View style={{ gap: 24, justifyContent: "center", alignItems: "center" }} >
                        <View
                            style={{ justifyContent: "center", alignItems: 'center' }}
                        >
                            <CodeField
                                ref={ref}
                                {...props}
                                value={value}
                                onChangeText={setValue}
                                cellCount={CELL_COUNT}
                                rootStyle={styles.codeFieldRoot}
                                keyboardType="number-pad"
                                textContentType="oneTimeCode"
                                renderCell={({ index, symbol, isFocused }) => (
                                    <View>
                                        <Text
                                            key={index}
                                            style={[styles.cell, isFocused && styles.focusCell,]}
                                            onLayout={getCellOnLayoutHandler(index)}>
                                            {symbol || (isFocused ? <Cursor /> : null)}
                                        </Text>
                                    </View>
                                )}
                            />
                        </View>
                        <View style={{ gap: 16 }}>
                            <AppButton
                                onPress={() => navigation.replace('LastLoginscreen')}
                                title="Open Email App"
                            />
                            <AppButton
                                title="Resend"
                                style={styles.resendButton}
                                styleText={styles.resendButtonText}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

OtpScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
};

export default OtpScreen;

const styles = StyleSheet.create({
    innerContainer: {
        backgroundColor: '#fff',
        paddingVertical: 16,
        paddingHorizontal: 14,
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        lineHeight: 32,
        color: '#000',
    },
    description: {
        fontWeight: '400',
        color: '#000',
        fontSize: 16.5,
        lineHeight: 24,
        height: 72,
    },
    codeFieldRoot: {
        paddingHorizontal: 16,
        gap: 10,
        justifyContent: "center",
        alignItems: "center",
        width: 347
    },
    cell: {
        width: 61.4,
        height: 48,
        borderWidth: 1,
        borderColor: "#E6E6E6",
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        fontSize: 16,
        fontWeight: 400,
        color: "#7A828A",
        paddingTop: 10
    },
    focusCell: {
        justifyContent: "center",
        alignItems: 'center',
        fontSize: 16,
        fontWeight: 400
        // backgroundColor: "aqua"
    },
    resendButton: {
        backgroundColor: 'transparent',
        borderColor: '#E6E6E6',
        borderWidth: 1,
    },
    resendButtonText: {
        color: '#000',
    },
    isFocused: {
        justifyContent: "center",
        alignItems: 'center',
        fontSize: 16,
        fontWeight: 400
    }
});
