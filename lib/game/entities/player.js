ig.module(
	'game.entities.player'
)
.requires(
	'impact.entity'
)
.defines(function(){

EntityPlayer = ig.Entity.extend({
	
	size: {x:24, y:24},
	collides: ig.Entity.COLLIDES.ACTIVE,
	name: 'player',
	animSheet: new ig.AnimationSheet( 'media/creature.png', 32, 32 ),
	
	bounciness: 1,
	
	init: function( x, y, settings ) {
		this.parent( x, y, settings );
		this.offset.x = 4;
		this.offset.y = 4;
        this.addAnim( 'idle', 1, [1] );
        this.addAnim( 'walkX', .2, [0,1,2,1] );
        this.addAnim( 'walkY', .2, [3,4,5,4] );
	},
    
    update: function() {
        if( ig.input.state('up') ) {
            this.vel.y = -100;
            this.currentAnim = this.anims.walkY;
        }
        else if( ig.input.state('down') ) {
            this.vel.y = 100;
            this.currentAnim = this.anims.walkY;
        } else {
            this.vel.y = 0;
        }
        
        if( ig.input.state('right') ) {
            this.vel.x = 100;
            this.currentAnim = this.anims.walkX;
        }
        else if( ig.input.state('left') ) {
            this.vel.x = -100;
            this.currentAnim = this.anims.walkX;
        }
        else {
            this.vel.x = 0;
        }
        
        if ( this.vel.x === 0 && this.vel.y === 0 ) {
            this.currentAnim = this.anims.idle;
        }
        
        this.parent();
    },
    
    collideWith: function(other, axis) {
        if (other.name === 'goal') {
            ig.game.loadLevelDeferred( LevelEnd );
            gameState = 'end';
        }
    }
});



});