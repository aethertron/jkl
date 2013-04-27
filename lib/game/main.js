ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.font',
    
    'game.entities.player',
    'game.entities.toy',
    
    'game.levels.room1'
)
.defines(function(){

var screenWidth = 320,
    screenHeight = 256;

MyGame = ig.Game.extend({
	
	// Load a font
	font: new ig.Font( 'media/04b03.font.png' ),
	
	init: function() {
		ig.input.bind( ig.KEY.UP_ARROW, 'up' );
		ig.input.bind( ig.KEY.DOWN_ARROW, 'down' );
		ig.input.bind( ig.KEY.LEFT_ARROW, 'left' );
		ig.input.bind( ig.KEY.RIGHT_ARROW, 'right' );
        
        this.loadLevel( LevelRoom1 );
	},
	
	update: function() {
		// Update all entities and backgroundMaps
		this.parent();
        
		// Add your own, additional update code here
		var player = ig.game.getEntitiesByType( EntityPlayer )[0];
        if ( player.vel.x != 0 ) {
            ig.game.screen.x = screenWidth * ( Math.floor( player.pos.x / screenWidth) );
        }
        if ( player.vel.y != 0 ) {
            ig.game.screen.y = screenHeight * ( Math.floor( player.pos.y / screenHeight) );
        }
	},
	
	draw: function() {
		// Draw all entities and backgroundMaps
		this.parent();
		
		
		// Add your own drawing code here
		var x = ig.system.width/2,
			y = ig.system.height/2;
		
		//this.font.draw( 'It Works!', x, y, ig.Font.ALIGN.CENTER );
	}
});


// Start the Game with 60fps, a resolution of 320x240, scaled
// up by a factor of 2
ig.main( '#canvas', MyGame, 60, screenWidth, screenHeight, 2 );

});
