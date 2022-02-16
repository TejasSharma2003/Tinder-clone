import React, { useState,useEffect } from "react";
import TinderCard from "react-tinder-card";
import styled from "styled-components";
import Itachi from "../Assets/Images/Itachi.jpg";
import CardComponent from "./Cards";
import "../styles/card-component.css";
import database from "../firebase"
import {collection,getDocs} from "firebase/firestore"
function TinderCards() {
  const [people, setPeople] = useState([]);
  const collectionPeople=collection(database, "People") // reference to collection we might have a lot of collection in our database so we are defining which collection we are looking for
  useEffect(()=>{

    const getUsers= async()=>{
      const data=await getDocs(collectionPeople);// get  bundle document returns us the document which is inside collectionPeople

      setPeople(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
    }  
    getUsers();
  },[])
  // useEffect(()=>{
  //   async function getPeople()
  //   {
  //     const data=await getDocs(collectionPeople);
  //     setPeople(data.docs.map((doc)=>{
  //       return({...doc.data()})
  //     }))

  //   }
  //   getPeople();
  // })



  return (
    <div className="main">
        {people.map((person) => {
          return (
            <TinderCard className="swipe" preventSwipe={["up", "down"]}>
              <CardComponent person={person.Name} image={person.url} />
            </TinderCard>
          );
        })}
    </div>
  );
}

export default TinderCards;
