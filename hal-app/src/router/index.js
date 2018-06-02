import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import DestinationDetail from '@/components/DestinationDetail'
import DestinationList from '@/components/DestinationList'
import Trip from '@/components/Trip'
import TripDetail from '@/components/TripDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/destinationdetail',
      name: 'DestinationDetail',
      component: DestinationDetail
    },
    {
      path: '/destinationlist',
      name: 'DestinationList',
      component: DestinationList
    },
    {
      path: '/trip',
      name: 'Trip',
      component: Trip
    },
    {
      path: '/tripdetail',
      name: 'TripDetail',
      component: TripDetail
    }
  ]
})
