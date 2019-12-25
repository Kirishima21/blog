const ABOUT = 'ABOUT';
function changeAbout(viewPages) {
  return {
    type: ABOUT,
    viewPages
  };
}