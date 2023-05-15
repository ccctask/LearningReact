import { proxy } from "valtio";
const state = proxy({
	// 简介： 控制home page 和 customizer页面切换
	intro: true,
	color: "#EFBD48",
	isLogoTexture: true,
	isFullTexture: false,
	logoDecal: "./threejs.png",
	fullDecal: "./threejs.png",
});
export default state;
