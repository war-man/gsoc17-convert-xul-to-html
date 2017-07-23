(function() {
  const { connect } = ReactRedux;
  const { bindActionCreators } = Redux;

  const OtherInfo = ({ state, actions }) => {
    const {} = state;
    const {} = actions;
    // <TabStrip tabs={allTabsName} handleTabChange={handleTabChange} activeTab={activeTab} />

    return (
      <div id="other-info-wrapper">
        <TabBox>
          <TabStrip tabs={["Description", "Attachment", "Attendees"]} />
        </TabBox>
      </div>
    );
  };

  OtherInfo.propTypes = {
    state: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  };

  const mapStateToProps = ({ otherInfo }) => ({ state: otherInfo });

  const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(window.__other_info_actions__, dispatch)
  });

  window.OtherInfo = connect(mapStateToProps, mapDispatchToProps)(OtherInfo);
})();