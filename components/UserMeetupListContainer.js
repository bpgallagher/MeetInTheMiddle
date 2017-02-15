import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { userMeetupsFetch } from '../actions';
import MeetupList from './MeetupList';
import { CardSection, Spinner } from './common';


class UserMeetupListContainer extends Component {
  componentWillMount() {
    this.props.userMeetupsFetch();
  }

  render() {
    let textContent;
    if (this.props.loading) {
      textContent = <CardSection><Spinner size='small' /></CardSection>;
    } else if (this.props.meetups.length === 0) {
      textContent = <Text style={styles.textStyle}>You have no meetups scheduled.</Text>;
    } else {
      textContent = <Text style={styles.headerStyle}>Your Meetups</Text>;
    }
    return (
      <View>
        {textContent}
        <MeetupList meetups={this.props.meetups} />
      </View>
    );
  }
}

const styles = {
  headerStyle: {
    fontSize: 20,
    alignSelf: 'center',
    padding: 5
  },
  textStyle: {
    fontSize: 18,
    padding: 5
  }
};

const mapStateToProps = state => {
  const meetups = _.map(state.meetups.userMeetups, (val, uid) => {
    return { ...val, uid };
  });
  return { meetups, loading: state.meetups.userLoading };
};

export default connect(mapStateToProps, { userMeetupsFetch })(UserMeetupListContainer);
