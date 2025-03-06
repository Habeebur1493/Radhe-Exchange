import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {BrowseRouter} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
<BrowseRouter>
<App />
</BrowseRouter>
)
