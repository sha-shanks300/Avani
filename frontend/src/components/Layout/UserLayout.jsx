import React, { useEffect } from 'react'
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import { fetchCart } from '../../redux/slices/cartSlice';

const UserLayout = () => {
  const dispatch = useDispatch();
  const { user, guestId } = useSelector((state) => state.auth);
  const userId = user?._id;

  // The cached cart in localStorage can drift from the server (e.g. after a
  // reseed), so sync it on load and whenever the shopper changes.
  useEffect(() => {
    dispatch(fetchCart({ userId, guestId }));
  }, [dispatch, userId, guestId]);

  return (
    <>
      {/*Header*/}
      <Header/>
      {/*Main content*/}
      <main>
        <Outlet/>
      </main>
      {/*Footer*/}
      <Footer/>
    </>
  );
};

export default UserLayout;
