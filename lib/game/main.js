ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.font',
    
    'game.entities.player',
    'game.entities.toy',
    
    'game.levels.room1',
    'game.levels.end'
)
.defines(function(){

var screenWidth = 320,
    screenHeight = 256;
var gameState = 'title';
var player = '';

MyGame = ig.Game.extend({
	
	// Load a font
	font: new ig.Font( 'media/04b03.font.png' ),
	
	init: function() {
		ig.input.bind( ig.KEY.UP_ARROW, 'up' );
		ig.input.bind( ig.KEY.DOWN_ARROW, 'down' );
		ig.input.bind( ig.KEY.LEFT_ARROW, 'left' );
		ig.input.bind( ig.KEY.RIGHT_ARROW, 'right' );
        
        
	},
	
	update: function() {
		// Update all entities and backgroundMaps
		this.parent();
        
		// Add your own, additional update code here
        
        if (gameState === 'game') {
        
            // flick scrolling
            if ( player.vel.x != 0 ) {
                ig.game.screen.x = screenWidth * ( Math.floor( (player.pos.x + 12) / screenWidth) );
            }
            if ( player.vel.y != 0 ) {
                ig.game.screen.y = screenHeight * ( Math.floor( (player.pos.y + 12) / screenHeight) );
            }
        
        }
        
        if (gameState === 'title') {
            if ( ig.input.state('up') ) {
                this.loadLevel( LevelRoom1 );
                player = ig.game.getEntitiesByType( EntityPlayer )[0];
                gameState = 'game';
                
                // this.loadLevel( LevelEnd );
                // gameState = 'end';
            }
        }
        
        if (gameState === 'end') {
            //f
        }
	},
	
	draw: function() {
		// Draw all entities and backgroundMaps
		this.parent();
		
		
		// Add your own drawing code here
		var x = ig.system.width/2,
			y = ig.system.height/2;
		
        if (gameState === 'title') {
            this.font.draw( 'LD26 game\nPress [UP] to start', x, y, ig.Font.ALIGN.CENTER );
        }
	}
});


// Start the Game with 60fps, a resolution of 320x240, scaled
// up by a factor of 2
ig.main( '#canvas', MyGame, 60, screenWidth, screenHeight, 2 );

});
