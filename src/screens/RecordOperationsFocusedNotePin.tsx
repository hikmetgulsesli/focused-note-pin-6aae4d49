// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Record Operations - Focused Note Pin
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowUpDown, BadgeHelp, BarChart3, CircleHelp, CloudOff, ExternalLink, FolderOpen, ListFilter, Pencil, Plus, RefreshCw, Search, Settings, X } from "lucide-react";


export type RecordOperationsFocusedNotePinActionId = "create-record-1" | "create-2" | "settings-3" | "help-4" | "filter-5" | "sort-6" | "push-pin-7" | "push-pin-8" | "push-pin-9" | "retry-loading-10" | "open-in-editor-11" | "close-preview-12" | "push-pin-13" | "edit-full-14" | "records-1" | "editor-2" | "insights-3" | "settings-4" | "support-5" | "records-6" | "editor-7" | "insights-8";

export interface RecordOperationsFocusedNotePinProps {
  actions?: Partial<Record<RecordOperationsFocusedNotePinActionId, () => void>>;

}

export function RecordOperationsFocusedNotePin({ actions }: RecordOperationsFocusedNotePinProps) {
  return (
    <>
      {/* Desktop SideNavBar (Hidden on Mobile) */}
      <nav className="hidden md:flex flex-col h-screen w-[260px] fixed left-0 top-0 border-r border-outline-variant bg-background py-6 px-4 space-y-stack-default z-40">
      {/* Brand / Header */}
      <div className="mb-8 px-4">
      <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-on-primary">
      <BadgeHelp className="text-sm" aria-hidden={true} focusable="false" />
      </div>
      <div>
      <h1 className="font-headline-md text-headline-md font-black text-primary">Focused Pin</h1>
      <p className="font-label-sm text-label-sm text-on-surface-variant">Precision Notes</p>
      </div>
      </div>
      </div>
      {/* Main Navigation */}
      <div className="flex-1 space-y-2">
      {/* Active Tab */}
      <a className="flex items-center gap-3 bg-secondary-fixed text-on-secondary-fixed-variant rounded-xl px-4 py-2 border-l-2 border-secondary font-label-md text-label-md transition-transform scale-[0.98]" href="#" data-action-id="records-1" onClick={(event) => { event.preventDefault(); actions?.["records-1"]?.(); }}>
      <FolderOpen  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
                      Records
                  </a>
      {/* Inactive Tabs */}
      <a className="flex items-center gap-3 text-on-surface-variant px-4 py-2 hover:bg-surface-container-high transition-colors rounded-xl font-label-md text-label-md" href="#" data-action-id="editor-2" onClick={(event) => { event.preventDefault(); actions?.["editor-2"]?.(); }}>
      <Pencil aria-hidden={true} focusable="false" />
                      Editor
                  </a>
      <a className="flex items-center gap-3 text-on-surface-variant px-4 py-2 hover:bg-surface-container-high transition-colors rounded-xl font-label-md text-label-md" href="#" data-action-id="insights-3" onClick={(event) => { event.preventDefault(); actions?.["insights-3"]?.(); }}>
      <BarChart3 aria-hidden={true} focusable="false" />
                      Insights
                  </a>
      </div>
      {/* CTA */}
      <div className="px-4 mb-4">
      <button className="w-full bg-primary text-on-primary font-label-md text-label-md py-inset-squish px-inset-squish rounded flex items-center justify-center gap-2 hover:bg-surface-tint transition-colors" type="button" data-action-id="create-record-1" onClick={actions?.["create-record-1"]}>
      <Plus className="text-[16px]" aria-hidden={true} focusable="false" />
                      Create Record
                  </button>
      </div>
      {/* Footer Navigation */}
      <div className="mt-auto space-y-2 border-t border-outline-variant pt-4">
      <a className="flex items-center gap-3 text-on-surface-variant px-4 py-2 hover:bg-surface-container-high transition-colors rounded-xl font-label-md text-label-md" href="#" data-action-id="settings-4" onClick={(event) => { event.preventDefault(); actions?.["settings-4"]?.(); }}>
      <Settings aria-hidden={true} focusable="false" />
                      Settings
                  </a>
      <a className="flex items-center gap-3 text-on-surface-variant px-4 py-2 hover:bg-surface-container-high transition-colors rounded-xl font-label-md text-label-md" href="#" data-action-id="support-5" onClick={(event) => { event.preventDefault(); actions?.["support-5"]?.(); }}>
      <CircleHelp aria-hidden={true} focusable="false" />
                      Support
                  </a>
      </div>
      </nav>
      {/* Main Content Area */}
      <main className="flex-1 flex flex-col md:ml-[260px] h-full overflow-hidden bg-surface relative">
      {/* Mobile TopAppBar */}
      <header className="md:hidden w-full flex justify-between items-center px-margin-page py-stack-compact bg-surface-container-lowest border-b border-outline-variant top-0 sticky z-30">
      <div className="flex items-center gap-2">
      <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-on-primary">
      <BadgeHelp className="text-sm" aria-hidden={true} focusable="false" />
      </div>
      <h1 className="text-headline-md font-headline-md font-bold text-primary">Focused Pin</h1>
      </div>
      <div className="flex items-center gap-4">
      <button className="bg-primary text-on-primary font-label-md text-label-md px-3 py-1.5 rounded flex items-center gap-1 hover:opacity-80 transition-colors" type="button" data-action-id="create-2" onClick={actions?.["create-2"]}>
      <Plus className="text-[14px]" aria-hidden={true} focusable="false" />
                          Create
                      </button>
      <button className="text-on-surface-variant hover:text-primary transition-colors duration-200" type="button" aria-label="Settings" data-action-id="settings-3" onClick={actions?.["settings-3"]}>
      <Settings aria-hidden={true} focusable="false" />
      </button>
      <button className="text-on-surface-variant hover:text-primary transition-colors duration-200" type="button" aria-label="Help" data-action-id="help-4" onClick={actions?.["help-4"]}>
      <CircleHelp aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* Mobile Navigation Row (Horizontal Scroll) */}
      <div className="md:hidden flex px-margin-page bg-surface-container-lowest border-b border-outline-variant overflow-x-auto hide-scrollbar z-20">
      <a className="text-primary border-b-2 border-secondary font-bold pb-1 mr-6 whitespace-nowrap font-label-md text-label-md pt-2" href="#" data-action-id="records-6" onClick={(event) => { event.preventDefault(); actions?.["records-6"]?.(); }}>Records</a>
      <a className="text-on-surface-variant pb-1 mr-6 whitespace-nowrap font-label-md text-label-md pt-2 hover:text-primary transition-colors duration-200" href="#" data-action-id="editor-7" onClick={(event) => { event.preventDefault(); actions?.["editor-7"]?.(); }}>Editor</a>
      <a className="text-on-surface-variant pb-1 whitespace-nowrap font-label-md text-label-md pt-2 hover:text-primary transition-colors duration-200" href="#" data-action-id="insights-8" onClick={(event) => { event.preventDefault(); actions?.["insights-8"]?.(); }}>Insights</a>
      </div>
      {/* Dashboard Canvas */}
      <div className="flex-1 overflow-y-auto p-gutter md:p-margin-page max-w-container-max mx-auto w-full">
      {/* Page Header & Metrics */}
      <div className="mb-stack-default flex flex-col lg:flex-row justify-between items-start lg:items-end gap-4">
      <div>
      <h2 className="font-headline-lg text-headline-lg text-primary mb-1">Record Operations</h2>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Manage, search, and pin active notes.</p>
      </div>
      <div className="flex gap-4 w-full lg:w-auto">
      {/* Metric Card */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded p-3 flex-1 lg:w-32 flex flex-col justify-center">
      <span className="font-label-sm text-label-sm text-on-surface-variant mb-1 uppercase tracking-wider">Total</span>
      <span className="font-headline-md text-headline-md text-primary">1,248</span>
      </div>
      {/* Metric Card */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded p-3 flex-1 lg:w-32 flex flex-col justify-center">
      <span className="font-label-sm text-label-sm text-on-surface-variant mb-1 uppercase tracking-wider">Pinned</span>
      <span className="font-headline-md text-headline-md text-secondary">42</span>
      </div>
      {/* Metric Card */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded p-3 flex-1 lg:w-32 flex flex-col justify-center">
      <span className="font-label-sm text-label-sm text-on-surface-variant mb-1 uppercase tracking-wider">Pending</span>
      <span className="font-headline-md text-headline-md text-error">7</span>
      </div>
      </div>
      </div>
      {/* Main Workspace Layout: List + Preview Panel */}
      <div className="flex flex-col lg:flex-row gap-gutter h-[calc(100vh-280px)] min-h-[500px]">
      {/* Left/Main Column: Data Table/List */}
      <div className="flex-1 bg-surface-container-lowest border border-outline-variant rounded flex flex-col overflow-hidden">
      {/* Toolbar */}
      <div className="p-3 border-b border-outline-variant bg-surface-container-low flex flex-col sm:flex-row gap-3 items-center justify-between">
      {/* Search */}
      <div className="relative w-full sm:w-64">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]" aria-hidden={true} focusable="false" />
      <input className="w-full pl-9 pr-3 py-1.5 bg-surface-container-lowest border border-outline-variant rounded font-body-sm text-body-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/20 transition-colors" placeholder="Search records..." type="text" />
      </div>
      {/* Filters */}
      <div className="flex gap-2 w-full sm:w-auto">
      <button className="px-3 py-1.5 border border-outline-variant rounded bg-surface-container-lowest text-on-surface font-label-md text-label-md flex items-center gap-1 hover:bg-surface-container-high transition-colors" type="button" data-action-id="filter-5" onClick={actions?.["filter-5"]}>
      <ListFilter className="text-[16px]" aria-hidden={true} focusable="false" />
                                      Filter
                                  </button>
      <button className="px-3 py-1.5 border border-outline-variant rounded bg-surface-container-lowest text-on-surface font-label-md text-label-md flex items-center gap-1 hover:bg-surface-container-high transition-colors" type="button" data-action-id="sort-6" onClick={actions?.["sort-6"]}>
      <ArrowUpDown className="text-[16px]" aria-hidden={true} focusable="false" />
                                      Sort
                                  </button>
      </div>
      </div>
      {/* Table Header */}
      <div className="grid grid-cols-[auto_1fr_auto_auto] gap-4 px-4 py-2 bg-surface-container border-b border-outline-variant font-label-sm text-label-sm text-on-surface-variant">
      <div className="w-8">Pin</div>
      <div>Record Name</div>
      <div className="w-24 hidden sm:block">Status</div>
      <div className="w-24 text-right">Modified</div>
      </div>
      {/* List Content */}
      <div className="flex-1 overflow-y-auto">
      {/* Active Row Example */}
      <div className="grid grid-cols-[auto_1fr_auto_auto] gap-4 px-4 py-3 border-b border-outline-variant items-center hover:bg-surface-container-low cursor-pointer relative group bg-surface-container-low/50">
      {/* Accent bar for selected state */}
      <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-secondary"></div>
      <div className="w-8 flex items-center">
      <button className="text-secondary hover:text-secondary-container transition-colors" type="button" aria-label="Push Pin" data-action-id="push-pin-7" onClick={actions?.["push-pin-7"]}>
      <BadgeHelp  style={{fontVariationSettings: "'FILL' 1"}} className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      <div>
      <h4 className="font-label-md text-label-md text-primary truncate">Q3 Financial Synthesis</h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant truncate w-48 sm:w-auto">Consolidated notes from board meeting regarding fiscal projections.</p>
      </div>
      <div className="w-24 hidden sm:block">
      <span className="inline-flex items-center px-2 py-0.5 rounded bg-secondary/10 text-on-secondary-container font-label-sm text-label-sm">Active</span>
      </div>
      <div className="w-24 text-right font-body-sm text-body-sm text-on-surface-variant">
                                      Oct 24
                                  </div>
      </div>
      {/* Standard Row Example */}
      <div className="grid grid-cols-[auto_1fr_auto_auto] gap-4 px-4 py-3 border-b border-outline-variant items-center hover:bg-surface-container-low cursor-pointer group">
      <div className="w-8 flex items-center">
      <button className="text-outline hover:text-secondary transition-colors" type="button" aria-label="Push Pin" data-action-id="push-pin-8" onClick={actions?.["push-pin-8"]}>
      <BadgeHelp className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      <div>
      <h4 className="font-label-md text-label-md text-on-surface truncate">Engineering Sync Architecture</h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant truncate w-48 sm:w-auto">Proposed changes to the microservices deployment pipeline.</p>
      </div>
      <div className="w-24 hidden sm:block">
      <span className="inline-flex items-center px-2 py-0.5 rounded bg-surface-variant text-on-surface-variant font-label-sm text-label-sm">Draft</span>
      </div>
      <div className="w-24 text-right font-body-sm text-body-sm text-on-surface-variant">
                                      Oct 22
                                  </div>
      </div>
      {/* Standard Row Example */}
      <div className="grid grid-cols-[auto_1fr_auto_auto] gap-4 px-4 py-3 border-b border-outline-variant items-center hover:bg-surface-container-low cursor-pointer group">
      <div className="w-8 flex items-center">
      <button className="text-outline hover:text-secondary transition-colors" type="button" aria-label="Push Pin" data-action-id="push-pin-9" onClick={actions?.["push-pin-9"]}>
      <BadgeHelp className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      <div>
      <h4 className="font-label-md text-label-md text-on-surface truncate">User Feedback Q2</h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant truncate w-48 sm:w-auto">Raw notes from customer interviews regarding the new navigation.</p>
      </div>
      <div className="w-24 hidden sm:block">
      <span className="inline-flex items-center px-2 py-0.5 rounded bg-surface-variant text-on-surface-variant font-label-sm text-label-sm">Archived</span>
      </div>
      <div className="w-24 text-right font-body-sm text-body-sm text-on-surface-variant">
                                      Sep 15
                                  </div>
      </div>
      {/* Error State Example (Embedded) */}
      <div className="p-6 flex flex-col items-center justify-center text-center mt-4">
      <div className="w-12 h-12 rounded-full bg-error-container text-error flex items-center justify-center mb-3">
      <CloudOff aria-hidden={true} focusable="false" />
      </div>
      <h4 className="font-label-md text-label-md text-primary mb-1">Failed to sync older records</h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 max-w-xs">There was an issue retrieving data past September. Please check your connection.</p>
      <button className="px-4 py-1.5 border border-outline-variant rounded bg-surface-container-lowest text-on-surface font-label-md text-label-md flex items-center gap-2 hover:bg-surface-container-high transition-colors" type="button" data-action-id="retry-loading-10" onClick={actions?.["retry-loading-10"]}>
      <RefreshCw className="text-[16px]" aria-hidden={true} focusable="false" />
                                      Retry Loading
                                  </button>
      </div>
      </div>
      </div>
      {/* Right Column: Preview Panel */}
      <div className="hidden lg:flex w-[340px] bg-surface-container-lowest border border-outline-variant rounded flex-col overflow-hidden relative">
      {/* Subtle Header */}
      <div className="p-4 border-b border-outline-variant flex justify-between items-center bg-surface-container-low">
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Preview</span>
      <div className="flex gap-2">
      <button className="text-on-surface-variant hover:text-primary transition-colors p-1" title="Open in Editor" type="button" data-action-id="open-in-editor-11" onClick={actions?.["open-in-editor-11"]}>
      <ExternalLink className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      <button className="text-on-surface-variant hover:text-primary transition-colors p-1" title="Close Preview" type="button" data-action-id="close-preview-12" onClick={actions?.["close-preview-12"]}>
      <X className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      {/* Preview Content */}
      <div className="p-5 flex-1 overflow-y-auto">
      <div className="flex justify-between items-start mb-4">
      <h3 className="font-headline-md text-headline-md text-primary leading-tight pr-4">Q3 Financial Synthesis</h3>
      <button className="text-secondary hover:text-secondary-container transition-colors mt-1 flex-shrink-0" type="button" aria-label="Push Pin" data-action-id="push-pin-13" onClick={actions?.["push-pin-13"]}>
      <BadgeHelp  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      </button>
      </div>
      <div className="flex gap-2 mb-6">
      <span className="inline-flex items-center px-2 py-0.5 rounded bg-secondary/10 text-on-secondary-container font-label-sm text-label-sm">Active</span>
      <span className="inline-flex items-center px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">Finance</span>
      </div>
      <div className="prose prose-sm text-body-md font-body-md text-on-surface-variant space-y-4">
      <p>Consolidated notes from the October board meeting regarding fiscal projections and budget realignments for the upcoming quarters.</p>
      <h4 className="font-label-md text-label-md text-primary mt-6 mb-2 uppercase tracking-wide">Key Takeaways</h4>
      <ul className="list-disc pl-4 space-y-2">
      <li>Revenue projected to increase by 12% following the launch of the enterprise tier.</li>
      <li>Operational costs need reduction by 5% in Q4 to hit margin targets.</li>
      <li>Hiring freeze on non-essential roles remains in effect until January.</li>
      </ul>
      <div className="mt-8 p-3 bg-surface-container-low rounded border border-outline-variant">
      <span className="font-label-sm text-label-sm text-on-surface-variant block mb-1">Metadata</span>
      <div className="grid grid-cols-2 gap-2 text-body-sm font-body-sm">
      <div className="text-on-surface-variant">Created:</div>
      <div className="text-primary">Oct 24, 2023</div>
      <div className="text-on-surface-variant">Author:</div>
      <div className="text-primary">S. Miller</div>
      <div className="text-on-surface-variant">ID:</div>
      <div className="text-primary font-mono text-[11px]">rec-01-q3fin</div>
      </div>
      </div>
      </div>
      </div>
      {/* Preview Actions */}
      <div className="p-4 border-t border-outline-variant bg-surface-container-low flex gap-2">
      <button className="flex-1 bg-primary text-on-primary font-label-md text-label-md py-inset-squish px-inset-squish rounded flex items-center justify-center gap-2 hover:bg-surface-tint transition-colors" type="button" data-action-id="edit-full-14" onClick={actions?.["edit-full-14"]}>
      <Pencil className="text-[16px]" aria-hidden={true} focusable="false" />
                                  Edit Full
                              </button>
      </div>
      </div>
      </div>
      </div>
      </main>
      <style>{`
              /* Custom scrollbar for webkit */
              ::-webkit-scrollbar {
                  width: 6px;
                  height: 6px;
              }
              ::-webkit-scrollbar-track {
                  background: transparent; 
              }
              ::-webkit-scrollbar-thumb {
                  background: #e0e3e5; 
                  border-radius: 3px;
              }
              ::-webkit-scrollbar-thumb:hover {
                  background: #c6c6cd; 
              }
              .hide-scrollbar::-webkit-scrollbar {
                  display: none;
              }
              .hide-scrollbar {
                  -ms-overflow-style: none;
                  scrollbar-width: none;
              }
          `}</style>
      
    </>
  );
}
