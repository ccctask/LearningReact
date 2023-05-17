import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSnapshot } from "valtio";
// url请求地址
import config from "../config/config";
import state from "../store";
import { download } from "../assets";
import { downloadCanvasToImage, reader } from "../config/helpers";
// name  和 icon 的绑定对象。
import { EditorTabs, FilterTabs, DecalTypes } from "../config/constants";
import { fadeAnimation, slideAnimation } from "../config/motion";
// 页面
import {
	AIpicker,
	FilePicker,
	ColorPicker,
	CustomButton,
	Tab,
} from "../components";

const Customizer = () => {
	const snap = useSnapshot(state);
	return (
		<AnimatePresence>
			<>
				{!snap.intro && (
					<>
						{/* 侧栏控制面板 */}
						<motion.div
							key="custom-menu"
							className="absolute left-0 top-0 z-10 "
							{...slideAnimation}
						>
							<div className="flex min-h-screen items-center justify-center ">
								<div className="editortabs-container tabs">
									{EditorTabs.map((tab) => {
										return <Tab key={tab.name}></Tab>;
									})}
									{/* 可以简写成 */}
									{/* {EditorTabs.map((tab) => (
										<Tab key={tab.name}></Tab>
									))} */}
								</div>
							</div>
						</motion.div>
						{/* 返回按钮 */}
						<motion.div
							className="absolute right-5 top-5 z-10"
							{...fadeAnimation}
						>
							<CustomButton
								type="filled"
								title="返回"
								onClick={() => (state.intro = true)}
								customStyle="w-fit px-4 py-2/5 font-bold text-sm"
							></CustomButton>
						</motion.div>
						{/* 底部控制栏 */}
						<motion.div
							className="filtertabs-container"
							{...slideAnimation("up")}
						>
							{FilterTabs.map((tab) => (
								<Tab
									key={tab.name}
									tab={tab}
									onClick={() => {}}
									isFilterTab
									isActiveTab=""
								></Tab>
							))}
						</motion.div>
					</>
				)}
			</>
		</AnimatePresence>
	);
};

export default Customizer;
