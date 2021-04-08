import React, { useState, useEffect } from 'react';
import noms from '../data/noms.js';
import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCN_1-Oe_PLTXfR3e4Z8zeFIyKsG-6dBrw",
  authDomain: "oscars-2021.firebaseapp.com",
  databaseURL: "https://oscars-2021-default-rtdb.firebaseio.com",
  projectId: "oscars-2021",
  storageBucket: "oscars-2021.appspot.com",
  messagingSenderId: "861066941311",
  appId: "1:861066941311:web:90e533e74165ed42a7804a"
};

firebase.initializeApp(firebaseConfig);

// **********

const votes = firebase.database().ref(`votes/dominic`);

// **********

const updateNom = (event) => {
  const selectMenu = event.target.name;
  
  const postData = {
    [selectMenu]: event.target.value
  };

  votes.update(postData);
};

// **********

const UserVotes = () => {  
  const [userNoms, setUserNoms] = useState();
  
  useEffect(() => {
    votes.on('value', (snapshot) => {
      setUserNoms(snapshot.val());
    });
  }, []);

  const renderCategory = (forAndId, label, name, category) => {
    const selected = userNoms && userNoms[name];
    return (
      <div>
        <label htmlFor={forAndId}>{label}:</label>
        <select name={name} id={forAndId} value={selected}>
          <option>--Please Select a Winner!--</option>
          {category.map((item, index) => {
            return <option key={index}>{item}</option>;
          })}
        </select>
      </div>
    );
  };
  
  return (
    <>
      <form id="userVotes" onChange={updateNom}>
        <ul>
          <li>{renderCategory('best-picture', 'Best Picture', 'bestPicture', noms.bestPictureNoms)}</li>
          <li>{renderCategory('best-director', 'Best Director', 'bestDirector', noms.bestDirectorNoms)}</li>
          <li>{renderCategory('best-actress', 'Best Actress', 'bestActress', noms.bestActressNoms)}</li>
          <li>{renderCategory('best-actor', 'Best Actor', 'bestActor', noms.bestActorNoms)}</li>
          <li>{renderCategory('best-supporting-actress', 'Best Supporting Actress', 'bestSupportingActress', noms.bestSupportingActressNoms)}</li>
          <li>{renderCategory('best-supportingActor', 'Best SupportingActor', 'bestSupportingActor', noms.bestSupportingActorNoms)}</li>
          <li>{renderCategory('best-adapted-screenplay', 'Best Adapted Screenplay', 'bestAdaptedScreenplay', noms.bestAdaptedScreenplayNoms)}</li>
          <li>{renderCategory('best-original-sreenplay', 'Best Original Screenplay', 'bestOriginalScreenplay', noms.bestOriginalScreenplayNoms)}</li>
          <li>{renderCategory('best-costume-design', 'Best Costume Design', 'bestCostumeDesign', noms.bestCostumeDesignNoms)}</li>
          <li>{renderCategory('best-animated-feature-film', 'Best Animated Feature Film', 'bestAnimatedFeatureFilm', noms.bestAnimatedFeatureFilmNoms)}</li>
          <li>{renderCategory('best-makeup-and-hairstyling', 'Best Makeup And Hairstyling', 'bestMakeupAndHairstyling', noms.bestMakeupAndHairstylingNoms)}</li>
          <li>{renderCategory('best-visual-effects', 'Best Visual Effects', 'bestVisualEffects', noms.bestVisualEffectsNoms)}</li>
        </ul>
        <div>
          <button>Done!</button>
        </div>
      </form>
    </>
  );
};

export default UserVotes;