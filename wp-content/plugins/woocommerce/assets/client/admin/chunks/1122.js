"use strict";(globalThis.webpackChunk_wcAdmin_webpackJsonp=globalThis.webpackChunk_wcAdmin_webpackJsonp||[]).push([[1122],{11122:(t,e,i)=>{i.d(e,{C:()=>x});var n=i(29728),r=i(83572),o=i(59412),a=i(20192),s=i(55954),c=i(65717),h=i(88447),u=i(88976),l=i(68831);function f(t){return(0,n.pi)((0,n.pi)({type:a.dw},t),{toJSON:function(){t.onDone,t.onError;var e,i=(0,n._T)(t,["onDone","onError"]);return(0,n.pi)((0,n.pi)({},i),{type:a.dw,src:(e=t.src,"string"==typeof e?{type:e,toString:function(){return e}}:e)})}})}var p="",d="*",v={},y=function(t){return"#"===t[0]},g=function(){function t(e,i,o,a){void 0===o&&(o="context"in e?e.context:void 0);var l,d=this;this.config=e,this._context=o,this.order=-1,this.__xstatenode=!0,this.__cache={events:void 0,relativeValue:new Map,initialStateValue:void 0,initialState:void 0,on:void 0,transitions:void 0,candidates:{},delayedTransitions:void 0},this.idMap={},this.tags=[],this.options=Object.assign({actions:{},guards:{},services:{},activities:{},delays:{}},i),this.parent=null==a?void 0:a.parent,this.key=this.config.key||(null==a?void 0:a.key)||this.config.id||"(machine)",this.machine=this.parent?this.parent.machine:this,this.path=this.parent?this.parent.path.concat(this.key):[],this.delimiter=this.config.delimiter||(this.parent?this.parent.delimiter:h.iS),this.id=this.config.id||(0,n.ev)([this.machine.key],(0,n.CR)(this.path),!1).join(this.delimiter),this.version=this.parent?this.parent.version:this.config.version,this.type=this.config.type||(this.config.parallel?"parallel":this.config.states&&Object.keys(this.config.states).length?"compound":this.config.history?"history":"atomic"),this.schema=this.parent?this.machine.schema:null!==(l=this.config.schema)&&void 0!==l?l:{},this.description=this.config.description,c.M||(0,r.ZK)(!("parallel"in this.config),'The "parallel" property is deprecated and will be removed in version 4.1. '.concat(this.config.parallel?"Replace with `type: 'parallel'`":"Use `type: '".concat(this.type,"'`")," in the config for state node '").concat(this.id,"' instead.")),this.initial=this.config.initial,this.states=this.config.states?(0,r.Q8)(this.config.states,(function(e,i){var r,o=new t(e,{},void 0,{parent:d,key:i});return Object.assign(d.idMap,(0,n.pi)(((r={})[o.id]=o,r),o.idMap)),o})):v;var y=0;!function t(e){var i,r;e.order=y++;try{for(var o=(0,n.XA)((0,u.nI)(e)),a=o.next();!a.done;a=o.next())t(a.value)}catch(t){i={error:t}}finally{try{a&&!a.done&&(r=o.return)&&r.call(o)}finally{if(i)throw i.error}}}(this),this.history=!0===this.config.history?"shallow":this.config.history||!1,this._transient=!!this.config.always||!!this.config.on&&(Array.isArray(this.config.on)?this.config.on.some((function(t){return t.event===p})):p in this.config.on),this.strict=!!this.config.strict,this.onEntry=(0,r.qo)(this.config.entry||this.config.onEntry).map((function(t){return(0,s.Q8)(t)})),this.onExit=(0,r.qo)(this.config.exit||this.config.onExit).map((function(t){return(0,s.Q8)(t)})),this.meta=this.config.meta,this.doneData="final"===this.type?this.config.data:void 0,this.invoke=(0,r.qo)(this.config.invoke).map((function(t,e){var i,o;if((0,r.O4)(t)){var a=(0,r.bx)(d.id,e);return d.machine.options.services=(0,n.pi)(((i={})[a]=t,i),d.machine.options.services),f({src:a,id:a})}if((0,r.HD)(t.src))return a=t.id||(0,r.bx)(d.id,e),f((0,n.pi)((0,n.pi)({},t),{id:a,src:t.src}));if((0,r.O4)(t.src)||(0,r.mf)(t.src))return a=t.id||(0,r.bx)(d.id,e),d.machine.options.services=(0,n.pi)(((o={})[a]=t.src,o),d.machine.options.services),f((0,n.pi)((0,n.pi)({id:a},t),{src:a}));var s=t.src;return f((0,n.pi)((0,n.pi)({id:(0,r.bx)(d.id,e)},t),{src:s}))})),this.activities=(0,r.qo)(this.config.activities).concat(this.invoke).map((function(t){return(0,s.XA)(t)})),this.transition=this.transition.bind(this),this.tags=(0,r.qo)(this.config.tags)}return t.prototype._init=function(){this.__cache.transitions||(0,u.ac)(this).forEach((function(t){return t.on}))},t.prototype.withConfig=function(e,i){var r=this.options,o=r.actions,a=r.activities,s=r.guards,c=r.services,h=r.delays;return new t(this.config,{actions:(0,n.pi)((0,n.pi)({},o),e.actions),activities:(0,n.pi)((0,n.pi)({},a),e.activities),guards:(0,n.pi)((0,n.pi)({},s),e.guards),services:(0,n.pi)((0,n.pi)({},c),e.services),delays:(0,n.pi)((0,n.pi)({},h),e.delays)},null!=i?i:this.context)},t.prototype.withContext=function(e){return new t(this.config,this.options,e)},Object.defineProperty(t.prototype,"context",{get:function(){return(0,r.mf)(this._context)?this._context():this._context},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"definition",{get:function(){return{id:this.id,key:this.key,version:this.version,context:this.context,type:this.type,initial:this.initial,history:this.history,states:(0,r.Q8)(this.states,(function(t){return t.definition})),on:this.on,transitions:this.transitions,entry:this.onEntry,exit:this.onExit,activities:this.activities||[],meta:this.meta,order:this.order||-1,data:this.doneData,invoke:this.invoke,description:this.description,tags:this.tags}},enumerable:!1,configurable:!0}),t.prototype.toJSON=function(){return this.definition},Object.defineProperty(t.prototype,"on",{get:function(){if(this.__cache.on)return this.__cache.on;var t=this.transitions;return this.__cache.on=t.reduce((function(t,e){return t[e.eventType]=t[e.eventType]||[],t[e.eventType].push(e),t}),{})},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"after",{get:function(){return this.__cache.delayedTransitions||(this.__cache.delayedTransitions=this.getDelayedTransitions(),this.__cache.delayedTransitions)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"transitions",{get:function(){return this.__cache.transitions||(this.__cache.transitions=this.formatTransitions(),this.__cache.transitions)},enumerable:!1,configurable:!0}),t.prototype.getCandidates=function(t){if(this.__cache.candidates[t])return this.__cache.candidates[t];var e=t===p,i=this.transitions.filter((function(i){var n=i.eventType===t;return e?n:n||i.eventType===d}));return this.__cache.candidates[t]=i,i},t.prototype.getDelayedTransitions=function(){var t=this,e=this.config.after;if(!e)return[];var i=function(e,i){var n=(0,r.mf)(e)?"".concat(t.id,":delay[").concat(i,"]"):e,o=(0,s.e4)(n,t.id);return t.onEntry.push((0,s.lW)(o,{delay:e})),t.onExit.push((0,s.al)(o)),o};return((0,r.kJ)(e)?e.map((function(t,e){var r=i(t.delay,e);return(0,n.pi)((0,n.pi)({},t),{event:r})})):(0,r.xH)(Object.keys(e).map((function(t,o){var a=e[t],s=(0,r.HD)(a)?{target:a}:a,c=isNaN(+t)?t:+t,h=i(c,o);return(0,r.qo)(s).map((function(t){return(0,n.pi)((0,n.pi)({},t),{event:h,delay:c})}))})))).map((function(e){var i=e.delay;return(0,n.pi)((0,n.pi)({},t.formatTransition(e)),{delay:i})}))},t.prototype.getStateNodes=function(t){var e,i=this;if(!t)return[];var a=t instanceof o.ZM?t.value:(0,r.WM)(t,this.delimiter);if((0,r.HD)(a)){var s=this.getStateNode(a).initial;return void 0!==s?this.getStateNodes(((e={})[a]=s,e)):[this,this.states[a]]}var c=Object.keys(a),h=[this];return h.push.apply(h,(0,n.ev)([],(0,n.CR)((0,r.xH)(c.map((function(t){return i.getStateNode(t).getStateNodes(a[t])})))),!1)),h},t.prototype.handles=function(t){var e=(0,r.x6)(t);return this.events.includes(e)},t.prototype.resolveState=function(t){var e=t instanceof o.ZM?t:o.ZM.create(t),i=Array.from((0,u.P_)([],this.getStateNodes(e.value)));return new o.ZM((0,n.pi)((0,n.pi)({},e),{value:this.resolve(e.value),configuration:i,done:(0,u.Ij)(i,this),tags:(0,u.Oe)(i),machine:this.machine}))},t.prototype.transitionLeafNode=function(t,e,i){var n=this.getStateNode(t).next(e,i);return n&&n.transitions.length?n:this.next(e,i)},t.prototype.transitionCompoundNode=function(t,e,i){var n=Object.keys(t),r=this.getStateNode(n[0])._transition(t[n[0]],e,i);return r&&r.transitions.length?r:this.next(e,i)},t.prototype.transitionParallelNode=function(t,e,i){var o,a,s={};try{for(var c=(0,n.XA)(Object.keys(t)),h=c.next();!h.done;h=c.next()){var u=h.value,l=t[u];if(l){var f=this.getStateNode(u)._transition(l,e,i);f&&(s[u]=f)}}}catch(t){o={error:t}}finally{try{h&&!h.done&&(a=c.return)&&a.call(c)}finally{if(o)throw o.error}}var p=Object.keys(s).map((function(t){return s[t]})),d=(0,r.xH)(p.map((function(t){return t.transitions})));if(!p.some((function(t){return t.transitions.length>0})))return this.next(e,i);var v=(0,r.xH)(Object.keys(s).map((function(t){return s[t].configuration})));return{transitions:d,exitSet:(0,r.xH)(p.map((function(t){return t.exitSet}))),configuration:v,source:e,actions:(0,r.xH)(Object.keys(s).map((function(t){return s[t].actions})))}},t.prototype._transition=function(t,e,i){return(0,r.HD)(t)?this.transitionLeafNode(t,e,i):1===Object.keys(t).length?this.transitionCompoundNode(t,e,i):this.transitionParallelNode(t,e,i)},t.prototype.getTransitionData=function(t,e){return this._transition(t.value,t,(0,r.g5)(e))},t.prototype.next=function(t,e){var i,o,a,s=this,c=e.name,h=[],u=[];try{for(var l=(0,n.XA)(this.getCandidates(c)),f=l.next();!f.done;f=l.next()){var p=f.value,d=p.cond,v=p.in,g=t.context,m=!v||((0,r.HD)(v)&&y(v)?t.matches((0,r.WM)(this.getStateNodeById(v).path,this.delimiter)):(0,r.W)((0,r.WM)(v,this.delimiter),(0,r.ET)(this.path.slice(0,-2))(t.value))),x=!1;try{x=!d||(0,r.vx)(this.machine,d,g,e,t)}catch(t){throw new Error("Unable to evaluate guard '".concat(d.name||d.type,"' in transition for event '").concat(c,"' in state node '").concat(this.id,"':\n").concat(t.message))}if(x&&m){void 0!==p.target&&(u=p.target),h.push.apply(h,(0,n.ev)([],(0,n.CR)(p.actions),!1)),a=p;break}}}catch(t){i={error:t}}finally{try{f&&!f.done&&(o=l.return)&&o.call(l)}finally{if(i)throw i.error}}if(a){if(!u.length)return{transitions:[a],exitSet:[],configuration:t.value?[this]:[],source:t,actions:h};var S=(0,r.xH)(u.map((function(e){return s.getRelativeStateNodes(e,t.historyValue)})));return{transitions:[a],exitSet:a.internal?[]:(0,r.xH)(u.map((function(t){return s.getPotentiallyReenteringNodes(t)}))),configuration:S,source:t,actions:h}}},t.prototype.getPotentiallyReenteringNodes=function(t){if(this.order<t.order)return[this];for(var e=[],i=this,n=t;i&&i!==n;)e.push(i),i=i.parent;return i!==n?[]:(e.push(n),e)},t.prototype.getActions=function(t,e,i,o,a,c,h){var l,f,p,d,v=this,y=c?(0,u.P_)([],this.getStateNodes(c.value)):[],g=new Set;try{for(var m=(0,n.XA)(Array.from(t).sort((function(t,e){return t.order-e.order}))),x=m.next();!x.done;x=m.next()){var S=x.value;(!(0,u.e$)(y,S)||(0,u.e$)(i.exitSet,S)||S.parent&&g.has(S.parent))&&g.add(S)}}catch(t){l={error:t}}finally{try{x&&!x.done&&(f=m.return)&&f.call(m)}finally{if(l)throw l.error}}try{for(var b=(0,n.XA)(y),_=b.next();!_.done;_=b.next())S=_.value,(0,u.e$)(t,S)&&!(0,u.e$)(i.exitSet,S.parent)||i.exitSet.push(S)}catch(t){p={error:t}}finally{try{_&&!_.done&&(d=b.return)&&d.call(b)}finally{if(p)throw p.error}}i.exitSet.sort((function(t,e){return e.order-t.order}));var w=Array.from(g).sort((function(t,e){return t.order-e.order})),N=new Set(i.exitSet),k=(0,r.xH)(w.map((function(t){var e=[];if("final"!==t.type)return e;var n=t.parent;if(!n.parent)return e;e.push((0,s.aT)(t.id,t.doneData),(0,s.aT)(n.id,t.doneData?(0,r.QX)(t.doneData,o,a):void 0));var c=n.parent;return"parallel"===c.type&&(0,u.G)(c).every((function(t){return(0,u.Ij)(i.configuration,t)}))&&e.push((0,s.aT)(c.id)),e}))),A=w.map((function(t){var e=t.onEntry,i=t.activities.map((function(t){return(0,s.BL)(t)}));return{type:"entry",actions:(0,s.AE)(h?(0,n.ev)((0,n.ev)([],(0,n.CR)(e),!1),(0,n.CR)(i),!1):(0,n.ev)((0,n.ev)([],(0,n.CR)(i),!1),(0,n.CR)(e),!1),v.machine.options.actions)}})).concat({type:"state_done",actions:k.map((function(t){return(0,s.OU)(t)}))}),j=Array.from(N).map((function(t){return{type:"exit",actions:(0,s.AE)((0,n.ev)((0,n.ev)([],(0,n.CR)(t.onExit),!1),(0,n.CR)(t.activities.map((function(t){return(0,s.sT)(t)}))),!1),v.machine.options.actions)}})).concat({type:"transition",actions:(0,s.AE)(i.actions,this.machine.options.actions)}).concat(A);if(e){var O=(0,s.AE)((0,r.xH)((0,n.ev)([],(0,n.CR)(t),!1).sort((function(t,e){return e.order-t.order})).map((function(t){return t.onExit}))),this.machine.options.actions).filter((function(t){return!(0,r.vK)(t)}));return j.concat({type:"stop",actions:O})}return j},t.prototype.transition=function(t,e,i,a){void 0===t&&(t=this.initialState);var s,h=(0,r.g5)(e);if(t instanceof o.ZM)s=void 0===i?t:this.resolveState(o.ZM.from(t,i));else{var l=(0,r.HD)(t)?this.resolve((0,r.on)(this.getResolvedPath(t))):this.resolve(t),f=null!=i?i:this.machine.context;s=this.resolveState(o.ZM.from(l,f))}if(!c.M&&h.name===d)throw new Error("An event cannot have the wildcard type ('".concat(d,"')"));if(this.strict&&!this.events.includes(h.name)&&!(0,r.JQ)(h.name))throw new Error("Machine '".concat(this.id,"' does not accept event '").concat(h.name,"'"));var p=this._transition(s.value,s,h)||{transitions:[],configuration:[],exitSet:[],source:s,actions:[]},v=(0,u.P_)([],this.getStateNodes(s.value)),y=p.configuration.length?(0,u.P_)(v,p.configuration):v;return p.configuration=(0,n.ev)([],(0,n.CR)(y),!1),this.resolveTransition(p,s,s.context,a,h)},t.prototype.resolveRaisedTransition=function(t,e,i,r){var o,a=t.actions;return(t=this.transition(t,e,void 0,r))._event=i,t.event=i.data,(o=t.actions).unshift.apply(o,(0,n.ev)([],(0,n.CR)(a),!1)),t},t.prototype.resolveTransition=function(t,e,i,c,h){var f,d,v,y,g=this;void 0===h&&(h=s.bf);var m=t.configuration,x=!e||t.transitions.length>0,S=x?t.configuration:e?e.configuration:[],b=(0,u.Ij)(S,this),_=x?(0,u.NA)(this.machine,m):void 0,w=e?e.historyValue?e.historyValue:t.source?this.machine.historyValue(e.value):void 0:void 0,N=this.getActions(new Set(S),b,t,i,h,e,c),k=e?(0,n.pi)({},e.activities):{};try{for(var A=(0,n.XA)(N),j=A.next();!j.done;j=A.next()){var O=j.value;try{for(var T=(v=void 0,(0,n.XA)(O.actions)),C=T.next();!C.done;C=T.next()){var E=C.value;E.type===a.BL?k[E.activity.id||E.activity.type]=E:E.type===a.sT&&(k[E.activity.id||E.activity.type]=!1)}}catch(t){v={error:t}}finally{try{C&&!C.done&&(y=T.return)&&y.call(T)}finally{if(v)throw v.error}}}}catch(t){f={error:t}}finally{try{j&&!j.done&&(d=A.return)&&d.call(A)}finally{if(f)throw f.error}}var R=(0,n.CR)((0,s.yC)(this,e,i,h,N,c,this.machine.config.predictableActionArguments||this.machine.config.preserveActionOrder),2),P=R[0],H=R[1],D=(0,n.CR)((0,r.uK)(P,r.vK),2),M=D[0],V=D[1],I=P.filter((function(t){var e;return t.type===a.BL&&(null===(e=t.activity)||void 0===e?void 0:e.type)===a.dw})),Z=I.reduce((function(t,e){return t[e.activity.id]=(0,l.mu)(e.activity,g.machine,H,h),t}),e?(0,n.pi)({},e.children):{}),B=new o.ZM({value:_||e.value,context:H,_event:h,_sessionid:e?e._sessionid:null,historyValue:_?w?(0,r.yv)(w,_):void 0:e?e.historyValue:void 0,history:!_||t.source?e:void 0,actions:_?V:[],activities:_?k:e?e.activities:{},events:[],configuration:S,transitions:t.transitions,children:Z,done:b,tags:(0,u.Oe)(S),machine:this}),X=i!==H;B.changed=h.name===a.Vx||X;var Q=B.history;Q&&delete Q.history;var q=!b&&(this._transient||m.some((function(t){return t._transient})));if(!(x||q&&h.name!==p))return B;var K=B;if(!b)for(q&&(K=this.resolveRaisedTransition(K,{type:a.IA},h,c));M.length;){var J=M.shift();K=this.resolveRaisedTransition(K,J._event,h,c)}var U=K.changed||(Q?!!K.actions.length||X||typeof Q.value!=typeof K.value||!(0,o.j_)(K.value,Q.value):void 0);return K.changed=U,K.history=Q,K},t.prototype.getStateNode=function(t){if(y(t))return this.machine.getStateNodeById(t);if(!this.states)throw new Error("Unable to retrieve child state '".concat(t,"' from '").concat(this.id,"'; no child states exist."));var e=this.states[t];if(!e)throw new Error("Child state '".concat(t,"' does not exist on '").concat(this.id,"'"));return e},t.prototype.getStateNodeById=function(t){var e=y(t)?t.slice(1):t;if(e===this.id)return this;var i=this.machine.idMap[e];if(!i)throw new Error("Child state node '#".concat(e,"' does not exist on machine '").concat(this.id,"'"));return i},t.prototype.getStateNodeByPath=function(t){if("string"==typeof t&&y(t))try{return this.getStateNodeById(t.slice(1))}catch(t){}for(var e=(0,r.Q9)(t,this.delimiter).slice(),i=this;e.length;){var n=e.shift();if(!n.length)break;i=i.getStateNode(n)}return i},t.prototype.resolve=function(t){var e,i=this;if(!t)return this.initialStateValue||v;switch(this.type){case"parallel":return(0,r.Q8)(this.initialStateValue,(function(e,n){return e?i.getStateNode(n).resolve(t[n]||e):v}));case"compound":if((0,r.HD)(t)){var n=this.getStateNode(t);return"parallel"===n.type||"compound"===n.type?((e={})[t]=n.initialStateValue,e):t}return Object.keys(t).length?(0,r.Q8)(t,(function(t,e){return t?i.getStateNode(e).resolve(t):v})):this.initialStateValue||{};default:return t||v}},t.prototype.getResolvedPath=function(t){if(y(t)){var e=this.machine.idMap[t.slice(1)];if(!e)throw new Error("Unable to find state node '".concat(t,"'"));return e.path}return(0,r.Q9)(t,this.delimiter)},Object.defineProperty(t.prototype,"initialStateValue",{get:function(){var t,e;if(this.__cache.initialStateValue)return this.__cache.initialStateValue;if("parallel"===this.type)e=(0,r.ib)(this.states,(function(t){return t.initialStateValue||v}),(function(t){return!("history"===t.type)}));else if(void 0!==this.initial){if(!this.states[this.initial])throw new Error("Initial state '".concat(this.initial,"' not found on '").concat(this.key,"'"));e=(0,u.N9)(this.states[this.initial])?this.initial:((t={})[this.initial]=this.states[this.initial].initialStateValue,t)}else e={};return this.__cache.initialStateValue=e,this.__cache.initialStateValue},enumerable:!1,configurable:!0}),t.prototype.getInitialState=function(t,e){this._init();var i=this.getStateNodes(t);return this.resolveTransition({configuration:i,exitSet:[],transitions:[],source:void 0,actions:[]},void 0,null!=e?e:this.machine.context,void 0)},Object.defineProperty(t.prototype,"initialState",{get:function(){var t=this.initialStateValue;if(!t)throw new Error("Cannot retrieve initial state from simple state '".concat(this.id,"'."));return this.getInitialState(t)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"target",{get:function(){var t;if("history"===this.type){var e=this.config;t=(0,r.HD)(e.target)&&y(e.target)?(0,r.on)(this.machine.getStateNodeById(e.target).path.slice(this.path.length-1)):e.target}return t},enumerable:!1,configurable:!0}),t.prototype.getRelativeStateNodes=function(t,e,i){return void 0===i&&(i=!0),i?"history"===t.type?t.resolveHistory(e):t.initialStateNodes:[t]},Object.defineProperty(t.prototype,"initialStateNodes",{get:function(){var t=this;if((0,u.N9)(this))return[this];if("compound"===this.type&&!this.initial)return c.M||(0,r.ZK)(!1,"Compound state node '".concat(this.id,"' has no initial state.")),[this];var e=(0,r.SA)(this.initialStateValue);return(0,r.xH)(e.map((function(e){return t.getFromRelativePath(e)})))},enumerable:!1,configurable:!0}),t.prototype.getFromRelativePath=function(t){if(!t.length)return[this];var e=(0,n.CR)(t),i=e[0],r=e.slice(1);if(!this.states)throw new Error("Cannot retrieve subPath '".concat(i,"' from node with no states"));var o=this.getStateNode(i);if("history"===o.type)return o.resolveHistory();if(!this.states[i])throw new Error("Child state '".concat(i,"' does not exist on '").concat(this.id,"'"));return this.states[i].getFromRelativePath(r)},t.prototype.historyValue=function(t){if(Object.keys(this.states).length)return{current:t||this.initialStateValue,states:(0,r.ib)(this.states,(function(e,i){if(!t)return e.historyValue();var n=(0,r.HD)(t)?void 0:t[i];return e.historyValue(n||e.initialStateValue)}),(function(t){return!t.history}))}},t.prototype.resolveHistory=function(t){var e=this;if("history"!==this.type)return[this];var i=this.parent;if(!t){var n=this.target;return n?(0,r.xH)((0,r.SA)(n).map((function(t){return i.getFromRelativePath(t)}))):i.initialStateNodes}var o=(0,r.gk)(i.path,"states")(t).current;return(0,r.HD)(o)?[i.getStateNode(o)]:(0,r.xH)((0,r.SA)(o).map((function(t){return"deep"===e.history?i.getFromRelativePath(t):[i.states[t[0]]]})))},Object.defineProperty(t.prototype,"stateIds",{get:function(){var t=this,e=(0,r.xH)(Object.keys(this.states).map((function(e){return t.states[e].stateIds})));return[this.id].concat(e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"events",{get:function(){var t,e,i,r;if(this.__cache.events)return this.__cache.events;var o=this.states,a=new Set(this.ownEvents);if(o)try{for(var s=(0,n.XA)(Object.keys(o)),c=s.next();!c.done;c=s.next()){var h=o[c.value];if(h.states)try{for(var u=(i=void 0,(0,n.XA)(h.events)),l=u.next();!l.done;l=u.next()){var f=l.value;a.add("".concat(f))}}catch(t){i={error:t}}finally{try{l&&!l.done&&(r=u.return)&&r.call(u)}finally{if(i)throw i.error}}}}catch(e){t={error:e}}finally{try{c&&!c.done&&(e=s.return)&&e.call(s)}finally{if(t)throw t.error}}return this.__cache.events=Array.from(a)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"ownEvents",{get:function(){var t=new Set(this.transitions.filter((function(t){return!(!t.target&&!t.actions.length&&t.internal)})).map((function(t){return t.eventType})));return Array.from(t)},enumerable:!1,configurable:!0}),t.prototype.resolveTarget=function(t){var e=this;if(void 0!==t)return t.map((function(t){if(!(0,r.HD)(t))return t;var i=t[0]===e.delimiter;if(i&&!e.parent)return e.getStateNodeByPath(t.slice(1));var n=i?e.key+t:t;if(!e.parent)return e.getStateNodeByPath(n);try{return e.parent.getStateNodeByPath(n)}catch(t){throw new Error("Invalid transition definition for state node '".concat(e.id,"':\n").concat(t.message))}}))},t.prototype.formatTransition=function(t){var e=this,i=(0,r.rg)(t.target),o="internal"in t?t.internal:!i||i.some((function(t){return(0,r.HD)(t)&&t[0]===e.delimiter})),a=this.machine.options.guards,c=this.resolveTarget(i),h=(0,n.pi)((0,n.pi)({},t),{actions:(0,s.AE)((0,r.qo)(t.actions)),cond:(0,r.Qi)(t.cond,a),target:c,source:this,internal:o,eventType:t.event,toJSON:function(){return(0,n.pi)((0,n.pi)({},h),{target:h.target?h.target.map((function(t){return"#".concat(t.id)})):void 0,source:"#".concat(e.id)})}});return h},t.prototype.formatTransitions=function(){var t,e,i,o=this;if(this.config.on)if(Array.isArray(this.config.on))i=this.config.on;else{var a=this.config.on,h=a[d],u=void 0===h?[]:h,l=(0,n._T)(a,["*"]);i=(0,r.xH)(Object.keys(l).map((function(t){c.M||t!==p||(0,r.ZK)(!1,"Empty string transition configs (e.g., `{ on: { '': ... }}`) for transient transitions are deprecated. Specify the transition in the `{ always: ... }` property instead. "+'Please check the `on` configuration for "#'.concat(o.id,'".'));var e,i,n,a,s=(0,r.jh)(t,l[t]);return c.M||(e=o,i=t,n=s.slice(0,-1).some((function(t){return!("cond"in t)&&!("in"in t)&&((0,r.HD)(t.target)||(0,r.O4)(t.target))})),a=i===p?"the transient event":"event '".concat(i,"'"),(0,r.ZK)(!n,"One or more transitions for ".concat(a," on state '").concat(e.id,"' are unreachable. ")+"Make sure that the default transition is the last one defined.")),s})).concat((0,r.jh)(d,u)))}else i=[];var f=this.config.always?(0,r.jh)("",this.config.always):[],v=this.config.onDone?(0,r.jh)(String((0,s.aT)(this.id)),this.config.onDone):[];c.M||(0,r.ZK)(!(this.config.onDone&&!this.parent),'Root nodes cannot have an ".onDone" transition. Please check the config of "'.concat(this.id,'".'));var y=(0,r.xH)(this.invoke.map((function(t){var e=[];return t.onDone&&e.push.apply(e,(0,n.ev)([],(0,n.CR)((0,r.jh)(String((0,s.Sl)(t.id)),t.onDone)),!1)),t.onError&&e.push.apply(e,(0,n.ev)([],(0,n.CR)((0,r.jh)(String((0,s.vU)(t.id)),t.onError)),!1)),e}))),g=this.after,m=(0,r.xH)((0,n.ev)((0,n.ev)((0,n.ev)((0,n.ev)([],(0,n.CR)(v),!1),(0,n.CR)(y),!1),(0,n.CR)(i),!1),(0,n.CR)(f),!1).map((function(t){return(0,r.qo)(t).map((function(t){return o.formatTransition(t)}))})));try{for(var x=(0,n.XA)(g),S=x.next();!S.done;S=x.next()){var b=S.value;m.push(b)}}catch(e){t={error:e}}finally{try{S&&!S.done&&(e=x.return)&&e.call(x)}finally{if(t)throw t.error}}return m},t}(),m=!1;function x(t,e){return c.M||"predictableActionArguments"in t||m||(m=!0,console.warn("It is highly recommended to set `predictableActionArguments` to `true` when using `createMachine`. https://xstate.js.org/docs/guides/actions.html")),new g(t,e)}}}]);