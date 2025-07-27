
import  { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchProduct } from '../slices/productDetailSlice'
import Spinner from '../components/Spinner'

const ProductDetail = () => {
const dispatch = useDispatch()
const {id}= useParams()
  const {items:product  ,status}= useSelector((state)=> state.product);
  useEffect(()=>{
    if(id && (status === 'idle' || status=== 'failed')){
      dispatch(fetchProduct(id))
    }
  },[id,status, dispatch])

  if(status==='loading') return <Spinner/>
  if(status === 'failed') return <p className="text-red-500 p-4 font-bold">failed to fetch, try again!</p>
  return (
    <div className='mx-auto w-[80%]'>
      <h1 className='py-4 '>ProductDetail for product</h1>
      <div className='flex flex-col gap-2 '>
        <img className='w-full h-64 object-cover object-top' src={product.image} alt="" />
        <p>Product Name: <span className='text-gray-500 text-sm'>{product.name}</span></p>
        <p>Product category: <span className='text-gray-500 text-sm'>{product.category}</span></p>
        <p>Product title: <span className='text-gray-500 text-sm'>{product.title}</span></p>
        <p>Product price: <span className='text-gray-500 text-sm'>{product.price}</span></p>
        <p>Product description: <span className='text-gray-500 text-sm'>{product.description}</span></p>
      
      </div>
    </div>
    
  )
}

export default ProductDetail
