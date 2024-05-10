import React from 'react'

const MeetingContext = React.createContext({
  optionList: [],
  Name: '',
  displayTopic: '',
  changeDisplayTopic: () => {},
  changeUserName: () => {},
  meetingDetails: '',
  changeMeeting: () => {},
})

export default MeetingContext
