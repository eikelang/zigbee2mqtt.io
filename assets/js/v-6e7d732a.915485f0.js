"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[53190],{145625:(e,t,a)=>{a.r(t),a.d(t,{data:()=>i});const i=JSON.parse('{"key":"v-6e7d732a","path":"/devices/STS-WTR-250.html","title":"SmartThings STS-WTR-250 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"SmartThings STS-WTR-250 control via MQTT","description":"Integrate your SmartThings STS-WTR-250 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-01-26T19:26:34.000Z"},"excerpt":"","headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Water_leak (binary)","slug":"water-leak-binary","link":"#water-leak-binary","children":[]},{"level":3,"title":"Battery_low (binary)","slug":"battery-low-binary","link":"#battery-low-binary","children":[]},{"level":3,"title":"Tamper (binary)","slug":"tamper-binary","link":"#tamper-binary","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Temperature (numeric)","slug":"temperature-numeric","link":"#temperature-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1682961407000},"filePathRelative":"devices/STS-WTR-250.md"}')},239558:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});var i=a(166252);const r=(0,i._)("h1",{id:"smartthings-sts-wtr-250",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#smartthings-sts-wtr-250","aria-hidden":"true"},"#"),(0,i.Uk)(" SmartThings STS-WTR-250")],-1),o=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th"),(0,i._)("th")])],-1),n=(0,i._)("tr",null,[(0,i._)("td",null,"Model"),(0,i._)("td",null,"STS-WTR-250")],-1),l=(0,i._)("td",null,"Vendor",-1),d=(0,i._)("tr",null,[(0,i._)("td",null,"Description"),(0,i._)("td",null,"Water leak sensor (2016 model)")],-1),s=(0,i._)("tr",null,[(0,i._)("td",null,"Exposes"),(0,i._)("td",null,"water_leak, battery_low, tamper, battery, temperature, linkquality")],-1),u=(0,i._)("tr",null,[(0,i._)("td",null,"Picture"),(0,i._)("td",null,[(0,i._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/STS-WTR-250.jpg",alt:"SmartThings STS-WTR-250"})])],-1),c=(0,i._)("h2",{id:"options",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,i.Uk)(" Options")],-1),h=(0,i.uE)('<ul><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="water-leak-binary" tabindex="-1"><a class="header-anchor" href="#water-leak-binary" aria-hidden="true">#</a> Water_leak (binary)</h3><p>Indicates whether the device detected a water leak. Value can be found in the published state on the <code>water_leak</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> water_leak is ON, if <code>false</code> OFF.</p><h3 id="battery-low-binary" tabindex="-1"><a class="header-anchor" href="#battery-low-binary" aria-hidden="true">#</a> Battery_low (binary)</h3><p>Indicates if the battery of this device is almost empty. Value can be found in the published state on the <code>battery_low</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> battery_low is ON, if <code>false</code> OFF.</p><h3 id="tamper-binary" tabindex="-1"><a class="header-anchor" href="#tamper-binary" aria-hidden="true">#</a> Tamper (binary)</h3><p>Indicates whether the device is tampered. Value can be found in the published state on the <code>tamper</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> tamper is ON, if <code>false</code> OFF.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported.. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric" aria-hidden="true">#</a> Temperature (numeric)</h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',14),p={},m=(0,a(983744).Z)(p,[["render",function(e,t){const a=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.kq)(" !!!! "),(0,i.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,i.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,i.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,i.kq)(" !!!! "),r,(0,i._)("table",null,[o,(0,i._)("tbody",null,[n,(0,i._)("tr",null,[l,(0,i._)("td",null,[(0,i.Wm)(a,{to:"/supported-devices/#v=SmartThings"},{default:(0,i.w5)((()=>[(0,i.Uk)("SmartThings")])),_:1})])]),d,s,u])]),(0,i.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,i.kq)(" Notes END: Do not edit below this line "),c,(0,i._)("p",null,[(0,i._)("em",null,[(0,i.Wm)(a,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.w5)((()=>[(0,i.Uk)("How to use device type specific configuration")])),_:1})])]),h])}]])}}]);