import React from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Image,
  KeyboardAvoidingView,
  Modal,
  SafeAreaView,
  ScrollView,
  SectionList,
  StatusBar,
  Switch,
  Text,
  TouchableOpacity,
  View,
  Pressable,
  TextInput,
  Button,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { HomeCard } from './Components/homecard/homecard';
import { ProgressCard } from './Components/progresscard/progresscard';
import { WorkoutCard } from './Components/workoutcard/workoutcard';
import { useState } from 'react';
import { useColor } from './store/store';
import { styles } from './styles';
import { WorkoutModal } from './Components/workoutmodal/workoutmodal';
import { PlanModal } from './Components/planmodal/planmodal';
import { ProfileModal } from './Components/profilemodal/profilemodal';
import { Data } from './data/data';

function App() {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  const setColor = useColor((state) => state.setThemeColor)
  const checkColor = useColor((state) => state.themeColor)

  const style = styles();

  const { datahome, dataprogress, dataworkout } = Data(checkColor);


  // const datahome = [{ id: 1, title: "3/5", subtitle: "Workouts" }, { id: 2, title: "750", subtitle: "Calories" }, { id: 3, title: "62 min", subtitle: "Active Time" }]
  // const dataprogress = [{ id: 1, color: "#4FB54E", day: "Mon" }, { id: 2, color: "#4FB54E", day: "Tue" }, { id: 3, color: "#4FB54E", day: "Wed" }, { id: 4, color: checkColor ? "#E2E2E2" : "#363636", day: "Thu" }, { id: 5, color: checkColor ? "#E2E2E2" : "#363636", day: "Fri" }, { id: 6, color: checkColor ? "#E2E2E2" : "#363636", day: "Sat" }, { id: 7, color: checkColor ? "#E2E2E2" : "#363636", day: "Sun" }]
  // const dataworkout = [{ id: 1, title: "Morning Run", subtitle: "Cardio", time: "25 min", cal: "320 cal", color: "#ED6026" }, { id: 2, title: "Upper Body", subtitle: "Strength", time: "45 min", cal: "280 cal", color: "#4055A3" }, { id: 3, title: "Yoga Flow", subtitle: "Flexibility", time: "30 min", cal: "150 cal", color: "#008C7F" }, { id: 4, title: "HIIT", subtitle: "Cardio", time: "20 min", cal: "250 cal", color: "#E11D61" }]

  const [dataSection, setDataSection] = useState([{ id: 1, title: "Today's Plan", data: ["Morning Run", "Core Workout", "Evening Stretch"] }, { id: 2, title: "Recommended", data: ["HIIT Session", "Upper Body", "Yoga Flow"] }, { id: 3, title: "Popular", data: ["Full Body Burn", "30-Day Challenge", "Recovery Day"] }]);

  const [isEnabled, setIsEnabled] = useState(false);
  const [isWorkModal, setIsWorkModal] = useState(false);
  const [isTitle, setIsTitle] = useState("");
  const [isInputModal, setIsInputModal] = useState(false);
  const [isAddInput, setIsAddInput] = useState("");
  const [isProfile, setIsProfile] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    setColor(!isEnabled);
  }
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);

      Alert.alert(
        "Workout Started",
        "Your new workout session has begun!"
      );
    }, 2000)
  }

  const handleWorkoutClick = (title) => {
    setIsWorkModal(true);
    setIsTitle(title);
  }

  const handleWorkoutSubmit = () => {
    setIsWorkModal(false);
    Alert.alert(
      "Workout Started",
      `You've started ${isTitle}!`
    );
  }

  const handleWorkoutCancel = () => {
    setIsWorkModal(false);
  }

  const handlePlanAdd = () => {
    Alert.alert(
      "Add Custom Workout",
      "Create your own workout routine",
      [{
        text: "CANCEL",
        onPress: () => { },
        style: 'cancel'
      }, {
        text: "CREATE",
        onPress: () => { setIsInputModal(true) },
      }],
    )
  }

  const handleCreate = (data) => {
    Alert.alert("Success", `Today's workout plan - ${data} created! Check your today's plans.`)
  }

  const handleInputCancel = () => {
    setIsInputModal(false);
  }

  const handleInputSubmit = () => {
    if (isAddInput.trim() === "") {
      return;
    }
    const updatedSections = dataSection.map((section) => {
      if (section.title === "Today's Plan") {
        return { ...section, data: [...section.data, isAddInput] };
      }
      return section;
    });
    setDataSection(updatedSections);

    setIsInputModal(false);
    handleCreate(isAddInput);
    setIsAddInput("");
  }

  const handlePress = () => {
    setIsProfile(true);
  }

  const handleButton = () => {
    setIsProfile(false);
  }

  const handlePlanChange = (e) => {
    setIsAddInput(e);
  }

  return (
    <KeyboardAvoidingView behavior="padding" style={style.key}>
      <SafeAreaView style={style.safe}>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        <View style={style.div1}>
          <Text style={style.text1}>FitTrack</Text>
          <View style={style.div2}>
            <Switch value={isEnabled} onValueChange={toggleSwitch} trackColor={{ false: "#CBCBCB", true: "#8BC547" }} thumbColor={isEnabled ? "#48964E" : "#FBFBFB"} ios_backgroundColor="#3e3e3e" />
            <TouchableOpacity onPress={handlePress}><Image style={style.image} source={require("./assets/image/Profile.jpg")} /></TouchableOpacity>
          </View>


        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          {/* <StatusBar
          // barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          // backgroundColor={backgroundStyle.backgroundColor}
          /> */}



          <View style={style.div3}>
            <View style={style.div4}>
              <Text style={style.text2}>Today's Progress</Text>
              <View style={style.div5}>
                {datahome.map((item) => {
                  return (<HomeCard key={item.id} title={item.title} subtitle={item.subtitle} />);
                })}</View>
            </View>


            <View style={style.div6}>
              <Text style={style.text3}>Weekly Progress</Text>
              <View style={style.div7}>
                <FlatList keyExtractor={(item) => item.id} data={dataprogress} horizontal={true} renderItem={({ item }) => {
                  return (
                    <View key={item.id} style={{ flex: 1 }}>
                      <ProgressCard key={item.id} bgcolor={item.color} day={item.day} />
                    </View>
                  );
                }} contentContainerStyle={style.flat} showsHorizontalScrollIndicator={false} nestedScrollEnabled={true} />
              </View>
            </View>

            <View style={style.div8}>
              <Text style={style.div9}>Recent Workouts</Text>
              <ScrollView horizontal={true} nestedScrollEnabled={true}>
                <View style={style.div10}>
                  {dataworkout.map((item) => {
                    return (
                      <WorkoutCard key={item.id} title={item.title} subtitle={item.subtitle} time={item.time} cal={item.cal} bgcolor={item.color} click={() => handleWorkoutClick(item.title)} />
                    );
                  })}
                </View>
              </ScrollView>
            </View>

            <WorkoutModal isClick={isWorkModal} isCancel={handleWorkoutCancel} isSubmit={handleWorkoutSubmit} isData={isTitle}/>

            <PlanModal isClick={isInputModal} isCancel={handleInputCancel} isSubmit={handleInputSubmit} isChange={handlePlanChange} isData={isAddInput}/>

            <ProfileModal isClick={isProfile} isSubmit={handleButton}/>


            <View style={style.view5}>
              <View style={style.view6}>
                <Text style={style.view7}>Workout Plans</Text>
                <TouchableOpacity onPress={handlePlanAdd} style={style.but2}><Text style={style.view8}>+ Add</Text></TouchableOpacity>
              </View>
              <SectionList sections={dataSection} keyExtractor={(item, index) => item + index} renderItem={({ item }) => {
                return (
                  <View key={item.id} style={style.view9}>
                    <Text style={style.view10}>{item}</Text>
                    <TouchableOpacity onPress={() => handleWorkoutClick(item)}><Text style={style.view11}>Start</Text></TouchableOpacity>
                  </View>
                );
              }}
                renderSectionHeader={({ section: { title } }) => {
                  return (
                    <Text style={style.view12}>{title}</Text>
                  );
                }} nestedScrollEnabled={true} contentContainerStyle={style.view13} />
            </View>

            <TouchableOpacity onPress={handleSubmit} style={style.but3}>
              {isLoading ? (<><ActivityIndicator size="small" color="white" /><Text style={style.load1}>Starting Workout...</Text></>) : (<Text style={style.load2}>Start New Workout</Text>)}
            </TouchableOpacity>



          </View>

        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}



export default App;

