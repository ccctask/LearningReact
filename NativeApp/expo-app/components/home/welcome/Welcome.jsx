import React, { useState } from "react";
import {
	View,
	Text,
	TextInput,
	Image,
	TouchableOpacity,
	FlatList,
} from "react-native";
import { icons, SIZES } from "../../../constants";
import { useRouter } from "expo-router";
import styles from "./welcome.style";

const jobTypes = ["Full-Time", "Party-Time", "Contractor"];

const Welcome = () => {
	const router = useRouter();
	const [activeJobType, setActiveJobType] = useState("Full-Time");
	return (
		<View>
			<View style={styles.container}>
				<Text style={styles.userName}>哈喽！ zmy</Text>
				<Text style={styles.welcomeMessage}>Find your friends</Text>
			</View>
			{/* 搜索框 */}
			<View style={styles.searchContainer}>
				<View style={styles.searchWrapper}>
					<TextInput
						style={styles.searchInput}
						placeholder="随便输入点啥吧..."
						value=""
						onChange={() => {}}
					></TextInput>
				</View>
				<TouchableOpacity style={styles.searchBtn}>
					<Image
						source={icons.search}
						resizeMode="contain"
						style={styles.searchBtnImage}
					></Image>
				</TouchableOpacity>
			</View>
			{/* 工作类型的控件 */}
			<View style={styles.tabsContainer}>
				<FlatList
					horizontal
					// 设置唯一的key 用来加速渲染
					keyExtractor={(item) => item}
					// These styles will be applied to the scroll view content container which wraps all of the child views  : 设置每个子组件的 样式。 比如现在的 columnGap，每列的间距
					contentContainerStyle={{ columnGap: SIZES.small }}
					data={jobTypes}
					renderItem={({ item }) => (
						<TouchableOpacity
							style={styles.tab(activeJobType, item)}
							onPress={() => {
								setActiveJobType(item);
								router.push(`/search/${item}`);
							}}
						>
							<Text style={styles.tabText(activeJobType, item)}>{item}</Text>
						</TouchableOpacity>
					)}
				/>
			</View>
		</View>
	);
};

export default Welcome;
