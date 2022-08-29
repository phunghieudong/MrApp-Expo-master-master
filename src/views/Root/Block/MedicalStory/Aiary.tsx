//@ts-nocheck
import { HeaderRoot, Loading } from "@/components";
import { settings } from "@/config";
import { Container, Content, Text } from "native-base";
import React, { useEffect, useState } from "react";
import { InteractionManager, StyleSheet, View, Image } from "react-native";

const { mainColorText, padding } = settings.styles;

const AiaryScreen = ({ navigation }) => {
    // interaction
    const [ready, setReady] = useState(false);
    useEffect(() => {
        InteractionManager.runAfterInteractions(() => {
            setReady(true);
        });
    }, []);

    if (!ready) {
        return <Loading />;
    }

    return (
        <Container>

            <Content contentContainerStyle={styles.body}>
                <Text style={{ fontSize: 18, fontFamily: "SFProDisplay-Bold", color: '#219EBC', paddingTop: 18 }}>TẤT CẢ</Text>
                <View style={{ flexDirection: 'column' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', paddingTop: 8 }}>
                        <Image
                            source={require("../../../../assets/images/LKSTvuong.png")}
                            style={{ height: 102, width: 102 }}
                        />
                        <Image
                            source={require("../../../../assets/images/LKSTvuong.png")}
                            style={{ height: 102, width: 102 }}
                        />
                        <Image
                            source={require("../../../../assets/images/LKSTvuong.png")}
                            style={{ height: 102, width: 102 }}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', paddingTop: 8 }}>
                        <Image
                            source={require("../../../../assets/images/LKSTvuong.png")}
                            style={{ height: 102, width: 102 }}
                        />
                        <Image
                            source={require("../../../../assets/images/LKSTvuong.png")}
                            style={{ height: 102, width: 102 }}
                        />
                        <Image
                            source={require("../../../../assets/images/LKSTvuong.png")}
                            style={{ height: 102, width: 102 }}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', paddingTop: 8 }}>
                        <Image
                            source={require("../../../../assets/images/LKSTvuong.png")}
                            style={{ height: 102, width: 102 }}
                        />
                        <Image
                            source={require("../../../../assets/images/LKSTvuong.png")}
                            style={{ height: 102, width: 102 }}
                        />
                        <Image
                            source={require("../../../../assets/images/LKSTvuong.png")}
                            style={{ height: 102, width: 102 }}
                        />
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', paddingTop: 8 }}>
                        <Image
                            source={require("../../../../assets/images/LKSTvuong.png")}
                            style={{ height: 102, width: 102 }}
                        />
                        <Image
                            source={require("../../../../assets/images/LKSTvuong.png")}
                            style={{ height: 102, width: 102 }}
                        />
                        <Image
                            source={require("../../../../assets/images/LKSTvuong.png")}
                            style={{ height: 102, width: 102 }}
                        />
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', paddingTop: 8 }}>
                        <Image
                            source={require("../../../../assets/images/LKSTvuong.png")}
                            style={{ height: 102, width: 102 }}
                        />
                        <Image
                            source={require("../../../../assets/images/LKSTvuong.png")}
                            style={{ height: 102, width: 102 }}
                        />
                        <Image
                            source={require("../../../../assets/images/LKSTvuong.png")}
                            style={{ height: 102, width: 102 }}
                        />
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', paddingTop: 8 }}>
                        <Image
                            source={require("../../../../assets/images/LKSTvuong.png")}
                            style={{ height: 102, width: 102 }}
                        />
                        <Image
                            source={require("../../../../assets/images/LKSTvuong.png")}
                            style={{ height: 102, width: 102 }}
                        />
                        <Image
                            source={require("../../../../assets/images/LKSTvuong.png")}
                            style={{ height: 102, width: 102 }}
                        />
                    </View>


                </View>
            </Content>
        </Container>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    body: {
        flexGrow: 1,
        paddingHorizontal: padding,
    },
    text: {
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.5,
        color: mainColorText,
        marginTop: 20,
        fontFamily: "SFProDisplay-Regular",
    },
});

export default AiaryScreen;
