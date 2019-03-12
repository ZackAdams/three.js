/**
 * @author fernandojsg / http://fernandojsg.com
 */

function WebGLTransformFeedback( material, mesh, renderer ) {

	this.material = material;
	this.mesh = mesh;

	this.source = this.mesh.geometry;
	this.target = this.source.clone();

	this.renderer = renderer;

}

WebGLTransformFeedback.prototype = {

	tick: function (scene, camera) {

		this.renderer.processTransformFeedback( this.source, this.target, this.material, scene, camera );

		this.mesh.geometry = this.target;

		// Ping pong buffers
		this.target = this.source;
		this.source = this.mesh.geometry;

	}

};

export { WebGLTransformFeedback };
