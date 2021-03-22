import noms from './noms.js';

const userName = window.location.pathname.split('/')[1];
const userVotes = firebase.database().ref(`votes/${userName}`);

console.log('bestPictureNoms: ', noms.bestPictureNoms);

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
      <li>${renderCategory('best-picture', 'Best Picture', 'bestPicture', noms.bestPictureNoms)}</li>
      <li>${renderCategory('best-director', 'Best Director', 'bestDirector', noms.bestDirectorNoms)}</li>
      <li>${renderCategory('best-actress', 'Best Actress', 'bestActress', noms.bestActressNoms)}</li>
      <li>${renderCategory('best-actor', 'Best Actor', 'bestActor', noms.bestActorNoms)}</li>
      <li>${renderCategory('best-supporting-actress', 'Best Supporting Actress', 'bestSupportingActress', noms.bestSupportingActressNoms)}</li>
      <li>${renderCategory('best-supportingActor', 'Best SupportingActor', 'bestSupportingActor', noms.bestSupportingActorNoms)}</li>
      <li>${renderCategory('best-adapted-screenplay', 'Best Adapted Screenplay', 'bestAdaptedScreenplay', noms.bestAdaptedScreenplayNoms)}</li>
      <li>${renderCategory('best-original-sreenplay', 'Best Original Screenplay', 'bestOriginalScreenplay', noms.bestOriginalScreenplayNoms)}</li>
      <li>${renderCategory('best-costume-design', 'Best Costume Design', 'bestCostumeDesign', noms.bestCostumeDesignNoms)}</li>
      <li>${renderCategory('best-animated-feature-film', 'Best Animated Feature Film', 'bestAnimatedFeatureFilm', noms.bestAnimatedFeatureFilmNoms)}</li>
      <li>${renderCategory('best-makeup-and-hairstyling', 'Best Makeup And Hairstyling', 'bestMakeupAndHairstyling', noms.bestMakeupAndHairstylingNoms)}</li>
      <li>${renderCategory('best-visual-effects', 'Best Visual Effects', 'bestVisualEffects', noms.bestVisualEffectsNoms)}</li>
    </ul>
    <div>
      <button>Done!</button>
    </div>
  `;
  userVotesEl.innerHTML = userVotesContent;

  return userVotesEl;
};

export default renderVotes;