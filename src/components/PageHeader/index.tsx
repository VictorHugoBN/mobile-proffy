import { useNavigation } from "@react-navigation/native";
import React, { ReactNode } from "react";
import { View, Text, Image } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";

import backIcon from "../../assets/images/icons/back.png";
import logoImage from "../../assets/images/logo.png";

import styles from "./styles";

interface PageHeaderProps {
	title: String;
	headerRight?: ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
	const { navigate } = useNavigation();

	const handleGoBack = () => {
		navigate("Landing");
	};

	return (
		<View style={styles.container}>
			<View style={styles.topBar}>
				<BorderlessButton onPress={handleGoBack}>
					<Image source={backIcon} resizeMode="contain"></Image>
				</BorderlessButton>
				<Image source={logoImage} resizeMode="contain"></Image>
			</View>
			<View style={styles.header}>
				<Text style={styles.title}>{props.title}</Text>
				{props.headerRight}
			</View>
			{props.children}
		</View>
	);
};

export default PageHeader;
