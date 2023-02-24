// npm modules
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'

// page components
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'

import ProfileDetails from './pages/ProfileDetails/ProfileDetails'

import BirdList from './pages/BirdList/BirdList'
import BirdDetails from './pages/BirdDetails/BirdDetails'
import BirdNew from './pages/BirdNew/BirdNew'
import BirdEdit from './pages/BirdEdit/BirdEdit'

import EventList from './pages/EventList/EventList'
import EventDetails from './pages/EventDetails/EventDetails'
import EventNew from './pages/EventNew/EventNew'
import EventEdit from './pages/EventEdit/EventEdit'

import QuestionList from './pages/QuestionList/QuestionList'
import QuestionDetails from './pages/QuestionDetails/QuestionDetails'
import QuestionNew from './pages/QuestionNew/QuestionNew'
import QuestionEdit from './pages/QuestionEdit/QuestionEdit'

import AnswerEdit from './pages/AnswerEdit/AnswerEdit'

import SupplyList from './pages/SupplyList/SupplyList'
import SupplyListDetails from './pages/SupplyListDetails/SupplyListDetails'
import SupplyListNew from './pages/SupplyListNew/SupplyListNew'
import SupplyListEdit from './pages/SupplyListEdit/SupplyListEdit'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as profileService from './services/profileService'
import * as birdService from './services/birdService'
import * as eventService from './services/eventService'
import * as questionService from './services/questionService'
import * as supplyListService from './services/supplyListService'

// styles
import './App.css'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()

  const [birds, setBirds] = useState([])
  const [events, setEvents] = useState([])
  const [supplyLists, setSupplyLists] = useState([])
  const [questions, setQuestions] = useState([])
  const [seen,setSeen] = useState([])
  const [wishlist,setWishlist] = useState([])

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  const handleAddWishlist = (addedBird) => {
    setWishlist([addedBird, ...wishlist])
    navigate(`/profiles/${user.profile}`)
  }

  const handleSeen = (addSeen) => {
    setSeen([addSeen, ...seen])
    setWishlist(wishlist.filter((bird, i) => bird._id !== addSeen._id))
    navigate(`/profiles/${user.profile}`)
  }

  const birdPhotoHelper = async (photo, id) => {
    const photoData = new FormData()
    photoData.append('photo', photo)
    return await birdService.addPhoto(photoData, id)
  }

  const handleAddBird = async (birdData, photo) => {
    const newBird = await birdService.create(birdData)
    if (photo) {
      newBird.photo = await birdPhotoHelper(photo, newBird._id )
    }
    setBirds([newBird, ...birds])
    navigate('/birds')
  }

  const handleUpdateBird = async (birdData, photo) => {
    const updatedBird = await birdService.update(birdData)
    
    if(photo) {
      updatedBird.photo = await birdPhotoHelper(photo, updatedBird._id)
    }
    const updatedBirdsData = birds.map(bird => {
      return birdData._id === bird._id ? updatedBird : bird
    })
    setBirds(updatedBirdsData)
    navigate('/birds')
  }

  const handleDeleteBird = async (id) => {
    const deletedBird = await birdService.deleteBird(id)
    setBirds(birds.filter(b => b._id !== deletedBird._id))
    navigate('/birds')
  }

  useEffect(() => {
    const fetchAllBirds = async () => {
      const data = await birdService.index()
      setBirds(data)
    }
    if (user) fetchAllBirds()
  }, [user])

  const handleAddEvent = async (eventData) => {
    const newEvent = await eventService.create(eventData)
    setEvents([newEvent, ...events])
    navigate('/events')
  }

  const handleUpdateEvent = async (eventData) => {
    const updatedEvent = await eventService.update(eventData)
    const updatedEventsData = events.map(event => {
      return eventData._id === event._id ? updatedEvent : event
    })
    setEvents(updatedEventsData)
    navigate('/events')
  }

  const handleDeleteEvent = async (id) => {
    const deletedEvent = await eventService.deleteEvent(id)
    setEvents(events.filter(b => b._id !== deletedEvent._id))
    navigate('/events')
  }

  useEffect(() => {
    const fetchAllEvents = async () => {
      const data = await eventService.index()
      setEvents(data)
    }
    if (user) fetchAllEvents()
  }, [user])
  
  const handleAddSupplyList = async (supplyListData) => {
    const newSupplyList = await supplyListService.create(supplyListData)
    setSupplyLists([newSupplyList, ...supplyLists])
    navigate('/supplylists')
  }
  
  const handleUpdateSupplyList = async (supplyListData) => {
    const updatedSupplyList = await supplyListService.update(supplyListData)
    const updatedSupplyListsData = supplyLists.map(supplyList => {
      return supplyListData._id === supplyList._id ? updatedSupplyList : supplyList
    })
    setSupplyLists(updatedSupplyListsData)
    navigate('/supplylists')
  }
  
  const handleDeleteSupplyList = async (id) => {
    const deletedSupplyList = await supplyListService.deleteSupplyList(id)
    setSupplyLists(supplyLists.filter(b => b._id !== deletedSupplyList._id))
    navigate('/supplylists')
  }
  
  useEffect(() => {
    const fetchAllSupplyLists = async () => {
      const data = await supplyListService.index()
      setSupplyLists(data)
    }
    if (user) fetchAllSupplyLists()
  }, [user])
  
  const handleAddQuestion = async (questionData) => {
    const newQuestion = await questionService.create(questionData)
    setQuestions([newQuestion, ...questions])
    navigate('/questions')
  }
  const handleUpdateQuestion = async (questionData) => {
    const updatedQuestion = await questionService.update(questionData)
    const updatedQuestionsData = questions.map(question => {
      return questionData._id === question._id ? updatedQuestion : question
    })
    setQuestions(updatedQuestionsData)
    navigate('/questions')
  }

  const handleDeleteQuestion = async (id) => {
    console.log('click works')
    const deletedQuestion = await questionService.deleteQuestion(id)
    setQuestions(questions.filter(b => b._id !== deletedQuestion._id))

    navigate('/questions')
  }

  useEffect(() => {
    const fetchAllQuestions = async () => {
      const data = await questionService.index()
      setQuestions(data)
    }
    if (user) fetchAllQuestions()
  }, [user])
  
  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles user={user}/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/profiles/:id"
          element={
            <ProtectedRoute user={user}>
              <ProfileDetails
              user={user}
              seen={seen}
              wishlist={wishlist}
              handleAddWishlist={handleAddWishlist}
              handleSeen={handleSeen}
              />
            </ProtectedRoute>
          }
        />

        <Route
          path="/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
            </ProtectedRoute>
          }
        />

        <Route
          path="/birds"
          element={
            <ProtectedRoute user={user}>
              <BirdList 
                birds={birds}
                handleAddWishlist={handleAddWishlist}
                handleSeen={handleSeen}
                seen={seen}
                wishlist={wishlist}
              />
            </ProtectedRoute>
          }
        />

        <Route
          path="/birds/:id"
          element={
            <ProtectedRoute user={user}>
              <BirdDetails user={user} 
              handleDeleteBird={handleDeleteBird}
              handleAddWishlist={handleAddWishlist}
              handleSeen={handleSeen}
              seen={seen}
              wishlist={wishlist}
            />

            </ProtectedRoute>
          }
        />

        <Route 
          path="/birds/new"
          element={
            <ProtectedRoute user={user}>
              <BirdNew handleAddBird={handleAddBird} />
            </ProtectedRoute>
          }
        />

        <Route 
          path="/birds/:id/edit" 
          element={
          <ProtectedRoute user={user}>
            <BirdEdit handleUpdateBird={handleUpdateBird} />
          </ProtectedRoute>
        }
        />

        <Route
          path="/events"
          element={
            <ProtectedRoute user={user}>
              <EventList events={events} 
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/events/:id"
          element={
            <ProtectedRoute user={user}>
              <EventDetails user={user} 
              handleDeleteEvent={handleDeleteEvent}/>
            </ProtectedRoute>
          }
        />

        <Route 
          path="/events/new"
          element={
            <ProtectedRoute user={user}>
              <EventNew handleAddEvent={handleAddEvent} />
            </ProtectedRoute>
          }
        />

        <Route 
          path="/events/:id/edit" 
          element={
          <ProtectedRoute user={user}>
            <EventEdit handleUpdateEvent={handleUpdateEvent} />
          </ProtectedRoute>
        } 
        />
        
        <Route
          path="/supplylists"
          element={
            <ProtectedRoute user={user}>
              <SupplyList supplyLists={supplyLists}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/supplylists/:id"
          element={
            <ProtectedRoute user={user}>
              <SupplyListDetails user={user} 
              handleDeleteSupplyList={handleDeleteSupplyList}/>
            </ProtectedRoute>
          }
        />

        <Route 
          path="/supplylists/new"
          element={
            <ProtectedRoute user={user}>
              <SupplyListNew handleAddSupplyList={handleAddSupplyList} />
            </ProtectedRoute>
          }
        />

        <Route 
          path="/supplylists/:id/edit" 
          element={
          <ProtectedRoute user={user}>
            <SupplyListEdit handleUpdateSupplyList={handleUpdateSupplyList} />
          </ProtectedRoute>
        }
        />
        
        <Route
          path="/questions"
          element={
            <ProtectedRoute user={user}>
              <QuestionList questions={questions}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/questions/:id"
          element={
            <ProtectedRoute user={user}>
              <QuestionDetails user={user} 
              handleDeleteQuestion={handleDeleteQuestion}/>
            </ProtectedRoute>
          }
        />

        <Route 
          path="/questions/new"
          element={
            <ProtectedRoute user={user}>
              <QuestionNew handleAddQuestion={handleAddQuestion} />
            </ProtectedRoute>
          }
        />

        <Route 
          path="/questions/:id/edit" 
          element={
          <ProtectedRoute user={user}>
            <QuestionEdit handleUpdateQuestion={handleUpdateQuestion} />
          </ProtectedRoute>
        }
        />

      </Routes>
    </>
  )
}

export default App
