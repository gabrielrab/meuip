import React, { useState } from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [ip, setIp] = useState("Descobrindo seu ip...");
  const [ipBox, setIpBox] = useState(false);

  const resultIp = (ip) => {
    return Alert.alert("Ip encontrado!", `${ip}`, [
      { text: "Valeu !", onPress: () => setIpBox(false) },
    ]);
  };

  const handleFindIp = async () => {
    const response = await fetch("http://httpbin.org/ip");
    const data = await response.json();
    setIpBox(true);
    return resultIp(data.origin);
  };
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.bgiTitle}>MEU IP</Text>
        {ipBox ? (
          <View>
            <Text style={styles.title}>{ip}</Text>
          </View>
        ) : (
          <>
            <View style={styles.btn}>
              <Button title="Descobrir meu Ip !" onPress={handleFindIp} />
            </View>
          </>
        )}
      </View>
      <View style={styles.footer}>
        <Text style={styles.title}>Feito por: Gabriel Rabelo 🚀</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2f2336",
  },
  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bgiTitle: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
  },
  title: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
  btn: {
    color: "white",
    backgroundColor: "white",
  },
  footer: {
    marginBottom: 25,
  },
});
