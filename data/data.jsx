export const Data = (checkColor) => {
    const datahome = [
        { id: 1, title: "3/5", subtitle: "Workouts" },
        { id: 2, title: "750", subtitle: "Calories" },
        { id: 3, title: "62 min", subtitle: "Active Time" }
    ]
    const dataprogress = [
        { id: 1, color: "#4FB54E", day: "Mon" },
        { id: 2, color: "#4FB54E", day: "Tue" },
        { id: 3, color: "#4FB54E", day: "Wed" },
        { id: 4, color: checkColor ? "#E2E2E2" : "#363636", day: "Thu" },
        { id: 5, color: checkColor ? "#E2E2E2" : "#363636", day: "Fri" },
        { id: 6, color: checkColor ? "#E2E2E2" : "#363636", day: "Sat" },
        { id: 7, color: checkColor ? "#E2E2E2" : "#363636", day: "Sun" }
    ]
    const dataworkout = [
        { id: 1, title: "Morning Run", subtitle: "Cardio", time: "25 min", cal: "320 cal", color: "#ED6026" },
        { id: 2, title: "Upper Body", subtitle: "Strength", time: "45 min", cal: "280 cal", color: "#4055A3" },
        { id: 3, title: "Yoga Flow", subtitle: "Flexibility", time: "30 min", cal: "150 cal", color: "#008C7F" },
        { id: 4, title: "HIIT", subtitle: "Cardio", time: "20 min", cal: "250 cal", color: "#E11D61" }
    ]

    return {datahome, dataprogress, dataworkout};
}


