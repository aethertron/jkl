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
	name: 'goal',
    animSheet: new ig.AnimationSheet( 'media/items.png', 32, 32 ),
	
	//bounciness: 1,
	
	init: function( x, y, settings ) {
        this.addAnim( 'idle', 0.1, [7,8] );
		this.parent( x, y, settings );
	}
});

});