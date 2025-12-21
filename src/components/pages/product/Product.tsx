import { useQuery } from '@tanstack/react-query'
import Layout from '../../ui/layout/Layout'
import { ProductService } from '../../../services/ProductService'
import { useParams } from 'react-router-dom'

const Product = () => {
  const params = useParams()
  const {
  data: product,
  isPending
} = useQuery({
  queryKey: ['product'],
  queryFn: () => ProductService.getProductById(params.id || '')
})
  return (
    <Layout>
      {isPending && <div>Loading...</div>}
      {product?.title}
    </Layout>
  )
}

export default Product
