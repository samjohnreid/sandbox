/*
1. get data for votes for individual user
2. for each category, create the label and select, inserting `for`, `id`, `name` and label text
3. loop through nominations and render `options` for each
4. check if nomination already chosen and if so, use as selected
*/

const userName = window.location.pathname.split('/')[1];
const userVotes = firebase.database().ref(`votes/${userName}`);

const bestPictureNoms = [
  `The Father`,
  `Judas and the Black Messiah`,
  `Mank`,
  `Minari`,
  `Nomadland`,
  `Promising Young Woman`,
  `Sound of Metal`,
  `The Trial of the Chicago 7`
];

const bestDirectorNoms = [
  `David Fincher - Mank`,
  `Lee Isaac Chung - Minari`,
  `Chloé Zhao - Nomadland`,
  `Emerald Fennell - Promising Young Woman`
];

const bestActressNoms = [
  `Viola Davis - Ma Rainey’s Black Bottom`,
  `Andra Day - The United States v. Billie Holiday`,
  `Vanessa Kirby - Pieces of a Woman`,
  `Frances McDormand - Nomadland`,
  `Carey Mulligan - Promising Young Woman`
];

const bestActorNoms = [
  `Riz Ahmed - Sound of Metal`,
  `Chadwick Boseman - Ma Rainey’s Black Bottom`,
  `Anthony Hopkins - The Father`,
  `Gary Oldman - Mank`,
  `Steven Yeun - Minari`
];

const bestSupportingActressNoms = [
  `Maria Bakalova - Borat Subsequent Moviefilm`,
  `Glenn Close - Hillbilly Elegy`,
  `Olivia Colman - The Father`,
  `Amanda Seyfried - Mank`,
  `Youn Yuh-jung - Minari`
];

const bestSupportingActorNoms = [
  `Sacha Baron Cohen - The Trial of the Chicago 7`,
  `Daniel Kaluuya - Judas and the Black Messiah`,
  `Leslie Odom Jr. - One Night in Miami`,
  `Paul Raci - Sound of Metal`,
  `Lakeith Stanfield - Judas and the Black Messiah`
];

const bestAdaptedScreenplayNoms = [
  `Borat Subsequent Moviefilm - Peter Baynham, Sacha Baron Cohen, Jena Friedman, Anthony Hines, Lee Kern, Dan Mazer, Nina Pedrad, Erica Rivinoja, Dan Swimer`,
  `The Father - Christopher Hampton, Florian Zeller`,
  `Nomadland - Chloé Zhao`,
  `One Night in Miami - Kemp Powers`,
  `The White Tiger - Ramin Bahrani`
];

const bestOriginalScreenplayNoms = [
  `Judas and the Black Messiah - Will Berson, Shaka King, Keith Lucas, Kenneth Lucas`,
  `Minari - Lee Isaac Chung`,
  `Promising Young Woman - Emerald Fennell`,
  `Sound of Metal - Abraham Marder, Darius Marder, Derek Cianfrance`,
  `The Trial of the Chicago 7 - Aaron Sorkin`
];

const bestCostumeDesignNoms = [
  `Emma`,
  `Mank`,
  `Ma Rainey’s Black Bottom`,
  `Mulan`,
  `Pinocchio`
];

const bestAnimatedFeatureFilmNoms = [
  `Onward`,
  `Over the Moon`,
  `Shaun the Sheep Movie: Farmageddon`,
  `Soul`,
  `Wolfwalkers`
];

const bestMakeupAndHairstylingNoms = [
  `Emma`,
  `Hillbilly Elegy`,
  `Ma Rainey’s Black Bottom`,
  `Mank, Kimberley Spiteri`,
  `Pinocchio`
];

const bestVisualEffectsNoms = [
  `Love and Monsters`,
  `The Midnight Sky`,
  `Mulan`,
  `The One and Only Ivan`,
  `Tenet`
];

console.log('bestPictureNoms: ', bestPictureNoms);

const logVotes = (data) => {
  console.log('user votes: ', data);
};

userVotes.on('value', (snapshot) => {
  const votesSnapshot = snapshot.val();
  logVotes(votesSnapshot);
});

const renderCategory = (forAndId, label, name, category) => {
  return `
    <div>
      <label for="${forAndId}">${label}:</label>
      <select name="${name}" id="${forAndId}">
        <option value="">--Please Select a Winner!--</option>
        ${category.map((item) => {
          return `<option>${item}</option>`;
        }).join('')}
      </select>
    </div>
  `;
};

const renderVotes = () => {
  const userVotesEl = document.createElement('form');
  userVotesEl.setAttribute('id', 'userVotes');
  
  const userVotesContent = `
    <ul>
      <li>${renderCategory('best-picture', 'Best Picture', 'bestPicture', bestPictureNoms)}</li>
      <li>${renderCategory('best-director', 'Best Director', 'bestDirector', bestDirectorNoms)}</li>
      <li>${renderCategory('best-actress', 'Best Actress', 'bestActress', bestActressNoms)}</li>
      <li>${renderCategory('best-actor', 'Best Actor', 'bestActor', bestActorNoms)}</li>
      <li>${renderCategory('best-supporting-actress', 'Best Supporting Actress', 'bestSupportingActress', bestSupportingActressNoms)}</li>
      <li>${renderCategory('best-supportingActor', 'Best SupportingActor', 'bestSupportingActor', bestSupportingActorNoms)}</li>
      <li>${renderCategory('best-adapted-screenplay', 'Best Adapted Screenplay', 'bestAdaptedScreenplay', bestAdaptedScreenplayNoms)}</li>
      <li>${renderCategory('best-original-sreenplay', 'Best Original Screenplay', 'bestOriginalScreenplay', bestOriginalScreenplayNoms)}</li>
      <li>${renderCategory('best-costume-design', 'Best Costume Design', 'bestCostumeDesign', bestCostumeDesignNoms)}</li>
      <li>${renderCategory('best-animated-feature-film', 'Best Animated Feature Film', 'bestAnimatedFeatureFilm', bestAnimatedFeatureFilmNoms)}</li>
      <li>${renderCategory('best-makeup-and-hairstyling', 'Best Makeup And Hairstyling', 'bestMakeupAndHairstyling', bestMakeupAndHairstylingNoms)}</li>
      <li>${renderCategory('best-visual-effects', 'Best Visual Effects', 'bestVisualEffects', bestVisualEffectsNoms)}</li>
    </ul>
    <div>
      <button>Done!</button>
    </div>
  `;
  userVotesEl.innerHTML = userVotesContent;

  return userVotesEl;
};

export default renderVotes;