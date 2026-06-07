import type { ProfileConfig } from "../types/config";

export const profileConfig: ProfileConfig = {
	// 头像
	// 图片路径支持三种格式：
	// 1. public 目录（以 "/" 开头，不优化）："/assets/images/avatar.webp"
	// 2. src 目录（不以 "/" 开头，自动优化但会增加构建时间，推荐）："assets/images/avatar.webp"
	// 3. 远程 URL："https://example.com/avatar.jpg"
	avatar: "assets/images/tut.jpg",

	// 名字
	name: "Vio01_Kaki3",

	// 个人签名
	bio: "Hello, I'm Vio01_Kaki3.",

	// 链接配置
	// 已经预装的图标集：fa7-brands，fa7-regular，fa7-solid，material-symbols，simple-icons
	// 访问https://icones.js.org/ 获取图标代码，
	// 如果想使用尚未包含相应的图标集，则需要安装它
	// `pnpm add @iconify-json/<icon-set-name>`
	// showName: true 时显示图标和名称，false 时只显示图标
	links: [
		{
			name: "qq",
			icon: "fa7-brands:qq",
			url: "https://qm.qq.com/q/1QtzbxHTvO",
			showName: false,
		},
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/Vio01Kaki3",
			showName: false,
		},
		{
			name: "小红书",
			icon: "simple-icons:xiaohongshu",
			url: "https://www.xiaohongshu.com/user/profile/5d203884000000001201d1c2?xsec_token=YBBwiQBDRKDhEJD2I6v-DQkl_kO1LfKHvsj2xztR92pvg%3D&xsec_source=app_share&xhsshare=&shareRedId=N0o0MDY9PD02NzUyOTgwNjc1OThINkk7&apptime=1780767722&share_id=78b09b7ba49642f59e8b781fe7c8aea9&share_channel=copy_link",
			showName: false,
		},
		{
			name: "RSS",
			icon: "fa7-solid:rss",
			url: "/rss/",
			showName: false,
		},
	],
};
