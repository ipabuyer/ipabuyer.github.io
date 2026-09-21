import { defineConfig } from 'vitepress'

export default defineConfig({
    //网页地图
    sitemap: {
        hostname: 'https://ipa.blazesnow.com/'
    },
    //头文件配置
    head: [
        //网页logo
        ['link',
            { rel: 'icon', href: '/logo.ico' }
        ]
    ],
    //多语言配置
    locales: {
        root: {
            //语言切换菜单中显示的名称
            label: '简体中文',
            //网页语言
            lang: 'zh-CN',
            //网页标题
            title: 'IPAbuyer',
            //网页描述
            description: '使用 IPAbuyer，快速购买 AppStore 中的应用！',
            //主题配置
            themeConfig: {
                //语言切换按钮提示
                langMenuLabel: '切换语言',
                //切换深色或浅色模式提示
                darkModeSwitchLabel: '切换深色或浅色模式',
                //切换至浅色模式提示
                lightModeSwitchTitle: '切换至浅色模式',
                //切换至深色模式提示
                darkModeSwitchTitle: '切换至深色模式',
                //目录按钮文字
                sidebarMenuLabel: '目录',
                //回到顶部文字
                returnToTopLabel: '回到顶部',
                //右边的小目录标题
                outlineTitle: '本篇目录',
                //上一篇下一篇
                docFooter: {
                    prev: '上一篇',
                    next: '下一篇'
                },
                nav: [
                    {
                        text: '首页',
                        link: '/'
                    },
                    {
                        text: '常见问题',
                        link: '/faq',
                        activeMatch: '/faq'
                    },
                    {
                        text: '开发者团队',
                        link: '/team',
                        activeMatch: '/team'
                    },
                    {
                        text: '更新日志',
                        link: '/changelog',
                        activeMatch: '/changelog'
                    }
                ],
                notFound: {
                    title: '页面未找到',
                    quote: '抱歉，没有找到您需要的页面',
                    linkLabel: '回到首页',
                    linkText: '回到首页',
                    code: '404',
                },
                //主页页脚
                footer: {
                    message: '软件使用 <a href="https://www.gnu.org/licenses/agpl-3.0.html" target="_blank">GNU AGPL v3.0</a> 协议。',
                    copyright: 'Copyright © 2025-2026 <a href="https://github.com/ipabuyer" target="_blank">IPAbuyer</a>.'
                }
            }
        },
        en: {
            //语言切换菜单中显示的名称
            label: 'English',
            //网页语言
            lang: 'en-US',
            //语言根路径
            link: '/en/',
            //网页标题
            title: 'IPAbuyer',
            //网页描述
            description: 'Buy apps from the App Store quickly with IPAbuyer!',
            //主题配置
            themeConfig: {
                //语言切换按钮提示
                langMenuLabel: 'Change language',
                //切换深色或浅色模式提示
                darkModeSwitchLabel: 'Toggle dark or light mode',
                //切换至浅色模式提示
                lightModeSwitchTitle: 'Switch to light mode',
                //切换至深色模式提示
                darkModeSwitchTitle: 'Switch to dark mode',
                //目录按钮文字
                sidebarMenuLabel: 'Menu',
                //回到顶部文字
                returnToTopLabel: 'Back to top',
                //右边的小目录标题
                outlineTitle: 'On this page',
                //上一篇下一篇
                docFooter: {
                    prev: 'Previous',
                    next: 'Next'
                },
                nav: [
                    {
                        text: 'Home',
                        link: '/en/'
                    },
                    {
                        text: 'FAQ',
                        link: '/en/faq',
                        activeMatch: '/en/faq'
                    },
                    {
                        text: 'Team',
                        link: '/en/team',
                        activeMatch: '/en/team'
                    },
                    {
                        text: 'Changelog',
                        //更新日志不翻译，直接使用中文页
                        link: '/changelog',
                        activeMatch: '/changelog'
                    }
                ],
                notFound: {
                    title: 'Page not found',
                    quote: 'Sorry, the page you are looking for could not be found',
                    linkLabel: 'Back to home',
                    linkText: 'Back to home',
                    code: '404',
                },
                //主页页脚
                footer: {
                    message: 'This software is licensed under the <a href="https://www.gnu.org/licenses/agpl-3.0.html" target="_blank">GNU AGPL v3.0</a> license.',
                    copyright: 'Copyright © 2025-2026 <a href="https://github.com/ipabuyer" target="_blank">IPAbuyer</a>.'
                }
            }
        }
    },
    //主题配置（各语言共享）
    themeConfig: {
        //左上角logo
        logo: '/logo.ico',
        //右边的小目录
        aside: true,
        //右边的小目录
        outline: [2, 4],
        //是否在markdown中的外部链接旁显示外部链接图标
        externalLinkIcon: false,
        //搜索内容显示本地化
        search: {
            //用自带的搜索功能
            provider: 'local',
            //其他选项
            options: {
                locales: {
                    root: {
                        translations: {
                            button: {
                                buttonText: '搜索文档',
                                buttonAriaLabel: '搜索文档',
                            },
                            modal: {
                                displayDetails: '显示文章的详细内容',
                                resetButtonTitle: '清除内容',
                                backButtonTitle: '返回',
                                noResultsText: '没有找到',
                                footer: {
                                    selectText: '选择',
                                    selectKeyAriaLabel: '选择',
                                    navigateText: '切换',
                                    navigateUpKeyAriaLabel: '向上',
                                    navigateDownKeyAriaLabel: '向下',
                                    closeText: '关闭',
                                    closeKeyAriaLabel: '关闭',
                                }
                            }
                        }
                    }
                }
            }
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/ipabuyer/ipabuyer' },
        ],
    }
})
