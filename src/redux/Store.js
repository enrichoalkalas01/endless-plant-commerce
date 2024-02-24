import { configureStore } from '@reduxjs/toolkit'

// Reducers
import template from './reducers/template'
import navbar from './reducers/navbar'

export const Store = configureStore({
    reducer: {
        Navbar: navbar,
    },
})