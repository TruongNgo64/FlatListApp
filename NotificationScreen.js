import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";

const DATA = [
  {
    id: "1",
    title: "Bạn có khách hàng mới!",
    content: "Chúc mừng bạn có khách hàng mới.",
    time: "20/08/2020, 06:00",
  },
  {
    id: "2",
    title: "Công việc sắp đến hạn",
    content: "Bạn có 17 công việc sắp đến hạn.",
    time: "20/08/2020, 06:00",
  },
];

export default function NotificationScreen() {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text>{item.content}</Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Thông báo</Text>

      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    padding: 16,
  },
  item: {
    backgroundColor: "#fff",
    padding: 15,
    margin: 10,
    borderRadius: 10,
  },
  textContainer: {
    marginLeft: 5,
  },
  title: {
    fontWeight: "bold",
  },
  time: {
    color: "gray",
    fontSize: 12,
    marginTop: 5,
  },
});