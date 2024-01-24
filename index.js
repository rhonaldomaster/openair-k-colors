// ==UserScript==
// @name         Koombea OpenAir
// @namespace    koombea_air
// @version      0.1
// @description  Change open air colors
// @author       rhonaldomaster
// @compatible   chrome
// @compatible   edge
// @compatible   firefox
// @compatible   opera
// @compatible   safari
// @copyright    GNU/GPL v3
// @grant        GM_addStyle
// @homepage     https://github.com/rhonaldomaster/openair-k-colors
// @icon         https://www.google.com/s2/favicons?sz=64&domain=openair.com
// @license      GPL-3.0-or-later
// @match        https://koombea-inc.app.openair.com/*
// @downloadURL https://update.greasyfork.org/scripts/482700/Koombea%20OpenAir.user.js
// @updateURL https://update.greasyfork.org/scripts/482700/Koombea%20OpenAir.meta.js
// ==/UserScript==

const addKoombeaStyles = () => {
  const css = `:root {
    --koombea-dark-green: #00343D;
    --koombea-green: #26666B;
    --white: #FFFFFF;
  }

  .item-creation,
  .item:before {
    background-color: var(--koombea-green) !important;
  }

  .oa3_ui .btn-oa:not(.ui3extended),
  .oa3_ui input.vf_buttons, .oa3_ui input[type="button"]:not(.ui3extended),
  .oa3_ui input[type="submit"]:not(.ui3extended) {
    background-color: var(--koombea-green);
  }

  .item-active,
  .item-link:hover {
    border-color: var(--koombea-green) !important;
  }

  .list-view-section-splitter {
    border-right-color: var(--koombea-green) !important;
  }

  .svg.checkmarkSmall {
    background-color: var(--koombea-green);
  }

  .select-box-selected {
    background-color: var(--koombea-green);
    border-color: var(--koombea-green);
  }

  body.oa3_ui.timesheet #timesheet_grid table.timesheet thead th.timesheetControl,
  body.oa3_ui.timesheet #timesheet_header table.timesheet thead th.timesheetControl,
  body.oa3_ui.timesheet #timesheet_grid table.timesheet thead th.timesheetButton,
  body.oa3_ui.timesheet #timesheet_header table.timesheet thead th.timesheetButton {
    background-color: var(--koombea-green);
  }

  body.oa3_ui.timesheet #timesheet_grid table.timesheet thead th.timesheetTotal,
  body.oa3_ui.timesheet #timesheet_header table.timesheet thead th.timesheetTotal {
    background-color: var(--koombea-green);
  }

  .bulk-actions-active .bulk-actions-count,
  .list-head-cell {
    background-color: var(--koombea-green) !important;
  }

  .list-head-cell .svg {
    filter: brightness(1.5);
  }

  .action-control-active,
  .rc-text-wrapper-value a {
    color: var(--koombea-green) !important;
  }

  .rc-text-wrapper-value a:hover {
    color: var(--koombea-dark-green) !important;
  }

  .item-creation.item-selected,
  .item-creation:hover,
  .nav-dialog-header {
    background-color: var(--koombea-green) !important;
  }

  .oa3_ui div.notificationEnvelopeOutside div.notificationEnvelopeInside div.notificationTitle.notificationTitleConfirm {
    background-color: var(--koombea-green);
    color: var(--koombea-dark-green);
  }

  .oa3_ui #page_footer.oa3_footer {
    background-color: var(--koombea-green);
    color: var(--koombea-dark-green);
  }

  .oa3_ui .btn-oa:not(.ui3extended):hover,
  .oa3_ui input.vf_buttons:hover,
  .oa3_ui input[type="button"]:not(.ui3extended):hover,
  .oa3_ui input[type="submit"]:not(.ui3extended):hover {
    background-color: var(--koombea-dark-green);
    text-shadow: none;
  }

  .oa4:not([data-is-iframe]):not(.popupWindow):not(.in_pane):not(.integratedWindow):not(.inlineWindow) .bodyIndent .noBorder tr:nth-child(2),
  .oa4:not([data-is-iframe]):not(.popupWindow):not(.in_pane):not(.integratedWindow):not(.inlineWindow) .bodyIndent .noBorder tr:nth-child(6),
  .oa4:not([data-is-iframe]):not(.popupWindow):not(.in_pane):not(.integratedWindow):not(.inlineWindow) .bodyIndent .noBorder td[colspan="15"] {
    background-color: var(--koombea-dark-green);
    color: var(--white);
  }

  .oa4:not([data-is-iframe]):not(.popupWindow):not(.in_pane):not(.integratedWindow):not(.inlineWindow) .bodyIndent .noBorder td[colspan="15"] + td + td {
    background-color: var(--koombea-green);
    color: var(--white);
  }

  .column-filter-dropdown-active .inline-field-wrapper {
    background-color: var(--koombea-dark-green);
  }

  .svg.checkmarkGreenMedium {
    filter: hue-rotate(45deg);
  }

  .input-switch-input:checked+.input-switch-switch .input-switch-switch-bg-pin {
    border-color: var(--koombea-green);
  }

  .input-switch-input:checked+.input-switch-switch {
    background-color: var(--koombea-green);
  }

  body.oa3_ui.timesheet #timesheet_grid table.timesheet tfoot tr td.timesheetTotal, body.oa3_ui.timesheet #timesheet_header table.timesheet tfoot tr td.timesheetTotal {
    background-color: var(--koombea-dark-green);
    color: var(--white);
  }

  .svg.noteSmall {
    filter: hue-rotate(45deg);
  }

  .nav-list-wrapper[data-v-7fa901d4] {
    background-color: #00343D !important;
  }

   .company-logo-wrapper[data-v-26227760] {
    background-color: #00343D !important;
  }

  .company-logo-inner[data-v-26227760] {
    width: 60px !important;
    height: 60px !important;
    top: 8px !important;
    left: 8px !important;
  }

  .company-logo[data-v-26227760] {
    position: absolute;
    top: -2px;
    left: -2px;
  }

  .item-auxiliary[data-v-591c513b] {
    background-color: #00343D !important;
  }

  .TSCellHeader {
    background: #26666B !important;
  }

  .oa3_ui .viewFilterInline select.highlight, .oa3_ui .viewFilter select.highlight {
    background-color: #48ABAA !important;
  }

  .resourceRowCell {
    border-top: 1px solid rgb(229, 229, 229) !important;
    overflow: visible !important;
  }

  #oa_view_booking_planner_envelope .GMGanttBkdOut, #oa_view_booking_planner_envelope .GMGanttBkdIn,
  #oa_view_booking_planner_envelope .GMGanttUnvOut, #oa_view_booking_planner_envelope .GMGanttUnvIn,
  #oa_view_booking_planner_envelope .GMGanttAvlOut, #oa_view_booking_planner_envelope .GMGanttAvlIn,
  #oa_view_booking_planner_envelope .GMGanttHolOut, #oa_view_booking_planner_envelope .GMGanttHolIn,
  #oa_view_booking_planner_envelope .GMGanttOvrOut, #oa_view_booking_planner_envelope .GMGanttOvrIn {
    border-radius: 16px !important;
    font-size: 10px !important;
    text-align: center !important;
    padding: 0px 1px !important;
    text-overflow: clip !important;
    height: 12px !important;
    line-height: 12px !important;
  }

  #oa_view_booking_planner_envelope .GMGanttOvrOut, #oa_view_booking_planner_envelope div.GMGanttOvrIn {
    background-color: #CC2E3B !important;
    border-color: #CC2E3B !important;
  }

  #oa_view_booking_planner_envelope .resourceRowCell div:has(.GMGanttUnvIn),
  #oa_view_booking_planner_envelope .resourceRowCell div:has(.GMGanttHolIn) {
    border-right: 1px dotted rgb(178, 178, 178);
    border-left: 1px dotted rgb(204, 204, 204);
  }

  #oa_view_booking_planner_envelope .GMGanttHolOut, #oa_view_booking_planner_envelope div.GMGanttHolIn,
  #oa_view_booking_planner_envelope .GMGanttUnvOut, #oa_view_booking_planner_envelope div.GMGanttUnvIn,
  #oa_view_booking_planner_envelope .resourceRowCell div:has(.GMGanttUnvIn),
  #oa_view_booking_planner_envelope .resourceRowCell div:has(.GMGanttHolIn) {
    background-color: rgb(242, 242, 242) !important;
  }

  #oa_view_booking_planner_envelope .resourceRowCell div:has(.GMGanttUnvIn),
  #oa_view_booking_planner_envelope .resourceRowCell div:has(.GMGanttHolIn) {
    border: 0 none !important;
    text-indent: -9999px !important;
  }

  #oa_view_booking_planner_envelope .GMGanttBaseIn, #oa_view_booking_planner_envelope .GMGanttBaseOut {
    border-radius: 4px !important;
  }

  #oa_view_booking_planner_envelope .resourceRowCell .GMGanttBoxOut {
    height: 12px;
    margin-top: 16px !important;
  }
`

  if (typeof GM_addStyle != 'undefined') {
    GM_addStyle(css);
    return;
  } else if (typeof PRO_addStyle != 'undefined') {
    PRO_addStyle(css);
    return;
  } else if (typeof addStyle != 'undefined') {
    addStyle(css);
    return;
  }
};

window.addEventListener('load', () => {
  addKoombeaStyles();
});
