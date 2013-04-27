ig.module(
	'game.entities.toy'
)
.requires(
	'impact.entity'
)
.defines(function(){

EntityToy = ig.Entity.extend({
	
	size: {x:32, y:32},
    friction: {x:100, y:100},
	collides: ig.Entity.COLLIDES.ACTIVE,
	
	animSheet: new ig.AnimationSheet( 'media/shape.png', 32, 32 ),
	
	bounciness: 0.75,
	
	init: function( x, y, settings ) {
		this.parent( x, y, settings );
		
        this.addAnim( 'idle', 0.2, [0,0,0,1,2,3,3,2,2,1,1,0,0,0] );
        this.vel.x = -50;
	}
});

});