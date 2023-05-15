import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { useState } from "react";
import { Link, Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import {
	Nearbyjobs,
	Popularjobs,
	ScreenHeaderBtn,
	Welcome,
} from "../components";
export default function Home() {
	return (
		// <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
		// 	{/* Use the `Screen` component to configure the layout. */}
		// 	<Stack.Screen options={{ title: "Overview" }} />
		// 	{/* Use the `Link` component to enable optimized client-side routing. */}
		// 	<Link href="/details">Go to Details</Link>
		// </View>
		<SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
			{/* header头样式：  */}
			<Stack.Screen
				options={{
					title: "",
					headerStyle: { backgroundColor: COLORS.lightWhite },
					headerShadowVisible: false,
					headerLeft: () => (
						<ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
					),
					headerRight: () => (
						<ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
					),
				}}
			></Stack.Screen>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={{ flex: 1, padding: SIZES.medium }}>
					<Welcome></Welcome>
					<Popularjobs></Popularjobs>
					<Nearbyjobs></Nearbyjobs>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
