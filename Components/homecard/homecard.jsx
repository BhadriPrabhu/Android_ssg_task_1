import { View, Text } from "react-native";
import { styles } from "../../styles";


export function HomeCard({ title, subtitle }) {
    const style = styles();
    return (
        <View style={style.home1}>
            <Text style={style.home2}>{title}</Text>
            <Text style={style.home3}>{subtitle}</Text>
        </View>
    );
}

