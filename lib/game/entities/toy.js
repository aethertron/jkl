ig.module(
	'game.entities.toy'
)
.requires(
	'impact.entity'
)
.defines(function(){

EntityToy = ig.Entity.extend({
	
	size: {x:16, y:16},

    friction: {x:100, y:100},
	collides: ig.Entity.COLLIDES.ACTIVE,
    form: 0,
	
	animSheet: new ig.AnimationSheet( 'media/items.png', 32, 32 ),
	
	bounciness: 0.75,
	
	init: function( x, y, settings ) {
		this.parent( x, y, settings );
        this.offset.x = 8;
        this.offset.y = 8;
        this.addAnim( 'idle', 1.2, [this.form] );
        this.vel.x = -50;
	}
});

});