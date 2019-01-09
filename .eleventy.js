module.exports = function(eleventyConfig) {
  eleventyConfig.addNunjucksFilter('dateFormat', date => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    return date.toLocaleDateString('en-SG', options)
  })

  return {
    dir: {
      input: 'src/views',
      output: 'dist'
    }
  }
}
