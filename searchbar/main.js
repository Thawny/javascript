import {initSearchPage, initNavbarSearch} from './searchspecies/searchspecies';


$(document).ready(function(){

    if (isSpeciessearchPage(window.location.href)) {
        initSearchPage();
        $("#rechercher").css("top", "5px").find('div').hide();
        $('#small-search-bar').hide();
    } else {
        initNavbarSearchAndListenToResize($(window).width());
    }

    function initNavbarSearchAndListenToResize(windowSize) {
        const $window = $(window);
        const initialState = windowSize > 991 ? "large" : "small";
        let prevState = initialState;
        let newState = initialState;
        initNavbarSearch(initialState);
        $window.resize(function() {
            const width = $window.width();
            newState = width > 991 ? "large" : "small";
            if (newState != prevState) {
                // initialize with newState if different from prevState
                if (newState != prevState) initNavbarSearch(newState)
                console.log(`initialized with state ${newState}`)
                prevState = newState;
            }
        })
    }
    function isSpeciessearchPage(location) {
        let regex = 'speciessearch' + '$';
        regex = new RegExp(regex, 'i');
        return regex.test(location)
    }


})


