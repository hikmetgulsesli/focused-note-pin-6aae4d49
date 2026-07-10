// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Insights - Focused Note Pin
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { BadgeHelp, BarChart3, CircleHelp, Download, Ellipsis, FileText, FolderOpen, History, Lightbulb, ListFilter, Pencil, PieChart, Plus, Settings, Tag, TrendingUp } from "lucide-react";


export type InsightsFocusedNotePinActionId = "create-record-1" | "settings-2" | "filter-3" | "export-4" | "more-horiz-5" | "records-1" | "editor-2" | "insights-3" | "settings-4" | "support-5" | "records-6" | "editor-7" | "insights-8";

export interface InsightsFocusedNotePinProps {
  actions?: Partial<Record<InsightsFocusedNotePinActionId, () => void>>;

}

export function InsightsFocusedNotePin({ actions }: InsightsFocusedNotePinProps) {
  return (
    <>
      {/* SideNavBar */}
      <nav className="h-screen w-[260px] fixed left-0 top-0 border-r border-outline-variant bg-background flex flex-col py-6 px-4 space-y-stack-default z-20 hidden md:flex">
      <div className="flex items-center gap-3 px-4 pb-6">
      <Pencil className="text-3xl text-primary" aria-hidden={true} focusable="false" />
      <div>
      <h1 className="font-headline-md text-headline-md font-black text-primary">Focused Pin</h1>
      <p className="font-label-md text-label-md text-on-surface-variant">Precision Notes</p>
      </div>
      </div>
      <button className="w-full bg-primary text-on-primary py-inset-squish px-3 rounded flex items-center justify-center gap-2 mb-6 hover:bg-on-surface transition-colors" type="button" data-action-id="create-record-1" onClick={actions?.["create-record-1"]}>
      <Plus className="text-[18px]" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Create Record</span>
      </button>
      <div className="flex-1 space-y-2">
      <a className="flex items-center gap-3 text-on-surface-variant px-4 py-2 hover:bg-surface-container-high transition-colors rounded-lg group" href="#" data-action-id="records-1" onClick={(event) => { event.preventDefault(); actions?.["records-1"]?.(); }}>
      <FolderOpen className="text-[18px] group-hover:text-primary transition-colors" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Records</span>
      </a>
      <a className="flex items-center gap-3 text-on-surface-variant px-4 py-2 hover:bg-surface-container-high transition-colors rounded-lg group" href="#" data-action-id="editor-2" onClick={(event) => { event.preventDefault(); actions?.["editor-2"]?.(); }}>
      <Pencil className="text-[18px] group-hover:text-primary transition-colors" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Editor</span>
      </a>
      <a className="flex items-center gap-3 bg-secondary-fixed text-on-secondary-fixed-variant rounded-xl px-4 py-2 border-l-2 border-secondary scale-[0.98] transition-transform" href="#" data-action-id="insights-3" onClick={(event) => { event.preventDefault(); actions?.["insights-3"]?.(); }}>
      <BarChart3  style={{fontVariationSettings: "'FILL' 1"}} className="text-[18px]" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Insights</span>
      </a>
      </div>
      <div className="mt-auto space-y-2 border-t border-outline-variant pt-4">
      <a className="flex items-center gap-3 text-on-surface-variant px-4 py-2 hover:bg-surface-container-high transition-colors rounded-lg" href="#" data-action-id="settings-4" onClick={(event) => { event.preventDefault(); actions?.["settings-4"]?.(); }}>
      <Settings className="text-[18px]" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Settings</span>
      </a>
      <a className="flex items-center gap-3 text-on-surface-variant px-4 py-2 hover:bg-surface-container-high transition-colors rounded-lg" href="#" data-action-id="support-5" onClick={(event) => { event.preventDefault(); actions?.["support-5"]?.(); }}>
      <CircleHelp className="text-[18px]" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Support</span>
      </a>
      </div>
      </nav>
      {/* Main Content Canvas */}
      <main className="flex-1 md:ml-[260px] h-screen overflow-y-auto bg-background">
      {/* TopAppBar (Mobile) */}
      <header className="bg-surface-container-lowest border-b border-outline-variant docked full-width top-0 sticky z-10 md:hidden">
      <div className="flex justify-between items-center w-full px-margin-page py-stack-compact max-w-container-max mx-auto">
      <div className="text-headline-md font-headline-md font-bold text-primary">Focused Note Pin</div>
      <div className="flex gap-4">
      <button className="text-on-surface-variant hover:text-primary transition-colors duration-200" type="button" aria-label="Settings" data-action-id="settings-2" onClick={actions?.["settings-2"]}>
      <Settings aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      <div className="flex px-margin-page gap-6 overflow-x-visible md:overflow-x-auto flex-col md:flex-row items-stretch md:items-start">
      <a className="text-on-surface-variant pb-1 font-label-md text-label-md whitespace-nowrap" href="#" data-action-id="records-6" onClick={(event) => { event.preventDefault(); actions?.["records-6"]?.(); }}>Records</a>
      <a className="text-on-surface-variant pb-1 font-label-md text-label-md whitespace-nowrap" href="#" data-action-id="editor-7" onClick={(event) => { event.preventDefault(); actions?.["editor-7"]?.(); }}>Editor</a>
      <a className="text-primary border-b-2 border-secondary font-bold pb-1 font-label-md text-label-md whitespace-nowrap" href="#" data-action-id="insights-8" onClick={(event) => { event.preventDefault(); actions?.["insights-8"]?.(); }}>Insights</a>
      </div>
      </header>
      <div className="max-w-container-max mx-auto p-gutter md:p-margin-page space-y-stack-default">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-outline-variant">
      <div>
      <h2 className="font-headline-lg text-headline-lg text-primary">Insights Overview</h2>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">High-level telemetry of your knowledge base.</p>
      </div>
      <div className="flex gap-2">
      <button className="flex items-center gap-2 px-3 py-inset-squish bg-surface-container-lowest border border-outline-variant rounded hover:border-secondary hover:text-secondary transition-colors" type="button" data-action-id="filter-3" onClick={actions?.["filter-3"]}>
      <ListFilter className="text-[16px]" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Filter</span>
      </button>
      <button className="flex items-center gap-2 px-3 py-inset-squish bg-surface-container-lowest border border-outline-variant rounded hover:border-secondary hover:text-secondary transition-colors" type="button" data-action-id="export-4" onClick={actions?.["export-4"]}>
      <Download className="text-[16px]" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Export</span>
      </button>
      </div>
      </div>
      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
      {/* Metrics Column */}
      <div className="md:col-span-1 flex flex-col gap-gutter">
      {/* Metric 1 */}
      <div className="bg-surface-container-lowest border border-outline-variant p-4 rounded-lg flex flex-col justify-between">
      <div className="flex items-center justify-between mb-2">
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Total Records</span>
      <FileText className="text-secondary text-[18px]" aria-hidden={true} focusable="false" />
      </div>
      <div className="font-headline-lg text-headline-lg text-primary">1,248</div>
      <div className="font-body-sm text-body-sm text-secondary-fixed-dim mt-1 flex items-center gap-1">
      <TrendingUp className="text-[14px]" aria-hidden={true} focusable="false" />
      <span>+12 this week</span>
      </div>
      </div>
      {/* Metric 2 */}
      <div className="bg-surface-container-lowest border border-outline-variant p-4 rounded-lg flex flex-col justify-between">
      <div className="flex items-center justify-between mb-2">
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Pinned Notes</span>
      <BadgeHelp className="text-secondary text-[18px]" aria-hidden={true} focusable="false" />
      </div>
      <div className="font-headline-lg text-headline-lg text-primary">42</div>
      <div className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                                  Active high-priority items
                              </div>
      </div>
      {/* Actionable Hints */}
      <div className="bg-surface-container-low border border-outline-variant p-4 rounded-lg">
      <h3 className="font-label-md text-label-md text-primary mb-3 flex items-center gap-2">
      <Lightbulb className="text-[16px] text-secondary" aria-hidden={true} focusable="false" />
                                  Follow-up Hints
                              </h3>
      <ul className="space-y-2">
      <li className="flex items-start gap-2 bg-surface-container-lowest p-2 rounded border border-outline-variant cursor-pointer hover:border-secondary transition-colors">
      <BadgeHelp className="text-[14px] text-error mt-0.5" aria-hidden={true} focusable="false" />
      <span className="font-body-sm text-body-sm text-on-surface">3 records missing tags.</span>
      </li>
      <li className="flex items-start gap-2 bg-surface-container-lowest p-2 rounded border border-outline-variant cursor-pointer hover:border-secondary transition-colors">
      <History className="text-[14px] text-on-surface-variant mt-0.5" aria-hidden={true} focusable="false" />
      <span className="font-body-sm text-body-sm text-on-surface">Review 5 unpinned stale notes.</span>
      </li>
      </ul>
      </div>
      </div>
      {/* Main Charts Area */}
      <div className="md:col-span-2 flex flex-col gap-gutter">
      {/* Activity Feed & Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter h-full">
      {/* Recent Activity Feed */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-4 flex flex-col">
      <div className="flex justify-between items-center mb-4 pb-2 border-b border-outline-variant">
      <h3 className="font-label-md text-label-md text-primary">Recent Activity</h3>
      <button className="text-on-surface-variant hover:text-primary" type="button" aria-label="More Horiz" data-action-id="more-horiz-5" onClick={actions?.["more-horiz-5"]}>
      <Ellipsis className="text-[16px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      <div className="flex-1 overflow-y-auto space-y-4 pr-2">
      {/* Activity Item */}
      <div className="flex gap-3 relative before:absolute before:left-[11px] before:top-6 before:bottom-[-16px] before:w-[2px] before:bg-outline-variant last:before:hidden">
      <div className="w-6 h-6 rounded-full bg-surface-container flex items-center justify-center shrink-0 border border-outline-variant z-10">
      <Pencil className="text-[12px] text-on-surface" aria-hidden={true} focusable="false" />
      </div>
      <div>
      <p className="font-body-sm text-body-sm text-on-surface"><span className="font-medium text-primary">Project Alpha</span> was updated.</p>
      <span className="font-label-sm text-label-sm text-on-surface-variant">2 hours ago</span>
      </div>
      </div>
      {/* Activity Item */}
      <div className="flex gap-3 relative before:absolute before:left-[11px] before:top-6 before:bottom-[-16px] before:w-[2px] before:bg-outline-variant last:before:hidden">
      <div className="w-6 h-6 rounded-full bg-secondary-fixed flex items-center justify-center shrink-0 border border-secondary z-10">
      <BadgeHelp className="text-[12px] text-on-secondary-fixed" aria-hidden={true} focusable="false" />
      </div>
      <div>
      <p className="font-body-sm text-body-sm text-on-surface"><span className="font-medium text-primary">Q3 OKRs</span> pinned to workspace.</p>
      <span className="font-label-sm text-label-sm text-on-surface-variant">4 hours ago</span>
      </div>
      </div>
      {/* Activity Item */}
      <div className="flex gap-3 relative before:absolute before:left-[11px] before:top-6 before:bottom-[-16px] before:w-[2px] before:bg-outline-variant last:before:hidden">
      <div className="w-6 h-6 rounded-full bg-surface-container flex items-center justify-center shrink-0 border border-outline-variant z-10">
      <Plus className="text-[12px] text-on-surface" aria-hidden={true} focusable="false" />
      </div>
      <div>
      <p className="font-body-sm text-body-sm text-on-surface">New record <span className="font-medium text-primary">Meeting Notes</span> created.</p>
      <span className="font-label-sm text-label-sm text-on-surface-variant">Yesterday</span>
      </div>
      </div>
      {/* Activity Item */}
      <div className="flex gap-3 relative before:absolute before:left-[11px] before:top-6 before:bottom-[-16px] before:w-[2px] before:bg-outline-variant last:before:hidden">
      <div className="w-6 h-6 rounded-full bg-surface-container flex items-center justify-center shrink-0 border border-outline-variant z-10">
      <Tag className="text-[12px] text-on-surface" aria-hidden={true} focusable="false" />
      </div>
      <div>
      <p className="font-body-sm text-body-sm text-on-surface">Tag <span className="bg-surface-container-high px-1 rounded text-[10px]">#research</span> added to 4 records.</p>
      <span className="font-label-sm text-label-sm text-on-surface-variant">Yesterday</span>
      </div>
      </div>
      </div>
      </div>
      {/* State Distribution */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-4 flex flex-col">
      <div className="flex justify-between items-center mb-4 pb-2 border-b border-outline-variant">
      <h3 className="font-label-md text-label-md text-primary">State Distribution</h3>
      <PieChart className="text-[16px] text-on-surface-variant" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex-1 flex flex-col justify-center gap-4">
      {/* Simulated Simple Bar Chart */}
      <div className="space-y-3">
      <div>
      <div className="flex justify-between font-label-sm text-label-sm mb-1">
      <span className="text-on-surface">Drafts</span>
      <span className="text-on-surface-variant">45%</span>
      </div>
      <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
      <div className="bg-secondary h-full rounded-full" style={{width: "45%"}}></div>
      </div>
      </div>
      <div>
      <div className="flex justify-between font-label-sm text-label-sm mb-1">
      <span className="text-on-surface">Published</span>
      <span className="text-on-surface-variant">30%</span>
      </div>
      <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
      <div className="bg-primary-fixed-dim h-full rounded-full" style={{width: "30%"}}></div>
      </div>
      </div>
      <div>
      <div className="flex justify-between font-label-sm text-label-sm mb-1">
      <span className="text-on-surface">Archived</span>
      <span className="text-on-surface-variant">15%</span>
      </div>
      <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
      <div className="bg-outline-variant h-full rounded-full" style={{width: "15%"}}></div>
      </div>
      </div>
      <div>
      <div className="flex justify-between font-label-sm text-label-sm mb-1">
      <span className="text-on-surface">In Review</span>
      <span className="text-on-surface-variant">10%</span>
      </div>
      <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
      <div className="bg-error-container h-full rounded-full" style={{width: "10%"}}></div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}
