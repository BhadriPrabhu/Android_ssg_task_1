import { View, Text } from "react-native";
import { styles } from "../../styles";


export function ProgressCard({ bgcolor, day }){
    const style = styles();
    return(
        <View style={style.pro1}>
            <View style={{...style.pro2,backgroundColor: `${bgcolor}` }}></View>
            <Text style={style.pro3}>{day}</Text>
        </View>
    );
};

