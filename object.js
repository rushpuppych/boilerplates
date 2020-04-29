/**
 * Main
 */
let Main = function(opt) {
    let $this = this;   // <- Class Selector
	let _private = {};	// <- Private Methodes
    let options = $.extend({ // <- Private Variables
		example: "data"
    }, typeof(opt)=='undefined'?{},opt)
    
	// Constructor
	this.init = () => {
		// Do Initial Stuff Here
		$this.eventManager();
    }
	
	/**
	 * EventManager
	 */
	this.eventManager = () => {
		// Register GUI Events here
		// $('#btn-blaa-click').on('click', this.callClickEventHandlerHere);
    }

    $this.init();
}

// Run this Class With:
// const main = new Main({example: 'test'});