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
// ==/UserScript==

const addKoombeaStyles = () => {
  const css = `:root {
    --koombea-dark-green: #00343D;
    --koombea-green: #0BD8A2;
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
  setTimeout(addKoombeaStyles, 1000);
});
