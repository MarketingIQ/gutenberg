"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[2806],{"./packages/components/src/menu-group/index.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),_wordpress_element__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/index.js"),_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/compose/build-module/hooks/use-instance-id/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function MenuGroup(props){const{children:children,className:className="",label:label,hideSeparator:hideSeparator}=props,instanceId=(0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.Z)(MenuGroup);if(!_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.Children.count(children))return null;const labelId=`components-menu-group-label-${instanceId}`,classNames=classnames__WEBPACK_IMPORTED_MODULE_0___default()(className,"components-menu-group",{"has-hidden-separator":hideSeparator});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:classNames,children:[label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"components-menu-group__label",id:labelId,"aria-hidden":"true",children:label}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{role:"group","aria-labelledby":label?labelId:void 0,children:children})]})}MenuGroup.displayName="MenuGroup",__webpack_exports__.Z=MenuGroup;try{MenuGroup.displayName="MenuGroup",MenuGroup.__docgenInfo={description:"`MenuGroup` wraps a series of related `MenuItem` components into a common\nsection.\n\n```jsx\nimport { MenuGroup, MenuItem } from '@wordpress/components';\n\nconst MyMenuGroup = () => (\n  <MenuGroup label=\"Settings\">\n    <MenuItem>Setting 1</MenuItem>\n    <MenuItem>Setting 2</MenuItem>\n  </MenuGroup>\n);\n```",displayName:"MenuGroup",props:{className:{defaultValue:null,description:"A CSS `class` to give to the container element.",name:"className",required:!1,type:{name:"string"}},hideSeparator:{defaultValue:null,description:"Hide the top border on the container.",name:"hideSeparator",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"Text to be displayed as the menu group header.",name:"label",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The children elements.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/menu-group/index.tsx#MenuGroup"]={docgenInfo:MenuGroup.__docgenInfo,name:"MenuGroup",path:"packages/components/src/menu-group/index.tsx#MenuGroup"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/menu-item/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),_wordpress_element__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),_shortcut__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/src/shortcut/index.tsx"),_button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/src/button/index.tsx"),_icon__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/components/src/icon/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function MenuItem(props,ref){let{children:children,info:info,className:className,icon:icon,iconPosition:iconPosition="right",shortcut:shortcut,isSelected:isSelected,role:role="menuitem",suffix:suffix,...buttonProps}=props;return className=classnames__WEBPACK_IMPORTED_MODULE_0___default()("components-menu-item__button",className),info&&(children=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span",{className:"components-menu-item__info-wrapper",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:"components-menu-item__item",children:children}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:"components-menu-item__info",children:info})]})),icon&&"string"!=typeof icon&&(icon=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.cloneElement)(icon,{className:classnames__WEBPACK_IMPORTED_MODULE_0___default()("components-menu-items__item-icon",{"has-icon-right":"right"===iconPosition})})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_button__WEBPACK_IMPORTED_MODULE_3__.ZP,{ref:ref,"aria-checked":"menuitemcheckbox"===role||"menuitemradio"===role?isSelected:void 0,role:role,icon:"left"===iconPosition?icon:void 0,className:className,...buttonProps,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:"components-menu-item__item",children:children}),!suffix&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_shortcut__WEBPACK_IMPORTED_MODULE_4__.Z,{className:"components-menu-item__shortcut",shortcut:shortcut}),!suffix&&icon&&"right"===iconPosition&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_icon__WEBPACK_IMPORTED_MODULE_5__.Z,{icon:icon}),suffix]})}MenuItem.displayName="MenuItem",MenuItem.__docgenInfo={description:"",methods:[],displayName:"MenuItem"},__webpack_exports__.Z=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(MenuItem),"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/menu-item/index.js"]={name:"MenuItem",docgenInfo:MenuItem.__docgenInfo,path:"packages/components/src/menu-item/index.js"})},"./packages/components/src/ui/context/constants.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{cT:function(){return COMPONENT_NAMESPACE},_3:function(){return CONNECTED_NAMESPACE},rE:function(){return CONNECT_STATIC_NAMESPACE}});const COMPONENT_NAMESPACE="data-wp-component",CONNECTED_NAMESPACE="data-wp-c16t",CONNECT_STATIC_NAMESPACE="__contextSystemKey__"},"./packages/components/src/ui/context/context-connect.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Iq:function(){return contextConnect},H:function(){return hasConnectNamespace}});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_constants__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/ui/context/constants.js"),_get_styled_class_name_from_key__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/src/ui/context/get-styled-class-name-from-key.ts"),process=__webpack_require__("./node_modules/process/browser.js");function contextConnect(Component,namespace){return _contextConnect(Component,namespace,{forwardsRef:!0})}function _contextConnect(Component,namespace,options){const WrappedComponent=null!=options&&options.forwardsRef?(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(Component):Component;void 0===namespace&&void 0!==process&&process.env;let mergedNamespace=WrappedComponent[_constants__WEBPACK_IMPORTED_MODULE_1__.rE]||[namespace];return Array.isArray(namespace)&&(mergedNamespace=[...mergedNamespace,...namespace]),"string"==typeof namespace&&(mergedNamespace=[...mergedNamespace,namespace]),Object.assign(WrappedComponent,{[_constants__WEBPACK_IMPORTED_MODULE_1__.rE]:[...new Set(mergedNamespace)],displayName:namespace,selector:`.${(0,_get_styled_class_name_from_key__WEBPACK_IMPORTED_MODULE_2__.l)(namespace)}`})}function getConnectNamespace(Component){if(!Component)return[];let namespaces=[];return Component[_constants__WEBPACK_IMPORTED_MODULE_1__.rE]&&(namespaces=Component[_constants__WEBPACK_IMPORTED_MODULE_1__.rE]),Component.type&&Component.type[_constants__WEBPACK_IMPORTED_MODULE_1__.rE]&&(namespaces=Component.type[_constants__WEBPACK_IMPORTED_MODULE_1__.rE]),namespaces}function hasConnectNamespace(Component,match){return!!Component&&("string"==typeof match?getConnectNamespace(Component).includes(match):!!Array.isArray(match)&&match.some((result=>getConnectNamespace(Component).includes(result))))}},"./packages/components/src/ui/context/context-system-provider.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{eb:function(){return useComponentsContext},G8:function(){return ContextSystemProvider}});var deepmerge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/components/node_modules/deepmerge/dist/cjs.js"),deepmerge__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_0__),fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/fast-deep-equal/es6/index.js"),fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_1__),is_plain_object__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/is-plain-object/dist/is-plain-object.mjs"),_wordpress_element__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/index.js"),_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/src/utils/hooks/use-update-effect.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js"),process=__webpack_require__("./node_modules/process/browser.js");const ComponentsContext=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createContext)({}),useComponentsContext=()=>(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useContext)(ComponentsContext);const BaseContextSystemProvider=_ref2=>{let{children:children,value:value}=_ref2;const contextValue=function useContextSystemBridge(_ref){let{value:value}=_ref;const parentContext=useComponentsContext(),valueRef=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useRef)(value);return(0,_utils__WEBPACK_IMPORTED_MODULE_4__.Z)((()=>{fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_1___default()(valueRef.current,value)&&valueRef.current!==value&&void 0!==process&&process.env}),[value]),(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useMemo)((()=>deepmerge__WEBPACK_IMPORTED_MODULE_0___default()(null!=parentContext?parentContext:{},null!=value?value:{},{isMergeableObject:is_plain_object__WEBPACK_IMPORTED_MODULE_5__.P})),[parentContext,value])}({value:value});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ComponentsContext.Provider,{value:contextValue,children:children})};BaseContextSystemProvider.displayName="BaseContextSystemProvider";const ContextSystemProvider=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.memo)(BaseContextSystemProvider);BaseContextSystemProvider.__docgenInfo={description:"A Provider component that can modify props for connected components within\nthe Context system.\n\n@example\n```jsx\n<ContextSystemProvider value={{ Button: { size: 'small' }}}>\n  <Button>...</Button>\n</ContextSystemProvider>\n```\n\n@template {Record<string, any>} T\n@param {Object}                    options\n@param {import('react').ReactNode} options.children Children to render.\n@param {T}                         options.value    Props to render into connected components.\n@return {JSX.Element} A Provider wrapped component.",methods:[],displayName:"BaseContextSystemProvider"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/ui/context/context-system-provider.js"]={name:"BaseContextSystemProvider",docgenInfo:BaseContextSystemProvider.__docgenInfo,path:"packages/components/src/ui/context/context-system-provider.js"})},"./packages/components/src/ui/context/get-styled-class-name-from-key.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{l:function(){return getStyledClassNameFromKey}});var change_case__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/param-case/dist.es2015/index.js"),memize__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/memize/index.js");const getStyledClassNameFromKey=__webpack_require__.n(memize__WEBPACK_IMPORTED_MODULE_0__)()((function getStyledClassName(namespace){return`components-${(0,change_case__WEBPACK_IMPORTED_MODULE_1__.o)(namespace)}`}))},"./packages/components/src/ui/context/use-context-system.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{y:function(){return useContextSystem}});var context_system_provider=__webpack_require__("./packages/components/src/ui/context/context-system-provider.js"),constants=__webpack_require__("./packages/components/src/ui/context/constants.js");var get_styled_class_name_from_key=__webpack_require__("./packages/components/src/ui/context/get-styled-class-name-from-key.ts"),use_cx=__webpack_require__("./packages/components/src/utils/hooks/use-cx.ts"),process=__webpack_require__("./node_modules/process/browser.js");function useContextSystem(props,namespace){const contextSystemProps=(0,context_system_provider.eb)();void 0===namespace&&void 0!==process&&process.env;const contextProps=(null==contextSystemProps?void 0:contextSystemProps[namespace])||{},finalComponentProps={[constants._3]:!0,...(componentName=namespace,{[constants.cT]:componentName})};var componentName;const{_overrides:overrideProps,...otherContextProps}=contextProps,initialMergedProps=Object.entries(otherContextProps).length?Object.assign({},otherContextProps,props):props,classes=(0,use_cx.I)()((0,get_styled_class_name_from_key.l)(namespace),props.className),rendered="function"==typeof initialMergedProps.renderChildren?initialMergedProps.renderChildren(initialMergedProps):initialMergedProps.children;for(const key in initialMergedProps)finalComponentProps[key]=initialMergedProps[key];for(const key in overrideProps)finalComponentProps[key]=overrideProps[key];return void 0!==rendered&&(finalComponentProps.children=rendered),finalComponentProps.className=classes,finalComponentProps}},"./packages/components/src/utils/hooks/use-update-effect.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");__webpack_exports__.Z=function useUpdateEffect(effect,deps){const mounted=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{if(mounted.current)return effect();mounted.current=!0}),deps)}},"./packages/components/src/view/component.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){const View=(0,__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js").Z)("div",{target:"e19lxcc00"})("");View.selector=".components-view",View.displayName="View",__webpack_exports__.Z=View;try{View.displayName="View",View.__docgenInfo={description:"`View` is a core component that renders everything in the library.\nIt is the principle component in the entire library.",displayName:"View",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/view/component.tsx#View"]={docgenInfo:View.__docgenInfo,name:"View",path:"packages/components/src/view/component.tsx#View"})}catch(__react_docgen_typescript_loader_error){}},"./packages/icons/build-module/library/check.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/primitives/build-module/svg/index.js");const check=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.y$,{d:"M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"}));__webpack_exports__.Z=check},"./packages/components/src/menu-items-choice/stories/index.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},default:function(){return stories}});var react=__webpack_require__("./node_modules/react/index.js"),check=__webpack_require__("./packages/icons/build-module/library/check.js"),menu_item=__webpack_require__("./packages/components/src/menu-item/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const noop=()=>{};function MenuItemsChoice(_ref){let{choices:choices=[],onHover:onHover=noop,onSelect:onSelect,value:value}=_ref;return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:choices.map((item=>{const isSelected=value===item.value;return(0,jsx_runtime.jsx)(menu_item.Z,{role:"menuitemradio",icon:isSelected&&check.Z,info:item.info,isSelected:isSelected,shortcut:item.shortcut,className:"components-menu-items-choice",onClick:()=>{isSelected||onSelect(item.value)},onMouseEnter:()=>onHover(item.value),onMouseLeave:()=>onHover(null),"aria-label":item["aria-label"],children:item.label},item.value)}))})}var menu_items_choice=MenuItemsChoice;try{MenuItemsChoice.displayName="MenuItemsChoice",MenuItemsChoice.__docgenInfo={description:"`MenuItemsChoice` functions similarly to a set of `MenuItem`s, but allows the user to select one option from a set of multiple choices.\n\n\n```jsx\nimport { MenuGroup, MenuItemsChoice } from '@wordpress/components';\nimport { useState } from '@wordpress/element';\n\nconst MyMenuItemsChoice = () => {\n\tconst [ mode, setMode ] = useState( 'visual' );\n\tconst choices = [\n\t\t{\n\t\t\tvalue: 'visual',\n\t\t\tlabel: 'Visual editor',\n\t\t},\n\t\t{\n\t\t\tvalue: 'text',\n\t\t\tlabel: 'Code editor',\n\t\t},\n\t];\n\n\treturn (\n\t\t<MenuGroup label=\"Editor\">\n\t\t\t<MenuItemsChoice\n\t\t\t\tchoices={ choices }\n\t\t\t\tvalue={ mode }\n\t\t\t\tonSelect={ ( newMode ) => setMode( newMode ) }\n\t\t\t/>\n\t\t</MenuGroup>\n\t);\n};\n```",displayName:"MenuItemsChoice",props:{choices:{defaultValue:{value:"[]"},description:"Array of choices.",name:"choices",required:!1,type:{name:"readonly MenuItemChoice[]"}},value:{defaultValue:null,description:"Value of currently selected choice (should match a `value` property\nfrom a choice in `choices`).",name:"value",required:!0,type:{name:"string"}},onSelect:{defaultValue:null,description:"Callback function to be called with the selected choice when user\nselects a new choice.",name:"onSelect",required:!0,type:{name:"(value: string) => void"}},onHover:{defaultValue:{value:"() => {}"},description:"Callback function to be called with a choice when user\nhovers over a new choice (will be empty on mouse leave).",name:"onHover",required:!1,type:{name:"(value: string) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/menu-items-choice/index.tsx#MenuItemsChoice"]={docgenInfo:MenuItemsChoice.__docgenInfo,name:"MenuItemsChoice",path:"packages/components/src/menu-items-choice/index.tsx#MenuItemsChoice"})}catch(__react_docgen_typescript_loader_error){}var menu_group=__webpack_require__("./packages/components/src/menu-group/index.tsx");var stories={component:menu_items_choice,title:"Components/MenuItemsChoice",argTypes:{onHover:{action:"onHover"},onSelect:{action:"onSelect"},value:{control:{type:null}}},parameters:{sourceLink:"packages/components/src/menu-items-choice",controls:{expanded:!0},docs:{source:{state:"open"}}}};const Template=_ref=>{var _choices$0$value,_choices$;let{onHover:onHover,onSelect:onSelect,choices:choices}=_ref;const[choice,setChoice]=(0,react.useState)(null!==(_choices$0$value=null===(_choices$=choices[0])||void 0===_choices$?void 0:_choices$.value)&&void 0!==_choices$0$value?_choices$0$value:"");return(0,jsx_runtime.jsx)(menu_group.Z,{label:"Editor",children:(0,jsx_runtime.jsx)(menu_items_choice,{choices:choices,value:choice,onSelect:function(){onSelect(...arguments),setChoice(...arguments)},onHover:onHover})})};Template.displayName="Template";const Default=Template.bind({});Default.args={choices:[{value:"arbitrary-choice-1",label:"Arbitrary Label #1",info:"Arbitrary Explanatory 1"},{value:"arbitrary-choice-2",label:"Arbitrary Label #2",info:"Arbitrary Explanatory 2"},{value:"arbitrary-choice-3",label:"Arbitrary Label #3",info:"Arbitrary Explanatory 3"}],value:"arbitrary-choice-1"};try{ComponentMeta.displayName="ComponentMeta",ComponentMeta.__docgenInfo={description:"For the common case where a component's stories are simple components that receives args as props:\n\n```tsx\nexport default { ... } as ComponentMeta<typeof Button>;\n```",displayName:"ComponentMeta",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/menu-items-choice/stories/index.tsx#ComponentMeta"]={docgenInfo:ComponentMeta.__docgenInfo,name:"ComponentMeta",path:"packages/components/src/menu-items-choice/stories/index.tsx#ComponentMeta"})}catch(__react_docgen_typescript_loader_error){}}}]);