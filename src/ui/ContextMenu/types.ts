export type menuItem = {
    menuId: string,
    title: string,
    icon?: string,
    monoIcon?:string,
    enabled: boolean,
    items?: menuItem[],
}