import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./screenheader.style";

const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }) => {
	return (
		<TouchableOpacity style={styles.btnContainer}>
			<Image
				resizeMode="cover"
				source={iconUrl}
				style={styles.btnImg(dimension)}
			></Image>
		</TouchableOpacity>
	);
};

export default ScreenHeaderBtn;
