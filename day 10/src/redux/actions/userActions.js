const checkCurrentUser = () => {
  if (localStorage.getItem('id') !== null) {
    return true;
  }
  return false;
};

export default checkCurrentUser;
