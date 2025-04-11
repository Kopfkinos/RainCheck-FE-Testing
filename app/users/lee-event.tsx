import { Text, View, StyleSheet, Image, TouchableOpacity, Button } from "react-native"
import { useRouter } from "expo-router"
export default function UsernamePage() {
  const router = useRouter()

  const handleLogoClick = () => {
    router.push("/")
  }

  const handleEventButtonClick = () => {}

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleLogoClick}>
        <Image style={styles.avatar} source={require("../../assets/images/raincheck test.png")} />
      </TouchableOpacity>

      <View>
        <Text style={styles.name}>Event List</Text>
      </View>

      <View>
        <Text style={styles.comment}>Lee's event is shown below!</Text>
      </View>

      <View>
        <Image
          style={styles.avatar}
          source={require("../../assets/images/thomapyrin-dancing.gif")}
        />
        <TouchableOpacity title="I'm no feelin' it pal!!!" onPress={handleEventButtonClick} />
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
  avatar: {
    width: 300,
    height: 100,
    borderRadius: 90,
    marginBottom: 10,
  },
})
