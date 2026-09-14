import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{v as t}from"./iframe-DxnuSO35.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import"./ui-6KpWAbCx.js";var r,i,a;function o(){return(o=e((()=>{r=t(),i=n(),a=({leftSideBar:e,rightSideBar:t,children:n,defaultLeftWidht:a,defaultRightWidth:o,defaultLeftWidthPercentage:s,defaultRightWidthPercentage:c,classname:l})=>{let[u,d]=(0,r.useState)(a??100),[f,p]=(0,r.useState)(o??100),m=(0,r.useRef)({isDragging:!1,side:``,startX:0,startWidth:0}),h=(0,r.useRef)(null),g=(e,t)=>{m.current={isDragging:!0,side:t,startX:e.clientX,startWidth:t===`left`?u:f},e.currentTarget.setPointerCapture(e.pointerId)},_=e=>{if(!m.current.isDragging||!h.current)return;let t=e.clientX-m.current.startX,n=h.current.offsetWidth*.35;m.current.side===`left`?d(Math.max(100,Math.min(n,m.current.startWidth+t))):p(Math.max(100,Math.min(n,m.current.startWidth-t)))},v=e=>{m.current.isDragging=!1,e.currentTarget.releasePointerCapture(e.pointerId)};return(0,i.jsx)(`div`,{className:`${l} scaffold-div`,ref:h,children:(0,i.jsxs)(`div`,{className:`main`,children:[e&&(0,i.jsxs)(i.Fragment,{children:[` `,(0,i.jsx)(`div`,{className:`left-side-bar`,style:{width:`${s?s+`%`:u+`px`}`},children:e}),(0,i.jsx)(`div`,{className:`slider`,onPointerDown:e=>g(e,`left`),onPointerMove:_,onPointerUp:v,onPointerCancel:v,children:(0,i.jsx)(`div`,{className:`visible-slider`})})]}),(0,i.jsx)(`div`,{className:`main-div`,children:n}),t&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(`div`,{className:`slider`,onPointerDown:e=>g(e,`right`),onPointerMove:_,onPointerUp:v,onPointerCancel:v,children:(0,i.jsx)(`div`,{className:`visible-slider`})}),(0,i.jsx)(`div`,{className:`right-side-bar`,style:{width:`${c?s+`%`:f+`px`}`},children:t})]})]})})},a.__docgenInfo={description:``,methods:[],displayName:`Scaffold`,props:{leftSideBar:{required:!1,tsType:{name:`ReactNode`},description:``},rightSideBar:{required:!1,tsType:{name:`ReactNode`},description:``},defaultLeftWidht:{required:!1,tsType:{name:`number`},description:``},defaultRightWidth:{required:!1,tsType:{name:`number`},description:``},defaultLeftWidthPercentage:{required:!1,tsType:{name:`number`},description:``},defaultRightWidthPercentage:{required:!1,tsType:{name:`number`},description:``},children:{required:!0,tsType:{name:`ReactNode`},description:``},classname:{required:!1,tsType:{name:`string`},description:``}}}})))()}var s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{o(),s=n(),c={title:`Core/Scaffold`,component:a,parameters:{layout:`fullscreen`},tags:[`autodocs`],argTypes:{leftSideBar:{control:!1},children:{control:!1}},decorators:[e=>(0,s.jsx)(`div`,{style:{height:`90vh`,width:`90vw`,margin:`5px`},children:(0,s.jsx)(e,{})})]},l={args:{leftSideBar:(0,s.jsx)(`p`,{children:`sideBar`}),children:(0,s.jsx)(`p`,{children:`Main Div`}),rightSideBar:(0,s.jsx)(`p`,{children:`rightSide bar`})}},u={args:{children:(0,s.jsx)(`p`,{children:`Main Div`})}},d={args:{leftSideBar:(0,s.jsx)(`p`,{children:`sideBar`}),children:(0,s.jsx)(`p`,{children:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum?`}),rightSideBar:(0,s.jsx)(`p`,{children:`rightSide bar`})}},f={args:{children:(0,s.jsx)(`p`,{children:`sideBar`}),leftSideBar:(0,s.jsx)(`p`,{children:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum?`}),rightSideBar:(0,s.jsx)(`p`,{children:`rightSide bar`})}},p={args:{children:(0,s.jsx)(`p`,{children:`sideBar`}),rightSideBar:(0,s.jsx)(`p`,{children:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum?`}),leftSideBar:(0,s.jsx)(`p`,{children:`rightSide bar`})}},m=[`Default`,`Onlychildren`,`BigLoremMain`,`BigLoremLeft`,`BigLoremRight`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "leftSideBar": <p>sideBar</p>,
    "children": <p>Main Div</p>,
    "rightSideBar": <p>rightSide bar</p>
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "children": <p>Main Div</p>
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "leftSideBar": <p>sideBar</p>,
    "children": <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      
      </p>,
    "rightSideBar": <p>rightSide bar</p>
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "children": <p>sideBar</p>,
    "leftSideBar": <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      
      </p>,
    "rightSideBar": <p>rightSide bar</p>
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "children": <p>sideBar</p>,
    "rightSideBar": <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      
      </p>,
    "leftSideBar": <p>rightSide bar</p>
  }
}`,...p.parameters?.docs?.source}}}})))()}h();export{f as BigLoremLeft,d as BigLoremMain,p as BigLoremRight,l as Default,u as Onlychildren,m as __namedExportsOrder,c as default};