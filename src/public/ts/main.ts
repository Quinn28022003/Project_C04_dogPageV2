let count: number = 0;
let countMenu: number = 0;
document.addEventListener('DOMContentLoaded', (): void => {
    const containerHeaderNavigationMenuId: HTMLElement | null = document.getElementById('header_navigation_menu_id');
    const containerHeaderNavigationUlId: HTMLElement | null = document.getElementById('header_navigation_ul_id');
    const containerheaderNavigationLiDropdownId: HTMLElement | null = document.getElementById('header_navigation_li_dropdown_id');
    if (containerHeaderNavigationMenuId) {

        containerHeaderNavigationMenuId.onclick = (): void => {
            if (count % 2 === 0) {
                containerHeaderNavigationUlId?.setAttribute('class', 'header_navigation_ul displayBlock')
                count++
            } else {
                containerHeaderNavigationUlId?.setAttribute('class', 'header_navigation_ul displayNone')
                count++
            };
        };
    };

    if (containerheaderNavigationLiDropdownId) {
        containerheaderNavigationLiDropdownId.onclick = (): void => {
            const containerHeaderNavigationLiMenuId: NodeListOf<Element> = document.querySelectorAll('#header_navigation_li_menu_id');
            if (countMenu % 2 === 0) {
                for (let i: number = 0; i < containerHeaderNavigationLiMenuId.length; i++) {
                    if (containerHeaderNavigationLiMenuId) {
                        containerHeaderNavigationLiMenuId[i].setAttribute('class', 'header_navigation_li');
                    };
                };
                countMenu++
            } else {
                for (let i: number = 0; i < containerHeaderNavigationLiMenuId.length; i++) {
                    if (containerHeaderNavigationLiMenuId) {
                        containerHeaderNavigationLiMenuId[i].setAttribute('class', 'header_navigation_li displayNone')
                    };
                };
                countMenu++
            };
        };
    };
});