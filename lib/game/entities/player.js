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
	
	animSheet: new ig.AnimationSheet( 'media/shape.png', 32, 32 ),
	
	bounciness: 1,
	
	init: function( x, y, settings ) {
		this.parent( x, y, settings );
		
        this.addAnim( 'idle', 1, [0] );
	},
    
    update: function() {
        if( ig.input.state('up') ) {
            this.vel.y = -100;
        }
        else if( ig.input.state('down') ) {
            this.vel.y = 100;
        } else {
            this.vel.y = 0;
        }
        
        if( ig.input.state('right') ) {
            this.vel.x = 100;
        }
        else if( ig.input.state('left') ) {
            this.vel.x = -100;
        }
        else {
            this.vel.x = 0;
        }
        
        this.parent();
    }
});

});