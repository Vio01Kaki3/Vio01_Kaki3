import {
	LinkPreset,
	type NavBarConfig,
	type NavBarLink,
	type NavBarSearchConfig,
	NavBarSearchMethod,
} from "../types/config";
import { siteConfig } from "./siteConfig";

// 根据页面开关动态生成导航栏配置
const getDynamicNavBarConfig = (): NavBarConfig => {
	// 基础导航栏链接
	const links: (NavBarLink | LinkPreset)[] = [
		// 主页
		LinkPreset.Home,
	];

	// 文章及其子菜单
	links.push({
		name: "文章",
		url: "/post/",
		icon: "material-symbols:article-rounded",
		children: [
			// 归档
			LinkPreset.Archive,
			// 分类
			LinkPreset.Categories,
			// 标签
			LinkPreset.Tags,
		],
	});

	// 我的及其子菜单
	links.push({
		name: "我的",
		url: "/my/",
		icon: "material-symbols:person",
		children: [
			// 根据配置决定是否添加相册，在siteConfig关闭pages.gallery时导航栏不显示相册
			...(siteConfig.pages.gallery ? [LinkPreset.Gallery] : []),

			// 根据配置决定是否添加番组计划，在siteConfig关闭pages.bangumi时导航栏不显示番组计划
			...(siteConfig.pages.bangumi ? [LinkPreset.Bangumi] : []),
		],
	});

	// 关于及其子菜单
	links.push({
		name: "关于",
		url: "/content/",
		icon: "material-symbols:info",
		children: [
			// 关于页面
			LinkPreset.About,
			// 根据配置决定是否添加留言板，在siteConfig关闭pages.guestbook时导航栏不显示留言板
			...(siteConfig.pages.guestbook ? [LinkPreset.Guestbook] : []),
			// 友情链接页面
			{
				name: "朋友们",
				url: "/friends/",
			},
		],
	});
	
	// 仅返回链接，其它导航搜索相关配置在模块顶层常量中独立导出
	return { links } as NavBarConfig;
};

// 导航搜索配置
export const navBarSearchConfig: NavBarSearchConfig = {
	method: NavBarSearchMethod.PageFind,
};

export const navBarConfig: NavBarConfig = getDynamicNavBarConfig();
