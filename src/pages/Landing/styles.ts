import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#8257e5",
		justifyContent: "center",
		padding: 40,
	},
	banner: {
		width: "100%",
		resizeMode: "contain",
	},
	title: {
		fontFamily: "Poppins_400Regular",
		color: "#fff",
		fontSize: 20,
		lineHeight: 30,
		marginTop: 80,
	},

	titleBold: {
		fontFamily: "Poppins_600SemiBold",
	},
	buttonContainer: {
		flexDirection: "row",
		marginTop: 40,
		justifyContent: "space-between",
	},
	button: {
		height: 150,
		width: "48%",
		backgroundColor: "#333",
		borderRadius: 8,
		padding: 24,
		justifyContent: "space-between",
	},
	buttonPrimary: {
		backgroundColor: "#9891f5",
	},
	buttonText: {
		fontFamily: "Archivo_700Bold",
		fontSize: 19,
		color: "#fff",
	},
	buttonSecondary: {
		backgroundColor: "#04d361",
	},
	totalConnections: {
		fontFamily: "Poppins_400Regular",
		color: "#d4c2ff",
		fontSize: 11,
		maxWidth: 140,
		marginTop: 40,
	},
});

export default styles;
