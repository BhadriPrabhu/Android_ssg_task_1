import { Modal, View, Text, TouchableOpacity, Pressable,  } from "react-native";
import { styles } from "../../styles";


export function WorkoutModal({ isClick, isCancel, isSubmit, isData}){

    const style = styles();

    return(
                    <Modal visible={isClick} animationType='slide' transparent={true}>
                      <View style={style.mod1}>
                        <View style={style.mod2}>
                          <Text style={style.mod3}>Start Workout</Text>
                          <Text style={style.mod4}>Ready to begin {isData}?</Text>
                          <View style={style.mod5}>
                            <TouchableOpacity onPress={isCancel} ><Text style={style.mod6}>Cancel</Text></TouchableOpacity>
                            {/* <TouchableOpacity onPress={handleWorkoutSubmit} style={{backgroundColor: "#54AD52", borderRadius: 10}} ><Text style={{ color: "white", padding: 15, paddingRight: 40, paddingLeft: 40, fontSize: 16 }}>start</Text></TouchableOpacity> */}
                            <Pressable
                              onPress={isSubmit}
                              style={({ pressed }) => [{ backgroundColor: pressed ? "#ddd" : "#54AD52", borderRadius: 10 }]}>
                              <Text style={style.mod7}>start</Text>
                            </Pressable>
        
                          </View>
                        </View>
                      </View>
                    </Modal>
    );
}

