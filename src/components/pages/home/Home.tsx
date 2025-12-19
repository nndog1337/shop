import styles from "./styles.module.css";
import { ProductService } from "../../../services/ProductService";
import { useQuery } from "@tanstack/react-query";
import ProductItem from "../../ui/product-item/ProductItem";
import Layout from "../../ui/layout/Layout";

const Home = () => {
  const {
  data: products,
  error,
  isPending
} = useQuery({
  queryKey: ['products'],
  queryFn: () => ProductService.getProducts(),
  select: (data) => data.products
});

  return (
    <Layout title="Shop the collection">
      {isPending ? (
        <h1 className="text-blue-400 text-2xl">Loading...</h1>
      ) : products?.length ? (
        <div className={styles.wrapper}>
          {products?.map((product) => (<ProductItem product={product} key={product.id}/>))}
        </div>
      ) : (
        <div>Products not found</div>
      )}
    </Layout>
  );
};

export default Home;
