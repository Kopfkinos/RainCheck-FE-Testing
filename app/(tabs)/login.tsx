import { useState } from "react"
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image } from "react-native"
import { useRouter } from "expo-router"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen"

import { EyeOffOutline, EyeOutline } from "react-ionicons"

export default function Index() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [passwordVisisble, setPasswordVisible] = useState(false)
  const router = useRouter()

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisisble)
  }

  const checkPasswordLength = (password) => {
    return password.length >= 8
  }

  const handleLogin = () => {
    if (username === "lee" && password === "password") {
      router.push("/users/lee-user-page") // navigate to username page when inside another folder
    }
    if (username === "connor" && password === "password") {
      router.push("/users/connor-user-page")
    }
  }

  return (
    <View style={styles.container}>
      <View>
        <Image source={require("../../assets/images/raincheck test.png")} />
      </View>
      <Text style={styles.heading}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        secureTextEntry={!passwordVisisble}
        //Ensures the password is hidden when typing
      />
      <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon}>
        {passwordVisisble ? <EyeOutline color={"#00000"} /> : <EyeOffOutline color={"#00000"} />}
      </TouchableOpacity>

      <Button title="Submit" onPress={handleLogin} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#A7CECB",
  },
  heading: {
    color: "#824C71",
    fontSize: 24,
    marginBottom: 20,
    alignSelf: "center",
  },
  input: {
    height: hp("7%"),
    width: "100%",
    marginVertical: hp("1%"),
    borderWidth: 1,
    padding: wp("2.5%"),
    borderRadius: 5,
    borderColor: "#ddd",
  },
  eyeIcon: {},
})
