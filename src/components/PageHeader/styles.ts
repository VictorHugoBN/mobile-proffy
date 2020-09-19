import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		padding: 40,
		backgroundColor: "#8257e5",
	},

	topBar: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},

	header: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},

	title: {
		fontFamily: "Archivo_700Bold",
		color: "#FFF",
		fontSize: 24,
		marginVertical: 10,
		justifyContent: "center",
		textAlign: "center",
		textAlignVertical: "center",
	},
});

export default styles;
