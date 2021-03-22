const renderVotes = () => {
  const userVotesEl = document.createElement('form');
  userVotesEl.setAttribute('id', 'userVotes');
  
  const userVotesContent = `
    <ul>
      <li>
        <div>
          <label for="best-picture">Best Picture:</label>
          <select name="bestPicture" id="best-picture">
            <option value="">--Please Select a Winner!--</option>
            <option>The Father</option>
            <option>Judas and the Black Messiah</option>
            <option>Mank</option>
            <option>Minari</option>
            <option>Nomadland</option>
            <option>Promising Young Woman</option>
            <option>Sound of Metal</option>
            <option>The Trial of the Chicago 7</option>
          </select>
        </div>
      </li>
      <li>
        <div>
          <label for="best-director">Best Director:</label>
          <select name="bestDirector" id="best-director">
            <option value="">--Please Select a Winner!--</option>
            <option>David Fincher - Mank</option>
            <option>Lee Isaac Chung - Minari</option>
            <option>Chloé Zhao - Nomadland</option>
            <option>Emerald Fennell - Promising Young Woman</option>
          </select>
        </div>
      </li>
      <li>
        <div>
          <label for="best-actress">Best Actress:</label>
          <select name="bestActress" id="best-actress">
            <option value="">--Please Select a Winner!--</option>
            <option>Viola Davis - Ma Rainey’s Black Bottom</option>
            <option>Andra Day - The United States v. Billie Holiday</option>
            <option>Vanessa Kirby - Pieces of a Woman</option>
            <option>Frances McDormand - Nomadland</option>
            <option>Carey Mulligan - Promising Young Woman</option>
          </select>
        </div>
      </li>
      <li>
        <div>
          <label for="best-actor">Best Actor:</label>
          <select name="bestActor" id="best-actor">
            <option value="">--Please Select a Winner!--</option>
            <option>Riz Ahmed - Sound of Metal</option>
            <option>Chadwick Boseman - Ma Rainey’s Black Bottom</option>
            <option>Anthony Hopkins - The Father</option>
            <option>Gary Oldman - Mank</option>
            <option>Steven Yeun - Minari</option>
          </select>
        </div>
      </li>
      <li>
        <div>
          <label for="best-supporting-actress">Best Supporting Actress:</label>
          <select name="bestSupportingActress" id="best-supporting-actress">
            <option value="">--Please Select a Winner!--</option>
            <option>Maria Bakalova - Borat Subsequent Moviefilm</option>
            <option>Glenn Close - Hillbilly Elegy</option>
            <option>Olivia Colman - The Father</option>
            <option>Amanda Seyfried - Mank</option>
            <option>Youn Yuh-jung - Minari</option>
          </select>
        </div>
      </li>
      <li>
        <div>
          <label for="best-supporting-actor">Best Supporting Actor:</label>
          <select name="bestSupportingActor" id="best-supporting-actor">
            <option value="">--Please Select a Winner!--</option>
            <option>Sacha Baron Cohen - The Trial of the Chicago 7</option>
            <option>Daniel Kaluuya - Judas and the Black Messiah</option>
            <option>Leslie Odom Jr. - One Night in Miami</option>
            <option>Paul Raci - Sound of Metal</option>
            <option>Lakeith Stanfield - Judas and the Black Messiah</option>
          </select>
        </div>
      </li>
      <li>
        <div>
          <label for="best-adapted-screenplay">Best Adapted Screenplay:</label>
          <select name="bestAdaptedScreenplay" id="best-adapted-screenplay">
            <option value="">--Please Select a Winner!--</option>
            <option>Borat Subsequent Moviefilm - Peter Baynham, Sacha Baron Cohen, Jena Friedman, Anthony Hines, Lee Kern, Dan Mazer, Nina Pedrad, Erica Rivinoja, Dan Swimer</option>
            <option>The Father - Christopher Hampton, Florian Zeller</option>
            <option>Nomadland - Chloé Zhao</option>
            <option>One Night in Miami - Kemp Powers</option>
            <option>The White Tiger - Ramin Bahrani</option>
          </select>
        </div>
      </li>
      <li>
        <div>
          <label for="best-original-screenplay">Best Original Screenplay:</label>
          <select name="bestOriginalScreenplay" id="best-original-screenplay">
            <option value="">--Please Select a Winner!--</option>
            <option>Judas and the Black Messiah - Will Berson, Shaka King, Keith Lucas, Kenneth Lucas</option>
            <option>Minari - Lee Isaac Chung</option>
            <option>Promising Young Woman - Emerald Fennell</option>
            <option>Sound of Metal - Abraham Marder, Darius Marder, Derek Cianfrance</option>
            <option>The Trial of the Chicago 7 - Aaron Sorkin</option>
          </select>
        </div>
      </li>
      <li>
        <div>
          <label for="best-costume-design">Best Costume Design:</label>
          <select name="bestCostumeDesign" id="best-costume-design">
            <option value="">--Please Select a Winner!--</option>
            <option>Emma</option>
            <option>Mank</option>
            <option>Ma Rainey’s Black Bottom</option>
            <option>Mulan</option>
            <option>Pinocchio</option>
          </select>
        </div>
      </li>
      <li>
        <div>
          <label for="best-animated-feature-film">Best Animated Feature Film:</label>
          <select name="bestAnimatedFeatureFilm" id="best-animated-feature-film">
            <option value="">--Please Select a Winner!--</option>
            <option>Onward</option>
            <option>Over the Moon</option>
            <option>Shaun the Sheep Movie: Farmageddon</option>
            <option>Soul</option>
            <option>Wolfwalkers</option>
          </select>
        </div>
      </li>
      <li>
        <div>
          <label for="best-makeup-and-hairstyling">Best Makeup and Hairstyling:</label>
          <select name="bestMakeupAndHairstyling" id="best-makeup-and-hairstyling">
            <option value="">--Please Select a Winner!--</option>
            <option>Emma</option>
            <option>Hillbilly Elegy</option>
            <option>Ma Rainey’s Black Bottom</option>
            <option>Mank, Kimberley Spiteri</option>
            <option>Pinocchio</option>
          </select>
        </div>
      </li>
      <li>
        <div>
          <label for="best-visual-effects">Best Visual Effects:</label>
          <select name="bestVisualEffects" id="best-visual-effects">
            <option value="">--Please Select a Winner!--</option>
            <option>Love and Monsters</option>
            <option>The Midnight Sky</option>
            <option>Mulan</option>
            <option>The One and Only Ivan</option>
            <option>Tenet</option>
          </select>
        </div>
      </li>
    </ul>
    <div>
      <button>Done!</button>
    </div>
  `;
  userVotesEl.innerHTML = userVotesContent;

  return userVotesEl;
};

export default renderVotes;