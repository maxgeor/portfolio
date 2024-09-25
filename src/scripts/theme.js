(function() {
  function getTheme() {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme');
    }
    return 'dark'; // default theme
  }

  const theme = getTheme();

  if (theme === 'light') {
    document.documentElement.classList.remove('dark');
  } else {
    document.documentElement.classList.add('dark');
  }

  window.localStorage.setItem('theme', theme);
})();