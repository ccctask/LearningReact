//组件动画: 之前还在想怎么实现组件动画， 这不就有了么
import { motion, AnimatePresence } from "framer-motion";
// 预设动画
import {
	headContainerAnimation,
	headTextAnimation,
	headContentAnimation,
	slideAnimation,
} from "../config/motion";
// 基于Proxy的状态管理库
import { useSnapshot } from "valtio";
import state from "../store";
import { CustomButton } from "../components";

const Home = () => {
	const snap = useSnapshot(state);

	return (
		<AnimatePresence>
			{snap.intro && (
				<motion.section className="home" {...slideAnimation("left")}>
					<motion.header {...slideAnimation("down")}>
						<img
							src="./threejs.png"
							alt="logo"
							className="h-8 w-8 object-contain"
						/>
					</motion.header>
					<motion.div {...headTextAnimation}>
						<h1 className="head-text">
							让我们开始 <br /> 吧.
						</h1>
					</motion.div>
					<motion.div className="flex flex-col gap-4" {...headContentAnimation}>
						<p className="max-w-md text-gray-600">
							创建 并 涉及 属于你的与众不同的 衬衫，使用3D预览,{" "}
							<strong>贴上你的喜欢的图片</strong>定义专属风格
						</p>
						<CustomButton
							type="filled"
							title="Customize It"
							onClick={() => (state.intro = false)}
							customStyle="w-fit px-4 py-2.5 font-bold text-sm"
						></CustomButton>
					</motion.div>
				</motion.section>
			)}
		</AnimatePresence>
	);
};

export default Home;
