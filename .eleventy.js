const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  // Serve CSS and any static assets as-is
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/fonts");
  eleventyConfig.addPassthroughCopy({ "src/static": "/" }); // favicon, robots.txt, etc.

  // Blog post collection, newest first
  eleventyConfig.addCollection("posts", (collectionApi) => {
    return collectionApi.getFilteredByGlob("src/posts/*.md").reverse();
  });

  // Human-readable date filter, e.g. "March 4, 2026"
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("MMMM d, yyyy");
  });

  // Machine-readable date filter for <time datetime="">
  eleventyConfig.addFilter("isoDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toISODate();
  });

  // Estimated reading time, ~200 wpm
  eleventyConfig.addFilter("readingTime", (content) => {
    const words = content.trim().split(/\s+/).length;
    return Math.max(1, Math.round(words / 200));
  });

  // Current year for the footer copyright line
  eleventyConfig.addGlobalData("currentYear", () => new Date().getFullYear());

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
