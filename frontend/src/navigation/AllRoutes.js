import { Routes, Route } from 'react-router-dom'
import ListDataProvider from './context/ListDataProvider'
import Home from './Home'
import PathNameList from './PathNameList'
import CompanyDetail from '../company/CompanyDetail'
import LoginForm from '../user/LoginForm'
import SignUpForm from '../user/SignUpForm'
import EditProfile from '../user/EditProfile'
import NotFoundPage from './NotFoundPage'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='*' element={<NotFoundPage />} />
      <Route path='/' element={<Home />} />
      <Route
        path='/companies'
        element={
          <ListDataProvider>
            <PathNameList />
          </ListDataProvider>
        }
      />
      <Route
        path='/companies/:handle'
        element={
          <CompanyDetail />
        }
      />
      <Route
        path='/jobs'
        element={
          <ListDataProvider>
            <PathNameList />
          </ListDataProvider>
        }
      />
      <Route path='/login' element={<LoginForm />} />
      <Route path='/signup' element={<SignUpForm />} />
      <Route path='/profile' element={<EditProfile />} />
    </Routes>
  )
}

export default AllRoutes;