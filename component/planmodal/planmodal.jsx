import { Modal, View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "../../styles";

export function PlanModal({ isClick, isCancel, isSubmit, isChange, isData }) {

    const style = styles();

    return (
        <Modal visible={isClick} animationType='slide' transparent={true}>
            <View style={style.mode1}>
                <View style={style.mode2}>
                    <Text style={style.mode3}>Add Workout Plan</Text>
                    <TextInput value={isData} onChangeText={isChange} placeholder='Enter the Workout Plan' placeholderTextColor="black" style={style.mode4} />
                    <View style={style.mode5}>
                        <TouchableOpacity onPress={isCancel} >
                            <Text style={style.mode6}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={isSubmit} style={style.but1} >
                            <Text style={style.mode7}>Add</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
}
