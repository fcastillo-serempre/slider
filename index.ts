/**
 * Creates a slider with slick plugin
 * @param {string} selector - use your class to apply slick
 * @param {object} options  - configure options in the slider
 * @example
 * slicker('.movie__gallery', {arrows: false});
 * @returns void
 *
 */
 ​
 function slider(selector, options = {}){
     jQuery(selector)
         .slick({
             arrows: true,
             centerMode: true,
             centerPadding: '40px',
             responsive: [
                 {
                     breakpoint: 2560,
                     settings: {
                         arrows: true,
                         centerMode: false,
                         centerPadding: '40px',
                         slidesToShow: 8
                     }
                 },
                 {
                     breakpoint: 769,
                     settings: {
                         arrows: true,
                         centerMode: true,
                         centerPadding: '40px',
                         slidesToShow: 3
                     }
                 }
             ],
             ...options
         }
     );
 }
 export default slider;