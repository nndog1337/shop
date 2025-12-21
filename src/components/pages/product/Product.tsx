import { useQuery } from '@tanstack/react-query'
import Layout from '../../ui/layout/Layout'
import { ProductService } from '../../../services/ProductService'
import { useParams } from 'react-router-dom'
import Button from '../../ui/button/Button'
import Gallery from '../product/gallery/Gallery'

const Product = () => {
  const params = useParams()
  const {
  data: product,
  isPending
} = useQuery({
  queryKey: ['product'],
  queryFn: () => ProductService.getProductById(params.id || '')
})

  if(!product) return <Layout><div>Product not found...</div></Layout>
  return (
    <Layout>
      {isPending && <div>Loading...</div>}
      <Gallery images={product.images}/>

      <h1 className='text-3xl font-semibold mb-2 mt-4'>{product.title}</h1>

      <div className='text-xl'>{new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency:'USD'
      }).format(product.price)}</div>

      <Button >Add to cart</Button>
    </Layout>
  )
}

export default Product
