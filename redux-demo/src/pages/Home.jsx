import  { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../slices/productListSlice";
import Spinner from "../components/Spinner";

const Home = () => {
  
  
  const dispatch = useDispatch()
  const {items:products  ,status}= useSelector((state)=> state.products);
  useEffect(()=>{
    if(status === 'idle'){
      dispatch(fetchProducts())
    }
  },[status])

  if(status==='loading') return <Spinner/>
  if(status === 'failed') return <p className="text-red-500 p-4 font-bold">failed to fetch, try again!</p>
  return (
    
    <div>
      <h1 className="text-2xl items-center underline">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
        {products.map((product) => (
          <div key={product.id}>
            <ProductCard  product={product}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
