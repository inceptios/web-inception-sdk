import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{v as t}from"./iframe-Bk-sP3-0.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";var r,i,a;function o(){return(o=e((()=>{r=t(),i=n(),a=({leftSideBar:e,rightSideBar:t,mainDiv:n,defaultLeftWidht:a,defaultRightWidth:o,defaultLeftWidthPercentage:s,defaultRightWidthPercentage:c})=>{let[l,u]=(0,r.useState)(a??100),[d,f]=(0,r.useState)(o??100),p=(0,r.useRef)({isDragging:!1,side:``,startX:0,startWidth:0}),m=(0,r.useRef)(null),h=(e,t)=>{p.current={isDragging:!0,side:t,startX:e.clientX,startWidth:t===`left`?l:d},e.currentTarget.setPointerCapture(e.pointerId)},g=e=>{if(!p.current.isDragging||!m.current)return;let t=e.clientX-p.current.startX,n=m.current.offsetWidth*.35;p.current.side===`left`?u(Math.max(100,Math.min(n,p.current.startWidth+t))):f(Math.max(100,Math.min(n,p.current.startWidth-t)))},_=e=>{p.current.isDragging=!1,e.currentTarget.releasePointerCapture(e.pointerId)};return(0,i.jsx)(`div`,{className:`scaffold-div`,ref:m,children:(0,i.jsxs)(`div`,{className:`main`,children:[(0,i.jsx)(`div`,{className:`left-side-bar`,style:{width:`${s?s+`%`:l+`px`}`},children:e}),(0,i.jsx)(`div`,{className:`slider`,onPointerDown:e=>h(e,`left`),onPointerMove:g,onPointerUp:_,onPointerCancel:_,children:(0,i.jsx)(`div`,{className:`visible-slider`})}),(0,i.jsx)(`div`,{className:`main-div`,children:n}),(0,i.jsx)(`div`,{className:`slider`,onPointerDown:e=>h(e,`right`),onPointerMove:g,onPointerUp:_,onPointerCancel:_,children:(0,i.jsx)(`div`,{className:`visible-slider`})}),(0,i.jsx)(`div`,{className:`right-side-bar`,style:{width:`${c?s+`%`:d+`px`}`},children:t})]})})},a.__docgenInfo={description:``,methods:[],displayName:`Scaffold`,props:{leftSideBar:{required:!1,tsType:{name:`ReactNode`},description:``},rightSideBar:{required:!1,tsType:{name:`ReactNode`},description:``},defaultLeftWidht:{required:!1,tsType:{name:`number`},description:``},defaultRightWidth:{required:!1,tsType:{name:`number`},description:``},defaultLeftWidthPercentage:{required:!1,tsType:{name:`number`},description:``},defaultRightWidthPercentage:{required:!1,tsType:{name:`number`},description:``},mainDiv:{required:!0,tsType:{name:`ReactNode`},description:``}}}})))()}var s,c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{o(),s=n(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Core/Scaffold`,component:a,parameters:{layout:`fullscreen`},tags:[`autodocs`],argTypes:{leftSideBar:{control:!1},mainDiv:{control:!1}},decorators:[e=>(0,s.jsx)(`div`,{style:{height:`90vh`,width:`90vw`,scrollbarGutter:`auto`,margin:`5px`},children:(0,s.jsx)(e,{})})]},u={args:{leftSideBar:(0,s.jsx)(`p`,{children:`sideBar`}),mainDiv:(0,s.jsx)(`p`,{children:`Main Div`}),rightSideBar:(0,s.jsx)(`p`,{children:`rightSide bar`})}},d={args:{mainDiv:(0,s.jsx)(`p`,{children:`Main Div`})}},f={args:{leftSideBar:(0,s.jsx)(`p`,{children:`sideBar`}),mainDiv:(0,s.jsx)(`p`,{children:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum?`}),rightSideBar:(0,s.jsx)(`p`,{children:`rightSide bar`})}},p={args:{mainDiv:(0,s.jsx)(`p`,{children:`sideBar`}),leftSideBar:(0,s.jsx)(`p`,{children:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum?`}),rightSideBar:(0,s.jsx)(`p`,{children:`rightSide bar`})}},m={args:{mainDiv:(0,s.jsx)(`p`,{children:`sideBar`}),rightSideBar:(0,s.jsx)(`p`,{children:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis placeat libero sed fuga exercitationem optio error velit quia voluptatum?`}),leftSideBar:(0,s.jsx)(`p`,{children:`rightSide bar`})}},h=[`Default`,`OnlyMainDiv`,`BigLoremMain`,`BigLoremLeft`,`BigLoremRight`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "leftSideBar": <p>sideBar</p>,
    "mainDiv": <p>Main Div</p>,
    "rightSideBar": <p>rightSide bar</p>
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "mainDiv": <p>Main Div</p>
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "leftSideBar": <p>sideBar</p>,
    "mainDiv": <p>
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
    "mainDiv": <p>sideBar</p>,
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "mainDiv": <p>sideBar</p>,
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
}`,...m.parameters?.docs?.source}}}})))()}g();export{p as BigLoremLeft,f as BigLoremMain,m as BigLoremRight,u as Default,d as OnlyMainDiv,h as __namedExportsOrder,l as default};