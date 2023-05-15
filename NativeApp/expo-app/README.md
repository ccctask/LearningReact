# Expo Router Example

Use [`expo-router`](https://expo.github.io/router) to build native navigation using files in the `app/` directory.

## 🚀 How to use

```sh
npx create-react-native-app -t with-router
```

## 📝 Notes

- [Expo Router: Docs](https://expo.github.io/router)
- [Expo Router: Repo](https://github.com/expo/router)
- [Request for Comments](https://github.com/expo/router/discussions/1)
### install
- expo-font :使用 web字体
- axios 
- react-native-dotenv：多环境变量管理


### 组件学习

#### 按钮 TouchableOpacity
>用于创建具有触摸反馈的可点击元素，类似于网页开发中的按钮元素。当用户按下 TouchableOpacity 元素时，它会通过透明度或背景色的方式显示出点击反馈，提升了用户的交互体验。
#### FlatList
> weclome.jsx 中 实现 竖排按钮，并且可以 左右滑动

## 知识点导航

#### css函数
- 在 weclome.jsx 中  style={styles.tab(activeJobType, item)} 设置处于 active状态的按钮