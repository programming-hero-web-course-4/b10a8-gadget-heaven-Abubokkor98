import { useContext, useEffect } from "react";
import WishlistCompo from "../../components/Carts/WishlistCompo";
import Heading from "../../components/Heading/Heading";
import Header from "../../layout/Header/Header";
import { ProductContext } from "../../layout/Root/MainRoot";

const Wishlist = () => {
  const { wishlistArray } = useContext(ProductContext);
  useEffect(() => {
    document.title = "Wishlist | GadgetHeaven ";
  }, []);
  return (
    <div className="p-1 pt-6">
      <Header />
      <div className="bg-purple-600 text-white py-5  rounded-xl">
        <Heading
          title={"Wishlist"}
          p={
            "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
          }
        />
      </div>

      {/* card */}
      <div className="flex justify-between items-center mt-10 ">
        <h3 className="font-bold text-2xl text-purple-700">Your Wishlist</h3>
      </div>
      {wishlistArray.map((wishlist) => (
        <WishlistCompo key={wishlist.product_id} wishlist={wishlist} />
      ))}
    </div>
  );
};

export default Wishlist;
