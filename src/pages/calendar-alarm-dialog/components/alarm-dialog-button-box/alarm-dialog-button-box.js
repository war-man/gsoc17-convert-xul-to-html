/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function() {
  /* global React, Redux, ReactRedux */
  const { connect } = ReactRedux;
  const { bindActionCreators } = Redux;

  const AlarmDialogButtonBox = ({ actions }) => {
    const { snoozeAllAlarm, dismissAllAlarm } = actions;

    return (
      <div id="alarm-action-box" className="alarm-dialog-buttonbox">
        <SnoozeButton onClick={snoozeAllAlarm} type="all" />
        <button id="dismiss-all" onClick={dismissAllAlarm}>Dismiss All</button>
      </div>
    );
  };

  AlarmDialogButtonBox.propTypes = {
    actions: PropTypes.object.isRequired
  };

  const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(window.__all_alarms_actions__, dispatch)
  });

  window.AlarmDialogButtonBox = connect(undefined, mapDispatchToProps)(AlarmDialogButtonBox);
})();
