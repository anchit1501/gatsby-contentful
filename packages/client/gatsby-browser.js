/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it


// Always start at the top of the page on a route change.

exports.onRouteUpdate = (args) => {
    if (window && validatePath(args)) {
      window.scrollTo(0, 0);
    }
  };
  
  exports.shouldUpdateScroll = (args) => {
    //  scroll on < back, forward >, refresh, but not link clicks
    if (args && args.routerProps && args.routerProps.location && !args.routerProps.location.hash) {
      return false;
    }
    else {
      return true;
    }
  };
  
  /**
   * @method validatePath : this method use to validate the path
   * @param {object} args : contains the location property
   * @returns {boolean}   : it returns true or false
   */
  const validatePath = (args) => {
    /**
     * here we are going to check below property in location:-
     * (1) Hash (#): this check we are doing to navigate the scroll to the position
     *     of the element where hash tag defined.for example if use try to navigate to
     *     https://www.blu.com/de/DE/myblu#jetzt-kaufen then scroll should move to jetzt-kaufen
     *
     * (2) path (faqs): This check we are doing to save the current scroll position of page on
     * loading for different faq items.If the location contains faqs then we are not going to
     * move the scroll to top of the page on path change and hence due to gatsby saving
     *  behavior  of scroll position the scroll will remain on the same position
    */
    if (args && !args.location.hash && !(args.location.pathname.split('/').length > 3 && args.location.pathname.split('/')[3] === 'faqs')) {
      return true;
    }
  };
  