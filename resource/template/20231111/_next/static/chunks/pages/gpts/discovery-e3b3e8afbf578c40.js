(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3415],{72201:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=t(24421),i=t(28734),s=t(51516);function a(e){(0,s.Z)(1,arguments);var n=(0,i.Z)(e);return n.setHours(0,0,0,0),n}function o(e,n){(0,s.Z)(2,arguments);var t=a(e),i=a(n);return Math.round((t.getTime()-(0,r.Z)(t)-(i.getTime()-(0,r.Z)(i)))/864e5)}},26430:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(28734),i=t(51516);function s(e,n){return(0,i.Z)(2,arguments),(0,r.Z)(e).getTime()-(0,r.Z)(n).getTime()}},84913:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(28734),i=t(51516);function s(){return function(e){(0,i.Z)(1,arguments);var n=(0,r.Z)(e);return n.setHours(23,59,59,999),n}(Date.now())}},44043:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(28734),i=t(51516);function s(e){return(0,i.Z)(1,arguments),(0,r.Z)(e).getMonth()}},82187:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(28734),i=t(51516);function s(e){return(0,i.Z)(1,arguments),(0,r.Z)(e).getFullYear()}},69262:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(28734),i=t(51516);function s(e){return(0,i.Z)(1,arguments),function(e,n){(0,i.Z)(2,arguments);var t=(0,r.Z)(e),s=(0,r.Z)(n);return t.getFullYear()===s.getFullYear()}(e,Date.now())}},73429:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/gpts/discovery",function(){return t(91223)}])},91223:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSP:function(){return es},default:function(){return ea}});var r,i,s,a,o=t(35250),c=t(21722),l=t(39324),u=t(10064),d=t(38104),m=t(48133),f=t(4337);t(88903);var h=t(15635),x=t(418),g=t(23211),v=t(21950),p=t(35265),j=t(30769),y=t(10943),b=t(80275),N=t(73960);t(25952);var k=t(15912),w=t(18481),P=t(47428),Z=t(19841),T=t(73040),_=t.n(T),C=t(10721),z=t(70079),M=t(21389),A=t(42325),R=t(81547);function S(){var e=(0,f._)(["flex h-[42px] w-[42px] flex-shrink-0 items-center justify-center rounded-full border border-dashed\n",""]);return S=function(){return e},e}function F(e){var n,t,r=e.gizmoTemplate,i=null===(n=r.vanity_metrics)||void 0===n?void 0:n.num_conversations,s=null!==(t=r.share_recipient)&&void 0!==t?t:b.Zz.Private;return(0,o.jsxs)("div",{className:"flex gap-6",children:[s===b.Zz.Private&&(0,o.jsx)(p.LX,{className:"icon-sm"}),r.share_recipient!==b.Zz.Private&&null!=i?(0,o.jsxs)("div",{className:"flex items-center gap-1",children:[(0,o.jsx)(p.M4,{className:"icon-sm"}),(0,o.jsx)("div",{children:(0,N.Pk)(i)})]}):void 0]})}function G(e){var n,t,r=e.gizmoTemplate,i=e.canRemoveRecent,s=(0,C.useRouter)(),a=(0,N.XX)(r),c=(0,v.Sg)(r),l=!!(null===(n=r.config.tags)||void 0===n?void 0:n.includes(b.U9.FirstParty));return(0,o.jsx)(D,{href:c?(0,w.AA)(r.id):(0,v.m_)(r),icon:(0,o.jsx)(x.Z,{isFirstParty:l,src:null==r?void 0:r.profile_pic_permalink,className:"h-[42px] w-[42px] flex-shrink-0"}),title:r.name||g.z,isDraft:c,description:null!==(t=r.description)&&void 0!==t?t:"",byline:a?(0,o.jsx)(F,{gizmoTemplate:r}):(0,o.jsx)(A.ZP,{gizmo:r}),buttons:(0,o.jsxs)(o.Fragment,{children:[a&&(0,o.jsx)(m.z,{color:"neutral",onClick:function(){s.push((0,w.AA)(r.id),void 0,{shallow:!0})},children:"Edit"}),(0,o.jsx)(L,{gizmoTemplate:r,isOwner:a,canRemoveRecent:i})]})})}function I(){return(0,o.jsx)("span",{className:"rounded-full bg-blue-100 px-1.5 py-0.5 text-[10px] font-medium text-blue-600",children:"Beta"})}(r=s||(s={})).Grid2="grid-2",r.Grid2Image="grid-2-image",r.Grid1="grid-1",r.Grid1Image="grid-1-image",(i=a||(a={})).Enabled="enabled",i.ComingSoon="coming-soon";var E=M.Z.div(S(),function(e){return e.$disabled?"":"border-black bg-white dark:border-gray-500 dark:bg-gray-700"});function O(e){var n=e.type,t=(0,w.J8)(),r=n===a.ComingSoon;return(0,o.jsx)(h.E,{disabled:!r,label:"GPT creation will be available in the coming weeks",children:(0,o.jsx)(D,{href:t,disabled:r,icon:(0,o.jsx)(E,{$disabled:r,children:(0,o.jsx)(p.Ro,{className:"".concat(r?"opacity-30":"")})}),title:(0,o.jsxs)("div",{className:"flex items-center gap-1",children:["Create a GPT ",(0,o.jsx)(I,{})]}),description:"Customize a version of ChatGPT for a specific purpose",byline:r?(0,o.jsx)("div",{className:"flex items-center justify-end",children:(0,o.jsx)("div",{className:"flex items-center",children:"Coming soon"})}):void 0})})}function D(e){var n=e.href,t=e.icon,r=e.title,i=e.isDraft,s=e.description,a=e.byline,c=e.buttons,l=e.disabled,u=(0,Z.default)("flex items-center border-t border-gray-100 px-2 py-4",l?"":"hover:bg-gray-50","dark:border-gray-700 dark:hover:bg-transparent"),d=(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:"flex w-3/5 items-center",children:[t,(0,o.jsxs)("div",{className:(0,Z.default)("grow pl-4 pr-9 leading-tight",l?"opacity-50":"hover:cursor-pointer"),children:[(0,o.jsxs)("div",{className:"flex items-center gap-1",children:[(0,o.jsx)("span",{className:"font-semibold",children:r}),void 0!==i&&i&&(0,o.jsx)(h.u,{label:"Draft",className:"flex justify-center",side:"top",children:(0,o.jsx)("div",{className:"m-1.5 inline-block h-1.5 w-1.5 rounded-full bg-gray-200 dark:bg-gray-800"})})]}),(0,o.jsx)("div",{className:"overflow-hidden text-ellipsis text-sm line-clamp-2",children:s})]})]}),null!=a&&(0,o.jsx)("div",{className:"flex-1 text-ellipsis text-sm text-gray-500",children:a}),null!=c&&(0,o.jsx)("div",{onClick:function(e){e.preventDefault()},className:"flex h-9 shrink-0 justify-end gap-2 font-medium md:w-[100px]",children:c})]});return l?(0,o.jsx)("span",{className:u,children:d}):(0,o.jsx)(_(),{className:u,href:n,shallow:!0,children:d})}function L(e){var n=e.gizmoTemplate,t=e.isOwner,r=e.canRemoveRecent,i=(0,u._)((0,z.useState)(!1),2),s=i[0],a=i[1];return t||r?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(P.fC,{children:[(0,o.jsx)(P.xz,{asChild:!0,children:(0,o.jsx)(m.z,{color:"neutral",children:(0,o.jsx)(p.Yr,{className:"icon-md"})})}),(0,o.jsx)(P.Uv,{children:(0,o.jsxs)(P.VY,{className:"min-w-[180px] max-w-xs rounded-lg border border-gray-100 bg-token-surface-primary py-1.5 shadow-lg dark:border-gray-700",side:"top",align:"end",sideOffset:6,onClick:function(e){e.preventDefault()},children:[t?(0,o.jsxs)(y.UA,{color:"danger",onClick:function(){a(!0)},children:[(0,o.jsx)(p.a_,{className:"icon-md"}),"Delete GPT"]}):(0,o.jsx)(o.Fragment,{}),r&&(0,o.jsx)(y.UA,{onClick:function(){j.U.removeFromRecent(n.id)},children:"Remove from Recent"})]})})]}),s&&(0,o.jsx)(k.h,{children:(0,o.jsx)(R.b,{gizmoTemplate:n,onSuccess:function(){a(!1)},onClose:function(){a(!1)}})})]}):null}var B=t(65223),U=t(23234);t(7171);var q=t(42798),Y=t(17944),H=t(8679),J=t(82685),X=t(32004);function K(){var e,n=(0,Y.$T)(),t=(0,C.useRouter)(),r=(0,v.z5)(),i=r.data,s=r.isLoading,c=(0,U.Jq)();if((0,H.yx)({resetThreadAction:function(){t.push("/")}}),n)return null;var l=null!==(e=null==i?void 0:i.cuts.map(function(e){return{cutId:e.info.id,title:e.info.title,items:e.list.items,cursor:e.list.cursor}}))&&void 0!==e?e:[];return l.some(function(e){return"mine"===e.cutId})||l.unshift({cutId:"mine",title:"My GPTs",items:[],cursor:null}),(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("div",{className:"mx-auto max-w-3xl px-4 py-12",children:s?(0,o.jsx)("div",{className:"flex justify-center",children:(0,o.jsx)(q.Z,{})}):l.map(function(e){return(0,o.jsx)(Q,{cutId:e.cutId,title:e.title,items:e.items,cursor:e.cursor,createRowType:"mine"==e.cutId?c?a.Enabled:a.ComingSoon:void 0,canRemoveRecent:"recent"===e.cutId},e.cutId)})})})}function $(e){var n,t,r=e.cutId,i=e.cursor,s=e.fetchOnMount,a=(0,u._)((0,z.useState)(s),2),f=a[0],h=a[1],x=(0,J.N)({queryKey:["gizmos","discovery",{cutId:r}],queryFn:(n=(0,c._)(function(e){var n;return(0,d.Jh)(this,function(t){return n=e.pageParam,[2,j.U.getGizmoDiscoveryCut(r,{cursor:n,limit:8})]})}),function(e){return n.apply(this,arguments)}),initialPageParam:i,getNextPageParam:function(e){return null!==(t=e.list.cursor)&&void 0!==t?t:void 0},enabled:f}),g=x.data,v=x.hasNextPage,p=x.fetchNextPage,y=x.isLoading;return(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{children:null==g?void 0:g.pages.flatMap(function(e){return e.list.items.map(function(e){var n=(0,B.i)(e.resource);return(0,o.jsx)(G,{gizmoTemplate:n},n.id)})})}),!f||v||y?(0,o.jsx)(m.z,{color:"neutral",onClick:function(){f?p():h(!0)},loading:y,className:"w-full",children:(0,o.jsx)(X.Z,(0,l._)({},W.discoveryLoadMore))}):null]})}function Q(e){var n=e.cutId,t=e.title,r=e.items,i=e.cursor,s=e.canRemoveRecent,a=e.createRowType;return(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{className:"text-2xl font-bold",children:t}),(0,o.jsxs)("div",{className:"mb-10 mt-4",children:[null!=a&&(0,o.jsx)(O,{type:a}),r.map(function(e){var n=(0,B.i)(e.resource);return(0,o.jsx)(G,{gizmoTemplate:n,canRemoveRecent:s},n.id)}),null!=i?(0,o.jsx)($,{cutId:n,cursor:i,fetchOnMount:0===r.length}):(0,o.jsx)("div",{className:"h-px bg-gray-100 dark:bg-gray-700"})]})]})}var W=(0,t(94968).vU)({discoveryEmpty:{id:"gizmo.discovery.empty",defaultMessage:"Nothing to discover",description:"Label for empty discovery page"},discoveryNoResultsSearch:{id:"gizmo.discovery.search.empty",defaultMessage:"No results found",description:"Label for no search results"},discoverySearch:{id:"gizmo.discovery.search",defaultMessage:"Search",description:"Placeholder for search input"},discoveryLoadMore:{id:"gizmo.discovery.loadMore",defaultMessage:"Load more",description:"Button label for loading more GPTs"}}),V=t(95413),ee=t(59517),en=t(97218);function et(e){var n=e.children,t=(0,C.useRouter)(),r=(0,Y.$T)(),i=(0,U.te)(),s=(0,U.Ml)(),a=(0,U.Og)(),c=(0,Y.WY)(),l=(0,Y.ec)(Y.F_.isBusinessWorkspace),u=(0,ee.tS)(function(e){return{setShowAccountPaymentModal:e.setShowAccountPaymentModal}}).setShowAccountPaymentModal;return((0,en.f)(r||!1!==i),void 0===a)?null:s&&!0===a?(0,o.jsxs)("div",{children:[n,(0,o.jsx)("div",{className:"fixed bottom-3 right-3",children:(0,o.jsx)(V.Z,{})})]}):!i&&l?(0,o.jsx)(er,{button:(0,o.jsx)(m.z,{onClick:function(){return t.push("/")},children:"Continue to ChatGPT"}),children:"GPTs are gradually rolling out, check back later"}):i&&!c?(0,o.jsx)(er,{button:(0,o.jsx)(m.z,{onClick:function(){return u(!0)},children:"Upgrade to ChatGPT Plus"}),children:"GPTs are gradually rolling out to Plus users"}):null}function er(e){var n=e.children,t=e.button;return(0,o.jsx)("div",{className:"flex h-full w-full items-center justify-center",children:(0,o.jsxs)("div",{className:"flex max-w-sm flex-col gap-4 p-6 text-center",children:[(0,o.jsx)("h2",{children:n}),(0,o.jsx)("div",{className:"m-auto",children:t})]})})}var ei=t(77527),es=!0;function ea(){return(0,o.jsx)(ei.Z,{children:(0,o.jsx)(et,{children:(0,o.jsx)(K,{})})})}},95413:function(e,n,t){"use strict";t.d(n,{Z:function(){return b}});var r=t(39324),i=t(4337),s=t(35250),a=t(7813),o=t(62682),c=t(55548),l=t(17944),u=t(54636),d=t(42780),m=t(19841),f=t(1454),h=t(32004),x=t(94968),g=t(21389),v=t(31731);function p(){var e=(0,i._)(["flex px-3 min-h-[44px] py-1 items-center gap-3 transition-colors duration-200 dark:text-white cursor-pointer text-sm"]);return p=function(){return e},e}var j=g.Z.a(p());function y(e){var n=e.onClick,t=e.href,r=e.target,i=e.children;return(0,s.jsx)(a.v.Item,{children:function(e){var a=e.active;return(0,s.jsx)(j,{as:void 0!==t?"a":"button",onClick:n,href:t,target:r,className:(0,m.default)(a?"bg-gray-100 dark:bg-gray-800":"hover:bg-gray-100 dark:hover:bg-gray-800"),children:i})}})}function b(){return(0,l.hz)().has(o.rk)?(0,s.jsxs)(a.v,{as:"div",className:"group relative",children:[(0,s.jsx)(a.v.Button,{className:"flex items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-gray-600 dark:border-white/10 dark:bg-white/10 dark:text-gray-200",children:(0,s.jsx)("div",{className:"flex h-6 w-6 items-center justify-center text-xs",children:"?"})}),(0,s.jsx)(v.m,{children:(0,s.jsxs)(a.v.Items,{className:"absolute bottom-full right-0 z-20 mb-2 w-full min-w-[175px] overflow-hidden rounded-md bg-gray-50 pb-1.5 pt-1 outline-none dark:bg-gray-950",children:[(0,s.jsxs)(y,{as:"a",href:"https://help.openai.com/en/collections/3742473-chatgpt",target:"_blank",onClick:function(){u.A.logEvent(d.M.clickFaqLink)},children:[(0,s.jsx)(f.AlO,{className:"icon-sm"}),(0,s.jsx)("span",{className:"text-xs",children:(0,s.jsx)(h.Z,(0,r._)({},N.helpAndFaq))})]}),(0,s.jsxs)(y,{as:"a",href:"https://help.openai.com/en/articles/6825453-chatgpt-release-notes",target:"_blank",children:[(0,s.jsx)(f.AlO,{className:"icon-sm"}),(0,s.jsx)("span",{className:"text-xs",children:(0,s.jsx)(h.Z,(0,r._)({},N.releaseNotes))})]}),(0,s.jsxs)(y,{as:"a",href:"https://openai.com/policies",target:"_blank",onClick:function(){u.A.logEvent(d.M.clickPrivacyPolicy)},children:[(0,s.jsx)(f.AlO,{className:"icon-sm"}),(0,s.jsx)("span",{className:"text-xs",children:(0,s.jsx)(h.Z,(0,r._)({},N.termsAndPolicies))})]}),(0,s.jsxs)(y,{onClick:function(){c.vm.openModal(c.B.KeyboardActions)},children:[(0,s.jsx)(f.aCJ,{className:"icon-sm"}),(0,s.jsx)("span",{className:"text-xs",children:(0,s.jsx)(h.Z,(0,r._)({},N.keyboardShortcutsMenu))})]})]})})]}):null}var N=(0,x.vU)({helpAndFaq:{id:"thread.helpAndFaq",defaultMessage:"Help & FAQ",description:"Help & FAQ menu item"},releaseNotes:{id:"thread.releaseNotes",defaultMessage:"Release notes",description:"Release notes menu item"},termsAndPolicies:{id:"thread.termsAndPolicies",defaultMessage:"Terms & policies",description:"Terms & Policies menu item"},keyboardShortcutsMenu:{id:"thread.keyboardShortcutsMenu",defaultMessage:"Keyboard shortcuts",description:"Keyboard shortcuts menu item"}})},81547:function(e,n,t){"use strict";t.d(n,{b:function(){return u}});var r=t(21722),i=t(38104),s=t(35250),a=t(94705),o=t(7184),c=t(21950),l=t(72290);function u(e){var n,t=e.gizmoTemplate,u=e.onSuccess,d=e.onClose,m=(0,c.kb)(),f=(n=(0,r._)(function(){return(0,i.Jh)(this,function(e){switch(e.label){case 0:if((null==t?void 0:t.id)==null)return[2];e.label=1;case 1:return e.trys.push([1,3,,4]),[4,m.mutateAsync({gizmoId:t.id})];case 2:return e.sent(),u(),[3,4];case 3:return e.sent(),l.m.danger("Failed to delete gizmo. Please try again."),[3,4];case 4:return[2]}})}),function(){return n.apply(this,arguments)});return(0,s.jsx)(o.Z,{isOpen:!0,onClose:d,type:"danger",title:"Delete GPT",primaryButton:(0,s.jsx)(a.ZP.Button,{title:"Delete GPT",color:"danger",loading:m.isPending,onClick:function(){f()}}),secondaryButton:(0,s.jsx)(a.ZP.Button,{title:"Cancel",color:"neutral",onClick:d}),children:(0,s.jsx)("div",{className:"text-sm",children:"Are you sure you want to delete this GPT? This cannot be undone."})})}},77527:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var r=t(35250),i=t(40578),s=t(14957),a=t(4865),o=t(10721),c=t(41187);function l(e){var n=e.children,t=(0,o.useRouter)();return(0,r.jsx)(a.Z,{showNavigation:!0,renderMobileHeaderRightContent:null,renderSidebar:(0,r.jsxs)(s.ZP,{onNewThread:function(){t.push("/")},children:[(0,r.jsx)(c.Dy,{}),(0,r.jsx)(i.Z,{activeId:void 0,onNewThread:function(){t.push("/")}})]}),children:n})}},97218:function(e,n,t){"use strict";t.d(n,{f:function(){return o}});var r=t(18866),i=t(10721),s=t.n(i),a=t(70079);function o(e){(0,a.useEffect)(function(){e||s().replace((0,r.M5)(r.LT.NO_ACCESS),void 0,{shallow:!0})},[e])}}},function(e){e.O(0,[4603,4401,6823,7992,1522,9774,2888,179],function(){return e(e.s=73429)}),_N_E=e.O()}]);