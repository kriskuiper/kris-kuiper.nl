module.exports = async () => {
  /*
    Here we could fetch all site data like the navigation structure or something
    using a Headless CMS as the base. After that we can access the {{ site }} variable
    inside our templates since this file is called 'site.js'.
  */

  return {
    author: 'Kris Kuiper'
  }
}
