//@ts-nocheck
import { HeaderRoot, Loading } from "@/components";
import { settings } from "@/config";
import { Container, Content, Text, View } from "native-base";
import React, { useEffect, useState } from "react";
import { InteractionManager, StyleSheet, Image, TouchableOpacity } from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";

const { mainColor, mainColorText, padding } = settings.styles;

const ProfileMenuScreen = ({ navigation }) => {
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
        <Container style={styles.container}>
            <HeaderRoot logo1={true} previous={() => navigation.goBack()} />
            <Content contentContainerStyle={styles.body}>

                <View style={{ justifyContent:'center' , alignItems:'center'}}>
                    <View style={styles.box}>


                        <View>
                            <Image
                                source={require("../../../../assets/images/1.png")}
                                style={{ height: 24, width: 24, marginRight: 10 }}
                            />
                        </View>
                      
                        <TouchableOpacity onPress={() => navigation.navigate("Present")} >
                            <View>

                                <Text style={{ fontSize: 20, fontFamily: "SFProDisplay-Bold" }}>Bệnh án hiện tại</Text>
                                <Text style={{ color: '#919191' }}>Lorem ipsum dolor sit amet,Lorem ipsum </Text>
                            </View>
                        </TouchableOpacity>
                        <View>
                            <Image
                                source={require("../../../../assets/images/2.png")}
                                style={{ height: 29, width: 29 }}
                            />
                        </View>

                    </View>
                    <View>

                    </View>
                    <View style={styles.box}>

                        <View>
                            <Image
                                source={require("../../../../assets/images/1.png")}
                                style={{ height: 24, width: 24, marginRight: 10 }}
                            />
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate("Surgery")}>
                            <View>
                                <Text style={{ fontSize: 20, fontFamily: "SFProDisplay-Bold" }}>Tiểu sử phẫu thuật</Text>
                                <Text style={{ color: '#919191' }}>Lorem ipsum dolor sit amet,Lorem ipsum </Text>
                            </View>
                        </TouchableOpacity>
                        <View>
                            <Image
                                source={require("../../../../assets/images/2.png")}
                                style={{ height: 29, width: 29 }}
                            />
                        </View>

                    </View>
                    <View style={styles.box}>

                        <View>
                            <Image
                                source={require("../../../../assets/images/1.png")}
                                style={{ height: 24, width: 24, marginRight: 10 }}
                            />
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate("MedicalStory")}>
                            <View>
                                <Text style={{ fontSize: 20, fontFamily: "SFProDisplay-Bold" }}>Tiền sử bệnh án</Text>
                                <Text style={{ color: '#919191' }}>Lorem ipsum dolor sit amet,Lorem ipsum </Text>
                            </View>
                        </TouchableOpacity>
                        <View>
                            <Image
                                source={require("../../../../assets/images/2.png")}
                                style={{ height: 29, width: 29 }}
                            />
                        </View>

                    </View>



                    <View style={styles.box}>

                        <View>
                            <Image
                                source={require("../../../../assets/images/1.png")}
                                style={{ height: 24, width: 24, marginRight: 10 }}
                            />
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate("MedicalStory")}>
                            <View>
                                <Text style={{ fontSize: 20, fontFamily: "SFProDisplay-Bold" }}>Thông tin thai phụ</Text>
                                <Text style={{ color: '#919191' }}>Lorem ipsum dolor sit amet,Lorem ipsum </Text>
                            </View>
                        </TouchableOpacity>
                        <View>
                            <Image
                                source={require("../../../../assets/images/2.png")}
                                style={{ height: 29, width: 29 }}
                            />
                        </View>

                    </View>
                </View>
            </Content>
        </Container>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E8F5F8",
    },
    body: {
        flexGrow: 1,
        paddingHorizontal: padding,
    },
    box: {
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: "flex-start",
        backgroundColor: "#ffffff",
        padding: 5,
        marginTop: 18,
        borderRadius: 12,
        alignItems: 'center'


    },
    step: {
        color: mainColor,
        fontSize: 20,
        fontFamily: "SFProDisplay-Heavy",
    },
    text: {
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.5,
        color: mainColorText,
        marginTop: 15,
        fontFamily: "SFProDisplay-Regular",
    },
});

export default ProfileMenuScreen;

