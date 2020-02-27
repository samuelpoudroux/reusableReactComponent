import React, { useState } from 'react';
import propTypes from 'prop-types'
import { Menu, Icon, Layout } from 'antd';
import 'antd/dist/antd.css';
const { SubMenu } = Menu;
const { Sider } = Layout;


export default {
    title: 'NavBar',
};

/**
 * Modélé à respecter pour le paramêtre menuItems de la navBar
 * Array d'objets
 * const menuItems = [
 * exemple avec le sous menu
    { key: 'mail',
        iconType: 'mail',
        title: 'mail',
        subMenu: {
            title: 'toto',
            iconType: 'mail',
            itemGroups: new Array(5).fill({
                title: "toto",
                items: new Array(5).fill({
                    key: 'mail',
                    option: "toto",
                    route: '/mailTest'
                })
            }),
        }
    },
     * exemple sans sous menu
    {
    key: 'test',
    iconType: 'user',
    title: 'user',
    route: "/test"
    }
]
 */

/**
 * 
 * @param {defaultActivePage} param0 permet de définir la page active c'est une chaine de caractére
 * @param {history} param0 provient du router
 * @param {menuItems} param0 un tableau qui correspond au model si dessus il permet de générer le menu en adéquation
 */

export const NavBar = ({ defaultActivePage, history, menuItems, menuStyle }) => {
    const [currentPage, setCurrentPage] = useState(defaultActivePage)
    const handleClick = e => {
        setCurrentPage(e.key)
    };
    return (
            <Sider
            style={{width: '0px', maxWidth:'0px', minWidth:'0px'}}
                breakpoint="xs"
                collapsedWidth="0"
                onBreakpoint={broken => {
                }}
                onCollapse={(collapsed, type) => {
                }}
            >
                <Menu  onClick={handleClick} style={menuStyle} selectedKeys={[currentPage]} >
                    {menuItems && menuItems.length > 0 && menuItems.map(menuItem =>
                        menuItem.subMenu ?
                            <SubMenu
                                title={
                                    <span className="submenu-title-wrapper">
                                        <Icon type={menuItem.subMenu.iconType} />
                                        {menuItem.subMenu.title}
                                    </span>
                                }
                            >
                                {menuItem.subMenu.itemGroups && menuItem.subMenu.itemGroups.length > 0 && menuItem.subMenu.itemGroups.map(itemGroup =>
                                    <Menu.ItemGroup title={itemGroup.title}>
                                        {itemGroup.items.map(item =>
                                            <Menu.Item key={item.key} onClick={() => history.push(item.route)}>{item.option}</Menu.Item>
                                        )}
                                    </Menu.ItemGroup>
                                )}
                            </SubMenu> : <Menu.Item key={menuItem.key} onClick={() => history.push(menuItem.route)}>
                                <Icon type={menuItem.iconType} />
                                {menuItem.title}
                            </Menu.Item>)}
                </Menu>
            </Sider>
    );
}

NavBar.propTypes = {
    defaultActivePage: propTypes.string,
    history: propTypes.object,
    menuItems: propTypes.array
}