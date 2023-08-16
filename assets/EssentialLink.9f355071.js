import{c as p,e as N,Q as K}from"./use-router-link.59f610b1.js";import{c as d,h as g,a as R}from"./render.f3285ba0.js";import{c as n,h as c,r as _,W as D,s as $,g as j,F as A,G as q,I as h,J as r,K as m,L as F,M as P,N as T}from"./index.c8a9474a.js";import{u as V,a as W}from"./use-dark.943ff361.js";var M=d({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:a}){const l=n(()=>parseInt(e.lines,10)),u=n(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(l.value===1?" ellipsis":"")),v=n(()=>e.lines!==void 0&&l.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":l.value}:null);return()=>c("div",{style:v.value,class:u.value},g(a.default))}}),y=d({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:a}){const l=n(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>c("div",{class:l.value},g(a.default))}}),O=d({name:"QItem",props:{...V,...p,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:a,emit:l}){const{proxy:{$q:u}}=j(),v=W(e,u),{hasLink:f,linkAttrs:B,linkClass:C,linkTag:L,navigateOnClick:x}=N(),s=_(null),o=_(null),b=n(()=>e.clickable===!0||f.value===!0||e.tag==="label"),i=n(()=>e.disable!==!0&&b.value===!0),I=n(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(v.value===!0?" q-item--dark":"")+(f.value===!0&&e.active===null?C.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(i.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),w=n(()=>{if(e.insetLevel===void 0)return null;const t=u.lang.rtl===!0?"Right":"Left";return{["padding"+t]:16+e.insetLevel*56+"px"}});function Q(t){i.value===!0&&(o.value!==null&&(t.qKeyEvent!==!0&&document.activeElement===s.value?o.value.focus():document.activeElement===o.value&&s.value.focus()),x(t))}function E(t){if(i.value===!0&&D(t,13)===!0){$(t),t.qKeyEvent=!0;const k=new MouseEvent("click",t);k.qKeyEvent=!0,s.value.dispatchEvent(k)}l("keyup",t)}function S(){const t=R(a.default,[]);return i.value===!0&&t.unshift(c("div",{class:"q-focus-helper",tabindex:-1,ref:o})),t}return()=>{const t={ref:s,class:I.value,style:w.value,role:"listitem",onClick:Q,onKeyup:E};return i.value===!0?(t.tabindex=e.tabindex||"0",Object.assign(t,B.value)):b.value===!0&&(t["aria-disabled"]="true"),c(L.value,t,S())}}});const H=A({__name:"EssentialLink",props:{title:{},link:{default:"#"},icon:{default:""}},setup(e){return(a,l)=>(q(),h(O,{clickable:"",tag:"a",target:"_blank",href:a.link},{default:r(()=>[a.icon?(q(),h(y,{key:0,avatar:""},{default:r(()=>[m(K,{name:a.icon},null,8,["name"])]),_:1})):F("",!0),m(y,null,{default:r(()=>[m(M,null,{default:r(()=>[P(T(a.title),1)]),_:1})]),_:1})]),_:1},8,["href"]))}});export{O as Q,H as _,y as a,M as b};