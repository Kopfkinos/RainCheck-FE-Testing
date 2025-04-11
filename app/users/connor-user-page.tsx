import { Text, View, StyleSheet, Image, Button } from "react-native"
import { useRouter } from "expo-router"

export default function UsernamePage() {
  const router = useRouter()

  const handleEventButtonClick = () => {
    router.push("/users/connor-event")
  }

  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.avatar} source={require("../../assets/images/raincheck test.png")} />
      </View>
      <View>
        <Text style={styles.name}>Welcome</Text>
        <Text style={styles.userInfo}>Connor</Text>
      </View>
      <View>
        <Text style={styles.comment}>Congrats, you made it to the user page!</Text>
        <Button title="Click to View Your Event" onPress={handleEventButtonClick} />
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
  avatar: {
    width: 300,
    height: 100,
    borderRadius: 90,
    marginBottom: 10,
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
