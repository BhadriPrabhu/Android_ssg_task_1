import { Modal, View, Text, Image, Button } from "react-native";
import { styles } from "../../styles";
import LottieView from "lottie-react-native";

export function ProfileModal({ isClick, isSubmit }) {

    const style = styles();

    return (
        <Modal visible={isClick} animationType='slide' transparent={true}>
            <View style={style.view1}>
                <View style={style.view2}>
                    <Image style={style.image2} source={require("../../assets/image/Profile.jpg")} />
                    <Text style={style.view3}>Bhadri Prabhu K</Text>
                    <LottieView style={{width: 200, height: 200}} source={require("../../assets/lottie/hello.json")} autoPlay loop/>
                    <View style={style.view4}>
                        <Button color="red" onPress={isSubmit} title='OK' />
                    </View>
                </View>
            </View>
        </Modal>
    );
}
