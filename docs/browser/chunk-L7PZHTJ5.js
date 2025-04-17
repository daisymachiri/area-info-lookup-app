import{a as z}from"./chunk-7VSVCZ7D.js";import{f as $,j as L,k as P}from"./chunk-OPEEPNQ4.js";import{a as j,b as V}from"./chunk-LEIMCQKJ.js";import{b as R}from"./chunk-NK3O5DJF.js";import{b as U,f as i,g as q,j as D,k as x}from"./chunk-ZJYFYRHS.js";import{e as M,l as E,m as p,q as F,t as c}from"./chunk-GNOVVPTF.js";import{e as B}from"./chunk-BAKMWPBW.js";import{f as I}from"./chunk-RW4GY4BD.js";function N(t){return!c(t)||t%1===0?0:t.toString().split(".")[1].length}function H(t,...e){if(!c(t))return 0;let n=Math.max(...e.map(r=>N(r)));return Number(t.toFixed(n))}var W=":host{--knob-handle-size:calc(var(--knob-size) * 2);display:-ms-flexbox;display:flex;position:relative;-ms-flex:3;flex:3;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.range-disabled){pointer-events:none}::slotted(ion-label){-ms-flex:initial;flex:initial}::slotted(ion-icon[slot]){font-size:24px}.range-slider{position:relative;-ms-flex:1;flex:1;width:100%;height:var(--height);contain:size layout style;cursor:-webkit-grab;cursor:grab;-ms-touch-action:pan-y;touch-action:pan-y}:host(.range-pressed) .range-slider{cursor:-webkit-grabbing;cursor:grabbing}.range-pin{position:absolute;background:var(--ion-color-base);color:var(--ion-color-contrast);text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box}.range-knob-handle{top:calc((var(--height) - var(--knob-handle-size)) / 2);-webkit-margin-start:calc(0px - var(--knob-handle-size) / 2);margin-inline-start:calc(0px - var(--knob-handle-size) / 2);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-pack:center;justify-content:center;width:var(--knob-handle-size);height:var(--knob-handle-size);text-align:center}.range-knob-handle{inset-inline-start:0}:host-context([dir=rtl]) .range-knob-handle{left:unset}[dir=rtl] .range-knob-handle{left:unset}@supports selector(:dir(rtl)){.range-knob-handle:dir(rtl){left:unset}}.range-knob-handle:active,.range-knob-handle:focus{outline:none}.range-bar-container{border-radius:var(--bar-border-radius);top:calc((var(--height) - var(--bar-height)) / 2);position:absolute;width:100%;height:var(--bar-height)}.range-bar-container{inset-inline-start:0}:host-context([dir=rtl]) .range-bar-container{left:unset}[dir=rtl] .range-bar-container{left:unset}@supports selector(:dir(rtl)){.range-bar-container:dir(rtl){left:unset}}.range-bar{border-radius:var(--bar-border-radius);position:absolute;width:100%;height:var(--bar-height);background:var(--bar-background);pointer-events:none}.range-knob{border-radius:var(--knob-border-radius);top:calc(50% - var(--knob-size) / 2);position:absolute;width:var(--knob-size);height:var(--knob-size);background:var(--knob-background);-webkit-box-shadow:var(--knob-box-shadow);box-shadow:var(--knob-box-shadow);z-index:2;pointer-events:none}.range-knob{inset-inline-start:calc(50% - var(--knob-size) / 2)}:host-context([dir=rtl]) .range-knob{left:unset}[dir=rtl] .range-knob{left:unset}@supports selector(:dir(rtl)){.range-knob:dir(rtl){left:unset}}:host(.range-pressed) .range-bar-active{will-change:left, right}:host(.in-item){width:100%}:host([slot=start]),:host([slot=end]){width:auto}:host(.in-item) ::slotted(ion-label){-ms-flex-item-align:center;align-self:center}.range-wrapper{display:-ms-flexbox;display:flex;position:relative;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;height:inherit}::slotted([slot=label]){max-width:200px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.label-text-wrapper-hidden{display:none}.native-wrapper{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center}:host(.range-label-placement-start) .range-wrapper{-ms-flex-direction:row;flex-direction:row}:host(.range-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}:host(.range-label-placement-end) .range-wrapper{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.range-label-placement-end) .label-text-wrapper{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}:host(.range-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}:host(.range-label-placement-fixed) .label-text-wrapper{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}:host(.range-label-placement-stacked) .range-wrapper{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:stretch;align-items:stretch}:host(.range-label-placement-stacked) .label-text-wrapper{-webkit-transform-origin:left top;transform-origin:left top;-webkit-transform:scale(0.75);transform:scale(0.75);margin-left:0;margin-right:0;margin-bottom:16px;max-width:calc(100% / 0.75)}:host-context([dir=rtl]):host(.range-label-placement-stacked) .label-text-wrapper,:host-context([dir=rtl]).range-label-placement-stacked .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}@supports selector(:dir(rtl)){:host(.range-label-placement-stacked:dir(rtl)) .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}}:host(.in-item.range-label-placement-stacked) .label-text-wrapper{margin-top:10px;margin-bottom:16px}:host(.in-item.range-label-placement-stacked) .native-wrapper{margin-bottom:0px}:host{--knob-border-radius:50%;--knob-background:#ffffff;--knob-box-shadow:0px 0.5px 4px rgba(0, 0, 0, 0.12), 0px 6px 13px rgba(0, 0, 0, 0.12);--knob-size:26px;--bar-height:4px;--bar-background:var(--ion-color-step-900, var(--ion-background-color-step-900, #e6e6e6));--bar-background-active:var(--ion-color-primary, #0054e9);--bar-border-radius:2px;--height:42px}:host(.range-item-start-adjustment){-webkit-padding-start:24px;padding-inline-start:24px}:host(.range-item-end-adjustment){-webkit-padding-end:24px;padding-inline-end:24px}:host(.ion-color) .range-bar-active,:host(.ion-color) .range-tick-active{background:var(--ion-color-base)}::slotted([slot=start]){-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}::slotted([slot=end]){-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}:host(.range-has-pin:not(.range-label-placement-stacked)){padding-top:calc(8px + 0.75rem)}:host(.range-has-pin.range-label-placement-stacked) .label-text-wrapper{margin-bottom:calc(8px + 0.75rem)}.range-bar-active{bottom:0;width:auto;background:var(--bar-background-active)}.range-bar-active.has-ticks{border-radius:0;-webkit-margin-start:-2px;margin-inline-start:-2px;-webkit-margin-end:-2px;margin-inline-end:-2px}.range-tick{-webkit-margin-start:-2px;margin-inline-start:-2px;border-radius:0;position:absolute;top:17px;width:4px;height:8px;background:var(--ion-color-step-900, var(--ion-background-color-step-900, #e6e6e6));pointer-events:none}.range-tick-active{background:var(--bar-background-active)}.range-pin{-webkit-transform:translate3d(0,  100%,  0) scale(0.01);transform:translate3d(0,  100%,  0) scale(0.01);-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:8px;padding-bottom:8px;min-width:28px;-webkit-transition:-webkit-transform 120ms ease;transition:-webkit-transform 120ms ease;transition:transform 120ms ease;transition:transform 120ms ease, -webkit-transform 120ms ease;background:transparent;color:var(--ion-text-color, #000);font-size:0.75rem;text-align:center}.range-knob-pressed .range-pin,.range-knob-handle.ion-focused .range-pin{-webkit-transform:translate3d(0, calc(-100% + 11px), 0) scale(1);transform:translate3d(0, calc(-100% + 11px), 0) scale(1)}:host(.range-disabled){opacity:0.3}",J=W,O=':host{--knob-handle-size:calc(var(--knob-size) * 2);display:-ms-flexbox;display:flex;position:relative;-ms-flex:3;flex:3;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.range-disabled){pointer-events:none}::slotted(ion-label){-ms-flex:initial;flex:initial}::slotted(ion-icon[slot]){font-size:24px}.range-slider{position:relative;-ms-flex:1;flex:1;width:100%;height:var(--height);contain:size layout style;cursor:-webkit-grab;cursor:grab;-ms-touch-action:pan-y;touch-action:pan-y}:host(.range-pressed) .range-slider{cursor:-webkit-grabbing;cursor:grabbing}.range-pin{position:absolute;background:var(--ion-color-base);color:var(--ion-color-contrast);text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box}.range-knob-handle{top:calc((var(--height) - var(--knob-handle-size)) / 2);-webkit-margin-start:calc(0px - var(--knob-handle-size) / 2);margin-inline-start:calc(0px - var(--knob-handle-size) / 2);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-pack:center;justify-content:center;width:var(--knob-handle-size);height:var(--knob-handle-size);text-align:center}.range-knob-handle{inset-inline-start:0}:host-context([dir=rtl]) .range-knob-handle{left:unset}[dir=rtl] .range-knob-handle{left:unset}@supports selector(:dir(rtl)){.range-knob-handle:dir(rtl){left:unset}}.range-knob-handle:active,.range-knob-handle:focus{outline:none}.range-bar-container{border-radius:var(--bar-border-radius);top:calc((var(--height) - var(--bar-height)) / 2);position:absolute;width:100%;height:var(--bar-height)}.range-bar-container{inset-inline-start:0}:host-context([dir=rtl]) .range-bar-container{left:unset}[dir=rtl] .range-bar-container{left:unset}@supports selector(:dir(rtl)){.range-bar-container:dir(rtl){left:unset}}.range-bar{border-radius:var(--bar-border-radius);position:absolute;width:100%;height:var(--bar-height);background:var(--bar-background);pointer-events:none}.range-knob{border-radius:var(--knob-border-radius);top:calc(50% - var(--knob-size) / 2);position:absolute;width:var(--knob-size);height:var(--knob-size);background:var(--knob-background);-webkit-box-shadow:var(--knob-box-shadow);box-shadow:var(--knob-box-shadow);z-index:2;pointer-events:none}.range-knob{inset-inline-start:calc(50% - var(--knob-size) / 2)}:host-context([dir=rtl]) .range-knob{left:unset}[dir=rtl] .range-knob{left:unset}@supports selector(:dir(rtl)){.range-knob:dir(rtl){left:unset}}:host(.range-pressed) .range-bar-active{will-change:left, right}:host(.in-item){width:100%}:host([slot=start]),:host([slot=end]){width:auto}:host(.in-item) ::slotted(ion-label){-ms-flex-item-align:center;align-self:center}.range-wrapper{display:-ms-flexbox;display:flex;position:relative;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;height:inherit}::slotted([slot=label]){max-width:200px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.label-text-wrapper-hidden{display:none}.native-wrapper{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center}:host(.range-label-placement-start) .range-wrapper{-ms-flex-direction:row;flex-direction:row}:host(.range-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}:host(.range-label-placement-end) .range-wrapper{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.range-label-placement-end) .label-text-wrapper{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}:host(.range-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}:host(.range-label-placement-fixed) .label-text-wrapper{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}:host(.range-label-placement-stacked) .range-wrapper{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:stretch;align-items:stretch}:host(.range-label-placement-stacked) .label-text-wrapper{-webkit-transform-origin:left top;transform-origin:left top;-webkit-transform:scale(0.75);transform:scale(0.75);margin-left:0;margin-right:0;margin-bottom:16px;max-width:calc(100% / 0.75)}:host-context([dir=rtl]):host(.range-label-placement-stacked) .label-text-wrapper,:host-context([dir=rtl]).range-label-placement-stacked .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}@supports selector(:dir(rtl)){:host(.range-label-placement-stacked:dir(rtl)) .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}}:host(.in-item.range-label-placement-stacked) .label-text-wrapper{margin-top:10px;margin-bottom:16px}:host(.in-item.range-label-placement-stacked) .native-wrapper{margin-bottom:0px}:host{--knob-border-radius:50%;--knob-background:var(--bar-background-active);--knob-box-shadow:none;--knob-size:18px;--bar-height:2px;--bar-background:rgba(var(--ion-color-primary-rgb, 0, 84, 233), 0.26);--bar-background-active:var(--ion-color-primary, #0054e9);--bar-border-radius:0;--height:42px;--pin-background:var(--ion-color-primary, #0054e9);--pin-color:var(--ion-color-primary-contrast, #fff)}::slotted(:not(ion-icon)[slot=start]),::slotted(:not(ion-icon)[slot=end]),.native-wrapper{font-size:0.75rem}:host(.range-item-start-adjustment){-webkit-padding-start:18px;padding-inline-start:18px}:host(.range-item-end-adjustment){-webkit-padding-end:18px;padding-inline-end:18px}:host(.ion-color) .range-bar{background:rgba(var(--ion-color-base-rgb), 0.26)}:host(.ion-color) .range-bar-active,:host(.ion-color) .range-knob,:host(.ion-color) .range-knob::before,:host(.ion-color) .range-pin,:host(.ion-color) .range-pin::before,:host(.ion-color) .range-tick{background:var(--ion-color-base);color:var(--ion-color-contrast)}::slotted([slot=start]){-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:14px;margin-inline-end:14px;margin-top:0;margin-bottom:0}::slotted([slot=end]){-webkit-margin-start:14px;margin-inline-start:14px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}:host(.range-has-pin:not(.range-label-placement-stacked)){padding-top:1.75rem}:host(.range-has-pin.range-label-placement-stacked) .label-text-wrapper{margin-bottom:1.75rem}.range-bar-active{bottom:0;width:auto;background:var(--bar-background-active)}.range-knob{-webkit-transform:scale(0.67);transform:scale(0.67);-webkit-transition-duration:120ms;transition-duration:120ms;-webkit-transition-property:background-color, border, -webkit-transform;transition-property:background-color, border, -webkit-transform;transition-property:transform, background-color, border;transition-property:transform, background-color, border, -webkit-transform;-webkit-transition-timing-function:ease;transition-timing-function:ease;z-index:2}.range-knob::before{border-radius:50%;position:absolute;width:var(--knob-size);height:var(--knob-size);-webkit-transform:scale(1);transform:scale(1);-webkit-transition:0.267s cubic-bezier(0, 0, 0.58, 1);transition:0.267s cubic-bezier(0, 0, 0.58, 1);background:var(--knob-background);content:"";opacity:0.13;pointer-events:none}.range-knob::before{inset-inline-start:0}.range-tick{position:absolute;top:calc((var(--height) - var(--bar-height)) / 2);width:var(--bar-height);height:var(--bar-height);background:var(--bar-background-active);z-index:1;pointer-events:none}.range-tick-active{background:transparent}.range-pin{padding-left:0;padding-right:0;padding-top:8px;padding-bottom:8px;border-radius:50%;-webkit-transform:translate3d(0,  0,  0) scale(0.01);transform:translate3d(0,  0,  0) scale(0.01);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:1.75rem;height:1.75rem;-webkit-transition:background 120ms ease, -webkit-transform 120ms ease;transition:background 120ms ease, -webkit-transform 120ms ease;transition:transform 120ms ease, background 120ms ease;transition:transform 120ms ease, background 120ms ease, -webkit-transform 120ms ease;background:var(--pin-background);color:var(--pin-color)}.range-pin::before{bottom:-1px;-webkit-margin-start:-13px;margin-inline-start:-13px;border-radius:50% 50% 50% 0;position:absolute;width:26px;height:26px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transition:background 120ms ease;transition:background 120ms ease;background:var(--pin-background);content:"";z-index:-1}.range-pin::before{inset-inline-start:50%}:host-context([dir=rtl]) .range-pin::before{left:unset}[dir=rtl] .range-pin::before{left:unset}@supports selector(:dir(rtl)){.range-pin::before:dir(rtl){left:unset}}.range-knob-pressed .range-pin,.range-knob-handle.ion-focused .range-pin{-webkit-transform:translate3d(0, calc(-100% + 4px), 0) scale(1);transform:translate3d(0, calc(-100% + 4px), 0) scale(1)}@media (any-hover: hover){.range-knob-handle:hover .range-knob:before{-webkit-transform:scale(2);transform:scale(2);opacity:0.13}}.range-knob-handle.ion-activated .range-knob:before,.range-knob-handle.ion-focused .range-knob:before,.range-knob-handle.range-knob-pressed .range-knob:before{-webkit-transform:scale(2);transform:scale(2)}.range-knob-handle.ion-focused .range-knob::before{opacity:0.13}.range-knob-handle.ion-activated .range-knob::before,.range-knob-handle.range-knob-pressed .range-knob::before{opacity:0.25}:host(:not(.range-has-pin)) .range-knob-pressed .range-knob,:host(:not(.range-has-pin)) .range-knob-handle.ion-focused .range-knob{-webkit-transform:scale(1);transform:scale(1)}:host(.range-disabled) .range-bar-active,:host(.range-disabled) .range-bar,:host(.range-disabled) .range-tick{background-color:var(--ion-color-step-250, var(--ion-background-color-step-250, #bfbfbf))}:host(.range-disabled) .range-knob{-webkit-transform:scale(0.55);transform:scale(0.55);outline:5px solid #fff;background-color:var(--ion-color-step-250, var(--ion-background-color-step-250, #bfbfbf))}:host(.range-disabled) .label-text-wrapper,:host(.range-disabled) ::slotted([slot=start]),:host(.range-disabled) ::slotted([slot=end]){opacity:0.38}',Q=O,Z=class{constructor(t){U(this,t),this.ionChange=x(this,"ionChange",7),this.ionInput=x(this,"ionInput",7),this.ionFocus=x(this,"ionFocus",7),this.ionBlur=x(this,"ionBlur",7),this.ionKnobMoveStart=x(this,"ionKnobMoveStart",7),this.ionKnobMoveEnd=x(this,"ionKnobMoveEnd",7),this.rangeId=`ion-r-${ee++}`,this.didLoad=!1,this.noUpdate=!1,this.hasFocus=!1,this.inheritedAttributes={},this.contentEl=null,this.initialContentScrollY=!0,this.compareValues=(e,n)=>typeof e=="object"&&typeof n=="object"?e.lower!==n.lower||e.upper!==n.upper:e!==n,this.clampBounds=e=>p(this.min,e,this.max),this.ensureValueInBounds=e=>this.dualKnobs?{lower:this.clampBounds(e.lower),upper:this.clampBounds(e.upper)}:this.clampBounds(e),this.setupGesture=()=>I(this,null,function*(){let e=this.rangeSlider;e&&(this.gesture=(yield import("./chunk-2OUJHQAH.js")).createGesture({el:e,gestureName:"range",gesturePriority:100,threshold:10,onStart:()=>this.onStart(),onMove:n=>this.onMove(n),onEnd:n=>this.onEnd(n)}),this.gesture.enable(!this.disabled))}),this.handleKeyboard=(e,n)=>{let{ensureValueInBounds:r}=this,a=this.step;a=a>0?a:1,a=a/(this.max-this.min),n||(a*=-1),e==="A"?this.ratioA=p(0,this.ratioA+a,1):this.ratioB=p(0,this.ratioB+a,1),this.ionKnobMoveStart.emit({value:r(this.value)}),this.updateValue(),this.emitValueChange(),this.ionKnobMoveEnd.emit({value:r(this.value)})},this.onBlur=()=>{this.hasFocus&&(this.hasFocus=!1,this.ionBlur.emit())},this.onFocus=()=>{this.hasFocus||(this.hasFocus=!0,this.ionFocus.emit())},this.ratioA=0,this.ratioB=0,this.pressedKnob=void 0,this.color=void 0,this.debounce=void 0,this.name=this.rangeId,this.label=void 0,this.dualKnobs=!1,this.min=0,this.max=100,this.pin=!1,this.pinFormatter=e=>Math.round(e),this.snaps=!1,this.step=1,this.ticks=!0,this.activeBarStart=void 0,this.disabled=!1,this.value=0,this.labelPlacement="start"}debounceChanged(){let{ionInput:t,debounce:e,originalIonInput:n}=this;this.ionInput=e===void 0?n!=null?n:t:F(t,e)}minChanged(t){c(t)||(this.min=0),this.noUpdate||this.updateRatio()}maxChanged(t){c(t)||(this.max=100),this.noUpdate||this.updateRatio()}stepChanged(t){c(t)||(this.step=1)}activeBarStartChanged(){let{activeBarStart:t}=this;t!==void 0&&(t>this.max?(B(`[ion-range] - The value of activeBarStart (${t}) is greater than the max (${this.max}). Valid values are greater than or equal to the min value and less than or equal to the max value.`,this.el),this.activeBarStart=this.max):t<this.min&&(B(`[ion-range] - The value of activeBarStart (${t}) is less than the min (${this.min}). Valid values are greater than or equal to the min value and less than or equal to the max value.`,this.el),this.activeBarStart=this.min))}disabledChanged(){this.gesture&&this.gesture.enable(!this.disabled)}valueChanged(t,e){this.compareValues(t,e)&&this.ionInput.emit({value:this.value}),this.noUpdate||this.updateRatio()}componentWillLoad(){this.el.hasAttribute("id")&&(this.rangeId=this.el.getAttribute("id")),this.inheritedAttributes=M(this.el),this.min=c(this.min)?this.min:0,this.max=c(this.max)?this.max:100,this.step=c(this.step)?this.step:1}componentDidLoad(){this.originalIonInput=this.ionInput,this.setupGesture(),this.updateRatio(),this.didLoad=!0}connectedCallback(){var t;this.updateRatio(),this.debounceChanged(),this.disabledChanged(),this.activeBarStartChanged(),this.didLoad&&this.setupGesture();let e=$(this.el);this.contentEl=(t=e==null?void 0:e.querySelector(".ion-content-scroll-host"))!==null&&t!==void 0?t:e}disconnectedCallback(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}getValue(){var t;let e=(t=this.value)!==null&&t!==void 0?t:0;return this.dualKnobs?typeof e=="object"?e:{lower:0,upper:e}:typeof e=="object"?e.upper:e}emitValueChange(){this.value=this.ensureValueInBounds(this.value),this.ionChange.emit({value:this.value})}onStart(){this.ionKnobMoveStart.emit({value:this.ensureValueInBounds(this.value)})}onMove(t){let{contentEl:e,pressedKnob:n}=this,r=t.currentX;e&&this.pressedKnob===void 0&&(this.initialContentScrollY=L(e)),n===void 0&&this.setPressedKnob(r),this.update(r)}onEnd(t){var e;let{contentEl:n,initialContentScrollY:r}=this,a=(e=t.currentX)!==null&&e!==void 0?e:t.clientX;this.pressedKnob===void 0&&this.setPressedKnob(a),n&&this.pressedKnob!==void 0&&P(n,r),this.update(a),this.pressedKnob=void 0,this.emitValueChange(),this.ionKnobMoveEnd.emit({value:this.ensureValueInBounds(this.value)})}update(t){let e=this.rect,n=p(0,(t-e.left)/e.width,1);z(this.el)&&(n=1-n),this.snaps&&(n=y(A(n,this.min,this.max,this.step),this.min,this.max)),this.pressedKnob==="A"?this.ratioA=n:this.ratioB=n,this.updateValue()}setPressedKnob(t){let e=this.rect=this.rangeSlider.getBoundingClientRect(),n=p(0,(t-e.left)/e.width,1);z(this.el)&&(n=1-n),this.pressedKnob=!this.dualKnobs||Math.abs(this.ratioA-n)<Math.abs(this.ratioB-n)?"A":"B",this.setFocus(this.pressedKnob)}get valA(){return A(this.ratioA,this.min,this.max,this.step)}get valB(){return A(this.ratioB,this.min,this.max,this.step)}get ratioLower(){if(this.dualKnobs)return Math.min(this.ratioA,this.ratioB);let{activeBarStart:t}=this;return t==null?0:y(t,this.min,this.max)}get ratioUpper(){return this.dualKnobs?Math.max(this.ratioA,this.ratioB):this.ratioA}updateRatio(){let t=this.getValue(),{min:e,max:n}=this;this.dualKnobs?(this.ratioA=y(t.lower,e,n),this.ratioB=y(t.upper,e,n)):this.ratioA=y(t,e,n)}updateValue(){this.noUpdate=!0;let{valA:t,valB:e}=this;this.value=this.dualKnobs?{lower:Math.min(t,e),upper:Math.max(t,e)}:t,this.noUpdate=!1}setFocus(t){if(this.el.shadowRoot){let e=this.el.shadowRoot.querySelector(t==="A"?".range-knob-a":".range-knob-b");e&&e.focus()}}get hasStartSlotContent(){return this.el.querySelector('[slot="start"]')!==null}get hasEndSlotContent(){return this.el.querySelector('[slot="end"]')!==null}get hasLabel(){return this.label!==void 0||this.el.querySelector('[slot="label"]')!==null}renderRangeSlider(){var t;let{min:e,max:n,step:r,handleKeyboard:a,pressedKnob:h,disabled:d,pin:u,ratioLower:l,ratioUpper:b,pinFormatter:k,inheritedAttributes:v}=this,m=`${l*100}%`,f=`${100-b*100}%`,g=z(this.el),o=g?"right":"left",w=g?"left":"right",X=s=>({[o]:s[o]});this.dualKnobs===!1&&(this.valA<((t=this.activeBarStart)!==null&&t!==void 0?t:this.min)?(m=`${b*100}%`,f=`${100-l*100}%`):(m=`${l*100}%`,f=`${100-b*100}%`));let Y={[o]:m,[w]:f},C=[];if(this.snaps&&this.ticks)for(let s=e;s<=n;s+=r){let S=y(s,e,n),_=Math.min(l,b),G=Math.max(l,b),K={ratio:S,active:S>=_&&S<=G};K[o]=`${S*100}%`,C.push(K)}return i("div",{class:"range-slider",ref:s=>this.rangeSlider=s,onPointerUp:s=>{this.pressedKnob===void 0&&(this.onStart(),this.onEnd(s))}},C.map(s=>i("div",{style:X(s),role:"presentation",class:{"range-tick":!0,"range-tick-active":s.active},part:s.active?"tick-active":"tick"})),i("div",{class:"range-bar-container"},i("div",{class:"range-bar",role:"presentation",part:"bar"}),i("div",{class:{"range-bar":!0,"range-bar-active":!0,"has-ticks":C.length>0},role:"presentation",style:Y,part:"bar-active"})),T(g,{knob:"A",pressed:h==="A",value:this.valA,ratio:this.ratioA,pin:u,pinFormatter:k,disabled:d,handleKeyboard:a,min:e,max:n,inheritedAttributes:v}),this.dualKnobs&&T(g,{knob:"B",pressed:h==="B",value:this.valB,ratio:this.ratioB,pin:u,pinFormatter:k,disabled:d,handleKeyboard:a,min:e,max:n,inheritedAttributes:v}))}render(){let{disabled:t,el:e,hasLabel:n,rangeId:r,pin:a,pressedKnob:h,labelPlacement:d,label:u}=this,l=j("ion-item",e),b=n&&(d==="start"||d==="fixed")||this.hasStartSlotContent,k=l&&!b,v=n&&d==="end"||this.hasEndSlotContent,m=l&&!v,f=R(this);return E(!0,e,this.name,JSON.stringify(this.getValue()),t),i(q,{key:"3e065039ee048f1f70d97dba5dae98fa1315d867",onFocusin:this.onFocus,onFocusout:this.onBlur,id:r,class:V(this.color,{[f]:!0,"in-item":l,"range-disabled":t,"range-pressed":h!==void 0,"range-has-pin":a,[`range-label-placement-${d}`]:!0,"range-item-start-adjustment":k,"range-item-end-adjustment":m})},i("label",{key:"27ff22842c9ea79a1b9495302b926f70c9080a95",class:"range-wrapper",id:"range-label"},i("div",{key:"da1f9784be02dfe87d2fef34931d8b7f2148189e",class:{"label-text-wrapper":!0,"label-text-wrapper-hidden":!n},part:"label"},u!==void 0?i("div",{class:"label-text"},u):i("slot",{name:"label"})),i("div",{key:"4389bf30b08214f5b5917fc30976b38f7bcdd29b",class:"native-wrapper"},i("slot",{key:"ad1b2745f8b061ee189617bb5c567e4f1d02250c",name:"start"}),this.renderRangeSlider(),i("slot",{key:"c6dec9e843e232af2a5f16a0f8ee56439c545d7a",name:"end"}))))}get el(){return D(this)}static get watchers(){return{debounce:["debounceChanged"],min:["minChanged"],max:["maxChanged"],step:["stepChanged"],activeBarStart:["activeBarStartChanged"],disabled:["disabledChanged"],value:["valueChanged"]}}},T=(t,{knob:e,value:n,ratio:r,min:a,max:h,disabled:d,pressed:u,pin:l,handleKeyboard:b,pinFormatter:k,inheritedAttributes:v})=>{let m=t?"right":"left",f=()=>{let o={};return o[m]=`${r*100}%`,o},g=v["aria-label"];return i("div",{onKeyDown:o=>{let w=o.key;w==="ArrowLeft"||w==="ArrowDown"?(b(e,!1),o.preventDefault(),o.stopPropagation()):(w==="ArrowRight"||w==="ArrowUp")&&(b(e,!0),o.preventDefault(),o.stopPropagation())},class:{"range-knob-handle":!0,"range-knob-a":e==="A","range-knob-b":e==="B","range-knob-pressed":u,"range-knob-min":n===a,"range-knob-max":n===h,"ion-activatable":!0,"ion-focusable":!0},style:f(),role:"slider",tabindex:d?-1:0,"aria-label":g!==void 0?g:null,"aria-labelledby":g===void 0?"range-label":null,"aria-valuemin":a,"aria-valuemax":h,"aria-disabled":d?"true":null,"aria-valuenow":n},l&&i("div",{class:"range-pin",role:"presentation",part:"pin"},k(n)),i("div",{class:"range-knob",role:"presentation",part:"knob"}))},A=(t,e,n,r)=>{let a=(n-e)*t;r>0&&(a=Math.round(a/r)*r+e);let h=p(e,a,n);return H(h,e,n,r)},y=(t,e,n)=>p(0,(t-e)/(n-e),1),ee=0;Z.style={ios:J,md:Q};export{Z as ion_range};
