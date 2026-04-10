import { c as create_ssr_component, b as add_attribute, e as escape, a as subscribe, v as validate_component, o as onDestroy, d as each, f as get_store_value } from "../../chunks/ssr.js";
import { w as writable, d as derived } from "../../chunks/index.js";
import "ml-regression-polynomial";
import { scaleLinear } from "d3-scale";
import { line } from "d3-shape";
import { createNoise2D } from "simplex-noise";
const css$7 = {
  code: ".toggle-btn.svelte-1ty4nfi{background:none;color:rgb(255, 255, 255);font-size:12px;padding:2px 0;text-align:left;transition:color 0.15s;border:none;width:100%;cursor:pointer;letter-spacing:0.5px}.toggle-btn.svelte-1ty4nfi:hover:not(:disabled){color:rgb(200, 200, 200)}.toggle-btn.active.svelte-1ty4nfi{color:rgb(255, 255, 255);font-weight:600}.toggle-btn.svelte-1ty4nfi:disabled{opacity:0.35;cursor:not-allowed}",
  map: '{"version":3,"file":"ToggleButton.svelte","sources":["ToggleButton.svelte"],"sourcesContent":["<script lang=\\"ts\\">export let label;\\nexport let active = false;\\nexport let disabled = false;\\nexport let onClick = () => {\\n};\\n<\/script>\\r\\n\\r\\n<button\\r\\n\\tclass=\\"toggle-btn\\"\\r\\n\\tclass:active\\r\\n\\t{disabled}\\r\\n\\taria-pressed={active}\\r\\n\\taria-label={label}\\r\\n\\ton:click={onClick}\\r\\n>\\r\\n\\t{label}\\r\\n</button>\\r\\n\\r\\n<style>\\r\\n\\t.toggle-btn {\\r\\n\\t\\tbackground: none;\\r\\n\\t\\tcolor: rgb(255, 255, 255);\\r\\n\\t\\tfont-size: 12px;\\r\\n\\t\\tpadding: 2px 0;\\r\\n\\t\\ttext-align: left;\\r\\n\\t\\ttransition: color 0.15s;\\r\\n\\t\\tborder: none;\\r\\n\\t\\twidth: 100%;\\r\\n\\t\\tcursor: pointer;\\r\\n\\t\\tletter-spacing: 0.5px;\\r\\n\\t}\\r\\n\\t.toggle-btn:hover:not(:disabled) {\\r\\n\\t\\tcolor: rgb(200, 200, 200);\\r\\n\\t}\\r\\n\\t.toggle-btn.active {\\r\\n\\t\\tcolor: rgb(255, 255, 255);\\r\\n\\t\\tfont-weight: 600;\\r\\n\\t}\\r\\n\\t.toggle-btn:disabled {\\r\\n\\t\\topacity: 0.35;\\r\\n\\t\\tcursor: not-allowed;\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAmBC,0BAAY,CACX,UAAU,CAAE,IAAI,CAChB,KAAK,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACzB,SAAS,CAAE,IAAI,CACf,OAAO,CAAE,GAAG,CAAC,CAAC,CACd,UAAU,CAAE,IAAI,CAChB,UAAU,CAAE,KAAK,CAAC,KAAK,CACvB,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,OAAO,CACf,cAAc,CAAE,KACjB,CACA,0BAAW,MAAM,KAAK,SAAS,CAAE,CAChC,KAAK,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CACzB,CACA,WAAW,sBAAQ,CAClB,KAAK,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACzB,WAAW,CAAE,GACd,CACA,0BAAW,SAAU,CACpB,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,WACT"}'
};
const ToggleButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { label } = $$props;
  let { active = false } = $$props;
  let { disabled = false } = $$props;
  let { onClick = () => {
  } } = $$props;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0) $$bindings.label(label);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0) $$bindings.active(active);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0) $$bindings.disabled(disabled);
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0) $$bindings.onClick(onClick);
  $$result.css.add(css$7);
  return `<button class="${["toggle-btn svelte-1ty4nfi", active ? "active" : ""].join(" ").trim()}" ${disabled ? "disabled" : ""}${add_attribute("aria-pressed", active, 0)}${add_attribute("aria-label", label, 0)}>${escape(label)} </button>`;
});
function solve(coefficients, x) {
  let y = 0;
  for (let j = 0; j < coefficients.length; j++) {
    y += coefficients[j] * Math.pow(x, j);
  }
  return y;
}
const mainMode = writable("CREATE");
const editInput = writable("MOUSE");
const playMode = writable("PARTICLES");
const exportLang = writable("JAVASCRIPT");
const isEditMode = writable(false);
const showExport = writable(false);
function createRecordingState() {
  return {
    moments3D: [],
    moments2D: [],
    coefficients: new Array(9).fill(0),
    valid: false,
    minY: 0,
    maxY: 1,
    editMode: false,
    selectedId: -1
  };
}
function enterNewValue(state, pos) {
  state.moments3D.push({
    pos: { ...pos },
    time: performance.now()
  });
}
const recordingState = writable(createRecordingState());
const isRecording = writable(false);
derived(recordingState, ($s) => $s.coefficients);
const isValid = derived(recordingState, ($s) => $s.valid);
derived(recordingState, ($s) => {
  return (x) => solve($s.coefficients, x);
});
const statusMessages = writable([]);
function addStatusMessage(msg) {
  const now = /* @__PURE__ */ new Date();
  const ts = `${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}:${now.getSeconds().toString().padStart(2, "0")}`;
  statusMessages.update((msgs) => {
    const next = [...msgs, `[${ts}] ${msg}`];
    return next.slice(-4);
  });
}
const css$6 = {
  code: ".sidebar.svelte-vfo8bw{display:flex;flex-direction:column;gap:6px;padding:2rem;padding-bottom:60px;background:rgb(20, 20, 20);border-right:1px solid rgb(40, 40, 40);overflow-y:auto}.mode-section.svelte-vfo8bw{display:flex;flex-direction:column}.mode-btn.svelte-vfo8bw{background:none;color:rgb(100, 100, 100);font-size:13px;padding:4px 0;text-align:left;letter-spacing:1.5px;transition:color 0.15s;border:none;cursor:pointer}.mode-btn.svelte-vfo8bw:hover{color:rgb(200, 200, 200)}.mode-btn.active.svelte-vfo8bw{color:rgb(255, 255, 255);font-weight:600}.helper.svelte-vfo8bw{font-size:9px;color:rgb(100, 100, 100);line-height:1.4;margin:2px 0 4px;padding:0}.sub-options.svelte-vfo8bw{display:flex;flex-direction:column;padding-left:12px;gap:2px}.option-btn.svelte-vfo8bw{background:none;color:rgb(80, 80, 80);font-size:11px;padding:2px 0;text-align:left;transition:color 0.15s;border:none;cursor:pointer;letter-spacing:0.5px}.option-btn.svelte-vfo8bw:hover{color:rgb(200, 200, 200)}.option-btn.active.svelte-vfo8bw{color:rgb(255, 255, 255)}.bottom-controls.svelte-vfo8bw{margin-top:auto;display:flex;flex-direction:column;gap:4px}",
  map: `{"version":3,"file":"Sidebar.svelte","sources":["Sidebar.svelte"],"sourcesContent":["<script lang=\\"ts\\">import ToggleButton from \\"./ToggleButton.svelte\\";\\nimport { mainMode, editInput, playMode, isEditMode, showExport } from \\"$lib/stores/appState\\";\\nimport { isValid } from \\"$lib/stores/recording\\";\\n<\/script>\\r\\n\\r\\n<aside class=\\"sidebar\\" aria-label=\\"Controls\\">\\r\\n\\t<div class=\\"mode-section\\">\\r\\n\\t\\t<button\\r\\n\\t\\t\\tclass=\\"mode-btn\\"\\r\\n\\t\\t\\tclass:active={$mainMode === 'CREATE'}\\r\\n\\t\\t\\ton:click={() => mainMode.set('CREATE')}\\r\\n\\t\\t>\\r\\n\\t\\t\\tCREATE\\r\\n\\t\\t</button>\\r\\n\\t\\t{#if $mainMode === 'CREATE'}\\r\\n\\t\\t\\t<p class=\\"helper\\">Capture motion to shape a transition curve</p>\\r\\n\\t\\t\\t<div class=\\"sub-options\\">\\r\\n\\t\\t\\t\\t<button\\r\\n\\t\\t\\t\\t\\tclass=\\"option-btn\\"\\r\\n\\t\\t\\t\\t\\tclass:active={$editInput === 'MOUSE'}\\r\\n\\t\\t\\t\\t\\ton:click={() => editInput.set('MOUSE')}\\r\\n\\t\\t\\t\\t>\\r\\n\\t\\t\\t\\t\\tMOUSE\\r\\n\\t\\t\\t\\t</button>\\r\\n\\t\\t\\t\\t<button\\r\\n\\t\\t\\t\\t\\tclass=\\"option-btn\\"\\r\\n\\t\\t\\t\\t\\tclass:active={$editInput === 'SOUND'}\\r\\n\\t\\t\\t\\t\\ton:click={() => editInput.set('SOUND')}\\r\\n\\t\\t\\t\\t>\\r\\n\\t\\t\\t\\t\\tSOUND\\r\\n\\t\\t\\t\\t</button>\\r\\n\\t\\t\\t</div>\\r\\n\\t\\t{/if}\\r\\n\\t</div>\\r\\n\\r\\n\\t<div class=\\"mode-section\\">\\r\\n\\t\\t<button\\r\\n\\t\\t\\tclass=\\"mode-btn\\"\\r\\n\\t\\t\\tclass:active={$mainMode === 'PLAY'}\\r\\n\\t\\t\\ton:click={() => mainMode.set('PLAY')}\\r\\n\\t\\t>\\r\\n\\t\\t\\tPLAY\\r\\n\\t\\t</button>\\r\\n\\t\\t{#if $mainMode === 'PLAY'}\\r\\n\\t\\t\\t<p class=\\"helper\\">See how your curve drives motion</p>\\r\\n\\t\\t\\t<div class=\\"sub-options\\">\\r\\n\\t\\t\\t\\t<button\\r\\n\\t\\t\\t\\t\\tclass=\\"option-btn\\"\\r\\n\\t\\t\\t\\t\\tclass:active={$playMode === 'PARTICLES'}\\r\\n\\t\\t\\t\\t\\ton:click={() => playMode.set('PARTICLES')}\\r\\n\\t\\t\\t\\t>\\r\\n\\t\\t\\t\\t\\tPARTICLES\\r\\n\\t\\t\\t\\t</button>\\r\\n\\t\\t\\t\\t<button\\r\\n\\t\\t\\t\\t\\tclass=\\"option-btn\\"\\r\\n\\t\\t\\t\\t\\tclass:active={$playMode === 'PARTICLES_ROTATE'}\\r\\n\\t\\t\\t\\t\\ton:click={() => playMode.set('PARTICLES_ROTATE')}\\r\\n\\t\\t\\t\\t>\\r\\n\\t\\t\\t\\t\\tPARTICLES ROTATE\\r\\n\\t\\t\\t\\t</button>\\r\\n\\t\\t\\t\\t<button\\r\\n\\t\\t\\t\\t\\tclass=\\"option-btn\\"\\r\\n\\t\\t\\t\\t\\tclass:active={$playMode === 'ICONS'}\\r\\n\\t\\t\\t\\t\\ton:click={() => playMode.set('ICONS')}\\r\\n\\t\\t\\t\\t>\\r\\n\\t\\t\\t\\t\\tICONS\\r\\n\\t\\t\\t\\t</button>\\r\\n\\t\\t\\t</div>\\r\\n\\t\\t{/if}\\r\\n\\t</div>\\r\\n\\r\\n\\t<div class=\\"bottom-controls\\">\\r\\n\\t\\t<ToggleButton\\r\\n\\t\\t\\tlabel=\\"EDIT\\"\\r\\n\\t\\t\\tactive={$isEditMode}\\r\\n\\t\\t\\tdisabled={!$isValid}\\r\\n\\t\\t\\tonClick={() => isEditMode.update((v) => !v)}\\r\\n\\t\\t/>\\r\\n\\t\\t<ToggleButton\\r\\n\\t\\t\\tlabel=\\"EXPORT\\"\\r\\n\\t\\t\\tactive={$showExport}\\r\\n\\t\\t\\tdisabled={!$isValid}\\r\\n\\t\\t\\tonClick={() => showExport.update((v) => !v)}\\r\\n\\t\\t/>\\r\\n\\t</div>\\r\\n</aside>\\r\\n\\r\\n<style>\\r\\n\\t.sidebar {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tflex-direction: column;\\r\\n\\t\\tgap: 6px;\\r\\n\\t\\tpadding: 2rem;\\r\\n\\t\\tpadding-bottom: 60px;\\r\\n\\t\\tbackground: rgb(20, 20, 20);\\r\\n\\t\\tborder-right: 1px solid rgb(40, 40, 40);\\r\\n\\t\\toverflow-y: auto;\\r\\n\\t}\\r\\n\\t.mode-section {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tflex-direction: column;\\r\\n\\t}\\r\\n\\t.mode-btn {\\r\\n\\t\\tbackground: none;\\r\\n\\t\\tcolor: rgb(100, 100, 100);\\r\\n\\t\\tfont-size: 13px;\\r\\n\\t\\tpadding: 4px 0;\\r\\n\\t\\ttext-align: left;\\r\\n\\t\\tletter-spacing: 1.5px;\\r\\n\\t\\ttransition: color 0.15s;\\r\\n\\t\\tborder: none;\\r\\n\\t\\tcursor: pointer;\\r\\n\\t}\\r\\n\\t.mode-btn:hover {\\r\\n\\t\\tcolor: rgb(200, 200, 200);\\r\\n\\t}\\r\\n\\t.mode-btn.active {\\r\\n\\t\\tcolor: rgb(255, 255, 255);\\r\\n\\t\\tfont-weight: 600;\\r\\n\\t}\\r\\n\\t.helper {\\r\\n\\t\\tfont-size: 9px;\\r\\n\\t\\tcolor: rgb(100, 100, 100);\\r\\n\\t\\tline-height: 1.4;\\r\\n\\t\\tmargin: 2px 0 4px;\\r\\n\\t\\tpadding: 0;\\r\\n\\t}\\r\\n\\t.sub-options {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tflex-direction: column;\\r\\n\\t\\tpadding-left: 12px;\\r\\n\\t\\tgap: 2px;\\r\\n\\t}\\r\\n\\t.option-btn {\\r\\n\\t\\tbackground: none;\\r\\n\\t\\tcolor: rgb(80, 80, 80);\\r\\n\\t\\tfont-size: 11px;\\r\\n\\t\\tpadding: 2px 0;\\r\\n\\t\\ttext-align: left;\\r\\n\\t\\ttransition: color 0.15s;\\r\\n\\t\\tborder: none;\\r\\n\\t\\tcursor: pointer;\\r\\n\\t\\tletter-spacing: 0.5px;\\r\\n\\t}\\r\\n\\t.option-btn:hover {\\r\\n\\t\\tcolor: rgb(200, 200, 200);\\r\\n\\t}\\r\\n\\t.option-btn.active {\\r\\n\\t\\tcolor: rgb(255, 255, 255);\\r\\n\\t}\\r\\n\\t.bottom-controls {\\r\\n\\t\\tmargin-top: auto;\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tflex-direction: column;\\r\\n\\t\\tgap: 4px;\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAwFC,sBAAS,CACR,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,GAAG,CACR,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,IAAI,CACpB,UAAU,CAAE,IAAI,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAC3B,YAAY,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CACvC,UAAU,CAAE,IACb,CACA,2BAAc,CACb,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MACjB,CACA,uBAAU,CACT,UAAU,CAAE,IAAI,CAChB,KAAK,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACzB,SAAS,CAAE,IAAI,CACf,OAAO,CAAE,GAAG,CAAC,CAAC,CACd,UAAU,CAAE,IAAI,CAChB,cAAc,CAAE,KAAK,CACrB,UAAU,CAAE,KAAK,CAAC,KAAK,CACvB,MAAM,CAAE,IAAI,CACZ,MAAM,CAAE,OACT,CACA,uBAAS,MAAO,CACf,KAAK,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CACzB,CACA,SAAS,qBAAQ,CAChB,KAAK,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACzB,WAAW,CAAE,GACd,CACA,qBAAQ,CACP,SAAS,CAAE,GAAG,CACd,KAAK,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACzB,WAAW,CAAE,GAAG,CAChB,MAAM,CAAE,GAAG,CAAC,CAAC,CAAC,GAAG,CACjB,OAAO,CAAE,CACV,CACA,0BAAa,CACZ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,YAAY,CAAE,IAAI,CAClB,GAAG,CAAE,GACN,CACA,yBAAY,CACX,UAAU,CAAE,IAAI,CAChB,KAAK,CAAE,IAAI,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CACtB,SAAS,CAAE,IAAI,CACf,OAAO,CAAE,GAAG,CAAC,CAAC,CACd,UAAU,CAAE,IAAI,CAChB,UAAU,CAAE,KAAK,CAAC,KAAK,CACvB,MAAM,CAAE,IAAI,CACZ,MAAM,CAAE,OAAO,CACf,cAAc,CAAE,KACjB,CACA,yBAAW,MAAO,CACjB,KAAK,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CACzB,CACA,WAAW,qBAAQ,CAClB,KAAK,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CACzB,CACA,8BAAiB,CAChB,UAAU,CAAE,IAAI,CAChB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,GACN"}`
};
const Sidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $mainMode, $$unsubscribe_mainMode;
  let $editInput, $$unsubscribe_editInput;
  let $playMode, $$unsubscribe_playMode;
  let $isEditMode, $$unsubscribe_isEditMode;
  let $isValid, $$unsubscribe_isValid;
  let $showExport, $$unsubscribe_showExport;
  $$unsubscribe_mainMode = subscribe(mainMode, (value) => $mainMode = value);
  $$unsubscribe_editInput = subscribe(editInput, (value) => $editInput = value);
  $$unsubscribe_playMode = subscribe(playMode, (value) => $playMode = value);
  $$unsubscribe_isEditMode = subscribe(isEditMode, (value) => $isEditMode = value);
  $$unsubscribe_isValid = subscribe(isValid, (value) => $isValid = value);
  $$unsubscribe_showExport = subscribe(showExport, (value) => $showExport = value);
  $$result.css.add(css$6);
  $$unsubscribe_mainMode();
  $$unsubscribe_editInput();
  $$unsubscribe_playMode();
  $$unsubscribe_isEditMode();
  $$unsubscribe_isValid();
  $$unsubscribe_showExport();
  return `<aside class="sidebar svelte-vfo8bw" aria-label="Controls"><div class="mode-section svelte-vfo8bw"><button class="${["mode-btn svelte-vfo8bw", $mainMode === "CREATE" ? "active" : ""].join(" ").trim()}" data-svelte-h="svelte-1uhr0hc">CREATE</button> ${$mainMode === "CREATE" ? `<p class="helper svelte-vfo8bw" data-svelte-h="svelte-14vnna0">Capture motion to shape a transition curve</p> <div class="sub-options svelte-vfo8bw"><button class="${["option-btn svelte-vfo8bw", $editInput === "MOUSE" ? "active" : ""].join(" ").trim()}" data-svelte-h="svelte-1nb77vz">MOUSE</button> <button class="${["option-btn svelte-vfo8bw", $editInput === "SOUND" ? "active" : ""].join(" ").trim()}" data-svelte-h="svelte-1dngg6z">SOUND</button></div>` : ``}</div> <div class="mode-section svelte-vfo8bw"><button class="${["mode-btn svelte-vfo8bw", $mainMode === "PLAY" ? "active" : ""].join(" ").trim()}" data-svelte-h="svelte-19l8gga">PLAY</button> ${$mainMode === "PLAY" ? `<p class="helper svelte-vfo8bw" data-svelte-h="svelte-1yk9kyj">See how your curve drives motion</p> <div class="sub-options svelte-vfo8bw"><button class="${["option-btn svelte-vfo8bw", $playMode === "PARTICLES" ? "active" : ""].join(" ").trim()}" data-svelte-h="svelte-1pcr58n">PARTICLES</button> <button class="${["option-btn svelte-vfo8bw", $playMode === "PARTICLES_ROTATE" ? "active" : ""].join(" ").trim()}" data-svelte-h="svelte-k7days">PARTICLES ROTATE</button> <button class="${["option-btn svelte-vfo8bw", $playMode === "ICONS" ? "active" : ""].join(" ").trim()}" data-svelte-h="svelte-xqkduo">ICONS</button></div>` : ``}</div> <div class="bottom-controls svelte-vfo8bw">${validate_component(ToggleButton, "ToggleButton").$$render(
    $$result,
    {
      label: "EDIT",
      active: $isEditMode,
      disabled: !$isValid,
      onClick: () => isEditMode.update((v) => !v)
    },
    {},
    {}
  )} ${validate_component(ToggleButton, "ToggleButton").$$render(
    $$result,
    {
      label: "EXPORT",
      active: $showExport,
      disabled: !$isValid,
      onClick: () => showExport.update((v) => !v)
    },
    {},
    {}
  )}</div> </aside>`;
});
class SoundInput {
  audioContext = null;
  analyser = null;
  dataArray = null;
  stream = null;
  active = false;
  async start() {
    try {
      this.stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      this.audioContext = new AudioContext();
      const source = this.audioContext.createMediaStreamSource(this.stream);
      this.analyser = this.audioContext.createAnalyser();
      this.analyser.fftSize = 1024;
      source.connect(this.analyser);
      this.dataArray = new Uint8Array(this.analyser.frequencyBinCount);
      this.active = true;
      return true;
    } catch {
      this.active = false;
      return false;
    }
  }
  /** Get current volume level [0, 1] */
  getLevel() {
    if (!this.analyser || !this.dataArray) return 0;
    this.analyser.getByteTimeDomainData(this.dataArray);
    let sum = 0;
    for (let i = 0; i < this.dataArray.length; i++) {
      const val = (this.dataArray[i] - 128) / 128;
      sum += val * val;
    }
    const rms = Math.sqrt(sum / this.dataArray.length);
    return Math.min(1, rms * 4);
  }
  stop() {
    if (this.stream) {
      this.stream.getTracks().forEach((t) => t.stop());
    }
    if (this.audioContext) {
      this.audioContext.close();
    }
    this.active = false;
    this.analyser = null;
    this.dataArray = null;
    this.stream = null;
    this.audioContext = null;
  }
}
const css$5 = {
  code: `.create-view.svelte-1tstxla.svelte-1tstxla{flex:1;display:flex;overflow:hidden}.chart.svelte-1tstxla.svelte-1tstxla{width:100%;height:100%;background:rgb(20, 20, 20);user-select:none;-webkit-user-select:none;cursor:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Cline x1='10' y1='0' x2='10' y2='20' stroke='%23666' stroke-width='1'/%3E%3Cline x1='0' y1='10' x2='20' y2='10' stroke='%23666' stroke-width='1'/%3E%3C/svg%3E")\r
			10 10,\r
			crosshair}.chart.drawing.svelte-1tstxla.svelte-1tstxla{cursor:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Cline x1='10' y1='0' x2='10' y2='20' stroke='%23fff' stroke-width='1'/%3E%3Cline x1='0' y1='10' x2='20' y2='10' stroke='%23fff' stroke-width='1'/%3E%3C/svg%3E")\r
			10 10,\r
			crosshair}.axis-labels.svelte-1tstxla text.svelte-1tstxla{font:9px Consolas, monospace;fill:rgb(160, 160, 160)}.point.svelte-1tstxla.svelte-1tstxla{fill:rgb(255, 255, 255)}.point-selected.svelte-1tstxla.svelte-1tstxla{fill:rgb(255, 255, 255)}.selected-label.svelte-1tstxla.svelte-1tstxla{font:10px Consolas, monospace;fill:rgb(255, 255, 255)}.helper-text.svelte-1tstxla.svelte-1tstxla{font:14px Consolas, monospace;fill:rgba(255, 255, 255, 0.25)}.recording-text.svelte-1tstxla.svelte-1tstxla{font:12px Consolas, monospace;fill:rgba(255, 255, 255, 0.35)}`,
  map: `{"version":3,"file":"CreateView.svelte","sources":["CreateView.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { onMount, onDestroy } from \\"svelte\\";\\nimport { scaleLinear } from \\"d3-scale\\";\\nimport { line as d3Line } from \\"d3-shape\\";\\nimport { recordingState, isRecording, addStatusMessage } from \\"$lib/stores/recording\\";\\nimport { isEditMode, editInput } from \\"$lib/stores/appState\\";\\nimport { SoundInput } from \\"$lib/core/sound\\";\\nimport {\\n  enterNewValue,\\n  remap,\\n  createRecordingState,\\n  updatePointY,\\n  deletePoint,\\n  executeFitter\\n} from \\"$lib/core/recording\\";\\nimport { solve } from \\"$lib/core/polyFitter\\";\\nimport { get } from \\"svelte/store\\";\\nlet containerEl;\\nlet svgEl;\\nlet soundInput = new SoundInput();\\nlet soundAnimId;\\nlet frameCount = 0;\\nlet isDrawing = false;\\nlet width = 1280;\\nlet height = 720;\\n$: marginX = width * 0.1;\\n$: marginY = height * 0.1;\\n$: xScale = scaleLinear().domain([0, 1]).range([marginX, width - marginX]);\\n$: yScale = scaleLinear().domain([0, 1]).range([height - marginY, marginY]);\\n$: xLabels = Array.from({ length: 11 }, (_, i) => {\\n  const val = i / 10;\\n  return { x: xScale(val), y: yScale(0) + 16, text: val.toFixed(1) };\\n});\\n$: yLabels = Array.from({ length: 6 }, (_, i) => {\\n  const norm = i / 5;\\n  const yVal = $recordingState.valid ? $recordingState.minY + ($recordingState.maxY - $recordingState.minY) * norm : norm;\\n  return {\\n    x: xScale(0) - 10,\\n    y: yScale(norm) + 3,\\n    text: $recordingState.valid ? yVal.toFixed(2) : norm.toFixed(1)\\n  };\\n});\\n$: curveData = (() => {\\n  if (!$recordingState.valid) return { path: \\"\\", stops: [] };\\n  const coeffs = $recordingState.coefficients;\\n  const range = $recordingState.maxY - $recordingState.minY;\\n  const numPts = 200;\\n  const pts = [];\\n  for (let i = 0; i <= numPts; i++) {\\n    const t = i / numPts;\\n    const val = solve(coeffs, t);\\n    const yNorm = range > 0 ? (val - $recordingState.minY) / range : 0;\\n    pts.push({ x: t, y: yNorm, slope: 0 });\\n  }\\n  let maxSlope = 0;\\n  for (let i = 0; i < pts.length; i++) {\\n    let slope;\\n    if (i === 0) {\\n      slope = Math.abs(pts[1].y - pts[0].y) * numPts;\\n    } else if (i === pts.length - 1) {\\n      slope = Math.abs(pts[i].y - pts[i - 1].y) * numPts;\\n    } else {\\n      slope = Math.abs(pts[i + 1].y - pts[i - 1].y) * numPts * 0.5;\\n    }\\n    pts[i].slope = slope;\\n    if (slope > maxSlope) maxSlope = slope;\\n  }\\n  const lineGen = d3Line().x((d) => xScale(d.x)).y((d) => yScale(d.y));\\n  const path = lineGen(pts) || \\"\\";\\n  const stops = [];\\n  for (let i = 0; i <= numPts; i += 5) {\\n    const pt = pts[i];\\n    const norm = maxSlope > 0 ? pt.slope / maxSlope : 0;\\n    stops.push({\\n      offset: \`\${(pt.x * 100).toFixed(1)}%\`,\\n      color: slopeColor(norm)\\n    });\\n  }\\n  return { path, stops };\\n})();\\nfunction slopeColor(t) {\\n  if (t < 0.5) {\\n    const s = t / 0.5;\\n    const r = Math.round(0 + (0 - 0) * s);\\n    const g = Math.round(200 + (255 - 200) * s);\\n    const b = Math.round(80 + (220 - 80) * s);\\n    return \`rgb(\${r},\${g},\${b})\`;\\n  } else {\\n    const s = (t - 0.5) / 0.5;\\n    const r = Math.round(0 + (80 - 0) * s);\\n    const g = Math.round(255 + (140 - 255) * s);\\n    const b = Math.round(220 + (255 - 220) * s);\\n    return \`rgb(\${r},\${g},\${b})\`;\\n  }\\n}\\n$: dataPoints = $recordingState.moments2D.map((m, i) => ({\\n  x: xScale(m.time),\\n  y: yScale(m.distance),\\n  selected: $isEditMode && i === $recordingState.selectedId,\\n  index: i\\n}));\\n$: selectedPoint = (() => {\\n  const id = $recordingState.selectedId;\\n  if (!$isEditMode || id < 0 || id >= $recordingState.moments2D.length) return null;\\n  const m = $recordingState.moments2D[id];\\n  return {\\n    cx: xScale(m.time),\\n    cy: yScale(m.distance),\\n    label: \`(\${m.time.toFixed(3)}, \${m.distance.toFixed(3)})\`\\n  };\\n})();\\nonMount(() => {\\n  updateSize();\\n  const obs = new ResizeObserver(() => updateSize());\\n  obs.observe(containerEl);\\n  return () => obs.disconnect();\\n});\\nfunction updateSize() {\\n  if (!containerEl) return;\\n  width = containerEl.clientWidth;\\n  height = containerEl.clientHeight;\\n}\\nfunction getSvgPos(e) {\\n  const rect = svgEl.getBoundingClientRect();\\n  return {\\n    x: (e.clientX - rect.left) / rect.width * width,\\n    y: (e.clientY - rect.top) / rect.height * height\\n  };\\n}\\nfunction getDataPos(e) {\\n  const pos = getSvgPos(e);\\n  return {\\n    mx: Math.max(0, Math.min(1, xScale.invert(pos.x))),\\n    my: Math.max(0, Math.min(1, yScale.invert(pos.y)))\\n  };\\n}\\nfunction handleMouseDown(e) {\\n  if (e.button !== 0) return;\\n  isDrawing = true;\\n  const state = get(recordingState);\\n  const edit = get(isEditMode);\\n  const pos = getSvgPos(e);\\n  if (edit && state.valid) {\\n    let minDist = 25;\\n    let closestId = -1;\\n    for (let i = 0; i < state.moments2D.length; i++) {\\n      const m = state.moments2D[i];\\n      const px = xScale(m.time);\\n      const py = yScale(m.distance);\\n      const d = Math.sqrt((pos.x - px) ** 2 + (pos.y - py) ** 2);\\n      if (d < minDist) {\\n        minDist = d;\\n        closestId = i;\\n      }\\n    }\\n    recordingState.update((s) => {\\n      s.selectedId = closestId;\\n      return s;\\n    });\\n    return;\\n  }\\n  if (get(editInput) === \\"MOUSE\\") {\\n    const newState = createRecordingState();\\n    recordingState.set(newState);\\n    isRecording.set(true);\\n    frameCount = 0;\\n    addStatusMessage(\\"Recording started (mouse)\\");\\n  }\\n}\\nfunction handleMouseMove(e) {\\n  const recording = get(isRecording);\\n  const state = get(recordingState);\\n  const edit = get(isEditMode);\\n  const pos = getSvgPos(e);\\n  if (recording && !edit && get(editInput) === \\"MOUSE\\") {\\n    frameCount++;\\n    if (frameCount > 5) {\\n      recordingState.update((s) => {\\n        enterNewValue(s, { x: pos.x, y: pos.y, z: 0 });\\n        return s;\\n      });\\n    }\\n  }\\n  if (edit && state.selectedId >= 0 && e.buttons === 1) {\\n    const rect = svgEl.getBoundingClientRect();\\n    const deltaY = e.movementY / rect.height * (1 / 0.8);\\n    recordingState.update((s) => {\\n      updatePointY(s, s.selectedId, deltaY);\\n      executeFitter(s);\\n      return s;\\n    });\\n  }\\n}\\nfunction handleMouseUp() {\\n  isDrawing = false;\\n  const recording = get(isRecording);\\n  if (recording) {\\n    isRecording.set(false);\\n    recordingState.update((s) => {\\n      remap(s);\\n      return s;\\n    });\\n    const state = get(recordingState);\\n    if (state.valid) {\\n      addStatusMessage(\\"Recording complete - polynomial fitted\\");\\n    } else {\\n      addStatusMessage(\\"Recording invalid - need more data points\\");\\n    }\\n  }\\n  recordingState.update((s) => {\\n    s.selectedId = -1;\\n    return s;\\n  });\\n}\\n$: if ($editInput === \\"SOUND\\" && !soundInput.active) {\\n  startSound();\\n} else if ($editInput !== \\"SOUND\\" && soundInput.active) {\\n  soundInput.stop();\\n}\\nasync function startSound() {\\n  const ok = await soundInput.start();\\n  if (ok) {\\n    addStatusMessage(\\"Microphone active\\");\\n    pollSound();\\n  } else {\\n    addStatusMessage(\\"Microphone access denied\\");\\n  }\\n}\\nfunction pollSound() {\\n  if (!soundInput.active) return;\\n  const recording = get(isRecording);\\n  if (recording) {\\n    const vol = soundInput.getLevel();\\n    recordingState.update((s) => {\\n      enterNewValue(s, { x: vol, y: 0, z: 0 });\\n      return s;\\n    });\\n  }\\n  soundAnimId = requestAnimationFrame(pollSound);\\n}\\nfunction handleKeyDown(e) {\\n  if (e.key === \\"s\\" || e.key === \\"S\\") {\\n    const state = get(recordingState);\\n    const edit = get(isEditMode);\\n    if (edit && state.selectedId >= 0) {\\n      recordingState.update((s) => {\\n        const ok = deletePoint(s, s.selectedId);\\n        if (ok) s.selectedId = -1;\\n        return s;\\n      });\\n      addStatusMessage(\\"Point deleted\\");\\n    }\\n  }\\n}\\nonDestroy(() => {\\n  soundInput.stop();\\n  if (soundAnimId) cancelAnimationFrame(soundAnimId);\\n});\\n<\/script>\\r\\n\\r\\n<svelte:window on:keydown={handleKeyDown} />\\r\\n\\r\\n<div class=\\"create-view\\" bind:this={containerEl}>\\r\\n\\t<!-- svelte-ignore a11y-no-static-element-interactions -->\\r\\n\\t<svg\\r\\n\\t\\tbind:this={svgEl}\\r\\n\\t\\tviewBox=\\"0 0 {width} {height}\\"\\r\\n\\t\\tpreserveAspectRatio=\\"xMidYMid meet\\"\\r\\n\\t\\tclass=\\"chart\\"\\r\\n\\t\\tclass:drawing={isDrawing}\\r\\n\\t\\ton:mousedown={handleMouseDown}\\r\\n\\t\\ton:mousemove={handleMouseMove}\\r\\n\\t\\ton:mouseup={handleMouseUp}\\r\\n\\t>\\r\\n\\t\\r\\n\\t\\t<!-- X axis labels -->\\r\\n\\t\\t<g class=\\"axis-labels\\">\\r\\n\\t\\t\\t{#each xLabels as label}\\r\\n\\t\\t\\t\\t<text x={label.x} y={label.y} text-anchor=\\"middle\\">{label.text}</text>\\r\\n\\t\\t\\t{/each}\\r\\n\\t\\t</g>\\r\\n\\r\\n\\t\\t<!-- Y axis labels -->\\r\\n\\t\\t<g class=\\"axis-labels\\">\\r\\n\\t\\t\\t{#each yLabels as label}\\r\\n\\t\\t\\t\\t<text x={label.x} y={label.y} text-anchor=\\"end\\">{label.text}</text>\\r\\n\\t\\t\\t{/each}\\r\\n\\t\\t</g>\\r\\n\\r\\n\\t\\t<!-- Curve with slope-based gradient -->\\r\\n\\t\\t{#if $recordingState.valid && curveData.path}\\r\\n\\t\\t\\t<defs>\\r\\n\\t\\t\\t\\t<linearGradient id=\\"curve-gradient\\" x1=\\"0%\\" y1=\\"0%\\" x2=\\"100%\\" y2=\\"0%\\">\\r\\n\\t\\t\\t\\t\\t{#each curveData.stops as stop}\\r\\n\\t\\t\\t\\t\\t\\t<stop offset={stop.offset} stop-color={stop.color} />\\r\\n\\t\\t\\t\\t\\t{/each}\\r\\n\\t\\t\\t\\t</linearGradient>\\r\\n\\t\\t\\t</defs>\\r\\n\\t\\t\\t<path\\r\\n\\t\\t\\t\\td={curveData.path}\\r\\n\\t\\t\\t\\tfill=\\"none\\"\\r\\n\\t\\t\\t\\tstroke=\\"url(#curve-gradient)\\"\\r\\n\\t\\t\\t\\tstroke-width=\\"2.5\\"\\r\\n\\t\\t\\t\\tstroke-linecap=\\"round\\"\\r\\n\\t\\t\\t\\tstroke-linejoin=\\"round\\"\\r\\n\\t\\t\\t/>\\r\\n\\t\\t{/if}\\r\\n\\r\\n\\t\\t<!-- Data points -->\\r\\n\\t\\t<g class=\\"data-points\\">\\r\\n\\t\\t\\t{#each dataPoints as pt}\\r\\n\\t\\t\\t\\t{#if pt.selected}\\r\\n\\t\\t\\t\\t\\t<rect\\r\\n\\t\\t\\t\\t\\t\\tx={pt.x - 4}\\r\\n\\t\\t\\t\\t\\t\\ty={pt.y - 4}\\r\\n\\t\\t\\t\\t\\t\\twidth=\\"8\\"\\r\\n\\t\\t\\t\\t\\t\\theight=\\"8\\"\\r\\n\\t\\t\\t\\t\\t\\tclass=\\"point-selected\\"\\r\\n\\t\\t\\t\\t\\t/>\\r\\n\\t\\t\\t\\t{:else}\\r\\n\\t\\t\\t\\t\\t<rect\\r\\n\\t\\t\\t\\t\\t\\tx={pt.x - 2}\\r\\n\\t\\t\\t\\t\\t\\ty={pt.y - 2}\\r\\n\\t\\t\\t\\t\\t\\twidth=\\"4\\"\\r\\n\\t\\t\\t\\t\\t\\theight=\\"4\\"\\r\\n\\t\\t\\t\\t\\t\\tclass=\\"point\\"\\r\\n\\t\\t\\t\\t\\t/>\\r\\n\\t\\t\\t\\t{/if}\\r\\n\\t\\t\\t{/each}\\r\\n\\t\\t</g>\\r\\n\\r\\n\\t\\t<!-- Selected point indicator -->\\r\\n\\t\\t{#if selectedPoint}\\r\\n\\t\\t\\t<circle\\r\\n\\t\\t\\t\\tcx={selectedPoint.cx}\\r\\n\\t\\t\\t\\tcy={selectedPoint.cy}\\r\\n\\t\\t\\t\\tr=\\"12\\"\\r\\n\\t\\t\\t\\tfill=\\"none\\"\\r\\n\\t\\t\\t\\tstroke=\\"rgb(200,200,200)\\"\\r\\n\\t\\t\\t\\tstroke-width=\\"1\\"\\r\\n\\t\\t\\t/>\\r\\n\\t\\t\\t<text\\r\\n\\t\\t\\t\\tx={selectedPoint.cx + 15}\\r\\n\\t\\t\\t\\ty={selectedPoint.cy - 5}\\r\\n\\t\\t\\t\\tclass=\\"selected-label\\"\\r\\n\\t\\t\\t>{selectedPoint.label}</text>\\r\\n\\t\\t{/if}\\r\\n\\r\\n\\t\\t<!-- Helper text -->\\r\\n\\t\\t{#if !$recordingState.valid && !$isRecording}\\r\\n\\t\\t\\t<text x={width / 2} y={height / 2} class=\\"helper-text\\" text-anchor=\\"middle\\">\\r\\n\\t\\t\\t\\t{#if $editInput === 'MOUSE'}\\r\\n\\t\\t\\t\\t\\tClick and drag to draw a curve\\r\\n\\t\\t\\t\\t{:else}\\r\\n\\t\\t\\t\\t\\tPress R to start recording from microphone\\r\\n\\t\\t\\t\\t{/if}\\r\\n\\t\\t\\t</text>\\r\\n\\t\\t{:else if $isRecording}\\r\\n\\t\\t\\t<text x={width / 2} y={height - 40} class=\\"recording-text\\" text-anchor=\\"middle\\">\\r\\n\\t\\t\\t\\t{#if $editInput === 'MOUSE'}\\r\\n\\t\\t\\t\\t\\tDrawing... release to finish\\r\\n\\t\\t\\t\\t{:else}\\r\\n\\t\\t\\t\\t\\tRecording... press R to stop\\r\\n\\t\\t\\t\\t{/if}\\r\\n\\t\\t\\t</text>\\r\\n\\t\\t{/if}\\r\\n\\t</svg>\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n\\t.create-view {\\r\\n\\t\\tflex: 1;\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\toverflow: hidden;\\r\\n\\t}\\r\\n\\t.chart {\\r\\n\\t\\twidth: 100%;\\r\\n\\t\\theight: 100%;\\r\\n\\t\\tbackground: rgb(20, 20, 20);\\r\\n\\t\\tuser-select: none;\\r\\n\\t\\t-webkit-user-select: none;\\r\\n\\t\\tcursor: url(\\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Cline x1='10' y1='0' x2='10' y2='20' stroke='%23666' stroke-width='1'/%3E%3Cline x1='0' y1='10' x2='20' y2='10' stroke='%23666' stroke-width='1'/%3E%3C/svg%3E\\")\\r\\n\\t\\t\\t10 10,\\r\\n\\t\\t\\tcrosshair;\\r\\n\\t}\\r\\n\\t.chart.drawing {\\r\\n\\t\\tcursor: url(\\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Cline x1='10' y1='0' x2='10' y2='20' stroke='%23fff' stroke-width='1'/%3E%3Cline x1='0' y1='10' x2='20' y2='10' stroke='%23fff' stroke-width='1'/%3E%3C/svg%3E\\")\\r\\n\\t\\t\\t10 10,\\r\\n\\t\\t\\tcrosshair;\\r\\n\\t}\\r\\n\\t.axis-labels text {\\r\\n\\t\\tfont: 9px Consolas, monospace;\\r\\n\\t\\tfill: rgb(160, 160, 160);\\r\\n\\t}\\r\\n\\t.point {\\r\\n\\t\\tfill: rgb(255, 255, 255);\\r\\n\\t}\\r\\n\\t.point-selected {\\r\\n\\t\\tfill: rgb(255, 255, 255);\\r\\n\\t}\\r\\n\\t.selected-label {\\r\\n\\t\\tfont: 10px Consolas, monospace;\\r\\n\\t\\tfill: rgb(255, 255, 255);\\r\\n\\t}\\r\\n\\t.helper-text {\\r\\n\\t\\tfont: 14px Consolas, monospace;\\r\\n\\t\\tfill: rgba(255, 255, 255, 0.25);\\r\\n\\t}\\r\\n\\t.recording-text {\\r\\n\\t\\tfont: 12px Consolas, monospace;\\r\\n\\t\\tfill: rgba(255, 255, 255, 0.35);\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAiXC,0CAAa,CACZ,IAAI,CAAE,CAAC,CACP,OAAO,CAAE,IAAI,CACb,QAAQ,CAAE,MACX,CACA,oCAAO,CACN,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,IAAI,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAC3B,WAAW,CAAE,IAAI,CACjB,mBAAmB,CAAE,IAAI,CACzB,MAAM,CAAE,6PAA6P;AACvQ,GAAG,EAAE,CAAC,EAAE,CAAC;AACT,GAAG,SACF,CACA,MAAM,sCAAS,CACd,MAAM,CAAE,6PAA6P;AACvQ,GAAG,EAAE,CAAC,EAAE,CAAC;AACT,GAAG,SACF,CACA,2BAAY,CAAC,mBAAK,CACjB,IAAI,CAAE,GAAG,CAAC,QAAQ,CAAC,CAAC,SAAS,CAC7B,IAAI,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CACxB,CACA,oCAAO,CACN,IAAI,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CACxB,CACA,6CAAgB,CACf,IAAI,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CACxB,CACA,6CAAgB,CACf,IAAI,CAAE,IAAI,CAAC,QAAQ,CAAC,CAAC,SAAS,CAC9B,IAAI,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CACxB,CACA,0CAAa,CACZ,IAAI,CAAE,IAAI,CAAC,QAAQ,CAAC,CAAC,SAAS,CAC9B,IAAI,CAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CAC/B,CACA,6CAAgB,CACf,IAAI,CAAE,IAAI,CAAC,QAAQ,CAAC,CAAC,SAAS,CAC9B,IAAI,CAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CAC/B"}`
};
function slopeColor(t) {
  if (t < 0.5) {
    const s = t / 0.5;
    const r = Math.round(0 + (0 - 0) * s);
    const g = Math.round(200 + (255 - 200) * s);
    const b = Math.round(80 + (220 - 80) * s);
    return `rgb(${r},${g},${b})`;
  } else {
    const s = (t - 0.5) / 0.5;
    const r = Math.round(0 + (80 - 0) * s);
    const g = Math.round(255 + (140 - 255) * s);
    const b = Math.round(220 + (255 - 220) * s);
    return `rgb(${r},${g},${b})`;
  }
}
const CreateView = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let marginX;
  let marginY;
  let xScale;
  let yScale;
  let xLabels;
  let yLabels;
  let curveData;
  let dataPoints;
  let selectedPoint;
  let $editInput, $$unsubscribe_editInput;
  let $recordingState, $$unsubscribe_recordingState;
  let $isEditMode, $$unsubscribe_isEditMode;
  let $isRecording, $$unsubscribe_isRecording;
  $$unsubscribe_editInput = subscribe(editInput, (value) => $editInput = value);
  $$unsubscribe_recordingState = subscribe(recordingState, (value) => $recordingState = value);
  $$unsubscribe_isEditMode = subscribe(isEditMode, (value) => $isEditMode = value);
  $$unsubscribe_isRecording = subscribe(isRecording, (value) => $isRecording = value);
  let containerEl;
  let svgEl;
  let soundInput = new SoundInput();
  let soundAnimId;
  let width = 1280;
  let height = 720;
  async function startSound() {
    const ok = await soundInput.start();
    if (ok) {
      addStatusMessage("Microphone active");
      pollSound();
    } else {
      addStatusMessage("Microphone access denied");
    }
  }
  function pollSound() {
    if (!soundInput.active) return;
    const recording = get_store_value(isRecording);
    if (recording) {
      const vol = soundInput.getLevel();
      recordingState.update((s) => {
        enterNewValue(s, { x: vol, y: 0, z: 0 });
        return s;
      });
    }
    soundAnimId = requestAnimationFrame(pollSound);
  }
  onDestroy(() => {
    soundInput.stop();
    if (soundAnimId) cancelAnimationFrame(soundAnimId);
  });
  $$result.css.add(css$5);
  marginX = width * 0.1;
  marginY = height * 0.1;
  xScale = scaleLinear().domain([0, 1]).range([marginX, width - marginX]);
  yScale = scaleLinear().domain([0, 1]).range([height - marginY, marginY]);
  xLabels = Array.from({ length: 11 }, (_, i) => {
    const val = i / 10;
    return {
      x: xScale(val),
      y: yScale(0) + 16,
      text: val.toFixed(1)
    };
  });
  yLabels = Array.from({ length: 6 }, (_, i) => {
    const norm = i / 5;
    const yVal = $recordingState.valid ? $recordingState.minY + ($recordingState.maxY - $recordingState.minY) * norm : norm;
    return {
      x: xScale(0) - 10,
      y: yScale(norm) + 3,
      text: $recordingState.valid ? yVal.toFixed(2) : norm.toFixed(1)
    };
  });
  curveData = (() => {
    if (!$recordingState.valid) return { path: "", stops: [] };
    const coeffs = $recordingState.coefficients;
    const range = $recordingState.maxY - $recordingState.minY;
    const numPts = 200;
    const pts = [];
    for (let i = 0; i <= numPts; i++) {
      const t = i / numPts;
      const val = solve(coeffs, t);
      const yNorm = range > 0 ? (val - $recordingState.minY) / range : 0;
      pts.push({ x: t, y: yNorm, slope: 0 });
    }
    let maxSlope = 0;
    for (let i = 0; i < pts.length; i++) {
      let slope;
      if (i === 0) {
        slope = Math.abs(pts[1].y - pts[0].y) * numPts;
      } else if (i === pts.length - 1) {
        slope = Math.abs(pts[i].y - pts[i - 1].y) * numPts;
      } else {
        slope = Math.abs(pts[i + 1].y - pts[i - 1].y) * numPts * 0.5;
      }
      pts[i].slope = slope;
      if (slope > maxSlope) maxSlope = slope;
    }
    const lineGen = line().x((d) => xScale(d.x)).y((d) => yScale(d.y));
    const path = lineGen(pts) || "";
    const stops = [];
    for (let i = 0; i <= numPts; i += 5) {
      const pt = pts[i];
      const norm = maxSlope > 0 ? pt.slope / maxSlope : 0;
      stops.push({
        offset: `${(pt.x * 100).toFixed(1)}%`,
        color: slopeColor(norm)
      });
    }
    return { path, stops };
  })();
  dataPoints = $recordingState.moments2D.map((m, i) => ({
    x: xScale(m.time),
    y: yScale(m.distance),
    selected: $isEditMode && i === $recordingState.selectedId,
    index: i
  }));
  selectedPoint = (() => {
    const id = $recordingState.selectedId;
    if (!$isEditMode || id < 0 || id >= $recordingState.moments2D.length) return null;
    const m = $recordingState.moments2D[id];
    return {
      cx: xScale(m.time),
      cy: yScale(m.distance),
      label: `(${m.time.toFixed(3)}, ${m.distance.toFixed(3)})`
    };
  })();
  {
    if ($editInput === "SOUND" && !soundInput.active) {
      startSound();
    } else if ($editInput !== "SOUND" && soundInput.active) {
      soundInput.stop();
    }
  }
  $$unsubscribe_editInput();
  $$unsubscribe_recordingState();
  $$unsubscribe_isEditMode();
  $$unsubscribe_isRecording();
  return ` <div class="create-view svelte-1tstxla"${add_attribute("this", containerEl, 0)}> <svg viewBox="${"0 0 " + escape(width, true) + " " + escape(height, true)}" preserveAspectRatio="xMidYMid meet" class="${["chart svelte-1tstxla", ""].join(" ").trim()}"${add_attribute("this", svgEl, 0)}><g class="axis-labels svelte-1tstxla">${each(xLabels, (label) => {
    return `<text${add_attribute("x", label.x, 0)}${add_attribute("y", label.y, 0)} text-anchor="middle" class="svelte-1tstxla">${escape(label.text)}</text>`;
  })}</g><g class="axis-labels svelte-1tstxla">${each(yLabels, (label) => {
    return `<text${add_attribute("x", label.x, 0)}${add_attribute("y", label.y, 0)} text-anchor="end" class="svelte-1tstxla">${escape(label.text)}</text>`;
  })}</g>${$recordingState.valid && curveData.path ? `<defs><linearGradient id="curve-gradient" x1="0%" y1="0%" x2="100%" y2="0%">${each(curveData.stops, (stop) => {
    return `<stop${add_attribute("offset", stop.offset, 0)}${add_attribute("stop-color", stop.color, 0)}></stop>`;
  })}</linearGradient></defs> <path${add_attribute("d", curveData.path, 0)} fill="none" stroke="url(#curve-gradient)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>` : ``}<g class="data-points">${each(dataPoints, (pt) => {
    return `${pt.selected ? `<rect${add_attribute("x", pt.x - 4, 0)}${add_attribute("y", pt.y - 4, 0)} width="8" height="8" class="point-selected svelte-1tstxla"></rect>` : `<rect${add_attribute("x", pt.x - 2, 0)}${add_attribute("y", pt.y - 2, 0)} width="4" height="4" class="point svelte-1tstxla"></rect>`}`;
  })}</g>${selectedPoint ? `<circle${add_attribute("cx", selectedPoint.cx, 0)}${add_attribute("cy", selectedPoint.cy, 0)} r="12" fill="none" stroke="rgb(200,200,200)" stroke-width="1"></circle> <text${add_attribute("x", selectedPoint.cx + 15, 0)}${add_attribute("y", selectedPoint.cy - 5, 0)} class="selected-label svelte-1tstxla">${escape(selectedPoint.label)}</text>` : ``}${!$recordingState.valid && !$isRecording ? `<text${add_attribute("x", width / 2, 0)}${add_attribute("y", height / 2, 0)} class="helper-text svelte-1tstxla" text-anchor="middle">${$editInput === "MOUSE" ? `Click and drag to draw a curve` : `Press R to start recording from microphone`}</text>` : `${$isRecording ? `<text${add_attribute("x", width / 2, 0)}${add_attribute("y", height - 40, 0)} class="recording-text svelte-1tstxla" text-anchor="middle">${$editInput === "MOUSE" ? `Drawing... release to finish` : `Recording... press R to stop`}</text>` : ``}`}</svg> </div>`;
});
function hsbToRgb(h, s, b, a = 255) {
  const hNorm = h / 255 * 360;
  const sNorm = s / 255;
  const bNorm = b / 255;
  const c = bNorm * sNorm;
  const x = c * (1 - Math.abs(hNorm / 60 % 2 - 1));
  const m = bNorm - c;
  let r1 = 0, g1 = 0, b1 = 0;
  {
    r1 = c;
    g1 = x;
  }
  const r = Math.round((r1 + m) * 255);
  const g = Math.round((g1 + m) * 255);
  const bOut = Math.round((b1 + m) * 255);
  if (a < 255) {
    return `rgba(${r},${g},${bOut},${(a / 255).toFixed(3)})`;
  }
  return `rgb(${r},${g},${bOut})`;
}
createNoise2D();
hsbToRgb(0, 0, 255);
hsbToRgb(0, 0, 30);
hsbToRgb(0, 0, 30);
hsbToRgb(0, 0, 30);
hsbToRgb(0, 0, 20);
const css$4 = {
  code: `.play-view.svelte-1x1dcnp{flex:1;display:flex;align-items:flex-start;justify-content:flex-start;overflow:auto}canvas.svelte-1x1dcnp{display:block;cursor:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Cline x1='10' y1='0' x2='10' y2='20' stroke='%23666' stroke-width='1'/%3E%3Cline x1='0' y1='10' x2='20' y2='10' stroke='%23666' stroke-width='1'/%3E%3C/svg%3E") 10 10, crosshair}`,
  map: `{"version":3,"file":"PlayView.svelte","sources":["PlayView.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { onMount, onDestroy } from \\"svelte\\";\\nimport { playMode } from \\"$lib/stores/appState\\";\\nimport { recordingState, addStatusMessage } from \\"$lib/stores/recording\\";\\nimport {\\n  initParticleCanvas,\\n  spawnParticles,\\n  clearParticles\\n} from \\"$lib/canvas/particleCanvas\\";\\nimport {\\n  initParticleRotCanvas,\\n  spawnParticlesRot,\\n  clearParticlesRot\\n} from \\"$lib/canvas/particleRotCanvas\\";\\nimport { initIconCanvas } from \\"$lib/canvas/iconCanvas\\";\\nimport { get } from \\"svelte/store\\";\\nlet canvasEl;\\nlet containerEl;\\nlet cleanup = null;\\nlet mounted = false;\\nlet currentMode = \\"\\";\\nlet canvasW = 1280;\\nlet canvasH = 720;\\nfunction getCanvasSize() {\\n  if (!containerEl) return { w: 1280, h: 720 };\\n  return {\\n    w: Math.floor(containerEl.clientWidth),\\n    h: Math.floor(containerEl.clientHeight)\\n  };\\n}\\nonMount(() => {\\n  mounted = true;\\n  const size = getCanvasSize();\\n  canvasW = size.w;\\n  canvasH = size.h;\\n  initRenderer(get(playMode));\\n  const unsub = playMode.subscribe((mode) => {\\n    if (mounted && mode !== currentMode) {\\n      initRenderer(mode);\\n    }\\n  });\\n  const resizeObs = new ResizeObserver(() => {\\n    if (!mounted) return;\\n    const size2 = getCanvasSize();\\n    if (size2.w !== canvasW || size2.h !== canvasH) {\\n      canvasW = size2.w;\\n      canvasH = size2.h;\\n      const mode = currentMode;\\n      currentMode = \\"\\";\\n      initRenderer(mode);\\n    }\\n  });\\n  resizeObs.observe(containerEl);\\n  return () => {\\n    unsub();\\n    resizeObs.disconnect();\\n  };\\n});\\nfunction initRenderer(mode) {\\n  if (!canvasEl || !mounted) return;\\n  if (mode === currentMode) return;\\n  currentMode = mode;\\n  cleanup?.();\\n  cleanup = null;\\n  const getCoeffs = () => get(recordingState).coefficients;\\n  if (mode === \\"PARTICLES\\") {\\n    clearParticles();\\n    cleanup = initParticleCanvas(canvasEl, getCoeffs, canvasW, canvasH);\\n    spawnParticles(canvasW / 2, canvasH / 2, 30);\\n  } else if (mode === \\"PARTICLES_ROTATE\\") {\\n    clearParticlesRot();\\n    cleanup = initParticleRotCanvas(canvasEl, getCoeffs, canvasW, canvasH);\\n    spawnParticlesRot(canvasW / 2, canvasH / 2, 30);\\n  } else if (mode === \\"ICONS\\") {\\n    cleanup = initIconCanvas(canvasEl, getCoeffs, canvasW, canvasH);\\n  }\\n}\\nfunction handleClick(e) {\\n  const rect = canvasEl.getBoundingClientRect();\\n  const scaleX = canvasW / rect.width;\\n  const scaleY = canvasH / rect.height;\\n  const x = (e.clientX - rect.left) * scaleX;\\n  const y = (e.clientY - rect.top) * scaleY;\\n  const mode = get(playMode);\\n  if (mode === \\"PARTICLES\\") {\\n    spawnParticles(x, y, 30);\\n    addStatusMessage(\\"Spawned 30 particles\\");\\n  } else if (mode === \\"PARTICLES_ROTATE\\") {\\n    spawnParticlesRot(x, y, 30);\\n    addStatusMessage(\\"Spawned 30 rotating particles\\");\\n  }\\n}\\nonDestroy(() => {\\n  mounted = false;\\n  cleanup?.();\\n});\\n<\/script>\\r\\n\\r\\n<div class=\\"play-view\\" bind:this={containerEl}>\\r\\n\\t<canvas\\r\\n\\t\\tbind:this={canvasEl}\\r\\n\\t\\ton:click={handleClick}\\r\\n\\t></canvas>\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n\\t.play-view {\\r\\n\\t\\tflex: 1;\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\talign-items: flex-start;\\r\\n\\t\\tjustify-content: flex-start;\\r\\n\\t\\toverflow: auto;\\r\\n\\t}\\r\\n\\tcanvas {\\r\\n\\t\\tdisplay: block;\\r\\n\\t\\tcursor: url(\\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Cline x1='10' y1='0' x2='10' y2='20' stroke='%23666' stroke-width='1'/%3E%3Cline x1='0' y1='10' x2='20' y2='10' stroke='%23666' stroke-width='1'/%3E%3C/svg%3E\\") 10 10, crosshair;\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAyGC,yBAAW,CACV,IAAI,CAAE,CAAC,CACP,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,UAAU,CACvB,eAAe,CAAE,UAAU,CAC3B,QAAQ,CAAE,IACX,CACA,qBAAO,CACN,OAAO,CAAE,KAAK,CACd,MAAM,CAAE,6PAA6P,CAAC,EAAE,CAAC,EAAE,CAAC,CAAC,SAC9Q"}`
};
const PlayView = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let canvasEl;
  let containerEl;
  onDestroy(() => {
  });
  $$result.css.add(css$4);
  return `<div class="play-view svelte-1x1dcnp"${add_attribute("this", containerEl, 0)}><canvas class="svelte-1x1dcnp"${add_attribute("this", canvasEl, 0)}></canvas> </div>`;
});
function buildPolynomialExpr(coefficients) {
  const terms = [];
  for (let i = 0; i < coefficients.length; i++) {
    const c = coefficients[i].toFixed(8);
    if (i === 0) {
      terms.push(`${c} * 1.0`);
    } else {
      const xPow = new Array(i).fill("x").join("*");
      terms.push(`${c} * ${xPow}`);
    }
  }
  return terms.join(" + ");
}
function generateExport(coefficients, lang) {
  const expr = buildPolynomialExpr(coefficients);
  switch (lang) {
    case "HLSL":
      return `float getFunction(float x) {
  x = abs(x);
  float y = ${expr};
  return y;
}`;
    case "GLSL":
      return `float getFunction(float x) {
  float y = ${expr};
  return y;
}`;
    case "JAVA":
      return `float getFunction(float x) {
  float y = ${expr};
  return y;
}`;
    case "JAVASCRIPT":
      return `function getFunction(x) {
  const y = ${expr};
  return y;
}`;
    case "CPP":
      return `float getFunction(float x) {
  float y = ${expr};
  return y;
}`;
    case "CSHARP":
      return `float getFunction(float x) {
  double y = ${expr};
  return (float) y;
}`;
  }
}
function getLanguageLabel(lang) {
  const labels = {
    HLSL: "HLSL",
    GLSL: "GLSL",
    JAVA: "Java",
    JAVASCRIPT: "JavaScript",
    CPP: "C++",
    CSHARP: "C#"
  };
  return labels[lang];
}
const css$3 = {
  code: ".overlay.svelte-86soog.svelte-86soog{position:fixed;inset:0;background:rgba(0, 0, 0, 0.6);display:flex;align-items:center;justify-content:center;z-index:100}.modal.svelte-86soog.svelte-86soog{background:rgb(22, 22, 22);border:1px solid rgb(50, 50, 50);width:500px;max-width:90vw;display:flex;flex-direction:column;gap:12px;padding:16px}.header.svelte-86soog.svelte-86soog{display:flex;justify-content:space-between;align-items:center}.title.svelte-86soog.svelte-86soog{font-size:11px;color:rgb(255, 255, 255);letter-spacing:2px}.close-btn.svelte-86soog.svelte-86soog{background:none;color:rgb(110, 110, 110);font-size:14px;padding:2px 6px}.close-btn.svelte-86soog.svelte-86soog:hover{color:rgb(255, 255, 255)}.preview-section.svelte-86soog.svelte-86soog{border:1px solid rgb(35, 35, 35)}.preview-section.svelte-86soog canvas.svelte-86soog{display:block;width:100%;height:80px}.lang-row.svelte-86soog.svelte-86soog{display:flex;gap:4px;flex-wrap:wrap}.lang-btn.svelte-86soog.svelte-86soog{background:rgb(30, 30, 30);color:rgb(100, 100, 100);font-size:9px;padding:3px 8px;transition:all 0.15s}.lang-btn.svelte-86soog.svelte-86soog:hover{color:rgb(180, 180, 180)}.lang-btn.active.svelte-86soog.svelte-86soog{color:rgb(255, 255, 255);background:rgb(35, 35, 35);border:1px solid rgb(255, 255, 255)}.code-container.svelte-86soog.svelte-86soog{background:rgb(15, 15, 15);border:1px solid rgb(35, 35, 35);padding:12px;max-height:200px;overflow:auto}.code-block.svelte-86soog.svelte-86soog{font-size:10px;line-height:1.5;color:rgb(200, 200, 200);white-space:pre-wrap;word-break:break-all;margin:0}.copy-btn.svelte-86soog.svelte-86soog{background:rgb(255, 255, 255);color:rgb(10, 10, 10);font-size:10px;padding:8px;font-weight:600;letter-spacing:1px;transition:opacity 0.15s}.copy-btn.svelte-86soog.svelte-86soog:hover{opacity:0.85}",
  map: '{"version":3,"file":"ExportModal.svelte","sources":["ExportModal.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { showExport, exportLang } from \\"$lib/stores/appState\\";\\nimport { recordingState } from \\"$lib/stores/recording\\";\\nimport { generateExport, getLanguageLabel } from \\"$lib/core/exportPolynom\\";\\nimport { solve } from \\"$lib/core/polyFitter\\";\\nimport { addStatusMessage } from \\"$lib/stores/recording\\";\\nconst languages = [\\"HLSL\\", \\"GLSL\\", \\"JAVA\\", \\"JAVASCRIPT\\", \\"CPP\\", \\"CSHARP\\"];\\n$: code = generateExport($recordingState.coefficients, $exportLang);\\nasync function copyToClipboard() {\\n  try {\\n    await navigator.clipboard.writeText(code);\\n    addStatusMessage(`Copied ${getLanguageLabel($exportLang)} code to clipboard`);\\n  } catch {\\n    addStatusMessage(\\"Failed to copy to clipboard\\");\\n  }\\n}\\nfunction close() {\\n  showExport.set(false);\\n}\\nlet previewCanvas;\\n$: if (previewCanvas && $recordingState.valid) {\\n  drawPreview(previewCanvas, $recordingState.coefficients);\\n}\\nfunction drawPreview(canvas, coefficients) {\\n  const ctx = canvas.getContext(\\"2d\\");\\n  if (!ctx) return;\\n  const w = 240;\\n  const h = 80;\\n  canvas.width = w;\\n  canvas.height = h;\\n  ctx.fillStyle = \\"rgb(25,25,25)\\";\\n  ctx.fillRect(0, 0, w, h);\\n  let minY = Infinity, maxY = -Infinity;\\n  for (let i = 0; i <= 100; i++) {\\n    const val = solve(coefficients, i / 100);\\n    if (val < minY) minY = val;\\n    if (val > maxY) maxY = val;\\n  }\\n  const range = maxY - minY || 1;\\n  ctx.strokeStyle = \\"rgb(255, 255, 255)\\";\\n  ctx.lineWidth = 1.5;\\n  ctx.beginPath();\\n  for (let i = 0; i <= w; i++) {\\n    const x = i / w;\\n    const val = solve(coefficients, x);\\n    const yNorm = (val - minY) / range;\\n    const py = h - 8 - yNorm * (h - 16);\\n    if (i === 0) ctx.moveTo(i, py);\\n    else ctx.lineTo(i, py);\\n  }\\n  ctx.stroke();\\n}\\n<\/script>\\r\\n\\r\\n<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->\\r\\n<div class=\\"overlay\\" on:click|self={close} role=\\"dialog\\" aria-label=\\"Export polynomial\\" aria-modal=\\"true\\">\\r\\n\\t<div class=\\"modal\\">\\r\\n\\t\\t<div class=\\"header\\">\\r\\n\\t\\t\\t<span class=\\"title\\">EXPORT</span>\\r\\n\\t\\t\\t<button class=\\"close-btn\\" on:click={close} aria-label=\\"Close export\\">x</button>\\r\\n\\t\\t</div>\\r\\n\\r\\n\\t\\t<div class=\\"preview-section\\">\\r\\n\\t\\t\\t<canvas bind:this={previewCanvas} width=\\"240\\" height=\\"80\\"></canvas>\\r\\n\\t\\t</div>\\r\\n\\r\\n\\t\\t<div class=\\"lang-row\\" role=\\"radiogroup\\" aria-label=\\"Language\\">\\r\\n\\t\\t\\t{#each languages as lang}\\r\\n\\t\\t\\t\\t<button\\r\\n\\t\\t\\t\\t\\tclass=\\"lang-btn\\"\\r\\n\\t\\t\\t\\t\\tclass:active={$exportLang === lang}\\r\\n\\t\\t\\t\\t\\trole=\\"radio\\"\\r\\n\\t\\t\\t\\t\\taria-checked={$exportLang === lang}\\r\\n\\t\\t\\t\\t\\ton:click={() => exportLang.set(lang)}\\r\\n\\t\\t\\t\\t>\\r\\n\\t\\t\\t\\t\\t{getLanguageLabel(lang)}\\r\\n\\t\\t\\t\\t</button>\\r\\n\\t\\t\\t{/each}\\r\\n\\t\\t</div>\\r\\n\\r\\n\\t\\t<div class=\\"code-container\\">\\r\\n\\t\\t\\t<pre class=\\"code-block\\"><code>{code}</code></pre>\\r\\n\\t\\t</div>\\r\\n\\r\\n\\t\\t<button class=\\"copy-btn\\" on:click={copyToClipboard}>\\r\\n\\t\\t\\tCopy to Clipboard\\r\\n\\t\\t</button>\\r\\n\\t</div>\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n\\t.overlay {\\r\\n\\t\\tposition: fixed;\\r\\n\\t\\tinset: 0;\\r\\n\\t\\tbackground: rgba(0, 0, 0, 0.6);\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\talign-items: center;\\r\\n\\t\\tjustify-content: center;\\r\\n\\t\\tz-index: 100;\\r\\n\\t}\\r\\n\\t.modal {\\r\\n\\t\\tbackground: rgb(22, 22, 22);\\r\\n\\t\\tborder: 1px solid rgb(50, 50, 50);\\r\\n\\t\\twidth: 500px;\\r\\n\\t\\tmax-width: 90vw;\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tflex-direction: column;\\r\\n\\t\\tgap: 12px;\\r\\n\\t\\tpadding: 16px;\\r\\n\\t}\\r\\n\\t.header {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tjustify-content: space-between;\\r\\n\\t\\talign-items: center;\\r\\n\\t}\\r\\n\\t.title {\\r\\n\\t\\tfont-size: 11px;\\r\\n\\t\\tcolor: rgb(255, 255, 255);\\r\\n\\t\\tletter-spacing: 2px;\\r\\n\\t}\\r\\n\\t.close-btn {\\r\\n\\t\\tbackground: none;\\r\\n\\t\\tcolor: rgb(110, 110, 110);\\r\\n\\t\\tfont-size: 14px;\\r\\n\\t\\tpadding: 2px 6px;\\r\\n\\t}\\r\\n\\t.close-btn:hover {\\r\\n\\t\\tcolor: rgb(255, 255, 255);\\r\\n\\t}\\r\\n\\t.preview-section {\\r\\n\\t\\tborder: 1px solid rgb(35, 35, 35);\\r\\n\\t}\\r\\n\\t.preview-section canvas {\\r\\n\\t\\tdisplay: block;\\r\\n\\t\\twidth: 100%;\\r\\n\\t\\theight: 80px;\\r\\n\\t}\\r\\n\\t.lang-row {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tgap: 4px;\\r\\n\\t\\tflex-wrap: wrap;\\r\\n\\t}\\r\\n\\t.lang-btn {\\r\\n\\t\\tbackground: rgb(30, 30, 30);\\r\\n\\t\\tcolor: rgb(100, 100, 100);\\r\\n\\t\\tfont-size: 9px;\\r\\n\\t\\tpadding: 3px 8px;\\r\\n\\t\\ttransition: all 0.15s;\\r\\n\\t}\\r\\n\\t.lang-btn:hover {\\r\\n\\t\\tcolor: rgb(180, 180, 180);\\r\\n\\t}\\r\\n\\t.lang-btn.active {\\r\\n\\t\\tcolor: rgb(255, 255, 255);\\r\\n\\t\\tbackground: rgb(35, 35, 35);\\r\\n\\t\\tborder: 1px solid rgb(255, 255, 255);\\r\\n\\t}\\r\\n\\t.code-container {\\r\\n\\t\\tbackground: rgb(15, 15, 15);\\r\\n\\t\\tborder: 1px solid rgb(35, 35, 35);\\r\\n\\t\\tpadding: 12px;\\r\\n\\t\\tmax-height: 200px;\\r\\n\\t\\toverflow: auto;\\r\\n\\t}\\r\\n\\t.code-block {\\r\\n\\t\\tfont-size: 10px;\\r\\n\\t\\tline-height: 1.5;\\r\\n\\t\\tcolor: rgb(200, 200, 200);\\r\\n\\t\\twhite-space: pre-wrap;\\r\\n\\t\\tword-break: break-all;\\r\\n\\t\\tmargin: 0;\\r\\n\\t}\\r\\n\\t.copy-btn {\\r\\n\\t\\tbackground: rgb(255, 255, 255);\\r\\n\\t\\tcolor: rgb(10, 10, 10);\\r\\n\\t\\tfont-size: 10px;\\r\\n\\t\\tpadding: 8px;\\r\\n\\t\\tfont-weight: 600;\\r\\n\\t\\tletter-spacing: 1px;\\r\\n\\t\\ttransition: opacity 0.15s;\\r\\n\\t}\\r\\n\\t.copy-btn:hover {\\r\\n\\t\\topacity: 0.85;\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"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"}'
};
const ExportModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let code;
  let $recordingState, $$unsubscribe_recordingState;
  let $exportLang, $$unsubscribe_exportLang;
  $$unsubscribe_recordingState = subscribe(recordingState, (value) => $recordingState = value);
  $$unsubscribe_exportLang = subscribe(exportLang, (value) => $exportLang = value);
  const languages = ["HLSL", "GLSL", "JAVA", "JAVASCRIPT", "CPP", "CSHARP"];
  let previewCanvas;
  $$result.css.add(css$3);
  code = generateExport($recordingState.coefficients, $exportLang);
  $$unsubscribe_recordingState();
  $$unsubscribe_exportLang();
  return ` <div class="overlay svelte-86soog" role="dialog" aria-label="Export polynomial" aria-modal="true"><div class="modal svelte-86soog"><div class="header svelte-86soog"><span class="title svelte-86soog" data-svelte-h="svelte-1t5sgj5">EXPORT</span> <button class="close-btn svelte-86soog" aria-label="Close export" data-svelte-h="svelte-fafswr">x</button></div> <div class="preview-section svelte-86soog"><canvas width="240" height="80" class="svelte-86soog"${add_attribute("this", previewCanvas, 0)}></canvas></div> <div class="lang-row svelte-86soog" role="radiogroup" aria-label="Language">${each(languages, (lang) => {
    return `<button class="${["lang-btn svelte-86soog", $exportLang === lang ? "active" : ""].join(" ").trim()}" role="radio"${add_attribute("aria-checked", $exportLang === lang, 0)}>${escape(getLanguageLabel(lang))} </button>`;
  })}</div> <div class="code-container svelte-86soog"><pre class="code-block svelte-86soog"><code>${escape(code)}</code></pre></div> <button class="copy-btn svelte-86soog" data-svelte-h="svelte-vv64xg">Copy to Clipboard</button></div> </div>`;
});
const css$2 = {
  code: ".status-bar.svelte-83k9ny{width:100%;padding:12px 10%;font-size:10px;color:rgb(120, 120, 120);text-align:left;background:transparent;letter-spacing:0.3px;max-height:120px;overflow:hidden}.status-msg.svelte-83k9ny{padding:1px 0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}",
  map: '{"version":3,"file":"StatusBar.svelte","sources":["StatusBar.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { statusMessages } from \\"$lib/stores/recording\\";\\n<\/script>\\r\\n\\r\\n<div class=\\"status-bar\\" role=\\"log\\" aria-live=\\"polite\\" aria-label=\\"Status messages\\">\\r\\n\\t{#each $statusMessages as msg}\\r\\n\\t\\t<div class=\\"status-msg\\">{msg}</div>\\r\\n\\t{/each}\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n\\t.status-bar {\\r\\n\\t\\twidth: 100%;\\r\\n\\t\\tpadding: 12px 10%;\\r\\n\\t\\tfont-size: 10px;\\r\\n\\t\\tcolor: rgb(120, 120, 120);\\r\\n\\t\\ttext-align: left;\\r\\n\\t\\tbackground: transparent;\\r\\n\\t\\tletter-spacing: 0.3px;\\r\\n\\t\\tmax-height: 120px;\\r\\n\\t\\toverflow: hidden;\\r\\n\\t}\\r\\n\\t.status-msg {\\r\\n\\t\\tpadding: 1px 0;\\r\\n\\t\\twhite-space: nowrap;\\r\\n\\t\\toverflow: hidden;\\r\\n\\t\\ttext-overflow: ellipsis;\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAUC,yBAAY,CACX,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CAAC,GAAG,CACjB,SAAS,CAAE,IAAI,CACf,KAAK,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACzB,UAAU,CAAE,IAAI,CAChB,UAAU,CAAE,WAAW,CACvB,cAAc,CAAE,KAAK,CACrB,UAAU,CAAE,KAAK,CACjB,QAAQ,CAAE,MACX,CACA,yBAAY,CACX,OAAO,CAAE,GAAG,CAAC,CAAC,CACd,WAAW,CAAE,MAAM,CACnB,QAAQ,CAAE,MAAM,CAChB,aAAa,CAAE,QAChB"}'
};
const StatusBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $statusMessages, $$unsubscribe_statusMessages;
  $$unsubscribe_statusMessages = subscribe(statusMessages, (value) => $statusMessages = value);
  $$result.css.add(css$2);
  $$unsubscribe_statusMessages();
  return `<div class="status-bar svelte-83k9ny" role="log" aria-live="polite" aria-label="Status messages">${each($statusMessages, (msg) => {
    return `<div class="status-msg svelte-83k9ny">${escape(msg)}</div>`;
  })} </div>`;
});
const css$1 = {
  code: ".overlay.svelte-zv6n8.svelte-zv6n8{position:fixed;inset:0;background:rgba(0, 0, 0, 0.75);display:flex;align-items:center;justify-content:center;z-index:200}.modal.svelte-zv6n8.svelte-zv6n8{background:rgb(22, 22, 22);border:1px solid rgb(50, 50, 50);width:480px;max-width:90vw;max-height:90vh;overflow-y:auto;display:flex;flex-direction:column;gap:16px;padding:24px}.header.svelte-zv6n8.svelte-zv6n8{display:flex;justify-content:space-between;align-items:center}.title.svelte-zv6n8.svelte-zv6n8{font-size:14px;color:rgb(255, 255, 255);letter-spacing:3px;font-weight:600}.close-btn.svelte-zv6n8.svelte-zv6n8{background:none;color:rgb(110, 110, 110);font-size:14px;padding:2px 6px}.close-btn.svelte-zv6n8.svelte-zv6n8:hover{color:rgb(255, 255, 255)}.subtitle.svelte-zv6n8.svelte-zv6n8{font-size:11px;color:rgb(100, 100, 100);letter-spacing:1px;margin:-8px 0 0}.steps.svelte-zv6n8.svelte-zv6n8{display:flex;flex-direction:column;gap:0}.step.svelte-zv6n8.svelte-zv6n8{display:flex;gap:12px;align-items:flex-start}.step-num.svelte-zv6n8.svelte-zv6n8{width:22px;height:22px;border:1px solid rgb(255, 255, 255);color:rgb(255, 255, 255);font-size:11px;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px}.step-content.svelte-zv6n8.svelte-zv6n8{display:flex;flex-direction:column;gap:4px}.step-label.svelte-zv6n8.svelte-zv6n8{font-size:11px;color:rgb(255, 255, 255);letter-spacing:1.5px;font-weight:600}.step-content.svelte-zv6n8 p.svelte-zv6n8{font-size:10px;color:rgb(140, 140, 140);line-height:1.6;margin:0}.connector.svelte-zv6n8.svelte-zv6n8{width:1px;height:12px;background:rgb(40, 40, 40);margin-left:10px}.diagram.svelte-zv6n8.svelte-zv6n8{display:flex;align-items:center;justify-content:center;gap:12px;padding:12px 0;border-top:1px solid rgb(35, 35, 35);border-bottom:1px solid rgb(35, 35, 35)}.diagram-box.svelte-zv6n8.svelte-zv6n8{display:flex;flex-direction:column;align-items:center;gap:4px;font-size:9px;color:rgb(120, 120, 120);letter-spacing:0.5px}.diagram-icon.svelte-zv6n8.svelte-zv6n8{font-size:16px;color:rgb(255, 255, 255)}.diagram-arrow.svelte-zv6n8.svelte-zv6n8{font-size:14px;color:rgb(60, 60, 60)}.start-btn.svelte-zv6n8.svelte-zv6n8{background:rgb(255, 255, 255);color:rgb(10, 10, 10);font-size:11px;padding:10px;font-weight:600;letter-spacing:1.5px;transition:opacity 0.15s}.start-btn.svelte-zv6n8.svelte-zv6n8:hover{opacity:0.85}",
  map: '{"version":3,"file":"WelcomeModal.svelte","sources":["WelcomeModal.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { onMount } from \\"svelte\\";\\nlet show = false;\\nonMount(() => {\\n  const seen = localStorage.getItem(\\"nextone110-welcome\\");\\n  if (!seen) {\\n    show = true;\\n  }\\n});\\nfunction dismiss() {\\n  show = false;\\n  localStorage.setItem(\\"nextone110-welcome\\", \\"1\\");\\n}\\n<\/script>\\r\\n\\r\\n{#if show}\\r\\n\\t<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->\\r\\n\\t<div class=\\"overlay\\" on:click|self={dismiss} role=\\"dialog\\" aria-label=\\"Welcome\\" aria-modal=\\"true\\">\\r\\n\\t\\t<div class=\\"modal\\">\\r\\n\\t\\t\\t<div class=\\"header\\">\\r\\n\\t\\t\\t\\t<span class=\\"title\\">NEXTONE110</span>\\r\\n\\t\\t\\t\\t<button class=\\"close-btn\\" on:click={dismiss} aria-label=\\"Close\\">x</button>\\r\\n\\t\\t\\t</div>\\r\\n\\r\\n\\t\\t\\t<p class=\\"subtitle\\">Gesture to Polynomial</p>\\r\\n\\r\\n\\t\\t\\t<div class=\\"steps\\">\\r\\n\\t\\t\\t\\t<div class=\\"step\\">\\r\\n\\t\\t\\t\\t\\t<div class=\\"step-num\\">1</div>\\r\\n\\t\\t\\t\\t\\t<div class=\\"step-content\\">\\r\\n\\t\\t\\t\\t\\t\\t<span class=\\"step-label\\">CREATE</span>\\r\\n\\t\\t\\t\\t\\t\\t<p>Draw a gesture with your mouse or record sound from your microphone. Your motion is captured and fitted to a degree-8 polynomial curve — a custom easing function shaped by your body.</p>\\r\\n\\t\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t\\t</div>\\r\\n\\r\\n\\t\\t\\t\\t<div class=\\"connector\\"></div>\\r\\n\\r\\n\\t\\t\\t\\t<div class=\\"step\\">\\r\\n\\t\\t\\t\\t\\t<div class=\\"step-num\\">2</div>\\r\\n\\t\\t\\t\\t\\t<div class=\\"step-content\\">\\r\\n\\t\\t\\t\\t\\t\\t<span class=\\"step-label\\">PLAY</span>\\r\\n\\t\\t\\t\\t\\t\\t<p>Watch how your curve drives motion. Particles burst and drift following your easing. 118 animated icons loop with your polynomial as their timing function — every movement shaped by your gesture.</p>\\r\\n\\t\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t\\t</div>\\r\\n\\r\\n\\t\\t\\t\\t<div class=\\"connector\\"></div>\\r\\n\\r\\n\\t\\t\\t\\t<div class=\\"step\\">\\r\\n\\t\\t\\t\\t\\t<div class=\\"step-num\\">3</div>\\r\\n\\t\\t\\t\\t\\t<div class=\\"step-content\\">\\r\\n\\t\\t\\t\\t\\t\\t<span class=\\"step-label\\">EXPORT</span>\\r\\n\\t\\t\\t\\t\\t\\t<p>Copy your polynomial as code in GLSL, HLSL, JavaScript, Java, C++, or C#. Use it as a custom easing function in your own projects.</p>\\r\\n\\t\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t</div>\\r\\n\\r\\n\\t\\t\\t<div class=\\"diagram\\">\\r\\n\\t\\t\\t\\t<div class=\\"diagram-box\\">\\r\\n\\t\\t\\t\\t\\t<span class=\\"diagram-icon\\">~</span>\\r\\n\\t\\t\\t\\t\\t<span>gesture</span>\\r\\n\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t\\t<span class=\\"diagram-arrow\\">&rarr;</span>\\r\\n\\t\\t\\t\\t<div class=\\"diagram-box\\">\\r\\n\\t\\t\\t\\t\\t<span class=\\"diagram-icon\\">&fnof;</span>\\r\\n\\t\\t\\t\\t\\t<span>polynomial</span>\\r\\n\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t\\t<span class=\\"diagram-arrow\\">&rarr;</span>\\r\\n\\t\\t\\t\\t<div class=\\"diagram-box\\">\\r\\n\\t\\t\\t\\t\\t<span class=\\"diagram-icon\\">&lt;/&gt;</span>\\r\\n\\t\\t\\t\\t\\t<span>code</span>\\r\\n\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t</div>\\r\\n\\r\\n\\t\\t\\t<button class=\\"start-btn\\" on:click={dismiss}>\\r\\n\\t\\t\\t\\tStart Creating\\r\\n\\t\\t\\t</button>\\r\\n\\t\\t</div>\\r\\n\\t</div>\\r\\n{/if}\\r\\n\\r\\n<style>\\r\\n\\t.overlay {\\r\\n\\t\\tposition: fixed;\\r\\n\\t\\tinset: 0;\\r\\n\\t\\tbackground: rgba(0, 0, 0, 0.75);\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\talign-items: center;\\r\\n\\t\\tjustify-content: center;\\r\\n\\t\\tz-index: 200;\\r\\n\\t}\\r\\n\\t.modal {\\r\\n\\t\\tbackground: rgb(22, 22, 22);\\r\\n\\t\\tborder: 1px solid rgb(50, 50, 50);\\r\\n\\t\\twidth: 480px;\\r\\n\\t\\tmax-width: 90vw;\\r\\n\\t\\tmax-height: 90vh;\\r\\n\\t\\toverflow-y: auto;\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tflex-direction: column;\\r\\n\\t\\tgap: 16px;\\r\\n\\t\\tpadding: 24px;\\r\\n\\t}\\r\\n\\t.header {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tjustify-content: space-between;\\r\\n\\t\\talign-items: center;\\r\\n\\t}\\r\\n\\t.title {\\r\\n\\t\\tfont-size: 14px;\\r\\n\\t\\tcolor: rgb(255, 255, 255);\\r\\n\\t\\tletter-spacing: 3px;\\r\\n\\t\\tfont-weight: 600;\\r\\n\\t}\\r\\n\\t.close-btn {\\r\\n\\t\\tbackground: none;\\r\\n\\t\\tcolor: rgb(110, 110, 110);\\r\\n\\t\\tfont-size: 14px;\\r\\n\\t\\tpadding: 2px 6px;\\r\\n\\t}\\r\\n\\t.close-btn:hover {\\r\\n\\t\\tcolor: rgb(255, 255, 255);\\r\\n\\t}\\r\\n\\t.subtitle {\\r\\n\\t\\tfont-size: 11px;\\r\\n\\t\\tcolor: rgb(100, 100, 100);\\r\\n\\t\\tletter-spacing: 1px;\\r\\n\\t\\tmargin: -8px 0 0;\\r\\n\\t}\\r\\n\\t.steps {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tflex-direction: column;\\r\\n\\t\\tgap: 0;\\r\\n\\t}\\r\\n\\t.step {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tgap: 12px;\\r\\n\\t\\talign-items: flex-start;\\r\\n\\t}\\r\\n\\t.step-num {\\r\\n\\t\\twidth: 22px;\\r\\n\\t\\theight: 22px;\\r\\n\\t\\tborder: 1px solid rgb(255, 255, 255);\\r\\n\\t\\tcolor: rgb(255, 255, 255);\\r\\n\\t\\tfont-size: 11px;\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\talign-items: center;\\r\\n\\t\\tjustify-content: center;\\r\\n\\t\\tflex-shrink: 0;\\r\\n\\t\\tmargin-top: 1px;\\r\\n\\t}\\r\\n\\t.step-content {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tflex-direction: column;\\r\\n\\t\\tgap: 4px;\\r\\n\\t}\\r\\n\\t.step-label {\\r\\n\\t\\tfont-size: 11px;\\r\\n\\t\\tcolor: rgb(255, 255, 255);\\r\\n\\t\\tletter-spacing: 1.5px;\\r\\n\\t\\tfont-weight: 600;\\r\\n\\t}\\r\\n\\t.step-content p {\\r\\n\\t\\tfont-size: 10px;\\r\\n\\t\\tcolor: rgb(140, 140, 140);\\r\\n\\t\\tline-height: 1.6;\\r\\n\\t\\tmargin: 0;\\r\\n\\t}\\r\\n\\t.connector {\\r\\n\\t\\twidth: 1px;\\r\\n\\t\\theight: 12px;\\r\\n\\t\\tbackground: rgb(40, 40, 40);\\r\\n\\t\\tmargin-left: 10px;\\r\\n\\t}\\r\\n\\t.diagram {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\talign-items: center;\\r\\n\\t\\tjustify-content: center;\\r\\n\\t\\tgap: 12px;\\r\\n\\t\\tpadding: 12px 0;\\r\\n\\t\\tborder-top: 1px solid rgb(35, 35, 35);\\r\\n\\t\\tborder-bottom: 1px solid rgb(35, 35, 35);\\r\\n\\t}\\r\\n\\t.diagram-box {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tflex-direction: column;\\r\\n\\t\\talign-items: center;\\r\\n\\t\\tgap: 4px;\\r\\n\\t\\tfont-size: 9px;\\r\\n\\t\\tcolor: rgb(120, 120, 120);\\r\\n\\t\\tletter-spacing: 0.5px;\\r\\n\\t}\\r\\n\\t.diagram-icon {\\r\\n\\t\\tfont-size: 16px;\\r\\n\\t\\tcolor: rgb(255, 255, 255);\\r\\n\\t}\\r\\n\\t.diagram-arrow {\\r\\n\\t\\tfont-size: 14px;\\r\\n\\t\\tcolor: rgb(60, 60, 60);\\r\\n\\t}\\r\\n\\t.start-btn {\\r\\n\\t\\tbackground: rgb(255, 255, 255);\\r\\n\\t\\tcolor: rgb(10, 10, 10);\\r\\n\\t\\tfont-size: 11px;\\r\\n\\t\\tpadding: 10px;\\r\\n\\t\\tfont-weight: 600;\\r\\n\\t\\tletter-spacing: 1.5px;\\r\\n\\t\\ttransition: opacity 0.15s;\\r\\n\\t}\\r\\n\\t.start-btn:hover {\\r\\n\\t\\topacity: 0.85;\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"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"}'
};
const WelcomeModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `${``}`;
});
const css = {
  code: ".app-shell.svelte-1u6d2mm{display:grid;grid-template-columns:auto 1fr;width:100vw;height:100vh;overflow:hidden}.content-column.svelte-1u6d2mm{display:flex;flex-direction:column;overflow:hidden}.main-area.svelte-1u6d2mm{flex:1;display:flex;position:relative;overflow:hidden;background:rgb(20, 20, 20)}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">import Sidebar from \\"$lib/components/Sidebar.svelte\\";\\nimport CreateView from \\"$lib/components/CreateView.svelte\\";\\nimport PlayView from \\"$lib/components/PlayView.svelte\\";\\nimport ExportModal from \\"$lib/components/ExportModal.svelte\\";\\nimport StatusBar from \\"$lib/components/StatusBar.svelte\\";\\nimport WelcomeModal from \\"$lib/components/WelcomeModal.svelte\\";\\nimport { mainMode, isEditMode, showExport } from \\"$lib/stores/appState\\";\\nimport { isValid, addStatusMessage, recordingState } from \\"$lib/stores/recording\\";\\nimport { generateExport } from \\"$lib/core/exportPolynom\\";\\nimport { exportLang } from \\"$lib/stores/appState\\";\\nimport { get } from \\"svelte/store\\";\\nfunction handleKeyDown(e) {\\n  if (e.key === \\"e\\" || e.key === \\"E\\") {\\n    if (get(isValid)) {\\n      isEditMode.update((v) => !v);\\n      addStatusMessage(get(isEditMode) ? \\"Edit mode ON\\" : \\"Edit mode OFF\\");\\n    }\\n  }\\n  if (e.key === \\"c\\" || e.key === \\"C\\") {\\n    if (get(isValid)) {\\n      const code = generateExport(\\n        get(recordingState).coefficients,\\n        get(exportLang)\\n      );\\n      navigator.clipboard.writeText(code).then(() => {\\n        addStatusMessage(\\"Code copied to clipboard\\");\\n      });\\n    }\\n  }\\n  if (e.key === \\"Escape\\") {\\n    showExport.set(false);\\n  }\\n  if (e.key === \\"i\\" || e.key === \\"I\\") {\\n    addStatusMessage(\\"NextOne110 \\\\u2014 Gesture to Polynomial Visualization\\");\\n  }\\n}\\n<\/script>\\r\\n\\r\\n<svelte:head>\\r\\n\\t<title>Tweener</title>\\r\\n</svelte:head>\\r\\n\\r\\n<svelte:window on:keydown={handleKeyDown} />\\r\\n\\r\\n<div class=\\"app-shell\\">\\r\\n\\t<Sidebar />\\r\\n\\t<div class=\\"content-column\\">\\r\\n\\t\\t<main class=\\"main-area\\">\\r\\n\\t\\t\\t{#if $mainMode === 'CREATE'}\\r\\n\\t\\t\\t\\t<CreateView />\\r\\n\\t\\t\\t{:else}\\r\\n\\t\\t\\t\\t<PlayView />\\r\\n\\t\\t\\t{/if}\\r\\n\\t\\t</main>\\r\\n\\t\\t<StatusBar />\\r\\n\\t</div>\\r\\n</div>\\r\\n\\r\\n{#if $showExport}\\r\\n\\t<ExportModal />\\r\\n{/if}\\r\\n\\r\\n<WelcomeModal />\\r\\n\\r\\n<style>\\r\\n\\t.app-shell {\\r\\n\\t\\tdisplay: grid;\\r\\n\\t\\tgrid-template-columns: auto 1fr;\\r\\n\\t\\twidth: 100vw;\\r\\n\\t\\theight: 100vh;\\r\\n\\t\\toverflow: hidden;\\r\\n\\t}\\r\\n\\t.content-column {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tflex-direction: column;\\r\\n\\t\\toverflow: hidden;\\r\\n\\t}\\r\\n\\t.main-area {\\r\\n\\t\\tflex: 1;\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tposition: relative;\\r\\n\\t\\toverflow: hidden;\\r\\n\\t\\tbackground: rgb(20, 20, 20);\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAiEC,yBAAW,CACV,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,IAAI,CAAC,GAAG,CAC/B,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KAAK,CACb,QAAQ,CAAE,MACX,CACA,8BAAgB,CACf,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,QAAQ,CAAE,MACX,CACA,yBAAW,CACV,IAAI,CAAE,CAAC,CACP,OAAO,CAAE,IAAI,CACb,QAAQ,CAAE,QAAQ,CAClB,QAAQ,CAAE,MAAM,CAChB,UAAU,CAAE,IAAI,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAC3B"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $mainMode, $$unsubscribe_mainMode;
  let $showExport, $$unsubscribe_showExport;
  $$unsubscribe_mainMode = subscribe(mainMode, (value) => $mainMode = value);
  $$unsubscribe_showExport = subscribe(showExport, (value) => $showExport = value);
  $$result.css.add(css);
  $$unsubscribe_mainMode();
  $$unsubscribe_showExport();
  return `${$$result.head += `<!-- HEAD_svelte-9c81dw_START -->${$$result.title = `<title>Tweener</title>`, ""}<!-- HEAD_svelte-9c81dw_END -->`, ""}  <div class="app-shell svelte-1u6d2mm">${validate_component(Sidebar, "Sidebar").$$render($$result, {}, {}, {})} <div class="content-column svelte-1u6d2mm"><main class="main-area svelte-1u6d2mm">${$mainMode === "CREATE" ? `${validate_component(CreateView, "CreateView").$$render($$result, {}, {}, {})}` : `${validate_component(PlayView, "PlayView").$$render($$result, {}, {}, {})}`}</main> ${validate_component(StatusBar, "StatusBar").$$render($$result, {}, {}, {})}</div></div> ${$showExport ? `${validate_component(ExportModal, "ExportModal").$$render($$result, {}, {}, {})}` : ``} ${validate_component(WelcomeModal, "WelcomeModal").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
