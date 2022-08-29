//@ts-nocheck
import { HeaderRoot, Loading } from "@/components";
import { settings } from "@/config";
import { Container, Content, Text } from "native-base";
import React, { useEffect, useState } from "react";
import { InteractionManager, StyleSheet, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/core";
const { mainColorText, padding } = settings.styles;
import { BaseHeading } from "../Base";
const ListVaccinesScreen = () => {
    // interaction
    const navigation = useNavigation();
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
        <View>

            <Text style={{ color: '#FB8500', textAlign: 'center', paddingVertical: 18 }}> Chọn loại vaccine chưa tiêm để có lịch tiêm
                sớm nhất </Text>
            <View style={{ backgroundColor: '#F0F0F0', width: "100%", height: 54, alignItems: "flex-start", justifyContent: "center", paddingLeft: 30 }}>
                <Text style={{ color: '#525252', fontSize: 14, }}>ĐÃ TIÊM</Text>
            </View>
            <View style={{ paddingHorizontal: 30 }}>
                <View>
                    <View style={{ borderBottomWidth: 0.5, paddingHorizontal: 30, paddingTop: 20, borderColor: '#CACEE1' }}>
                        <Text style={{ color: '#525252', fontSize: 14 }}>Phòng lao</Text>
                    </View>
                </View>
                <View>
                    <View style={{ borderBottomWidth: 0.5, paddingHorizontal: 30, paddingTop: 20, borderColor: '#CACEE1' }}>
                        <Text style={{ color: '#525252', fontSize: 14 }}>HT kháng viêm gan B (mẹ mắc VG B)</Text>
                    </View>
                </View>
                <View>
                    <View style={{ borderBottomWidth: 0.5, paddingHorizontal: 30, paddingTop: 20, borderColor: '#CACEE1' }}>
                        <Text style={{ color: '#525252', fontSize: 14 }}>Phòng viêm gan B</Text>
                    </View>
                </View>
            </View>
            <View style={{ backgroundColor: '#F0F0F0', width: "100%", height: 54, alignItems: "flex-start", justifyContent: "center", paddingLeft: 30, marginTop: 30 }}>
                <Text style={{ color: '#219EBC', fontSize: 14, }}>CHƯA TIÊM</Text>
            </View>
            <View style={{ paddingHorizontal: 30 }}>
                <View>
                    {/* Day ne chinh la cho nay ne */}
                    <TouchableOpacity onPress={() => navigation.navigate("ListVaccinesDetail")}>
                        <View style={{ borderBottomWidth: 0.5, paddingHorizontal: 30, paddingTop: 20, borderColor: '#CACEE1' }}>
                            <Text style={{ color: '#142977', fontSize: 14 }}>Phòng bạch cầu, ho gà, uốn ván</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <View style={{ borderBottomWidth: 0.5, paddingHorizontal: 30, paddingTop: 20, borderColor: '#CACEE1' }}>
                        <Text style={{ color: '#525252', fontSize: 14 }}>Phòng bại liệt</Text>
                    </View>
                </View>
                <View>
                    <View style={{ borderBottomWidth: 0.5, paddingHorizontal: 30, paddingTop: 20, borderColor: '#CACEE1' }}>
                        <Text style={{ color: '#525252', fontSize: 14 }}>Phòng tiêu chảy do Rota Virus</Text>
                    </View>
                </View>
            </View>
        </View>


    );
};

const styles = StyleSheet.create({

});

export default ListVaccinesScreen;
