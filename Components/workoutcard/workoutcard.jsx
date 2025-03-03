import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../styles";
import Time from "../../assets/icon/time";


export function WorkoutCard({ title, subtitle, time, cal, bgcolor, click }) {
    const style = styles();
    return (
        <TouchableOpacity onPress={click} style={{ ...style.work1, backgroundColor: `${bgcolor}` }}>
            <View style={style.work2}>
                <Text style={style.work3}>{title}</Text>
                <Text style={style.work4}>{subtitle}</Text>
            </View>
            <View style={style.work5}>
                <View style={{display: "flex", flexDirection: "row", alignItems: "center", gap: 5}}>
                    <Text style={style.work6}>{time}</Text>
                    <Time />
                </View>
                <Text style={style.work7}>{cal}</Text>
            </View>
        </TouchableOpacity>
    );
}