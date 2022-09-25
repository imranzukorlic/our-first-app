import React from "react";
import Card from "../../components/Card/Card";
import { toast } from "react-hot-toast";

const HomePage = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="flex w-full justify-center mt-5 h-1/5 flex-row  ">
        <img
          className=" flex  w-7/12 h-1/5 "
          src="https://th.bing.com/th/id/OIP.HoYmNK9LK2rc2mUetSgcBAHaDP?w=350&h=153&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt="slika"
        />
        <img
          className=" flex  w-3/12 h-1/5 border-4 border-cyan-400 "
          src="https://th.bing.com/th/id/OIP.3aOwtWG3J2um24yqyeyOXwHaHa?w=203&h=203&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt="slika"
        />
      </div>
      <div className=" flex items-center mt-10 justify-center border-4 w-1/6 h-12 border-sky-800 rounded-xl bg-sky-800  text-amber-50 ease-out duration-300 hover:bg-white hover:text-black">
        <h3 className="font-serif text-xl font-extrabold ">
          Najbolje u ponudi
        </h3>
      </div>
      <div className=" w-full min-h-min flex justify-evenly py-10 mt-10 bg-sky-600">
        <Card
          price="30"
          text="Replay muška majica kratkih rukava. Okrugli izrez. Pamuk. Teget boja."
          image="https://www.n-sport.net/UserFiles/products/big/09/12/muska-majica-replay-316522832P-098.jpg"
          title="Replay Maica"
          onClick={() => toast.success("Uspesno ste dodali artikal u korpu!")}
        />
        <Card
          price="30"
          text="Replay muška majica kratkih rukava. Okrugli izrez. Pamuk. Teget boja."
          image="https://www.n-sport.net/UserFiles/products/big/09/12/muska-majica-replay-316522832P-098.jpg"
          title="Replay Maica"
          onClick={() => toast.success("Uspesno ste dodali artikal u korpu!")}
        />
        <Card
          price="30"
          text="Replay muška majica kratkih rukava. Okrugli izrez. Pamuk. Teget boja."
          image="https://www.n-sport.net/UserFiles/products/big/09/12/muska-majica-replay-316522832P-098.jpg"
          title="Replay Maica"
          onClick={() => toast.success("Uspesno ste dodali artikal u korpu!")}
        />
        <Card
          price="30"
          text="Replay muška majica kratkih rukava. Okrugli izrez. Pamuk. Teget boja."
          image="https://www.n-sport.net/UserFiles/products/big/09/12/muska-majica-replay-316522832P-098.jpg"
          title="Replay Maica"
          onClick={() => toast.success("Uspesno ste dodali artikal u korpu!")}
        />
      </div>
    </div>
  );
};

export default HomePage;
