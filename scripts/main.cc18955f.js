console.log("'Allo 'Allo!"),$(document).ready(function(){"use strict";function a(){var a=$(window).width();"1200">a?$("#getFixed").hide():$("#getFixed").show()}$("a").smoothScroll(),$(window).resize(function(){a()}),$("#diplome").nanoGallery({itemsBaseURL:"./images",paginationMaxLinesPerPage:1,thumbnailWidth:165,thumbnailHeight:110}),a()});