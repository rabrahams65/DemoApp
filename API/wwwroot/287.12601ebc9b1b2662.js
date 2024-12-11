"use strict";(self.webpackChunkClient=self.webpackChunkClient||[]).push([[287],{4287:(ie,O,a)=>{a.r(O),a.d(O,{AccordionModule:()=>w});var b=a(6895),x=a(5450),n=a(8256),D=a(560),H=a(1481),u=a(5922),R=a(7771),S=a(7923),B=a(8082),K=a(7075),d=a(3520),Z=a(8595),M=a(6836),h=a(316),C=a(3684),N=a(4667),I=a(1553),m=a(1374),c=a(4596),k=a(1037),y=a(4705),z=a(6129),L=a(9351),P=a(8961),E="dx-accordion-item",p="dx-accordion-item-opened",v="dx-accordion-item-closed",f="dx-accordion-item-title",g="dx-accordion-item-body",A=L.Z.inherit({_activeStateUnit:".".concat(E),_getDefaultOptions(){return(0,C.l)(this.callBase(),{hoverStateEnabled:!0,height:void 0,itemTitleTemplate:"title",onItemTitleClick:null,selectedIndex:0,collapsible:!1,multiple:!1,animationDuration:300,deferRendering:!0,selectByClick:!0,activeStateEnabled:!0,_itemAttributes:{role:"tab"},_animationEasing:"ease"})},_defaultOptionsRules(){return this.callBase().concat([{device:()=>"desktop"===S.Z.real().deviceType&&!S.Z.isSimulator(),options:{focusStateEnabled:!0}},{device:()=>(0,P.yj)(),options:{animationDuration:200,_animationEasing:"cubic-bezier(0.4, 0, 0.2, 1)"}}])},_itemElements(){return this._itemContainer().children(this._itemSelector())},_init(){this.callBase(),this.option("selectionRequired",!this.option("collapsible")),this.option("selectionMode",this.option("multiple")?"multiple":"single");var t=this.$element();t.addClass("dx-accordion"),this._$container=(0,d.Z)("<div>").addClass("dx-accordion-wrapper"),t.append(this._$container)},_initTemplates(){this.callBase(),this._templateManager.addDefaultTemplates({title:new Z.c((t,i)=>{if((0,c.PO)(i)){var e=(0,N.H)(i.icon);e&&t.append(e),(0,c.$K)(i.title)&&!(0,c.PO)(i.title)&&t.append(B.Z.createTextNode(i.title))}else(0,c.$K)(i)&&t.text(String(i));t.wrapInner((0,d.Z)("<div>").addClass("dx-accordion-item-title-caption"))},["title","icon"],this.option("integrationOptions.watchMethod"))})},_initMarkup(){this._deferredItems=[],this._deferredTemplateItems=[],this.callBase(),this.setAria({role:"tablist",multiselectable:this.option("multiple")}),(0,M.g0)(()=>{var t=this._getSelectedItemIndices();this._renderSelection(t,[])})},_render(){this.callBase(),h.gx.apply(this,this._deferredTemplateItems).done(()=>{this._updateItemHeights(!0)})},_itemDataKey:()=>"dxAccordionItemData",_itemClass:()=>E,_itemContainer(){return this._$container},_itemTitles(){return this._itemElements().find(".".concat(f))},_itemContents(){return this._itemElements().find(".".concat(g))},_getItemData(t){return(0,d.Z)(t).parent().data(this._itemDataKey())||this.callBase.apply(this,arguments)},_executeItemRenderAction(t){t.type||this.callBase.apply(this,arguments)},_itemSelectHandler(t){(0,d.Z)(t.target).closest(this._itemContents()).length||this.callBase.apply(this,arguments)},_afterItemElementDeleted(t,i){this._deferredItems.splice(i.itemIndex,1),this.callBase.apply(this,arguments)},_renderItemContent(t){this._deferredTemplateItems[t.index]=(0,h.BH)();var i=this.callBase((0,C.l)({},t,{contentClass:f,templateProperty:"titleTemplate",defaultTemplateName:this.option("itemTitleTemplate")}));this._attachItemTitleClickAction(i);var e=(0,h.BH)();(0,c.$K)(this._deferredItems[t.index])?this._deferredItems[t.index]=e:this._deferredItems.push(e),(!this.option("deferRendering")||this._getSelectedItemIndices().indexOf(t.index)>=0)&&e.resolve(),e.done(this.callBase.bind(this,(0,C.l)({},t,{contentClass:g,container:(0,K.uD)((0,d.Z)("<div>").appendTo((0,d.Z)(i).parent()))})))},_onItemTemplateRendered(t,i){return()=>{var e=this._deferredTemplateItems[i.index];e&&e.resolve()}},_attachItemTitleClickAction(t){var i=(0,z.V4)(k.u,this.NAME);y.Z.off(t,i),y.Z.on(t,i,this._itemTitleClickHandler.bind(this))},_itemTitleClickHandler(t){this._itemDXEventHandler(t,"onItemTitleClick")},_renderSelection(t,i){this._itemElements().addClass(v),this.setAria("hidden",!0,this._itemContents()),this._updateItems(t,i)},_updateSelection(t,i){this._updateItems(t,i),this._updateItemHeightsWrapper(!1)},_updateItems(t,i){var e=this._itemElements();I.S6(t,(s,l)=>{var o;null===(o=this._deferredItems[l])||void 0===o||o.resolve();var _=e.eq(l).addClass(p).removeClass(v);this.setAria("hidden",!1,_.find(".".concat(g)))}),I.S6(i,(s,l)=>{var o=e.eq(l).removeClass(p);this.setAria("hidden",!0,o.find(".".concat(g)))})},_updateItemHeightsWrapper(t){this.option("templatesRenderAsynchronously")?this._animationTimer=setTimeout(()=>{this._updateItemHeights(t)}):this._updateItemHeights(t)},_updateItemHeights(t){var i=this,e=i._deferredAnimate,s=this._splitFreeSpace(this._calculateFreeSpace());return clearTimeout(this._animationTimer),h.gx.apply(d.Z,[].slice.call(this._itemElements()).map(l=>i._updateItemHeight((0,d.Z)(l),s,t))).done(()=>{e&&e.resolveWith(i)})},_updateItemHeight(t,i,e){var s=t.children(".".concat(f));u.Z.isAnimating(t)&&u.Z.stop(t);var o,l=(0,m.zp)(t);return t.hasClass(p)?(o=i+(0,m.zp)(s))||((0,m.QQ)(t,"auto"),o=(0,m.zp)(t)):o=(0,m.zp)(s),this._animateItem(t,l,o,e,!!i)},_animateItem(t,i,e,s,l){var o;return s||i===e?(t.css("height",e),o=(0,h.BH)().resolve()):o=u.Z.animate(t,{type:"custom",from:{height:i},to:{height:e},duration:this.option("animationDuration"),easing:this.option("_animationEasing")}),o.done(()=>{t.hasClass(p)&&!l&&t.css("height",""),t.not(".".concat(p)).addClass(v)})},_splitFreeSpace(t){return t&&t/this.option("selectedItems").length},_calculateFreeSpace(){var t=this.option("height");if(void 0!==t&&"auto"!==t){var i=this._itemTitles(),e=0;return I.S6(i,(s,l)=>{e+=(0,m.zp)(l)}),(0,m.Cr)(this.$element())-e}},_visibilityChanged(t){t&&this._dimensionChanged()},_dimensionChanged(){this._updateItemHeights(!0)},_clean(){this._deferredTemplateItems.forEach(t=>{t.reject()}),this._deferredTemplateItems=[],clearTimeout(this._animationTimer),this.callBase()},_tryParseItemPropertyName(t){var i=t.match(/.*\.(.*)/);if((0,c.$K)(i)&&i.length>=1)return i[1]},_optionChanged(t){switch(t.name){case"items":this.callBase(t),"title"===this._tryParseItemPropertyName(t.fullName)&&this._renderSelection(this._getSelectedItemIndices(),[]),"visible"===this._tryParseItemPropertyName(t.fullName)&&this._updateItemHeightsWrapper(!0),!0===this.option("repaintChangesOnly")&&"items"===t.fullName&&(this._updateItemHeightsWrapper(!0),this._renderSelection(this._getSelectedItemIndices(),[]));break;case"animationDuration":case"onItemTitleClick":case"_animationEasing":break;case"collapsible":this.option("selectionRequired",!this.option("collapsible"));break;case"itemTitleTemplate":case"height":case"deferRendering":this._invalidate();break;case"multiple":this.option("selectionMode",t.value?"multiple":"single");break;default:this.callBase(t)}},expandItem(t){return this._deferredAnimate=(0,h.BH)(),this.selectItem(t),this._deferredAnimate.promise()},collapseItem(t){return this._deferredAnimate=(0,h.BH)(),this.unselectItem(t),this._deferredAnimate.promise()},updateDimensions(){return this._updateItemHeights(!1)}});(0,R.Z)("dxAccordion",A);const J=A;var r=a(7217),T=a(4943);let U=(()=>{class t extends r.Ay{constructor(e,s,l,o,_,q,ee,te){super(e,s,l,o,ee,te),this._watcherHelper=o,this._idh=_,this.instance=null,this._createEventEmitters([{subscribe:"contentReady",emit:"onContentReady"},{subscribe:"disposing",emit:"onDisposing"},{subscribe:"initialized",emit:"onInitialized"},{subscribe:"itemClick",emit:"onItemClick"},{subscribe:"itemContextMenu",emit:"onItemContextMenu"},{subscribe:"itemHold",emit:"onItemHold"},{subscribe:"itemRendered",emit:"onItemRendered"},{subscribe:"itemTitleClick",emit:"onItemTitleClick"},{subscribe:"optionChanged",emit:"onOptionChanged"},{subscribe:"selectionChanged",emit:"onSelectionChanged"},{emit:"accessKeyChange"},{emit:"activeStateEnabledChange"},{emit:"animationDurationChange"},{emit:"collapsibleChange"},{emit:"dataSourceChange"},{emit:"deferRenderingChange"},{emit:"disabledChange"},{emit:"elementAttrChange"},{emit:"focusStateEnabledChange"},{emit:"heightChange"},{emit:"hintChange"},{emit:"hoverStateEnabledChange"},{emit:"itemHoldTimeoutChange"},{emit:"itemsChange"},{emit:"itemTemplateChange"},{emit:"itemTitleTemplateChange"},{emit:"keyExprChange"},{emit:"multipleChange"},{emit:"noDataTextChange"},{emit:"repaintChangesOnlyChange"},{emit:"rtlEnabledChange"},{emit:"selectedIndexChange"},{emit:"selectedItemChange"},{emit:"selectedItemKeysChange"},{emit:"selectedItemsChange"},{emit:"tabIndexChange"},{emit:"visibleChange"},{emit:"widthChange"}]),this._idh.setHost(this),q.setHost(this)}get accessKey(){return this._getOption("accessKey")}set accessKey(e){this._setOption("accessKey",e)}get activeStateEnabled(){return this._getOption("activeStateEnabled")}set activeStateEnabled(e){this._setOption("activeStateEnabled",e)}get animationDuration(){return this._getOption("animationDuration")}set animationDuration(e){this._setOption("animationDuration",e)}get collapsible(){return this._getOption("collapsible")}set collapsible(e){this._setOption("collapsible",e)}get dataSource(){return this._getOption("dataSource")}set dataSource(e){this._setOption("dataSource",e)}get deferRendering(){return this._getOption("deferRendering")}set deferRendering(e){this._setOption("deferRendering",e)}get disabled(){return this._getOption("disabled")}set disabled(e){this._setOption("disabled",e)}get elementAttr(){return this._getOption("elementAttr")}set elementAttr(e){this._setOption("elementAttr",e)}get focusStateEnabled(){return this._getOption("focusStateEnabled")}set focusStateEnabled(e){this._setOption("focusStateEnabled",e)}get height(){return this._getOption("height")}set height(e){this._setOption("height",e)}get hint(){return this._getOption("hint")}set hint(e){this._setOption("hint",e)}get hoverStateEnabled(){return this._getOption("hoverStateEnabled")}set hoverStateEnabled(e){this._setOption("hoverStateEnabled",e)}get itemHoldTimeout(){return this._getOption("itemHoldTimeout")}set itemHoldTimeout(e){this._setOption("itemHoldTimeout",e)}get items(){return this._getOption("items")}set items(e){this._setOption("items",e)}get itemTemplate(){return this._getOption("itemTemplate")}set itemTemplate(e){this._setOption("itemTemplate",e)}get itemTitleTemplate(){return this._getOption("itemTitleTemplate")}set itemTitleTemplate(e){this._setOption("itemTitleTemplate",e)}get keyExpr(){return this._getOption("keyExpr")}set keyExpr(e){this._setOption("keyExpr",e)}get multiple(){return this._getOption("multiple")}set multiple(e){this._setOption("multiple",e)}get noDataText(){return this._getOption("noDataText")}set noDataText(e){this._setOption("noDataText",e)}get repaintChangesOnly(){return this._getOption("repaintChangesOnly")}set repaintChangesOnly(e){this._setOption("repaintChangesOnly",e)}get rtlEnabled(){return this._getOption("rtlEnabled")}set rtlEnabled(e){this._setOption("rtlEnabled",e)}get selectedIndex(){return this._getOption("selectedIndex")}set selectedIndex(e){this._setOption("selectedIndex",e)}get selectedItem(){return this._getOption("selectedItem")}set selectedItem(e){this._setOption("selectedItem",e)}get selectedItemKeys(){return this._getOption("selectedItemKeys")}set selectedItemKeys(e){this._setOption("selectedItemKeys",e)}get selectedItems(){return this._getOption("selectedItems")}set selectedItems(e){this._setOption("selectedItems",e)}get tabIndex(){return this._getOption("tabIndex")}set tabIndex(e){this._setOption("tabIndex",e)}get visible(){return this._getOption("visible")}set visible(e){this._setOption("visible",e)}get width(){return this._getOption("width")}set width(e){this._setOption("width",e)}get itemsChildren(){return this._getOption("items")}set itemsChildren(e){this.setChildren("items",e)}_createInstance(e,s){return new J(e,s)}ngOnDestroy(){this._destroyWidget()}ngOnChanges(e){super.ngOnChanges(e),this.setupChanges("dataSource",e),this.setupChanges("items",e),this.setupChanges("selectedItemKeys",e),this.setupChanges("selectedItems",e)}setupChanges(e,s){e in this._optionsToUpdate||this._idh.setup(e,s)}ngDoCheck(){this._idh.doCheck("dataSource"),this._idh.doCheck("items"),this._idh.doCheck("selectedItemKeys"),this._idh.doCheck("selectedItems"),this._watcherHelper.checkWatchers(),super.ngDoCheck(),super.clearChangedOptions()}_setOption(e,s){let l=this._idh.setupSingle(e,s),o=null!==this._idh.getChanges(e,s);(l||o)&&super._setOption(e,s)}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(n.SBq),n.Y36(n.R0b),n.Y36(r._5),n.Y36(r._h),n.Y36(r.i9),n.Y36(r.al),n.Y36(H.ki),n.Y36(n.Lbi))},t.\u0275cmp=n.Xpm({type:t,selectors:[["dx-accordion"]],contentQueries:function(e,s,l){if(1&e&&n.Suo(l,T.ZT3,4),2&e){let o;n.iGM(o=n.CRH())&&(s.itemsChildren=o)}},inputs:{accessKey:"accessKey",activeStateEnabled:"activeStateEnabled",animationDuration:"animationDuration",collapsible:"collapsible",dataSource:"dataSource",deferRendering:"deferRendering",disabled:"disabled",elementAttr:"elementAttr",focusStateEnabled:"focusStateEnabled",height:"height",hint:"hint",hoverStateEnabled:"hoverStateEnabled",itemHoldTimeout:"itemHoldTimeout",items:"items",itemTemplate:"itemTemplate",itemTitleTemplate:"itemTitleTemplate",keyExpr:"keyExpr",multiple:"multiple",noDataText:"noDataText",repaintChangesOnly:"repaintChangesOnly",rtlEnabled:"rtlEnabled",selectedIndex:"selectedIndex",selectedItem:"selectedItem",selectedItemKeys:"selectedItemKeys",selectedItems:"selectedItems",tabIndex:"tabIndex",visible:"visible",width:"width"},outputs:{onContentReady:"onContentReady",onDisposing:"onDisposing",onInitialized:"onInitialized",onItemClick:"onItemClick",onItemContextMenu:"onItemContextMenu",onItemHold:"onItemHold",onItemRendered:"onItemRendered",onItemTitleClick:"onItemTitleClick",onOptionChanged:"onOptionChanged",onSelectionChanged:"onSelectionChanged",accessKeyChange:"accessKeyChange",activeStateEnabledChange:"activeStateEnabledChange",animationDurationChange:"animationDurationChange",collapsibleChange:"collapsibleChange",dataSourceChange:"dataSourceChange",deferRenderingChange:"deferRenderingChange",disabledChange:"disabledChange",elementAttrChange:"elementAttrChange",focusStateEnabledChange:"focusStateEnabledChange",heightChange:"heightChange",hintChange:"hintChange",hoverStateEnabledChange:"hoverStateEnabledChange",itemHoldTimeoutChange:"itemHoldTimeoutChange",itemsChange:"itemsChange",itemTemplateChange:"itemTemplateChange",itemTitleTemplateChange:"itemTitleTemplateChange",keyExprChange:"keyExprChange",multipleChange:"multipleChange",noDataTextChange:"noDataTextChange",repaintChangesOnlyChange:"repaintChangesOnlyChange",rtlEnabledChange:"rtlEnabledChange",selectedIndexChange:"selectedIndexChange",selectedItemChange:"selectedItemChange",selectedItemKeysChange:"selectedItemKeysChange",selectedItemsChange:"selectedItemsChange",tabIndexChange:"tabIndexChange",visibleChange:"visibleChange",widthChange:"widthChange"},features:[n._Bn([r._5,r._h,r.al,r.i9]),n.qOj,n.TTD],decls:0,vars:0,template:function(e,s){},encapsulation:2}),t})(),W=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[T.Q8p,r.Lz,r.ie],T.Q8p,r.ie]}),t})();function X(t,i){if(1&t&&(n.TgZ(0,"div"),n._uU(1),n.qZA()),2&t){const e=i.$implicit;n.xp6(1),n.hij(" ",e.name," ")}}function $(t,i){if(1&t&&(n.TgZ(0,"div"),n._uU(1),n._UZ(2,"br"),n._uU(3),n._UZ(4,"br"),n._uU(5),n.qZA()),2&t){const e=i.$implicit;n.xp6(1),n.hij(" ","Email: "+e.email," "),n.xp6(2),n.hij(" ","Phone: "+e.phone," "),n.xp6(2),n.hij(" ","Address: "+e.address," ")}}const G=[{path:"",component:(()=>{const i=class{constructor(s){this.clientService=s,this.clients=[]}ngOnInit(){this.loadClients()}loadClients(){this.clientService.getClients().subscribe(s=>{this.clients=s})}};let t=i;return i.\u0275fac=function(l){return new(l||i)(n.Y36(D.a))},i.\u0275cmp=n.Xpm({type:i,selectors:[["app-accordion"]],decls:3,vars:3,consts:[["itemTemplate","item","itemTitleTemplate","title",3,"dataSource"],[4,"dxTemplate","dxTemplateOf"]],template:function(l,o){1&l&&(n.TgZ(0,"dx-accordion",0),n.YNc(1,X,2,1,"div",1),n.YNc(2,$,6,3,"div",1),n.qZA()),2&l&&(n.Q6J("dataSource",o.clients),n.xp6(1),n.Q6J("dxTemplateOf","title"),n.xp6(1),n.Q6J("dxTemplateOf","item"))},dependencies:[U,r.p6]}),t})()}];let V=(()=>{const i=class{};let t=i;return i.\u0275fac=function(l){return new(l||i)},i.\u0275mod=n.oAB({type:i}),i.\u0275inj=n.cJS({imports:[b.ez,x.Bz.forChild(G),x.Bz]}),t})(),w=(()=>{const i=class{};let t=i;return i.\u0275fac=function(l){return new(l||i)},i.\u0275mod=n.oAB({type:i}),i.\u0275inj=n.cJS({imports:[b.ez,V,W]}),t})()}}]);