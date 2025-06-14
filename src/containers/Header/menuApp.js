export const adminMenu = [
    { //hệ thống
        name: 'menu.admin.manage-user',
        menus: [
            {
                name: 'menu.admin.crud-user', link: '/system/user-manage',

            },
            {
                name: 'menu.admin.crud-admin', link: '/system/user-redux',
            },
            {
                name: 'menu.admin.manage-content', link: '/system/manage-content',
            }
        ]
    },
    {
        name: 'menu.admin.manage-content', link: '/system/manage-content',
    },
];