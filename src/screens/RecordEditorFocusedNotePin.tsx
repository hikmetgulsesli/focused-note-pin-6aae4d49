// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Record Editor - Focused Note Pin
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { BadgeHelp, CircleAlert, CircleHelp, Code, ListOrdered, Save, Settings, X } from "lucide-react";


export type RecordEditorFocusedNotePinActionId = "help-1" | "settings-2" | "close-3" | "close-4" | "bold-5" | "italic-6" | "bullet-list-7" | "numbered-list-8" | "code-block-9" | "attach-file-10" | "cancel-11" | "save-record-12" | "focused-note-pin-1";

export interface RecordEditorFocusedNotePinProps {
  actions?: Partial<Record<RecordEditorFocusedNotePinActionId, () => void>>;

}

export function RecordEditorFocusedNotePin({ actions }: RecordEditorFocusedNotePinProps) {
  return (
    <>
      {/* TopAppBar from JSON (CRITICAL: Active Navigation logic not applied as this is a transactional page, but navigation is provided as per JSON for context if needed, though strictly it should be suppressed. Following JSON structure as base, but suppressing nav cluster to prioritize content canvas as per Semantic Shell Mandate: Linear/Transactional/Task-Focused). We keep the brand and actions. */}
      <header className="bg-surface-container-lowest border-b border-outline-variant docked full-width top-0 sticky z-50">
      <div className="flex justify-between items-center w-full px-margin-page py-stack-compact max-w-container-max mx-auto">
      <div className="flex items-center gap-4">
      <a className="text-headline-md font-headline-md font-bold text-primary flex items-center gap-2" href="#" data-action-id="focused-note-pin-1" onClick={(event) => { event.preventDefault(); actions?.["focused-note-pin-1"]?.(); }}>
      <BadgeHelp style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
                          Focused Note Pin
                      </a>
      <span className="bg-secondary-fixed/20 text-secondary-fixed-dim px-2 py-0.5 rounded text-label-sm font-label-sm ml-4 border border-secondary-fixed/30 flex items-center gap-1">
      <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Draft - Unsaved changes
                      </span>
      </div>
      <div className="flex items-center gap-4">
      <button className="text-on-surface-variant hover:text-primary transition-colors duration-200" type="button" aria-label="Help" data-action-id="help-1" onClick={actions?.["help-1"]}>
      <CircleHelp aria-hidden={true} focusable="false" />
      </button>
      <button className="text-on-surface-variant hover:text-primary transition-colors duration-200" type="button" aria-label="Settings" data-action-id="settings-2" onClick={actions?.["settings-2"]}>
      <Settings aria-hidden={true} focusable="false" />
      </button>
      <img alt="User profile" className="w-8 h-8 rounded-full object-cover border border-outline-variant" data-alt="A small circular user profile portrait. A professional headshot of a person with a neutral background, highly detailed, well-lit, conveying a modern corporate aesthetic suitable for a high-end productivity tool." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9G55nh0MSJHxAzN64u2djrefP1ZVX00s0itzm-PTtzX6QyApH7uzh1VbK6f3StC-rR2SKYKvsxeGDjWXhiU3rR7o8JqHAVFSooIpI22MM_1o3Bq__QldRifj3hE_17LHU0TOGQcNjAlqJ7aOTkUk2OTd2THHLBYv4jlZcOPn5bCeknnrX0PYK91TenyLl8vnBpiFccnMqv8idcu7UvX1BsKADqNeaUSgTqY4pg6p28wfuXoZACPq7inv4mbevv9yUVm8_STjkiV8" />
      </div>
      </div>
      </header>
      {/* Main Content Area: Focused Editor Canvas */}
      <main className="flex-1 w-full max-w-3xl mx-auto px-gutter py-8 flex flex-col gap-6">
      {/* Editor Header & Meta */}
      <div className="flex flex-col gap-2">
      <input className="w-full bg-transparent border-0 border-b border-transparent hover:border-outline-variant focus:border-secondary focus:ring-0 text-headline-lg font-headline-lg text-on-surface placeholder:text-outline-variant px-0 py-2 transition-colors" placeholder="Record Title" type="text" defaultValue="Q3 Architecture Review" />
      {/* Validation Example */}
      {/* <p className="text-error text-label-sm font-label-sm mt-1 flex items-center gap-1"><CircleAlert className="text-[14px]" aria-hidden={true} focusable="false" /> Title is required</p> */}
      </div>
      <div className="flex gap-4 border-b border-surface-variant pb-4">
      <div className="flex items-center gap-2 w-1/3">
      <BadgeHelp className="text-outline-variant text-[18px]" aria-hidden={true} focusable="false" />
      <select className="w-full bg-transparent border-0 text-body-sm font-body-sm text-on-surface focus:ring-0 px-0 cursor-pointer">
      <option>Engineering</option>
      <option>Product</option>
      <option>Design</option>
      </select>
      </div>
      <div className="flex items-center gap-2 w-2/3">
      <BadgeHelp className="text-outline-variant text-[18px]" aria-hidden={true} focusable="false" />
      <div className="flex gap-2 flex-wrap flex-1 items-center">
      <span className="bg-surface-variant text-on-surface-variant px-2 py-0.5 rounded-sm text-label-sm font-label-sm flex items-center gap-1">
                              Architecture <button className="hover:text-primary" type="button" aria-label="Close" data-action-id="close-3" onClick={actions?.["close-3"]}><X className="text-[12px]" aria-hidden={true} focusable="false" /></button>
      </span>
      <span className="bg-surface-variant text-on-surface-variant px-2 py-0.5 rounded-sm text-label-sm font-label-sm flex items-center gap-1">
                              Review <button className="hover:text-primary" type="button" aria-label="Close" data-action-id="close-4" onClick={actions?.["close-4"]}><X className="text-[12px]" aria-hidden={true} focusable="false" /></button>
      </span>
      <input className="bg-transparent border-0 text-body-sm font-body-sm w-24 p-0 focus:ring-0 placeholder:text-outline-variant" placeholder="Add tag..." type="text" />
      </div>
      </div>
      </div>
      {/* Rich Text Toolbar (Simplified visual representation) */}
      <div className="flex items-center gap-1 p-2 bg-surface border border-outline-variant rounded-lg">
      <button className="p-1 rounded hover:bg-surface-container-high text-on-surface-variant transition-colors" title="Bold" type="button" data-action-id="bold-5" onClick={actions?.["bold-5"]}><BadgeHelp className="text-[18px]" aria-hidden={true} focusable="false" /></button>
      <button className="p-1 rounded hover:bg-surface-container-high text-on-surface-variant transition-colors" title="Italic" type="button" data-action-id="italic-6" onClick={actions?.["italic-6"]}><BadgeHelp className="text-[18px]" aria-hidden={true} focusable="false" /></button>
      <div className="w-[1px] h-4 bg-outline-variant mx-1"></div>
      <button className="p-1 rounded hover:bg-surface-container-high text-on-surface-variant transition-colors" title="Bullet List" type="button" data-action-id="bullet-list-7" onClick={actions?.["bullet-list-7"]}><BadgeHelp className="text-[18px]" aria-hidden={true} focusable="false" /></button>
      <button className="p-1 rounded hover:bg-surface-container-high text-on-surface-variant transition-colors" title="Numbered List" type="button" data-action-id="numbered-list-8" onClick={actions?.["numbered-list-8"]}><ListOrdered className="text-[18px]" aria-hidden={true} focusable="false" /></button>
      <div className="w-[1px] h-4 bg-outline-variant mx-1"></div>
      <button className="p-1 rounded hover:bg-surface-container-high text-on-surface-variant transition-colors" title="Code Block" type="button" data-action-id="code-block-9" onClick={actions?.["code-block-9"]}><Code className="text-[18px]" aria-hidden={true} focusable="false" /></button>
      <button className="p-1 rounded hover:bg-surface-container-high text-on-surface-variant transition-colors" title="Attach File" type="button" data-action-id="attach-file-10" onClick={actions?.["attach-file-10"]}><BadgeHelp className="text-[18px]" aria-hidden={true} focusable="false" /></button>
      </div>
      {/* Editor Content Area */}
      <div className="flex-1 relative">
      <textarea className="w-full h-full min-h-[400px] resize-none border-0 bg-transparent focus:ring-0 text-body-md font-body-md text-on-surface placeholder:text-outline-variant p-0 leading-relaxed" placeholder="Start typing..."></textarea>
      {/* Focus state indicator line */}
      <div className="absolute left-[-16px] top-0 bottom-0 w-[2px] bg-secondary opacity-0 transition-opacity duration-200 pointer-events-none" id="editor-focus-indicator"></div>
      </div>
      </main>
      {/* Action Bar (Docked Bottom) */}
      <footer className="bg-surface border-t border-outline-variant p-stack-default sticky bottom-0 z-40 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
      <div className="max-w-3xl mx-auto flex justify-end gap-3 items-center w-full">
      <span className="text-label-sm font-label-sm text-outline-variant mr-auto">Last saved: Just now</span>
      <button className="px-4 py-2 border border-outline-variant text-on-surface font-label-md text-label-md rounded hover:bg-surface-container-high focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-colors bg-surface-container-lowest" data-action="ACT_CANCEL_EDIT" type="button" data-action-id="cancel-11" onClick={actions?.["cancel-11"]}>
                      Cancel
                  </button>
      <button className="px-6 py-2 bg-primary text-on-primary font-label-md text-label-md rounded hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors flex items-center gap-2" data-action="ACT_SAVE_RECORD" type="button" data-action-id="save-record-12" onClick={actions?.["save-record-12"]}>
      <Save className="text-[16px]" aria-hidden={true} focusable="false" /> Save Record
                  </button>
      </div>
      </footer>
      
    </>
  );
}
