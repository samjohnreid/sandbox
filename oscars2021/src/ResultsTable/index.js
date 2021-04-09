import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';

const votes = firebase.database().ref(`votes`);

// **********

const ResultsTable = () => {
  const [results, setResults] = useState();
  
  useEffect(() => {
    votes.on('value', (snapshot) => {
      setResults(snapshot.val());
    });
  }, []);

  const renderRow = (category, dbCat) => {
    const resultsArray = results && Object.values(results);
    return (
      <>
        <td>{category}</td>
        {resultsArray && resultsArray.map((item, index) => {
          return <td key={index}>{item.results[dbCat]}</td>;
        })}
      </>
    );
  };
  
  return (
    <>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Bianca</th>
            <th>Brett</th>
            <th>Dave</th>
            <th>Dominic</th>
            <th>Michael</th>
            <th>Norbert</th>
            <th>Sam</th>
            <th>Sissel</th>
          </tr>
        </thead>
        <tbody>
          <tr>{renderRow('Best Picture', 'bestPicture')}</tr>
          <tr>{renderRow('Best Director', 'bestDirector')}</tr>
          <tr>{renderRow('Best Actress', 'bestActress')}</tr>
          <tr>{renderRow('Best Actor', 'bestActor')}</tr>
          <tr>{renderRow('Best Supporting Actress', 'bestSupportingActress')}</tr>
          <tr>{renderRow('Best Supporting Actor', 'bestSupportingActor')}</tr>
          <tr>{renderRow('Best Adapted Screenplay', 'bestAdaptedScreenplay')}</tr>
          <tr>{renderRow('Best Original Screenplay', 'bestOriginalScreenplay')}</tr>
          <tr>{renderRow('Best Costume Design', 'bestCostumeDesign')}</tr>
          <tr>{renderRow('Best Animated Feature Film', 'bestAnimatedFeatureFilm')}</tr>
          <tr>{renderRow('Best Makeup And Hairstyling', 'bestMakeupAndHairstyling')}</tr>
          <tr>{renderRow('Best Visual Effects', 'bestVisualEffects')}</tr>
        </tbody>
      </table>
    </>
  );
};

export default ResultsTable;