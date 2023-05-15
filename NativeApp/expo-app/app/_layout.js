import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
// https://docs.expo.dev/versions/latest/sdk/splash-screen/ 后台任务：加载字体 调用api  动画操作
import * as SplashScreen from "expo-splash-screen";
SplashScreen.preventAutoHideAsync();
export default function Layout() {
	const [fontsLoaded] = useFonts({
		DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
		DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
		DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
	});

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return null;
	}

	return <Stack onLayout={onLayoutRootView} />;
}
