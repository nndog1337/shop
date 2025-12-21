import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './components/pages/home/Home.tsx'
import Product from './components/pages/product/Product.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Routes, Route,} from "react-router-dom";

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>

      <Routes>
        <Route path='/' element={<Home />}/>

        <Route path='/product/:id' element={<Product />}/>

      </Routes>

    </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
)
