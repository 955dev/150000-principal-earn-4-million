module.exports = {
    lang: 'zh-CN',
    title: '小资金也要有梦想！',
    description: '2019年中旬，15万本金入市，本站能看到的记录做到400多万。',
    base: '/150000-principal-earn-4-million/',
    themeConfig: {
        navbar: [
            {
                text: '交易记录',
                children: [
                    {
                        text: '2021年',
                        children: [
                            '/transaction-record/一月.md',
                            '/transaction-record/二月.md',
                            '/transaction-record/三月.md',
                            '/transaction-record/四月.md',
                            '/transaction-record/五月.md',
                        ]
                    },
                ]
            },
            {
                text: '交易辅助软件',
                children: [
                    '/soft/桌面端.md',
                    '/soft/客户端.md',
                ]
            },
        ]
    }
}