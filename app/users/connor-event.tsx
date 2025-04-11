import { Text, View, StyleSheet, Image, Button } from "react-native"

export default function UsernamePage() {
  const handleEventButtonClick = () => {}

  return (
    <View style={styles.container}>
      <View>
        <Image source={require("../../assets/images/raincheck test.png")} />
      </View>
      <View>
        <Text style={styles.name}>Welcome</Text>
        <Text style={styles.userInfo}>Connor</Text>
      </View>
      <View>
        <Text style={styles.comment}>Connor's event is shown below!</Text>
        <Button title="I'm no feelin' it pal!!!" onPress={handleEventButtonClick} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  button: {
    backgroundColor: "red",
  },
  name: {
    fontSize: 22,
    color: "black",
    fontWeight: "600",
    fontFamily: "Helvetica",
  },
  userInfo: {
    fontSize: 20,
    color: "black",
    fontWeight: "600",
  },
  comment: {
    fontSize: 14,
    color: "black",
  },
})
