/**
MyTerrain Constructor
*/

class MyTerrain extends Plane
{
	constructor(scene, nrDivs, altimetry)
	{
		super(scene, 0, 5, 0, 5, nrDivs, altimetry);

		this.terrainAppearance = new CGFappearance(this.scene);
		this.terrainAppearance.setTextureWrap("REPEAT","REPEAT");
		this.terrainAppearance.loadTexture("../resources/images/terrain.png");

		this.sandAppearance = new CGFappearance(this.scene);
		this.sandAppearance.setTextureWrap("REPEAT","REPEAT");
		this.sandAppearance.loadTexture("../resources/images/sand.png");
		
	};

	display()
	{
		this.scene.pushMatrix();

			this.scene.rotate(-90 * degToRad, 1, 0, 0);
			
			this.scene.scale(50, 50, 1);
		
			if(this.scene.currTerrainAppearance == 'Dirt'|| this.scene.currTerrainAppearance == 0) this.terrainAppearance.apply();
			else this.sandAppearance.apply();

			super.display();
		this.scene.popMatrix();
	}
};