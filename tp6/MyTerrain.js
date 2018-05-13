/**
MyTerrain Constructor
*/

class MyTerrain extends Plane
{
	constructor(scene)
	{
		super(scene);

		this.terrain = new Plane(this.scene,0,5,0,5,50);

		this.terrainAppearance = new CGFappearance(this.scene);
		this.terrainAppearance.setTextureWrap("REPEAT","REPEAT");
		this.terrainAppearance.loadTexture("../resources/images/terrain.png");

		this.snowAppearance = new CGFappearance(this.scene);
		this.snowAppearance.setTextureWrap("REPEAT","REPEAT");
		this.snowAppearance.loadTexture("../resources/images/snow.png");

		this.sandAppearance = new CGFappearance(this.scene);
		this.sandAppearance.setTextureWrap("REPEAT","REPEAT");
		this.sandAppearance.loadTexture("../resources/images/sand.png");
		
	};

	display()
	{
		this.scene.pushMatrix();
			this.scene.translate(7.5, 0, 7.5);
			this.scene.rotate(-90 * degToRad, 1, 0, 0);
			this.scene.scale(50, 50, 0.2);
			//this.terrainAppearance.apply();

			if(this.scene.currTerrainAppearance == 'Dirt'|| this.scene.currTerrainAppearance == 0)
				this.terrainAppearance.apply();
			else if(this.scene.currTerrainAppearance == 'Snow')
				this.snowAppearance.apply();
			else if(this.scene.currTerrainAppearance == 'Sand')
				this.sandAppearance.apply();

			this.terrain.display();
		this.scene.popMatrix();
	}
};