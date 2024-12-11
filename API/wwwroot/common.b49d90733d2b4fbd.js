"use strict";(self.webpackChunkClient=self.webpackChunkClient||[]).push([[592],{560:(S,g,r)=>{r.d(g,{a:()=>m});var y=r(529),v=r(8999),_=r(9646),x=r(8505),u=r(8256);let p=(()=>{const a=class{constructor(){this.cache=new Map}put(o,h){console.log("cache miss"),this.cache.set(o,h)}get(o){return console.log("cache found"),this.cache.get(o)}clear(){this.cache.clear()}};let d=a;return a.\u0275fac=function(h){return new(h||a)},a.\u0275prov=u.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),d})();const I={headers:new y.WM({Authorization:"Bearer "+JSON.parse(localStorage.getItem("user"))?.token})};let m=(()=>{const a=class{constructor(o,h){this.http=o,this.cacheService=h,this.baseUrl=v.N.apiUrl}getClients(){const o=this.cacheService.get("clients");return o?(0,_.of)(o):this.http.get(this.baseUrl+"client/all-clients",I).pipe((0,x.b)(h=>{this.cacheService.put("clients",h)}))}};let d=a;return a.\u0275fac=function(h){return new(h||a)(u.LFG(y.eN),u.LFG(p))},a.\u0275prov=u.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),d})()},9351:(S,g,r)=>{r.d(g,{Z:()=>h});var y=r(8082),v=r(3520),_=r(5193),x=r(6836),u=r(316),p=r(3684),I=r(1553),m=r(3706),d=r(6059),a=r(8537),C="__dx_key__";const h=a.Z.inherit({_getDefaultOptions(){return(0,p.l)(this.callBase(),{repaintChangesOnly:!1})},ctor(){var t;this.callBase.apply(this,arguments),this._customizeStoreLoadOptions=e=>{this._dataController.getDataSource()&&!this._dataController.isLoaded()&&(this._correctionIndex=0),this._correctionIndex&&e.storeLoadOptions&&(e.storeLoadOptions.skip+=this._correctionIndex)},null===(t=this._dataController)||void 0===t||t.on("customizeStoreLoadOptions",this._customizeStoreLoadOptions)},reload(){this._correctionIndex=0},_init(){this.callBase(),this._refreshItemsCache(),this._correctionIndex=0},_findItemElementByKey(t){var e=(0,v.Z)(),i=this.key();return this.itemElements().each((n,s)=>{var f=(0,v.Z)(s),l=this._getItemData(f);if(i?(0,d.OI)(i,this.keyOf(l),t):this._isItemEquals(l,t))return e=f,!1}),e},_dataSourceChangedHandler(t,e){e?.changes?this._modifyByChanges(e.changes):(this.callBase(t,e),this._refreshItemsCache())},_isItemEquals(t,e){t&&t[C]&&(t=t.data);try{return JSON.stringify(t)===JSON.stringify(e)}catch{return t===e}},_isItemStrictEquals(t,e){return this._isItemEquals(t,e)},_shouldAddNewGroup(t,e){var i=!1;return this.option("grouped")&&(t.length||(i=!0),(0,I.S6)(t,(n,s)=>{"insert"===s.type&&(i=!0,(0,I.S6)(e,(f,l)=>{if(void 0!==s.data.key&&s.data.key===l.key)return i=!1,!1}))})),i},_partialRefresh(){if(this.option("repaintChangesOnly")){var t=(0,_.h)(this._itemsCache,this._editStrategy.itemsGetter(),e=>e&&void 0!==e[C]?e[C]:this.keyOf(e),this._isItemStrictEquals.bind(this));if(t&&this._itemsCache.length&&!this._shouldAddNewGroup(t,this._itemsCache))return this._modifyByChanges(t,!0),this._renderEmptyMessage(),!0;this._refreshItemsCache()}return!1},_refreshItemsCache(){if(this.option("repaintChangesOnly")){var t=this._editStrategy.itemsGetter();try{this._itemsCache=(0,p.l)(!0,[],t),this.key()||(this._itemsCache=this._itemsCache.map((e,i)=>({[C]:t[i],data:e})))}catch{this._itemsCache=(0,p.l)([],t)}}},_dispose(){this._dataController.off("customizeStoreLoadOptions",this._customizeStoreLoadOptions),this.callBase()},_updateByChange(t,e,i,n){if(n)this._renderItem(i.index,i.data,null,this._findItemElementByKey(i.key));else{var s=e[(0,m.qk)(t,e,i.key)];s&&(0,m.Vx)(t,e,i.key,i.data).done(()=>{this._renderItem(e.indexOf(s),s,null,this._findItemElementByKey(i.key))})}},_insertByChange(t,e,i,n){(0,u.gx)(n||(0,m.$T)(t,e,i.data,i.index)).done(()=>{var s;this._beforeItemElementInserted(i),this._renderItem(null!==(s=i.index)&&void 0!==s?s:e.length,i.data),this._afterItemElementInserted(),this._correctionIndex++})},_updateSelectionAfterRemoveByChange(t){var e=this.option("selectedIndex");e>t?this.option("selectedIndex",e-1):e===t&&1===this.option("selectedItems").length?this.option("selectedItems",[]):this._normalizeSelectedItems()},_beforeItemElementInserted(t){var e=this.option("selectedIndex");t.index<=e&&this.option("selectedIndex",e+1)},_afterItemElementInserted:x.ZT,_removeByChange(t,e,i,n){var s=n?i.index:(0,m.qk)(t,e,i.key);if(n?i.oldItem:e[s]){var l=this._findItemElementByKey(i.key),c=this._extendActionArgs(l);this._waitDeletingPrepare(l).done(()=>{n?(this._updateIndicesAfterIndex(s-1),this._afterItemElementDeleted(l,c),this._updateSelectionAfterRemoveByChange(s)):(this._deleteItemElementByIndex(s),this._afterItemElementDeleted(l,c))}),this._correctionIndex--}},_modifyByChanges(t,e){var i=this._editStrategy.itemsGetter(),n={key:this.key.bind(this),keyOf:this.keyOf.bind(this)},s=this._dataController,f=s.paginate(),l=s.group();(f||l)&&(t=t.filter(c=>"insert"!==c.type||void 0!==c.index)),t.forEach(c=>this["_".concat(c.type,"ByChange")](n,i,c,e)),this._renderedItemsCount=i.length,this._refreshItemsCache(),this._fireContentReadyAction()},_appendItemToContainer(t,e,i){var n=t.children(this._itemSelector()).get(i);y.Z.insertElement(t.get(0),e.get(0),n)},_optionChanged(t){switch(t.name){case"items":this._partialRefresh(t.value)||this.callBase(t);break;case"dataSource":(!this.option("repaintChangesOnly")||!t.value)&&this.option("items",[]),this.callBase(t);break;case"repaintChangesOnly":break;default:this.callBase(t)}}})}}]);