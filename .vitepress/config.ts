import { defineConfig } from 'vitepress'

export default defineConfig({
    //网页语言
    lang: 'zh-CN',
    //网页标题
    title: 'IPAbuyer',
    //网页描述
    description: '刚刚拿到iPhone，受折磨于反复按下锁屏键购入App；还是担心小众优质App被下架？使用IPAbuyer，将App统统收入囊中！',
    //头文件配置
    head: [
        //网页logo
        ['link',
            { rel: 'icon', href: '/logo.ico' }
        ]
    ],
    //网页地图
    sitemap: {
        hostname: 'https://ipa.blazesnow.com/'
    },
    //markdown配置
    markdown: {
        //显示行号
        lineNumbers: true,
    },
    //主题配置
    themeConfig: {
        //左上角logo
        logo: '/logo.ico',
        //右边的小目录
        aside: true,
        //右边的小目录
        outline: [2, 4],
        outlineTitle: '本篇目录',
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
        //是否在markdown中的外部链接旁显示外部链接图标
        externalLinkIcon: false,
        //上一篇下一篇
        docFooter: {
            prev: '上一篇',
            next: '下一篇'
        },
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
        notFound: {
            title: '页面未找到',
            quote: '抱歉，没有找到您需要的页面',
            linkLabel: '回到首页',
            linkText: '回到首页',
            code: '404',
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
                text: '更新日志',
                link: '/changelog',
                activeMatch: '/changelog'
            }
        ],
        //主页页脚
        footer: {
            message: '软件使用 <a href="https://www.gnu.org/licenses/agpl-3.0.html" target="_blank">GNU AGPL v3.0</a> 协议。',
            copyright: 'Copyright © 2025-2026 <a href="https://github.com/ipabuyer" target="_blank">IPAbuyer</a>.'
        }
    }
})