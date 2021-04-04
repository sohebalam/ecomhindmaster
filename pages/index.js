import Link from 'next/link'
import baseUrl from '../helpers/baseUrl'
import Image from "next/image"
const Home = ({products})=>{


 const productList = products.map(product=>{
   return(
   
    <div className="card pcard" key={product._id}>
    <div className="card-image" >
      <Image src={product.selectedFile} height='200rem' width='600rem' />
    </div>
      <span className="card-title">{product.title}</span>
    <div className="card-content">
      <p> £  {product.price}</p>
    </div>
    <div className="card-action">
      <Link href={'/product/[id]'} as={`/product/${product._id}`}><a>View Product</a></Link>
    </div>
  </div>
  
   )
 })

  // console.log(products)
  return(
    <div className="rootcard">
      {productList}
    </div>
  )
}


export async function getStaticProps(){
 const res =  await fetch(`${baseUrl}/api/products`)
 const data = await res.json()
 return {
   props:{
     products:data
   }
 }
}

// export async function getServerSideProps(){
//  const res =  await fetch(`${baseUrl}/api/products`)
//  const data = await res.json()
//  return {
//    props:{
//      products:data
//    }
//  }
// }






export default Home