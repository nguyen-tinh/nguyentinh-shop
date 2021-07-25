import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";
import { useEffect, useState } from "react";

function Header() {
  const [session] = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);
  const [btnisHighlighted, setBtnisHighlighted] = useState(false)

  const basketButtonClasses = `relative link flex items-center ${btnisHighlighted ? ' bump' : ''}`

  useEffect(() => {
    if (items.length === 0) {
      return;
    }

    setBtnisHighlighted(true)

    const timer = setTimeout(() =>{
    setBtnisHighlighted(false)
    }, 300)

    return () => {
      clearTimeout(timer)
    }

  }, [items])

  return (
    <header className="overflow-x-hidden">
      {/* Top nav */}
      <div className="flex items-center bg-shop_blue p-1 flex-grow py-2">
        {/* logo */}
        <div className="flex flex-grow items-center mt-2 sm:flex-grow-0">
          <Image
            onClick={() => {
              router.push("/");
            }}
            className="cursor-pointer"
            src="http://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
          />
        </div>

        {/* search */}
        <div className="hidden sm:flex items-center flex-grow h-10 rounded-md cursor-pointer bg-yellow-400 hover:bg-yellow-500">
          <input
            className="p-2 h-full w-6 flex-grow rounded-l-md focus:outline-none px-4"
            type="text"
          />
          <SearchIcon className="h-12 p-4" />
        </div>

        {/* Right */}
        <div className="text-white text-xs space-x-6 mx-6 flex items-center whitespace-nowrap">
          <div onClick={!session ? signIn : signOut} className="link">
            <p>{session ? `Hello, ${session.user.name}` : "Sign In"}</p>
            <p className="font-extrabold md:text-sm">Account &amp; Lists</p>
          </div>

          <div onClick={() => router.push("/orders")} className="link">
            <p>Return</p>
            <p className="font-extrabold md:text-sm">&amp; Orders</p>
          </div>

          {/* BasketButton */}
          <div
            onClick={() => {
              router.push("/checkout");
            }}
            className={basketButtonClasses}
          >
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
              {items.length}
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-extrabold md:text-sm mt-2">
              Basket
            </p>
          </div>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="flex items-center space-x-3 p-2 pl-6 bg-shop_blue-light text-white text-sm">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
      </div>
    </header>
  );
}

export default Header;
