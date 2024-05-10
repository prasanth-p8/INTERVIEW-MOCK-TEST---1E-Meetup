import {Component} from 'react'

import {Route, Switch, Redirect} from 'react-router-dom'

import Register from './components/Register'
import Home from './components/Home'
import Header from './components/Header'
import NotFound from './components/NotFound'

import './App.css'
import MeetingContext from './context/MeetingContext'

// These are the lists used in the application. You can move them to any component needed.
const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

// Replace your code here
class App extends Component {
  state = {
    optionList: topicsList,
    Name: '',
    meetingDetails: topicsList[0].id,
    displayTopic: '',
  }

  changeUserName = Name => {
    this.setState({Name})
  }

  changeMeeting = topic => {
    this.setState({meetingDetails: topic})
  }

  changeDisplayTopic = displayTopic => {
    const findTopic = topicsList.find(
      eachTopic => eachTopic.id === displayTopic,
    )

    this.setState({displayTopic: findTopic.displayText})
  }

  render() {
    const {optionList, Name, meetingDetails, displayTopic} = this.state
    console.log(Name, meetingDetails, displayTopic)
    return (
      <MeetingContext.Provider
        value={{
          optionList,
          Name,
          meetingDetails,
          displayTopic,
          changeUserName: this.changeUserName,
          changeMeeting: this.changeMeeting,
          changeDisplayTopic: this.changeDisplayTopic,
        }}
      >
        <>
          <Header />
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/" component={Home} />
            <Route exact path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </>
      </MeetingContext.Provider>
    )
  }
}

export default App
