$(document).ready(function () {

	var colors = [
		{r: 242, g: 56, b: 90},
		{r: 245, g: 165, b: 3},
		{r: 233, g: 241, b: 223},
		{r: 74, g: 217, b: 217},
		{r: 54, g: 177, b: 191}
	]

	var initialized = false;
	var waves = []

	function initializeWaves () {
		for (var i = 0; i < colors.length; i++) {
			$('header').hide();
			$('#main').show();
			initialized = true;
			var wave = new Wave(colors[i].r, colors[i].g, colors[i].b)
			wave.initializeLines();
			wave.renderLines();
			waves.push(wave);
		}
	}

	function resetRotation () {
		for (var i = 0; i < waves.length; i++) {
			waves[i].rotate();
		}
	}

	$(document).on('keyup', function (e) {
		if (e.keyCode === 13) {
			if (!initialized) {
				initializeWaves();
			}
			resetRotation();
		}
	});
});