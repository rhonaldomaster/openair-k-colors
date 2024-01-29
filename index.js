// ==UserScript==
// @name         Koombea OpenAir
// @namespace    koombea_air
// @version      0.2.1
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
    --koombea-light-green: #0BD8A2;
    --koombea-booking-confirmed: #8ACBF9;
    --koombea-booking-pto: #F2AB52;
    --koombea-booking-internal: #C38CEA;
    --koombea-booking-tentative: #B8B8B8;
    --koombea-booking-overbook: #CC2E3B;
    --koombea-booking-holiday: #F2F2F2;
    --koombea-booking-available: #E6E6E6;
    --white: #FFFFFF;
    --link: #1D979F;
    --link-hover: #14686E;
  }

  .item-creation,
  .item:before {
    background-color: var(--koombea-green) !important;
  }

  .oa3_ui .btn-oa:not(.ui3extended),
  .oa3_ui input.vf_buttons, .oa3_ui input[type="button"]:not(.ui3extended),
  .oa3_ui input[type="submit"]:not(.ui3extended) {
    background-color: var(--koombea-green);
    border-radius: 4px;
  }

  .oa3_ui .thirdLevelNavigation .tabItem.active.noLink, .oa3_ui .thirdLevelNavigation .tabItem.active a.tabLink, .oa3_ui .thirdLevelNavigation td.active>a.tabLink {
    background: var(--koombea-green);
    color: var(--white);
  }

  .oa3_ui .thirdLevelNavigation .tabItem.active a.tabLink:hover, .oa3_ui .thirdLevelNavigation a.tabLink:hover {
    background: var(--koombea-dark-green);
  }

  .oa3_ui .thirdLevelNavigation a:link, .oa3_ui .thirdLevelNavigation a:visited, .oa3_ui .thirdLevelNavigation span.pagemenu span.menuAnchor {
    color: var(--link);
  }

  .bp-toolbar-section-part .reportTypeActive {
    border-bottom: 0 none !important;
  }

  .item-subtab.item-active,
  .item-link:hover {
    border-color: #dde0e3 !important;
  }

  .item-subtab {
    border-left-color: var(--koombea-green) !important;
  }

  .nav-dialog {
    background: var(--koombea-dark-green) !important;
  }

  .item-main.item-selected,
  .item-main:hover,
  .item-auxiliary:hover{
    background: var(--koombea-green) !important;
  }

  .item-auxiliary {
    background-color: var(--koombea-dark-green) !important;
  }

  .nav-dialog-section-header {
    color: var(--white) !important;
  }

  .list-view-section-splitter {
    border-right-color: var(--koombea-green) !important;
  }

  .oa3_ui a:visited, .oa3_ui a:link, .oa3_ui a:active {
    color: var(--link);
  }

  .oa3_ui a:hover {
    color: var(--link-hover);
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
    color: var(--white);
  }

  .oa3_ui #page_footer.oa3_footer {
    background-color: var(--koombea-dark-green);
    color: var(--white);
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
    background-color: var(--koombea-green);
    color: var(--white);
  }

  .oa4:not([data-is-iframe]):not(.popupWindow):not(.in_pane):not(.integratedWindow):not(.inlineWindow) .bodyIndent .noBorder td[colspan="15"] + td + td {
    background-color: var(--koombea-green);
    color: var(--white);
  }

  .column-filter-dropdown-active .inline-field-wrapper {
    background-color: var(--koombea-dark-green);
  }

  .column-filter-dropdown-active .inline-field-wrapper {
    background-color: var(--koombea-dark-green) !important;
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

  .nav-list-wrapper {
    background-color: var(--koombea-dark-green) !important;
  }

   .company-logo-wrapper {
    background-color: var(--koombea-dark-green) !important;
  }

  .company-logo-inner {
    width: 60px !important;
    height: 60px !important;
    top: 8px !important;
    left: 8px !important;
  }

  .company-logo {
    position: absolute;
    top: -2px;
    left: -2px;
  }

  .TSCellHeader {
    background: var(--koombea-green) !important;
  }

  .TSGanttHeader2, .TSGanttHeader3, .TSGanttHeader5 {
    background: var(--koombea-green);
    border-left: 1px solid var(--koombea-dark-green);
    border-top: 1px solid var(--koombea-dark-green);
  }

  .oa3_ui .viewFilterInline select.highlight, .oa3_ui .viewFilter select.highlight {
    background-color: #F2F4F8 !important;
    color: var(--koombea-dark-green);
    border-color: #C7C7C7;
  }

  .resourceRowCell {
    border-top: 1px solid rgb(229, 229, 229) !important;
    overflow: visible !important;
  }

  #oa_view_booking_planner_envelope .GMGanttBaseIn, #oa_view_booking_planner_envelope .GMGanttBaseOut {
    border-radius: 4px !important;
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
    background-color: var(--koombea-booking-overbook)!important;
    border-color: var(--koombea-booking-overbook) !important;
  }

  #oa_view_booking_planner_envelope .resourceRowCell div:has(.GMGanttUnvIn),
  #oa_view_booking_planner_envelope .resourceRowCell div:has(.GMGanttHolIn) {
    border-right: 1px dotted rgb(178, 178, 178);
    border-left: 1px dotted rgb(178, 178, 178);
  }

  #oa_view_booking_planner_envelope .GMGanttHolOut, #oa_view_booking_planner_envelope div.GMGanttHolIn,
  #oa_view_booking_planner_envelope .GMGanttUnvOut, #oa_view_booking_planner_envelope div.GMGanttUnvIn,
  #oa_view_booking_planner_envelope .resourceRowCell div:has(.GMGanttUnvIn),
  #oa_view_booking_planner_envelope .resourceRowCell div:has(.GMGanttHolIn) {
    background-color: var(--koombea-booking-holiday) !important;
  }

  #oa_view_booking_planner_envelope .resourceRowCell div:has(.GMGanttUnvIn),
  #oa_view_booking_planner_envelope .resourceRowCell div:has(.GMGanttHolIn) {
    border: 0 none !important;
    text-indent: -9999px !important;
  }

  #oa_view_booking_planner_envelope .GMGanttAvlOut, #oa_view_booking_planner_envelope div.GMGanttAvlIn {
    background-color: var(--koombea-booking-available) !important;
  }

  #oa_view_booking_planner_envelope .GMGanttBillableConfirmed1Out, #oa_view_booking_planner_envelope div.GMGanttBillableConfirmed1In {
    background-color: var(--koombea-booking-confirmed) !important;
    border-color: var(--koombea-booking-confirmed);
  }

  #oa_view_booking_planner_envelope .GMGanttNonbillableConfirmed7Out, #oa_view_booking_planner_envelope div.GMGanttNonbillableConfirmed7In {
    background-color: var(--koombea-booking-internal) !important;
    border-color: var(--koombea-booking-internal);
  }

  #oa_view_booking_planner_envelope .GMGanttBillableTentative5Out, #oa_view_booking_planner_envelope div.GMGanttBillableTentative5In,
  #oa_view_booking_planner_envelope .GMGanttNonbillableTentative5Out, #oa_view_booking_planner_envelope div.GMGanttNonbillableTentative5In{
    background-color: var(--koombea-booking-tentative) !important;
    border-color: var(--koombea-booking-tentative);
  }

  #oa_view_booking_planner_envelope .GMGanttUnavailable2Out, #oa_view_booking_planner_envelope div.GMGanttUnavailable2In {
    background-color: var(--koombea-booking-pto) !important;
    border-color: var(--koombea-booking-pto);
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
}

window.addEventListener('load', () => {
  addKoombeaStyles();
  setInterval(convertBookingPercentToHD, 1000);
});

/**
 * Converts booking % to h/d
 */
function convertBookingPercentToHD() {
  const bookings = document.querySelectorAll('.GMGanttFixedIn, .GMGanttLeftIn, .GMGanttRightIn, .GMGanttBaseIn');
  bookings.forEach((booking) => {
    // Validates that the booking wasn't already converted and that it contains the % value
    const bookingHTML = booking.innerHTML;
    if (
      bookingHTML.split('h/d')[0] == bookingHTML &&
      bookingHTML != '' &&
      bookingHTML.match(/([0-9]*\.?[0-9]+)\s%/) != null
    ) {
      const hours_per_day = Math.round(((bookingHTML.match(/([0-9]*\.?[0-9]+)\s%/)[1] * 8) / 100 + Number.EPSILON) * 100) / 100;
      if (bookingHTML.match(/([0-9]*\.?[0-9]+)\s%/)[0] == booking.textContent) {
        // For allocation percentage bubbles at the top
        booking.innerHTML = hours_per_day + 'h/d';
      } else {
        // For bookings
        booking.innerHTML = hours_per_day + 'h/d ' + bookingHTML;
      }
    }
  });
}