import{S as s,i as a,s as l,E as c,f as e,w as n,o,x as t,t as i,d as r,G as p,J as u,h as d,c as h,b as m,e as f,R as $,L as v,N as y,l as k,_ as C}from"./client.a92c95ae.js";import{c as w}from"./classes.2453fa25.js";const q=s=>({}),b=s=>({closeCallback:s[3]}),x=s=>({}),E=s=>({closeCallback:s[3]});function j(s){let a,l,c;const n=s[5].default,t=u(n,s,s[4],b);return{c(){a=d("div"),t&&t.c(),this.h()},l(s){a=h(s,"DIV",{class:!0});var l=m(a);t&&t.l(l),l.forEach(r),this.h()},h(){f(a,"class",l=$(w("modal-overlay",s[1]))+" svelte-ln570q"),v(a,"open",s[0])},m(s,l){e(s,a,l),t&&t.m(a,null),c=!0},p(s,e){t&&t.p&&(!c||16&e)&&y(t,n,s,s[4],e,q,b),(!c||2&e&&l!==(l=$(w("modal-overlay",s[1]))+" svelte-ln570q"))&&f(a,"class",l),3&e&&v(a,"open",s[0])},i(s){c||(i(t,s),c=!0)},o(s){o(t,s),c=!1},d(s){s&&r(a),t&&t.d(s)}}}function D(s){let a,l,c,n,t;const p=s[5].default,q=u(p,s,s[4],E);return{c(){a=d("div"),q&&q.c(),this.h()},l(s){a=h(s,"DIV",{class:!0});var l=m(a);q&&q.l(l),l.forEach(r),this.h()},h(){f(a,"class",l=$(w("modal-overlay",s[1]))+" svelte-ln570q"),v(a,"open",s[0])},m(l,o){e(l,a,o),q&&q.m(a,null),c=!0,n||(t=k(a,"click",C(s[3])),n=!0)},p(s,e){q&&q.p&&(!c||16&e)&&y(q,p,s,s[4],e,x,E),(!c||2&e&&l!==(l=$(w("modal-overlay",s[1]))+" svelte-ln570q"))&&f(a,"class",l),3&e&&v(a,"open",s[0])},i(s){c||(i(q,s),c=!0)},o(s){o(q,s),c=!1},d(s){s&&r(a),q&&q.d(s),n=!1,t()}}}function I(s){let a,l,p,u;const d=[D,j],h=[];function m(s,a){return s[2]?1:0}return a=m(s),l=h[a]=d[a](s),{c(){l.c(),p=c()},l(s){l.l(s),p=c()},m(s,l){h[a].m(s,l),e(s,p,l),u=!0},p(s,[c]){let e=a;a=m(s),a===e?h[a].p(s,c):(n(),o(h[e],1,1,(()=>{h[e]=null})),t(),l=h[a],l?l.p(s,c):(l=h[a]=d[a](s),l.c()),i(l,1),l.m(p.parentNode,p))},i(s){u||(i(l),u=!0)},o(s){o(l),u=!1},d(s){h[a].d(s),s&&r(p)}}}function N(s,a,l){let{$$slots:c={},$$scope:e}=a,{class:n=null}=a,{open:o=!1}=a,{noClickaway:t=!1}=a;const i=p();return s.$$set=s=>{"class"in s&&l(1,n=s.class),"open"in s&&l(0,o=s.open),"noClickaway"in s&&l(2,t=s.noClickaway),"$$scope"in s&&l(4,e=s.$$scope)},s.$$.update=()=>{1&s.$$.dirty&&i("change",{value:o})},[o,n,t,function(){l(0,o=!1)},e,c]}class V extends s{constructor(s){super(),a(this,s,N,I,l,{class:1,open:0,noClickaway:2})}}export{V as M};
