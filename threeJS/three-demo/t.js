let ary1 = [
	{ userId: "1000015", roleId: "3", lastTime: "2023-05-30 15:02:41" },
	{ userId: "1000015", roleId: "6", lastTime: "2023-05-29 16:33:32" },
	{ userId: "1000015", roleId: "2", lastTime: "2023-05-29 15:35:41" },
];
let ary2 = [
	{
		role_id: "2",
		group_id: "2",
		acts_name: "口语老师",
		short_describe: "口语老师",
	},
	{
		role_id: "3",
		group_id: "3",
		acts_name: "英语面试官",
		short_describe: "英语面试官",
	},
	{
		role_id: "6",
		group_id: "5",
		acts_name: "麦当劳服务员",
		short_describe: "麦当劳服务员",
	},
];

const mergedArray = ary1.map((characterID) => {
	const characterDescribe = ary2.find(
		(characterDescribe) => characterDescribe.role_id === characterID.roleId
	);
	return { ...characterID, ...characterDescribe };
});

console.log(mergedArray);
