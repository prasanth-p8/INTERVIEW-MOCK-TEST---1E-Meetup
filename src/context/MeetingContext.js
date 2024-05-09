import React from 'react'

const MeetingContext = React.createContext({
  optionList: [],
  userName: '',
  displayTopic: '',
  changeDisplayTopic: () => {},
  changeUserName: () => {},
  meetingDetails: '',
  changeMeeting: () => {},
})

export default MeetingContext
