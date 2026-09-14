import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{v as t}from"./iframe-DxnuSO35.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./MenuButtonsRecursive-BNZDvptr.js";var a,o;function s(){return(s=e((()=>{t(),r(),a=n(),o=({isContextMenuShown:e,menuCoordinates:t,contextRef:n,functionRef:r,menuItems:o})=>e&&(0,a.jsx)(`div`,{id:`context-menu`,style:{position:`absolute`,left:`${t.x}px`,top:`${t.y}px`},ref:n,children:(0,a.jsx)(i,{menuItem:o,onButtonClick:r})}),o.__docgenInfo={description:``,methods:[],displayName:`ContextMenu`,props:{isContextMenuShown:{required:!0,tsType:{name:`boolean`},description:``},menuCoordinates:{required:!0,tsType:{name:`signature`,type:`object`,raw:`{x:number, y:number}`,signature:{properties:[{key:`x`,value:{name:`number`,required:!0}},{key:`y`,value:{name:`number`,required:!0}}]}},description:``},contextRef:{required:!0,tsType:{name:`RefObject`,elements:[{name:`union`,raw:`HTMLDivElement | null`,elements:[{name:`HTMLDivElement`},{name:`null`}]}],raw:`RefObject<HTMLDivElement | null>`},description:``},functionRef:{required:!0,tsType:{name:`RefObject`,elements:[{name:`union`,raw:`((id: string) => void) | null`,elements:[{name:`unknown`},{name:`null`}]}],raw:`RefObject<((id: string) => void) | null>`},description:``},menuItems:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
    menuId: string,
    title: string,
    icon?: string,
    monoIcon?:string,
    enabled: boolean,
    items?: menuItem[],
}`,signature:{properties:[{key:`menuId`,value:{name:`string`,required:!0}},{key:`title`,value:{name:`string`,required:!0}},{key:`icon`,value:{name:`string`,required:!1}},{key:`monoIcon`,value:{name:`string`,required:!1}},{key:`enabled`,value:{name:`boolean`,required:!0}},{key:`items`,value:{name:`Array`,elements:[{name:`menuItem`}],raw:`menuItem[]`,required:!1}}]}}],raw:`menuItem[]`},description:``}}}})))()}var c,l,u;function d(){return(d=e((()=>{s(),c={title:`Core/ContextMenu`,component:o,tags:[`autodocs`],argTypes:{isContextMenuShown:{control:`boolean`},menuCoordinates:{control:`object`},contextRef:{control:!1},functionRef:{control:!1},menuItems:{control:`text`}}},l={args:{isContextMenuShown:!0,menuCoordinates:{x:0,y:0},menuItems:[{menuId:`open`,title:`Open`,enabled:!0,items:[{menuId:`open`,title:`Open`,enabled:!0}]}],contextRef:{current:null},functionRef:{current:null}}},u=[`Default`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    isContextMenuShown: true,
    menuCoordinates: {
      x: 0,
      y: 0
    },
    menuItems: [{
      menuId: "open",
      title: "Open",
      enabled: true,
      items: [{
        menuId: "open",
        title: "Open",
        enabled: true
      }]
    }],
    contextRef: {
      current: null
    },
    functionRef: {
      current: null
    }
  }
}`,...l.parameters?.docs?.source}}}})))()}d();export{l as Default,u as __namedExportsOrder,c as default};