ig.module(
	'game.entities.goal'
)
.requires(
	'impact.entity'
)
.defines(function(){

EntityGoal = ig.Entity.extend({
	
	size: {x:32, y:32},
	collides: ig.Entity.COLLIDES.FIXED,
	
	//animSheet: new ig.AnimationSheet( 'media/shape.png', 32, 32 ),
	
	//bounciness: 1,
	
	init: function( x, y, settings ) {
		this.parent( x, y, settings );
	}
});

});