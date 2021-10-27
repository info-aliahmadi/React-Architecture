
export default {
    items: [
        {
            id: 'navigation',
            title: '',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'dashboard',
                    title: 'داشبورد',
                    type: 'item',
                    url: '/dashboard/default',
                    icon: 'feather icon-home',
                },
                {
                    id: 'basic',
                    title: 'کامپوننت ها',
                    type: 'collapse',
                    icon: 'feather icon-box', 
                    badge: {
                        title: '100+',
                        type: 'label-info'
                    },
                    children: [
                        {
                            id: 'button',
                            title: 'Button',
                            type: 'item',
                            url: '/basic/button'
                        },
                        {
                            id: 'badges',
                            title: 'Badges',
                            type: 'item',
                            url: '/basic/badges'
                        },
                        {
                            id: 'breadcrumb-pagination',
                            title: 'Breadcrumb & Pagination',
                            type: 'item',
                            url: '/basic/breadcrumb-paging'
                        },
                        {
                            id: 'collapse',
                            title: 'Collapse',
                            type: 'item',
                            url: '/basic/collapse'
                        },
                        {
                            id: 'tabs-pills',
                            title: 'Tabs & Pills',
                            type: 'item',
                            url: '/basic/tabs-pills'
                        },
                        {
                            id: 'typography',
                            title: 'Typography',
                            type: 'item',
                            url: '/basic/typography'
                        }
                    ]
                },{
                    id: 'form-basic',
                    title: 'عناصر فرم',
                    type: 'item',
                    url: '/forms/form-basic',
                    icon: 'feather icon-file-text'
                },
                {
                    id: 'bootstrap',
                    title: 'جدول',
                    type: 'item',
                    icon: 'feather icon-server',
                    url: '/tables/bootstrap'
                },
                {
                    id: 'charts',
                    title: 'چارت',
                    type: 'item',
                    icon: 'feather icon-pie-chart',
                    url: '/charts/nvd3'
                },
                {
                    id: 'maps',
                    title: 'نقشه',
                    type: 'item',
                    icon: 'feather icon-map',
                    url: '/maps/google-map'
                },{
                    id: 'auth',
                    title: 'تصدیق هویت',
                    type: 'collapse',
                    icon: 'feather icon-lock',
                    badge: {
                        title: 'New',
                        type: 'label-danger'
                    },
                    children: [
                        {
                            id: 'signup-1',
                            title: 'صفحه ثبت نام',
                            type: 'item',
                            url: '/auth/signup-1',
                            target: true,
                            breadcrumbs: false
                        },
                        {
                            id: 'signin-1',
                            title: 'صفحه ورود',
                            type: 'item',
                            url: '/auth/signin-1',
                            target: true,
                            breadcrumbs: false
                        }
                    ]
                },

                {
                    id: 'sample-page',
                    title: 'نمونه صفحه',
                    type: 'item',
                    url: '/sample-page',
                    classes: 'nav-item',
                    icon: 'feather icon-sidebar'
                },
                {
                    id: 'docs',
                    title: 'مستندات',
                    type: 'item',
                    url: '/docs',
                    classes: 'nav-item',
                    icon: 'feather icon-help-circle'
                },
                {
                    id: 'menu-level',
                    title: 'سطوح منو',
                    type: 'collapse',
                    icon: 'feather icon-menu',
                    children: [
                        {
                            id: 'menu-level-1.1',
                            title: 'Menu Level 1.1',
                            type: 'item',
                            url: '#!',
                        },
                        {
                            id: 'menu-level-1.2',
                            title: 'Menu Level 2.2',
                            type: 'collapse',
                            children: [
                                {
                                    id: 'menu-level-2.1',
                                    title: 'Menu Level 2.1',
                                    type: 'item',
                                    url: '#',
                                },
                                {
                                    id: 'menu-level-2.2',
                                    title: 'Menu Level 2.2',
                                    type: 'collapse',
                                    children: [
                                        {
                                            id: 'menu-level-3.1',
                                            title: 'Menu Level 3.1',
                                            type: 'item',
                                            url: '#',
                                        },
                                        {
                                            id: 'menu-level-3.2',
                                            title: 'Menu Level 3.2',
                                            type: 'item',
                                            url: '#',
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },{
                     id: 'disabled-menu',
                     title: 'غیرفعال کردن منو',
                     type: 'item',
                     url: '#',
                     classes: 'nav-item disabled',
                     icon: 'feather icon-power'
                  }
          

            ]
        }
    ]
}



/*


export default {
    items: [
        {
            id: 'navigation',
            title: 'جهت یابی',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'dashboard',
                    title: 'داشبورد',
                    type: 'item',
                    url: '/dashboard/default',
                    icon: 'feather icon-home',
                }
            ]
        },
        {
            id: 'ui-element',
            title: 'عناصر',
            type: 'group',
            icon: 'icon-ui',
            children: [
                {
                    id: 'basic',
                    title: 'کامپوننت ها',
                    type: 'collapse',
                    icon: 'feather icon-box', 
                    badge: {
                        title: '100+',
                        type: 'label-info'
                    },
                    children: [
                        {
                            id: 'button',
                            title: 'Button',
                            type: 'item',
                            url: '/basic/button'
                        },
                        {
                            id: 'badges',
                            title: 'Badges',
                            type: 'item',
                            url: '/basic/badges'
                        },
                        {
                            id: 'breadcrumb-pagination',
                            title: 'Breadcrumb & Pagination',
                            type: 'item',
                            url: '/basic/breadcrumb-paging'
                        },
                        {
                            id: 'collapse',
                            title: 'Collapse',
                            type: 'item',
                            url: '/basic/collapse'
                        },
                        {
                            id: 'tabs-pills',
                            title: 'Tabs & Pills',
                            type: 'item',
                            url: '/basic/tabs-pills'
                        },
                        {
                            id: 'typography',
                            title: 'Typography',
                            type: 'item',
                            url: '/basic/typography'
                        }
                    ]
                }
            ]
        },
        {
            id: 'ui-forms',
            title: 'فرم ها و جداول',
            type: 'group',
            icon: 'icon-group',
            children: [
                {
                    id: 'form-basic',
                    title: 'عناصر فرم',
                    type: 'item',
                    url: '/forms/form-basic',
                    icon: 'feather icon-file-text'
                },
                {
                    id: 'bootstrap',
                    title: 'جدول',
                    type: 'item',
                    icon: 'feather icon-server',
                    url: '/tables/bootstrap'
                }
            ]
        },
        {
            id: 'chart-maps',
            title: 'نقشه و چارت',
            type: 'group',
            icon: 'icon-charts',
            children: [
                {
                    id: 'charts',
                    title: 'چارت',
                    type: 'item',
                    icon: 'feather icon-pie-chart',
                    url: '/charts/nvd3'
                },
                {
                    id: 'maps',
                    title: 'نقشه',
                    type: 'item',
                    icon: 'feather icon-map',
                    url: '/maps/google-map'
                }
            ]
        },
        {
            id: 'pages',
            title: 'صفحه ها',
            type: 'group',
            icon: 'icon-pages',
            children: [
                {
                    id: 'auth',
                    title: 'تصدیق هویت',
                    type: 'collapse',
                    icon: 'feather icon-lock',
                    badge: {
                        title: 'New',
                        type: 'label-danger'
                    },
                    children: [
                        {
                            id: 'signup-1',
                            title: 'صفحه ثبت نام',
                            type: 'item',
                            url: '/auth/signup-1',
                            target: true,
                            breadcrumbs: false
                        },
                        {
                            id: 'signin-1',
                            title: 'صفحه ورود',
                            type: 'item',
                            url: '/auth/signin-1',
                            target: true,
                            breadcrumbs: false
                        }
                    ]
                },

                {
                    id: 'sample-page',
                    title: 'نمونه صفحه',
                    type: 'item',
                    url: '/sample-page',
                    classes: 'nav-item',
                    icon: 'feather icon-sidebar'
                },
                {
                    id: 'docs',
                    title: 'مستندات',
                    type: 'item',
                    url: '/docs',
                    classes: 'nav-item',
                    icon: 'feather icon-help-circle'
                },
                {
                    id: 'menu-level',
                    title: 'سطوح منو',
                    type: 'collapse',
                    icon: 'feather icon-menu',
                    children: [
                        {
                            id: 'menu-level-1.1',
                            title: 'Menu Level 1.1',
                            type: 'item',
                            url: '#!',
                        },
                        {
                            id: 'menu-level-1.2',
                            title: 'Menu Level 2.2',
                            type: 'collapse',
                            children: [
                                {
                                    id: 'menu-level-2.1',
                                    title: 'Menu Level 2.1',
                                    type: 'item',
                                    url: '#',
                                },
                                {
                                    id: 'menu-level-2.2',
                                    title: 'Menu Level 2.2',
                                    type: 'collapse',
                                    children: [
                                        {
                                            id: 'menu-level-3.1',
                                            title: 'Menu Level 3.1',
                                            type: 'item',
                                            url: '#',
                                        },
                                        {
                                            id: 'menu-level-3.2',
                                            title: 'Menu Level 3.2',
                                            type: 'item',
                                            url: '#',
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'disabled-menu',
                    title: 'غیرفعال کردن منو',
                    type: 'item',
                    url: '#',
                    classes: 'nav-item disabled',
                    icon: 'feather icon-power'
                },
     
            ]
        }
    ]
}
*/